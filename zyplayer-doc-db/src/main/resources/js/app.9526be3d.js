(function (e) {
    function t(t) {
        for (var n, r, a = t[0], l = t[1], c = t[2], u = 0, d = []; u < a.length; u++) r = a[u], Object.prototype.hasOwnProperty.call(s, r) && s[r] && d.push(s[r][0]), s[r] = 0;
        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
        h && h(t);
        while (d.length) d.shift()();
        return o.push.apply(o, c || []), i()
    }

    function i() {
        for (var e, t = 0; t < o.length; t++) {
            for (var i = o[t], n = !0, a = 1; a < i.length; a++) {
                var l = i[a];
                0 !== s[l] && (n = !1)
            }
            n && (o.splice(t--, 1), e = r(r.s = i[0]))
        }
        return e
    }

    var n = {}, s = {app: 0}, o = [];

    function r(t) {
        if (n[t]) return n[t].exports;
        var i = n[t] = {i: t, l: !1, exports: {}};
        return e[t].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }

    r.m = e, r.c = n, r.d = function (e, t, i) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
    }, r.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var n in e) r.d(i, n, function (t) {
            return e[t]
        }.bind(null, n));
        return i
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "";
    var a = window["webpackJsonp"] = window["webpackJsonp"] || [], l = a.push.bind(a);
    a.push = t, a = a.slice();
    for (var c = 0; c < a.length; c++) t(a[c]);
    var h = l;
    o.push([0, "chunk-vendors"]), i()
})({
    0: function (e, t, i) {
        e.exports = i("56d7")
    }, "034f": function (e, t, i) {
        "use strict";
        var n = i("85ec"), s = i.n(n);
        s.a
    }, "0d0e": function (e, t, i) {
        "use strict";
        var n = i("fb92"), s = i.n(n);
        s.a
    }, "0ea6": function (e, t, i) {
    }, "21eb": function (e, t, i) {
    }, 3271: function (e, t, i) {
        "use strict";
        (function (e) {
            i("99af"), i("a623"), i("4de4"), i("7db0"), i("4160"), i("c975"), i("a15b"), i("baa5"), i("d81d"), i("13d5"), i("f4dd"), i("26e9"), i("fb6a"), i("45fc"), i("4e82"), i("a434"), i("f4b3"), i("0d03"), i("b0c0"), i("a9e3"), i("b680"), i("12a8"), i("e71b"), i("dca8"), i("e439"), i("7039"), i("3410"), i("c906"), i("e21d"), i("e43e"), i("b64b"), i("bf96"), i("5bf7"), i("cee8"), i("af93"), i("d3b7"), i("acd8"), i("e25e"), i("4d63"), i("ac1f"), i("25f0"), i("3ca3"), i("466d"), i("5319"), i("841c"), i("1276"), i("498a"), i("18a5"), i("159b"), i("ddb0"), i("2b3d"), i("bf19");
            var t = i("bf2d");
            (function () {
                var e = "", t = function () {
                    return this
                }();
                if (t || "undefined" == typeof window || (t = window), e || "undefined" === typeof requirejs) {
                    var i = function e(t, i, n) {
                        "string" === typeof t ? (2 == arguments.length && (n = i), e.modules[t] || (e.payloads[t] = n, e.modules[t] = null)) : e.original ? e.original.apply(this, arguments) : (console.error("dropping module because define wasn't a string."), console.trace())
                    };
                    i.modules = {}, i.payloads = {};
                    var n = function (e, t, i) {
                        if ("string" === typeof t) {
                            var n = r(e, t);
                            if (void 0 != n) return i && i(), n
                        } else if ("[object Array]" === Object.prototype.toString.call(t)) {
                            for (var o = [], a = 0, l = t.length; a < l; ++a) {
                                var c = r(e, t[a]);
                                if (void 0 == c && s.original) return;
                                o.push(c)
                            }
                            return i && i.apply(null, o) || !0
                        }
                    }, s = function e(t, i) {
                        var s = n("", t, i);
                        return void 0 == s && e.original ? e.original.apply(this, arguments) : s
                    }, o = function e(t, i) {
                        if (-1 !== i.indexOf("!")) {
                            var n = i.split("!");
                            return e(t, n[0]) + "!" + e(t, n[1])
                        }
                        if ("." == i.charAt(0)) {
                            var s = t.split("/").slice(0, -1).join("/");
                            i = s + "/" + i;
                            while (-1 !== i.indexOf(".") && o != i) {
                                var o = i;
                                i = i.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "")
                            }
                        }
                        return i
                    }, r = function (e, t) {
                        t = o(e, t);
                        var s = i.modules[t];
                        if (!s) {
                            if (s = i.payloads[t], "function" === typeof s) {
                                var r = {}, a = {id: t, uri: "", exports: r, packaged: !0}, l = function (e, i) {
                                    return n(t, e, i)
                                }, c = s(l, r, a);
                                r = c || a.exports, i.modules[t] = r, delete i.payloads[t]
                            }
                            s = i.modules[t] = r || s
                        }
                        return s
                    };
                    a(e)
                }

                function a(e) {
                    var n = t;
                    e && (t[e] || (t[e] = {}), n = t[e]), n.deAceFine && n.deAceFine.packaged || (i.original = n.deAceFine, n.deAceFine = i, n.deAceFine.packaged = !0), n.require && n.require.packaged || (s.original = n.require, n.require = s, n.require.packaged = !0)
                }
            })(), deAceFine("ace/lib/regexp", ["require", "exports", "module"], (function (e, t, i) {
                var n = {
                    exec: RegExp.prototype.exec,
                    test: RegExp.prototype.test,
                    match: String.prototype.match,
                    replace: String.prototype.replace,
                    split: String.prototype.split
                }, s = void 0 === n.exec.call(/()??/, "")[1], o = function () {
                    var e = /^/g;
                    return n.test.call(e, ""), !e.lastIndex
                }();

                function r(e) {
                    return (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : "")
                }

                function a(e, t, i) {
                    if (Array.prototype.indexOf) return e.indexOf(t, i);
                    for (var n = i || 0; n < e.length; n++) if (e[n] === t) return n;
                    return -1
                }

                o && s || (RegExp.prototype.exec = function (e) {
                    var t, i, l = n.exec.apply(this, arguments);
                    if ("string" == typeof e && l) {
                        if (!s && l.length > 1 && a(l, "") > -1 && (i = RegExp(this.source, n.replace.call(r(this), "g", "")), n.replace.call(e.slice(l.index), i, (function () {
                            for (var e = 1; e < arguments.length - 2; e++) void 0 === arguments[e] && (l[e] = void 0)
                        }))), this._xregexp && this._xregexp.captureNames) for (var c = 1; c < l.length; c++) t = this._xregexp.captureNames[c - 1], t && (l[t] = l[c]);
                        !o && this.global && !l[0].length && this.lastIndex > l.index && this.lastIndex--
                    }
                    return l
                }, o || (RegExp.prototype.test = function (e) {
                    var t = n.exec.call(this, e);
                    return t && this.global && !t[0].length && this.lastIndex > t.index && this.lastIndex--, !!t
                }))
            })), deAceFine("ace/lib/es5-shim", ["require", "exports", "module"], (function (e, i, n) {
                function s() {
                }

                Function.prototype.bind || (Function.prototype.bind = function (e) {
                    var t = this;
                    if ("function" != typeof t) throw new TypeError("Function.prototype.bind called on incompatible " + t);
                    var i = g.call(arguments, 1), n = function n() {
                        if (this instanceof n) {
                            var s = t.apply(this, i.concat(g.call(arguments)));
                            return Object(s) === s ? s : this
                        }
                        return t.apply(e, i.concat(g.call(arguments)))
                    };
                    return t.prototype && (s.prototype = t.prototype, n.prototype = new s, s.prototype = null), n
                });
                var o, r, a, l, c, h = Function.prototype.call, u = Array.prototype, d = Object.prototype, g = u.slice,
                    f = h.bind(d.toString), p = h.bind(d.hasOwnProperty);
                if ((c = p(d, "__defineGetter__")) && (o = h.bind(d.__defineGetter__), r = h.bind(d.__defineSetter__), a = h.bind(d.__lookupGetter__), l = h.bind(d.__lookupSetter__)), 2 != [1, 2].splice(0).length) if (function () {
                    function e(e) {
                        var t = new Array(e + 2);
                        return t[0] = t[1] = 0, t
                    }

                    var t, i = [];
                    if (i.splice.apply(i, e(20)), i.splice.apply(i, e(26)), t = i.length, i.splice(5, 0, "XXX"), i.length, t + 1 == i.length) return !0
                }()) {
                    var m = Array.prototype.splice;
                    Array.prototype.splice = function (e, t) {
                        return arguments.length ? m.apply(this, [void 0 === e ? 0 : e, void 0 === t ? this.length - e : t].concat(g.call(arguments, 2))) : []
                    }
                } else Array.prototype.splice = function (e, t) {
                    var i = this.length;
                    e > 0 ? e > i && (e = i) : void 0 == e ? e = 0 : e < 0 && (e = Math.max(i + e, 0)), e + t < i || (t = i - e);
                    var n = this.slice(e, e + t), s = g.call(arguments, 2), o = s.length;
                    if (e === i) o && this.push.apply(this, s); else {
                        var r = Math.min(t, i - e), a = e + r, l = a + o - r, c = i - a, h = i - r;
                        if (l < a) for (var u = 0; u < c; ++u) this[l + u] = this[a + u]; else if (l > a) for (u = c; u--;) this[l + u] = this[a + u];
                        if (o && e === h) this.length = h, this.push.apply(this, s); else for (this.length = h + o, u = 0; u < o; ++u) this[e + u] = s[u]
                    }
                    return n
                };
                Array.isArray || (Array.isArray = function (e) {
                    return "[object Array]" == f(e)
                });
                var v, w = Object("a"), b = "a" != w[0] || !(0 in w);
                if (Array.prototype.forEach || (Array.prototype.forEach = function (e) {
                    var t = O(this), i = b && "[object String]" == f(this) ? this.split("") : t, n = arguments[1],
                        s = -1, o = i.length >>> 0;
                    if ("[object Function]" != f(e)) throw new TypeError;
                    while (++s < o) s in i && e.call(n, i[s], s, t)
                }), Array.prototype.map || (Array.prototype.map = function (e) {
                    var t = O(this), i = b && "[object String]" == f(this) ? this.split("") : t, n = i.length >>> 0,
                        s = Array(n), o = arguments[1];
                    if ("[object Function]" != f(e)) throw new TypeError(e + " is not a function");
                    for (var r = 0; r < n; r++) r in i && (s[r] = e.call(o, i[r], r, t));
                    return s
                }), Array.prototype.filter || (Array.prototype.filter = function (e) {
                    var t, i = O(this), n = b && "[object String]" == f(this) ? this.split("") : i, s = n.length >>> 0,
                        o = [], r = arguments[1];
                    if ("[object Function]" != f(e)) throw new TypeError(e + " is not a function");
                    for (var a = 0; a < s; a++) a in n && (t = n[a], e.call(r, t, a, i) && o.push(t));
                    return o
                }), Array.prototype.every || (Array.prototype.every = function (e) {
                    var t = O(this), i = b && "[object String]" == f(this) ? this.split("") : t, n = i.length >>> 0,
                        s = arguments[1];
                    if ("[object Function]" != f(e)) throw new TypeError(e + " is not a function");
                    for (var o = 0; o < n; o++) if (o in i && !e.call(s, i[o], o, t)) return !1;
                    return !0
                }), Array.prototype.some || (Array.prototype.some = function (e) {
                    var t = O(this), i = b && "[object String]" == f(this) ? this.split("") : t, n = i.length >>> 0,
                        s = arguments[1];
                    if ("[object Function]" != f(e)) throw new TypeError(e + " is not a function");
                    for (var o = 0; o < n; o++) if (o in i && e.call(s, i[o], o, t)) return !0;
                    return !1
                }), Array.prototype.reduce || (Array.prototype.reduce = function (e) {
                    var t = O(this), i = b && "[object String]" == f(this) ? this.split("") : t, n = i.length >>> 0;
                    if ("[object Function]" != f(e)) throw new TypeError(e + " is not a function");
                    if (!n && 1 == arguments.length) throw new TypeError("reduce of empty array with no initial value");
                    var s, o = 0;
                    if (arguments.length >= 2) s = arguments[1]; else do {
                        if (o in i) {
                            s = i[o++];
                            break
                        }
                        if (++o >= n) throw new TypeError("reduce of empty array with no initial value")
                    } while (1);
                    for (; o < n; o++) o in i && (s = e.call(void 0, s, i[o], o, t));
                    return s
                }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function (e) {
                    var t = O(this), i = b && "[object String]" == f(this) ? this.split("") : t, n = i.length >>> 0;
                    if ("[object Function]" != f(e)) throw new TypeError(e + " is not a function");
                    if (!n && 1 == arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
                    var s, o = n - 1;
                    if (arguments.length >= 2) s = arguments[1]; else do {
                        if (o in i) {
                            s = i[o--];
                            break
                        }
                        if (--o < 0) throw new TypeError("reduceRight of empty array with no initial value")
                    } while (1);
                    do {
                        o in this && (s = e.call(void 0, s, i[o], o, t))
                    } while (o--);
                    return s
                }), Array.prototype.indexOf && -1 == [0, 1].indexOf(1, 2) || (Array.prototype.indexOf = function (e) {
                    var t = b && "[object String]" == f(this) ? this.split("") : O(this), i = t.length >>> 0;
                    if (!i) return -1;
                    var n = 0;
                    for (arguments.length > 1 && (n = F(arguments[1])), n = n >= 0 ? n : Math.max(0, i + n); n < i; n++) if (n in t && t[n] === e) return n;
                    return -1
                }), Array.prototype.lastIndexOf && -1 == [0, 1].lastIndexOf(0, -3) || (Array.prototype.lastIndexOf = function (e) {
                    var t = b && "[object String]" == f(this) ? this.split("") : O(this), i = t.length >>> 0;
                    if (!i) return -1;
                    var n = i - 1;
                    for (arguments.length > 1 && (n = Math.min(n, F(arguments[1]))), n = n >= 0 ? n : i - Math.abs(n); n >= 0; n--) if (n in t && e === t[n]) return n;
                    return -1
                }), Object.getPrototypeOf || (Object.getPrototypeOf = function (e) {
                    return e.__proto__ || (e.constructor ? e.constructor.prototype : d)
                }), !Object.getOwnPropertyDescriptor) {
                    var y = "Object.getOwnPropertyDescriptor called on a non-object: ";
                    Object.getOwnPropertyDescriptor = function (e, i) {
                        if ("object" != Object(t["a"])(e) && "function" != typeof e || null === e) throw new TypeError(y + e);
                        if (p(e, i)) {
                            var n;
                            if (n = {enumerable: !0, configurable: !0}, c) {
                                var s = e.__proto__;
                                e.__proto__ = d;
                                var o = a(e, i), r = l(e, i);
                                if (e.__proto__ = s, o || r) return o && (n.get = o), r && (n.set = r), n
                            }
                            return n.value = e[i], n
                        }
                    }
                }
                (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function (e) {
                    return Object.keys(e)
                }), Object.create) || (v = null === Object.prototype.__proto__ ? function () {
                    return {__proto__: null}
                } : function () {
                    var e = {};
                    for (var t in e) e[t] = null;
                    return e.constructor = e.hasOwnProperty = e.propertyIsEnumerable = e.isPrototypeOf = e.toLocaleString = e.toString = e.valueOf = e.__proto__ = null, e
                }, Object.create = function (e, i) {
                    var n;
                    if (null === e) n = v(); else {
                        if ("object" != Object(t["a"])(e)) throw new TypeError("typeof prototype[" + Object(t["a"])(e) + "] != 'object'");
                        var s = function () {
                        };
                        s.prototype = e, n = new s, n.__proto__ = e
                    }
                    return void 0 !== i && Object.defineProperties(n, i), n
                });

                function $(e) {
                    try {
                        return Object.defineProperty(e, "sentinel", {}), "sentinel" in e
                    } catch (t) {
                    }
                }

                if (Object.defineProperty) {
                    var S = $({}), x = "undefined" == typeof document || $(document.createElement("div"));
                    if (!S || !x) var C = Object.defineProperty
                }
                if (!Object.defineProperty || C) {
                    var k = "Property description must be an object: ",
                        L = "Object.defineProperty called on non-object: ",
                        A = "getters & setters can not be defined on this javascript engine";
                    Object.defineProperty = function (e, i, n) {
                        if ("object" != Object(t["a"])(e) && "function" != typeof e || null === e) throw new TypeError(L + e);
                        if ("object" != Object(t["a"])(n) && "function" != typeof n || null === n) throw new TypeError(k + n);
                        if (C) try {
                            return C.call(Object, e, i, n)
                        } catch (h) {
                        }
                        if (p(n, "value")) if (c && (a(e, i) || l(e, i))) {
                            var s = e.__proto__;
                            e.__proto__ = d, delete e[i], e[i] = n.value, e.__proto__ = s
                        } else e[i] = n.value; else {
                            if (!c) throw new TypeError(A);
                            p(n, "get") && o(e, i, n.get), p(n, "set") && r(e, i, n.set)
                        }
                        return e
                    }
                }
                Object.defineProperties || (Object.defineProperties = function (e, t) {
                    for (var i in t) p(t, i) && Object.defineProperty(e, i, t[i]);
                    return e
                }), Object.seal || (Object.seal = function (e) {
                    return e
                }), Object.freeze || (Object.freeze = function (e) {
                    return e
                });
                try {
                    Object.freeze((function () {
                    }))
                } catch (P) {
                    Object.freeze = function (e) {
                        return function (t) {
                            return "function" == typeof t ? t : e(t)
                        }
                    }(Object.freeze)
                }
                if (Object.preventExtensions || (Object.preventExtensions = function (e) {
                    return e
                }), Object.isSealed || (Object.isSealed = function (e) {
                    return !1
                }), Object.isFrozen || (Object.isFrozen = function (e) {
                    return !1
                }), Object.isExtensible || (Object.isExtensible = function (e) {
                    if (Object(e) === e) throw new TypeError;
                    var t = "";
                    while (p(e, t)) t += "?";
                    e[t] = !0;
                    var i = p(e, t);
                    return delete e[t], i
                }), !Object.keys) {
                    var E = !0,
                        _ = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        R = _.length;
                    for (var T in {toString: null}) E = !1;
                    Object.keys = function (e) {
                        if ("object" != Object(t["a"])(e) && "function" != typeof e || null === e) throw new TypeError("Object.keys called on a non-object");
                        var i = [];
                        for (var n in e) p(e, n) && i.push(n);
                        if (E) for (var s = 0, o = R; s < o; s++) {
                            var r = _[s];
                            p(e, r) && i.push(r)
                        }
                        return i
                    }
                }
                Date.now || (Date.now = function () {
                    return (new Date).getTime()
                });
                var M = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
                if (!String.prototype.trim || M.trim()) {
                    M = "[" + M + "]";
                    var I = new RegExp("^" + M + M + "*"), D = new RegExp(M + M + "*$");
                    String.prototype.trim = function () {
                        return String(this).replace(I, "").replace(D, "")
                    }
                }

                function F(e) {
                    return e = +e, e !== e ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -1 / 0 && (e = (e > 0 || -1) * Math.floor(Math.abs(e))), e
                }

                var O = function (e) {
                    if (null == e) throw new TypeError("can't convert " + e + " to object");
                    return Object(e)
                }
            })), deAceFine("ace/lib/fixoldbrowsers", ["require", "exports", "module", "ace/lib/regexp", "ace/lib/es5-shim"], (function (e, t, i) {
                e("./regexp"), e("./es5-shim"), "undefined" == typeof Element || Element.prototype.remove || Object.defineProperty(Element.prototype, "remove", {
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                    value: function () {
                        this.parentNode && this.parentNode.removeChild(this)
                    }
                })
            })), deAceFine("ace/lib/useragent", ["require", "exports", "module"], (function (e, i, n) {
                i.OS = {LINUX: "LINUX", MAC: "MAC", WINDOWS: "WINDOWS"}, i.getOS = function () {
                    return i.isMac ? i.OS.MAC : i.isLinux ? i.OS.LINUX : i.OS.WINDOWS
                };
                var s = "object" == ("undefined" === typeof navigator ? "undefined" : Object(t["a"])(navigator)) ? navigator : {},
                    o = (/mac|win|linux/i.exec(s.platform) || ["other"])[0].toLowerCase(), r = s.userAgent || "",
                    a = s.appName || "";
                i.isWin = "win" == o, i.isMac = "mac" == o, i.isLinux = "linux" == o, i.isIE = "Microsoft Internet Explorer" == a || a.indexOf("MSAppHost") >= 0 ? parseFloat((r.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]) : parseFloat((r.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]), i.isOldIE = i.isIE && i.isIE < 9, i.isGecko = i.isMozilla = r.match(/ Gecko\/\d+/), i.isOpera = "object" == ("undefined" === typeof opera ? "undefined" : Object(t["a"])(opera)) && "[object Opera]" == Object.prototype.toString.call(window.opera), i.isWebKit = parseFloat(r.split("WebKit/")[1]) || void 0, i.isChrome = parseFloat(r.split(" Chrome/")[1]) || void 0, i.isEdge = parseFloat(r.split(" Edge/")[1]) || void 0, i.isAIR = r.indexOf("AdobeAIR") >= 0, i.isAndroid = r.indexOf("Android") >= 0, i.isChromeOS = r.indexOf(" CrOS ") >= 0, i.isIOS = /iPad|iPhone|iPod/.test(r) && !window.MSStream, i.isIOS && (i.isMac = !0), i.isMobile = i.isIOS || i.isAndroid
            })), deAceFine("ace/lib/dom", ["require", "exports", "module", "ace/lib/useragent"], (function (e, i, n) {
                var s = e("./useragent"), o = "http://www.w3.org/1999/xhtml";
                if (i.buildDom = function e(i, n, s) {
                    if ("string" == typeof i && i) {
                        var o = document.createTextNode(i);
                        return n && n.appendChild(o), o
                    }
                    if (!Array.isArray(i)) return i;
                    if ("string" != typeof i[0] || !i[0]) {
                        for (var r = [], a = 0; a < i.length; a++) {
                            var l = e(i[a], n, s);
                            l && r.push(l)
                        }
                        return r
                    }
                    var c = document.createElement(i[0]), h = i[1], u = 1;
                    h && "object" == Object(t["a"])(h) && !Array.isArray(h) && (u = 2);
                    for (a = u; a < i.length; a++) e(i[a], c, s);
                    return 2 == u && Object.keys(h).forEach((function (e) {
                        var t = h[e];
                        "class" === e ? c.className = Array.isArray(t) ? t.join(" ") : t : "function" == typeof t || "value" == e ? c[e] = t : "ref" === e ? s && (s[t] = c) : null != t && c.setAttribute(e, t)
                    })), n && n.appendChild(c), c
                }, i.getDocumentHead = function (e) {
                    return e || (e = document), e.head || e.getElementsByTagName("head")[0] || e.documentElement
                }, i.createElement = function (e, t) {
                    return document.createElementNS ? document.createElementNS(t || o, e) : document.createElement(e)
                }, i.removeChildren = function (e) {
                    e.innerHTML = ""
                }, i.createTextNode = function (e, t) {
                    var i = t ? t.ownerDocument : document;
                    return i.createTextNode(e)
                }, i.createFragment = function (e) {
                    var t = e ? e.ownerDocument : document;
                    return t.createDocumentFragment()
                }, i.hasCssClass = function (e, t) {
                    var i = (e.className + "").split(/\s+/g);
                    return -1 !== i.indexOf(t)
                }, i.addCssClass = function (e, t) {
                    i.hasCssClass(e, t) || (e.className += " " + t)
                }, i.removeCssClass = function (e, t) {
                    var i = e.className.split(/\s+/g);
                    while (1) {
                        var n = i.indexOf(t);
                        if (-1 == n) break;
                        i.splice(n, 1)
                    }
                    e.className = i.join(" ")
                }, i.toggleCssClass = function (e, t) {
                    var i = e.className.split(/\s+/g), n = !0;
                    while (1) {
                        var s = i.indexOf(t);
                        if (-1 == s) break;
                        n = !1, i.splice(s, 1)
                    }
                    return n && i.push(t), e.className = i.join(" "), n
                }, i.setCssClass = function (e, t, n) {
                    n ? i.addCssClass(e, t) : i.removeCssClass(e, t)
                }, i.hasCssString = function (e, t) {
                    var i, n = 0;
                    if (t = t || document, i = t.querySelectorAll("style")) while (n < i.length) if (i[n++].id === e) return !0
                }, i.importCssString = function (e, t, n) {
                    var s = n;
                    n && n.getRootNode ? (s = n.getRootNode(), s && s != n || (s = document)) : s = document;
                    var o = s.ownerDocument || s;
                    if (t && i.hasCssString(t, s)) return null;
                    t && (e += "\n/*# sourceURL=ace/css/" + t + " */");
                    var r = i.createElement("style");
                    r.appendChild(o.createTextNode(e)), t && (r.id = t), s == o && (s = i.getDocumentHead(o)), s.insertBefore(r, s.firstChild)
                }, i.importCssStylsheet = function (e, t) {
                    i.buildDom(["link", {rel: "stylesheet", href: e}], i.getDocumentHead(t))
                }, i.scrollbarWidth = function (e) {
                    var t = i.createElement("ace_inner");
                    t.style.width = "100%", t.style.minWidth = "0px", t.style.height = "200px", t.style.display = "block";
                    var n = i.createElement("ace_outer"), s = n.style;
                    s.position = "absolute", s.left = "-10000px", s.overflow = "hidden", s.width = "200px", s.minWidth = "0px", s.height = "150px", s.display = "block", n.appendChild(t);
                    var o = e.documentElement;
                    o.appendChild(n);
                    var r = t.offsetWidth;
                    s.overflow = "scroll";
                    var a = t.offsetWidth;
                    return r == a && (a = n.clientWidth), o.removeChild(n), r - a
                }, "undefined" == typeof document && (i.importCssString = function () {
                }), i.computedStyle = function (e, t) {
                    return window.getComputedStyle(e, "") || {}
                }, i.setStyle = function (e, t, i) {
                    e[t] !== i && (e[t] = i)
                }, i.HAS_CSS_ANIMATION = !1, i.HAS_CSS_TRANSFORMS = !1, i.HI_DPI = !s.isWin || "undefined" !== typeof window && window.devicePixelRatio >= 1.5, "undefined" !== typeof document) {
                    var r = document.createElement("div");
                    i.HI_DPI && void 0 !== r.style.transform && (i.HAS_CSS_TRANSFORMS = !0), s.isEdge || "undefined" === typeof r.style.animationName || (i.HAS_CSS_ANIMATION = !0), r = null
                }
                i.HAS_CSS_TRANSFORMS ? i.translate = function (e, t, i) {
                    e.style.transform = "translate(" + Math.round(t) + "px, " + Math.round(i) + "px)"
                } : i.translate = function (e, t, i) {
                    e.style.top = Math.round(i) + "px", e.style.left = Math.round(t) + "px"
                }
            })), deAceFine("ace/lib/oop", ["require", "exports", "module"], (function (e, t, i) {
                t.inherits = function (e, t) {
                    e.super_ = t, e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    })
                }, t.mixin = function (e, t) {
                    for (var i in t) e[i] = t[i];
                    return e
                }, t.implement = function (e, i) {
                    t.mixin(e, i)
                }
            })), deAceFine("ace/lib/keys", ["require", "exports", "module", "ace/lib/oop"], (function (e, t, i) {
                var n = e("./oop"), s = function () {
                    var e, t, i = {
                        MODIFIER_KEYS: {16: "Shift", 17: "Ctrl", 18: "Alt", 224: "Meta"},
                        KEY_MODS: {ctrl: 1, alt: 2, option: 2, shift: 4, super: 8, meta: 8, command: 8, cmd: 8},
                        FUNCTION_KEYS: {
                            8: "Backspace",
                            9: "Tab",
                            13: "Return",
                            19: "Pause",
                            27: "Esc",
                            32: "Space",
                            33: "PageUp",
                            34: "PageDown",
                            35: "End",
                            36: "Home",
                            37: "Left",
                            38: "Up",
                            39: "Right",
                            40: "Down",
                            44: "Print",
                            45: "Insert",
                            46: "Delete",
                            96: "Numpad0",
                            97: "Numpad1",
                            98: "Numpad2",
                            99: "Numpad3",
                            100: "Numpad4",
                            101: "Numpad5",
                            102: "Numpad6",
                            103: "Numpad7",
                            104: "Numpad8",
                            105: "Numpad9",
                            "-13": "NumpadEnter",
                            112: "F1",
                            113: "F2",
                            114: "F3",
                            115: "F4",
                            116: "F5",
                            117: "F6",
                            118: "F7",
                            119: "F8",
                            120: "F9",
                            121: "F10",
                            122: "F11",
                            123: "F12",
                            144: "Numlock",
                            145: "Scrolllock"
                        },
                        PRINTABLE_KEYS: {
                            32: " ",
                            48: "0",
                            49: "1",
                            50: "2",
                            51: "3",
                            52: "4",
                            53: "5",
                            54: "6",
                            55: "7",
                            56: "8",
                            57: "9",
                            59: ";",
                            61: "=",
                            65: "a",
                            66: "b",
                            67: "c",
                            68: "d",
                            69: "e",
                            70: "f",
                            71: "g",
                            72: "h",
                            73: "i",
                            74: "j",
                            75: "k",
                            76: "l",
                            77: "m",
                            78: "n",
                            79: "o",
                            80: "p",
                            81: "q",
                            82: "r",
                            83: "s",
                            84: "t",
                            85: "u",
                            86: "v",
                            87: "w",
                            88: "x",
                            89: "y",
                            90: "z",
                            107: "+",
                            109: "-",
                            110: ".",
                            186: ";",
                            187: "=",
                            188: ",",
                            189: "-",
                            190: ".",
                            191: "/",
                            192: "`",
                            219: "[",
                            220: "\\",
                            221: "]",
                            222: "'",
                            111: "/",
                            106: "*"
                        }
                    };
                    for (t in i.FUNCTION_KEYS) e = i.FUNCTION_KEYS[t].toLowerCase(), i[e] = parseInt(t, 10);
                    for (t in i.PRINTABLE_KEYS) e = i.PRINTABLE_KEYS[t].toLowerCase(), i[e] = parseInt(t, 10);
                    return n.mixin(i, i.MODIFIER_KEYS), n.mixin(i, i.PRINTABLE_KEYS), n.mixin(i, i.FUNCTION_KEYS), i.enter = i["return"], i.escape = i.esc, i.del = i["delete"], i[173] = "-", function () {
                        for (var e = ["cmd", "ctrl", "alt", "shift"], t = Math.pow(2, e.length); t--;) i.KEY_MODS[t] = e.filter((function (e) {
                            return t & i.KEY_MODS[e]
                        })).join("-") + "-"
                    }(), i.KEY_MODS[0] = "", i.KEY_MODS[-1] = "input-", i
                }();
                n.mixin(t, s), t.keyCodeToString = function (e) {
                    var t = s[e];
                    return "string" != typeof t && (t = String.fromCharCode(e)), t.toLowerCase()
                }
            })), deAceFine("ace/lib/event", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], (function (e, i, n) {
                var s = e("./keys"), o = e("./useragent"), r = null, a = 0;
                i.addListener = function (e, t, i) {
                    if (e.addEventListener) return e.addEventListener(t, i, !1);
                    if (e.attachEvent) {
                        var n = function () {
                            i.call(e, window.event)
                        };
                        i._wrapper = n, e.attachEvent("on" + t, n)
                    }
                }, i.removeListener = function (e, t, i) {
                    if (e.removeEventListener) return e.removeEventListener(t, i, !1);
                    e.detachEvent && e.detachEvent("on" + t, i._wrapper || i)
                }, i.stopEvent = function (e) {
                    return i.stopPropagation(e), i.preventDefault(e), !1
                }, i.stopPropagation = function (e) {
                    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
                }, i.preventDefault = function (e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                }, i.getButton = function (e) {
                    return "dblclick" == e.type ? 0 : "contextmenu" == e.type || o.isMac && e.ctrlKey && !e.altKey && !e.shiftKey ? 2 : e.preventDefault ? e.button : {
                        1: 0,
                        2: 2,
                        4: 1
                    }[e.button]
                }, i.capture = function (e, t, n) {
                    function s(e) {
                        t && t(e), n && n(e), i.removeListener(document, "mousemove", t, !0), i.removeListener(document, "mouseup", s, !0), i.removeListener(document, "dragstart", s, !0)
                    }

                    return i.addListener(document, "mousemove", t, !0), i.addListener(document, "mouseup", s, !0), i.addListener(document, "dragstart", s, !0), s
                }, i.addMouseWheelListener = function (e, t) {
                    "onmousewheel" in e ? i.addListener(e, "mousewheel", (function (e) {
                        var i = 8;
                        void 0 !== e.wheelDeltaX ? (e.wheelX = -e.wheelDeltaX / i, e.wheelY = -e.wheelDeltaY / i) : (e.wheelX = 0, e.wheelY = -e.wheelDelta / i), t(e)
                    })) : "onwheel" in e ? i.addListener(e, "wheel", (function (e) {
                        var i = .35;
                        switch (e.deltaMode) {
                            case e.DOM_DELTA_PIXEL:
                                e.wheelX = e.deltaX * i || 0, e.wheelY = e.deltaY * i || 0;
                                break;
                            case e.DOM_DELTA_LINE:
                            case e.DOM_DELTA_PAGE:
                                e.wheelX = 5 * (e.deltaX || 0), e.wheelY = 5 * (e.deltaY || 0);
                                break
                        }
                        t(e)
                    })) : i.addListener(e, "DOMMouseScroll", (function (e) {
                        e.axis && e.axis == e.HORIZONTAL_AXIS ? (e.wheelX = 5 * (e.detail || 0), e.wheelY = 0) : (e.wheelX = 0, e.wheelY = 5 * (e.detail || 0)), t(e)
                    }))
                }, i.addMultiMouseDownListener = function (e, t, n, s) {
                    var r, a, l, c = 0, h = {2: "dblclick", 3: "tripleclick", 4: "quadclick"};

                    function u(e) {
                        if (0 !== i.getButton(e) ? c = 0 : e.detail > 1 ? (c++, c > 4 && (c = 1)) : c = 1, o.isIE) {
                            var u = Math.abs(e.clientX - r) > 5 || Math.abs(e.clientY - a) > 5;
                            l && !u || (c = 1), l && clearTimeout(l), l = setTimeout((function () {
                                l = null
                            }), t[c - 1] || 600), 1 == c && (r = e.clientX, a = e.clientY)
                        }
                        if (e._clicks = c, n[s]("mousedown", e), c > 4) c = 0; else if (c > 1) return n[s](h[c], e)
                    }

                    function d(e) {
                        c = 2, l && clearTimeout(l), l = setTimeout((function () {
                            l = null
                        }), t[c - 1] || 600), n[s]("mousedown", e), n[s](h[c], e)
                    }

                    Array.isArray(e) || (e = [e]), e.forEach((function (e) {
                        i.addListener(e, "mousedown", u), o.isOldIE && i.addListener(e, "dblclick", d)
                    }))
                };
                var l = !o.isMac || !o.isOpera || "KeyboardEvent" in window ? function (e) {
                    return 0 | (e.ctrlKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.metaKey ? 8 : 0)
                } : function (e) {
                    return 0 | (e.metaKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.ctrlKey ? 8 : 0)
                };

                function c(e, t, i) {
                    var n = l(t);
                    if (!o.isMac && r) {
                        if (t.getModifierState && (t.getModifierState("OS") || t.getModifierState("Win")) && (n |= 8), r.altGr) {
                            if (3 == (3 & n)) return;
                            r.altGr = 0
                        }
                        if (18 === i || 17 === i) {
                            var c = "location" in t ? t.location : t.keyLocation;
                            if (17 === i && 1 === c) 1 == r[i] && (a = t.timeStamp); else if (18 === i && 3 === n && 2 === c) {
                                var h = t.timeStamp - a;
                                h < 50 && (r.altGr = !0)
                            }
                        }
                    }
                    if (i in s.MODIFIER_KEYS && (i = -1), 8 & n && i >= 91 && i <= 93 && (i = -1), !n && 13 === i) {
                        c = "location" in t ? t.location : t.keyLocation;
                        if (3 === c && (e(t, n, -i), t.defaultPrevented)) return
                    }
                    if (o.isChromeOS && 8 & n) {
                        if (e(t, n, i), t.defaultPrevented) return;
                        n &= -9
                    }
                    return !!(n || i in s.FUNCTION_KEYS || i in s.PRINTABLE_KEYS) && e(t, n, i)
                }

                function h() {
                    r = Object.create(null)
                }

                if (i.getModifierString = function (e) {
                    return s.KEY_MODS[l(e)]
                }, i.addCommandKeyListener = function (e, t) {
                    var n = i.addListener;
                    if (o.isOldGecko || o.isOpera && !("KeyboardEvent" in window)) {
                        var s = null;
                        n(e, "keydown", (function (e) {
                            s = e.keyCode
                        })), n(e, "keypress", (function (e) {
                            return c(t, e, s)
                        }))
                    } else {
                        var a = null;
                        n(e, "keydown", (function (e) {
                            r[e.keyCode] = (r[e.keyCode] || 0) + 1;
                            var i = c(t, e, e.keyCode);
                            return a = e.defaultPrevented, i
                        })), n(e, "keypress", (function (e) {
                            a && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && (i.stopEvent(e), a = null)
                        })), n(e, "keyup", (function (e) {
                            r[e.keyCode] = null
                        })), r || (h(), n(window, "focus", h))
                    }
                }, "object" == ("undefined" === typeof window ? "undefined" : Object(t["a"])(window)) && window.postMessage && !o.isOldIE) {
                    var u = 1;
                    i.nextTick = function (e, t) {
                        t = t || window;
                        var n = "zero-timeout-message-" + u++, s = function s(o) {
                            o.data == n && (i.stopPropagation(o), i.removeListener(t, "message", s), e())
                        };
                        i.addListener(t, "message", s), t.postMessage(n, "*")
                    }
                }
                i.$idleBlocked = !1, i.onIdle = function (e, t) {
                    return setTimeout((function t() {
                        i.$idleBlocked ? setTimeout(t, 100) : e()
                    }), t)
                }, i.$idleBlockId = null, i.blockIdle = function (e) {
                    i.$idleBlockId && clearTimeout(i.$idleBlockId), i.$idleBlocked = !0, i.$idleBlockId = setTimeout((function () {
                        i.$idleBlocked = !1
                    }), e || 100)
                }, i.nextFrame = "object" == ("undefined" === typeof window ? "undefined" : Object(t["a"])(window)) && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame), i.nextFrame ? i.nextFrame = i.nextFrame.bind(window) : i.nextFrame = function (e) {
                    setTimeout(e, 17)
                }
            })), deAceFine("ace/range", ["require", "exports", "module"], (function (e, i, n) {
                var s = function (e, t) {
                    return e.row - t.row || e.column - t.column
                }, o = function (e, t, i, n) {
                    this.start = {row: e, column: t}, this.end = {row: i, column: n}
                };
                (function () {
                    this.isEqual = function (e) {
                        return this.start.row === e.start.row && this.end.row === e.end.row && this.start.column === e.start.column && this.end.column === e.end.column
                    }, this.toString = function () {
                        return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]"
                    }, this.contains = function (e, t) {
                        return 0 == this.compare(e, t)
                    }, this.compareRange = function (e) {
                        var t, i = e.end, n = e.start;
                        return t = this.compare(i.row, i.column), 1 == t ? (t = this.compare(n.row, n.column), 1 == t ? 2 : 0 == t ? 1 : 0) : -1 == t ? -2 : (t = this.compare(n.row, n.column), -1 == t ? -1 : 1 == t ? 42 : 0)
                    }, this.comparePoint = function (e) {
                        return this.compare(e.row, e.column)
                    }, this.containsRange = function (e) {
                        return 0 == this.comparePoint(e.start) && 0 == this.comparePoint(e.end)
                    }, this.intersects = function (e) {
                        var t = this.compareRange(e);
                        return -1 == t || 0 == t || 1 == t
                    }, this.isEnd = function (e, t) {
                        return this.end.row == e && this.end.column == t
                    }, this.isStart = function (e, t) {
                        return this.start.row == e && this.start.column == t
                    }, this.setStart = function (e, i) {
                        "object" == Object(t["a"])(e) ? (this.start.column = e.column, this.start.row = e.row) : (this.start.row = e, this.start.column = i)
                    }, this.setEnd = function (e, i) {
                        "object" == Object(t["a"])(e) ? (this.end.column = e.column, this.end.row = e.row) : (this.end.row = e, this.end.column = i)
                    }, this.inside = function (e, t) {
                        return 0 == this.compare(e, t) && (!this.isEnd(e, t) && !this.isStart(e, t))
                    }, this.insideStart = function (e, t) {
                        return 0 == this.compare(e, t) && !this.isEnd(e, t)
                    }, this.insideEnd = function (e, t) {
                        return 0 == this.compare(e, t) && !this.isStart(e, t)
                    }, this.compare = function (e, t) {
                        return this.isMultiLine() || e !== this.start.row ? e < this.start.row ? -1 : e > this.end.row ? 1 : this.start.row === e ? t >= this.start.column ? 0 : -1 : this.end.row === e ? t <= this.end.column ? 0 : 1 : 0 : t < this.start.column ? -1 : t > this.end.column ? 1 : 0
                    }, this.compareStart = function (e, t) {
                        return this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)
                    }, this.compareEnd = function (e, t) {
                        return this.end.row == e && this.end.column == t ? 1 : this.compare(e, t)
                    }, this.compareInside = function (e, t) {
                        return this.end.row == e && this.end.column == t ? 1 : this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)
                    }, this.clipRows = function (e, t) {
                        if (this.end.row > t) var i = {row: t + 1, column: 0}; else if (this.end.row < e) i = {
                            row: e,
                            column: 0
                        };
                        if (this.start.row > t) var n = {
                            row: t + 1,
                            column: 0
                        }; else if (this.start.row < e) n = {row: e, column: 0};
                        return o.fromPoints(n || this.start, i || this.end)
                    }, this.extend = function (e, t) {
                        var i = this.compare(e, t);
                        if (0 == i) return this;
                        if (-1 == i) var n = {row: e, column: t}; else var s = {row: e, column: t};
                        return o.fromPoints(n || this.start, s || this.end)
                    }, this.isEmpty = function () {
                        return this.start.row === this.end.row && this.start.column === this.end.column
                    }, this.isMultiLine = function () {
                        return this.start.row !== this.end.row
                    }, this.clone = function () {
                        return o.fromPoints(this.start, this.end)
                    }, this.collapseRows = function () {
                        return 0 == this.end.column ? new o(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new o(this.start.row, 0, this.end.row, 0)
                    }, this.toScreenRange = function (e) {
                        var t = e.documentToScreenPosition(this.start), i = e.documentToScreenPosition(this.end);
                        return new o(t.row, t.column, i.row, i.column)
                    }, this.moveBy = function (e, t) {
                        this.start.row += e, this.start.column += t, this.end.row += e, this.end.column += t
                    }
                }).call(o.prototype), o.fromPoints = function (e, t) {
                    return new o(e.row, e.column, t.row, t.column)
                }, o.comparePoints = s, o.comparePoints = function (e, t) {
                    return e.row - t.row || e.column - t.column
                }, i.Range = o
            })), deAceFine("ace/lib/lang", ["require", "exports", "module"], (function (e, i, n) {
                i.last = function (e) {
                    return e[e.length - 1]
                }, i.stringReverse = function (e) {
                    return e.split("").reverse().join("")
                }, i.stringRepeat = function (e, t) {
                    var i = "";
                    while (t > 0) 1 & t && (i += e), (t >>= 1) && (e += e);
                    return i
                };
                var s = /^\s\s*/, o = /\s\s*$/;
                i.stringTrimLeft = function (e) {
                    return e.replace(s, "")
                }, i.stringTrimRight = function (e) {
                    return e.replace(o, "")
                }, i.copyObject = function (e) {
                    var t = {};
                    for (var i in e) t[i] = e[i];
                    return t
                }, i.copyArray = function (e) {
                    for (var i = [], n = 0, s = e.length; n < s; n++) e[n] && "object" == Object(t["a"])(e[n]) ? i[n] = this.copyObject(e[n]) : i[n] = e[n];
                    return i
                }, i.deepCopy = function e(i) {
                    if ("object" !== Object(t["a"])(i) || !i) return i;
                    var n;
                    if (Array.isArray(i)) {
                        n = [];
                        for (var s = 0; s < i.length; s++) n[s] = e(i[s]);
                        return n
                    }
                    if ("[object Object]" !== Object.prototype.toString.call(i)) return i;
                    for (var s in n = {}, i) n[s] = e(i[s]);
                    return n
                }, i.arrayToMap = function (e) {
                    for (var t = {}, i = 0; i < e.length; i++) t[e[i]] = 1;
                    return t
                }, i.createMap = function (e) {
                    var t = Object.create(null);
                    for (var i in e) t[i] = e[i];
                    return t
                }, i.arrayRemove = function (e, t) {
                    for (var i = 0; i <= e.length; i++) t === e[i] && e.splice(i, 1)
                }, i.escapeRegExp = function (e) {
                    return e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1")
                }, i.escapeHTML = function (e) {
                    return ("" + e).replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;")
                }, i.getMatchOffsets = function (e, t) {
                    var i = [];
                    return e.replace(t, (function (e) {
                        i.push({offset: arguments[arguments.length - 2], length: e.length})
                    })), i
                }, i.deferredCall = function (e) {
                    var t = null, i = function () {
                        t = null, e()
                    }, n = function e(n) {
                        return e.cancel(), t = setTimeout(i, n || 0), e
                    };
                    return n.schedule = n, n.call = function () {
                        return this.cancel(), e(), n
                    }, n.cancel = function () {
                        return clearTimeout(t), t = null, n
                    }, n.isPending = function () {
                        return t
                    }, n
                }, i.delayedCall = function (e, t) {
                    var i = null, n = function () {
                        i = null, e()
                    }, s = function (e) {
                        null == i && (i = setTimeout(n, e || t))
                    };
                    return s.delay = function (e) {
                        i && clearTimeout(i), i = setTimeout(n, e || t)
                    }, s.schedule = s, s.call = function () {
                        this.cancel(), e()
                    }, s.cancel = function () {
                        i && clearTimeout(i), i = null
                    }, s.isPending = function () {
                        return i
                    }, s
                }
            })), deAceFine("ace/keyboard/textinput", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang", "ace/lib/keys"], (function (e, t, i) {
                var n = e("../lib/event"), s = e("../lib/useragent"), o = e("../lib/dom"), r = e("../lib/lang"),
                    a = s.isChrome < 18, l = s.isIE, c = s.isChrome > 63, h = 400, u = e("../lib/keys"), d = u.KEY_MODS,
                    g = s.isIOS, f = g ? /\s/ : /\n/, p = function (e, t) {
                        var i = o.createElement("textarea");
                        i.className = "ace_text-input", i.setAttribute("wrap", "off"), i.setAttribute("autocorrect", "off"), i.setAttribute("autocapitalize", "off"), i.setAttribute("spellcheck", !1), i.style.opacity = "0", e.insertBefore(i, e.firstChild);
                        var p = !1, m = !1, v = !1, w = !1, b = "";
                        s.isMobile || (i.style.fontSize = "1px");
                        var y = !1, $ = !1, S = "", x = 0, C = 0;
                        try {
                            var k = document.activeElement === i
                        } catch (G) {
                        }
                        n.addListener(i, "blur", (function (e) {
                            $ || (t.onBlur(e), k = !1)
                        })), n.addListener(i, "focus", (function (e) {
                            if (!$) {
                                if (k = !0, s.isEdge) try {
                                    if (!document.hasFocus()) return
                                } catch (e) {
                                }
                                t.onFocus(e), s.isEdge ? setTimeout(L) : L()
                            }
                        })), this.$focusScroll = !1, this.focus = function () {
                            if (b || c || "browser" == this.$focusScroll) return i.focus({preventScroll: !0});
                            var e = i.style.top;
                            i.style.position = "fixed", i.style.top = "0px";
                            try {
                                var t = 0 != i.getBoundingClientRect().top
                            } catch (G) {
                                return
                            }
                            var n = [];
                            if (t) {
                                var s = i.parentElement;
                                while (s && 1 == s.nodeType) n.push(s), s.setAttribute("ace_nocontext", !0), s = !s.parentElement && s.getRootNode ? s.getRootNode().host : s.parentElement
                            }
                            i.focus({preventScroll: !0}), t && n.forEach((function (e) {
                                e.removeAttribute("ace_nocontext")
                            })), setTimeout((function () {
                                i.style.position = "", "0px" == i.style.top && (i.style.top = e)
                            }), 0)
                        }, this.blur = function () {
                            i.blur()
                        }, this.isFocused = function () {
                            return k
                        }, t.on("beforeEndOperation", (function () {
                            t.curOp && "insertstring" == t.curOp.command.name || (v && (S = i.value = "", B()), L())
                        }));
                        var L = g ? function (e) {
                            if (k && (!p || e) && !w) {
                                e || (e = "");
                                var n = "\n ab" + e + "cde fg\n";
                                n != i.value && (i.value = S = n);
                                var s = 4, o = 4 + (e.length || (t.selection.isEmpty() ? 0 : 1));
                                x == s && C == o || i.setSelectionRange(s, o), x = s, C = o
                            }
                        } : function () {
                            if (!v && !w && (k || R)) {
                                v = !0;
                                var e = t.selection, n = e.getRange(), s = e.cursor.row, o = n.start.column,
                                    r = n.end.column, a = t.session.getLine(s);
                                if (n.start.row != s) {
                                    var l = t.session.getLine(s - 1);
                                    o = n.start.row < s - 1 ? 0 : o, r += l.length + 1, a = l + "\n" + a
                                } else if (n.end.row != s) {
                                    var c = t.session.getLine(s + 1);
                                    r = n.end.row > s + 1 ? c.length : r, r += a.length + 1, a = a + "\n" + c
                                }
                                a.length > h && (o < h && r < h ? a = a.slice(0, h) : (a = "\n", o = 0, r = 1));
                                var u = a + "\n\n";
                                if (u != S && (i.value = S = u, x = C = u.length), R && (x = i.selectionStart, C = i.selectionEnd), C != r || x != o || i.selectionEnd != C) try {
                                    i.setSelectionRange(o, r), x = o, C = r
                                } catch (G) {
                                }
                                v = !1
                            }
                        };
                        k && t.onFocus();
                        var A = function (e) {
                            return 0 === e.selectionStart && e.selectionEnd >= S.length && e.value === S && S && e.selectionEnd !== C
                        }, E = function (e) {
                            v || (p ? p = !1 : A(i) && (t.selectAll(), L()))
                        }, _ = null;
                        this.setInputHandler = function (e) {
                            _ = e
                        }, this.getInputHandler = function () {
                            return _
                        };
                        var R = !1, T = function (e, n) {
                            if (R && (R = !1), m) return L(), e && t.onPaste(e), m = !1, "";
                            var s = i.selectionStart, o = i.selectionEnd, r = x, a = S.length - C, l = e, c = e.length - s,
                                h = e.length - o, u = 0;
                            while (r > 0 && S[u] == e[u]) u++, r--;
                            l = l.slice(u), u = 1;
                            while (a > 0 && S.length - u > x - 1 && S[S.length - u] == e[e.length - u]) u++, a--;
                            c -= u - 1, h -= u - 1;
                            var d = l.length - u + 1;
                            return d < 0 && (r = -d, d = 0), l = l.slice(0, d), n || c != l.length || r || a || h ? (w = !0, l && !r && !a && !c && !h || y ? t.onTextInput(l) : t.onTextInput(l, {
                                extendLeft: r,
                                extendRight: a,
                                restoreStart: c,
                                restoreEnd: h
                            }), w = !1, S = e, x = s, C = o, l) : ""
                        }, M = function (e) {
                            if (v) return W();
                            var t = i.value, n = T(t, !0);
                            (t.length > h + 100 || f.test(n)) && L()
                        }, I = function e(t, i, n) {
                            var s = t.clipboardData || window.clipboardData;
                            if (s && !a) {
                                var o = l || n ? "Text" : "text/plain";
                                try {
                                    return i ? !1 !== s.setData(o, i) : s.getData(o)
                                } catch (t) {
                                    if (!n) return e(t, i, !0)
                                }
                            }
                        }, D = function (e, s) {
                            var o = t.getCopyText();
                            if (!o) return n.preventDefault(e);
                            I(e, o) ? (g && (L(o), p = o, setTimeout((function () {
                                p = !1
                            }), 10)), s ? t.onCut() : t.onCopy(), n.preventDefault(e)) : (p = !0, i.value = o, i.select(), setTimeout((function () {
                                p = !1, L(), s ? t.onCut() : t.onCopy()
                            })))
                        }, F = function (e) {
                            D(e, !0)
                        }, O = function (e) {
                            D(e, !1)
                        }, P = function (e) {
                            var o = I(e);
                            "string" == typeof o ? (o && t.onPaste(o, e), s.isIE && setTimeout(L), n.preventDefault(e)) : (i.value = "", m = !0)
                        };
                        n.addCommandKeyListener(i, t.onCommandKey.bind(t)), n.addListener(i, "select", E), n.addListener(i, "input", M), n.addListener(i, "cut", F), n.addListener(i, "copy", O), n.addListener(i, "paste", P), "oncut" in i && "oncopy" in i && "onpaste" in i || n.addListener(e, "keydown", (function (e) {
                            if ((!s.isMac || e.metaKey) && e.ctrlKey) switch (e.keyCode) {
                                case 67:
                                    O(e);
                                    break;
                                case 86:
                                    P(e);
                                    break;
                                case 88:
                                    F(e);
                                    break
                            }
                        }));
                        var N = function (e) {
                            if (!v && t.onCompositionStart && !t.$readOnly && (v = {}, !y)) {
                                setTimeout(W, 0), t.on("mousedown", H);
                                var n = t.getSelectionRange();
                                n.end.row = n.start.row, n.end.column = n.start.column, v.markerRange = n, v.selectionStart = x, t.onCompositionStart(v), v.useTextareaForIME ? (i.value = "", S = "", x = 0, C = 0) : (i.msGetInputContext && (v.context = i.msGetInputContext()), i.getInputContext && (v.context = i.getInputContext()))
                            }
                        }, W = function () {
                            if (v && t.onCompositionUpdate && !t.$readOnly) {
                                if (y) return H();
                                if (v.useTextareaForIME) t.onCompositionUpdate(i.value); else {
                                    var e = i.value;
                                    T(e), v.markerRange && (v.context && (v.markerRange.start.column = v.selectionStart = v.context.compositionStartOffset), v.markerRange.end.column = v.markerRange.start.column + C - v.selectionStart)
                                }
                            }
                        }, B = function (e) {
                            t.onCompositionEnd && !t.$readOnly && (v = !1, t.onCompositionEnd(), t.off("mousedown", H), e && M())
                        };

                        function H() {
                            $ = !0, i.blur(), i.focus(), $ = !1
                        }

                        var z, V = r.delayedCall(W, 50).schedule.bind(null, null);

                        function U(e) {
                            27 == e.keyCode && i.value.length < i.selectionStart && (v || (S = i.value), x = C = -1, L()), V()
                        }

                        function K() {
                            clearTimeout(z), z = setTimeout((function () {
                                b && (i.style.cssText = b, b = ""), t.renderer.$isMousePressed = !1, t.renderer.$keepTextAreaAtCursor && t.renderer.$moveTextAreaToCursor()
                            }), 0)
                        }

                        n.addListener(i, "compositionstart", N), n.addListener(i, "compositionupdate", W), n.addListener(i, "keyup", U), n.addListener(i, "keydown", V), n.addListener(i, "compositionend", B), this.getElement = function () {
                            return i
                        }, this.setCommandMode = function (e) {
                            y = e, i.readOnly = !1
                        }, this.setReadOnly = function (e) {
                            y || (i.readOnly = e)
                        }, this.setCopyWithEmptySelection = function (e) {
                        }, this.onContextMenu = function (e) {
                            R = !0, L(), t._emit("nativecontextmenu", {target: t, domEvent: e}), this.moveToMouse(e, !0)
                        }, this.moveToMouse = function (e, r) {
                            b || (b = i.style.cssText), i.style.cssText = (r ? "z-index:100000;" : "") + (s.isIE ? "opacity:0.1;" : "") + "text-indent: -" + (x + C) * t.renderer.characterWidth * .5 + "px;";
                            var a = t.container.getBoundingClientRect(), l = o.computedStyle(t.container),
                                c = a.top + (parseInt(l.borderTopWidth) || 0),
                                h = a.left + (parseInt(a.borderLeftWidth) || 0), u = a.bottom - c - i.clientHeight - 2,
                                d = function (e) {
                                    o.translate(i, e.clientX - h - 2, Math.min(e.clientY - c - 2, u))
                                };
                            d(e), "mousedown" == e.type && (t.renderer.$isMousePressed = !0, clearTimeout(z), s.isWin && n.capture(t.container, d, K))
                        }, this.onContextMenuClose = K;
                        var q = function (e) {
                            t.textInput.onContextMenu(e), K()
                        };

                        function j(e, t, i) {
                            var n = null, s = !1;
                            i.addEventListener("keydown", (function (e) {
                                n && clearTimeout(n), s = !0
                            }), !0), i.addEventListener("keyup", (function (e) {
                                n = setTimeout((function () {
                                    s = !1
                                }), 100)
                            }), !0);
                            var o = function (e) {
                                if (document.activeElement === i && !(s || v || t.$mouseHandler.isMousePressed) && !p) {
                                    var n = i.selectionStart, o = i.selectionEnd, r = null, a = 0;
                                    console.log(n, o), 0 == n ? r = u.up : 1 == n ? r = u.home : o > C && "\n" == S[o] ? r = u.end : n < x && " " == S[n - 1] ? (r = u.left, a = d.option) : n < x || n == x && C != x && n == o ? r = u.left : o > C && S.slice(0, o).split("\n").length > 2 ? r = u.down : o > C && " " == S[o - 1] ? (r = u.right, a = d.option) : (o > C || o == C && C != x && n == o) && (r = u.right), n !== o && (a |= d.shift), r && (t.onCommandKey(null, a, r), x = n, C = o, L(""))
                                }
                            };
                            document.addEventListener("selectionchange", o), t.on("destroy", (function () {
                                document.removeEventListener("selectionchange", o)
                            }))
                        }

                        n.addListener(i, "mouseup", q), n.addListener(i, "mousedown", (function (e) {
                            e.preventDefault(), K()
                        })), n.addListener(t.renderer.scroller, "contextmenu", q), n.addListener(i, "contextmenu", q), g && j(e, t, i)
                    };
                t.TextInput = p
            })), deAceFine("ace/mouse/default_handlers", ["require", "exports", "module", "ace/lib/useragent"], (function (e, t, i) {
                var n = e("../lib/useragent"), s = 0, o = 550;

                function r(e) {
                    e.$clickSelection = null;
                    var t = e.editor;
                    t.setDefaultHandler("mousedown", this.onMouseDown.bind(e)), t.setDefaultHandler("dblclick", this.onDoubleClick.bind(e)), t.setDefaultHandler("tripleclick", this.onTripleClick.bind(e)), t.setDefaultHandler("quadclick", this.onQuadClick.bind(e)), t.setDefaultHandler("mousewheel", this.onMouseWheel.bind(e));
                    var i = ["select", "startSelect", "selectEnd", "selectAllEnd", "selectByWordsEnd", "selectByLinesEnd", "dragWait", "dragWaitEnd", "focusWait"];
                    i.forEach((function (t) {
                        e[t] = this[t]
                    }), this), e.selectByLines = this.extendSelectionBy.bind(e, "getLineRange"), e.selectByWords = this.extendSelectionBy.bind(e, "getWordRange")
                }

                function a(e, t, i, n) {
                    return Math.sqrt(Math.pow(i - e, 2) + Math.pow(n - t, 2))
                }

                function l(e, t) {
                    if (e.start.row == e.end.row) var i = 2 * t.column - e.start.column - e.end.column; else if (e.start.row != e.end.row - 1 || e.start.column || e.end.column) i = 2 * t.row - e.start.row - e.end.row; else var i = t.column - 4;
                    return i < 0 ? {cursor: e.start, anchor: e.end} : {cursor: e.end, anchor: e.start}
                }

                (function () {
                    this.onMouseDown = function (e) {
                        var t = e.inSelection(), i = e.getDocumentPosition();
                        this.mousedownEvent = e;
                        var s = this.editor, o = e.getButton();
                        if (0 !== o) {
                            var r = s.getSelectionRange(), a = r.isEmpty();
                            return (a || 1 == o) && s.selection.moveToPosition(i), void (2 == o && (s.textInput.onContextMenu(e.domEvent), n.isMozilla || e.preventDefault()))
                        }
                        return this.mousedownEvent.time = Date.now(), !t || s.isFocused() || (s.focus(), !this.$focusTimeout || this.$clickSelection || s.inMultiSelectMode) ? (this.captureMouse(e), this.startSelect(i, e.domEvent._clicks > 1), e.preventDefault()) : (this.setState("focusWait"), void this.captureMouse(e))
                    }, this.startSelect = function (e, t) {
                        e = e || this.editor.renderer.screenToTextCoordinates(this.x, this.y);
                        var i = this.editor;
                        this.mousedownEvent && (this.mousedownEvent.getShiftKey() ? i.selection.selectToPosition(e) : t || i.selection.moveToPosition(e), t || this.select(), i.renderer.scroller.setCapture && i.renderer.scroller.setCapture(), i.setStyle("ace_selecting"), this.setState("select"))
                    }, this.select = function () {
                        var e, t = this.editor, i = t.renderer.screenToTextCoordinates(this.x, this.y);
                        if (this.$clickSelection) {
                            var n = this.$clickSelection.comparePoint(i);
                            if (-1 == n) e = this.$clickSelection.end; else if (1 == n) e = this.$clickSelection.start; else {
                                var s = l(this.$clickSelection, i);
                                i = s.cursor, e = s.anchor
                            }
                            t.selection.setSelectionAnchor(e.row, e.column)
                        }
                        t.selection.selectToPosition(i), t.renderer.scrollCursorIntoView()
                    }, this.extendSelectionBy = function (e) {
                        var t, i = this.editor, n = i.renderer.screenToTextCoordinates(this.x, this.y),
                            s = i.selection[e](n.row, n.column);
                        if (this.$clickSelection) {
                            var o = this.$clickSelection.comparePoint(s.start),
                                r = this.$clickSelection.comparePoint(s.end);
                            if (-1 == o && r <= 0) t = this.$clickSelection.end, s.end.row == n.row && s.end.column == n.column || (n = s.start); else if (1 == r && o >= 0) t = this.$clickSelection.start, s.start.row == n.row && s.start.column == n.column || (n = s.end); else if (-1 == o && 1 == r) n = s.end, t = s.start; else {
                                var a = l(this.$clickSelection, n);
                                n = a.cursor, t = a.anchor
                            }
                            i.selection.setSelectionAnchor(t.row, t.column)
                        }
                        i.selection.selectToPosition(n), i.renderer.scrollCursorIntoView()
                    }, this.selectEnd = this.selectAllEnd = this.selectByWordsEnd = this.selectByLinesEnd = function () {
                        this.$clickSelection = null, this.editor.unsetStyle("ace_selecting"), this.editor.renderer.scroller.releaseCapture && this.editor.renderer.scroller.releaseCapture()
                    }, this.focusWait = function () {
                        var e = a(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y), t = Date.now();
                        (e > s || t - this.mousedownEvent.time > this.$focusTimeout) && this.startSelect(this.mousedownEvent.getDocumentPosition())
                    }, this.onDoubleClick = function (e) {
                        var t = e.getDocumentPosition(), i = this.editor, n = i.session, s = n.getBracketRange(t);
                        s ? (s.isEmpty() && (s.start.column--, s.end.column++), this.setState("select")) : (s = i.selection.getWordRange(t.row, t.column), this.setState("selectByWords")), this.$clickSelection = s, this.select()
                    }, this.onTripleClick = function (e) {
                        var t = e.getDocumentPosition(), i = this.editor;
                        this.setState("selectByLines");
                        var n = i.getSelectionRange();
                        n.isMultiLine() && n.contains(t.row, t.column) ? (this.$clickSelection = i.selection.getLineRange(n.start.row), this.$clickSelection.end = i.selection.getLineRange(n.end.row).end) : this.$clickSelection = i.selection.getLineRange(t.row), this.select()
                    }, this.onQuadClick = function (e) {
                        var t = this.editor;
                        t.selectAll(), this.$clickSelection = t.getSelectionRange(), this.setState("selectAll")
                    }, this.onMouseWheel = function (e) {
                        if (!e.getAccelKey()) {
                            e.getShiftKey() && e.wheelY && !e.wheelX && (e.wheelX = e.wheelY, e.wheelY = 0);
                            var t = this.editor;
                            this.$lastScroll || (this.$lastScroll = {t: 0, vx: 0, vy: 0, allowed: 0});
                            var i = this.$lastScroll, n = e.domEvent.timeStamp, s = n - i.t,
                                r = s ? e.wheelX / s : i.vx, a = s ? e.wheelY / s : i.vy;
                            s < o && (r = (r + i.vx) / 2, a = (a + i.vy) / 2);
                            var l = Math.abs(r / a), c = !1;
                            if (l >= 1 && t.renderer.isScrollableBy(e.wheelX * e.speed, 0) && (c = !0), l <= 1 && t.renderer.isScrollableBy(0, e.wheelY * e.speed) && (c = !0), c) i.allowed = n; else if (n - i.allowed < o) {
                                var h = Math.abs(r) <= 1.5 * Math.abs(i.vx) && Math.abs(a) <= 1.5 * Math.abs(i.vy);
                                h ? (c = !0, i.allowed = n) : i.allowed = 0
                            }
                            return i.t = n, i.vx = r, i.vy = a, c ? (t.renderer.scrollBy(e.wheelX * e.speed, e.wheelY * e.speed), e.stop()) : void 0
                        }
                    }
                }).call(r.prototype), t.DefaultHandlers = r
            })), deAceFine("ace/tooltip", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom"], (function (e, t, i) {
                e("./lib/oop");
                var n = e("./lib/dom");

                function s(e) {
                    this.isOpen = !1, this.$element = null, this.$parentNode = e
                }

                (function () {
                    this.$init = function () {
                        return this.$element = n.createElement("div"), this.$element.className = "ace_tooltip", this.$element.style.display = "none", this.$parentNode.appendChild(this.$element), this.$element
                    }, this.getElement = function () {
                        return this.$element || this.$init()
                    }, this.setText = function (e) {
                        this.getElement().textContent = e
                    }, this.setHtml = function (e) {
                        this.getElement().innerHTML = e
                    }, this.setPosition = function (e, t) {
                        this.getElement().style.left = e + "px", this.getElement().style.top = t + "px"
                    }, this.setClassName = function (e) {
                        n.addCssClass(this.getElement(), e)
                    }, this.show = function (e, t, i) {
                        null != e && this.setText(e), null != t && null != i && this.setPosition(t, i), this.isOpen || (this.getElement().style.display = "block", this.isOpen = !0)
                    }, this.hide = function () {
                        this.isOpen && (this.getElement().style.display = "none", this.isOpen = !1)
                    }, this.getHeight = function () {
                        return this.getElement().offsetHeight
                    }, this.getWidth = function () {
                        return this.getElement().offsetWidth
                    }, this.destroy = function () {
                        this.isOpen = !1, this.$element && this.$element.parentNode && this.$element.parentNode.removeChild(this.$element)
                    }
                }).call(s.prototype), t.Tooltip = s
            })), deAceFine("ace/mouse/default_gutter_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event", "ace/tooltip"], (function (e, t, i) {
                var n = e("../lib/dom"), s = e("../lib/oop"), o = e("../lib/event"), r = e("../tooltip").Tooltip;

                function a(e) {
                    var t, i, s, r = e.editor, a = r.renderer.$gutterLayer, c = new l(r.container);

                    function h() {
                        var t = i.getDocumentPosition().row, n = a.$annotations[t];
                        if (!n) return u();
                        var o = r.session.getLength();
                        if (t == o) {
                            var l = r.renderer.pixelToScreenCoordinates(0, i.y).row, h = i.$pos;
                            if (l > r.session.documentToScreenRow(h.row, h.column)) return u()
                        }
                        if (s != n) if (s = n.text.join("<br/>"), c.setHtml(s), c.show(), r._signal("showGutterTooltip", c), r.on("mousewheel", u), e.$tooltipFollowsMouse) d(i); else {
                            var g = i.domEvent.target, f = g.getBoundingClientRect(), p = c.getElement().style;
                            p.left = f.right + "px", p.top = f.bottom + "px"
                        }
                    }

                    function u() {
                        t && (t = clearTimeout(t)), s && (c.hide(), s = null, r._signal("hideGutterTooltip", c), r.removeEventListener("mousewheel", u))
                    }

                    function d(e) {
                        c.setPosition(e.x, e.y)
                    }

                    e.editor.setDefaultHandler("guttermousedown", (function (t) {
                        if (r.isFocused() && 0 == t.getButton()) {
                            var i = a.getRegion(t);
                            if ("foldWidgets" != i) {
                                var n = t.getDocumentPosition().row, s = r.session.selection;
                                if (t.getShiftKey()) s.selectTo(n, 0); else {
                                    if (2 == t.domEvent.detail) return r.selectAll(), t.preventDefault();
                                    e.$clickSelection = r.selection.getLineRange(n)
                                }
                                return e.setState("selectByLines"), e.captureMouse(t), t.preventDefault()
                            }
                        }
                    })), e.editor.setDefaultHandler("guttermousemove", (function (o) {
                        var r = o.domEvent.target || o.domEvent.srcElement;
                        if (n.hasCssClass(r, "ace_fold-widget")) return u();
                        s && e.$tooltipFollowsMouse && d(o), i = o, t || (t = setTimeout((function () {
                            t = null, i && !e.isMousePressed ? h() : u()
                        }), 50))
                    })), o.addListener(r.renderer.$gutter, "mouseout", (function (e) {
                        i = null, s && !t && (t = setTimeout((function () {
                            t = null, u()
                        }), 50))
                    })), r.on("changeSession", u)
                }

                function l(e) {
                    r.call(this, e)
                }

                s.inherits(l, r), function () {
                    this.setPosition = function (e, t) {
                        var i = window.innerWidth || document.documentElement.clientWidth,
                            n = window.innerHeight || document.documentElement.clientHeight, s = this.getWidth(),
                            o = this.getHeight();
                        e += 15, t += 15, e + s > i && (e -= e + s - i), t + o > n && (t -= 20 + o), r.prototype.setPosition.call(this, e, t)
                    }
                }.call(l.prototype), t.GutterHandler = a
            })), deAceFine("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], (function (e, t, i) {
                var n = e("../lib/event"), s = e("../lib/useragent"), o = t.MouseEvent = function (e, t) {
                    this.domEvent = e, this.editor = t, this.x = this.clientX = e.clientX, this.y = this.clientY = e.clientY, this.$pos = null, this.$inSelection = null, this.propagationStopped = !1, this.defaultPrevented = !1
                };
                (function () {
                    this.stopPropagation = function () {
                        n.stopPropagation(this.domEvent), this.propagationStopped = !0
                    }, this.preventDefault = function () {
                        n.preventDefault(this.domEvent), this.defaultPrevented = !0
                    }, this.stop = function () {
                        this.stopPropagation(), this.preventDefault()
                    }, this.getDocumentPosition = function () {
                        return this.$pos ? this.$pos : (this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY), this.$pos)
                    }, this.inSelection = function () {
                        if (null !== this.$inSelection) return this.$inSelection;
                        var e = this.editor, t = e.getSelectionRange();
                        if (t.isEmpty()) this.$inSelection = !1; else {
                            var i = this.getDocumentPosition();
                            this.$inSelection = t.contains(i.row, i.column)
                        }
                        return this.$inSelection
                    }, this.getButton = function () {
                        return n.getButton(this.domEvent)
                    }, this.getShiftKey = function () {
                        return this.domEvent.shiftKey
                    }, this.getAccelKey = s.isMac ? function () {
                        return this.domEvent.metaKey
                    } : function () {
                        return this.domEvent.ctrlKey
                    }
                }).call(o.prototype)
            })), deAceFine("ace/mouse/dragdrop_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], (function (e, t, i) {
                var n = e("../lib/dom"), s = e("../lib/event"), o = e("../lib/useragent"), r = 200, a = 200, l = 5;

                function c(e) {
                    var t = e.editor, i = n.createElement("img");
                    i.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", o.isOpera && (i.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;");
                    var c = ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd", "onMouseDrag"];
                    c.forEach((function (t) {
                        e[t] = this[t]
                    }), this), t.addEventListener("mousedown", this.onMouseDown.bind(e));
                    var u, d, g, f, p, m, v, w, b, y, $, S = t.container, x = 0;

                    function C(e, i) {
                        var n = Date.now(), s = !i || e.row != i.row, o = !i || e.column != i.column;
                        if (!y || s || o) t.moveCursorToPosition(e), y = n, $ = {x: d, y: g}; else {
                            var r = h($.x, $.y, d, g);
                            r > l ? y = null : n - y >= a && (t.renderer.scrollCursorIntoView(), y = null)
                        }
                    }

                    function k(e, i) {
                        var n = Date.now(), s = t.renderer.layerConfig.lineHeight,
                            o = t.renderer.layerConfig.characterWidth, a = t.renderer.scroller.getBoundingClientRect(),
                            l = {x: {left: d - a.left, right: a.right - d}, y: {top: g - a.top, bottom: a.bottom - g}},
                            c = Math.min(l.x.left, l.x.right), h = Math.min(l.y.top, l.y.bottom),
                            u = {row: e.row, column: e.column};
                        c / o <= 2 && (u.column += l.x.left < l.x.right ? -3 : 2), h / s <= 1 && (u.row += l.y.top < l.y.bottom ? -1 : 1);
                        var f = e.row != u.row, p = e.column != u.column, m = !i || e.row != i.row;
                        f || p && !m ? b ? n - b >= r && t.renderer.scrollCursorIntoView(u) : b = n : b = null
                    }

                    function L() {
                        var e = m;
                        m = t.renderer.screenToTextCoordinates(d, g), C(m, e), k(m, e)
                    }

                    function A() {
                        p = t.selection.toOrientedRange(), u = t.session.addMarker(p, "ace_selection", t.getSelectionStyle()), t.clearSelection(), t.isFocused() && t.renderer.$cursorLayer.setBlinking(!1), clearInterval(f), L(), f = setInterval(L, 20), x = 0, s.addListener(document, "mousemove", R)
                    }

                    function E() {
                        clearInterval(f), t.session.removeMarker(u), u = null, t.selection.fromOrientedRange(p), t.isFocused() && !w && t.$resetCursorStyle(), p = null, m = null, x = 0, b = null, y = null, s.removeListener(document, "mousemove", R)
                    }

                    this.onDragStart = function (e) {
                        if (this.cancelDrag || !S.draggable) {
                            var n = this;
                            return setTimeout((function () {
                                n.startSelect(), n.captureMouse(e)
                            }), 0), e.preventDefault()
                        }
                        p = t.getSelectionRange();
                        var s = e.dataTransfer;
                        s.effectAllowed = t.getReadOnly() ? "copy" : "copyMove", o.isOpera && (t.container.appendChild(i), i.scrollTop = 0), s.setDragImage && s.setDragImage(i, 0, 0), o.isOpera && t.container.removeChild(i), s.clearData(), s.setData("Text", t.session.getTextRange()), w = !0, this.setState("drag")
                    }, this.onDragEnd = function (e) {
                        if (S.draggable = !1, w = !1, this.setState(null), !t.getReadOnly()) {
                            var i = e.dataTransfer.dropEffect;
                            v || "move" != i || t.session.remove(t.getSelectionRange()), t.$resetCursorStyle()
                        }
                        this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle("")
                    }, this.onDragEnter = function (e) {
                        if (!t.getReadOnly() && T(e.dataTransfer)) return d = e.clientX, g = e.clientY, u || A(), x++, e.dataTransfer.dropEffect = v = M(e), s.preventDefault(e)
                    }, this.onDragOver = function (e) {
                        if (!t.getReadOnly() && T(e.dataTransfer)) return d = e.clientX, g = e.clientY, u || (A(), x++), null !== _ && (_ = null), e.dataTransfer.dropEffect = v = M(e), s.preventDefault(e)
                    }, this.onDragLeave = function (e) {
                        if (x--, x <= 0 && u) return E(), v = null, s.preventDefault(e)
                    }, this.onDrop = function (e) {
                        if (m) {
                            var i = e.dataTransfer;
                            if (w) switch (v) {
                                case"move":
                                    p = p.contains(m.row, m.column) ? {start: m, end: m} : t.moveText(p, m);
                                    break;
                                case"copy":
                                    p = t.moveText(p, m, !0);
                                    break
                            } else {
                                var n = i.getData("Text");
                                p = {start: m, end: t.session.insert(m, n)}, t.focus(), v = null
                            }
                            return E(), s.preventDefault(e)
                        }
                    }, s.addListener(S, "dragstart", this.onDragStart.bind(e)), s.addListener(S, "dragend", this.onDragEnd.bind(e)), s.addListener(S, "dragenter", this.onDragEnter.bind(e)), s.addListener(S, "dragover", this.onDragOver.bind(e)), s.addListener(S, "dragleave", this.onDragLeave.bind(e)), s.addListener(S, "drop", this.onDrop.bind(e));
                    var _ = null;

                    function R() {
                        null == _ && (_ = setTimeout((function () {
                            null != _ && u && E()
                        }), 20))
                    }

                    function T(e) {
                        var t = e.types;
                        return !t || Array.prototype.some.call(t, (function (e) {
                            return "text/plain" == e || "Text" == e
                        }))
                    }

                    function M(e) {
                        var t = ["copy", "copymove", "all", "uninitialized"],
                            i = ["move", "copymove", "linkmove", "all", "uninitialized"],
                            n = o.isMac ? e.altKey : e.ctrlKey, s = "uninitialized";
                        try {
                            s = e.dataTransfer.effectAllowed.toLowerCase()
                        } catch (e) {
                        }
                        var r = "none";
                        return n && t.indexOf(s) >= 0 ? r = "copy" : i.indexOf(s) >= 0 ? r = "move" : t.indexOf(s) >= 0 && (r = "copy"), r
                    }
                }

                function h(e, t, i, n) {
                    return Math.sqrt(Math.pow(i - e, 2) + Math.pow(n - t, 2))
                }

                (function () {
                    this.dragWait = function () {
                        var e = Date.now() - this.mousedownEvent.time;
                        e > this.editor.getDragDelay() && this.startDrag()
                    }, this.dragWaitEnd = function () {
                        var e = this.editor.container;
                        e.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()), this.selectEnd()
                    }, this.dragReadyEnd = function (e) {
                        this.editor.$resetCursorStyle(), this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle(""), this.dragWaitEnd()
                    }, this.startDrag = function () {
                        this.cancelDrag = !1;
                        var e = this.editor, t = e.container;
                        t.draggable = !0, e.renderer.$cursorLayer.setBlinking(!1), e.setStyle("ace_dragging");
                        var i = o.isWin ? "default" : "move";
                        e.renderer.setCursorStyle(i), this.setState("dragReady")
                    }, this.onMouseDrag = function (e) {
                        var t = this.editor.container;
                        if (o.isIE && "dragReady" == this.state) {
                            var i = h(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
                            i > 3 && t.dragDrop()
                        }
                        if ("dragWait" === this.state) {
                            i = h(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
                            i > 0 && (t.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()))
                        }
                    }, this.onMouseDown = function (e) {
                        if (this.$dragEnabled) {
                            this.mousedownEvent = e;
                            var t = this.editor, i = e.inSelection(), n = e.getButton(), s = e.domEvent.detail || 1;
                            if (1 === s && 0 === n && i) {
                                if (e.editor.inMultiSelectMode && (e.getAccelKey() || e.getShiftKey())) return;
                                this.mousedownEvent.time = Date.now();
                                var r = e.domEvent.target || e.domEvent.srcElement;
                                if ("unselectable" in r && (r.unselectable = "on"), t.getDragDelay()) {
                                    if (o.isWebKit) {
                                        this.cancelDrag = !0;
                                        var a = t.container;
                                        a.draggable = !0
                                    }
                                    this.setState("dragWait")
                                } else this.startDrag();
                                this.captureMouse(e, this.onMouseDrag.bind(this)), e.defaultPrevented = !0
                            }
                        }
                    }
                }).call(c.prototype), t.DragdropHandler = c
            })), deAceFine("ace/mouse/touch_handler", ["require", "exports", "module", "ace/mouse/mouse_event", "ace/lib/dom"], (function (e, t, i) {
                var n = e("./mouse_event").MouseEvent, s = e("../lib/dom");
                t.addTouchListeners = function (e, t) {
                    var i, o, r, a, l, c, h, u, d, g = "scroll", f = 0, p = 0, m = 0, v = 0;

                    function w() {
                        var e = window.navigator && window.navigator.clipboard, i = !1, n = function () {
                            var n = t.getCopyText(), o = t.session.getUndoManager().hasUndo();
                            d.replaceChild(s.buildDom(i ? ["span", !n && ["span", {
                                class: "ace_mobile-button",
                                action: "selectall"
                            }, "Select All"], n && ["span", {
                                class: "ace_mobile-button",
                                action: "copy"
                            }, "Copy"], n && ["span", {
                                class: "ace_mobile-button",
                                action: "cut"
                            }, "Cut"], e && ["span", {
                                class: "ace_mobile-button",
                                action: "paste"
                            }, "Paste"], o && ["span", {
                                class: "ace_mobile-button",
                                action: "undo"
                            }, "Undo"], ["span", {
                                class: "ace_mobile-button",
                                action: "find"
                            }, "Find"], ["span", {
                                class: "ace_mobile-button",
                                action: "openCommandPallete"
                            }, "Pallete"]] : ["span"]), d.firstChild)
                        }, o = function (s) {
                            var o = s.target.getAttribute("action");
                            if ("more" == o || !i) return i = !i, n();
                            "paste" == o ? e.readText().then((function (e) {
                                t.execCommand(o, e)
                            })) : o && ("cut" != o && "copy" != o || (e ? e.writeText(t.getCopyText()) : document.execCommand("copy")), t.execCommand(o)), d.firstChild.style.display = "none", i = !1, "openCommandPallete" != o && t.focus()
                        };
                        d = s.buildDom(["div", {
                            class: "ace_mobile-menu", ontouchstart: function (e) {
                                g = "menu", e.stopPropagation(), e.preventDefault(), t.textInput.focus()
                            }, ontouchend: function (e) {
                                e.stopPropagation(), e.preventDefault(), o(e)
                            }, onclick: o
                        }, ["span"], ["span", {class: "ace_mobile-button", action: "more"}, "..."]], t.container)
                    }

                    function b() {
                        d || w();
                        var e = t.selection.cursor, i = t.renderer.textToScreenCoordinates(e.row, e.column),
                            n = t.container.getBoundingClientRect();
                        d.style.top = i.pageY - n.top - 3 + "px", d.style.right = "10px", d.style.display = "", d.firstChild.style.display = "none", t.on("input", y)
                    }

                    function y(e) {
                        d && (d.style.display = "none"), t.off("input", y)
                    }

                    function $() {
                        l = null, clearTimeout(l);
                        var e = t.selection.getRange(), i = e.contains(h.row, h.column);
                        !e.isEmpty() && i || (t.selection.moveToPosition(h), t.selection.selectWord()), g = "wait", b()
                    }

                    function S() {
                        l = null, clearTimeout(l), t.selection.moveToPosition(h);
                        var e = p >= 2 ? t.selection.getLineRange(h.row) : t.session.getBracketRange(h);
                        e && !e.isEmpty() ? t.selection.setRange(e) : t.selection.selectWord(), g = "wait"
                    }

                    function x() {
                        f += 60, c = setInterval((function () {
                            f-- <= 0 && (clearInterval(c), c = null), Math.abs(m) < .01 && (m = 0), Math.abs(v) < .01 && (v = 0), f < 20 && (m *= .9), f < 20 && (v *= .9);
                            var e = t.session.getScrollTop();
                            t.renderer.scrollBy(10 * m, 10 * v), e == t.session.getScrollTop() && (f = 0)
                        }), 10)
                    }

                    e.addEventListener("contextmenu", (function (e) {
                        if (u) {
                            var i = t.textInput.getElement();
                            i.focus()
                        }
                    })), e.addEventListener("touchstart", (function (e) {
                        var s = e.touches;
                        if (l || s.length > 1) return clearTimeout(l), l = null, r = -1, void (g = "zoom");
                        u = t.$mouseHandler.isMousePressed = !0;
                        var c = t.renderer.layerConfig.lineHeight, d = t.renderer.layerConfig.lineHeight,
                            w = e.timeStamp;
                        a = w;
                        var b = s[0], y = b.clientX, x = b.clientY;
                        Math.abs(i - y) + Math.abs(o - x) > c && (r = -1), i = e.clientX = y, o = e.clientY = x, m = v = 0;
                        var C = new n(e, t);
                        if (h = C.getDocumentPosition(), w - r < 500 && 1 == s.length && !f) p++, e.preventDefault(), e.button = 0, S(); else {
                            p = 0;
                            var k = t.selection.cursor, L = t.selection.isEmpty() ? k : t.selection.anchor,
                                A = t.renderer.$cursorLayer.getPixelPosition(k, !0),
                                E = t.renderer.$cursorLayer.getPixelPosition(L, !0),
                                _ = t.renderer.scroller.getBoundingClientRect(), R = function (e, t) {
                                    return e /= d, t = t / c - .75, e * e + t * t
                                };
                            if (e.clientX < _.left) return void (g = "zoom");
                            var T = R(e.clientX - _.left - A.left, e.clientY - _.top - A.top),
                                M = R(e.clientX - _.left - E.left, e.clientY - _.top - E.top);
                            T < 3.5 && M < 3.5 && (g = T > M ? "cursor" : "anchor"), g = M < 3.5 ? "anchor" : T < 3.5 ? "cursor" : "scroll", l = setTimeout($, 450)
                        }
                        r = w
                    })), e.addEventListener("touchend", (function (e) {
                        u = t.$mouseHandler.isMousePressed = !1, c && clearInterval(c), "zoom" == g ? (g = "", f = 0) : l ? (t.selection.moveToPosition(h), f = 0, b()) : "scroll" == g ? (x(), e.preventDefault(), y()) : b(), clearTimeout(l), l = null
                    })), e.addEventListener("touchmove", (function (e) {
                        l && (clearTimeout(l), l = null);
                        var s = e.touches;
                        if (!(s.length > 1 || "zoom" == g)) {
                            var r = s[0], c = i - r.clientX, h = o - r.clientY;
                            if ("wait" == g) {
                                if (!(c * c + h * h > 4)) return e.preventDefault();
                                g = "cursor"
                            }
                            i = r.clientX, o = r.clientY, e.clientX = r.clientX, e.clientY = r.clientY;
                            var u = e.timeStamp, d = u - a;
                            if (a = u, "scroll" == g) {
                                var f = new n(e, t);
                                f.speed = 1, f.wheelX = c, f.wheelY = h, 10 * Math.abs(c) < Math.abs(h) && (c = 0), 10 * Math.abs(h) < Math.abs(c) && (h = 0), 0 != d && (m = c / d, v = h / d), t._emit("mousewheel", f), f.propagationStopped || (m = v = 0)
                            } else {
                                var p = new n(e, t), w = p.getDocumentPosition();
                                "cursor" == g ? t.selection.moveCursorToPosition(w) : "anchor" == g && t.selection.setSelectionAnchor(w.row, w.column), t.renderer.scrollCursorIntoView(w), e.preventDefault()
                            }
                        }
                    }))
                }
            })), deAceFine("ace/lib/net", ["require", "exports", "module", "ace/lib/dom"], (function (e, t, i) {
                var n = e("./dom");
                t.get = function (e, t) {
                    var i = new XMLHttpRequest;
                    i.open("GET", e, !0), i.onreadystatechange = function () {
                        4 === i.readyState && t(i.responseText)
                    }, i.send(null)
                }, t.loadScript = function (e, t) {
                    var i = n.getDocumentHead(), s = document.createElement("script");
                    s.src = e, i.appendChild(s), s.onload = s.onreadystatechange = function (e, i) {
                        !i && s.readyState && "loaded" != s.readyState && "complete" != s.readyState || (s = s.onload = s.onreadystatechange = null, i || t())
                    }
                }, t.qualifyURL = function (e) {
                    var t = document.createElement("a");
                    return t.href = e, t.href
                }
            })), deAceFine("ace/lib/event_emitter", ["require", "exports", "module"], (function (e, i, n) {
                var s = {}, o = function () {
                    this.propagationStopped = !0
                }, r = function () {
                    this.defaultPrevented = !0
                };
                s._emit = s._dispatchEvent = function (e, i) {
                    this._eventRegistry || (this._eventRegistry = {}), this._defaultHandlers || (this._defaultHandlers = {});
                    var n = this._eventRegistry[e] || [], s = this._defaultHandlers[e];
                    if (n.length || s) {
                        "object" == Object(t["a"])(i) && i || (i = {}), i.type || (i.type = e), i.stopPropagation || (i.stopPropagation = o), i.preventDefault || (i.preventDefault = r), n = n.slice();
                        for (var a = 0; a < n.length; a++) if (n[a](i, this), i.propagationStopped) break;
                        return s && !i.defaultPrevented ? s(i, this) : void 0
                    }
                }, s._signal = function (e, t) {
                    var i = (this._eventRegistry || {})[e];
                    if (i) {
                        i = i.slice();
                        for (var n = 0; n < i.length; n++) i[n](t, this)
                    }
                }, s.once = function (e, t) {
                    var i = this;
                    if (this.addEventListener(e, (function n() {
                        i.removeEventListener(e, n), t.apply(null, arguments)
                    })), !t) return new Promise((function (e) {
                        t = e
                    }))
                }, s.setDefaultHandler = function (e, t) {
                    var i = this._defaultHandlers;
                    if (i || (i = this._defaultHandlers = {_disabled_: {}}), i[e]) {
                        var n = i[e], s = i._disabled_[e];
                        s || (i._disabled_[e] = s = []), s.push(n);
                        var o = s.indexOf(t);
                        -1 != o && s.splice(o, 1)
                    }
                    i[e] = t
                }, s.removeDefaultHandler = function (e, t) {
                    var i = this._defaultHandlers;
                    if (i) {
                        var n = i._disabled_[e];
                        if (i[e] == t) n && this.setDefaultHandler(e, n.pop()); else if (n) {
                            var s = n.indexOf(t);
                            -1 != s && n.splice(s, 1)
                        }
                    }
                }, s.on = s.addEventListener = function (e, t, i) {
                    this._eventRegistry = this._eventRegistry || {};
                    var n = this._eventRegistry[e];
                    return n || (n = this._eventRegistry[e] = []), -1 == n.indexOf(t) && n[i ? "unshift" : "push"](t), t
                }, s.off = s.removeListener = s.removeEventListener = function (e, t) {
                    this._eventRegistry = this._eventRegistry || {};
                    var i = this._eventRegistry[e];
                    if (i) {
                        var n = i.indexOf(t);
                        -1 !== n && i.splice(n, 1)
                    }
                }, s.removeAllListeners = function (e) {
                    this._eventRegistry && (this._eventRegistry[e] = [])
                }, i.EventEmitter = s
            })), deAceFine("ace/lib/app_config", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], (function (e, i, n) {
                var s = e("./oop"), o = e("./event_emitter").EventEmitter, r = {
                    setOptions: function (e) {
                        Object.keys(e).forEach((function (t) {
                            this.setOption(t, e[t])
                        }), this)
                    }, getOptions: function (e) {
                        var t = {};
                        if (e) Array.isArray(e) || (t = e, e = Object.keys(t)); else {
                            var i = this.$options;
                            e = Object.keys(i).filter((function (e) {
                                return !i[e].hidden
                            }))
                        }
                        return e.forEach((function (e) {
                            t[e] = this.getOption(e)
                        }), this), t
                    }, setOption: function (e, t) {
                        if (this["$" + e] !== t) {
                            var i = this.$options[e];
                            if (!i) return a('misspelled option "' + e + '"');
                            if (i.forwardTo) return this[i.forwardTo] && this[i.forwardTo].setOption(e, t);
                            i.handlesSet || (this["$" + e] = t), i && i.set && i.set.call(this, t)
                        }
                    }, getOption: function (e) {
                        var t = this.$options[e];
                        return t ? t.forwardTo ? this[t.forwardTo] && this[t.forwardTo].getOption(e) : t && t.get ? t.get.call(this) : this["$" + e] : a('misspelled option "' + e + '"')
                    }
                };

                function a(e) {
                    "undefined" != typeof console && console.warn && console.warn.apply(console, arguments)
                }

                function l(e, i) {
                    var n = new Error(e);
                    n.data = i, "object" == ("undefined" === typeof console ? "undefined" : Object(t["a"])(console)) && console.error && console.error(n), setTimeout((function () {
                        throw n
                    }))
                }

                var c = function () {
                    this.$defaultOptions = {}
                };
                (function () {
                    s.implement(this, o), this.defineOptions = function (e, t, i) {
                        return e.$options || (this.$defaultOptions[t] = e.$options = {}), Object.keys(i).forEach((function (t) {
                            var n = i[t];
                            "string" == typeof n && (n = {forwardTo: n}), n.name || (n.name = t), e.$options[n.name] = n, "initialValue" in n && (e["$" + n.name] = n.initialValue)
                        })), s.implement(e, r), this
                    }, this.resetOptions = function (e) {
                        Object.keys(e.$options).forEach((function (t) {
                            var i = e.$options[t];
                            "value" in i && e.setOption(t, i.value)
                        }))
                    }, this.setDefaultValue = function (e, t, i) {
                        if (!e) {
                            for (e in this.$defaultOptions) if (this.$defaultOptions[e][t]) break;
                            if (!this.$defaultOptions[e][t]) return !1
                        }
                        var n = this.$defaultOptions[e] || (this.$defaultOptions[e] = {});
                        n[t] && (n.forwardTo ? this.setDefaultValue(n.forwardTo, t, i) : n[t].value = i)
                    }, this.setDefaultValues = function (e, t) {
                        Object.keys(t).forEach((function (i) {
                            this.setDefaultValue(e, i, t[i])
                        }), this)
                    }, this.warn = a, this.reportError = l
                }).call(c.prototype), i.AppConfig = c
            })), deAceFine("ace/config", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/lib/net", "ace/lib/app_config"], (function (e, t, i) {
                var n = e("./lib/lang"), s = (e("./lib/oop"), e("./lib/net")), o = e("./lib/app_config").AppConfig;
                i.exports = t = new o;
                var r = function () {
                    return this || "undefined" != typeof window && window
                }(), a = {
                    packaged: !1,
                    workerPath: null,
                    modePath: null,
                    themePath: null,
                    basePath: "",
                    suffix: ".js",
                    $moduleUrls: {},
                    loadWorkerFromBlob: !0,
                    sharedPopups: !1
                };
                t.get = function (e) {
                    if (!a.hasOwnProperty(e)) throw new Error("Unknown config key: " + e);
                    return a[e]
                }, t.set = function (e, t) {
                    if (a.hasOwnProperty(e)) a[e] = t; else if (0 == this.setDefaultValue("", e, t)) throw new Error("Unknown config key: " + e)
                }, t.all = function () {
                    return n.copyObject(a)
                }, t.$modes = {}, t.moduleUrl = function (e, t) {
                    if (a.$moduleUrls[e]) return a.$moduleUrls[e];
                    var i = e.split("/");
                    t = t || i[i.length - 2] || "";
                    var n = "snippets" == t ? "/" : "-", s = i[i.length - 1];
                    if ("worker" == t && "-" == n) {
                        var o = new RegExp("^" + t + "[\\-_]|[\\-_]" + t + "$", "g");
                        s = s.replace(o, "")
                    }
                    (!s || s == t) && i.length > 1 && (s = i[i.length - 2]);
                    var r = a[t + "Path"];
                    return null == r ? r = a.basePath : "/" == n && (t = n = ""), r && "/" != r.slice(-1) && (r += "/"), r + t + n + s + this.get("suffix")
                }, t.setModuleUrl = function (e, t) {
                    return a.$moduleUrls[e] = t
                }, t.$loading = {}, t.loadModule = function (i, n) {
                    var o, r;
                    Array.isArray(i) && (r = i[0], i = i[1]);
                    try {
                        o = e(i)
                    } catch (c) {
                    }
                    if (o && !t.$loading[i]) return n && n(o);
                    if (t.$loading[i] || (t.$loading[i] = []), t.$loading[i].push(n), !(t.$loading[i].length > 1)) {
                        var a = function () {
                            e([i], (function (e) {
                                t._emit("load.module", {name: i, module: e});
                                var n = t.$loading[i];
                                t.$loading[i] = null, n.forEach((function (t) {
                                    t && t(e)
                                }))
                            }))
                        };
                        if (!t.get("packaged")) return a();
                        s.loadScript(t.moduleUrl(i, r), a), l()
                    }
                };
                var l = function () {
                    a.basePath || a.workerPath || a.modePath || a.themePath || Object.keys(a.$moduleUrls).length || (console.error("Unable to infer path to ace from script src,", "use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes", "or with webpack use ace/webpack-resolver"), l = function () {
                    })
                };

                function c(n) {
                    if (r && r.document) {
                        a.packaged = n || e.packaged || i.packaged || r.deAceFine && deAceFine.packaged;
                        for (var s = {}, o = "", l = document.currentScript || document._currentScript, c = l && l.ownerDocument || document, u = c.getElementsByTagName("script"), d = 0; d < u.length; d++) {
                            var g = u[d], f = g.src || g.getAttribute("src");
                            if (f) {
                                for (var p = g.attributes, m = 0, v = p.length; m < v; m++) {
                                    var w = p[m];
                                    0 === w.name.indexOf("data-ace-") && (s[h(w.name.replace(/^data-ace-/, ""))] = w.value)
                                }
                                var b = f.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);
                                b && (o = b[1])
                            }
                        }
                        for (var y in o && (s.base = s.base || o, s.packaged = !0), s.basePath = s.base, s.workerPath = s.workerPath || s.base, s.modePath = s.modePath || s.base, s.themePath = s.themePath || s.base, delete s.base, s) "undefined" !== typeof s[y] && t.set(y, s[y])
                    }
                }

                function h(e) {
                    return e.replace(/-(.)/g, (function (e, t) {
                        return t.toUpperCase()
                    }))
                }

                c(!0), t.init = c, t.version = "1.4.5"
            })), deAceFine("ace/mouse/mouse_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/mouse/default_handlers", "ace/mouse/default_gutter_handler", "ace/mouse/mouse_event", "ace/mouse/dragdrop_handler", "ace/mouse/touch_handler", "ace/config"], (function (e, t, i) {
                var n = e("../lib/event"), s = e("../lib/useragent"), o = e("./default_handlers").DefaultHandlers,
                    r = e("./default_gutter_handler").GutterHandler, a = e("./mouse_event").MouseEvent,
                    l = e("./dragdrop_handler").DragdropHandler, c = e("./touch_handler").addTouchListeners,
                    h = e("../config"), u = function (e) {
                        var t = this;
                        this.editor = e, new o(this), new r(this), new l(this);
                        var i = function (t) {
                            var i = !document.hasFocus || !document.hasFocus() || !e.isFocused() && document.activeElement == (e.textInput && e.textInput.getElement());
                            i && window.focus(), e.focus()
                        }, a = e.renderer.getMouseEventTarget();
                        n.addListener(a, "click", this.onMouseEvent.bind(this, "click")), n.addListener(a, "mousemove", this.onMouseMove.bind(this, "mousemove")), n.addMultiMouseDownListener([a, e.renderer.scrollBarV && e.renderer.scrollBarV.inner, e.renderer.scrollBarH && e.renderer.scrollBarH.inner, e.textInput && e.textInput.getElement()].filter(Boolean), [400, 300, 250], this, "onMouseEvent"), n.addMouseWheelListener(e.container, this.onMouseWheel.bind(this, "mousewheel")), c(e.container, e);
                        var h = e.renderer.$gutter;
                        n.addListener(h, "mousedown", this.onMouseEvent.bind(this, "guttermousedown")), n.addListener(h, "click", this.onMouseEvent.bind(this, "gutterclick")), n.addListener(h, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick")), n.addListener(h, "mousemove", this.onMouseEvent.bind(this, "guttermousemove")), n.addListener(a, "mousedown", i), n.addListener(h, "mousedown", i), s.isIE && e.renderer.scrollBarV && (n.addListener(e.renderer.scrollBarV.element, "mousedown", i), n.addListener(e.renderer.scrollBarH.element, "mousedown", i)), e.on("mousemove", (function (i) {
                            if (!t.state && !t.$dragDelay && t.$dragEnabled) {
                                var n = e.renderer.screenToTextCoordinates(i.x, i.y), s = e.session.selection.getRange(),
                                    o = e.renderer;
                                !s.isEmpty() && s.insideStart(n.row, n.column) ? o.setCursorStyle("default") : o.setCursorStyle("")
                            }
                        }))
                    };
                (function () {
                    this.onMouseEvent = function (e, t) {
                        this.editor._emit(e, new a(t, this.editor))
                    }, this.onMouseMove = function (e, t) {
                        var i = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
                        i && i.length && this.editor._emit(e, new a(t, this.editor))
                    }, this.onMouseWheel = function (e, t) {
                        var i = new a(t, this.editor);
                        i.speed = 2 * this.$scrollSpeed, i.wheelX = t.wheelX, i.wheelY = t.wheelY, this.editor._emit(e, i)
                    }, this.setState = function (e) {
                        this.state = e
                    }, this.captureMouse = function (e, t) {
                        this.x = e.x, this.y = e.y, this.isMousePressed = !0;
                        var i = this.editor, o = this.editor.renderer;
                        o.$isMousePressed = !0;
                        var r = this, l = function (e) {
                            if (e) {
                                if (s.isWebKit && !e.which && r.releaseMouse) return r.releaseMouse();
                                r.x = e.clientX, r.y = e.clientY, t && t(e), r.mouseEvent = new a(e, r.editor), r.$mouseMoved = !0
                            }
                        }, c = function (e) {
                            i.off("beforeEndOperation", u), clearInterval(d), h(), r[r.state + "End"] && r[r.state + "End"](e), r.state = "", r.isMousePressed = o.$isMousePressed = !1, o.$keepTextAreaAtCursor && o.$moveTextAreaToCursor(), r.$onCaptureMouseMove = r.releaseMouse = null, e && r.onMouseEvent("mouseup", e), i.endOperation()
                        }, h = function () {
                            r[r.state] && r[r.state](), r.$mouseMoved = !1
                        };
                        if (s.isOldIE && "dblclick" == e.domEvent.type) return setTimeout((function () {
                            c(e)
                        }));
                        var u = function (e) {
                            r.releaseMouse && i.curOp.command.name && i.curOp.selectionChanged && (r[r.state + "End"] && r[r.state + "End"](), r.state = "", r.releaseMouse())
                        };
                        i.on("beforeEndOperation", u), i.startOperation({command: {name: "mouse"}}), r.$onCaptureMouseMove = l, r.releaseMouse = n.capture(this.editor.container, l, c);
                        var d = setInterval(h, 20)
                    }, this.releaseMouse = null, this.cancelContextMenu = function () {
                        var e = function (t) {
                            t && t.domEvent && "contextmenu" != t.domEvent.type || (this.editor.off("nativecontextmenu", e), t && t.domEvent && n.stopEvent(t.domEvent))
                        }.bind(this);
                        setTimeout(e, 10), this.editor.on("nativecontextmenu", e)
                    }
                }).call(u.prototype), h.defineOptions(u.prototype, "mouseHandler", {
                    scrollSpeed: {initialValue: 2},
                    dragDelay: {initialValue: s.isMac ? 150 : 0},
                    dragEnabled: {initialValue: !0},
                    focusTimeout: {initialValue: 0},
                    tooltipFollowsMouse: {initialValue: !0}
                }), t.MouseHandler = u
            })), deAceFine("ace/mouse/fold_handler", ["require", "exports", "module", "ace/lib/dom"], (function (e, t, i) {
                var n = e("../lib/dom");

                function s(e) {
                    e.on("click", (function (t) {
                        var i = t.getDocumentPosition(), s = e.session, o = s.getFoldAt(i.row, i.column, 1);
                        o && (t.getAccelKey() ? s.removeFold(o) : s.expandFold(o), t.stop());
                        var r = t.domEvent && t.domEvent.target;
                        r && n.hasCssClass(r, "ace_inline_button") && n.hasCssClass(r, "ace_toggle_wrap") && (s.setOption("wrap", !s.getUseWrapMode()), e.renderer.scrollCursorIntoView())
                    })), e.on("gutterclick", (function (t) {
                        var i = e.renderer.$gutterLayer.getRegion(t);
                        if ("foldWidgets" == i) {
                            var n = t.getDocumentPosition().row, s = e.session;
                            s.foldWidgets && s.foldWidgets[n] && e.session.onFoldWidgetClick(n, t), e.isFocused() || e.focus(), t.stop()
                        }
                    })), e.on("gutterdblclick", (function (t) {
                        var i = e.renderer.$gutterLayer.getRegion(t);
                        if ("foldWidgets" == i) {
                            var n = t.getDocumentPosition().row, s = e.session, o = s.getParentFoldRangeData(n, !0),
                                r = o.range || o.firstRange;
                            if (r) {
                                n = r.start.row;
                                var a = s.getFoldAt(n, s.getLine(n).length, 1);
                                a ? s.removeFold(a) : (s.addFold("...", r), e.renderer.scrollCursorIntoView({
                                    row: r.start.row,
                                    column: 0
                                }))
                            }
                            t.stop()
                        }
                    }))
                }

                t.FoldHandler = s
            })), deAceFine("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"], (function (e, t, i) {
                var n = e("../lib/keys"), s = e("../lib/event"), o = function (e) {
                    this.$editor = e, this.$data = {editor: e}, this.$handlers = [], this.setDefaultHandler(e.commands)
                };
                (function () {
                    this.setDefaultHandler = function (e) {
                        this.removeKeyboardHandler(this.$defaultHandler), this.$defaultHandler = e, this.addKeyboardHandler(e, 0)
                    }, this.setKeyboardHandler = function (e) {
                        var t = this.$handlers;
                        if (t[t.length - 1] != e) {
                            while (t[t.length - 1] && t[t.length - 1] != this.$defaultHandler) this.removeKeyboardHandler(t[t.length - 1]);
                            this.addKeyboardHandler(e, 1)
                        }
                    }, this.addKeyboardHandler = function (e, t) {
                        if (e) {
                            "function" != typeof e || e.handleKeyboard || (e.handleKeyboard = e);
                            var i = this.$handlers.indexOf(e);
                            -1 != i && this.$handlers.splice(i, 1), void 0 == t ? this.$handlers.push(e) : this.$handlers.splice(t, 0, e), -1 == i && e.attach && e.attach(this.$editor)
                        }
                    }, this.removeKeyboardHandler = function (e) {
                        var t = this.$handlers.indexOf(e);
                        return -1 != t && (this.$handlers.splice(t, 1), e.detach && e.detach(this.$editor), !0)
                    }, this.getKeyboardHandler = function () {
                        return this.$handlers[this.$handlers.length - 1]
                    }, this.getStatusText = function () {
                        var e = this.$data, t = e.editor;
                        return this.$handlers.map((function (i) {
                            return i.getStatusText && i.getStatusText(t, e) || ""
                        })).filter(Boolean).join(" ")
                    }, this.$callKeyboardHandlers = function (e, t, i, n) {
                        for (var o, r = !1, a = this.$editor.commands, l = this.$handlers.length; l--;) if (o = this.$handlers[l].handleKeyboard(this.$data, e, t, i, n), o && o.command && (r = "null" == o.command || a.exec(o.command, this.$editor, o.args, n), r && n && -1 != e && 1 != o.passEvent && 1 != o.command.passEvent && s.stopEvent(n), r)) break;
                        return r || -1 != e || (o = {command: "insertstring"}, r = a.exec("insertstring", this.$editor, t)), r && this.$editor._signal && this.$editor._signal("keyboardActivity", o), r
                    }, this.onCommandKey = function (e, t, i) {
                        var s = n.keyCodeToString(i);
                        this.$callKeyboardHandlers(t, s, i, e)
                    }, this.onTextInput = function (e) {
                        this.$callKeyboardHandlers(-1, e)
                    }
                }).call(o.prototype), t.KeyBinding = o
            })), deAceFine("ace/lib/bidiutil", ["require", "exports", "module"], (function (e, t, i) {
                var n = 0, s = 0, o = !1, r = !1, a = !1,
                    l = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]],
                    c = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]],
                    h = 0, u = 1, d = 0, g = 1, f = 2, p = 3, m = 4, v = 5, w = 6, b = 7, y = 8, $ = 9, S = 10, x = 11,
                    C = 12, k = 13, L = 14, A = 15, E = 16, _ = 17, R = 18,
                    T = [R, R, R, R, R, R, R, R, R, w, v, w, y, v, R, R, R, R, R, R, R, R, R, R, R, R, R, R, v, v, v, w, y, m, m, x, x, x, m, m, m, m, m, S, $, S, $, $, f, f, f, f, f, f, f, f, f, f, $, m, m, m, m, m, m, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, m, m, m, m, m, m, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, m, m, m, m, R, R, R, R, R, R, v, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, R, $, m, x, x, x, x, m, m, m, m, d, m, m, R, m, m, x, x, f, f, m, d, m, m, m, f, d, m, m, m, m, m],
                    M = [y, y, y, y, y, y, y, y, y, y, y, R, R, R, d, g, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, y, v, k, L, A, E, _, $, x, x, x, x, x, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, $, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, y];

                function I(e, t, i, h) {
                    var u = n ? c : l, d = null, g = null, f = null, p = 0, m = null, b = null, $ = -1, S = null,
                        x = null, C = [];
                    if (!h) for (S = 0, h = []; S < i; S++) h[S] = O(e[S]);
                    for (s = n, o = !1, !1, r = !1, a = !1, x = 0; x < i; x++) {
                        if (d = p, C[x] = g = F(e, h, C, x), p = u[d][g], m = 240 & p, p &= 15, t[x] = f = u[p][5], m > 0) if (16 == m) {
                            for (S = $; S < x; S++) t[S] = 1;
                            $ = -1
                        } else $ = -1;
                        if (b = u[p][6], b) -1 == $ && ($ = x); else if ($ > -1) {
                            for (S = $; S < x; S++) t[S] = f;
                            $ = -1
                        }
                        h[x] == v && (t[x] = 0), s |= f
                    }
                    if (a) for (S = 0; S < i; S++) if (h[S] == w) {
                        t[S] = n;
                        for (var k = S - 1; k >= 0; k--) {
                            if (h[k] != y) break;
                            t[k] = n
                        }
                    }
                }

                function D(e, t, i) {
                    if (!(s < e)) if (1 != e || n != u || r) {
                        var o, a, l, c, h = i.length, d = 0;
                        while (d < h) {
                            if (t[d] >= e) {
                                o = d + 1;
                                while (o < h && t[o] >= e) o++;
                                for (a = d, l = o - 1; a < l; a++, l--) c = i[a], i[a] = i[l], i[l] = c;
                                d = o
                            }
                            d++
                        }
                    } else i.reverse()
                }

                function F(e, t, i, s) {
                    var l, c, h, u, T = t[s];
                    switch (T) {
                        case d:
                        case g:
                            o = !1;
                        case m:
                        case p:
                            return T;
                        case f:
                            return o ? p : f;
                        case b:
                            return o = !0, !0, g;
                        case y:
                            return m;
                        case $:
                            return s < 1 || s + 1 >= t.length || (l = i[s - 1]) != f && l != p || (c = t[s + 1]) != f && c != p ? m : (o && (c = p), c == l ? c : m);
                        case S:
                            return l = s > 0 ? i[s - 1] : v, l == f && s + 1 < t.length && t[s + 1] == f ? f : m;
                        case x:
                            if (s > 0 && i[s - 1] == f) return f;
                            if (o) return m;
                            u = s + 1, h = t.length;
                            while (u < h && t[u] == x) u++;
                            return u < h && t[u] == f ? f : m;
                        case C:
                            h = t.length, u = s + 1;
                            while (u < h && t[u] == C) u++;
                            if (u < h) {
                                var M = e[s], I = M >= 1425 && M <= 2303 || 64286 == M;
                                if (l = t[u], I && (l == g || l == b)) return g
                            }
                            return s < 1 || (l = t[s - 1]) == v ? m : i[s - 1];
                        case v:
                            return o = !1, r = !0, n;
                        case w:
                            return a = !0, m;
                        case k:
                        case L:
                        case E:
                        case _:
                        case A:
                            o = !1;
                        case R:
                            return m
                    }
                }

                function O(e) {
                    var t = e.charCodeAt(0), i = t >> 8;
                    return 0 == i ? t > 191 ? d : T[t] : 5 == i ? /[\u0591-\u05f4]/.test(e) ? g : d : 6 == i ? /[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(e) ? C : /[\u0660-\u0669\u066b-\u066c]/.test(e) ? p : 1642 == t ? x : /[\u06f0-\u06f9]/.test(e) ? f : b : 32 == i && t <= 8287 ? M[255 & t] : 254 == i && t >= 65136 ? b : m
                }

                t.L = d, t.R = g, t.EN = f, t.ON_R = 3, t.AN = 4, t.R_H = 5, t.B = 6, t.RLE = 7, t.DOT = "·", t.doBidiReorder = function (e, i, s) {
                    if (e.length < 2) return {};
                    var o = e.split(""), r = new Array(o.length), a = new Array(o.length), l = [];
                    n = s ? u : h, I(o, l, o.length, i);
                    for (var c = 0; c < r.length; r[c] = c, c++) ;
                    D(2, l, r), D(1, l, r);
                    for (c = 0; c < r.length - 1; c++) i[c] === p ? l[c] = t.AN : l[c] === g && (i[c] > b && i[c] < k || i[c] === m || i[c] === R) ? l[c] = t.ON_R : c > 0 && "ل" === o[c - 1] && /\u0622|\u0623|\u0625|\u0627/.test(o[c]) && (l[c - 1] = l[c] = t.R_H, c++);
                    o[o.length - 1] === t.DOT && (l[o.length - 1] = t.B), "‫" === o[0] && (l[0] = t.RLE);
                    for (c = 0; c < r.length; c++) a[c] = l[r[c]];
                    return {logicalFromVisual: r, bidiLevels: a}
                }, t.hasBidiCharacters = function (e, t) {
                    for (var i = !1, n = 0; n < e.length; n++) t[n] = O(e.charAt(n)), i || t[n] != g && t[n] != b && t[n] != p || (i = !0);
                    return i
                }, t.getVisualFromLogicalIdx = function (e, t) {
                    for (var i = 0; i < t.logicalFromVisual.length; i++) if (t.logicalFromVisual[i] == e) return i;
                    return 0
                }
            })), deAceFine("ace/bidihandler", ["require", "exports", "module", "ace/lib/bidiutil", "ace/lib/lang"], (function (e, t, i) {
                var n = e("./lib/bidiutil"), s = e("./lib/lang"), o = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\u202B]/,
                    r = function (e) {
                        this.session = e, this.bidiMap = {}, this.currentRow = null, this.bidiUtil = n, this.charWidths = [], this.EOL = "¬", this.showInvisibles = !0, this.isRtlDir = !1, this.$isRtl = !1, this.line = "", this.wrapIndent = 0, this.EOF = "¶", this.RLE = "‫", this.contentWidth = 0, this.fontMetrics = null, this.rtlLineOffset = 0, this.wrapOffset = 0, this.isMoveLeftOperation = !1, this.seenBidi = o.test(e.getValue())
                    };
                (function () {
                    this.isBidiRow = function (e, t, i) {
                        return !!this.seenBidi && (e !== this.currentRow && (this.currentRow = e, this.updateRowLine(t, i), this.updateBidiMap()), this.bidiMap.bidiLevels)
                    }, this.onChange = function (e) {
                        this.seenBidi ? this.currentRow = null : "insert" == e.action && o.test(e.lines.join("\n")) && (this.seenBidi = !0, this.currentRow = null)
                    }, this.getDocumentRow = function () {
                        var e = 0, t = this.session.$screenRowCache;
                        if (t.length) {
                            var i = this.session.$getRowCacheIndex(t, this.currentRow);
                            i >= 0 && (e = this.session.$docRowCache[i])
                        }
                        return e
                    }, this.getSplitIndex = function () {
                        var e = 0, t = this.session.$screenRowCache;
                        if (t.length) {
                            var i, n = this.session.$getRowCacheIndex(t, this.currentRow);
                            while (this.currentRow - e > 0) {
                                if (i = this.session.$getRowCacheIndex(t, this.currentRow - e - 1), i !== n) break;
                                n = i, e++
                            }
                        } else e = this.currentRow;
                        return e
                    }, this.updateRowLine = function (e, t) {
                        void 0 === e && (e = this.getDocumentRow());
                        var i = e === this.session.getLength() - 1, o = i ? this.EOF : this.EOL;
                        if (this.wrapIndent = 0, this.line = this.session.getLine(e), this.isRtlDir = this.$isRtl || this.line.charAt(0) === this.RLE, this.session.$useWrapMode) {
                            var r = this.session.$wrapData[e];
                            r && (void 0 === t && (t = this.getSplitIndex()), t > 0 && r.length ? (this.wrapIndent = r.indent, this.wrapOffset = this.wrapIndent * this.charWidths[n.L], this.line = t < r.length ? this.line.substring(r[t - 1], r[t]) : this.line.substring(r[r.length - 1])) : this.line = this.line.substring(0, r[t])), t == r.length && (this.line += this.showInvisibles ? o : n.DOT)
                        } else this.line += this.showInvisibles ? o : n.DOT;
                        var a, l = this.session, c = 0;
                        this.line = this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g, (function (e, t) {
                            return "\t" === e || l.isFullWidth(e.charCodeAt(0)) ? (a = "\t" === e ? l.getScreenTabSize(t + c) : 2, c += a - 1, s.stringRepeat(n.DOT, a)) : e
                        })), this.isRtlDir && (this.fontMetrics.$main.textContent = this.line.charAt(this.line.length - 1) == n.DOT ? this.line.substr(0, this.line.length - 1) : this.line, this.rtlLineOffset = this.contentWidth - this.fontMetrics.$main.getBoundingClientRect().width)
                    }, this.updateBidiMap = function () {
                        var e = [];
                        n.hasBidiCharacters(this.line, e) || this.isRtlDir ? this.bidiMap = n.doBidiReorder(this.line, e, this.isRtlDir) : this.bidiMap = {}
                    }, this.markAsDirty = function () {
                        this.currentRow = null
                    }, this.updateCharacterWidths = function (e) {
                        if (this.characterWidth !== e.$characterSize.width) {
                            this.fontMetrics = e;
                            var t = this.characterWidth = e.$characterSize.width, i = e.$measureCharWidth("ה");
                            this.charWidths[n.L] = this.charWidths[n.EN] = this.charWidths[n.ON_R] = t, this.charWidths[n.R] = this.charWidths[n.AN] = i, this.charWidths[n.R_H] = .45 * i, this.charWidths[n.B] = this.charWidths[n.RLE] = 0, this.currentRow = null
                        }
                    }, this.setShowInvisibles = function (e) {
                        this.showInvisibles = e, this.currentRow = null
                    }, this.setEolChar = function (e) {
                        this.EOL = e
                    }, this.setContentWidth = function (e) {
                        this.contentWidth = e
                    }, this.isRtlLine = function (e) {
                        return !!this.$isRtl || (void 0 != e ? this.session.getLine(e).charAt(0) == this.RLE : this.isRtlDir)
                    }, this.setRtlDirection = function (e, t) {
                        for (var i = e.getCursorPosition(), n = e.selection.getSelectionAnchor().row; n <= i.row; n++) t || e.session.getLine(n).charAt(0) !== e.session.$bidiHandler.RLE ? t && e.session.getLine(n).charAt(0) !== e.session.$bidiHandler.RLE && e.session.doc.insert({
                            column: 0,
                            row: n
                        }, e.session.$bidiHandler.RLE) : e.session.doc.removeInLine(n, 0, 1)
                    }, this.getPosLeft = function (e) {
                        e -= this.wrapIndent;
                        var t = this.line.charAt(0) === this.RLE ? 1 : 0,
                            i = e > t ? this.session.getOverwrite() ? e : e - 1 : t,
                            s = n.getVisualFromLogicalIdx(i, this.bidiMap), o = this.bidiMap.bidiLevels, r = 0;
                        !this.session.getOverwrite() && e <= t && o[s] % 2 !== 0 && s++;
                        for (var a = 0; a < s; a++) r += this.charWidths[o[a]];
                        return !this.session.getOverwrite() && e > t && o[s] % 2 === 0 && (r += this.charWidths[o[s]]), this.wrapIndent && (r += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset), this.isRtlDir && (r += this.rtlLineOffset), r
                    }, this.getSelections = function (e, t) {
                        var i, n = this.bidiMap, s = n.bidiLevels, o = [], r = 0, a = Math.min(e, t) - this.wrapIndent,
                            l = Math.max(e, t) - this.wrapIndent, c = !1, h = !1, u = 0;
                        this.wrapIndent && (r += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset);
                        for (var d, g = 0; g < s.length; g++) d = n.logicalFromVisual[g], i = s[g], c = d >= a && d < l, c && !h ? u = r : !c && h && o.push({
                            left: u,
                            width: r - u
                        }), r += this.charWidths[i], h = c;
                        if (c && g === s.length && o.push({
                            left: u,
                            width: r - u
                        }), this.isRtlDir) for (var f = 0; f < o.length; f++) o[f].left += this.rtlLineOffset;
                        return o
                    }, this.offsetToCol = function (e) {
                        this.isRtlDir && (e -= this.rtlLineOffset);
                        var t = 0, i = (e = Math.max(e, 0), 0), n = 0, s = this.bidiMap.bidiLevels,
                            o = this.charWidths[s[n]];
                        this.wrapIndent && (e -= this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset);
                        while (e > i + o / 2) {
                            if (i += o, n === s.length - 1) {
                                o = 0;
                                break
                            }
                            o = this.charWidths[s[++n]]
                        }
                        return n > 0 && s[n - 1] % 2 !== 0 && s[n] % 2 === 0 ? (e < i && n--, t = this.bidiMap.logicalFromVisual[n]) : n > 0 && s[n - 1] % 2 === 0 && s[n] % 2 !== 0 ? t = 1 + (e > i ? this.bidiMap.logicalFromVisual[n] : this.bidiMap.logicalFromVisual[n - 1]) : this.isRtlDir && n === s.length - 1 && 0 === o && s[n - 1] % 2 === 0 || !this.isRtlDir && 0 === n && s[n] % 2 !== 0 ? t = 1 + this.bidiMap.logicalFromVisual[n] : (n > 0 && s[n - 1] % 2 !== 0 && 0 !== o && n--, t = this.bidiMap.logicalFromVisual[n]), 0 === t && this.isRtlDir && t++, t + this.wrapIndent
                    }
                }).call(r.prototype), t.BidiHandler = r
            })), deAceFine("ace/selection", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/range"], (function (e, t, i) {
                var n = e("./lib/oop"), s = e("./lib/lang"), o = e("./lib/event_emitter").EventEmitter,
                    r = e("./range").Range, a = function (e) {
                        this.session = e, this.doc = e.getDocument(), this.clearSelection(), this.cursor = this.lead = this.doc.createAnchor(0, 0), this.anchor = this.doc.createAnchor(0, 0), this.$silent = !1;
                        var t = this;
                        this.cursor.on("change", (function (e) {
                            t.$cursorChanged = !0, t.$silent || t._emit("changeCursor"), t.$isEmpty || t.$silent || t._emit("changeSelection"), t.$keepDesiredColumnOnChange || e.old.column == e.value.column || (t.$desiredColumn = null)
                        })), this.anchor.on("change", (function () {
                            t.$anchorChanged = !0, t.$isEmpty || t.$silent || t._emit("changeSelection")
                        }))
                    };
                (function () {
                    n.implement(this, o), this.isEmpty = function () {
                        return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column
                    }, this.isMultiLine = function () {
                        return !this.$isEmpty && this.anchor.row != this.cursor.row
                    }, this.getCursor = function () {
                        return this.lead.getPosition()
                    }, this.setSelectionAnchor = function (e, t) {
                        this.$isEmpty = !1, this.anchor.setPosition(e, t)
                    }, this.getAnchor = this.getSelectionAnchor = function () {
                        return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition()
                    }, this.getSelectionLead = function () {
                        return this.lead.getPosition()
                    }, this.isBackwards = function () {
                        var e = this.anchor, t = this.lead;
                        return e.row > t.row || e.row == t.row && e.column > t.column
                    }, this.getRange = function () {
                        var e = this.anchor, t = this.lead;
                        return this.$isEmpty ? r.fromPoints(t, t) : this.isBackwards() ? r.fromPoints(t, e) : r.fromPoints(e, t)
                    }, this.clearSelection = function () {
                        this.$isEmpty || (this.$isEmpty = !0, this._emit("changeSelection"))
                    }, this.selectAll = function () {
                        this.$setSelection(0, 0, Number.MAX_VALUE, Number.MAX_VALUE)
                    }, this.setRange = this.setSelectionRange = function (e, t) {
                        var i = t ? e.end : e.start, n = t ? e.start : e.end;
                        this.$setSelection(i.row, i.column, n.row, n.column)
                    }, this.$setSelection = function (e, t, i, n) {
                        var s = this.$isEmpty, o = this.inMultiSelectMode;
                        this.$silent = !0, this.$cursorChanged = this.$anchorChanged = !1, this.anchor.setPosition(e, t), this.cursor.setPosition(i, n), this.$isEmpty = !r.comparePoints(this.anchor, this.cursor), this.$silent = !1, this.$cursorChanged && this._emit("changeCursor"), (this.$cursorChanged || this.$anchorChanged || s != this.$isEmpty || o) && this._emit("changeSelection")
                    }, this.$moveSelection = function (e) {
                        var t = this.lead;
                        this.$isEmpty && this.setSelectionAnchor(t.row, t.column), e.call(this)
                    }, this.selectTo = function (e, t) {
                        this.$moveSelection((function () {
                            this.moveCursorTo(e, t)
                        }))
                    }, this.selectToPosition = function (e) {
                        this.$moveSelection((function () {
                            this.moveCursorToPosition(e)
                        }))
                    }, this.moveTo = function (e, t) {
                        this.clearSelection(), this.moveCursorTo(e, t)
                    }, this.moveToPosition = function (e) {
                        this.clearSelection(), this.moveCursorToPosition(e)
                    }, this.selectUp = function () {
                        this.$moveSelection(this.moveCursorUp)
                    }, this.selectDown = function () {
                        this.$moveSelection(this.moveCursorDown)
                    }, this.selectRight = function () {
                        this.$moveSelection(this.moveCursorRight)
                    }, this.selectLeft = function () {
                        this.$moveSelection(this.moveCursorLeft)
                    }, this.selectLineStart = function () {
                        this.$moveSelection(this.moveCursorLineStart)
                    }, this.selectLineEnd = function () {
                        this.$moveSelection(this.moveCursorLineEnd)
                    }, this.selectFileEnd = function () {
                        this.$moveSelection(this.moveCursorFileEnd)
                    }, this.selectFileStart = function () {
                        this.$moveSelection(this.moveCursorFileStart)
                    }, this.selectWordRight = function () {
                        this.$moveSelection(this.moveCursorWordRight)
                    }, this.selectWordLeft = function () {
                        this.$moveSelection(this.moveCursorWordLeft)
                    }, this.getWordRange = function (e, t) {
                        if ("undefined" == typeof t) {
                            var i = e || this.lead;
                            e = i.row, t = i.column
                        }
                        return this.session.getWordRange(e, t)
                    }, this.selectWord = function () {
                        this.setSelectionRange(this.getWordRange())
                    }, this.selectAWord = function () {
                        var e = this.getCursor(), t = this.session.getAWordRange(e.row, e.column);
                        this.setSelectionRange(t)
                    }, this.getLineRange = function (e, t) {
                        var i, n = "number" == typeof e ? e : this.lead.row, s = this.session.getFoldLine(n);
                        return s ? (n = s.start.row, i = s.end.row) : i = n, !0 === t ? new r(n, 0, i, this.session.getLine(i).length) : new r(n, 0, i + 1, 0)
                    }, this.selectLine = function () {
                        this.setSelectionRange(this.getLineRange())
                    }, this.moveCursorUp = function () {
                        this.moveCursorBy(-1, 0)
                    }, this.moveCursorDown = function () {
                        this.moveCursorBy(1, 0)
                    }, this.wouldMoveIntoSoftTab = function (e, t, i) {
                        var n = e.column, s = e.column + t;
                        return i < 0 && (n = e.column - t, s = e.column), this.session.isTabStop(e) && this.doc.getLine(e.row).slice(n, s).split(" ").length - 1 == t
                    }, this.moveCursorLeft = function () {
                        var e, t = this.lead.getPosition();
                        if (e = this.session.getFoldAt(t.row, t.column, -1)) this.moveCursorTo(e.start.row, e.start.column); else if (0 === t.column) t.row > 0 && this.moveCursorTo(t.row - 1, this.doc.getLine(t.row - 1).length); else {
                            var i = this.session.getTabSize();
                            this.wouldMoveIntoSoftTab(t, i, -1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, -i) : this.moveCursorBy(0, -1)
                        }
                    }, this.moveCursorRight = function () {
                        var e, t = this.lead.getPosition();
                        if (e = this.session.getFoldAt(t.row, t.column, 1)) this.moveCursorTo(e.end.row, e.end.column); else if (this.lead.column == this.doc.getLine(this.lead.row).length) this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0); else {
                            var i = this.session.getTabSize();
                            t = this.lead;
                            this.wouldMoveIntoSoftTab(t, i, 1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, i) : this.moveCursorBy(0, 1)
                        }
                    }, this.moveCursorLineStart = function () {
                        var e = this.lead.row, t = this.lead.column, i = this.session.documentToScreenRow(e, t),
                            n = this.session.screenToDocumentPosition(i, 0),
                            s = this.session.getDisplayLine(e, null, n.row, n.column), o = s.match(/^\s*/);
                        o[0].length == t || this.session.$useEmacsStyleLineStart || (n.column += o[0].length), this.moveCursorToPosition(n)
                    }, this.moveCursorLineEnd = function () {
                        var e = this.lead, t = this.session.getDocumentLastRowColumnPosition(e.row, e.column);
                        if (this.lead.column == t.column) {
                            var i = this.session.getLine(t.row);
                            if (t.column == i.length) {
                                var n = i.search(/\s+$/);
                                n > 0 && (t.column = n)
                            }
                        }
                        this.moveCursorTo(t.row, t.column)
                    }, this.moveCursorFileEnd = function () {
                        var e = this.doc.getLength() - 1, t = this.doc.getLine(e).length;
                        this.moveCursorTo(e, t)
                    }, this.moveCursorFileStart = function () {
                        this.moveCursorTo(0, 0)
                    }, this.moveCursorLongWordRight = function () {
                        var e = this.lead.row, t = this.lead.column, i = this.doc.getLine(e), n = i.substring(t);
                        this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0;
                        var s = this.session.getFoldAt(e, t, 1);
                        if (s) this.moveCursorTo(s.end.row, s.end.column); else {
                            if (this.session.nonTokenRe.exec(n) && (t += this.session.nonTokenRe.lastIndex, this.session.nonTokenRe.lastIndex = 0, n = i.substring(t)), t >= i.length) return this.moveCursorTo(e, i.length), this.moveCursorRight(), void (e < this.doc.getLength() - 1 && this.moveCursorWordRight());
                            this.session.tokenRe.exec(n) && (t += this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(e, t)
                        }
                    }, this.moveCursorLongWordLeft = function () {
                        var e, t = this.lead.row, i = this.lead.column;
                        if (e = this.session.getFoldAt(t, i, -1)) this.moveCursorTo(e.start.row, e.start.column); else {
                            var n = this.session.getFoldStringAt(t, i, -1);
                            null == n && (n = this.doc.getLine(t).substring(0, i));
                            var o = s.stringReverse(n);
                            if (this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0, this.session.nonTokenRe.exec(o) && (i -= this.session.nonTokenRe.lastIndex, o = o.slice(this.session.nonTokenRe.lastIndex), this.session.nonTokenRe.lastIndex = 0), i <= 0) return this.moveCursorTo(t, 0), this.moveCursorLeft(), void (t > 0 && this.moveCursorWordLeft());
                            this.session.tokenRe.exec(o) && (i -= this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(t, i)
                        }
                    }, this.$shortWordEndIndex = function (e) {
                        var t, i = 0, n = /\s/, s = this.session.tokenRe;
                        if (s.lastIndex = 0, this.session.tokenRe.exec(e)) i = this.session.tokenRe.lastIndex; else {
                            while ((t = e[i]) && n.test(t)) i++;
                            if (i < 1) {
                                s.lastIndex = 0;
                                while ((t = e[i]) && !s.test(t)) if (s.lastIndex = 0, i++, n.test(t)) {
                                    if (i > 2) {
                                        i--;
                                        break
                                    }
                                    while ((t = e[i]) && n.test(t)) i++;
                                    if (i > 2) break
                                }
                            }
                        }
                        return s.lastIndex = 0, i
                    }, this.moveCursorShortWordRight = function () {
                        var e = this.lead.row, t = this.lead.column, i = this.doc.getLine(e), n = i.substring(t),
                            s = this.session.getFoldAt(e, t, 1);
                        if (s) return this.moveCursorTo(s.end.row, s.end.column);
                        if (t == i.length) {
                            var o = this.doc.getLength();
                            do {
                                e++, n = this.doc.getLine(e)
                            } while (e < o && /^\s*$/.test(n));
                            /^\s+/.test(n) || (n = ""), t = 0
                        }
                        var r = this.$shortWordEndIndex(n);
                        this.moveCursorTo(e, t + r)
                    }, this.moveCursorShortWordLeft = function () {
                        var e, t = this.lead.row, i = this.lead.column;
                        if (e = this.session.getFoldAt(t, i, -1)) return this.moveCursorTo(e.start.row, e.start.column);
                        var n = this.session.getLine(t).substring(0, i);
                        if (0 === i) {
                            do {
                                t--, n = this.doc.getLine(t)
                            } while (t > 0 && /^\s*$/.test(n));
                            i = n.length, /\s+$/.test(n) || (n = "")
                        }
                        var o = s.stringReverse(n), r = this.$shortWordEndIndex(o);
                        return this.moveCursorTo(t, i - r)
                    }, this.moveCursorWordRight = function () {
                        this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight()
                    }, this.moveCursorWordLeft = function () {
                        this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft()
                    }, this.moveCursorBy = function (e, t) {
                        var i, n = this.session.documentToScreenPosition(this.lead.row, this.lead.column);
                        0 === t && (0 !== e && (this.session.$bidiHandler.isBidiRow(n.row, this.lead.row) ? (i = this.session.$bidiHandler.getPosLeft(n.column), n.column = Math.round(i / this.session.$bidiHandler.charWidths[0])) : i = n.column * this.session.$bidiHandler.charWidths[0]), this.$desiredColumn ? n.column = this.$desiredColumn : this.$desiredColumn = n.column);
                        var s = this.session.screenToDocumentPosition(n.row + e, n.column, i);
                        0 !== e && 0 === t && s.row === this.lead.row && s.column === this.lead.column && this.session.lineWidgets && this.session.lineWidgets[s.row] && (s.row > 0 || e > 0) && s.row++, this.moveCursorTo(s.row, s.column + t, 0 === t)
                    }, this.moveCursorToPosition = function (e) {
                        this.moveCursorTo(e.row, e.column)
                    }, this.moveCursorTo = function (e, t, i) {
                        var n = this.session.getFoldAt(e, t, 1);
                        n && (e = n.start.row, t = n.start.column), this.$keepDesiredColumnOnChange = !0;
                        var s = this.session.getLine(e);
                        /[\uDC00-\uDFFF]/.test(s.charAt(t)) && s.charAt(t - 1) && (this.lead.row == e && this.lead.column == t + 1 ? t -= 1 : t += 1), this.lead.setPosition(e, t), this.$keepDesiredColumnOnChange = !1, i || (this.$desiredColumn = null)
                    }, this.moveCursorToScreen = function (e, t, i) {
                        var n = this.session.screenToDocumentPosition(e, t);
                        this.moveCursorTo(n.row, n.column, i)
                    }, this.detach = function () {
                        this.lead.detach(), this.anchor.detach(), this.session = this.doc = null
                    }, this.fromOrientedRange = function (e) {
                        this.setSelectionRange(e, e.cursor == e.start), this.$desiredColumn = e.desiredColumn || this.$desiredColumn
                    }, this.toOrientedRange = function (e) {
                        var t = this.getRange();
                        return e ? (e.start.column = t.start.column, e.start.row = t.start.row, e.end.column = t.end.column, e.end.row = t.end.row) : e = t, e.cursor = this.isBackwards() ? e.start : e.end, e.desiredColumn = this.$desiredColumn, e
                    }, this.getRangeOfMovements = function (e) {
                        var t = this.getCursor();
                        try {
                            e(this);
                            var i = this.getCursor();
                            return r.fromPoints(t, i)
                        } catch (n) {
                            return r.fromPoints(t, t)
                        } finally {
                            this.moveCursorToPosition(t)
                        }
                    }, this.toJSON = function () {
                        if (this.rangeCount) var e = this.ranges.map((function (e) {
                            var t = e.clone();
                            return t.isBackwards = e.cursor == e.start, t
                        })); else {
                            e = this.getRange();
                            e.isBackwards = this.isBackwards()
                        }
                        return e
                    }, this.fromJSON = function (e) {
                        if (void 0 == e.start) {
                            if (this.rangeList && e.length > 1) {
                                this.toSingleRange(e[0]);
                                for (var t = e.length; t--;) {
                                    var i = r.fromPoints(e[t].start, e[t].end);
                                    e[t].isBackwards && (i.cursor = i.start), this.addRange(i, !0)
                                }
                                return
                            }
                            e = e[0]
                        }
                        this.rangeList && this.toSingleRange(e), this.setSelectionRange(e, e.isBackwards)
                    }, this.isEqual = function (e) {
                        if ((e.length || this.rangeCount) && e.length != this.rangeCount) return !1;
                        if (!e.length || !this.ranges) return this.getRange().isEqual(e);
                        for (var t = this.ranges.length; t--;) if (!this.ranges[t].isEqual(e[t])) return !1;
                        return !0
                    }
                }).call(a.prototype), t.Selection = a
            })), deAceFine("ace/tokenizer", ["require", "exports", "module", "ace/config"], (function (e, t, i) {
                var n = e("./config"), s = 2e3, o = function (e) {
                    for (var t in this.states = e, this.regExps = {}, this.matchMappings = {}, this.states) {
                        for (var i = this.states[t], n = [], s = 0, o = this.matchMappings[t] = {defaultToken: "text"}, r = "g", a = [], l = 0; l < i.length; l++) {
                            var c = i[l];
                            if (c.defaultToken && (o.defaultToken = c.defaultToken), c.caseInsensitive && (r = "gi"), null != c.regex) {
                                c.regex instanceof RegExp && (c.regex = c.regex.toString().slice(1, -1));
                                var h = c.regex, u = new RegExp("(?:(" + h + ")|(.))").exec("a").length - 2;
                                Array.isArray(c.token) ? 1 == c.token.length || 1 == u ? c.token = c.token[0] : u - 1 != c.token.length ? (this.reportError("number of classes and regexp groups doesn't match", {
                                    rule: c,
                                    groupCount: u - 1
                                }), c.token = c.token[0]) : (c.tokenArray = c.token, c.token = null, c.onMatch = this.$arrayTokens) : "function" != typeof c.token || c.onMatch || (c.onMatch = u > 1 ? this.$applyToken : c.token), u > 1 && (/\\\d/.test(c.regex) ? h = c.regex.replace(/\\([0-9]+)/g, (function (e, t) {
                                    return "\\" + (parseInt(t, 10) + s + 1)
                                })) : (u = 1, h = this.removeCapturingGroups(c.regex)), c.splitRegex || "string" == typeof c.token || a.push(c)), o[s] = l, s += u, n.push(h), c.onMatch || (c.onMatch = null)
                            }
                        }
                        n.length || (o[0] = 0, n.push("$")), a.forEach((function (e) {
                            e.splitRegex = this.createSplitterRegexp(e.regex, r)
                        }), this), this.regExps[t] = new RegExp("(" + n.join(")|(") + ")|($)", r)
                    }
                };
                (function () {
                    this.$setMaxTokenCount = function (e) {
                        s = 0 | e
                    }, this.$applyToken = function (e) {
                        var t = this.splitRegex.exec(e).slice(1), i = this.token.apply(this, t);
                        if ("string" === typeof i) return [{type: i, value: e}];
                        for (var n = [], s = 0, o = i.length; s < o; s++) t[s] && (n[n.length] = {
                            type: i[s],
                            value: t[s]
                        });
                        return n
                    }, this.$arrayTokens = function (e) {
                        if (!e) return [];
                        var t = this.splitRegex.exec(e);
                        if (!t) return "text";
                        for (var i = [], n = this.tokenArray, s = 0, o = n.length; s < o; s++) t[s + 1] && (i[i.length] = {
                            type: n[s],
                            value: t[s + 1]
                        });
                        return i
                    }, this.removeCapturingGroups = function (e) {
                        var t = e.replace(/\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!]|(\()/g, (function (e, t) {
                            return t ? "(?:" : e
                        }));
                        return t
                    }, this.createSplitterRegexp = function (e, t) {
                        if (-1 != e.indexOf("(?=")) {
                            var i = 0, n = !1, s = {};
                            e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, (function (e, t, o, r, a, l) {
                                return n ? n = "]" != a : a ? n = !0 : r ? (i == s.stack && (s.end = l + 1, s.stack = -1), i--) : o && (i++, 1 != o.length && (s.stack = i, s.start = l)), e
                            })), null != s.end && /^\)*$/.test(e.substr(s.end)) && (e = e.substring(0, s.start) + e.substr(s.end))
                        }
                        return "^" != e.charAt(0) && (e = "^" + e), "$" != e.charAt(e.length - 1) && (e += "$"), new RegExp(e, (t || "").replace("g", ""))
                    }, this.getLineTokens = function (e, t) {
                        if (t && "string" != typeof t) {
                            var i = t.slice(0);
                            t = i[0], "#tmp" === t && (i.shift(), t = i.shift())
                        } else i = [];
                        var n = t || "start", o = this.states[n];
                        o || (n = "start", o = this.states[n]);
                        var r = this.matchMappings[n], a = this.regExps[n];
                        a.lastIndex = 0;
                        var l, c = [], h = 0, u = 0, d = {type: null, value: ""};
                        while (l = a.exec(e)) {
                            var g = r.defaultToken, f = null, p = l[0], m = a.lastIndex;
                            if (m - p.length > h) {
                                var v = e.substring(h, m - p.length);
                                d.type == g ? d.value += v : (d.type && c.push(d), d = {type: g, value: v})
                            }
                            for (var w = 0; w < l.length - 2; w++) if (void 0 !== l[w + 1]) {
                                f = o[r[w]], g = f.onMatch ? f.onMatch(p, n, i, e) : f.token, f.next && (n = "string" == typeof f.next ? f.next : f.next(n, i), o = this.states[n], o || (this.reportError("state doesn't exist", n), n = "start", o = this.states[n]), r = this.matchMappings[n], h = m, a = this.regExps[n], a.lastIndex = m), f.consumeLineEnd && (h = m);
                                break
                            }
                            if (p) if ("string" === typeof g) f && !1 === f.merge || d.type !== g ? (d.type && c.push(d), d = {
                                type: g,
                                value: p
                            }) : d.value += p; else if (g) {
                                d.type && c.push(d), d = {type: null, value: ""};
                                for (w = 0; w < g.length; w++) c.push(g[w])
                            }
                            if (h == e.length) break;
                            if (h = m, u++ > s) {
                                u > 2 * e.length && this.reportError("infinite loop with in ace tokenizer", {
                                    startState: t,
                                    line: e
                                });
                                while (h < e.length) d.type && c.push(d), d = {
                                    value: e.substring(h, h += 500),
                                    type: "overflow"
                                };
                                n = "start", i = [];
                                break
                            }
                        }
                        return d.type && c.push(d), i.length > 1 && i[0] !== n && i.unshift("#tmp", n), {
                            tokens: c,
                            state: i.length ? i : n
                        }
                    }, this.reportError = n.reportError
                }).call(o.prototype), t.Tokenizer = o
            })), deAceFine("ace/mode/text_highlight_rules", ["require", "exports", "module", "ace/lib/lang"], (function (e, t, i) {
                var n = e("../lib/lang"), s = function () {
                    this.$rules = {start: [{token: "empty_line", regex: "^$"}, {defaultToken: "text"}]}
                };
                (function () {
                    this.addRules = function (e, t) {
                        if (t) for (var i in e) {
                            for (var n = e[i], s = 0; s < n.length; s++) {
                                var o = n[s];
                                (o.next || o.onMatch) && ("string" == typeof o.next && 0 !== o.next.indexOf(t) && (o.next = t + o.next), o.nextState && 0 !== o.nextState.indexOf(t) && (o.nextState = t + o.nextState))
                            }
                            this.$rules[t + i] = n
                        } else for (var i in e) this.$rules[i] = e[i]
                    }, this.getRules = function () {
                        return this.$rules
                    }, this.embedRules = function (e, t, i, s, o) {
                        var r = "function" == typeof e ? (new e).getRules() : e;
                        if (s) for (var a = 0; a < s.length; a++) s[a] = t + s[a]; else for (var l in s = [], r) s.push(t + l);
                        if (this.addRules(r, t), i) {
                            var c = Array.prototype[o ? "push" : "unshift"];
                            for (a = 0; a < s.length; a++) c.apply(this.$rules[s[a]], n.deepCopy(i))
                        }
                        this.$embeds || (this.$embeds = []), this.$embeds.push(t)
                    }, this.getEmbeds = function () {
                        return this.$embeds
                    };
                    var e = function (e, t) {
                        return ("start" != e || t.length) && t.unshift(this.nextState, e), this.nextState
                    }, t = function (e, t) {
                        return t.shift(), t.shift() || "start"
                    };
                    this.normalizeRules = function () {
                        var i = 0, n = this.$rules;

                        function s(o) {
                            var r = n[o];
                            r.processed = !0;
                            for (var a = 0; a < r.length; a++) {
                                var l = r[a], c = null;
                                Array.isArray(l) && (c = l, l = {}), !l.regex && l.start && (l.regex = l.start, l.next || (l.next = []), l.next.push({defaultToken: l.token}, {
                                    token: l.token + ".end",
                                    regex: l.end || l.start,
                                    next: "pop"
                                }), l.token = l.token + ".start", l.push = !0);
                                var h = l.next || l.push;
                                if (h && Array.isArray(h)) {
                                    var u = l.stateName;
                                    u || (u = l.token, "string" != typeof u && (u = u[0] || ""), n[u] && (u += i++)), n[u] = h, l.next = u, s(u)
                                } else "pop" == h && (l.next = t);
                                if (l.push && (l.nextState = l.next || l.push, l.next = e, delete l.push), l.rules) for (var d in l.rules) n[d] ? n[d].push && n[d].push.apply(n[d], l.rules[d]) : n[d] = l.rules[d];
                                var g = "string" == typeof l ? l : l.include;
                                if (g && (c = Array.isArray(g) ? g.map((function (e) {
                                    return n[e]
                                })) : n[g]), c) {
                                    var f = [a, 1].concat(c);
                                    l.noEscape && (f = f.filter((function (e) {
                                        return !e.next
                                    }))), r.splice.apply(r, f), a--
                                }
                                l.keywordMap && (l.token = this.createKeywordMapper(l.keywordMap, l.defaultToken || "text", l.caseInsensitive), delete l.defaultToken)
                            }
                        }

                        Object.keys(n).forEach(s, this)
                    }, this.createKeywordMapper = function (e, t, i, n) {
                        var s = Object.create(null);
                        return Object.keys(e).forEach((function (t) {
                            var o = e[t];
                            i && (o = o.toLowerCase());
                            for (var r = o.split(n || "|"), a = r.length; a--;) s[r[a]] = t
                        })), Object.getPrototypeOf(s) && (s.__proto__ = null), this.$keywordList = Object.keys(s), e = null, i ? function (e) {
                            return s[e.toLowerCase()] || t
                        } : function (e) {
                            return s[e] || t
                        }
                    }, this.getKeywords = function () {
                        return this.$keywords
                    }
                }).call(s.prototype), t.TextHighlightRules = s
            })), deAceFine("ace/mode/behaviour", ["require", "exports", "module"], (function (e, t, i) {
                var n = function () {
                    this.$behaviours = {}
                };
                (function () {
                    this.add = function (e, t, i) {
                        switch (void 0) {
                            case this.$behaviours:
                                this.$behaviours = {};
                            case this.$behaviours[e]:
                                this.$behaviours[e] = {}
                        }
                        this.$behaviours[e][t] = i
                    }, this.addBehaviours = function (e) {
                        for (var t in e) for (var i in e[t]) this.add(t, i, e[t][i])
                    }, this.remove = function (e) {
                        this.$behaviours && this.$behaviours[e] && delete this.$behaviours[e]
                    }, this.inherit = function (e, t) {
                        if ("function" === typeof e) var i = (new e).getBehaviours(t); else i = e.getBehaviours(t);
                        this.addBehaviours(i)
                    }, this.getBehaviours = function (e) {
                        if (e) {
                            for (var t = {}, i = 0; i < e.length; i++) this.$behaviours[e[i]] && (t[e[i]] = this.$behaviours[e[i]]);
                            return t
                        }
                        return this.$behaviours
                    }
                }).call(n.prototype), t.Behaviour = n
            })), deAceFine("ace/token_iterator", ["require", "exports", "module", "ace/range"], (function (e, t, i) {
                var n = e("./range").Range, s = function (e, t, i) {
                    this.$session = e, this.$row = t, this.$rowTokens = e.getTokens(t);
                    var n = e.getTokenAt(t, i);
                    this.$tokenIndex = n ? n.index : -1
                };
                (function () {
                    this.stepBackward = function () {
                        this.$tokenIndex -= 1;
                        while (this.$tokenIndex < 0) {
                            if (this.$row -= 1, this.$row < 0) return this.$row = 0, null;
                            this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = this.$rowTokens.length - 1
                        }
                        return this.$rowTokens[this.$tokenIndex]
                    }, this.stepForward = function () {
                        var e;
                        this.$tokenIndex += 1;
                        while (this.$tokenIndex >= this.$rowTokens.length) {
                            if (this.$row += 1, e || (e = this.$session.getLength()), this.$row >= e) return this.$row = e - 1, null;
                            this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = 0
                        }
                        return this.$rowTokens[this.$tokenIndex]
                    }, this.getCurrentToken = function () {
                        return this.$rowTokens[this.$tokenIndex]
                    }, this.getCurrentTokenRow = function () {
                        return this.$row
                    }, this.getCurrentTokenColumn = function () {
                        var e = this.$rowTokens, t = this.$tokenIndex, i = e[t].start;
                        if (void 0 !== i) return i;
                        i = 0;
                        while (t > 0) t -= 1, i += e[t].value.length;
                        return i
                    }, this.getCurrentTokenPosition = function () {
                        return {row: this.$row, column: this.getCurrentTokenColumn()}
                    }, this.getCurrentTokenRange = function () {
                        var e = this.$rowTokens[this.$tokenIndex], t = this.getCurrentTokenColumn();
                        return new n(this.$row, t, this.$row, t + e.value.length)
                    }
                }).call(s.prototype), t.TokenIterator = s
            })), deAceFine("ace/mode/behaviour/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], (function (e, t, i) {
                var n, s = e("../../lib/oop"), o = e("../behaviour").Behaviour,
                    r = e("../../token_iterator").TokenIterator, a = e("../../lib/lang"),
                    l = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator"],
                    c = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator", "comment"], h = {},
                    u = {'"': '"', "'": "'"}, d = function (e) {
                        var t = -1;
                        if (e.multiSelect && (t = e.selection.index, h.rangeCount != e.multiSelect.rangeCount && (h = {rangeCount: e.multiSelect.rangeCount})), h[t]) return n = h[t];
                        n = h[t] = {
                            autoInsertedBrackets: 0,
                            autoInsertedRow: -1,
                            autoInsertedLineEnd: "",
                            maybeInsertedBrackets: 0,
                            maybeInsertedRow: -1,
                            maybeInsertedLineStart: "",
                            maybeInsertedLineEnd: ""
                        }
                    }, g = function (e, t, i, n) {
                        var s = e.end.row - e.start.row;
                        return {text: i + t + n, selection: [0, e.start.column + 1, s, e.end.column + (s ? 0 : 1)]}
                    }, f = function e(t) {
                        this.add("braces", "insertion", (function (i, s, o, r, l) {
                            var c = o.getCursorPosition(), h = r.doc.getLine(c.row);
                            if ("{" == l) {
                                d(o);
                                var u = o.getSelectionRange(), f = r.doc.getTextRange(u);
                                if ("" !== f && "{" !== f && o.getWrapBehavioursEnabled()) return g(u, f, "{", "}");
                                if (e.isSaneInsertion(o, r)) return /[\]\}\)]/.test(h[c.column]) || o.inMultiSelectMode || t && t.braces ? (e.recordAutoInsert(o, r, "}"), {
                                    text: "{}",
                                    selection: [1, 1]
                                }) : (e.recordMaybeInsert(o, r, "{"), {text: "{", selection: [1, 1]})
                            } else if ("}" == l) {
                                d(o);
                                var p = h.substring(c.column, c.column + 1);
                                if ("}" == p) {
                                    var m = r.$findOpeningBracket("}", {column: c.column + 1, row: c.row});
                                    if (null !== m && e.isAutoInsertedClosing(c, h, l)) return e.popAutoInsertedClosing(), {
                                        text: "",
                                        selection: [1, 1]
                                    }
                                }
                            } else {
                                if ("\n" == l || "\r\n" == l) {
                                    d(o);
                                    var v = "";
                                    e.isMaybeInsertedClosing(c, h) && (v = a.stringRepeat("}", n.maybeInsertedBrackets), e.clearMaybeInsertedClosing());
                                    p = h.substring(c.column, c.column + 1);
                                    if ("}" === p) {
                                        var w = r.findMatchingBracket({row: c.row, column: c.column + 1}, "}");
                                        if (!w) return null;
                                        var b = this.$getIndent(r.getLine(w.row))
                                    } else {
                                        if (!v) return void e.clearMaybeInsertedClosing();
                                        b = this.$getIndent(h)
                                    }
                                    var y = b + r.getTabString();
                                    return {text: "\n" + y + "\n" + b + v, selection: [1, y.length, 1, y.length]}
                                }
                                e.clearMaybeInsertedClosing()
                            }
                        })), this.add("braces", "deletion", (function (e, t, i, s, o) {
                            var r = s.doc.getTextRange(o);
                            if (!o.isMultiLine() && "{" == r) {
                                d(i);
                                var a = s.doc.getLine(o.start.row), l = a.substring(o.end.column, o.end.column + 1);
                                if ("}" == l) return o.end.column++, o;
                                n.maybeInsertedBrackets--
                            }
                        })), this.add("parens", "insertion", (function (t, i, n, s, o) {
                            if ("(" == o) {
                                d(n);
                                var r = n.getSelectionRange(), a = s.doc.getTextRange(r);
                                if ("" !== a && n.getWrapBehavioursEnabled()) return g(r, a, "(", ")");
                                if (e.isSaneInsertion(n, s)) return e.recordAutoInsert(n, s, ")"), {
                                    text: "()",
                                    selection: [1, 1]
                                }
                            } else if (")" == o) {
                                d(n);
                                var l = n.getCursorPosition(), c = s.doc.getLine(l.row),
                                    h = c.substring(l.column, l.column + 1);
                                if (")" == h) {
                                    var u = s.$findOpeningBracket(")", {column: l.column + 1, row: l.row});
                                    if (null !== u && e.isAutoInsertedClosing(l, c, o)) return e.popAutoInsertedClosing(), {
                                        text: "",
                                        selection: [1, 1]
                                    }
                                }
                            }
                        })), this.add("parens", "deletion", (function (e, t, i, n, s) {
                            var o = n.doc.getTextRange(s);
                            if (!s.isMultiLine() && "(" == o) {
                                d(i);
                                var r = n.doc.getLine(s.start.row), a = r.substring(s.start.column + 1, s.start.column + 2);
                                if (")" == a) return s.end.column++, s
                            }
                        })), this.add("brackets", "insertion", (function (t, i, n, s, o) {
                            if ("[" == o) {
                                d(n);
                                var r = n.getSelectionRange(), a = s.doc.getTextRange(r);
                                if ("" !== a && n.getWrapBehavioursEnabled()) return g(r, a, "[", "]");
                                if (e.isSaneInsertion(n, s)) return e.recordAutoInsert(n, s, "]"), {
                                    text: "[]",
                                    selection: [1, 1]
                                }
                            } else if ("]" == o) {
                                d(n);
                                var l = n.getCursorPosition(), c = s.doc.getLine(l.row),
                                    h = c.substring(l.column, l.column + 1);
                                if ("]" == h) {
                                    var u = s.$findOpeningBracket("]", {column: l.column + 1, row: l.row});
                                    if (null !== u && e.isAutoInsertedClosing(l, c, o)) return e.popAutoInsertedClosing(), {
                                        text: "",
                                        selection: [1, 1]
                                    }
                                }
                            }
                        })), this.add("brackets", "deletion", (function (e, t, i, n, s) {
                            var o = n.doc.getTextRange(s);
                            if (!s.isMultiLine() && "[" == o) {
                                d(i);
                                var r = n.doc.getLine(s.start.row), a = r.substring(s.start.column + 1, s.start.column + 2);
                                if ("]" == a) return s.end.column++, s
                            }
                        })), this.add("string_dquotes", "insertion", (function (e, t, i, n, s) {
                            var o = n.$mode.$quotes || u;
                            if (1 == s.length && o[s]) {
                                if (this.lineCommentStart && -1 != this.lineCommentStart.indexOf(s)) return;
                                d(i);
                                var r = s, a = i.getSelectionRange(), l = n.doc.getTextRange(a);
                                if (!("" === l || 1 == l.length && o[l]) && i.getWrapBehavioursEnabled()) return g(a, l, r, r);
                                if (!l) {
                                    var c = i.getCursorPosition(), h = n.doc.getLine(c.row),
                                        f = h.substring(c.column - 1, c.column), p = h.substring(c.column, c.column + 1),
                                        m = n.getTokenAt(c.row, c.column), v = n.getTokenAt(c.row, c.column + 1);
                                    if ("\\" == f && m && /escape/.test(m.type)) return null;
                                    var w, b = m && /string|escape/.test(m.type), y = !v || /string|escape/.test(v.type);
                                    if (p == r) w = b !== y, w && /string\.end/.test(v.type) && (w = !1); else {
                                        if (b && !y) return null;
                                        if (b && y) return null;
                                        var $ = n.$mode.tokenRe;
                                        $.lastIndex = 0;
                                        var S = $.test(f);
                                        $.lastIndex = 0;
                                        var x = $.test(f);
                                        if (S || x) return null;
                                        if (p && !/[\s;,.})\]\\]/.test(p)) return null;
                                        var C = h[c.column - 2];
                                        if (f == r && (C == r || $.test(C))) return null;
                                        w = !0
                                    }
                                    return {text: w ? r + r : "", selection: [1, 1]}
                                }
                            }
                        })), this.add("string_dquotes", "deletion", (function (e, t, i, n, s) {
                            var o = n.$mode.$quotes || u, r = n.doc.getTextRange(s);
                            if (!s.isMultiLine() && o.hasOwnProperty(r)) {
                                d(i);
                                var a = n.doc.getLine(s.start.row), l = a.substring(s.start.column + 1, s.start.column + 2);
                                if (l == r) return s.end.column++, s
                            }
                        }))
                    };
                f.isSaneInsertion = function (e, t) {
                    var i = e.getCursorPosition(), n = new r(t, i.row, i.column);
                    if (!this.$matchTokenType(n.getCurrentToken() || "text", l)) {
                        if (/[)}\]]/.test(e.session.getLine(i.row)[i.column])) return !0;
                        var s = new r(t, i.row, i.column + 1);
                        if (!this.$matchTokenType(s.getCurrentToken() || "text", l)) return !1
                    }
                    return n.stepForward(), n.getCurrentTokenRow() !== i.row || this.$matchTokenType(n.getCurrentToken() || "text", c)
                }, f.$matchTokenType = function (e, t) {
                    return t.indexOf(e.type || e) > -1
                }, f.recordAutoInsert = function (e, t, i) {
                    var s = e.getCursorPosition(), o = t.doc.getLine(s.row);
                    this.isAutoInsertedClosing(s, o, n.autoInsertedLineEnd[0]) || (n.autoInsertedBrackets = 0), n.autoInsertedRow = s.row, n.autoInsertedLineEnd = i + o.substr(s.column), n.autoInsertedBrackets++
                }, f.recordMaybeInsert = function (e, t, i) {
                    var s = e.getCursorPosition(), o = t.doc.getLine(s.row);
                    this.isMaybeInsertedClosing(s, o) || (n.maybeInsertedBrackets = 0), n.maybeInsertedRow = s.row, n.maybeInsertedLineStart = o.substr(0, s.column) + i, n.maybeInsertedLineEnd = o.substr(s.column), n.maybeInsertedBrackets++
                }, f.isAutoInsertedClosing = function (e, t, i) {
                    return n.autoInsertedBrackets > 0 && e.row === n.autoInsertedRow && i === n.autoInsertedLineEnd[0] && t.substr(e.column) === n.autoInsertedLineEnd
                }, f.isMaybeInsertedClosing = function (e, t) {
                    return n.maybeInsertedBrackets > 0 && e.row === n.maybeInsertedRow && t.substr(e.column) === n.maybeInsertedLineEnd && t.substr(0, e.column) == n.maybeInsertedLineStart
                }, f.popAutoInsertedClosing = function () {
                    n.autoInsertedLineEnd = n.autoInsertedLineEnd.substr(1), n.autoInsertedBrackets--
                }, f.clearMaybeInsertedClosing = function () {
                    n && (n.maybeInsertedBrackets = 0, n.maybeInsertedRow = -1)
                }, s.inherits(f, o), t.CstyleBehaviour = f
            })), deAceFine("ace/unicode", ["require", "exports", "module"], (function (e, t, i) {
                for (var n = [48, 9, 8, 25, 5, 0, 2, 25, 48, 0, 11, 0, 5, 0, 6, 22, 2, 30, 2, 457, 5, 11, 15, 4, 8, 0, 2, 0, 18, 116, 2, 1, 3, 3, 9, 0, 2, 2, 2, 0, 2, 19, 2, 82, 2, 138, 2, 4, 3, 155, 12, 37, 3, 0, 8, 38, 10, 44, 2, 0, 2, 1, 2, 1, 2, 0, 9, 26, 6, 2, 30, 10, 7, 61, 2, 9, 5, 101, 2, 7, 3, 9, 2, 18, 3, 0, 17, 58, 3, 100, 15, 53, 5, 0, 6, 45, 211, 57, 3, 18, 2, 5, 3, 11, 3, 9, 2, 1, 7, 6, 2, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 0, 4, 3, 3, 8, 3, 1, 3, 3, 9, 0, 5, 1, 2, 4, 3, 11, 16, 2, 2, 5, 5, 1, 3, 21, 2, 6, 2, 1, 2, 1, 2, 1, 3, 0, 2, 4, 5, 1, 3, 2, 4, 0, 8, 3, 2, 0, 8, 15, 12, 2, 2, 8, 2, 2, 2, 21, 2, 6, 2, 1, 2, 4, 3, 9, 2, 2, 2, 2, 3, 0, 16, 3, 3, 9, 18, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 3, 8, 3, 1, 3, 2, 9, 1, 5, 1, 2, 4, 3, 9, 2, 0, 17, 1, 2, 5, 4, 2, 2, 3, 4, 1, 2, 0, 2, 1, 4, 1, 4, 2, 4, 11, 5, 4, 4, 2, 2, 3, 3, 0, 7, 0, 15, 9, 18, 2, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 4, 7, 2, 2, 2, 3, 8, 1, 2, 1, 7, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 3, 8, 2, 2, 2, 3, 8, 1, 8, 0, 2, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 15, 4, 7, 2, 2, 2, 3, 10, 0, 9, 3, 3, 9, 11, 5, 3, 1, 2, 17, 4, 23, 2, 8, 2, 0, 3, 6, 4, 0, 5, 5, 2, 0, 2, 7, 19, 1, 14, 57, 6, 14, 2, 9, 40, 1, 2, 0, 3, 1, 2, 0, 3, 0, 7, 3, 2, 6, 2, 2, 2, 0, 2, 0, 3, 1, 2, 12, 2, 2, 3, 4, 2, 0, 2, 5, 3, 9, 3, 1, 35, 0, 24, 1, 7, 9, 12, 0, 2, 0, 2, 0, 5, 9, 2, 35, 5, 19, 2, 5, 5, 7, 2, 35, 10, 0, 58, 73, 7, 77, 3, 37, 11, 42, 2, 0, 4, 328, 2, 3, 3, 6, 2, 0, 2, 3, 3, 40, 2, 3, 3, 32, 2, 3, 3, 6, 2, 0, 2, 3, 3, 14, 2, 56, 2, 3, 3, 66, 5, 0, 33, 15, 17, 84, 13, 619, 3, 16, 2, 25, 6, 74, 22, 12, 2, 6, 12, 20, 12, 19, 13, 12, 2, 2, 2, 1, 13, 51, 3, 29, 4, 0, 5, 1, 3, 9, 34, 2, 3, 9, 7, 87, 9, 42, 6, 69, 11, 28, 4, 11, 5, 11, 11, 39, 3, 4, 12, 43, 5, 25, 7, 10, 38, 27, 5, 62, 2, 28, 3, 10, 7, 9, 14, 0, 89, 75, 5, 9, 18, 8, 13, 42, 4, 11, 71, 55, 9, 9, 4, 48, 83, 2, 2, 30, 14, 230, 23, 280, 3, 5, 3, 37, 3, 5, 3, 7, 2, 0, 2, 0, 2, 0, 2, 30, 3, 52, 2, 6, 2, 0, 4, 2, 2, 6, 4, 3, 3, 5, 5, 12, 6, 2, 2, 6, 67, 1, 20, 0, 29, 0, 14, 0, 17, 4, 60, 12, 5, 0, 4, 11, 18, 0, 5, 0, 3, 9, 2, 0, 4, 4, 7, 0, 2, 0, 2, 0, 2, 3, 2, 10, 3, 3, 6, 4, 5, 0, 53, 1, 2684, 46, 2, 46, 2, 132, 7, 6, 15, 37, 11, 53, 10, 0, 17, 22, 10, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 31, 48, 0, 470, 1, 36, 5, 2, 4, 6, 1, 5, 85, 3, 1, 3, 2, 2, 89, 2, 3, 6, 40, 4, 93, 18, 23, 57, 15, 513, 6581, 75, 20939, 53, 1164, 68, 45, 3, 268, 4, 27, 21, 31, 3, 13, 13, 1, 2, 24, 9, 69, 11, 1, 38, 8, 3, 102, 3, 1, 111, 44, 25, 51, 13, 68, 12, 9, 7, 23, 4, 0, 5, 45, 3, 35, 13, 28, 4, 64, 15, 10, 39, 54, 10, 13, 3, 9, 7, 22, 4, 1, 5, 66, 25, 2, 227, 42, 2, 1, 3, 9, 7, 11171, 13, 22, 5, 48, 8453, 301, 3, 61, 3, 105, 39, 6, 13, 4, 6, 11, 2, 12, 2, 4, 2, 0, 2, 1, 2, 1, 2, 107, 34, 362, 19, 63, 3, 53, 41, 11, 5, 15, 17, 6, 13, 1, 25, 2, 33, 4, 2, 134, 20, 9, 8, 25, 5, 0, 2, 25, 12, 88, 4, 5, 3, 5, 3, 5, 3, 2], s = 0, o = [], r = 0; r < n.length; r += 2) o.push(s += n[r]), n[r + 1] && o.push(45, s += n[r + 1]);
                t.wordChars = String.fromCharCode.apply(null, o)
            })), deAceFine("ace/mode/text", ["require", "exports", "module", "ace/config", "ace/tokenizer", "ace/mode/text_highlight_rules", "ace/mode/behaviour/cstyle", "ace/unicode", "ace/lib/lang", "ace/token_iterator", "ace/range"], (function (e, i, n) {
                var s = e("../config"), o = e("../tokenizer").Tokenizer,
                    r = e("./text_highlight_rules").TextHighlightRules, a = e("./behaviour/cstyle").CstyleBehaviour,
                    l = e("../unicode"), c = e("../lib/lang"), h = e("../token_iterator").TokenIterator,
                    u = e("../range").Range, d = function () {
                        this.HighlightRules = r
                    };
                (function () {
                    this.$defaultBehaviour = new a, this.tokenRe = new RegExp("^[" + l.wordChars + "\\$_]+", "g"), this.nonTokenRe = new RegExp("^(?:[^" + l.wordChars + "\\$_]|\\s])+", "g"), this.getTokenizer = function () {
                        return this.$tokenizer || (this.$highlightRules = this.$highlightRules || new this.HighlightRules(this.$highlightRuleConfig), this.$tokenizer = new o(this.$highlightRules.getRules())), this.$tokenizer
                    }, this.lineCommentStart = "", this.blockComment = "", this.toggleCommentLines = function (e, t, i, n) {
                        var s = t.doc, o = !0, r = !0, a = 1 / 0, l = t.getTabSize(), h = !1;
                        if (this.lineCommentStart) {
                            if (Array.isArray(this.lineCommentStart)) p = this.lineCommentStart.map(c.escapeRegExp).join("|"), g = this.lineCommentStart[0]; else p = c.escapeRegExp(this.lineCommentStart), g = this.lineCommentStart;
                            p = new RegExp("^(\\s*)(?:" + p + ") ?"), h = t.getUseSoftTabs();
                            w = function (e, t) {
                                var i = e.match(p);
                                if (i) {
                                    var n = i[1].length, o = i[0].length;
                                    d(e, n, o) || " " != i[0][o - 1] || o--, s.removeInLine(t, n, o)
                                }
                            };
                            var u = g + " ", d = (v = function (e, t) {
                                o && !/\S/.test(e) || (d(e, a, a) ? s.insertInLine({
                                    row: t,
                                    column: a
                                }, u) : s.insertInLine({row: t, column: a}, g))
                            }, b = function (e, t) {
                                return p.test(e)
                            }, function (e, t, i) {
                                var n = 0;
                                while (t-- && " " == e.charAt(t)) n++;
                                if (n % l != 0) return !1;
                                n = 0;
                                while (" " == e.charAt(i++)) n++;
                                return l > 2 ? n % l != l - 1 : n % l == 0
                            })
                        } else {
                            if (!this.blockComment) return !1;
                            var g = this.blockComment.start, f = this.blockComment.end,
                                p = new RegExp("^(\\s*)(?:" + c.escapeRegExp(g) + ")"),
                                m = new RegExp("(?:" + c.escapeRegExp(f) + ")\\s*$"), v = function (e, t) {
                                    b(e, t) || o && !/\S/.test(e) || (s.insertInLine({
                                        row: t,
                                        column: e.length
                                    }, f), s.insertInLine({row: t, column: a}, g))
                                }, w = function (e, t) {
                                    var i;
                                    (i = e.match(m)) && s.removeInLine(t, e.length - i[0].length, e.length), (i = e.match(p)) && s.removeInLine(t, i[1].length, i[0].length)
                                }, b = function (e, i) {
                                    if (p.test(e)) return !0;
                                    for (var n = t.getTokens(i), s = 0; s < n.length; s++) if ("comment" === n[s].type) return !0
                                }
                        }

                        function y(e) {
                            for (var t = i; t <= n; t++) e(s.getLine(t), t)
                        }

                        var $ = 1 / 0;
                        y((function (e, t) {
                            var i = e.search(/\S/);
                            -1 !== i ? (i < a && (a = i), r && !b(e, t) && (r = !1)) : $ > e.length && ($ = e.length)
                        })), a == 1 / 0 && (a = $, o = !1, r = !1), h && a % l != 0 && (a = Math.floor(a / l) * l), y(r ? w : v)
                    }, this.toggleBlockComment = function (e, t, i, n) {
                        var s = this.blockComment;
                        if (s) {
                            !s.start && s[0] && (s = s[0]);
                            var o, r, a = new h(t, n.row, n.column), l = a.getCurrentToken(),
                                c = (t.selection, t.selection.toOrientedRange());
                            if (l && /comment/.test(l.type)) {
                                var d, g;
                                while (l && /comment/.test(l.type)) {
                                    var f = l.value.indexOf(s.start);
                                    if (-1 != f) {
                                        var p = a.getCurrentTokenRow(), m = a.getCurrentTokenColumn() + f;
                                        d = new u(p, m, p, m + s.start.length);
                                        break
                                    }
                                    l = a.stepBackward()
                                }
                                a = new h(t, n.row, n.column), l = a.getCurrentToken();
                                while (l && /comment/.test(l.type)) {
                                    f = l.value.indexOf(s.end);
                                    if (-1 != f) {
                                        p = a.getCurrentTokenRow(), m = a.getCurrentTokenColumn() + f;
                                        g = new u(p, m, p, m + s.end.length);
                                        break
                                    }
                                    l = a.stepForward()
                                }
                                g && t.remove(g), d && (t.remove(d), o = d.start.row, r = -s.start.length)
                            } else r = s.start.length, o = i.start.row, t.insert(i.end, s.end), t.insert(i.start, s.start);
                            c.start.row == o && (c.start.column += r), c.end.row == o && (c.end.column += r), t.selection.fromOrientedRange(c)
                        }
                    }, this.getNextLineIndent = function (e, t, i) {
                        return this.$getIndent(t)
                    }, this.checkOutdent = function (e, t, i) {
                        return !1
                    }, this.autoOutdent = function (e, t, i) {
                    }, this.$getIndent = function (e) {
                        return e.match(/^\s*/)[0]
                    }, this.createWorker = function (e) {
                        return null
                    }, this.createModeDelegates = function (e) {
                        for (var t in this.$embeds = [], this.$modes = {}, e) if (e[t]) {
                            var i = e[t], n = i.prototype.$id, o = s.$modes[n];
                            o || (s.$modes[n] = o = new i), s.$modes[t] || (s.$modes[t] = o), this.$embeds.push(t), this.$modes[t] = o
                        }
                        var r = ["toggleBlockComment", "toggleCommentLines", "getNextLineIndent", "checkOutdent", "autoOutdent", "transformAction", "getCompletions"];
                        for (t = 0; t < r.length; t++) (function (e) {
                            var i = r[t], n = e[i];
                            e[r[t]] = function () {
                                return this.$delegator(i, arguments, n)
                            }
                        })(this)
                    }, this.$delegator = function (e, t, i) {
                        var n = t[0] || "start";
                        if ("string" != typeof n) {
                            if (Array.isArray(n[2])) {
                                var s = n[2][n[2].length - 1], o = this.$modes[s];
                                if (o) return o[e].apply(o, [n[1]].concat([].slice.call(t, 1)))
                            }
                            n = n[0] || "start"
                        }
                        for (var r = 0; r < this.$embeds.length; r++) if (this.$modes[this.$embeds[r]]) {
                            var a = n.split(this.$embeds[r]);
                            if (!a[0] && a[1]) {
                                t[0] = a[1];
                                o = this.$modes[this.$embeds[r]];
                                return o[e].apply(o, t)
                            }
                        }
                        var l = i.apply(this, t);
                        return i ? l : void 0
                    }, this.transformAction = function (e, t, i, n, s) {
                        if (this.$behaviour) {
                            var o = this.$behaviour.getBehaviours();
                            for (var r in o) if (o[r][t]) {
                                var a = o[r][t].apply(this, arguments);
                                if (a) return a
                            }
                        }
                    }, this.getKeywords = function (e) {
                        if (!this.completionKeywords) {
                            var i = this.$tokenizer.rules, n = [];
                            for (var s in i) for (var o = i[s], r = 0, a = o.length; r < a; r++) if ("string" === typeof o[r].token) /keyword|support|storage/.test(o[r].token) && n.push(o[r].regex); else if ("object" === Object(t["a"])(o[r].token)) for (var l = 0, c = o[r].token.length; l < c; l++) if (/keyword|support|storage/.test(o[r].token[l])) {
                                s = o[r].regex.match(/\(.+?\)/g)[l];
                                n.push(s.substr(1, s.length - 2))
                            }
                            this.completionKeywords = n
                        }
                        return e ? n.concat(this.$keywordList || []) : this.$keywordList
                    }, this.$createKeywordList = function () {
                        return this.$highlightRules || this.getTokenizer(), this.$keywordList = this.$highlightRules.$keywordList || []
                    }, this.getCompletions = function (e, t, i, n) {
                        var s = this.$keywordList || this.$createKeywordList();
                        return s.map((function (e) {
                            return {name: e, value: e, score: 0, meta: "keyword"}
                        }))
                    }, this.$id = "ace/mode/text"
                }).call(d.prototype), i.Mode = d
            })), deAceFine("ace/apply_delta", ["require", "exports", "module"], (function (e, t, i) {
                t.applyDelta = function (e, t, i) {
                    var n = t.start.row, s = t.start.column, o = e[n] || "";
                    switch (t.action) {
                        case"insert":
                            var r = t.lines;
                            if (1 === r.length) e[n] = o.substring(0, s) + t.lines[0] + o.substring(s); else {
                                var a = [n, 1].concat(t.lines);
                                e.splice.apply(e, a), e[n] = o.substring(0, s) + e[n], e[n + t.lines.length - 1] += o.substring(s)
                            }
                            break;
                        case"remove":
                            var l = t.end.column, c = t.end.row;
                            n === c ? e[n] = o.substring(0, s) + o.substring(l) : e.splice(n, c - n + 1, o.substring(0, s) + e[c].substring(l));
                            break
                    }
                }
            })), deAceFine("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], (function (e, t, i) {
                var n = e("./lib/oop"), s = e("./lib/event_emitter").EventEmitter, o = t.Anchor = function (e, t, i) {
                    this.$onChange = this.onChange.bind(this), this.attach(e), "undefined" == typeof i ? this.setPosition(t.row, t.column) : this.setPosition(t, i)
                };
                (function () {
                    function e(e, t, i) {
                        var n = i ? e.column <= t.column : e.column < t.column;
                        return e.row < t.row || e.row == t.row && n
                    }

                    function t(t, i, n) {
                        var s = "insert" == t.action, o = (s ? 1 : -1) * (t.end.row - t.start.row),
                            r = (s ? 1 : -1) * (t.end.column - t.start.column), a = t.start, l = s ? a : t.end;
                        return e(i, a, n) ? {row: i.row, column: i.column} : e(l, i, !n) ? {
                            row: i.row + o,
                            column: i.column + (i.row == l.row ? r : 0)
                        } : {row: a.row, column: a.column}
                    }

                    n.implement(this, s), this.getPosition = function () {
                        return this.$clipPositionToDocument(this.row, this.column)
                    }, this.getDocument = function () {
                        return this.document
                    }, this.$insertRight = !1, this.onChange = function (e) {
                        if ((e.start.row != e.end.row || e.start.row == this.row) && !(e.start.row > this.row)) {
                            var i = t(e, {row: this.row, column: this.column}, this.$insertRight);
                            this.setPosition(i.row, i.column, !0)
                        }
                    }, this.setPosition = function (e, t, i) {
                        var n;
                        if (n = i ? {
                            row: e,
                            column: t
                        } : this.$clipPositionToDocument(e, t), this.row != n.row || this.column != n.column) {
                            var s = {row: this.row, column: this.column};
                            this.row = n.row, this.column = n.column, this._signal("change", {old: s, value: n})
                        }
                    }, this.detach = function () {
                        this.document.removeEventListener("change", this.$onChange)
                    }, this.attach = function (e) {
                        this.document = e || this.document, this.document.on("change", this.$onChange)
                    }, this.$clipPositionToDocument = function (e, t) {
                        var i = {};
                        return e >= this.document.getLength() ? (i.row = Math.max(0, this.document.getLength() - 1), i.column = this.document.getLine(i.row).length) : e < 0 ? (i.row = 0, i.column = 0) : (i.row = e, i.column = Math.min(this.document.getLine(i.row).length, Math.max(0, t))), t < 0 && (i.column = 0), i
                    }
                }).call(o.prototype)
            })), deAceFine("ace/document", ["require", "exports", "module", "ace/lib/oop", "ace/apply_delta", "ace/lib/event_emitter", "ace/range", "ace/anchor"], (function (e, t, i) {
                var n = e("./lib/oop"), s = e("./apply_delta").applyDelta, o = e("./lib/event_emitter").EventEmitter,
                    r = e("./range").Range, a = e("./anchor").Anchor, l = function (e) {
                        this.$lines = [""], 0 === e.length ? this.$lines = [""] : Array.isArray(e) ? this.insertMergedLines({
                            row: 0,
                            column: 0
                        }, e) : this.insert({row: 0, column: 0}, e)
                    };
                (function () {
                    n.implement(this, o), this.setValue = function (e) {
                        var t = this.getLength() - 1;
                        this.remove(new r(0, 0, t, this.getLine(t).length)), this.insert({row: 0, column: 0}, e)
                    }, this.getValue = function () {
                        return this.getAllLines().join(this.getNewLineCharacter())
                    }, this.createAnchor = function (e, t) {
                        return new a(this, e, t)
                    }, 0 === "aaa".split(/a/).length ? this.$split = function (e) {
                        return e.replace(/\r\n|\r/g, "\n").split("\n")
                    } : this.$split = function (e) {
                        return e.split(/\r\n|\r|\n/)
                    }, this.$detectNewLine = function (e) {
                        var t = e.match(/^.*?(\r\n|\r|\n)/m);
                        this.$autoNewLine = t ? t[1] : "\n", this._signal("changeNewLineMode")
                    }, this.getNewLineCharacter = function () {
                        switch (this.$newLineMode) {
                            case"windows":
                                return "\r\n";
                            case"unix":
                                return "\n";
                            default:
                                return this.$autoNewLine || "\n"
                        }
                    }, this.$autoNewLine = "", this.$newLineMode = "auto", this.setNewLineMode = function (e) {
                        this.$newLineMode !== e && (this.$newLineMode = e, this._signal("changeNewLineMode"))
                    }, this.getNewLineMode = function () {
                        return this.$newLineMode
                    }, this.isNewLine = function (e) {
                        return "\r\n" == e || "\r" == e || "\n" == e
                    }, this.getLine = function (e) {
                        return this.$lines[e] || ""
                    }, this.getLines = function (e, t) {
                        return this.$lines.slice(e, t + 1)
                    }, this.getAllLines = function () {
                        return this.getLines(0, this.getLength())
                    }, this.getLength = function () {
                        return this.$lines.length
                    }, this.getTextRange = function (e) {
                        return this.getLinesForRange(e).join(this.getNewLineCharacter())
                    }, this.getLinesForRange = function (e) {
                        var t;
                        if (e.start.row === e.end.row) t = [this.getLine(e.start.row).substring(e.start.column, e.end.column)]; else {
                            t = this.getLines(e.start.row, e.end.row), t[0] = (t[0] || "").substring(e.start.column);
                            var i = t.length - 1;
                            e.end.row - e.start.row == i && (t[i] = t[i].substring(0, e.end.column))
                        }
                        return t
                    }, this.insertLines = function (e, t) {
                        return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."), this.insertFullLines(e, t)
                    }, this.removeLines = function (e, t) {
                        return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."), this.removeFullLines(e, t)
                    }, this.insertNewLine = function (e) {
                        return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."), this.insertMergedLines(e, ["", ""])
                    }, this.insert = function (e, t) {
                        return this.getLength() <= 1 && this.$detectNewLine(t), this.insertMergedLines(e, this.$split(t))
                    }, this.insertInLine = function (e, t) {
                        var i = this.clippedPos(e.row, e.column), n = this.pos(e.row, e.column + t.length);
                        return this.applyDelta({start: i, end: n, action: "insert", lines: [t]}, !0), this.clonePos(n)
                    }, this.clippedPos = function (e, t) {
                        var i = this.getLength();
                        void 0 === e ? e = i : e < 0 ? e = 0 : e >= i && (e = i - 1, t = void 0);
                        var n = this.getLine(e);
                        return void 0 == t && (t = n.length), t = Math.min(Math.max(t, 0), n.length), {
                            row: e,
                            column: t
                        }
                    }, this.clonePos = function (e) {
                        return {row: e.row, column: e.column}
                    }, this.pos = function (e, t) {
                        return {row: e, column: t}
                    }, this.$clipPosition = function (e) {
                        var t = this.getLength();
                        return e.row >= t ? (e.row = Math.max(0, t - 1), e.column = this.getLine(t - 1).length) : (e.row = Math.max(0, e.row), e.column = Math.min(Math.max(e.column, 0), this.getLine(e.row).length)), e
                    }, this.insertFullLines = function (e, t) {
                        e = Math.min(Math.max(e, 0), this.getLength());
                        var i = 0;
                        e < this.getLength() ? (t = t.concat([""]), i = 0) : (t = [""].concat(t), e--, i = this.$lines[e].length), this.insertMergedLines({
                            row: e,
                            column: i
                        }, t)
                    }, this.insertMergedLines = function (e, t) {
                        var i = this.clippedPos(e.row, e.column), n = {
                            row: i.row + t.length - 1,
                            column: (1 == t.length ? i.column : 0) + t[t.length - 1].length
                        };
                        return this.applyDelta({start: i, end: n, action: "insert", lines: t}), this.clonePos(n)
                    }, this.remove = function (e) {
                        var t = this.clippedPos(e.start.row, e.start.column),
                            i = this.clippedPos(e.end.row, e.end.column);
                        return this.applyDelta({
                            start: t,
                            end: i,
                            action: "remove",
                            lines: this.getLinesForRange({start: t, end: i})
                        }), this.clonePos(t)
                    }, this.removeInLine = function (e, t, i) {
                        var n = this.clippedPos(e, t), s = this.clippedPos(e, i);
                        return this.applyDelta({
                            start: n,
                            end: s,
                            action: "remove",
                            lines: this.getLinesForRange({start: n, end: s})
                        }, !0), this.clonePos(n)
                    }, this.removeFullLines = function (e, t) {
                        e = Math.min(Math.max(0, e), this.getLength() - 1), t = Math.min(Math.max(0, t), this.getLength() - 1);
                        var i = t == this.getLength() - 1 && e > 0, n = t < this.getLength() - 1, s = i ? e - 1 : e,
                            o = i ? this.getLine(s).length : 0, a = n ? t + 1 : t, l = n ? 0 : this.getLine(a).length,
                            c = new r(s, o, a, l), h = this.$lines.slice(e, t + 1);
                        return this.applyDelta({
                            start: c.start,
                            end: c.end,
                            action: "remove",
                            lines: this.getLinesForRange(c)
                        }), h
                    }, this.removeNewLine = function (e) {
                        e < this.getLength() - 1 && e >= 0 && this.applyDelta({
                            start: this.pos(e, this.getLine(e).length),
                            end: this.pos(e + 1, 0),
                            action: "remove",
                            lines: ["", ""]
                        })
                    }, this.replace = function (e, t) {
                        return e instanceof r || (e = r.fromPoints(e.start, e.end)), 0 === t.length && e.isEmpty() ? e.start : t == this.getTextRange(e) ? e.end : (this.remove(e), i = t ? this.insert(e.start, t) : e.start, i);
                        var i
                    }, this.applyDeltas = function (e) {
                        for (var t = 0; t < e.length; t++) this.applyDelta(e[t])
                    }, this.revertDeltas = function (e) {
                        for (var t = e.length - 1; t >= 0; t--) this.revertDelta(e[t])
                    }, this.applyDelta = function (e, t) {
                        var i = "insert" == e.action;
                        (i ? e.lines.length <= 1 && !e.lines[0] : !r.comparePoints(e.start, e.end)) || (i && e.lines.length > 2e4 ? this.$splitAndapplyLargeDelta(e, 2e4) : (s(this.$lines, e, t), this._signal("change", e)))
                    }, this.$splitAndapplyLargeDelta = function (e, t) {
                        for (var i = e.lines, n = i.length - t + 1, s = e.start.row, o = e.start.column, r = 0, a = 0; r < n; r = a) {
                            a += t - 1;
                            var l = i.slice(r, a);
                            l.push(""), this.applyDelta({
                                start: this.pos(s + r, o),
                                end: this.pos(s + a, o = 0),
                                action: e.action,
                                lines: l
                            }, !0)
                        }
                        e.lines = i.slice(r), e.start.row = s + r, e.start.column = o, this.applyDelta(e, !0)
                    }, this.revertDelta = function (e) {
                        this.applyDelta({
                            start: this.clonePos(e.start),
                            end: this.clonePos(e.end),
                            action: "insert" == e.action ? "remove" : "insert",
                            lines: e.lines.slice()
                        })
                    }, this.indexToPosition = function (e, t) {
                        for (var i = this.$lines || this.getAllLines(), n = this.getNewLineCharacter().length, s = t || 0, o = i.length; s < o; s++) if (e -= i[s].length + n, e < 0) return {
                            row: s,
                            column: e + i[s].length + n
                        };
                        return {row: o - 1, column: e + i[o - 1].length + n}
                    }, this.positionToIndex = function (e, t) {
                        for (var i = this.$lines || this.getAllLines(), n = this.getNewLineCharacter().length, s = 0, o = Math.min(e.row, i.length), r = t || 0; r < o; ++r) s += i[r].length + n;
                        return s + e.column
                    }
                }).call(l.prototype), t.Document = l
            })), deAceFine("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], (function (e, t, i) {
                var n = e("./lib/oop"), s = e("./lib/event_emitter").EventEmitter, o = function (e, t) {
                    this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.tokenizer = e;
                    var i = this;
                    this.$worker = function () {
                        if (i.running) {
                            var e = new Date, t = i.currentLine, n = -1, s = i.doc, o = t;
                            while (i.lines[t]) t++;
                            var r = s.getLength(), a = 0;
                            i.running = !1;
                            while (t < r) {
                                i.$tokenizeRow(t), n = t;
                                do {
                                    t++
                                } while (i.lines[t]);
                                if (a++, a % 5 === 0 && new Date - e > 20) {
                                    i.running = setTimeout(i.$worker, 20);
                                    break
                                }
                            }
                            i.currentLine = t, -1 == n && (n = t), o <= n && i.fireUpdateEvent(o, n)
                        }
                    }
                };
                (function () {
                    n.implement(this, s), this.setTokenizer = function (e) {
                        this.tokenizer = e, this.lines = [], this.states = [], this.start(0)
                    }, this.setDocument = function (e) {
                        this.doc = e, this.lines = [], this.states = [], this.stop()
                    }, this.fireUpdateEvent = function (e, t) {
                        var i = {first: e, last: t};
                        this._signal("update", {data: i})
                    }, this.start = function (e) {
                        this.currentLine = Math.min(e || 0, this.currentLine, this.doc.getLength()), this.lines.splice(this.currentLine, this.lines.length), this.states.splice(this.currentLine, this.states.length), this.stop(), this.running = setTimeout(this.$worker, 700)
                    }, this.scheduleStart = function () {
                        this.running || (this.running = setTimeout(this.$worker, 700))
                    }, this.$updateOnChange = function (e) {
                        var t = e.start.row, i = e.end.row - t;
                        if (0 === i) this.lines[t] = null; else if ("remove" == e.action) this.lines.splice(t, i + 1, null), this.states.splice(t, i + 1, null); else {
                            var n = Array(i + 1);
                            n.unshift(t, 1), this.lines.splice.apply(this.lines, n), this.states.splice.apply(this.states, n)
                        }
                        this.currentLine = Math.min(t, this.currentLine, this.doc.getLength()), this.stop()
                    }, this.stop = function () {
                        this.running && clearTimeout(this.running), this.running = !1
                    }, this.getTokens = function (e) {
                        return this.lines[e] || this.$tokenizeRow(e)
                    }, this.getState = function (e) {
                        return this.currentLine == e && this.$tokenizeRow(e), this.states[e] || "start"
                    }, this.$tokenizeRow = function (e) {
                        var t = this.doc.getLine(e), i = this.states[e - 1], n = this.tokenizer.getLineTokens(t, i, e);
                        return this.states[e] + "" !== n.state + "" ? (this.states[e] = n.state, this.lines[e + 1] = null, this.currentLine > e + 1 && (this.currentLine = e + 1)) : this.currentLine == e && (this.currentLine = e + 1), this.lines[e] = n.tokens
                    }
                }).call(o.prototype), t.BackgroundTokenizer = o
            })), deAceFine("ace/search_highlight", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], (function (e, t, i) {
                var n = e("./lib/lang"), s = (e("./lib/oop"), e("./range").Range), o = function (e, t, i) {
                    this.setRegexp(e), this.clazz = t, this.type = i || "text"
                };
                (function () {
                    this.MAX_RANGES = 500, this.setRegexp = function (e) {
                        this.regExp + "" != e + "" && (this.regExp = e, this.cache = [])
                    }, this.update = function (e, t, i, o) {
                        if (this.regExp) for (var r = o.firstRow, a = o.lastRow, l = r; l <= a; l++) {
                            var c = this.cache[l];
                            null == c && (c = n.getMatchOffsets(i.getLine(l), this.regExp), c.length > this.MAX_RANGES && (c = c.slice(0, this.MAX_RANGES)), c = c.map((function (e) {
                                return new s(l, e.offset, l, e.offset + e.length)
                            })), this.cache[l] = c.length ? c : "");
                            for (var h = c.length; h--;) t.drawSingleLineMarker(e, c[h].toScreenRange(i), this.clazz, o)
                        }
                    }
                }).call(o.prototype), t.SearchHighlight = o
            })), deAceFine("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"], (function (e, t, i) {
                var n = e("../range").Range;

                function s(e, t) {
                    this.foldData = e, Array.isArray(t) ? this.folds = t : t = this.folds = [t];
                    var i = t[t.length - 1];
                    this.range = new n(t[0].start.row, t[0].start.column, i.end.row, i.end.column), this.start = this.range.start, this.end = this.range.end, this.folds.forEach((function (e) {
                        e.setFoldLine(this)
                    }), this)
                }

                (function () {
                    this.shiftRow = function (e) {
                        this.start.row += e, this.end.row += e, this.folds.forEach((function (t) {
                            t.start.row += e, t.end.row += e
                        }))
                    }, this.addFold = function (e) {
                        if (e.sameRow) {
                            if (e.start.row < this.startRow || e.endRow > this.endRow) throw new Error("Can't add a fold to this FoldLine as it has no connection");
                            this.folds.push(e), this.folds.sort((function (e, t) {
                                return -e.range.compareEnd(t.start.row, t.start.column)
                            })), this.range.compareEnd(e.start.row, e.start.column) > 0 ? (this.end.row = e.end.row, this.end.column = e.end.column) : this.range.compareStart(e.end.row, e.end.column) < 0 && (this.start.row = e.start.row, this.start.column = e.start.column)
                        } else if (e.start.row == this.end.row) this.folds.push(e), this.end.row = e.end.row, this.end.column = e.end.column; else {
                            if (e.end.row != this.start.row) throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");
                            this.folds.unshift(e), this.start.row = e.start.row, this.start.column = e.start.column
                        }
                        e.foldLine = this
                    }, this.containsRow = function (e) {
                        return e >= this.start.row && e <= this.end.row
                    }, this.walk = function (e, t, i) {
                        var n, s, o, r = 0, a = this.folds, l = !0;
                        null == t && (t = this.end.row, i = this.end.column);
                        for (var c = 0; c < a.length; c++) {
                            if (n = a[c], s = n.range.compareStart(t, i), -1 == s) return void e(null, t, i, r, l);
                            if (o = e(null, n.start.row, n.start.column, r, l), o = !o && e(n.placeholder, n.start.row, n.start.column, r), o || 0 === s) return;
                            l = !n.sameRow, r = n.end.column
                        }
                        e(null, t, i, r, l)
                    }, this.getNextFoldTo = function (e, t) {
                        for (var i, n, s = 0; s < this.folds.length; s++) {
                            if (i = this.folds[s], n = i.range.compareEnd(e, t), -1 == n) return {
                                fold: i,
                                kind: "after"
                            };
                            if (0 === n) return {fold: i, kind: "inside"}
                        }
                        return null
                    }, this.addRemoveChars = function (e, t, i) {
                        var n, s, o = this.getNextFoldTo(e, t);
                        if (o) if (n = o.fold, "inside" == o.kind && n.start.column != t && n.start.row != e) window.console && window.console.log(e, t, n); else if (n.start.row == e) {
                            s = this.folds;
                            var r = s.indexOf(n);
                            for (0 === r && (this.start.column += i), r; r < s.length; r++) {
                                if (n = s[r], n.start.column += i, !n.sameRow) return;
                                n.end.column += i
                            }
                            this.end.column += i
                        }
                    }, this.split = function (e, t) {
                        var i = this.getNextFoldTo(e, t);
                        if (!i || "inside" == i.kind) return null;
                        var n = i.fold, o = this.folds, r = this.foldData, a = o.indexOf(n), l = o[a - 1];
                        this.end.row = l.end.row, this.end.column = l.end.column, o = o.splice(a, o.length - a);
                        var c = new s(r, o);
                        return r.splice(r.indexOf(this) + 1, 0, c), c
                    }, this.merge = function (e) {
                        for (var t = e.folds, i = 0; i < t.length; i++) this.addFold(t[i]);
                        var n = this.foldData;
                        n.splice(n.indexOf(e), 1)
                    }, this.toString = function () {
                        var e = [this.range.toString() + ": ["];
                        return this.folds.forEach((function (t) {
                            e.push("  " + t.toString())
                        })), e.push("]"), e.join("\n")
                    }, this.idxToPosition = function (e) {
                        for (var t = 0, i = 0; i < this.folds.length; i++) {
                            var n = this.folds[i];
                            if (e -= n.start.column - t, e < 0) return {row: n.start.row, column: n.start.column + e};
                            if (e -= n.placeholder.length, e < 0) return n.start;
                            t = n.end.column
                        }
                        return {row: this.end.row, column: this.end.column + e}
                    }
                }).call(s.prototype), t.FoldLine = s
            })), deAceFine("ace/range_list", ["require", "exports", "module", "ace/range"], (function (e, t, i) {
                var n = e("./range").Range, s = n.comparePoints, o = function () {
                    this.ranges = [], this.$bias = 1
                };
                (function () {
                    this.comparePoints = s, this.pointIndex = function (e, t, i) {
                        for (var n = this.ranges, o = i || 0; o < n.length; o++) {
                            var r = n[o], a = s(e, r.end);
                            if (!(a > 0)) {
                                var l = s(e, r.start);
                                return 0 === a ? t && 0 !== l ? -o - 2 : o : l > 0 || 0 === l && !t ? o : -o - 1
                            }
                        }
                        return -o - 1
                    }, this.add = function (e) {
                        var t = !e.isEmpty(), i = this.pointIndex(e.start, t);
                        i < 0 && (i = -i - 1);
                        var n = this.pointIndex(e.end, t, i);
                        return n < 0 ? n = -n - 1 : n++, this.ranges.splice(i, n - i, e)
                    }, this.addList = function (e) {
                        for (var t = [], i = e.length; i--;) t.push.apply(t, this.add(e[i]));
                        return t
                    }, this.substractPoint = function (e) {
                        var t = this.pointIndex(e);
                        if (t >= 0) return this.ranges.splice(t, 1)
                    }, this.merge = function () {
                        var e = [], t = this.ranges;
                        t = t.sort((function (e, t) {
                            return s(e.start, t.start)
                        }));
                        for (var i, n = t[0], o = 1; o < t.length; o++) {
                            i = n, n = t[o];
                            var r = s(i.end, n.start);
                            r < 0 || (0 != r || i.isEmpty() || n.isEmpty()) && (s(i.end, n.end) < 0 && (i.end.row = n.end.row, i.end.column = n.end.column), t.splice(o, 1), e.push(n), n = i, o--)
                        }
                        return this.ranges = t, e
                    }, this.contains = function (e, t) {
                        return this.pointIndex({row: e, column: t}) >= 0
                    }, this.containsPoint = function (e) {
                        return this.pointIndex(e) >= 0
                    }, this.rangeAtPoint = function (e) {
                        var t = this.pointIndex(e);
                        if (t >= 0) return this.ranges[t]
                    }, this.clipRows = function (e, t) {
                        var i = this.ranges;
                        if (i[0].start.row > t || i[i.length - 1].start.row < e) return [];
                        var n = this.pointIndex({row: e, column: 0});
                        n < 0 && (n = -n - 1);
                        var s = this.pointIndex({row: t, column: 0}, n);
                        s < 0 && (s = -s - 1);
                        for (var o = [], r = n; r < s; r++) o.push(i[r]);
                        return o
                    }, this.removeAll = function () {
                        return this.ranges.splice(0, this.ranges.length)
                    }, this.attach = function (e) {
                        this.session && this.detach(), this.session = e, this.onChange = this.$onChange.bind(this), this.session.on("change", this.onChange)
                    }, this.detach = function () {
                        this.session && (this.session.removeListener("change", this.onChange), this.session = null)
                    }, this.$onChange = function (e) {
                        for (var t = e.start, i = e.end, n = t.row, s = i.row, o = this.ranges, r = 0, a = o.length; r < a; r++) {
                            var l = o[r];
                            if (l.end.row >= n) break
                        }
                        if ("insert" == e.action) for (var c = s - n, h = -t.column + i.column; r < a; r++) {
                            l = o[r];
                            if (l.start.row > n) break;
                            if (l.start.row == n && l.start.column >= t.column && (l.start.column == t.column && this.$bias <= 0 || (l.start.column += h, l.start.row += c)), l.end.row == n && l.end.column >= t.column) {
                                if (l.end.column == t.column && this.$bias < 0) continue;
                                l.end.column == t.column && h > 0 && r < a - 1 && l.end.column > l.start.column && l.end.column == o[r + 1].start.column && (l.end.column -= h), l.end.column += h, l.end.row += c
                            }
                        } else for (c = n - s, h = t.column - i.column; r < a; r++) {
                            l = o[r];
                            if (l.start.row > s) break;
                            l.end.row < s && (n < l.end.row || n == l.end.row && t.column < l.end.column) ? (l.end.row = n, l.end.column = t.column) : l.end.row == s ? l.end.column <= i.column ? (c || l.end.column > t.column) && (l.end.column = t.column, l.end.row = t.row) : (l.end.column += h, l.end.row += c) : l.end.row > s && (l.end.row += c), l.start.row < s && (n < l.start.row || n == l.start.row && t.column < l.start.column) ? (l.start.row = n, l.start.column = t.column) : l.start.row == s ? l.start.column <= i.column ? (c || l.start.column > t.column) && (l.start.column = t.column, l.start.row = t.row) : (l.start.column += h, l.start.row += c) : l.start.row > s && (l.start.row += c)
                        }
                        if (0 != c && r < a) for (; r < a; r++) {
                            l = o[r];
                            l.start.row += c, l.end.row += c
                        }
                    }
                }).call(o.prototype), t.RangeList = o
            })), deAceFine("ace/edit_session/fold", ["require", "exports", "module", "ace/range_list", "ace/lib/oop"], (function (e, t, i) {
                var n = e("../range_list").RangeList, s = e("../lib/oop"), o = t.Fold = function (e, t) {
                    this.foldLine = null, this.placeholder = t, this.range = e, this.start = e.start, this.end = e.end, this.sameRow = e.start.row == e.end.row, this.subFolds = this.ranges = []
                };

                function r(e, t) {
                    e.row -= t.row, 0 == e.row && (e.column -= t.column)
                }

                function a(e, t) {
                    r(e.start, t), r(e.end, t)
                }

                function l(e, t) {
                    0 == e.row && (e.column += t.column), e.row += t.row
                }

                function c(e, t) {
                    l(e.start, t), l(e.end, t)
                }

                s.inherits(o, n), function () {
                    this.toString = function () {
                        return '"' + this.placeholder + '" ' + this.range.toString()
                    }, this.setFoldLine = function (e) {
                        this.foldLine = e, this.subFolds.forEach((function (t) {
                            t.setFoldLine(e)
                        }))
                    }, this.clone = function () {
                        var e = this.range.clone(), t = new o(e, this.placeholder);
                        return this.subFolds.forEach((function (e) {
                            t.subFolds.push(e.clone())
                        })), t.collapseChildren = this.collapseChildren, t
                    }, this.addSubFold = function (e) {
                        if (!this.range.isEqual(e)) {
                            a(e, this.start);
                            for (var t = e.start.row, i = e.start.column, n = 0, s = -1; n < this.subFolds.length; n++) if (s = this.subFolds[n].range.compare(t, i), 1 != s) break;
                            var o = this.subFolds[n], r = 0;
                            if (0 == s) {
                                if (o.range.containsRange(e)) return o.addSubFold(e);
                                r = 1
                            }
                            t = e.range.end.row, i = e.range.end.column;
                            var l = n;
                            for (s = -1; l < this.subFolds.length; l++) if (s = this.subFolds[l].range.compare(t, i), 1 != s) break;
                            0 == s && l++;
                            for (var c = this.subFolds.splice(n, l - n, e), h = 0 == s ? c.length - 1 : c.length, u = r; u < h; u++) e.addSubFold(c[u]);
                            return e.setFoldLine(this.foldLine), e
                        }
                    }, this.restoreRange = function (e) {
                        return c(e, this.start)
                    }
                }.call(o.prototype)
            })), deAceFine("ace/edit_session/folding", ["require", "exports", "module", "ace/range", "ace/edit_session/fold_line", "ace/edit_session/fold", "ace/token_iterator"], (function (e, t, i) {
                var n = e("../range").Range, s = e("./fold_line").FoldLine, o = e("./fold").Fold,
                    r = e("../token_iterator").TokenIterator;

                function a() {
                    this.getFoldAt = function (e, t, i) {
                        var n = this.getFoldLine(e);
                        if (!n) return null;
                        for (var s = n.folds, o = 0; o < s.length; o++) {
                            var r = s[o].range;
                            if (r.contains(e, t)) {
                                if (1 == i && r.isEnd(e, t) && !r.isEmpty()) continue;
                                if (-1 == i && r.isStart(e, t) && !r.isEmpty()) continue;
                                return s[o]
                            }
                        }
                    }, this.getFoldsInRange = function (e) {
                        var t = e.start, i = e.end, n = this.$foldData, s = [];
                        t.column += 1, i.column -= 1;
                        for (var o = 0; o < n.length; o++) {
                            var r = n[o].range.compareRange(e);
                            if (2 != r) {
                                if (-2 == r) break;
                                for (var a = n[o].folds, l = 0; l < a.length; l++) {
                                    var c = a[l];
                                    if (r = c.range.compareRange(e), -2 == r) break;
                                    if (2 != r) {
                                        if (42 == r) break;
                                        s.push(c)
                                    }
                                }
                            }
                        }
                        return t.column -= 1, i.column += 1, s
                    }, this.getFoldsInRangeList = function (e) {
                        if (Array.isArray(e)) {
                            var t = [];
                            e.forEach((function (e) {
                                t = t.concat(this.getFoldsInRange(e))
                            }), this)
                        } else t = this.getFoldsInRange(e);
                        return t
                    }, this.getAllFolds = function () {
                        for (var e = [], t = this.$foldData, i = 0; i < t.length; i++) for (var n = 0; n < t[i].folds.length; n++) e.push(t[i].folds[n]);
                        return e
                    }, this.getFoldStringAt = function (e, t, i, n) {
                        if (n = n || this.getFoldLine(e), !n) return null;
                        for (var s, o, r = {end: {column: 0}}, a = 0; a < n.folds.length; a++) {
                            o = n.folds[a];
                            var l = o.range.compareEnd(e, t);
                            if (-1 == l) {
                                s = this.getLine(o.start.row).substring(r.end.column, o.start.column);
                                break
                            }
                            if (0 === l) return null;
                            r = o
                        }
                        return s || (s = this.getLine(o.start.row).substring(r.end.column)), -1 == i ? s.substring(0, t - r.end.column) : 1 == i ? s.substring(t - r.end.column) : s
                    }, this.getFoldLine = function (e, t) {
                        var i = this.$foldData, n = 0;
                        for (t && (n = i.indexOf(t)), -1 == n && (n = 0), n; n < i.length; n++) {
                            var s = i[n];
                            if (s.start.row <= e && s.end.row >= e) return s;
                            if (s.end.row > e) return null
                        }
                        return null
                    }, this.getNextFoldLine = function (e, t) {
                        var i = this.$foldData, n = 0;
                        for (t && (n = i.indexOf(t)), -1 == n && (n = 0), n; n < i.length; n++) {
                            var s = i[n];
                            if (s.end.row >= e) return s
                        }
                        return null
                    }, this.getFoldedRowCount = function (e, t) {
                        for (var i = this.$foldData, n = t - e + 1, s = 0; s < i.length; s++) {
                            var o = i[s], r = o.end.row, a = o.start.row;
                            if (r >= t) {
                                a < t && (a >= e ? n -= t - a : n = 0);
                                break
                            }
                            r >= e && (n -= a >= e ? r - a : r - e + 1)
                        }
                        return n
                    }, this.$addFoldLine = function (e) {
                        return this.$foldData.push(e), this.$foldData.sort((function (e, t) {
                            return e.start.row - t.start.row
                        })), e
                    }, this.addFold = function (e, t) {
                        var i, n = this.$foldData, r = !1;
                        e instanceof o ? i = e : (i = new o(t, e), i.collapseChildren = t.collapseChildren), this.$clipRangeToDocument(i.range);
                        var a = i.start.row, l = i.start.column, c = i.end.row, h = i.end.column,
                            u = this.getFoldAt(a, l, 1), d = this.getFoldAt(c, h, -1);
                        if (u && d == u) return u.addSubFold(i);
                        u && !u.range.isStart(a, l) && this.removeFold(u), d && !d.range.isEnd(c, h) && this.removeFold(d);
                        var g = this.getFoldsInRange(i.range);
                        g.length > 0 && (this.removeFolds(g), g.forEach((function (e) {
                            i.addSubFold(e)
                        })));
                        for (var f = 0; f < n.length; f++) {
                            var p = n[f];
                            if (c == p.start.row) {
                                p.addFold(i), r = !0;
                                break
                            }
                            if (a == p.end.row) {
                                if (p.addFold(i), r = !0, !i.sameRow) {
                                    var m = n[f + 1];
                                    if (m && m.start.row == c) {
                                        p.merge(m);
                                        break
                                    }
                                }
                                break
                            }
                            if (c <= p.start.row) break
                        }
                        return r || (p = this.$addFoldLine(new s(this.$foldData, i))), this.$useWrapMode ? this.$updateWrapData(p.start.row, p.start.row) : this.$updateRowLengthCache(p.start.row, p.start.row), this.$modified = !0, this._signal("changeFold", {
                            data: i,
                            action: "add"
                        }), i
                    }, this.addFolds = function (e) {
                        e.forEach((function (e) {
                            this.addFold(e)
                        }), this)
                    }, this.removeFold = function (e) {
                        var t = e.foldLine, i = t.start.row, n = t.end.row, s = this.$foldData, o = t.folds;
                        if (1 == o.length) s.splice(s.indexOf(t), 1); else if (t.range.isEnd(e.end.row, e.end.column)) o.pop(), t.end.row = o[o.length - 1].end.row, t.end.column = o[o.length - 1].end.column; else if (t.range.isStart(e.start.row, e.start.column)) o.shift(), t.start.row = o[0].start.row, t.start.column = o[0].start.column; else if (e.sameRow) o.splice(o.indexOf(e), 1); else {
                            var r = t.split(e.start.row, e.start.column);
                            o = r.folds, o.shift(), r.start.row = o[0].start.row, r.start.column = o[0].start.column
                        }
                        this.$updating || (this.$useWrapMode ? this.$updateWrapData(i, n) : this.$updateRowLengthCache(i, n)), this.$modified = !0, this._signal("changeFold", {
                            data: e,
                            action: "remove"
                        })
                    }, this.removeFolds = function (e) {
                        for (var t = [], i = 0; i < e.length; i++) t.push(e[i]);
                        t.forEach((function (e) {
                            this.removeFold(e)
                        }), this), this.$modified = !0
                    }, this.expandFold = function (e) {
                        this.removeFold(e), e.subFolds.forEach((function (t) {
                            e.restoreRange(t), this.addFold(t)
                        }), this), e.collapseChildren > 0 && this.foldAll(e.start.row + 1, e.end.row, e.collapseChildren - 1), e.subFolds = []
                    }, this.expandFolds = function (e) {
                        e.forEach((function (e) {
                            this.expandFold(e)
                        }), this)
                    }, this.unfold = function (e, t) {
                        var i, s;
                        if (null == e ? (i = new n(0, 0, this.getLength(), 0), t = !0) : i = "number" == typeof e ? new n(e, 0, e, this.getLine(e).length) : "row" in e ? n.fromPoints(e, e) : e, s = this.getFoldsInRangeList(i), t) this.removeFolds(s); else {
                            var o = s;
                            while (o.length) this.expandFolds(o), o = this.getFoldsInRangeList(i)
                        }
                        if (s.length) return s
                    }, this.isRowFolded = function (e, t) {
                        return !!this.getFoldLine(e, t)
                    }, this.getRowFoldEnd = function (e, t) {
                        var i = this.getFoldLine(e, t);
                        return i ? i.end.row : e
                    }, this.getRowFoldStart = function (e, t) {
                        var i = this.getFoldLine(e, t);
                        return i ? i.start.row : e
                    }, this.getFoldDisplayLine = function (e, t, i, n, s) {
                        null == n && (n = e.start.row), null == s && (s = 0), null == t && (t = e.end.row), null == i && (i = this.getLine(t).length);
                        var o = this.doc, r = "";
                        return e.walk((function (e, t, i, a) {
                            if (!(t < n)) {
                                if (t == n) {
                                    if (i < s) return;
                                    a = Math.max(s, a)
                                }
                                r += null != e ? e : o.getLine(t).substring(a, i)
                            }
                        }), t, i), r
                    }, this.getDisplayLine = function (e, t, i, n) {
                        var s, o = this.getFoldLine(e);
                        return o ? this.getFoldDisplayLine(o, e, t, i, n) : (s = this.doc.getLine(e), s.substring(n || 0, t || s.length))
                    }, this.$cloneFoldData = function () {
                        var e = [];
                        return e = this.$foldData.map((function (t) {
                            var i = t.folds.map((function (e) {
                                return e.clone()
                            }));
                            return new s(e, i)
                        })), e
                    }, this.toggleFold = function (e) {
                        var t, i, n = this.selection, s = n.getRange();
                        if (s.isEmpty()) {
                            var o = s.start;
                            if (t = this.getFoldAt(o.row, o.column), t) return void this.expandFold(t);
                            (i = this.findMatchingBracket(o)) ? 1 == s.comparePoint(i) ? s.end = i : (s.start = i, s.start.column++, s.end.column--) : (i = this.findMatchingBracket({
                                row: o.row,
                                column: o.column + 1
                            })) ? (1 == s.comparePoint(i) ? s.end = i : s.start = i, s.start.column++) : s = this.getCommentFoldRange(o.row, o.column) || s
                        } else {
                            var r = this.getFoldsInRange(s);
                            if (e && r.length) return void this.expandFolds(r);
                            1 == r.length && (t = r[0])
                        }
                        if (t || (t = this.getFoldAt(s.start.row, s.start.column)), t && t.range.toString() == s.toString()) this.expandFold(t); else {
                            var a = "...";
                            if (!s.isMultiLine()) {
                                if (a = this.getTextRange(s), a.length < 4) return;
                                a = a.trim().substring(0, 2) + ".."
                            }
                            this.addFold(a, s)
                        }
                    }, this.getCommentFoldRange = function (e, t, i) {
                        var s = new r(this, e, t), o = s.getCurrentToken(), a = o.type;
                        if (o && /^comment|string/.test(a)) {
                            a = a.match(/comment|string/)[0], "comment" == a && (a += "|doc-start");
                            var l = new RegExp(a), c = new n;
                            if (1 != i) {
                                do {
                                    o = s.stepBackward()
                                } while (o && l.test(o.type));
                                s.stepForward()
                            }
                            if (c.start.row = s.getCurrentTokenRow(), c.start.column = s.getCurrentTokenColumn() + 2, s = new r(this, e, t), -1 != i) {
                                var h = -1;
                                do {
                                    if (o = s.stepForward(), -1 == h) {
                                        var u = this.getState(s.$row);
                                        l.test(u) || (h = s.$row)
                                    } else if (s.$row > h) break
                                } while (o && l.test(o.type));
                                o = s.stepBackward()
                            } else o = s.getCurrentToken();
                            return c.end.row = s.getCurrentTokenRow(), c.end.column = s.getCurrentTokenColumn() + o.value.length - 2, c
                        }
                    }, this.foldAll = function (e, t, i) {
                        void 0 == i && (i = 1e5);
                        var n = this.foldWidgets;
                        if (n) {
                            t = t || this.getLength(), e = e || 0;
                            for (var s = e; s < t; s++) if (null == n[s] && (n[s] = this.getFoldWidget(s)), "start" == n[s]) {
                                var o = this.getFoldWidgetRange(s);
                                if (o && o.isMultiLine() && o.end.row <= t && o.start.row >= e) {
                                    s = o.end.row;
                                    try {
                                        var r = this.addFold("...", o);
                                        r && (r.collapseChildren = i)
                                    } catch (a) {
                                    }
                                }
                            }
                        }
                    }, this.$foldStyles = {
                        manual: 1,
                        markbegin: 1,
                        markbeginend: 1
                    }, this.$foldStyle = "markbegin", this.setFoldStyle = function (e) {
                        if (!this.$foldStyles[e]) throw new Error("invalid fold style: " + e + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
                        if (this.$foldStyle != e) {
                            this.$foldStyle = e, "manual" == e && this.unfold();
                            var t = this.$foldMode;
                            this.$setFolding(null), this.$setFolding(t)
                        }
                    }, this.$setFolding = function (e) {
                        this.$foldMode != e && (this.$foldMode = e, this.off("change", this.$updateFoldWidgets), this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets), this._signal("changeAnnotation"), e && "manual" != this.$foldStyle ? (this.foldWidgets = [], this.getFoldWidget = e.getFoldWidget.bind(e, this, this.$foldStyle), this.getFoldWidgetRange = e.getFoldWidgetRange.bind(e, this, this.$foldStyle), this.$updateFoldWidgets = this.updateFoldWidgets.bind(this), this.$tokenizerUpdateFoldWidgets = this.tokenizerUpdateFoldWidgets.bind(this), this.on("change", this.$updateFoldWidgets), this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets)) : this.foldWidgets = null)
                    }, this.getParentFoldRangeData = function (e, t) {
                        var i = this.foldWidgets;
                        if (!i || t && i[e]) return {};
                        var n, s = e - 1;
                        while (s >= 0) {
                            var o = i[s];
                            if (null == o && (o = i[s] = this.getFoldWidget(s)), "start" == o) {
                                var r = this.getFoldWidgetRange(s);
                                if (n || (n = r), r && r.end.row >= e) break
                            }
                            s--
                        }
                        return {range: -1 !== s && r, firstRange: n}
                    }, this.onFoldWidgetClick = function (e, t) {
                        t = t.domEvent;
                        var i = {children: t.shiftKey, all: t.ctrlKey || t.metaKey, siblings: t.altKey},
                            n = this.$toggleFoldWidget(e, i);
                        if (!n) {
                            var s = t.target || t.srcElement;
                            s && /ace_fold-widget/.test(s.className) && (s.className += " ace_invalid")
                        }
                    }, this.$toggleFoldWidget = function (e, t) {
                        if (this.getFoldWidget) {
                            var i = this.getFoldWidget(e), n = this.getLine(e), s = "end" === i ? -1 : 1,
                                o = this.getFoldAt(e, -1 === s ? 0 : n.length, s);
                            if (o) return t.children || t.all ? this.removeFold(o) : this.expandFold(o), o;
                            var r = this.getFoldWidgetRange(e, !0);
                            if (r && !r.isMultiLine() && (o = this.getFoldAt(r.start.row, r.start.column, 1), o && r.isEqual(o.range))) return this.removeFold(o), o;
                            if (t.siblings) {
                                var a = this.getParentFoldRangeData(e);
                                if (a.range) var l = a.range.start.row + 1, c = a.range.end.row;
                                this.foldAll(l, c, t.all ? 1e4 : 0)
                            } else t.children ? (c = r ? r.end.row : this.getLength(), this.foldAll(e + 1, c, t.all ? 1e4 : 0)) : r && (t.all && (r.collapseChildren = 1e4), this.addFold("...", r));
                            return r
                        }
                    }, this.toggleFoldWidget = function (e) {
                        var t = this.selection.getCursor().row;
                        t = this.getRowFoldStart(t);
                        var i = this.$toggleFoldWidget(t, {});
                        if (!i) {
                            var n = this.getParentFoldRangeData(t, !0);
                            if (i = n.range || n.firstRange, i) {
                                t = i.start.row;
                                var s = this.getFoldAt(t, this.getLine(t).length, 1);
                                s ? this.removeFold(s) : this.addFold("...", i)
                            }
                        }
                    }, this.updateFoldWidgets = function (e) {
                        var t = e.start.row, i = e.end.row - t;
                        if (0 === i) this.foldWidgets[t] = null; else if ("remove" == e.action) this.foldWidgets.splice(t, i + 1, null); else {
                            var n = Array(i + 1);
                            n.unshift(t, 1), this.foldWidgets.splice.apply(this.foldWidgets, n)
                        }
                    }, this.tokenizerUpdateFoldWidgets = function (e) {
                        var t = e.data;
                        t.first != t.last && this.foldWidgets.length > t.first && this.foldWidgets.splice(t.first, this.foldWidgets.length)
                    }
                }

                t.Folding = a
            })), deAceFine("ace/edit_session/bracket_match", ["require", "exports", "module", "ace/token_iterator", "ace/range"], (function (e, t, i) {
                var n = e("../token_iterator").TokenIterator, s = e("../range").Range;

                function o() {
                    this.findMatchingBracket = function (e, t) {
                        if (0 == e.column) return null;
                        var i = t || this.getLine(e.row).charAt(e.column - 1);
                        if ("" == i) return null;
                        var n = i.match(/([\(\[\{])|([\)\]\}])/);
                        return n ? n[1] ? this.$findClosingBracket(n[1], e) : this.$findOpeningBracket(n[2], e) : null
                    }, this.getBracketRange = function (e) {
                        var t, i = this.getLine(e.row), n = !0, o = i.charAt(e.column - 1),
                            r = o && o.match(/([\(\[\{])|([\)\]\}])/);
                        if (r || (o = i.charAt(e.column), e = {
                            row: e.row,
                            column: e.column + 1
                        }, r = o && o.match(/([\(\[\{])|([\)\]\}])/), n = !1), !r) return null;
                        if (r[1]) {
                            var a = this.$findClosingBracket(r[1], e);
                            if (!a) return null;
                            t = s.fromPoints(e, a), n || (t.end.column++, t.start.column--), t.cursor = t.end
                        } else {
                            a = this.$findOpeningBracket(r[2], e);
                            if (!a) return null;
                            t = s.fromPoints(a, e), n || (t.start.column++, t.end.column--), t.cursor = t.start
                        }
                        return t
                    }, this.$brackets = {
                        ")": "(",
                        "(": ")",
                        "]": "[",
                        "[": "]",
                        "{": "}",
                        "}": "{",
                        "<": ">",
                        ">": "<"
                    }, this.$findOpeningBracket = function (e, t, i) {
                        var s = this.$brackets[e], o = 1, r = new n(this, t.row, t.column), a = r.getCurrentToken();
                        if (a || (a = r.stepForward()), a) {
                            i || (i = new RegExp("(\\.?" + a.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end)\b/, "(?:start|begin|end)") + ")+"));
                            var l = t.column - r.getCurrentTokenColumn() - 2, c = a.value;
                            while (1) {
                                while (l >= 0) {
                                    var h = c.charAt(l);
                                    if (h == s) {
                                        if (o -= 1, 0 == o) return {
                                            row: r.getCurrentTokenRow(),
                                            column: l + r.getCurrentTokenColumn()
                                        }
                                    } else h == e && (o += 1);
                                    l -= 1
                                }
                                do {
                                    a = r.stepBackward()
                                } while (a && !i.test(a.type));
                                if (null == a) break;
                                c = a.value, l = c.length - 1
                            }
                            return null
                        }
                    }, this.$findClosingBracket = function (e, t, i) {
                        var s = this.$brackets[e], o = 1, r = new n(this, t.row, t.column), a = r.getCurrentToken();
                        if (a || (a = r.stepForward()), a) {
                            i || (i = new RegExp("(\\.?" + a.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:start|begin)\b/, "(?:start|begin|end)") + ")+"));
                            var l = t.column - r.getCurrentTokenColumn();
                            while (1) {
                                var c = a.value, h = c.length;
                                while (l < h) {
                                    var u = c.charAt(l);
                                    if (u == s) {
                                        if (o -= 1, 0 == o) return {
                                            row: r.getCurrentTokenRow(),
                                            column: l + r.getCurrentTokenColumn()
                                        }
                                    } else u == e && (o += 1);
                                    l += 1
                                }
                                do {
                                    a = r.stepForward()
                                } while (a && !i.test(a.type));
                                if (null == a) break;
                                l = 0
                            }
                            return null
                        }
                    }
                }

                t.BracketMatch = o
            })), deAceFine("ace/edit_session", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/bidihandler", "ace/config", "ace/lib/event_emitter", "ace/selection", "ace/mode/text", "ace/range", "ace/document", "ace/background_tokenizer", "ace/search_highlight", "ace/edit_session/folding", "ace/edit_session/bracket_match"], (function (e, i, n) {
                var s = e("./lib/oop"), o = e("./lib/lang"), r = e("./bidihandler").BidiHandler, a = e("./config"),
                    l = e("./lib/event_emitter").EventEmitter, c = e("./selection").Selection,
                    h = e("./mode/text").Mode, u = e("./range").Range, d = e("./document").Document,
                    g = e("./background_tokenizer").BackgroundTokenizer, f = e("./search_highlight").SearchHighlight,
                    p = function e(i, n) {
                        this.$breakpoints = [], this.$decorations = [], this.$frontMarkers = {}, this.$backMarkers = {}, this.$markerId = 1, this.$undoSelect = !0, this.$foldData = [], this.id = "session" + ++e.$uid, this.$foldData.toString = function () {
                            return this.join("\n")
                        }, this.on("changeFold", this.onChangeFold.bind(this)), this.$onChange = this.onChange.bind(this), "object" == Object(t["a"])(i) && i.getLine || (i = new d(i)), this.setDocument(i), this.selection = new c(this), this.$bidiHandler = new r(this), a.resetOptions(this), this.setMode(n), a._signal("session", this)
                    };
                p.$uid = 0, function () {
                    s.implement(this, l), this.setDocument = function (e) {
                        this.doc && this.doc.removeListener("change", this.$onChange), this.doc = e, e.on("change", this.$onChange), this.bgTokenizer && this.bgTokenizer.setDocument(this.getDocument()), this.resetCaches()
                    }, this.getDocument = function () {
                        return this.doc
                    }, this.$resetRowCache = function (e) {
                        if (!e) return this.$docRowCache = [], void (this.$screenRowCache = []);
                        var t = this.$docRowCache.length, i = this.$getRowCacheIndex(this.$docRowCache, e) + 1;
                        t > i && (this.$docRowCache.splice(i, t), this.$screenRowCache.splice(i, t))
                    }, this.$getRowCacheIndex = function (e, t) {
                        var i = 0, n = e.length - 1;
                        while (i <= n) {
                            var s = i + n >> 1, o = e[s];
                            if (t > o) i = s + 1; else {
                                if (!(t < o)) return s;
                                n = s - 1
                            }
                        }
                        return i - 1
                    }, this.resetCaches = function () {
                        this.$modified = !0, this.$wrapData = [], this.$rowLengthCache = [], this.$resetRowCache(0), this.bgTokenizer && this.bgTokenizer.start(0)
                    }, this.onChangeFold = function (e) {
                        var t = e.data;
                        this.$resetRowCache(t.start.row)
                    }, this.onChange = function (e) {
                        this.$modified = !0, this.$bidiHandler.onChange(e), this.$resetRowCache(e.start.row);
                        var t = this.$updateInternalDataOnChange(e);
                        !this.$fromUndo && this.$undoManager && (t && t.length && (this.$undoManager.add({
                            action: "removeFolds",
                            folds: t
                        }, this.mergeUndoDeltas), this.mergeUndoDeltas = !0), this.$undoManager.add(e, this.mergeUndoDeltas), this.mergeUndoDeltas = !0, this.$informUndoManager.schedule()), this.bgTokenizer && this.bgTokenizer.$updateOnChange(e), this._signal("change", e)
                    }, this.setValue = function (e) {
                        this.doc.setValue(e), this.selection.moveTo(0, 0), this.$resetRowCache(0), this.setUndoManager(this.$undoManager), this.getUndoManager().reset()
                    }, this.getValue = this.toString = function () {
                        return this.doc.getValue()
                    }, this.getSelection = function () {
                        return this.selection
                    }, this.getState = function (e) {
                        return this.bgTokenizer.getState(e)
                    }, this.getTokens = function (e) {
                        return this.bgTokenizer.getTokens(e)
                    }, this.getTokenAt = function (e, t) {
                        var i, n = this.bgTokenizer.getTokens(e), s = 0;
                        if (null == t) {
                            var o = n.length - 1;
                            s = this.getLine(e).length
                        } else for (o = 0; o < n.length; o++) if (s += n[o].value.length, s >= t) break;
                        return i = n[o], i ? (i.index = o, i.start = s - i.value.length, i) : null
                    }, this.setUndoManager = function (e) {
                        if (this.$undoManager = e, this.$informUndoManager && this.$informUndoManager.cancel(), e) {
                            var t = this;
                            e.addSession(this), this.$syncInformUndoManager = function () {
                                t.$informUndoManager.cancel(), t.mergeUndoDeltas = !1
                            }, this.$informUndoManager = o.delayedCall(this.$syncInformUndoManager)
                        } else this.$syncInformUndoManager = function () {
                        }
                    }, this.markUndoGroup = function () {
                        this.$syncInformUndoManager && this.$syncInformUndoManager()
                    }, this.$defaultUndoManager = {
                        undo: function () {
                        }, redo: function () {
                        }, hasUndo: function () {
                        }, hasRedo: function () {
                        }, reset: function () {
                        }, add: function () {
                        }, addSelection: function () {
                        }, startNewGroup: function () {
                        }, addSession: function () {
                        }
                    }, this.getUndoManager = function () {
                        return this.$undoManager || this.$defaultUndoManager
                    }, this.getTabString = function () {
                        return this.getUseSoftTabs() ? o.stringRepeat(" ", this.getTabSize()) : "\t"
                    }, this.setUseSoftTabs = function (e) {
                        this.setOption("useSoftTabs", e)
                    }, this.getUseSoftTabs = function () {
                        return this.$useSoftTabs && !this.$mode.$indentWithTabs
                    }, this.setTabSize = function (e) {
                        this.setOption("tabSize", e)
                    }, this.getTabSize = function () {
                        return this.$tabSize
                    }, this.isTabStop = function (e) {
                        return this.$useSoftTabs && e.column % this.$tabSize === 0
                    }, this.setNavigateWithinSoftTabs = function (e) {
                        this.setOption("navigateWithinSoftTabs", e)
                    }, this.getNavigateWithinSoftTabs = function () {
                        return this.$navigateWithinSoftTabs
                    }, this.$overwrite = !1, this.setOverwrite = function (e) {
                        this.setOption("overwrite", e)
                    }, this.getOverwrite = function () {
                        return this.$overwrite
                    }, this.toggleOverwrite = function () {
                        this.setOverwrite(!this.$overwrite)
                    }, this.addGutterDecoration = function (e, t) {
                        this.$decorations[e] || (this.$decorations[e] = ""), this.$decorations[e] += " " + t, this._signal("changeBreakpoint", {})
                    }, this.removeGutterDecoration = function (e, t) {
                        this.$decorations[e] = (this.$decorations[e] || "").replace(" " + t, ""), this._signal("changeBreakpoint", {})
                    }, this.getBreakpoints = function () {
                        return this.$breakpoints
                    }, this.setBreakpoints = function (e) {
                        this.$breakpoints = [];
                        for (var t = 0; t < e.length; t++) this.$breakpoints[e[t]] = "ace_breakpoint";
                        this._signal("changeBreakpoint", {})
                    }, this.clearBreakpoints = function () {
                        this.$breakpoints = [], this._signal("changeBreakpoint", {})
                    }, this.setBreakpoint = function (e, t) {
                        void 0 === t && (t = "ace_breakpoint"), t ? this.$breakpoints[e] = t : delete this.$breakpoints[e], this._signal("changeBreakpoint", {})
                    }, this.clearBreakpoint = function (e) {
                        delete this.$breakpoints[e], this._signal("changeBreakpoint", {})
                    }, this.addMarker = function (e, t, i, n) {
                        var s = this.$markerId++, o = {
                            range: e,
                            type: i || "line",
                            renderer: "function" == typeof i ? i : null,
                            clazz: t,
                            inFront: !!n,
                            id: s
                        };
                        return n ? (this.$frontMarkers[s] = o, this._signal("changeFrontMarker")) : (this.$backMarkers[s] = o, this._signal("changeBackMarker")), s
                    }, this.addDynamicMarker = function (e, t) {
                        if (e.update) {
                            var i = this.$markerId++;
                            return e.id = i, e.inFront = !!t, t ? (this.$frontMarkers[i] = e, this._signal("changeFrontMarker")) : (this.$backMarkers[i] = e, this._signal("changeBackMarker")), e
                        }
                    }, this.removeMarker = function (e) {
                        var t = this.$frontMarkers[e] || this.$backMarkers[e];
                        if (t) {
                            var i = t.inFront ? this.$frontMarkers : this.$backMarkers;
                            delete i[e], this._signal(t.inFront ? "changeFrontMarker" : "changeBackMarker")
                        }
                    }, this.getMarkers = function (e) {
                        return e ? this.$frontMarkers : this.$backMarkers
                    }, this.highlight = function (e) {
                        if (!this.$searchHighlight) {
                            var t = new f(null, "ace_selected-word", "text");
                            this.$searchHighlight = this.addDynamicMarker(t)
                        }
                        this.$searchHighlight.setRegexp(e)
                    }, this.highlightLines = function (e, t, i, n) {
                        "number" != typeof t && (i = t, t = e), i || (i = "ace_step");
                        var s = new u(e, 0, t, 1 / 0);
                        return s.id = this.addMarker(s, i, "fullLine", n), s
                    }, this.setAnnotations = function (e) {
                        this.$annotations = e, this._signal("changeAnnotation", {})
                    }, this.getAnnotations = function () {
                        return this.$annotations || []
                    }, this.clearAnnotations = function () {
                        this.setAnnotations([])
                    }, this.$detectNewLine = function (e) {
                        var t = e.match(/^.*?(\r?\n)/m);
                        this.$autoNewLine = t ? t[1] : "\n"
                    }, this.getWordRange = function (e, t) {
                        var i = this.getLine(e), n = !1;
                        if (t > 0 && (n = !!i.charAt(t - 1).match(this.tokenRe)), n || (n = !!i.charAt(t).match(this.tokenRe)), n) var s = this.tokenRe; else if (/^\s+$/.test(i.slice(t - 1, t + 1))) s = /\s/; else s = this.nonTokenRe;
                        var o = t;
                        if (o > 0) {
                            do {
                                o--
                            } while (o >= 0 && i.charAt(o).match(s));
                            o++
                        }
                        var r = t;
                        while (r < i.length && i.charAt(r).match(s)) r++;
                        return new u(e, o, e, r)
                    }, this.getAWordRange = function (e, t) {
                        var i = this.getWordRange(e, t), n = this.getLine(i.end.row);
                        while (n.charAt(i.end.column).match(/[ \t]/)) i.end.column += 1;
                        return i
                    }, this.setNewLineMode = function (e) {
                        this.doc.setNewLineMode(e)
                    }, this.getNewLineMode = function () {
                        return this.doc.getNewLineMode()
                    }, this.setUseWorker = function (e) {
                        this.setOption("useWorker", e)
                    }, this.getUseWorker = function () {
                        return this.$useWorker
                    }, this.onReloadTokenizer = function (e) {
                        var t = e.data;
                        this.bgTokenizer.start(t.first), this._signal("tokenizerUpdate", e)
                    }, this.$modes = a.$modes, this.$mode = null, this.$modeId = null, this.setMode = function (e, i) {
                        if (e && "object" === Object(t["a"])(e)) {
                            if (e.getTokenizer) return this.$onChangeMode(e);
                            var n = e, s = n.path
                        } else s = e || "ace/mode/text";
                        if (this.$modes["ace/mode/text"] || (this.$modes["ace/mode/text"] = new h), this.$modes[s] && !n) return this.$onChangeMode(this.$modes[s]), void (i && i());
                        this.$modeId = s, a.loadModule(["mode", s], function (e) {
                            if (this.$modeId !== s) return i && i();
                            this.$modes[s] && !n ? this.$onChangeMode(this.$modes[s]) : e && e.Mode && (e = new e.Mode(n), n || (this.$modes[s] = e, e.$id = s), this.$onChangeMode(e)), i && i()
                        }.bind(this)), this.$mode || this.$onChangeMode(this.$modes["ace/mode/text"], !0)
                    }, this.$onChangeMode = function (e, t) {
                        if (t || (this.$modeId = e.$id), this.$mode !== e) {
                            this.$mode = e, this.$stopWorker(), this.$useWorker && this.$startWorker();
                            var i = e.getTokenizer();
                            if (void 0 !== i.addEventListener) {
                                var n = this.onReloadTokenizer.bind(this);
                                i.addEventListener("update", n)
                            }
                            if (this.bgTokenizer) this.bgTokenizer.setTokenizer(i); else {
                                this.bgTokenizer = new g(i);
                                var s = this;
                                this.bgTokenizer.addEventListener("update", (function (e) {
                                    s._signal("tokenizerUpdate", e)
                                }))
                            }
                            this.bgTokenizer.setDocument(this.getDocument()), this.tokenRe = e.tokenRe, this.nonTokenRe = e.nonTokenRe, t || (e.attachToSession && e.attachToSession(this), this.$options.wrapMethod.set.call(this, this.$wrapMethod), this.$setFolding(e.foldingRules), this.bgTokenizer.start(0), this._emit("changeMode"))
                        }
                    }, this.$stopWorker = function () {
                        this.$worker && (this.$worker.terminate(), this.$worker = null)
                    }, this.$startWorker = function () {
                        try {
                            this.$worker = this.$mode.createWorker(this)
                        } catch (e) {
                            a.warn("Could not load worker", e), this.$worker = null
                        }
                    }, this.getMode = function () {
                        return this.$mode
                    }, this.$scrollTop = 0, this.setScrollTop = function (e) {
                        this.$scrollTop === e || isNaN(e) || (this.$scrollTop = e, this._signal("changeScrollTop", e))
                    }, this.getScrollTop = function () {
                        return this.$scrollTop
                    }, this.$scrollLeft = 0, this.setScrollLeft = function (e) {
                        this.$scrollLeft === e || isNaN(e) || (this.$scrollLeft = e, this._signal("changeScrollLeft", e))
                    }, this.getScrollLeft = function () {
                        return this.$scrollLeft
                    }, this.getScreenWidth = function () {
                        return this.$computeWidth(), this.lineWidgets ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth) : this.screenWidth
                    }, this.getLineWidgetMaxWidth = function () {
                        if (null != this.lineWidgetsWidth) return this.lineWidgetsWidth;
                        var e = 0;
                        return this.lineWidgets.forEach((function (t) {
                            t && t.screenWidth > e && (e = t.screenWidth)
                        })), this.lineWidgetWidth = e
                    }, this.$computeWidth = function (e) {
                        if (this.$modified || e) {
                            if (this.$modified = !1, this.$useWrapMode) return this.screenWidth = this.$wrapLimit;
                            for (var t = this.doc.getAllLines(), i = this.$rowLengthCache, n = 0, s = 0, o = this.$foldData[s], r = o ? o.start.row : 1 / 0, a = t.length, l = 0; l < a; l++) {
                                if (l > r) {
                                    if (l = o.end.row + 1, l >= a) break;
                                    o = this.$foldData[s++], r = o ? o.start.row : 1 / 0
                                }
                                null == i[l] && (i[l] = this.$getStringScreenWidth(t[l])[0]), i[l] > n && (n = i[l])
                            }
                            this.screenWidth = n
                        }
                    }, this.getLine = function (e) {
                        return this.doc.getLine(e)
                    }, this.getLines = function (e, t) {
                        return this.doc.getLines(e, t)
                    }, this.getLength = function () {
                        return this.doc.getLength()
                    }, this.getTextRange = function (e) {
                        return this.doc.getTextRange(e || this.selection.getRange())
                    }, this.insert = function (e, t) {
                        return this.doc.insert(e, t)
                    }, this.remove = function (e) {
                        return this.doc.remove(e)
                    }, this.removeFullLines = function (e, t) {
                        return this.doc.removeFullLines(e, t)
                    }, this.undoChanges = function (e, t) {
                        if (e.length) {
                            this.$fromUndo = !0;
                            for (var i = e.length - 1; -1 != i; i--) {
                                var n = e[i];
                                "insert" == n.action || "remove" == n.action ? this.doc.revertDelta(n) : n.folds && this.addFolds(n.folds)
                            }
                            !t && this.$undoSelect && (e.selectionBefore ? this.selection.fromJSON(e.selectionBefore) : this.selection.setRange(this.$getUndoSelection(e, !0))), this.$fromUndo = !1
                        }
                    }, this.redoChanges = function (e, t) {
                        if (e.length) {
                            this.$fromUndo = !0;
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                "insert" != n.action && "remove" != n.action || this.doc.applyDelta(n)
                            }
                            !t && this.$undoSelect && (e.selectionAfter ? this.selection.fromJSON(e.selectionAfter) : this.selection.setRange(this.$getUndoSelection(e, !1))), this.$fromUndo = !1
                        }
                    }, this.setUndoSelect = function (e) {
                        this.$undoSelect = e
                    }, this.$getUndoSelection = function (e, t) {
                        function i(e) {
                            return t ? "insert" !== e.action : "insert" === e.action
                        }

                        for (var n, s, o = 0; o < e.length; o++) {
                            var r = e[o];
                            r.start && (n ? i(r) ? (s = r.start, -1 == n.compare(s.row, s.column) && n.setStart(s), s = r.end, 1 == n.compare(s.row, s.column) && n.setEnd(s), !0) : (s = r.start, -1 == n.compare(s.row, s.column) && (n = u.fromPoints(r.start, r.start)), !1) : i(r) ? (n = u.fromPoints(r.start, r.end), !0) : (n = u.fromPoints(r.start, r.start), !1))
                        }
                        return n
                    }, this.replace = function (e, t) {
                        return this.doc.replace(e, t)
                    }, this.moveText = function (e, t, i) {
                        var n = this.getTextRange(e), s = this.getFoldsInRange(e), o = u.fromPoints(t, t);
                        if (!i) {
                            this.remove(e);
                            var r = e.start.row - e.end.row, a = r ? -e.end.column : e.start.column - e.end.column;
                            a && (o.start.row == e.end.row && o.start.column > e.end.column && (o.start.column += a), o.end.row == e.end.row && o.end.column > e.end.column && (o.end.column += a)), r && o.start.row >= e.end.row && (o.start.row += r, o.end.row += r)
                        }
                        if (o.end = this.insert(o.start, n), s.length) {
                            var l = e.start, c = o.start;
                            r = c.row - l.row, a = c.column - l.column;
                            this.addFolds(s.map((function (e) {
                                return e = e.clone(), e.start.row == l.row && (e.start.column += a), e.end.row == l.row && (e.end.column += a), e.start.row += r, e.end.row += r, e
                            })))
                        }
                        return o
                    }, this.indentRows = function (e, t, i) {
                        i = i.replace(/\t/g, this.getTabString());
                        for (var n = e; n <= t; n++) this.doc.insertInLine({row: n, column: 0}, i)
                    }, this.outdentRows = function (e) {
                        for (var t = e.collapseRows(), i = new u(0, 0, 0, 0), n = this.getTabSize(), s = t.start.row; s <= t.end.row; ++s) {
                            var o = this.getLine(s);
                            i.start.row = s, i.end.row = s;
                            for (var r = 0; r < n; ++r) if (" " != o.charAt(r)) break;
                            r < n && "\t" == o.charAt(r) ? (i.start.column = r, i.end.column = r + 1) : (i.start.column = 0, i.end.column = r), this.remove(i)
                        }
                    }, this.$moveLines = function (e, t, i) {
                        if (e = this.getRowFoldStart(e), t = this.getRowFoldEnd(t), i < 0) {
                            var n = this.getRowFoldStart(e + i);
                            if (n < 0) return 0;
                            var s = n - e
                        } else if (i > 0) {
                            n = this.getRowFoldEnd(t + i);
                            if (n > this.doc.getLength() - 1) return 0;
                            s = n - t
                        } else {
                            e = this.$clipRowToDocument(e), t = this.$clipRowToDocument(t);
                            s = t - e + 1
                        }
                        var o = new u(e, 0, t, Number.MAX_VALUE), r = this.getFoldsInRange(o).map((function (e) {
                            return e = e.clone(), e.start.row += s, e.end.row += s, e
                        })), a = 0 == i ? this.doc.getLines(e, t) : this.doc.removeFullLines(e, t);
                        return this.doc.insertFullLines(e + s, a), r.length && this.addFolds(r), s
                    }, this.moveLinesUp = function (e, t) {
                        return this.$moveLines(e, t, -1)
                    }, this.moveLinesDown = function (e, t) {
                        return this.$moveLines(e, t, 1)
                    }, this.duplicateLines = function (e, t) {
                        return this.$moveLines(e, t, 0)
                    }, this.$clipRowToDocument = function (e) {
                        return Math.max(0, Math.min(e, this.doc.getLength() - 1))
                    }, this.$clipColumnToRow = function (e, t) {
                        return t < 0 ? 0 : Math.min(this.doc.getLine(e).length, t)
                    }, this.$clipPositionToDocument = function (e, t) {
                        if (t = Math.max(0, t), e < 0) e = 0, t = 0; else {
                            var i = this.doc.getLength();
                            e >= i ? (e = i - 1, t = this.doc.getLine(i - 1).length) : t = Math.min(this.doc.getLine(e).length, t)
                        }
                        return {row: e, column: t}
                    }, this.$clipRangeToDocument = function (e) {
                        e.start.row < 0 ? (e.start.row = 0, e.start.column = 0) : e.start.column = this.$clipColumnToRow(e.start.row, e.start.column);
                        var t = this.doc.getLength() - 1;
                        return e.end.row > t ? (e.end.row = t, e.end.column = this.doc.getLine(t).length) : e.end.column = this.$clipColumnToRow(e.end.row, e.end.column), e
                    }, this.$wrapLimit = 80, this.$useWrapMode = !1, this.$wrapLimitRange = {
                        min: null,
                        max: null
                    }, this.setUseWrapMode = function (e) {
                        if (e != this.$useWrapMode) {
                            if (this.$useWrapMode = e, this.$modified = !0, this.$resetRowCache(0), e) {
                                var t = this.getLength();
                                this.$wrapData = Array(t), this.$updateWrapData(0, t - 1)
                            }
                            this._signal("changeWrapMode")
                        }
                    }, this.getUseWrapMode = function () {
                        return this.$useWrapMode
                    }, this.setWrapLimitRange = function (e, t) {
                        this.$wrapLimitRange.min === e && this.$wrapLimitRange.max === t || (this.$wrapLimitRange = {
                            min: e,
                            max: t
                        }, this.$modified = !0, this.$bidiHandler.markAsDirty(), this.$useWrapMode && this._signal("changeWrapMode"))
                    }, this.adjustWrapLimit = function (e, t) {
                        var i = this.$wrapLimitRange;
                        i.max < 0 && (i = {min: t, max: t});
                        var n = this.$constrainWrapLimit(e, i.min, i.max);
                        return n != this.$wrapLimit && n > 1 && (this.$wrapLimit = n, this.$modified = !0, this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._signal("changeWrapLimit")), !0)
                    },this.$constrainWrapLimit = function (e, t, i) {
                        return t && (e = Math.max(t, e)), i && (e = Math.min(i, e)), e
                    },this.getWrapLimit = function () {
                        return this.$wrapLimit
                    },this.setWrapLimit = function (e) {
                        this.setWrapLimitRange(e, e)
                    },this.getWrapLimitRange = function () {
                        return {min: this.$wrapLimitRange.min, max: this.$wrapLimitRange.max}
                    },this.$updateInternalDataOnChange = function (e) {
                        var t = this.$useWrapMode, i = e.action, n = e.start, s = e.end, o = n.row, r = s.row,
                            a = r - o, l = null;
                        if (this.$updating = !0, 0 != a) if ("remove" === i) {
                            this[t ? "$wrapData" : "$rowLengthCache"].splice(o, a);
                            var c = this.$foldData;
                            l = this.getFoldsInRange(e), this.removeFolds(l);
                            var h = this.getFoldLine(s.row), u = 0;
                            if (h) {
                                h.addRemoveChars(s.row, s.column, n.column - s.column), h.shiftRow(-a);
                                var d = this.getFoldLine(o);
                                d && d !== h && (d.merge(h), h = d), u = c.indexOf(h) + 1
                            }
                            for (u; u < c.length; u++) {
                                h = c[u];
                                h.start.row >= s.row && h.shiftRow(-a)
                            }
                            r = o
                        } else {
                            var g = Array(a);
                            g.unshift(o, 0);
                            var f = t ? this.$wrapData : this.$rowLengthCache;
                            f.splice.apply(f, g);
                            c = this.$foldData, h = this.getFoldLine(o), u = 0;
                            if (h) {
                                var p = h.range.compareInside(n.row, n.column);
                                0 == p ? (h = h.split(n.row, n.column), h && (h.shiftRow(a), h.addRemoveChars(r, 0, s.column - n.column))) : -1 == p && (h.addRemoveChars(o, 0, s.column - n.column), h.shiftRow(a)), u = c.indexOf(h) + 1
                            }
                            for (u; u < c.length; u++) {
                                h = c[u];
                                h.start.row >= o && h.shiftRow(a)
                            }
                        } else {
                            a = Math.abs(e.start.column - e.end.column), "remove" === i && (l = this.getFoldsInRange(e), this.removeFolds(l), a = -a);
                            h = this.getFoldLine(o);
                            h && h.addRemoveChars(o, n.column, a)
                        }
                        return t && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"), this.$updating = !1, t ? this.$updateWrapData(o, r) : this.$updateRowLengthCache(o, r), l
                    },this.$updateRowLengthCache = function (e, t, i) {
                        this.$rowLengthCache[e] = null, this.$rowLengthCache[t] = null
                    },this.$updateWrapData = function (e, t) {
                        var i, s, o = this.doc.getAllLines(), a = this.getTabSize(), l = this.$wrapData,
                            c = this.$wrapLimit, h = e;
                        t = Math.min(t, o.length - 1);
                        while (h <= t) s = this.getFoldLine(h, s), s ? (i = [], s.walk(function (e, t, s, a) {
                            var l;
                            if (null != e) {
                                l = this.$getDisplayTokens(e, i.length), l[0] = n;
                                for (var c = 1; c < l.length; c++) l[c] = r
                            } else l = this.$getDisplayTokens(o[t].substring(a, s), i.length);
                            i = i.concat(l)
                        }.bind(this), s.end.row, o[s.end.row].length + 1), l[s.start.row] = this.$computeWrapSplits(i, c, a), h = s.end.row + 1) : (i = this.$getDisplayTokens(o[h]), l[h] = this.$computeWrapSplits(i, c, a), h++)
                    };
                    var e = 1, i = 2, n = 3, r = 4, c = 9, d = 10, p = 11, m = 12;

                    function v(e) {
                        return !(e < 4352) && (e >= 4352 && e <= 4447 || e >= 4515 && e <= 4519 || e >= 4602 && e <= 4607 || e >= 9001 && e <= 9002 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12283 || e >= 12288 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12589 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12730 || e >= 12736 && e <= 12771 || e >= 12784 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 13054 || e >= 13056 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 55216 && e <= 55238 || e >= 55243 && e <= 55291 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510)
                    }

                    this.$computeWrapSplits = function (e, t, s) {
                        if (0 == e.length) return [];
                        var o = [], a = e.length, l = 0, h = 0, u = this.$wrapAsCode, g = this.$indentedSoftWrap,
                            f = t <= Math.max(2 * s, 8) || !1 === g ? 0 : Math.floor(t / 2);

                        function v() {
                            var t = 0;
                            if (0 === f) return t;
                            if (g) for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                if (n == d) t += 1; else {
                                    if (n != p) {
                                        if (n == m) continue;
                                        break
                                    }
                                    t += s
                                }
                            }
                            return u && !1 !== g && (t += s), Math.min(t, f)
                        }

                        function w(t) {
                            for (var i = t - l, n = l; n < t; n++) {
                                var s = e[n];
                                12 !== s && 2 !== s || (i -= 1)
                            }
                            o.length || (b = v(), o.indent = b), h += i, o.push(h), l = t
                        }

                        var b = 0;
                        while (a - l > t - b) {
                            var y = l + t - b;
                            if (e[y - 1] >= d && e[y] >= d) w(y); else if (e[y] != n && e[y] != r) {
                                var $ = Math.max(y - (t - (t >> 2)), l - 1);
                                while (y > $ && e[y] < n) y--;
                                if (u) {
                                    while (y > $ && e[y] < n) y--;
                                    while (y > $ && e[y] == c) y--
                                } else while (y > $ && e[y] < d) y--;
                                y > $ ? w(++y) : (y = l + t, e[y] == i && y--, w(y - b))
                            } else {
                                for (y; y != l - 1; y--) if (e[y] == n) break;
                                if (y > l) {
                                    w(y);
                                    continue
                                }
                                for (y = l + t, y; y < e.length; y++) if (e[y] != r) break;
                                if (y == e.length) break;
                                w(y)
                            }
                        }
                        return o
                    }, this.$getDisplayTokens = function (t, n) {
                        var s, o = [];
                        n = n || 0;
                        for (var r = 0; r < t.length; r++) {
                            var a = t.charCodeAt(r);
                            if (9 == a) {
                                s = this.getScreenTabSize(o.length + n), o.push(p);
                                for (var l = 1; l < s; l++) o.push(m)
                            } else 32 == a ? o.push(d) : a > 39 && a < 48 || a > 57 && a < 64 ? o.push(c) : a >= 4352 && v(a) ? o.push(e, i) : o.push(e)
                        }
                        return o
                    }, this.$getStringScreenWidth = function (e, t, i) {
                        if (0 == t) return [0, 0];
                        var n, s;
                        for (null == t && (t = 1 / 0), i = i || 0, s = 0; s < e.length; s++) if (n = e.charCodeAt(s), 9 == n ? i += this.getScreenTabSize(i) : n >= 4352 && v(n) ? i += 2 : i += 1, i > t) break;
                        return [i, s]
                    }, this.lineWidgets = null, this.getRowLength = function (e) {
                        if (this.lineWidgets) var t = this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0; else t = 0;
                        return this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 + t : 1 + t
                    }, this.getRowLineCount = function (e) {
                        return this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 : 1
                    }, this.getRowWrapIndent = function (e) {
                        if (this.$useWrapMode) {
                            var t = this.screenToDocumentPosition(e, Number.MAX_VALUE), i = this.$wrapData[t.row];
                            return i.length && i[0] < t.column ? i.indent : 0
                        }
                        return 0
                    }, this.getScreenLastRowColumn = function (e) {
                        var t = this.screenToDocumentPosition(e, Number.MAX_VALUE);
                        return this.documentToScreenColumn(t.row, t.column)
                    }, this.getDocumentLastRowColumn = function (e, t) {
                        var i = this.documentToScreenRow(e, t);
                        return this.getScreenLastRowColumn(i)
                    }, this.getDocumentLastRowColumnPosition = function (e, t) {
                        var i = this.documentToScreenRow(e, t);
                        return this.screenToDocumentPosition(i, Number.MAX_VALUE / 10)
                    }, this.getRowSplitData = function (e) {
                        return this.$useWrapMode ? this.$wrapData[e] : void 0
                    }, this.getScreenTabSize = function (e) {
                        return this.$tabSize - (e % this.$tabSize | 0)
                    }, this.screenToDocumentRow = function (e, t) {
                        return this.screenToDocumentPosition(e, t).row
                    }, this.screenToDocumentColumn = function (e, t) {
                        return this.screenToDocumentPosition(e, t).column
                    }, this.screenToDocumentPosition = function (e, t, i) {
                        if (e < 0) return {row: 0, column: 0};
                        var n, s, o = 0, r = 0, a = 0, l = 0, c = this.$screenRowCache,
                            h = this.$getRowCacheIndex(c, e), u = c.length;
                        if (u && h >= 0) {
                            a = c[h], o = this.$docRowCache[h];
                            var d = e > c[u - 1]
                        } else d = !u;
                        var g = this.getLength() - 1, f = this.getNextFoldLine(o), p = f ? f.start.row : 1 / 0;
                        while (a <= e) {
                            if (l = this.getRowLength(o), a + l > e || o >= g) break;
                            a += l, o++, o > p && (o = f.end.row + 1, f = this.getNextFoldLine(o, f), p = f ? f.start.row : 1 / 0), d && (this.$docRowCache.push(o), this.$screenRowCache.push(a))
                        }
                        if (f && f.start.row <= o) n = this.getFoldDisplayLine(f), o = f.start.row; else {
                            if (a + l <= e || o > g) return {row: g, column: this.getLine(g).length};
                            n = this.getLine(o), f = null
                        }
                        var m = 0, v = Math.floor(e - a);
                        if (this.$useWrapMode) {
                            var w = this.$wrapData[o];
                            w && (s = w[v], v > 0 && w.length && (m = w.indent, r = w[v - 1] || w[w.length - 1], n = n.substring(r)))
                        }
                        return void 0 !== i && this.$bidiHandler.isBidiRow(a + v, o, v) && (t = this.$bidiHandler.offsetToCol(i)), r += this.$getStringScreenWidth(n, t - m)[1], this.$useWrapMode && r >= s && (r = s - 1), f ? f.idxToPosition(r) : {
                            row: o,
                            column: r
                        }
                    }, this.documentToScreenPosition = function (e, t) {
                        if ("undefined" === typeof t) var i = this.$clipPositionToDocument(e.row, e.column); else i = this.$clipPositionToDocument(e, t);
                        e = i.row, t = i.column;
                        var n = 0, s = null, o = null;
                        o = this.getFoldAt(e, t, 1), o && (e = o.start.row, t = o.start.column);
                        var r, a = 0, l = this.$docRowCache, c = this.$getRowCacheIndex(l, e), h = l.length;
                        if (h && c >= 0) {
                            a = l[c], n = this.$screenRowCache[c];
                            var u = e > l[h - 1]
                        } else u = !h;
                        var d = this.getNextFoldLine(a), g = d ? d.start.row : 1 / 0;
                        while (a < e) {
                            if (a >= g) {
                                if (r = d.end.row + 1, r > e) break;
                                d = this.getNextFoldLine(r, d), g = d ? d.start.row : 1 / 0
                            } else r = a + 1;
                            n += this.getRowLength(a), a = r, u && (this.$docRowCache.push(a), this.$screenRowCache.push(n))
                        }
                        var f = "";
                        d && a >= g ? (f = this.getFoldDisplayLine(d, e, t), s = d.start.row) : (f = this.getLine(e).substring(0, t), s = e);
                        var p = 0;
                        if (this.$useWrapMode) {
                            var m = this.$wrapData[s];
                            if (m) {
                                var v = 0;
                                while (f.length >= m[v]) n++, v++;
                                f = f.substring(m[v - 1] || 0, f.length), p = v > 0 ? m.indent : 0
                            }
                        }
                        return {row: n, column: p + this.$getStringScreenWidth(f)[0]}
                    }, this.documentToScreenColumn = function (e, t) {
                        return this.documentToScreenPosition(e, t).column
                    }, this.documentToScreenRow = function (e, t) {
                        return this.documentToScreenPosition(e, t).row
                    }, this.getScreenLength = function () {
                        var e = 0, t = null;
                        if (this.$useWrapMode) {
                            var i = this.$wrapData.length, n = 0,
                                s = (a = 0, t = this.$foldData[a++], t ? t.start.row : 1 / 0);
                            while (n < i) {
                                var o = this.$wrapData[n];
                                e += o ? o.length + 1 : 1, n++, n > s && (n = t.end.row + 1, t = this.$foldData[a++], s = t ? t.start.row : 1 / 0)
                            }
                        } else {
                            e = this.getLength();
                            for (var r = this.$foldData, a = 0; a < r.length; a++) t = r[a], e -= t.end.row - t.start.row
                        }
                        return this.lineWidgets && (e += this.$getWidgetScreenLength()), e
                    }, this.$setFontMetrics = function (e) {
                        this.$enableVarChar && (this.$getStringScreenWidth = function (t, i, n) {
                            if (0 === i) return [0, 0];
                            var s, o;
                            for (i || (i = 1 / 0), n = n || 0, o = 0; o < t.length; o++) if (s = t.charAt(o), n += "\t" === s ? this.getScreenTabSize(n) : e.getCharacterWidth(s), n > i) break;
                            return [n, o]
                        })
                    }, this.destroy = function () {
                        this.bgTokenizer && (this.bgTokenizer.setDocument(null), this.bgTokenizer = null), this.$stopWorker()
                    }, this.isFullWidth = v
                }.call(p.prototype), e("./edit_session/folding").Folding.call(p.prototype), e("./edit_session/bracket_match").BracketMatch.call(p.prototype), a.defineOptions(p.prototype, "session", {
                    wrap: {
                        set: function (e) {
                            if (e && "off" != e ? "free" == e ? e = !0 : "printMargin" == e ? e = -1 : "string" == typeof e && (e = parseInt(e, 10) || !1) : e = !1, this.$wrap != e) if (this.$wrap = e, e) {
                                var t = "number" == typeof e ? e : null;
                                this.setWrapLimitRange(t, t), this.setUseWrapMode(!0)
                            } else this.setUseWrapMode(!1)
                        }, get: function () {
                            return this.getUseWrapMode() ? -1 == this.$wrap ? "printMargin" : this.getWrapLimitRange().min ? this.$wrap : "free" : "off"
                        }, handlesSet: !0
                    }, wrapMethod: {
                        set: function (e) {
                            e = "auto" == e ? "text" != this.$mode.type : "text" != e, e != this.$wrapAsCode && (this.$wrapAsCode = e, this.$useWrapMode && (this.$useWrapMode = !1, this.setUseWrapMode(!0)))
                        }, initialValue: "auto"
                    }, indentedSoftWrap: {
                        set: function () {
                            this.$useWrapMode && (this.$useWrapMode = !1, this.setUseWrapMode(!0))
                        }, initialValue: !0
                    }, firstLineNumber: {
                        set: function () {
                            this._signal("changeBreakpoint")
                        }, initialValue: 1
                    }, useWorker: {
                        set: function (e) {
                            this.$useWorker = e, this.$stopWorker(), e && this.$startWorker()
                        }, initialValue: !0
                    }, useSoftTabs: {initialValue: !0}, tabSize: {
                        set: function (e) {
                            e = parseInt(e), e > 0 && this.$tabSize !== e && (this.$modified = !0, this.$rowLengthCache = [], this.$tabSize = e, this._signal("changeTabSize"))
                        }, initialValue: 4, handlesSet: !0
                    }, navigateWithinSoftTabs: {initialValue: !1}, foldStyle: {
                        set: function (e) {
                            this.setFoldStyle(e)
                        }, handlesSet: !0
                    }, overwrite: {
                        set: function (e) {
                            this._signal("changeOverwrite")
                        }, initialValue: !1
                    }, newLineMode: {
                        set: function (e) {
                            this.doc.setNewLineMode(e)
                        }, get: function () {
                            return this.doc.getNewLineMode()
                        }, handlesSet: !0
                    }, mode: {
                        set: function (e) {
                            this.setMode(e)
                        }, get: function () {
                            return this.$modeId
                        }, handlesSet: !0
                    }
                }), i.EditSession = p
            })), deAceFine("ace/search", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], (function (e, t, i) {
                var n = e("./lib/lang"), s = e("./lib/oop"), o = e("./range").Range, r = function () {
                    this.$options = {}
                };

                function a(e, t) {
                    function i(e) {
                        return /\w/.test(e) || t.regExp ? "\\b" : ""
                    }

                    return i(e[0]) + e + i(e[e.length - 1])
                }

                (function () {
                    this.set = function (e) {
                        return s.mixin(this.$options, e), this
                    }, this.getOptions = function () {
                        return n.copyObject(this.$options)
                    }, this.setOptions = function (e) {
                        this.$options = e
                    }, this.find = function (e) {
                        var t = this.$options, i = this.$matchIterator(e, t);
                        if (!i) return !1;
                        var n = null;
                        return i.forEach((function (e, i, s, r) {
                            return n = new o(e, i, s, r), !(i == r && t.start && t.start.start && 0 != t.skipCurrent && n.isEqual(t.start)) || (n = null, !1)
                        })), n
                    }, this.findAll = function (e) {
                        var t = this.$options;
                        if (!t.needle) return [];
                        this.$assembleRegExp(t);
                        var i = t.range, s = i ? e.getLines(i.start.row, i.end.row) : e.doc.getAllLines(), r = [],
                            a = t.re;
                        if (t.$isMultiLine) {
                            var l, c = a.length, h = s.length - c;
                            e:for (var u = a.offset || 0; u <= h; u++) {
                                for (var d = 0; d < c; d++) if (-1 == s[u + d].search(a[d])) continue e;
                                var g = s[u], f = s[u + c - 1], p = g.length - g.match(a[0])[0].length,
                                    m = f.match(a[c - 1])[0].length;
                                l && l.end.row === u && l.end.column > p || (r.push(l = new o(u, p, u + c - 1, m)), c > 2 && (u = u + c - 2))
                            }
                        } else for (var v = 0; v < s.length; v++) {
                            var w = n.getMatchOffsets(s[v], a);
                            for (d = 0; d < w.length; d++) {
                                var b = w[d];
                                r.push(new o(v, b.offset, v, b.offset + b.length))
                            }
                        }
                        if (i) {
                            var y = i.start.column, $ = i.start.column;
                            v = 0, d = r.length - 1;
                            while (v < d && r[v].start.column < y && r[v].start.row == i.start.row) v++;
                            while (v < d && r[d].end.column > $ && r[d].end.row == i.end.row) d--;
                            for (r = r.slice(v, d + 1), v = 0, d = r.length; v < d; v++) r[v].start.row += i.start.row, r[v].end.row += i.start.row
                        }
                        return r
                    }, this.replace = function (e, t) {
                        var i = this.$options, n = this.$assembleRegExp(i);
                        if (i.$isMultiLine) return t;
                        if (n) {
                            var s = n.exec(e);
                            if (!s || s[0].length != e.length) return null;
                            if (t = e.replace(n, t), i.preserveCase) {
                                t = t.split("");
                                for (var o = Math.min(e.length, e.length); o--;) {
                                    var r = e[o];
                                    r && r.toLowerCase() != r ? t[o] = t[o].toUpperCase() : t[o] = t[o].toLowerCase()
                                }
                                t = t.join("")
                            }
                            return t
                        }
                    }, this.$assembleRegExp = function (e, t) {
                        if (e.needle instanceof RegExp) return e.re = e.needle;
                        var i = e.needle;
                        if (!e.needle) return e.re = !1;
                        e.regExp || (i = n.escapeRegExp(i)), e.wholeWord && (i = a(i, e));
                        var s = e.caseSensitive ? "gm" : "gmi";
                        if (e.$isMultiLine = !t && /[\n\r]/.test(i), e.$isMultiLine) return e.re = this.$assembleMultilineRegExp(i, s);
                        try {
                            var o = new RegExp(i, s)
                        } catch (r) {
                            o = !1
                        }
                        return e.re = o
                    }, this.$assembleMultilineRegExp = function (e, t) {
                        for (var i = e.replace(/\r\n|\r|\n/g, "$\n^").split("\n"), n = [], s = 0; s < i.length; s++) try {
                            n.push(new RegExp(i[s], t))
                        } catch (o) {
                            return !1
                        }
                        return n
                    }, this.$matchIterator = function (e, t) {
                        var i = this.$assembleRegExp(t);
                        if (!i) return !1;
                        var n = 1 == t.backwards, s = 0 != t.skipCurrent, o = t.range, r = t.start;
                        r || (r = o ? o[n ? "end" : "start"] : e.selection.getRange()), r.start && (r = r[s != n ? "end" : "start"]);
                        var a = o ? o.start.row : 0, l = o ? o.end.row : e.getLength() - 1;
                        if (n) var c = function (e) {
                            var i = r.row;
                            if (!u(i, r.column, e)) {
                                for (i--; i >= a; i--) if (u(i, Number.MAX_VALUE, e)) return;
                                if (0 != t.wrap) for (i = l, a = r.row; i >= a; i--) if (u(i, Number.MAX_VALUE, e)) return
                            }
                        }; else c = function (e) {
                            var i = r.row;
                            if (!u(i, r.column, e)) {
                                for (i += 1; i <= l; i++) if (u(i, 0, e)) return;
                                if (0 != t.wrap) for (i = a, l = r.row; i <= l; i++) if (u(i, 0, e)) return
                            }
                        };
                        if (t.$isMultiLine) var h = i.length, u = function (t, s, o) {
                            var r = n ? t - h + 1 : t;
                            if (!(r < 0)) {
                                var a = e.getLine(r), l = a.search(i[0]);
                                if (!(!n && l < s || -1 === l)) {
                                    for (var c = 1; c < h; c++) if (a = e.getLine(r + c), -1 == a.search(i[c])) return;
                                    var u = a.match(i[h - 1])[0].length;
                                    if (!(n && u > s)) return !!o(r, l, r + h - 1, u) || void 0
                                }
                            }
                        }; else if (n) u = function (t, n, s) {
                            var o, r = e.getLine(t), a = [], l = 0;
                            i.lastIndex = 0;
                            while (o = i.exec(r)) {
                                var c = o[0].length;
                                if (l = o.index, !c) {
                                    if (l >= r.length) break;
                                    i.lastIndex = l += 1
                                }
                                if (o.index + c > n) break;
                                a.push(o.index, c)
                            }
                            for (var h = a.length - 1; h >= 0; h -= 2) {
                                var u = a[h - 1];
                                c = a[h];
                                if (s(t, u, t, u + c)) return !0
                            }
                        }; else u = function (t, n, s) {
                            var o, r, a = e.getLine(t);
                            i.lastIndex = n;
                            while (r = i.exec(a)) {
                                var l = r[0].length;
                                if (o = r.index, s(t, o, t, o + l)) return !0;
                                if (!l && (i.lastIndex = o += 1, o >= a.length)) return !1
                            }
                        };
                        return {forEach: c}
                    }
                }).call(r.prototype), t.Search = r
            })), deAceFine("ace/keyboard/hash_handler", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], (function (e, i, n) {
                var s = e("../lib/keys"), o = e("../lib/useragent"), r = s.KEY_MODS;

                function a(e, t) {
                    this.platform = t || (o.isMac ? "mac" : "win"), this.commands = {}, this.commandKeyBinding = {}, this.addCommands(e), this.$singleCommand = !0
                }

                function l(e, t) {
                    a.call(this, e, t), this.$singleCommand = !1
                }

                l.prototype = a.prototype, function () {
                    function e(e) {
                        return "object" == Object(t["a"])(e) && e.bindKey && e.bindKey.position || (e.isDefault ? -100 : 0)
                    }

                    this.addCommand = function (e) {
                        this.commands[e.name] && this.removeCommand(e), this.commands[e.name] = e, e.bindKey && this._buildKeyHash(e)
                    }, this.removeCommand = function (e, t) {
                        var i = e && ("string" === typeof e ? e : e.name);
                        e = this.commands[i], t || delete this.commands[i];
                        var n = this.commandKeyBinding;
                        for (var s in n) {
                            var o = n[s];
                            if (o == e) delete n[s]; else if (Array.isArray(o)) {
                                var r = o.indexOf(e);
                                -1 != r && (o.splice(r, 1), 1 == o.length && (n[s] = o[0]))
                            }
                        }
                    }, this.bindKey = function (e, i, n) {
                        if ("object" == Object(t["a"])(e) && e && (void 0 == n && (n = e.position), e = e[this.platform]), e) return "function" == typeof i ? this.addCommand({
                            exec: i,
                            bindKey: e,
                            name: i.name || e
                        }) : void e.split("|").forEach((function (e) {
                            var t = "";
                            if (-1 != e.indexOf(" ")) {
                                var s = e.split(/\s+/);
                                e = s.pop(), s.forEach((function (e) {
                                    var i = this.parseKeys(e), n = r[i.hashId] + i.key;
                                    t += (t ? " " : "") + n, this._addCommandToBinding(t, "chainKeys")
                                }), this), t += " "
                            }
                            var o = this.parseKeys(e), a = r[o.hashId] + o.key;
                            this._addCommandToBinding(t + a, i, n)
                        }), this)
                    }, this._addCommandToBinding = function (t, i, n) {
                        var s, o = this.commandKeyBinding;
                        if (i) if (!o[t] || this.$singleCommand) o[t] = i; else {
                            Array.isArray(o[t]) ? -1 != (s = o[t].indexOf(i)) && o[t].splice(s, 1) : o[t] = [o[t]], "number" != typeof n && (n = e(i));
                            var r = o[t];
                            for (s = 0; s < r.length; s++) {
                                var a = r[s], l = e(a);
                                if (l > n) break
                            }
                            r.splice(s, 0, i)
                        } else delete o[t]
                    }, this.addCommands = function (e) {
                        e && Object.keys(e).forEach((function (i) {
                            var n = e[i];
                            if (n) {
                                if ("string" === typeof n) return this.bindKey(n, i);
                                "function" === typeof n && (n = {exec: n}), "object" === Object(t["a"])(n) && (n.name || (n.name = i), this.addCommand(n))
                            }
                        }), this)
                    }, this.removeCommands = function (e) {
                        Object.keys(e).forEach((function (t) {
                            this.removeCommand(e[t])
                        }), this)
                    }, this.bindKeys = function (e) {
                        Object.keys(e).forEach((function (t) {
                            this.bindKey(t, e[t])
                        }), this)
                    }, this._buildKeyHash = function (e) {
                        this.bindKey(e.bindKey, e)
                    }, this.parseKeys = function (e) {
                        var t = e.toLowerCase().split(/[\-\+]([\-\+])?/).filter((function (e) {
                            return e
                        })), i = t.pop(), n = s[i];
                        if (s.FUNCTION_KEYS[n]) i = s.FUNCTION_KEYS[n].toLowerCase(); else {
                            if (!t.length) return {key: i, hashId: -1};
                            if (1 == t.length && "shift" == t[0]) return {key: i.toUpperCase(), hashId: -1}
                        }
                        for (var o = 0, r = t.length; r--;) {
                            var a = s.KEY_MODS[t[r]];
                            if (null == a) return "undefined" != typeof console && console.error("invalid modifier " + t[r] + " in " + e), !1;
                            o |= a
                        }
                        return {key: i, hashId: o}
                    }, this.findKeyCommand = function (e, t) {
                        var i = r[e] + t;
                        return this.commandKeyBinding[i]
                    }, this.handleKeyboard = function (e, t, i, n) {
                        if (!(n < 0)) {
                            var s = r[t] + i, o = this.commandKeyBinding[s];
                            return e.$keyChain && (e.$keyChain += " " + s, o = this.commandKeyBinding[e.$keyChain] || o), !o || "chainKeys" != o && "chainKeys" != o[o.length - 1] ? (e.$keyChain && (t && 4 != t || 1 != i.length ? (-1 == t || n > 0) && (e.$keyChain = "") : e.$keyChain = e.$keyChain.slice(0, -s.length - 1)), {command: o}) : (e.$keyChain = e.$keyChain || s, {command: "null"})
                        }
                    }, this.getStatusText = function (e, t) {
                        return t.$keyChain || ""
                    }
                }.call(a.prototype), i.HashHandler = a, i.MultiHashHandler = l
            })), deAceFine("ace/commands/command_manager", ["require", "exports", "module", "ace/lib/oop", "ace/keyboard/hash_handler", "ace/lib/event_emitter"], (function (e, t, i) {
                var n = e("../lib/oop"), s = e("../keyboard/hash_handler").MultiHashHandler,
                    o = e("../lib/event_emitter").EventEmitter, r = function (e, t) {
                        s.call(this, t, e), this.byName = this.commands, this.setDefaultHandler("exec", (function (e) {
                            return e.command.exec(e.editor, e.args || {})
                        }))
                    };
                n.inherits(r, s), function () {
                    n.implement(this, o), this.exec = function (e, t, i) {
                        if (Array.isArray(e)) {
                            for (var n = e.length; n--;) if (this.exec(e[n], t, i)) return !0;
                            return !1
                        }
                        if ("string" === typeof e && (e = this.commands[e]), !e) return !1;
                        if (t && t.$readOnly && !e.readOnly) return !1;
                        if (0 != this.$checkCommandState && e.isAvailable && !e.isAvailable(t)) return !1;
                        var s = {editor: t, command: e, args: i};
                        return s.returnValue = this._emit("exec", s), this._signal("afterExec", s), !1 !== s.returnValue
                    }, this.toggleRecording = function (e) {
                        if (!this.$inReplay) return e && e._emit("changeStatus"), this.recording ? (this.macro.pop(), this.removeEventListener("exec", this.$addCommandToMacro), this.macro.length || (this.macro = this.oldMacro), this.recording = !1) : (this.$addCommandToMacro || (this.$addCommandToMacro = function (e) {
                            this.macro.push([e.command, e.args])
                        }.bind(this)), this.oldMacro = this.macro, this.macro = [], this.on("exec", this.$addCommandToMacro), this.recording = !0)
                    }, this.replay = function (e) {
                        if (!this.$inReplay && this.macro) {
                            if (this.recording) return this.toggleRecording(e);
                            try {
                                this.$inReplay = !0, this.macro.forEach((function (t) {
                                    "string" == typeof t ? this.exec(t, e) : this.exec(t[0], e, t[1])
                                }), this)
                            } finally {
                                this.$inReplay = !1
                            }
                        }
                    }, this.trimMacro = function (e) {
                        return e.map((function (e) {
                            return "string" != typeof e[0] && (e[0] = e[0].name), e[1] || (e = e[0]), e
                        }))
                    }
                }.call(r.prototype), t.CommandManager = r
            })), deAceFine("ace/commands/default_commands", ["require", "exports", "module", "ace/lib/lang", "ace/config", "ace/range"], (function (e, t, i) {
                var n = e("../lib/lang"), s = e("../config"), o = e("../range").Range;

                function r(e, t) {
                    return {win: e, mac: t}
                }

                t.commands = [{
                    name: "showSettingsMenu", bindKey: r("Ctrl-,", "Command-,"), exec: function (e) {
                        s.loadModule("ace/ext/settings_menu", (function (t) {
                            t.init(e), e.showSettingsMenu()
                        }))
                    }, readOnly: !0
                }, {
                    name: "goToNextError", bindKey: r("Alt-E", "F4"), exec: function (e) {
                        s.loadModule("./ext/error_marker", (function (t) {
                            t.showErrorMarker(e, 1)
                        }))
                    }, scrollIntoView: "animate", readOnly: !0
                }, {
                    name: "goToPreviousError", bindKey: r("Alt-Shift-E", "Shift-F4"), exec: function (e) {
                        s.loadModule("./ext/error_marker", (function (t) {
                            t.showErrorMarker(e, -1)
                        }))
                    }, scrollIntoView: "animate", readOnly: !0
                }, {
                    name: "selectall",
                    description: "Select all",
                    bindKey: r("Ctrl-A", "Command-A"),
                    exec: function (e) {
                        e.selectAll()
                    },
                    readOnly: !0
                }, {
                    name: "centerselection",
                    description: "Center selection",
                    bindKey: r(null, "Ctrl-L"),
                    exec: function (e) {
                        e.centerSelection()
                    },
                    readOnly: !0
                }, {
                    name: "gotoline",
                    description: "Go to line...",
                    bindKey: r("Ctrl-L", "Command-L"),
                    exec: function (e, t) {
                        "number" !== typeof t || isNaN(t) || e.gotoLine(t), e.prompt({$type: "gotoLine"})
                    },
                    readOnly: !0
                }, {
                    name: "fold", bindKey: r("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"), exec: function (e) {
                        e.session.toggleFold(!1)
                    }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0
                }, {
                    name: "unfold",
                    bindKey: r("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),
                    exec: function (e) {
                        e.session.toggleFold(!0)
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "center",
                    readOnly: !0
                }, {
                    name: "toggleFoldWidget", bindKey: r("F2", "F2"), exec: function (e) {
                        e.session.toggleFoldWidget()
                    }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0
                }, {
                    name: "toggleParentFoldWidget", bindKey: r("Alt-F2", "Alt-F2"), exec: function (e) {
                        e.session.toggleFoldWidget(!0)
                    }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0
                }, {
                    name: "foldall",
                    description: "Fold all",
                    bindKey: r(null, "Ctrl-Command-Option-0"),
                    exec: function (e) {
                        e.session.foldAll()
                    },
                    scrollIntoView: "center",
                    readOnly: !0
                }, {
                    name: "foldOther",
                    description: "Fold other",
                    bindKey: r("Alt-0", "Command-Option-0"),
                    exec: function (e) {
                        e.session.foldAll(), e.session.unfold(e.selection.getAllRanges())
                    },
                    scrollIntoView: "center",
                    readOnly: !0
                }, {
                    name: "unfoldall",
                    description: "Unfold all",
                    bindKey: r("Alt-Shift-0", "Command-Option-Shift-0"),
                    exec: function (e) {
                        e.session.unfold()
                    },
                    scrollIntoView: "center",
                    readOnly: !0
                }, {
                    name: "findnext", description: "Find next", bindKey: r("Ctrl-K", "Command-G"), exec: function (e) {
                        e.findNext()
                    }, multiSelectAction: "forEach", scrollIntoView: "center", readOnly: !0
                }, {
                    name: "findprevious",
                    description: "Find previous",
                    bindKey: r("Ctrl-Shift-K", "Command-Shift-G"),
                    exec: function (e) {
                        e.findPrevious()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "center",
                    readOnly: !0
                }, {
                    name: "selectOrFindNext",
                    description: "Select or find next",
                    bindKey: r("Alt-K", "Ctrl-G"),
                    exec: function (e) {
                        e.selection.isEmpty() ? e.selection.selectWord() : e.findNext()
                    },
                    readOnly: !0
                }, {
                    name: "selectOrFindPrevious",
                    description: "Select or find previous",
                    bindKey: r("Alt-Shift-K", "Ctrl-Shift-G"),
                    exec: function (e) {
                        e.selection.isEmpty() ? e.selection.selectWord() : e.findPrevious()
                    },
                    readOnly: !0
                }, {
                    name: "find", description: "Find", bindKey: r("Ctrl-F", "Command-F"), exec: function (e) {
                        s.loadModule("ace/ext/searchbox", (function (t) {
                            t.Search(e)
                        }))
                    }, readOnly: !0
                }, {
                    name: "overwrite", description: "Overwrite", bindKey: "Insert", exec: function (e) {
                        e.toggleOverwrite()
                    }, readOnly: !0
                }, {
                    name: "selecttostart",
                    description: "Select to start",
                    bindKey: r("Ctrl-Shift-Home", "Command-Shift-Home|Command-Shift-Up"),
                    exec: function (e) {
                        e.getSelection().selectFileStart()
                    },
                    multiSelectAction: "forEach",
                    readOnly: !0,
                    scrollIntoView: "animate",
                    aceCommandGroup: "fileJump"
                }, {
                    name: "gotostart",
                    description: "Go to start",
                    bindKey: r("Ctrl-Home", "Command-Home|Command-Up"),
                    exec: function (e) {
                        e.navigateFileStart()
                    },
                    multiSelectAction: "forEach",
                    readOnly: !0,
                    scrollIntoView: "animate",
                    aceCommandGroup: "fileJump"
                }, {
                    name: "selectup",
                    description: "Select up",
                    bindKey: r("Shift-Up", "Shift-Up|Ctrl-Shift-P"),
                    exec: function (e) {
                        e.getSelection().selectUp()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "golineup", description: "Go line up", bindKey: r("Up", "Up|Ctrl-P"), exec: function (e, t) {
                        e.navigateUp(t.times)
                    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
                }, {
                    name: "selecttoend",
                    description: "Select to end",
                    bindKey: r("Ctrl-Shift-End", "Command-Shift-End|Command-Shift-Down"),
                    exec: function (e) {
                        e.getSelection().selectFileEnd()
                    },
                    multiSelectAction: "forEach",
                    readOnly: !0,
                    scrollIntoView: "animate",
                    aceCommandGroup: "fileJump"
                }, {
                    name: "gotoend",
                    description: "Go to end",
                    bindKey: r("Ctrl-End", "Command-End|Command-Down"),
                    exec: function (e) {
                        e.navigateFileEnd()
                    },
                    multiSelectAction: "forEach",
                    readOnly: !0,
                    scrollIntoView: "animate",
                    aceCommandGroup: "fileJump"
                }, {
                    name: "selectdown",
                    description: "Select down",
                    bindKey: r("Shift-Down", "Shift-Down|Ctrl-Shift-N"),
                    exec: function (e) {
                        e.getSelection().selectDown()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "golinedown",
                    description: "Go line down",
                    bindKey: r("Down", "Down|Ctrl-N"),
                    exec: function (e, t) {
                        e.navigateDown(t.times)
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "selectwordleft",
                    description: "Select word left",
                    bindKey: r("Ctrl-Shift-Left", "Option-Shift-Left"),
                    exec: function (e) {
                        e.getSelection().selectWordLeft()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "gotowordleft",
                    description: "Go to word left",
                    bindKey: r("Ctrl-Left", "Option-Left"),
                    exec: function (e) {
                        e.navigateWordLeft()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "selecttolinestart",
                    description: "Select to line start",
                    bindKey: r("Alt-Shift-Left", "Command-Shift-Left|Ctrl-Shift-A"),
                    exec: function (e) {
                        e.getSelection().selectLineStart()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "gotolinestart",
                    description: "Go to line start",
                    bindKey: r("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
                    exec: function (e) {
                        e.navigateLineStart()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "selectleft",
                    description: "Select left",
                    bindKey: r("Shift-Left", "Shift-Left|Ctrl-Shift-B"),
                    exec: function (e) {
                        e.getSelection().selectLeft()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "gotoleft",
                    description: "Go to left",
                    bindKey: r("Left", "Left|Ctrl-B"),
                    exec: function (e, t) {
                        e.navigateLeft(t.times)
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "selectwordright",
                    description: "Select word right",
                    bindKey: r("Ctrl-Shift-Right", "Option-Shift-Right"),
                    exec: function (e) {
                        e.getSelection().selectWordRight()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "gotowordright",
                    description: "Go to word right",
                    bindKey: r("Ctrl-Right", "Option-Right"),
                    exec: function (e) {
                        e.navigateWordRight()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "selecttolineend",
                    description: "Select to line end",
                    bindKey: r("Alt-Shift-Right", "Command-Shift-Right|Shift-End|Ctrl-Shift-E"),
                    exec: function (e) {
                        e.getSelection().selectLineEnd()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "gotolineend",
                    description: "Go to line end",
                    bindKey: r("Alt-Right|End", "Command-Right|End|Ctrl-E"),
                    exec: function (e) {
                        e.navigateLineEnd()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "selectright",
                    description: "Select right",
                    bindKey: r("Shift-Right", "Shift-Right"),
                    exec: function (e) {
                        e.getSelection().selectRight()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "gotoright",
                    description: "Go to right",
                    bindKey: r("Right", "Right|Ctrl-F"),
                    exec: function (e, t) {
                        e.navigateRight(t.times)
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "selectpagedown",
                    description: "Select page down",
                    bindKey: "Shift-PageDown",
                    exec: function (e) {
                        e.selectPageDown()
                    },
                    readOnly: !0
                }, {
                    name: "pagedown",
                    description: "Page down",
                    bindKey: r(null, "Option-PageDown"),
                    exec: function (e) {
                        e.scrollPageDown()
                    },
                    readOnly: !0
                }, {
                    name: "gotopagedown",
                    description: "Go to page down",
                    bindKey: r("PageDown", "PageDown|Ctrl-V"),
                    exec: function (e) {
                        e.gotoPageDown()
                    },
                    readOnly: !0
                }, {
                    name: "selectpageup", description: "Select page up", bindKey: "Shift-PageUp", exec: function (e) {
                        e.selectPageUp()
                    }, readOnly: !0
                }, {
                    name: "pageup", description: "Page up", bindKey: r(null, "Option-PageUp"), exec: function (e) {
                        e.scrollPageUp()
                    }, readOnly: !0
                }, {
                    name: "gotopageup", description: "Go to page up", bindKey: "PageUp", exec: function (e) {
                        e.gotoPageUp()
                    }, readOnly: !0
                }, {
                    name: "scrollup", description: "Scroll up", bindKey: r("Ctrl-Up", null), exec: function (e) {
                        e.renderer.scrollBy(0, -2 * e.renderer.layerConfig.lineHeight)
                    }, readOnly: !0
                }, {
                    name: "scrolldown", description: "Scroll down", bindKey: r("Ctrl-Down", null), exec: function (e) {
                        e.renderer.scrollBy(0, 2 * e.renderer.layerConfig.lineHeight)
                    }, readOnly: !0
                }, {
                    name: "selectlinestart",
                    description: "Select line start",
                    bindKey: "Shift-Home",
                    exec: function (e) {
                        e.getSelection().selectLineStart()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "selectlineend", description: "Select line end", bindKey: "Shift-End", exec: function (e) {
                        e.getSelection().selectLineEnd()
                    }, multiSelectAction: "forEach", scrollIntoView: "cursor", readOnly: !0
                }, {
                    name: "togglerecording",
                    description: "Toggle recording",
                    bindKey: r("Ctrl-Alt-E", "Command-Option-E"),
                    exec: function (e) {
                        e.commands.toggleRecording(e)
                    },
                    readOnly: !0
                }, {
                    name: "replaymacro",
                    description: "Replay macro",
                    bindKey: r("Ctrl-Shift-E", "Command-Shift-E"),
                    exec: function (e) {
                        e.commands.replay(e)
                    },
                    readOnly: !0
                }, {
                    name: "jumptomatching",
                    description: "Jump to matching",
                    bindKey: r("Ctrl-P", "Ctrl-P"),
                    exec: function (e) {
                        e.jumpToMatching()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "animate",
                    readOnly: !0
                }, {
                    name: "selecttomatching",
                    description: "Select to matching",
                    bindKey: r("Ctrl-Shift-P", "Ctrl-Shift-P"),
                    exec: function (e) {
                        e.jumpToMatching(!0)
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "animate",
                    readOnly: !0
                }, {
                    name: "expandToMatching",
                    description: "Expand to matching",
                    bindKey: r("Ctrl-Shift-M", "Ctrl-Shift-M"),
                    exec: function (e) {
                        e.jumpToMatching(!0, !0)
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "animate",
                    readOnly: !0
                }, {
                    name: "passKeysToBrowser",
                    description: "Pass keys to browser",
                    bindKey: r(null, null),
                    exec: function () {
                    },
                    passEvent: !0,
                    readOnly: !0
                }, {
                    name: "copy", description: "Copy", exec: function (e) {
                    }, readOnly: !0
                }, {
                    name: "cut", description: "Cut", exec: function (e) {
                        var t = e.$copyWithEmptySelection && e.selection.isEmpty(),
                            i = t ? e.selection.getLineRange() : e.selection.getRange();
                        e._emit("cut", i), i.isEmpty() || e.session.remove(i), e.clearSelection()
                    }, scrollIntoView: "cursor", multiSelectAction: "forEach"
                }, {
                    name: "paste", description: "Paste", exec: function (e, t) {
                        e.$handlePaste(t)
                    }, scrollIntoView: "cursor"
                }, {
                    name: "removeline",
                    description: "Remove line",
                    bindKey: r("Ctrl-D", "Command-D"),
                    exec: function (e) {
                        e.removeLines()
                    },
                    scrollIntoView: "cursor",
                    multiSelectAction: "forEachLine"
                }, {
                    name: "duplicateSelection",
                    description: "Duplicate selection",
                    bindKey: r("Ctrl-Shift-D", "Command-Shift-D"),
                    exec: function (e) {
                        e.duplicateSelection()
                    },
                    scrollIntoView: "cursor",
                    multiSelectAction: "forEach"
                }, {
                    name: "sortlines",
                    description: "Sort lines",
                    bindKey: r("Ctrl-Alt-S", "Command-Alt-S"),
                    exec: function (e) {
                        e.sortLines()
                    },
                    scrollIntoView: "selection",
                    multiSelectAction: "forEachLine"
                }, {
                    name: "togglecomment",
                    description: "Toggle comment",
                    bindKey: r("Ctrl-/", "Command-/"),
                    exec: function (e) {
                        e.toggleCommentLines()
                    },
                    multiSelectAction: "forEachLine",
                    scrollIntoView: "selectionPart"
                }, {
                    name: "toggleBlockComment",
                    description: "Toggle block comment",
                    bindKey: r("Ctrl-Shift-/", "Command-Shift-/"),
                    exec: function (e) {
                        e.toggleBlockComment()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "selectionPart"
                }, {
                    name: "modifyNumberUp",
                    description: "Modify number up",
                    bindKey: r("Ctrl-Shift-Up", "Alt-Shift-Up"),
                    exec: function (e) {
                        e.modifyNumber(1)
                    },
                    scrollIntoView: "cursor",
                    multiSelectAction: "forEach"
                }, {
                    name: "modifyNumberDown",
                    description: "Modify number down",
                    bindKey: r("Ctrl-Shift-Down", "Alt-Shift-Down"),
                    exec: function (e) {
                        e.modifyNumber(-1)
                    },
                    scrollIntoView: "cursor",
                    multiSelectAction: "forEach"
                }, {
                    name: "replace",
                    description: "Replace",
                    bindKey: r("Ctrl-H", "Command-Option-F"),
                    exec: function (e) {
                        s.loadModule("ace/ext/searchbox", (function (t) {
                            t.Search(e, !0)
                        }))
                    }
                }, {
                    name: "undo", description: "Undo", bindKey: r("Ctrl-Z", "Command-Z"), exec: function (e) {
                        e.undo()
                    }
                }, {
                    name: "redo",
                    description: "Redo",
                    bindKey: r("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),
                    exec: function (e) {
                        e.redo()
                    }
                }, {
                    name: "copylinesup",
                    description: "Copy lines up",
                    bindKey: r("Alt-Shift-Up", "Command-Option-Up"),
                    exec: function (e) {
                        e.copyLinesUp()
                    },
                    scrollIntoView: "cursor"
                }, {
                    name: "movelinesup",
                    description: "Move lines up",
                    bindKey: r("Alt-Up", "Option-Up"),
                    exec: function (e) {
                        e.moveLinesUp()
                    },
                    scrollIntoView: "cursor"
                }, {
                    name: "copylinesdown",
                    description: "Copy lines down",
                    bindKey: r("Alt-Shift-Down", "Command-Option-Down"),
                    exec: function (e) {
                        e.copyLinesDown()
                    },
                    scrollIntoView: "cursor"
                }, {
                    name: "movelinesdown",
                    description: "Move lines down",
                    bindKey: r("Alt-Down", "Option-Down"),
                    exec: function (e) {
                        e.moveLinesDown()
                    },
                    scrollIntoView: "cursor"
                }, {
                    name: "del",
                    description: "Delete",
                    bindKey: r("Delete", "Delete|Ctrl-D|Shift-Delete"),
                    exec: function (e) {
                        e.remove("right")
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor"
                }, {
                    name: "backspace",
                    description: "Backspace",
                    bindKey: r("Shift-Backspace|Backspace", "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),
                    exec: function (e) {
                        e.remove("left")
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor"
                }, {
                    name: "cut_or_delete",
                    description: "Cut or delete",
                    bindKey: r("Shift-Delete", null),
                    exec: function (e) {
                        if (!e.selection.isEmpty()) return !1;
                        e.remove("left")
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor"
                }, {
                    name: "removetolinestart",
                    description: "Remove to line start",
                    bindKey: r("Alt-Backspace", "Command-Backspace"),
                    exec: function (e) {
                        e.removeToLineStart()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor"
                }, {
                    name: "removetolineend",
                    description: "Remove to line end",
                    bindKey: r("Alt-Delete", "Ctrl-K|Command-Delete"),
                    exec: function (e) {
                        e.removeToLineEnd()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor"
                }, {
                    name: "removetolinestarthard",
                    description: "Remove to line start hard",
                    bindKey: r("Ctrl-Shift-Backspace", null),
                    exec: function (e) {
                        var t = e.selection.getRange();
                        t.start.column = 0, e.session.remove(t)
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor"
                }, {
                    name: "removetolineendhard",
                    description: "Remove to line end hard",
                    bindKey: r("Ctrl-Shift-Delete", null),
                    exec: function (e) {
                        var t = e.selection.getRange();
                        t.end.column = Number.MAX_VALUE, e.session.remove(t)
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor"
                }, {
                    name: "removewordleft",
                    description: "Remove word left",
                    bindKey: r("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"),
                    exec: function (e) {
                        e.removeWordLeft()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor"
                }, {
                    name: "removewordright",
                    description: "Remove word right",
                    bindKey: r("Ctrl-Delete", "Alt-Delete"),
                    exec: function (e) {
                        e.removeWordRight()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor"
                }, {
                    name: "outdent", description: "Outdent", bindKey: r("Shift-Tab", "Shift-Tab"), exec: function (e) {
                        e.blockOutdent()
                    }, multiSelectAction: "forEach", scrollIntoView: "selectionPart"
                }, {
                    name: "indent", description: "Indent", bindKey: r("Tab", "Tab"), exec: function (e) {
                        e.indent()
                    }, multiSelectAction: "forEach", scrollIntoView: "selectionPart"
                }, {
                    name: "blockoutdent",
                    description: "Block outdent",
                    bindKey: r("Ctrl-[", "Ctrl-["),
                    exec: function (e) {
                        e.blockOutdent()
                    },
                    multiSelectAction: "forEachLine",
                    scrollIntoView: "selectionPart"
                }, {
                    name: "blockindent",
                    description: "Block indent",
                    bindKey: r("Ctrl-]", "Ctrl-]"),
                    exec: function (e) {
                        e.blockIndent()
                    },
                    multiSelectAction: "forEachLine",
                    scrollIntoView: "selectionPart"
                }, {
                    name: "insertstring", description: "Insert string", exec: function (e, t) {
                        e.insert(t)
                    }, multiSelectAction: "forEach", scrollIntoView: "cursor"
                }, {
                    name: "inserttext", description: "Insert text", exec: function (e, t) {
                        e.insert(n.stringRepeat(t.text || "", t.times || 1))
                    }, multiSelectAction: "forEach", scrollIntoView: "cursor"
                }, {
                    name: "splitline", description: "Split line", bindKey: r(null, "Ctrl-O"), exec: function (e) {
                        e.splitLine()
                    }, multiSelectAction: "forEach", scrollIntoView: "cursor"
                }, {
                    name: "transposeletters",
                    description: "Transpose letters",
                    bindKey: r("Alt-Shift-X", "Ctrl-T"),
                    exec: function (e) {
                        e.transposeLetters()
                    },
                    multiSelectAction: function (e) {
                        e.transposeSelections(1)
                    },
                    scrollIntoView: "cursor"
                }, {
                    name: "touppercase",
                    description: "To uppercase",
                    bindKey: r("Ctrl-U", "Ctrl-U"),
                    exec: function (e) {
                        e.toUpperCase()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor"
                }, {
                    name: "tolowercase",
                    description: "To lowercase",
                    bindKey: r("Ctrl-Shift-U", "Ctrl-Shift-U"),
                    exec: function (e) {
                        e.toLowerCase()
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor"
                }, {
                    name: "expandtoline",
                    description: "Expand to line",
                    bindKey: r("Ctrl-Shift-L", "Command-Shift-L"),
                    exec: function (e) {
                        var t = e.selection.getRange();
                        t.start.column = t.end.column = 0, t.end.row++, e.selection.setRange(t, !1)
                    },
                    multiSelectAction: "forEach",
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "joinlines", description: "Join lines", bindKey: r(null, null), exec: function (e) {
                        for (var t = e.selection.isBackwards(), i = t ? e.selection.getSelectionLead() : e.selection.getSelectionAnchor(), s = t ? e.selection.getSelectionAnchor() : e.selection.getSelectionLead(), r = e.session.doc.getLine(i.row).length, a = e.session.doc.getTextRange(e.selection.getRange()), l = a.replace(/\n\s*/, " ").length, c = e.session.doc.getLine(i.row), h = i.row + 1; h <= s.row + 1; h++) {
                            var u = n.stringTrimLeft(n.stringTrimRight(e.session.doc.getLine(h)));
                            0 !== u.length && (u = " " + u), c += u
                        }
                        s.row + 1 < e.session.doc.getLength() - 1 && (c += e.session.doc.getNewLineCharacter()), e.clearSelection(), e.session.doc.replace(new o(i.row, 0, s.row + 2, 0), c), l > 0 ? (e.selection.moveCursorTo(i.row, i.column), e.selection.selectTo(i.row, i.column + l)) : (r = e.session.doc.getLine(i.row).length > r ? r + 1 : r, e.selection.moveCursorTo(i.row, r))
                    }, multiSelectAction: "forEach", readOnly: !0
                }, {
                    name: "invertSelection",
                    description: "Invert selection",
                    bindKey: r(null, null),
                    exec: function (e) {
                        var t = e.session.doc.getLength() - 1, i = e.session.doc.getLine(t).length,
                            n = e.selection.rangeList.ranges, s = [];
                        n.length < 1 && (n = [e.selection.getRange()]);
                        for (var r = 0; r < n.length; r++) r == n.length - 1 && (n[r].end.row === t && n[r].end.column === i || s.push(new o(n[r].end.row, n[r].end.column, t, i))), 0 === r ? 0 === n[r].start.row && 0 === n[r].start.column || s.push(new o(0, 0, n[r].start.row, n[r].start.column)) : s.push(new o(n[r - 1].end.row, n[r - 1].end.column, n[r].start.row, n[r].start.column));
                        e.exitMultiSelectMode(), e.clearSelection();
                        for (r = 0; r < s.length; r++) e.selection.addRange(s[r], !1)
                    },
                    readOnly: !0,
                    scrollIntoView: "none"
                }, {
                    name: "openCommandPallete",
                    description: "Open command pallete",
                    bindKey: r("F1", "F1"),
                    exec: function (e) {
                        e.prompt({$type: "commands"})
                    },
                    readOnly: !0
                }, {
                    name: "modeSelect",
                    description: "Change language mode...",
                    bindKey: r(null, null),
                    exec: function (e) {
                        e.prompt({$type: "modes"})
                    },
                    readOnly: !0
                }]
            })), deAceFine("ace/clipboard", ["require", "exports", "module"], (function (e, t, i) {
                i.exports = {lineMode: !1}
            })), deAceFine("ace/editor", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/keyboard/textinput", "ace/mouse/mouse_handler", "ace/mouse/fold_handler", "ace/keyboard/keybinding", "ace/edit_session", "ace/search", "ace/range", "ace/lib/event_emitter", "ace/commands/command_manager", "ace/commands/default_commands", "ace/config", "ace/token_iterator", "ace/clipboard"], (function (e, i, n) {
                e("./lib/fixoldbrowsers");
                var s = e("./lib/oop"), o = e("./lib/dom"), r = e("./lib/lang"), a = e("./lib/useragent"),
                    l = e("./keyboard/textinput").TextInput, c = e("./mouse/mouse_handler").MouseHandler,
                    h = e("./mouse/fold_handler").FoldHandler, u = e("./keyboard/keybinding").KeyBinding,
                    d = e("./edit_session").EditSession, g = e("./search").Search, f = e("./range").Range,
                    p = e("./lib/event_emitter").EventEmitter, m = e("./commands/command_manager").CommandManager,
                    v = e("./commands/default_commands").commands, w = e("./config"),
                    b = e("./token_iterator").TokenIterator, y = e("./clipboard"), $ = function e(i, n, s) {
                        var o = i.getContainerElement();
                        this.container = o, this.renderer = i, this.id = "editor" + ++e.$uid, this.commands = new m(a.isMac ? "mac" : "win", v), "object" == ("undefined" === typeof document ? "undefined" : Object(t["a"])(document)) && (this.textInput = new l(i.getTextAreaContainer(), this), this.renderer.textarea = this.textInput.getElement(), this.$mouseHandler = new c(this), new h(this)), this.keyBinding = new u(this), this.$search = (new g).set({wrap: !0}), this.$historyTracker = this.$historyTracker.bind(this), this.commands.on("exec", this.$historyTracker), this.$initOperationListeners(), this._$emitInputEvent = r.delayedCall(function () {
                            this._signal("input", {}), this.session && this.session.bgTokenizer && this.session.bgTokenizer.scheduleStart()
                        }.bind(this)), this.on("change", (function (e, t) {
                            t._$emitInputEvent.schedule(31)
                        })), this.setSession(n || s && s.session || new d("")), w.resetOptions(this), s && this.setOptions(s), w._signal("editor", this)
                    };
                $.$uid = 0, function () {
                    s.implement(this, p), this.$initOperationListeners = function () {
                        this.commands.on("exec", this.startOperation.bind(this), !0), this.commands.on("afterExec", this.endOperation.bind(this), !0), this.$opResetTimer = r.delayedCall(this.endOperation.bind(this, !0)), this.on("change", function () {
                            this.curOp || (this.startOperation(), this.curOp.selectionBefore = this.$lastSel), this.curOp.docChanged = !0
                        }.bind(this), !0), this.on("changeSelection", function () {
                            this.curOp || (this.startOperation(), this.curOp.selectionBefore = this.$lastSel), this.curOp.selectionChanged = !0
                        }.bind(this), !0)
                    }, this.curOp = null, this.prevOp = {}, this.startOperation = function (e) {
                        if (this.curOp) {
                            if (!e || this.curOp.command) return;
                            this.prevOp = this.curOp
                        }
                        e || (this.previousCommand = null, e = {}), this.$opResetTimer.schedule(), this.curOp = this.session.curOp = {
                            command: e.command || {},
                            args: e.args,
                            scrollTop: this.renderer.scrollTop
                        }, this.curOp.selectionBefore = this.selection.toJSON()
                    }, this.endOperation = function (e) {
                        if (this.curOp) {
                            if (e && !1 === e.returnValue) return this.curOp = null;
                            if (1 == e && this.curOp.command && "mouse" == this.curOp.command.name) return;
                            if (this._signal("beforeEndOperation"), !this.curOp) return;
                            var t = this.curOp.command, i = t && t.scrollIntoView;
                            if (i) {
                                switch (i) {
                                    case"center-animate":
                                        i = "animate";
                                    case"center":
                                        this.renderer.scrollCursorIntoView(null, .5);
                                        break;
                                    case"animate":
                                    case"cursor":
                                        this.renderer.scrollCursorIntoView();
                                        break;
                                    case"selectionPart":
                                        var n = this.selection.getRange(), s = this.renderer.layerConfig;
                                        (n.start.row >= s.lastRow || n.end.row <= s.firstRow) && this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead);
                                        break;
                                    default:
                                        break
                                }
                                "animate" == i && this.renderer.animateScrolling(this.curOp.scrollTop)
                            }
                            var o = this.selection.toJSON();
                            this.curOp.selectionAfter = o, this.$lastSel = this.selection.toJSON(), this.session.getUndoManager().addSelection(o), this.prevOp = this.curOp, this.curOp = null
                        }
                    }, this.$mergeableCommands = ["backspace", "del", "insertstring"], this.$historyTracker = function (e) {
                        if (this.$mergeUndoDeltas) {
                            var t = this.prevOp, i = this.$mergeableCommands,
                                n = t.command && e.command.name == t.command.name;
                            if ("insertstring" == e.command.name) {
                                var s = e.args;
                                void 0 === this.mergeNextCommand && (this.mergeNextCommand = !0), n = n && this.mergeNextCommand && (!/\s/.test(s) || /\s/.test(t.args)), this.mergeNextCommand = !0
                            } else n = n && -1 !== i.indexOf(e.command.name);
                            "always" != this.$mergeUndoDeltas && Date.now() - this.sequenceStartTime > 2e3 && (n = !1), n ? this.session.mergeUndoDeltas = !0 : -1 !== i.indexOf(e.command.name) && (this.sequenceStartTime = Date.now())
                        }
                    }, this.setKeyboardHandler = function (e, t) {
                        if (e && "string" === typeof e && "ace" != e) {
                            this.$keybindingId = e;
                            var i = this;
                            w.loadModule(["keybinding", e], (function (n) {
                                i.$keybindingId == e && i.keyBinding.setKeyboardHandler(n && n.handler), t && t()
                            }))
                        } else this.$keybindingId = null, this.keyBinding.setKeyboardHandler(e), t && t()
                    }, this.getKeyboardHandler = function () {
                        return this.keyBinding.getKeyboardHandler()
                    }, this.setSession = function (e) {
                        if (this.session != e) {
                            this.curOp && this.endOperation(), this.curOp = {};
                            var t = this.session;
                            if (t) {
                                this.session.off("change", this.$onDocumentChange), this.session.off("changeMode", this.$onChangeMode), this.session.off("tokenizerUpdate", this.$onTokenizerUpdate), this.session.off("changeTabSize", this.$onChangeTabSize), this.session.off("changeWrapLimit", this.$onChangeWrapLimit), this.session.off("changeWrapMode", this.$onChangeWrapMode), this.session.off("changeFold", this.$onChangeFold), this.session.off("changeFrontMarker", this.$onChangeFrontMarker), this.session.off("changeBackMarker", this.$onChangeBackMarker), this.session.off("changeBreakpoint", this.$onChangeBreakpoint), this.session.off("changeAnnotation", this.$onChangeAnnotation), this.session.off("changeOverwrite", this.$onCursorChange), this.session.off("changeScrollTop", this.$onScrollTopChange), this.session.off("changeScrollLeft", this.$onScrollLeftChange);
                                var i = this.session.getSelection();
                                i.off("changeCursor", this.$onCursorChange), i.off("changeSelection", this.$onSelectionChange)
                            }
                            this.session = e, e ? (this.$onDocumentChange = this.onDocumentChange.bind(this), e.on("change", this.$onDocumentChange), this.renderer.setSession(e), this.$onChangeMode = this.onChangeMode.bind(this), e.on("changeMode", this.$onChangeMode), this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this), e.on("tokenizerUpdate", this.$onTokenizerUpdate), this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer), e.on("changeTabSize", this.$onChangeTabSize), this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this), e.on("changeWrapLimit", this.$onChangeWrapLimit), this.$onChangeWrapMode = this.onChangeWrapMode.bind(this), e.on("changeWrapMode", this.$onChangeWrapMode), this.$onChangeFold = this.onChangeFold.bind(this), e.on("changeFold", this.$onChangeFold), this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this), this.session.on("changeFrontMarker", this.$onChangeFrontMarker), this.$onChangeBackMarker = this.onChangeBackMarker.bind(this), this.session.on("changeBackMarker", this.$onChangeBackMarker), this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this), this.session.on("changeBreakpoint", this.$onChangeBreakpoint), this.$onChangeAnnotation = this.onChangeAnnotation.bind(this), this.session.on("changeAnnotation", this.$onChangeAnnotation), this.$onCursorChange = this.onCursorChange.bind(this), this.session.on("changeOverwrite", this.$onCursorChange), this.$onScrollTopChange = this.onScrollTopChange.bind(this), this.session.on("changeScrollTop", this.$onScrollTopChange), this.$onScrollLeftChange = this.onScrollLeftChange.bind(this), this.session.on("changeScrollLeft", this.$onScrollLeftChange), this.selection = e.getSelection(), this.selection.on("changeCursor", this.$onCursorChange), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.on("changeSelection", this.$onSelectionChange), this.onChangeMode(), this.onCursorChange(), this.onScrollTopChange(), this.onScrollLeftChange(), this.onSelectionChange(), this.onChangeFrontMarker(), this.onChangeBackMarker(), this.onChangeBreakpoint(), this.onChangeAnnotation(), this.session.getUseWrapMode() && this.renderer.adjustWrapLimit(), this.renderer.updateFull()) : (this.selection = null, this.renderer.setSession(e)), this._signal("changeSession", {
                                session: e,
                                oldSession: t
                            }), this.curOp = null, t && t._signal("changeEditor", {oldEditor: this}), e && e._signal("changeEditor", {editor: this}), e && e.bgTokenizer && e.bgTokenizer.scheduleStart()
                        }
                    }, this.getSession = function () {
                        return this.session
                    }, this.setValue = function (e, t) {
                        return this.session.doc.setValue(e), t ? 1 == t ? this.navigateFileEnd() : -1 == t && this.navigateFileStart() : this.selectAll(), e
                    }, this.getValue = function () {
                        return this.session.getValue()
                    }, this.getSelection = function () {
                        return this.selection
                    }, this.resize = function (e) {
                        this.renderer.onResize(e)
                    }, this.setTheme = function (e, t) {
                        this.renderer.setTheme(e, t)
                    }, this.getTheme = function () {
                        return this.renderer.getTheme()
                    }, this.setStyle = function (e) {
                        this.renderer.setStyle(e)
                    }, this.unsetStyle = function (e) {
                        this.renderer.unsetStyle(e)
                    }, this.getFontSize = function () {
                        return this.getOption("fontSize") || o.computedStyle(this.container).fontSize
                    }, this.setFontSize = function (e) {
                        this.setOption("fontSize", e)
                    }, this.$highlightBrackets = function () {
                        if (this.session.$bracketHighlight && (this.session.removeMarker(this.session.$bracketHighlight), this.session.$bracketHighlight = null), !this.$highlightPending) {
                            var e = this;
                            this.$highlightPending = !0, setTimeout((function () {
                                e.$highlightPending = !1;
                                var t = e.session;
                                if (t && t.bgTokenizer) {
                                    var i = t.findMatchingBracket(e.getCursorPosition());
                                    if (i) var n = new f(i.row, i.column, i.row, i.column + 1); else if (t.$mode.getMatching) n = t.$mode.getMatching(e.session);
                                    n && (t.$bracketHighlight = t.addMarker(n, "ace_bracket", "text"))
                                }
                            }), 50)
                        }
                    }, this.$highlightTags = function () {
                        if (!this.$highlightTagPending) {
                            var e = this;
                            this.$highlightTagPending = !0, setTimeout((function () {
                                e.$highlightTagPending = !1;
                                var t = e.session;
                                if (t && t.bgTokenizer) {
                                    var i = e.getCursorPosition(), n = new b(e.session, i.row, i.column),
                                        s = n.getCurrentToken();
                                    if (!s || !/\b(?:tag-open|tag-name)/.test(s.type)) return t.removeMarker(t.$tagHighlight), void (t.$tagHighlight = null);
                                    if (-1 == s.type.indexOf("tag-open") || (s = n.stepForward(), s)) {
                                        var o = s.value, r = 0, a = n.stepBackward();
                                        if ("<" == a.value) do {
                                            a = s, s = n.stepForward(), s && s.value === o && -1 !== s.type.indexOf("tag-name") && ("<" === a.value ? r++ : "</" === a.value && r--)
                                        } while (s && r >= 0); else {
                                            do {
                                                s = a, a = n.stepBackward(), s && s.value === o && -1 !== s.type.indexOf("tag-name") && ("<" === a.value ? r++ : "</" === a.value && r--)
                                            } while (a && r <= 0);
                                            n.stepForward()
                                        }
                                        if (!s) return t.removeMarker(t.$tagHighlight), void (t.$tagHighlight = null);
                                        var l = n.getCurrentTokenRow(), c = n.getCurrentTokenColumn(),
                                            h = new f(l, c, l, c + s.value.length), u = t.$backMarkers[t.$tagHighlight];
                                        t.$tagHighlight && void 0 != u && 0 !== h.compareRange(u.range) && (t.removeMarker(t.$tagHighlight), t.$tagHighlight = null), t.$tagHighlight || (t.$tagHighlight = t.addMarker(h, "ace_bracket", "text"))
                                    }
                                }
                            }), 50)
                        }
                    }, this.focus = function () {
                        var e = this;
                        setTimeout((function () {
                            e.isFocused() || e.textInput.focus()
                        })), this.textInput.focus()
                    }, this.isFocused = function () {
                        return this.textInput.isFocused()
                    }, this.blur = function () {
                        this.textInput.blur()
                    }, this.onFocus = function (e) {
                        this.$isFocused || (this.$isFocused = !0, this.renderer.showCursor(), this.renderer.visualizeFocus(), this._emit("focus", e))
                    }, this.onBlur = function (e) {
                        this.$isFocused && (this.$isFocused = !1, this.renderer.hideCursor(), this.renderer.visualizeBlur(), this._emit("blur", e))
                    }, this.$cursorChange = function () {
                        this.renderer.updateCursor()
                    }, this.onDocumentChange = function (e) {
                        var t = this.session.$useWrapMode, i = e.start.row == e.end.row ? e.end.row : 1 / 0;
                        this.renderer.updateLines(e.start.row, i, t), this._signal("change", e), this.$cursorChange(), this.$updateHighlightActiveLine()
                    }, this.onTokenizerUpdate = function (e) {
                        var t = e.data;
                        this.renderer.updateLines(t.first, t.last)
                    }, this.onScrollTopChange = function () {
                        this.renderer.scrollToY(this.session.getScrollTop())
                    }, this.onScrollLeftChange = function () {
                        this.renderer.scrollToX(this.session.getScrollLeft())
                    }, this.onCursorChange = function () {
                        this.$cursorChange(), this.$highlightBrackets(), this.$highlightTags(), this.$updateHighlightActiveLine(), this._signal("changeSelection")
                    }, this.$updateHighlightActiveLine = function () {
                        var e, t = this.getSession();
                        if (this.$highlightActiveLine && ("line" == this.$selectionStyle && this.selection.isMultiLine() || (e = this.getCursorPosition()), this.renderer.theme && this.renderer.theme.$selectionColorConflict && !this.selection.isEmpty() && (e = !1), !this.renderer.$maxLines || 1 !== this.session.getLength() || this.renderer.$minLines > 1 || (e = !1)), t.$highlightLineMarker && !e) t.removeMarker(t.$highlightLineMarker.id), t.$highlightLineMarker = null; else if (!t.$highlightLineMarker && e) {
                            var i = new f(e.row, e.column, e.row, 1 / 0);
                            i.id = t.addMarker(i, "ace_active-line", "screenLine"), t.$highlightLineMarker = i
                        } else e && (t.$highlightLineMarker.start.row = e.row, t.$highlightLineMarker.end.row = e.row, t.$highlightLineMarker.start.column = e.column, t._signal("changeBackMarker"))
                    }, this.onSelectionChange = function (e) {
                        var t = this.session;
                        if (t.$selectionMarker && t.removeMarker(t.$selectionMarker), t.$selectionMarker = null, this.selection.isEmpty()) this.$updateHighlightActiveLine(); else {
                            var i = this.selection.getRange(), n = this.getSelectionStyle();
                            t.$selectionMarker = t.addMarker(i, "ace_selection", n)
                        }
                        var s = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();
                        this.session.highlight(s), this._signal("changeSelection")
                    }, this.$getSelectionHighLightRegexp = function () {
                        var e = this.session, t = this.getSelectionRange();
                        if (!t.isEmpty() && !t.isMultiLine()) {
                            var i = t.start.column, n = t.end.column, s = e.getLine(t.start.row), o = s.substring(i, n);
                            if (!(o.length > 5e3) && /[\w\d]/.test(o)) {
                                var r = this.$search.$assembleRegExp({wholeWord: !0, caseSensitive: !0, needle: o}),
                                    a = s.substring(i - 1, n + 1);
                                if (r.test(a)) return r
                            }
                        }
                    }, this.onChangeFrontMarker = function () {
                        this.renderer.updateFrontMarkers()
                    }, this.onChangeBackMarker = function () {
                        this.renderer.updateBackMarkers()
                    }, this.onChangeBreakpoint = function () {
                        this.renderer.updateBreakpoints()
                    }, this.onChangeAnnotation = function () {
                        this.renderer.setAnnotations(this.session.getAnnotations())
                    }, this.onChangeMode = function (e) {
                        this.renderer.updateText(), this._emit("changeMode", e)
                    }, this.onChangeWrapLimit = function () {
                        this.renderer.updateFull()
                    }, this.onChangeWrapMode = function () {
                        this.renderer.onResize(!0)
                    }, this.onChangeFold = function () {
                        this.$updateHighlightActiveLine(), this.renderer.updateFull()
                    }, this.getSelectedText = function () {
                        return this.session.getTextRange(this.getSelectionRange())
                    }, this.getCopyText = function () {
                        var e = this.getSelectedText(), t = this.session.doc.getNewLineCharacter(), i = !1;
                        if (!e && this.$copyWithEmptySelection) {
                            i = !0;
                            for (var n = this.selection.getAllRanges(), s = 0; s < n.length; s++) {
                                var o = n[s];
                                s && n[s - 1].start.row == o.start.row || (e += this.session.getLine(o.start.row) + t)
                            }
                        }
                        var r = {text: e};
                        return this._signal("copy", r), y.lineMode = i ? r.text : "", r.text
                    }, this.onCopy = function () {
                        this.commands.exec("copy", this)
                    }, this.onCut = function () {
                        this.commands.exec("cut", this)
                    }, this.onPaste = function (e, t) {
                        var i = {text: e, event: t};
                        this.commands.exec("paste", this, i)
                    }, this.$handlePaste = function (e) {
                        "string" == typeof e && (e = {text: e}), this._signal("paste", e);
                        var t = e.text, i = t == y.lineMode, n = this.session;
                        if (!this.inMultiSelectMode || this.inVirtualSelectionMode) i ? n.insert({
                            row: this.selection.lead.row,
                            column: 0
                        }, t) : this.insert(t); else if (i) this.selection.rangeList.ranges.forEach((function (e) {
                            n.insert({row: e.start.row, column: 0}, t)
                        })); else {
                            var s = t.split(/\r\n|\r|\n/), o = this.selection.rangeList.ranges,
                                r = 2 == s.length && (!s[0] || !s[1]);
                            if (s.length != o.length || r) return this.commands.exec("insertstring", this, t);
                            for (var a = o.length; a--;) {
                                var l = o[a];
                                l.isEmpty() || n.remove(l), n.insert(l.start, s[a])
                            }
                        }
                    }, this.execCommand = function (e, t) {
                        return this.commands.exec(e, this, t)
                    }, this.insert = function (e, t) {
                        var i = this.session, n = i.getMode(), s = this.getCursorPosition();
                        if (this.getBehavioursEnabled() && !t) {
                            var o = n.transformAction(i.getState(s.row), "insertion", this, i, e);
                            o && (e !== o.text && (this.inVirtualSelectionMode || (this.session.mergeUndoDeltas = !1, this.mergeNextCommand = !1)), e = o.text)
                        }
                        if ("\t" == e && (e = this.session.getTabString()), this.selection.isEmpty()) {
                            if (this.session.getOverwrite() && -1 == e.indexOf("\n")) {
                                r = new f.fromPoints(s, s);
                                r.end.column += e.length, this.session.remove(r)
                            }
                        } else {
                            var r = this.getSelectionRange();
                            s = this.session.remove(r), this.clearSelection()
                        }
                        if ("\n" == e || "\r\n" == e) {
                            var a = i.getLine(s.row);
                            if (s.column > a.search(/\S|$/)) {
                                var l = a.substr(s.column).search(/\S|$/);
                                i.doc.removeInLine(s.row, s.column, s.column + l)
                            }
                        }
                        this.clearSelection();
                        var c = s.column, h = i.getState(s.row), u = (a = i.getLine(s.row), n.checkOutdent(h, a, e));
                        if (i.insert(s, e), o && o.selection && (2 == o.selection.length ? this.selection.setSelectionRange(new f(s.row, c + o.selection[0], s.row, c + o.selection[1])) : this.selection.setSelectionRange(new f(s.row + o.selection[0], o.selection[1], s.row + o.selection[2], o.selection[3]))), i.getDocument().isNewLine(e)) {
                            var d = n.getNextLineIndent(h, a.slice(0, s.column), i.getTabString());
                            i.insert({row: s.row + 1, column: 0}, d)
                        }
                        u && n.autoOutdent(h, i, s.row)
                    }, this.onTextInput = function (e, t) {
                        if (!t) return this.keyBinding.onTextInput(e);
                        this.startOperation({command: {name: "insertstring"}});
                        var i = this.applyComposition.bind(this, e, t);
                        this.selection.rangeCount ? this.forEachSelection(i) : i(), this.endOperation()
                    }, this.applyComposition = function (e, t) {
                        if (t.extendLeft || t.extendRight) {
                            var i = this.selection.getRange();
                            i.start.column -= t.extendLeft, i.end.column += t.extendRight, this.selection.setRange(i), e || i.isEmpty() || this.remove()
                        }
                        if (!e && this.selection.isEmpty() || this.insert(e, !0), t.restoreStart || t.restoreEnd) {
                            i = this.selection.getRange();
                            i.start.column -= t.restoreStart, i.end.column -= t.restoreEnd, this.selection.setRange(i)
                        }
                    }, this.onCommandKey = function (e, t, i) {
                        this.keyBinding.onCommandKey(e, t, i)
                    }, this.setOverwrite = function (e) {
                        this.session.setOverwrite(e)
                    }, this.getOverwrite = function () {
                        return this.session.getOverwrite()
                    }, this.toggleOverwrite = function () {
                        this.session.toggleOverwrite()
                    }, this.setScrollSpeed = function (e) {
                        this.setOption("scrollSpeed", e)
                    }, this.getScrollSpeed = function () {
                        return this.getOption("scrollSpeed")
                    }, this.setDragDelay = function (e) {
                        this.setOption("dragDelay", e)
                    }, this.getDragDelay = function () {
                        return this.getOption("dragDelay")
                    }, this.setSelectionStyle = function (e) {
                        this.setOption("selectionStyle", e)
                    }, this.getSelectionStyle = function () {
                        return this.getOption("selectionStyle")
                    }, this.setHighlightActiveLine = function (e) {
                        this.setOption("highlightActiveLine", e)
                    }, this.getHighlightActiveLine = function () {
                        return this.getOption("highlightActiveLine")
                    }, this.setHighlightGutterLine = function (e) {
                        this.setOption("highlightGutterLine", e)
                    }, this.getHighlightGutterLine = function () {
                        return this.getOption("highlightGutterLine")
                    }, this.setHighlightSelectedWord = function (e) {
                        this.setOption("highlightSelectedWord", e)
                    }, this.getHighlightSelectedWord = function () {
                        return this.$highlightSelectedWord
                    }, this.setAnimatedScroll = function (e) {
                        this.renderer.setAnimatedScroll(e)
                    }, this.getAnimatedScroll = function () {
                        return this.renderer.getAnimatedScroll()
                    }, this.setShowInvisibles = function (e) {
                        this.renderer.setShowInvisibles(e)
                    }, this.getShowInvisibles = function () {
                        return this.renderer.getShowInvisibles()
                    }, this.setDisplayIndentGuides = function (e) {
                        this.renderer.setDisplayIndentGuides(e)
                    }, this.getDisplayIndentGuides = function () {
                        return this.renderer.getDisplayIndentGuides()
                    }, this.setShowPrintMargin = function (e) {
                        this.renderer.setShowPrintMargin(e)
                    }, this.getShowPrintMargin = function () {
                        return this.renderer.getShowPrintMargin()
                    }, this.setPrintMarginColumn = function (e) {
                        this.renderer.setPrintMarginColumn(e)
                    }, this.getPrintMarginColumn = function () {
                        return this.renderer.getPrintMarginColumn()
                    }, this.setReadOnly = function (e) {
                        this.setOption("readOnly", e)
                    }, this.getReadOnly = function () {
                        return this.getOption("readOnly")
                    }, this.setBehavioursEnabled = function (e) {
                        this.setOption("behavioursEnabled", e)
                    }, this.getBehavioursEnabled = function () {
                        return this.getOption("behavioursEnabled")
                    }, this.setWrapBehavioursEnabled = function (e) {
                        this.setOption("wrapBehavioursEnabled", e)
                    }, this.getWrapBehavioursEnabled = function () {
                        return this.getOption("wrapBehavioursEnabled")
                    }, this.setShowFoldWidgets = function (e) {
                        this.setOption("showFoldWidgets", e)
                    }, this.getShowFoldWidgets = function () {
                        return this.getOption("showFoldWidgets")
                    }, this.setFadeFoldWidgets = function (e) {
                        this.setOption("fadeFoldWidgets", e)
                    }, this.getFadeFoldWidgets = function () {
                        return this.getOption("fadeFoldWidgets")
                    }, this.remove = function (e) {
                        this.selection.isEmpty() && ("left" == e ? this.selection.selectLeft() : this.selection.selectRight());
                        var t = this.getSelectionRange();
                        if (this.getBehavioursEnabled()) {
                            var i = this.session, n = i.getState(t.start.row),
                                s = i.getMode().transformAction(n, "deletion", this, i, t);
                            if (0 === t.end.column) {
                                var o = i.getTextRange(t);
                                if ("\n" == o[o.length - 1]) {
                                    var r = i.getLine(t.end.row);
                                    /^\s+$/.test(r) && (t.end.column = r.length)
                                }
                            }
                            s && (t = s)
                        }
                        this.session.remove(t), this.clearSelection()
                    }, this.removeWordRight = function () {
                        this.selection.isEmpty() && this.selection.selectWordRight(), this.session.remove(this.getSelectionRange()), this.clearSelection()
                    }, this.removeWordLeft = function () {
                        this.selection.isEmpty() && this.selection.selectWordLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection()
                    }, this.removeToLineStart = function () {
                        this.selection.isEmpty() && this.selection.selectLineStart(), this.selection.isEmpty() && this.selection.selectLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection()
                    }, this.removeToLineEnd = function () {
                        this.selection.isEmpty() && this.selection.selectLineEnd();
                        var e = this.getSelectionRange();
                        e.start.column == e.end.column && e.start.row == e.end.row && (e.end.column = 0, e.end.row++), this.session.remove(e), this.clearSelection()
                    }, this.splitLine = function () {
                        this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()), this.clearSelection());
                        var e = this.getCursorPosition();
                        this.insert("\n"), this.moveCursorToPosition(e)
                    }, this.transposeLetters = function () {
                        if (this.selection.isEmpty()) {
                            var e = this.getCursorPosition(), t = e.column;
                            if (0 !== t) {
                                var i, n, s = this.session.getLine(e.row);
                                t < s.length ? (i = s.charAt(t) + s.charAt(t - 1), n = new f(e.row, t - 1, e.row, t + 1)) : (i = s.charAt(t - 1) + s.charAt(t - 2), n = new f(e.row, t - 2, e.row, t)), this.session.replace(n, i), this.session.selection.moveToPosition(n.end)
                            }
                        }
                    }, this.toLowerCase = function () {
                        var e = this.getSelectionRange();
                        this.selection.isEmpty() && this.selection.selectWord();
                        var t = this.getSelectionRange(), i = this.session.getTextRange(t);
                        this.session.replace(t, i.toLowerCase()), this.selection.setSelectionRange(e)
                    }, this.toUpperCase = function () {
                        var e = this.getSelectionRange();
                        this.selection.isEmpty() && this.selection.selectWord();
                        var t = this.getSelectionRange(), i = this.session.getTextRange(t);
                        this.session.replace(t, i.toUpperCase()), this.selection.setSelectionRange(e)
                    },this.indent = function () {
                        var e = this.session, t = this.getSelectionRange();
                        if (!(t.start.row < t.end.row)) {
                            if (t.start.column < t.end.column) {
                                var i = e.getTextRange(t);
                                if (!/^\s+$/.test(i)) {
                                    h = this.$getSelectedRows();
                                    return void e.indentRows(h.first, h.last, "\t")
                                }
                            }
                            var n = e.getLine(t.start.row), s = t.start, o = e.getTabSize(),
                                a = e.documentToScreenColumn(s.row, s.column);
                            if (this.session.getUseSoftTabs()) var l = o - a % o, c = r.stringRepeat(" ", l); else {
                                l = a % o;
                                while (" " == n[t.start.column - 1] && l) t.start.column--, l--;
                                this.selection.setSelectionRange(t), c = "\t"
                            }
                            return this.insert(c)
                        }
                        var h = this.$getSelectedRows();
                        e.indentRows(h.first, h.last, "\t")
                    },this.blockIndent = function () {
                        var e = this.$getSelectedRows();
                        this.session.indentRows(e.first, e.last, "\t")
                    },this.blockOutdent = function () {
                        var e = this.session.getSelection();
                        this.session.outdentRows(e.getRange())
                    },this.sortLines = function () {
                        for (var e = this.$getSelectedRows(), t = this.session, i = [], n = e.first; n <= e.last; n++) i.push(t.getLine(n));
                        i.sort((function (e, t) {
                            return e.toLowerCase() < t.toLowerCase() ? -1 : e.toLowerCase() > t.toLowerCase() ? 1 : 0
                        }));
                        var s = new f(0, 0, 0, 0);
                        for (n = e.first; n <= e.last; n++) {
                            var o = t.getLine(n);
                            s.start.row = n, s.end.row = n, s.end.column = o.length, t.replace(s, i[n - e.first])
                        }
                    },this.toggleCommentLines = function () {
                        var e = this.session.getState(this.getCursorPosition().row), t = this.$getSelectedRows();
                        this.session.getMode().toggleCommentLines(e, this.session, t.first, t.last)
                    },this.toggleBlockComment = function () {
                        var e = this.getCursorPosition(), t = this.session.getState(e.row),
                            i = this.getSelectionRange();
                        this.session.getMode().toggleBlockComment(t, this.session, i, e)
                    },this.getNumberAt = function (e, t) {
                        var i = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
                        i.lastIndex = 0;
                        var n = this.session.getLine(e);
                        while (i.lastIndex < t) {
                            var s = i.exec(n);
                            if (s.index <= t && s.index + s[0].length >= t) {
                                var o = {value: s[0], start: s.index, end: s.index + s[0].length};
                                return o
                            }
                        }
                        return null
                    },this.modifyNumber = function (e) {
                        var t = this.selection.getCursor().row, i = this.selection.getCursor().column,
                            n = new f(t, i - 1, t, i), s = this.session.getTextRange(n);
                        if (!isNaN(parseFloat(s)) && isFinite(s)) {
                            var o = this.getNumberAt(t, i);
                            if (o) {
                                var r = o.value.indexOf(".") >= 0 ? o.start + o.value.indexOf(".") + 1 : o.end,
                                    a = o.start + o.value.length - r, l = parseFloat(o.value);
                                l *= Math.pow(10, a), r !== o.end && i < r ? e *= Math.pow(10, o.end - i - 1) : e *= Math.pow(10, o.end - i), l += e, l /= Math.pow(10, a);
                                var c = l.toFixed(a), h = new f(t, o.start, t, o.end);
                                this.session.replace(h, c), this.moveCursorTo(t, Math.max(o.start + 1, i + c.length - o.value.length))
                            }
                        } else this.toggleWord()
                    },this.$toggleWordPairs = [["first", "last"], ["true", "false"], ["yes", "no"], ["width", "height"], ["top", "bottom"], ["right", "left"], ["on", "off"], ["x", "y"], ["get", "set"], ["max", "min"], ["horizontal", "vertical"], ["show", "hide"], ["add", "remove"], ["up", "down"], ["before", "after"], ["even", "odd"], ["inside", "outside"], ["next", "previous"], ["increase", "decrease"], ["attach", "detach"], ["&&", "||"], ["==", "!="]],this.toggleWord = function () {
                        var e = this.selection.getCursor().row, t = this.selection.getCursor().column;
                        this.selection.selectWord();
                        var i = this.getSelectedText(), n = this.selection.getWordRange().start.column,
                            s = i.replace(/([a-z]+|[A-Z]+)(?=[A-Z_]|$)/g, "$1 ").split(/\s/), o = t - n - 1;
                        o < 0 && (o = 0);
                        var a = 0, l = 0, c = this;
                        i.match(/[A-Za-z0-9_]+/) && s.forEach((function (t, s) {
                            l = a + t.length, o >= a && o <= l && (i = t, c.selection.clearSelection(), c.moveCursorTo(e, a + n), c.selection.selectTo(e, l + n)), a = l
                        }));
                        for (var h, u = this.$toggleWordPairs, d = 0; d < u.length; d++) for (var g = u[d], f = 0; f <= 1; f++) {
                            var p = +!f, m = i.match(new RegExp("^\\s?_?(" + r.escapeRegExp(g[f]) + ")\\s?$", "i"));
                            if (m) {
                                var v = i.match(new RegExp("([_]|^|\\s)(" + r.escapeRegExp(m[1]) + ")($|\\s)", "g"));
                                v && (h = i.replace(new RegExp(r.escapeRegExp(g[f]), "i"), (function (e) {
                                    var t = g[p];
                                    return e.toUpperCase() == e ? t = t.toUpperCase() : e.charAt(0).toUpperCase() == e.charAt(0) && (t = t.substr(0, 0) + g[p].charAt(0).toUpperCase() + t.substr(1)), t
                                })), this.insert(h), h = "")
                            }
                        }
                    },this.removeLines = function () {
                        var e = this.$getSelectedRows();
                        this.session.removeFullLines(e.first, e.last), this.clearSelection()
                    },this.duplicateSelection = function () {
                        var e = this.selection, t = this.session, i = e.getRange(), n = e.isBackwards();
                        if (i.isEmpty()) {
                            var s = i.start.row;
                            t.duplicateLines(s, s)
                        } else {
                            var o = n ? i.start : i.end, r = t.insert(o, t.getTextRange(i), !1);
                            i.start = o, i.end = r, e.setSelectionRange(i, n)
                        }
                    },this.moveLinesDown = function () {
                        this.$moveLines(1, !1)
                    },this.moveLinesUp = function () {
                        this.$moveLines(-1, !1)
                    },this.moveText = function (e, t, i) {
                        return this.session.moveText(e, t, i)
                    },this.copyLinesUp = function () {
                        this.$moveLines(-1, !0)
                    },this.copyLinesDown = function () {
                        this.$moveLines(1, !0)
                    },this.$moveLines = function (e, t) {
                        var i, n, s = this.selection;
                        if (!s.inMultiSelectMode || this.inVirtualSelectionMode) {
                            var o = s.toOrientedRange();
                            i = this.$getSelectedRows(o), n = this.session.$moveLines(i.first, i.last, t ? 0 : e), t && -1 == e && (n = 0), o.moveBy(n, 0), s.fromOrientedRange(o)
                        } else {
                            var r = s.rangeList.ranges;
                            s.rangeList.detach(this.session), this.inVirtualSelectionMode = !0;
                            for (var a = 0, l = 0, c = r.length, h = 0; h < c; h++) {
                                var u = h;
                                r[h].moveBy(a, 0), i = this.$getSelectedRows(r[h]);
                                var d = i.first, g = i.last;
                                while (++h < c) {
                                    l && r[h].moveBy(l, 0);
                                    var f = this.$getSelectedRows(r[h]);
                                    if (t && f.first != g) break;
                                    if (!t && f.first > g + 1) break;
                                    g = f.last
                                }
                                h--, a = this.session.$moveLines(d, g, t ? 0 : e), t && -1 == e && (u = h + 1);
                                while (u <= h) r[u].moveBy(a, 0), u++;
                                t || (a = 0), l += a
                            }
                            s.fromOrientedRange(s.ranges[0]), s.rangeList.attach(this.session), this.inVirtualSelectionMode = !1
                        }
                    },this.$getSelectedRows = function (e) {
                        return e = (e || this.getSelectionRange()).collapseRows(), {
                            first: this.session.getRowFoldStart(e.start.row),
                            last: this.session.getRowFoldEnd(e.end.row)
                        }
                    },this.onCompositionStart = function (e) {
                        this.renderer.showComposition(e)
                    },this.onCompositionUpdate = function (e) {
                        this.renderer.setCompositionText(e)
                    },this.onCompositionEnd = function () {
                        this.renderer.hideComposition()
                    },this.getFirstVisibleRow = function () {
                        return this.renderer.getFirstVisibleRow()
                    },this.getLastVisibleRow = function () {
                        return this.renderer.getLastVisibleRow()
                    },this.isRowVisible = function (e) {
                        return e >= this.getFirstVisibleRow() && e <= this.getLastVisibleRow()
                    },this.isRowFullyVisible = function (e) {
                        return e >= this.renderer.getFirstFullyVisibleRow() && e <= this.renderer.getLastFullyVisibleRow()
                    },this.$getVisibleRowCount = function () {
                        return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1
                    },this.$moveByPage = function (e, t) {
                        var i = this.renderer, n = this.renderer.layerConfig,
                            s = e * Math.floor(n.height / n.lineHeight);
                        !0 === t ? this.selection.$moveSelection((function () {
                            this.moveCursorBy(s, 0)
                        })) : !1 === t && (this.selection.moveCursorBy(s, 0), this.selection.clearSelection());
                        var o = i.scrollTop;
                        i.scrollBy(0, s * n.lineHeight), null != t && i.scrollCursorIntoView(null, .5), i.animateScrolling(o)
                    },this.selectPageDown = function () {
                        this.$moveByPage(1, !0)
                    },this.selectPageUp = function () {
                        this.$moveByPage(-1, !0)
                    },this.gotoPageDown = function () {
                        this.$moveByPage(1, !1)
                    },this.gotoPageUp = function () {
                        this.$moveByPage(-1, !1)
                    },this.scrollPageDown = function () {
                        this.$moveByPage(1)
                    },this.scrollPageUp = function () {
                        this.$moveByPage(-1)
                    },this.scrollToRow = function (e) {
                        this.renderer.scrollToRow(e)
                    },this.scrollToLine = function (e, t, i, n) {
                        this.renderer.scrollToLine(e, t, i, n)
                    },this.centerSelection = function () {
                        var e = this.getSelectionRange(), t = {
                            row: Math.floor(e.start.row + (e.end.row - e.start.row) / 2),
                            column: Math.floor(e.start.column + (e.end.column - e.start.column) / 2)
                        };
                        this.renderer.alignCursor(t, .5)
                    },this.getCursorPosition = function () {
                        return this.selection.getCursor()
                    },this.getCursorPositionScreen = function () {
                        return this.session.documentToScreenPosition(this.getCursorPosition())
                    },this.getSelectionRange = function () {
                        return this.selection.getRange()
                    },this.selectAll = function () {
                        this.selection.selectAll()
                    },this.clearSelection = function () {
                        this.selection.clearSelection()
                    },this.moveCursorTo = function (e, t) {
                        this.selection.moveCursorTo(e, t)
                    },this.moveCursorToPosition = function (e) {
                        this.selection.moveCursorToPosition(e)
                    },this.jumpToMatching = function (e, t) {
                        var i = this.getCursorPosition(), n = new b(this.session, i.row, i.column),
                            s = n.getCurrentToken(), o = s || n.stepForward();
                        if (o) {
                            var r, a, l = !1, c = {}, h = i.column - o.start,
                                u = {")": "(", "(": "(", "]": "[", "[": "[", "{": "{", "}": "{"};
                            do {
                                if (o.value.match(/[{}()\[\]]/g)) {
                                    for (; h < o.value.length && !l; h++) if (u[o.value[h]]) switch (a = u[o.value[h]] + "." + o.type.replace("rparen", "lparen"), isNaN(c[a]) && (c[a] = 0), o.value[h]) {
                                        case"(":
                                        case"[":
                                        case"{":
                                            c[a]++;
                                            break;
                                        case")":
                                        case"]":
                                        case"}":
                                            c[a]--, -1 === c[a] && (r = "bracket", l = !0);
                                            break
                                    }
                                } else -1 !== o.type.indexOf("tag-name") && (isNaN(c[o.value]) && (c[o.value] = 0), "<" === s.value ? c[o.value]++ : "</" === s.value && c[o.value]--, -1 === c[o.value] && (r = "tag", l = !0));
                                l || (s = o, o = n.stepForward(), h = 0)
                            } while (o && !l);
                            if (r) {
                                var d, g;
                                if ("bracket" === r) d = this.session.getBracketRange(i), d || (d = new f(n.getCurrentTokenRow(), n.getCurrentTokenColumn() + h - 1, n.getCurrentTokenRow(), n.getCurrentTokenColumn() + h - 1), g = d.start, (t || g.row === i.row && Math.abs(g.column - i.column) < 2) && (d = this.session.getBracketRange(g))); else if ("tag" === r) {
                                    if (!o || -1 === o.type.indexOf("tag-name")) return;
                                    var p = o.value;
                                    if (d = new f(n.getCurrentTokenRow(), n.getCurrentTokenColumn() - 2, n.getCurrentTokenRow(), n.getCurrentTokenColumn() - 2), 0 === d.compare(i.row, i.column)) {
                                        l = !1;
                                        do {
                                            o = s, s = n.stepBackward(), s && (-1 !== s.type.indexOf("tag-close") && d.setEnd(n.getCurrentTokenRow(), n.getCurrentTokenColumn() + 1), o.value === p && -1 !== o.type.indexOf("tag-name") && ("<" === s.value ? c[p]++ : "</" === s.value && c[p]--, 0 === c[p] && (l = !0)))
                                        } while (s && !l)
                                    }
                                    o && o.type.indexOf("tag-name") && (g = d.start, g.row == i.row && Math.abs(g.column - i.column) < 2 && (g = d.end))
                                }
                                g = d && d.cursor || g, g && (e ? d && t ? this.selection.setRange(d) : d && d.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(g.row, g.column) : this.selection.moveTo(g.row, g.column))
                            }
                        }
                    },this.gotoLine = function (e, t, i) {
                        this.selection.clearSelection(), this.session.unfold({
                            row: e - 1,
                            column: t || 0
                        }), this.exitMultiSelectMode && this.exitMultiSelectMode(), this.moveCursorTo(e - 1, t || 0), this.isRowFullyVisible(e - 1) || this.scrollToLine(e - 1, !0, i)
                    },this.navigateTo = function (e, t) {
                        this.selection.moveTo(e, t)
                    },this.navigateUp = function (e) {
                        if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
                            var t = this.selection.anchor.getPosition();
                            return this.moveCursorToPosition(t)
                        }
                        this.selection.clearSelection(), this.selection.moveCursorBy(-e || -1, 0)
                    },this.navigateDown = function (e) {
                        if (this.selection.isMultiLine() && this.selection.isBackwards()) {
                            var t = this.selection.anchor.getPosition();
                            return this.moveCursorToPosition(t)
                        }
                        this.selection.clearSelection(), this.selection.moveCursorBy(e || 1, 0)
                    },this.navigateLeft = function (e) {
                        if (this.selection.isEmpty()) {
                            e = e || 1;
                            while (e--) this.selection.moveCursorLeft()
                        } else {
                            var t = this.getSelectionRange().start;
                            this.moveCursorToPosition(t)
                        }
                        this.clearSelection()
                    },this.navigateRight = function (e) {
                        if (this.selection.isEmpty()) {
                            e = e || 1;
                            while (e--) this.selection.moveCursorRight()
                        } else {
                            var t = this.getSelectionRange().end;
                            this.moveCursorToPosition(t)
                        }
                        this.clearSelection()
                    },this.navigateLineStart = function () {
                        this.selection.moveCursorLineStart(), this.clearSelection()
                    },this.navigateLineEnd = function () {
                        this.selection.moveCursorLineEnd(), this.clearSelection()
                    },this.navigateFileEnd = function () {
                        this.selection.moveCursorFileEnd(), this.clearSelection()
                    },this.navigateFileStart = function () {
                        this.selection.moveCursorFileStart(), this.clearSelection()
                    },this.navigateWordRight = function () {
                        this.selection.moveCursorWordRight(), this.clearSelection()
                    },this.navigateWordLeft = function () {
                        this.selection.moveCursorWordLeft(), this.clearSelection()
                    },this.replace = function (e, t) {
                        t && this.$search.set(t);
                        var i = this.$search.find(this.session), n = 0;
                        return i ? (this.$tryReplace(i, e) && (n = 1), this.selection.setSelectionRange(i), this.renderer.scrollSelectionIntoView(i.start, i.end), n) : n
                    },this.replaceAll = function (e, t) {
                        t && this.$search.set(t);
                        var i = this.$search.findAll(this.session), n = 0;
                        if (!i.length) return n;
                        var s = this.getSelectionRange();
                        this.selection.moveTo(0, 0);
                        for (var o = i.length - 1; o >= 0; --o) this.$tryReplace(i[o], e) && n++;
                        return this.selection.setSelectionRange(s), n
                    },this.$tryReplace = function (e, t) {
                        var i = this.session.getTextRange(e);
                        return t = this.$search.replace(i, t), null !== t ? (e.end = this.session.replace(e, t), e) : null
                    },this.getLastSearchOptions = function () {
                        return this.$search.getOptions()
                    },this.find = function (e, i, n) {
                        i || (i = {}), "string" == typeof e || e instanceof RegExp ? i.needle = e : "object" == Object(t["a"])(e) && s.mixin(i, e);
                        var o = this.selection.getRange();
                        null == i.needle && (e = this.session.getTextRange(o) || this.$search.$options.needle, e || (o = this.session.getWordRange(o.start.row, o.start.column), e = this.session.getTextRange(o)), this.$search.set({needle: e})), this.$search.set(i), i.start || this.$search.set({start: o});
                        var r = this.$search.find(this.session);
                        return i.preventScroll ? r : r ? (this.revealRange(r, n), r) : (i.backwards ? o.start = o.end : o.end = o.start, void this.selection.setRange(o))
                    },this.findNext = function (e, t) {
                        this.find({skipCurrent: !0, backwards: !1}, e, t)
                    },this.findPrevious = function (e, t) {
                        this.find(e, {skipCurrent: !0, backwards: !0}, t)
                    },this.revealRange = function (e, t) {
                        this.session.unfold(e), this.selection.setSelectionRange(e);
                        var i = this.renderer.scrollTop;
                        this.renderer.scrollSelectionIntoView(e.start, e.end, .5), !1 !== t && this.renderer.animateScrolling(i)
                    },this.undo = function () {
                        this.session.getUndoManager().undo(this.session), this.renderer.scrollCursorIntoView(null, .5)
                    },this.redo = function () {
                        this.session.getUndoManager().redo(this.session), this.renderer.scrollCursorIntoView(null, .5)
                    },this.destroy = function () {
                        this.renderer.destroy(), this._signal("destroy", this), this.session && this.session.destroy()
                    },this.setAutoScrollEditorIntoView = function (e) {
                        if (e) {
                            var t, i = this, n = !1;
                            this.$scrollAnchor || (this.$scrollAnchor = document.createElement("div"));
                            var s = this.$scrollAnchor;
                            s.style.cssText = "position:absolute", this.container.insertBefore(s, this.container.firstChild);
                            var o = this.on("changeSelection", (function () {
                                n = !0
                            })), r = this.renderer.on("beforeRender", (function () {
                                n && (t = i.renderer.container.getBoundingClientRect())
                            })), a = this.renderer.on("afterRender", (function () {
                                if (n && t && (i.isFocused() || i.searchBox && i.searchBox.isFocused())) {
                                    var e = i.renderer, o = e.$cursorLayer.$pixelPos, r = e.layerConfig,
                                        a = o.top - r.offset;
                                    n = o.top >= 0 && a + t.top < 0 || !(o.top < r.height && o.top + t.top + r.lineHeight > window.innerHeight) && null, null != n && (s.style.top = a + "px", s.style.left = o.left + "px", s.style.height = r.lineHeight + "px", s.scrollIntoView(n)), n = t = null
                                }
                            }));
                            this.setAutoScrollEditorIntoView = function (e) {
                                e || (delete this.setAutoScrollEditorIntoView, this.off("changeSelection", o), this.renderer.off("afterRender", a), this.renderer.off("beforeRender", r))
                            }
                        }
                    },this.$resetCursorStyle = function () {
                        var e = this.$cursorStyle || "ace", t = this.renderer.$cursorLayer;
                        t && (t.setSmoothBlinking(/smooth/.test(e)), t.isBlinking = !this.$readOnly && "wide" != e, o.setCssClass(t.element, "ace_slim-cursors", /slim/.test(e)))
                    },this.prompt = function (e, t, i) {
                        var n = this;
                        w.loadModule("./ext/prompt", (function (s) {
                            s.prompt(n, e, t, i)
                        }))
                    }
                }.call($.prototype), w.defineOptions($.prototype, "editor", {
                    selectionStyle: {
                        set: function (e) {
                            this.onSelectionChange(), this._signal("changeSelectionStyle", {data: e})
                        }, initialValue: "line"
                    },
                    highlightActiveLine: {
                        set: function () {
                            this.$updateHighlightActiveLine()
                        }, initialValue: !0
                    },
                    highlightSelectedWord: {
                        set: function (e) {
                            this.$onSelectionChange()
                        }, initialValue: !0
                    },
                    readOnly: {
                        set: function (e) {
                            this.textInput.setReadOnly(e), this.$resetCursorStyle()
                        }, initialValue: !1
                    },
                    copyWithEmptySelection: {
                        set: function (e) {
                            this.textInput.setCopyWithEmptySelection(e)
                        }, initialValue: !1
                    },
                    cursorStyle: {
                        set: function (e) {
                            this.$resetCursorStyle()
                        }, values: ["ace", "slim", "smooth", "wide"], initialValue: "ace"
                    },
                    mergeUndoDeltas: {values: [!1, !0, "always"], initialValue: !0},
                    behavioursEnabled: {initialValue: !0},
                    wrapBehavioursEnabled: {initialValue: !0},
                    autoScrollEditorIntoView: {
                        set: function (e) {
                            this.setAutoScrollEditorIntoView(e)
                        }
                    },
                    keyboardHandler: {
                        set: function (e) {
                            this.setKeyboardHandler(e)
                        }, get: function () {
                            return this.$keybindingId
                        }, handlesSet: !0
                    },
                    value: {
                        set: function (e) {
                            this.session.setValue(e)
                        }, get: function () {
                            return this.getValue()
                        }, handlesSet: !0, hidden: !0
                    },
                    session: {
                        set: function (e) {
                            this.setSession(e)
                        }, get: function () {
                            return this.session
                        }, handlesSet: !0, hidden: !0
                    },
                    showLineNumbers: {
                        set: function (e) {
                            this.renderer.$gutterLayer.setShowLineNumbers(e), this.renderer.$loop.schedule(this.renderer.CHANGE_GUTTER), e && this.$relativeLineNumbers ? S.attach(this) : S.detach(this)
                        }, initialValue: !0
                    },
                    relativeLineNumbers: {
                        set: function (e) {
                            this.$showLineNumbers && e ? S.attach(this) : S.detach(this)
                        }
                    },
                    hScrollBarAlwaysVisible: "renderer",
                    vScrollBarAlwaysVisible: "renderer",
                    highlightGutterLine: "renderer",
                    animatedScroll: "renderer",
                    showInvisibles: "renderer",
                    showPrintMargin: "renderer",
                    printMarginColumn: "renderer",
                    printMargin: "renderer",
                    fadeFoldWidgets: "renderer",
                    showFoldWidgets: "renderer",
                    displayIndentGuides: "renderer",
                    showGutter: "renderer",
                    fontSize: "renderer",
                    fontFamily: "renderer",
                    maxLines: "renderer",
                    minLines: "renderer",
                    scrollPastEnd: "renderer",
                    fixedWidthGutter: "renderer",
                    theme: "renderer",
                    hasCssTransforms: "renderer",
                    maxPixelHeight: "renderer",
                    useTextareaForIME: "renderer",
                    scrollSpeed: "$mouseHandler",
                    dragDelay: "$mouseHandler",
                    dragEnabled: "$mouseHandler",
                    focusTimeout: "$mouseHandler",
                    tooltipFollowsMouse: "$mouseHandler",
                    firstLineNumber: "session",
                    overwrite: "session",
                    newLineMode: "session",
                    useWorker: "session",
                    useSoftTabs: "session",
                    navigateWithinSoftTabs: "session",
                    tabSize: "session",
                    wrap: "session",
                    indentedSoftWrap: "session",
                    foldStyle: "session",
                    mode: "session"
                });
                var S = {
                    getText: function (e, t) {
                        return (Math.abs(e.selection.lead.row - t) || t + 1 + (t < 9 ? "·" : "")) + ""
                    }, getWidth: function (e, t, i) {
                        return Math.max(t.toString().length, (i.lastRow + 1).toString().length, 2) * i.characterWidth
                    }, update: function (e, t) {
                        t.renderer.$loop.schedule(t.renderer.CHANGE_GUTTER)
                    }, attach: function (e) {
                        e.renderer.$gutterLayer.$renderer = this, e.on("changeSelection", this.update), this.update(null, e)
                    }, detach: function (e) {
                        e.renderer.$gutterLayer.$renderer == this && (e.renderer.$gutterLayer.$renderer = null), e.off("changeSelection", this.update), this.update(null, e)
                    }
                };
                i.Editor = $
            })), deAceFine("ace/undomanager", ["require", "exports", "module", "ace/range"], (function (e, t, i) {
                var n = function () {
                    this.$maxRev = 0, this.$fromUndo = !1, this.reset()
                };

                function s(e, t) {
                    for (var i = t; i--;) {
                        var n = e[i];
                        if (n && !n[0].ignore) {
                            while (i < t - 1) {
                                var s = d(e[i], e[i + 1]);
                                e[i] = s[0], e[i + 1] = s[1], i++
                            }
                            return !0
                        }
                    }
                }

                (function () {
                    this.addSession = function (e) {
                        this.$session = e
                    }, this.add = function (e, t, i) {
                        this.$fromUndo || e != this.$lastDelta && (!1 !== t && this.lastDeltas || (this.lastDeltas = [], this.$undoStack.push(this.lastDeltas), e.id = this.$rev = ++this.$maxRev), "remove" != e.action && "insert" != e.action || (this.$lastDelta = e), this.lastDeltas.push(e))
                    }, this.addSelection = function (e, t) {
                        this.selections.push({value: e, rev: t || this.$rev})
                    }, this.startNewGroup = function () {
                        return this.lastDeltas = null, this.$rev
                    }, this.markIgnored = function (e, t) {
                        null == t && (t = this.$rev + 1);
                        for (var i = this.$undoStack, n = i.length; n--;) {
                            var s = i[n][0];
                            if (s.id <= e) break;
                            s.id < t && (s.ignore = !0)
                        }
                        this.lastDeltas = null
                    }, this.getSelection = function (e, t) {
                        for (var i = this.selections, n = i.length; n--;) {
                            var s = i[n];
                            if (s.rev < e) return t && (s = i[n + 1]), s
                        }
                    }, this.getRevision = function () {
                        return this.$rev
                    }, this.getDeltas = function (e, t) {
                        null == t && (t = this.$rev + 1);
                        for (var i = this.$undoStack, n = null, s = 0, o = i.length; o--;) {
                            var r = i[o][0];
                            if (r.id < t && !n && (n = o + 1), r.id <= e) {
                                s = o + 1;
                                break
                            }
                        }
                        return i.slice(s, n)
                    }, this.getChangedRanges = function (e, t) {
                        null == t && (t = this.$rev + 1)
                    }, this.getChangedLines = function (e, t) {
                        null == t && (t = this.$rev + 1)
                    }, this.undo = function (e, t) {
                        this.lastDeltas = null;
                        var i = this.$undoStack;
                        if (s(i, i.length)) {
                            e || (e = this.$session), this.$redoStackBaseRev !== this.$rev && this.$redoStack.length && (this.$redoStack = []), this.$fromUndo = !0;
                            var n = i.pop(), o = null;
                            return n && n.length && (o = e.undoChanges(n, t), this.$redoStack.push(n), this.$syncRev()), this.$fromUndo = !1, o
                        }
                    }, this.redo = function (e, t) {
                        if (this.lastDeltas = null, e || (e = this.$session), this.$fromUndo = !0, this.$redoStackBaseRev != this.$rev) {
                            var i = this.getDeltas(this.$redoStackBaseRev, this.$rev + 1);
                            w(this.$redoStack, i), this.$redoStackBaseRev = this.$rev, this.$redoStack.forEach((function (e) {
                                e[0].id = ++this.$maxRev
                            }), this)
                        }
                        var n = this.$redoStack.pop(), s = null;
                        return n && (s = e.redoChanges(n, t), this.$undoStack.push(n), this.$syncRev()), this.$fromUndo = !1, s
                    }, this.$syncRev = function () {
                        var e = this.$undoStack, t = e[e.length - 1], i = t && t[0].id || 0;
                        this.$redoStackBaseRev = i, this.$rev = i
                    }, this.reset = function () {
                        this.lastDeltas = null, this.$lastDelta = null, this.$undoStack = [], this.$redoStack = [], this.$rev = 0, this.mark = 0, this.$redoStackBaseRev = this.$rev, this.selections = []
                    }, this.canUndo = function () {
                        return this.$undoStack.length > 0
                    }, this.canRedo = function () {
                        return this.$redoStack.length > 0
                    }, this.bookmark = function (e) {
                        void 0 == e && (e = this.$rev), this.mark = e
                    }, this.isAtBookmark = function () {
                        return this.$rev === this.mark
                    }, this.toJSON = function () {
                    }, this.fromJSON = function () {
                    }, this.hasUndo = this.canUndo, this.hasRedo = this.canRedo, this.isClean = this.isAtBookmark, this.markClean = this.bookmark, this.$prettyPrint = function (e) {
                        return e ? c(e) : c(this.$undoStack) + "\n---\n" + c(this.$redoStack)
                    }
                }).call(n.prototype);
                var o = e("./range").Range, r = o.comparePoints;
                o.comparePoints;

                function a(e) {
                    return {row: e.row, column: e.column}
                }

                function l(e) {
                    return {start: a(e.start), end: a(e.end), action: e.action, lines: e.lines.slice()}
                }

                function c(e) {
                    if (e = e || this, Array.isArray(e)) return e.map(c).join("\n");
                    var t = "";
                    return e.action ? (t = "insert" == e.action ? "+" : "-", t += "[" + e.lines + "]") : e.value && (t = Array.isArray(e.value) ? e.value.map(h).join("\n") : h(e.value)), e.start && (t += h(e)), (e.id || e.rev) && (t += "\t(" + (e.id || e.rev) + ")"), t
                }

                function h(e) {
                    return e.start.row + ":" + e.start.column + "=>" + e.end.row + ":" + e.end.column
                }

                function u(e, t) {
                    var i = "insert" == e.action, n = "insert" == t.action;
                    if (i && n) if (r(t.start, e.end) >= 0) f(t, e, -1); else {
                        if (!(r(t.start, e.start) <= 0)) return null;
                        f(e, t, 1)
                    } else if (i && !n) if (r(t.start, e.end) >= 0) f(t, e, -1); else {
                        if (!(r(t.end, e.start) <= 0)) return null;
                        f(e, t, -1)
                    } else if (!i && n) if (r(t.start, e.start) >= 0) f(t, e, 1); else {
                        if (!(r(t.start, e.start) <= 0)) return null;
                        f(e, t, 1)
                    } else if (!i && !n) if (r(t.start, e.start) >= 0) f(t, e, 1); else {
                        if (!(r(t.end, e.start) <= 0)) return null;
                        f(e, t, -1)
                    }
                    return [t, e]
                }

                function d(e, t) {
                    for (var i = e.length; i--;) for (var n = 0; n < t.length; n++) if (!u(e[i], t[n])) {
                        while (i < e.length) {
                            while (n--) u(t[n], e[i]);
                            n = t.length, i++
                        }
                        return [e, t]
                    }
                    return e.selectionBefore = t.selectionBefore = e.selectionAfter = t.selectionAfter = null, [t, e]
                }

                function g(e, t) {
                    var i = "insert" == e.action, n = "insert" == t.action;
                    if (i && n) r(e.start, t.start) < 0 ? f(t, e, 1) : f(e, t, 1); else if (i && !n) r(e.start, t.end) >= 0 ? f(e, t, -1) : r(e.start, t.start) <= 0 ? f(t, e, 1) : (f(e, o.fromPoints(t.start, e.start), -1), f(t, e, 1)); else if (!i && n) r(t.start, e.end) >= 0 ? f(t, e, -1) : r(t.start, e.start) <= 0 ? f(e, t, 1) : (f(t, o.fromPoints(e.start, t.start), -1), f(e, t, 1)); else if (!i && !n) if (r(t.start, e.end) >= 0) f(t, e, -1); else {
                        var s, a;
                        if (!(r(t.end, e.start) <= 0)) return r(e.start, t.start) < 0 && (s = e, e = m(e, t.start)), r(e.end, t.end) > 0 && (a = m(e, t.end)), p(t.end, e.start, e.end, -1), a && !s && (e.lines = a.lines, e.start = a.start, e.end = a.end, a = e), [t, s, a].filter(Boolean);
                        f(e, t, -1)
                    }
                    return [t, e]
                }

                function f(e, t, i) {
                    p(e.start, t.start, t.end, i), p(e.end, t.start, t.end, i)
                }

                function p(e, t, i, n) {
                    e.row == (1 == n ? t : i).row && (e.column += n * (i.column - t.column)), e.row += n * (i.row - t.row)
                }

                function m(e, t) {
                    var i = e.lines, n = e.end;
                    e.end = a(t);
                    var s = e.end.row - e.start.row, o = i.splice(s, i.length),
                        r = s ? t.column : t.column - e.start.column;
                    i.push(o[0].substring(0, r)), o[0] = o[0].substr(r);
                    var l = {start: a(t), end: n, lines: o, action: e.action};
                    return l
                }

                function v(e, t) {
                    t = l(t);
                    for (var i = e.length; i--;) {
                        for (var n = e[i], s = 0; s < n.length; s++) {
                            var o = n[s], r = g(o, t);
                            t = r[0], 2 != r.length && (r[2] ? (n.splice(s + 1, 1, r[1], r[2]), s++) : r[1] || (n.splice(s, 1), s--))
                        }
                        n.length || e.splice(i, 1)
                    }
                    return e
                }

                function w(e, t) {
                    for (var i = 0; i < t.length; i++) for (var n = t[i], s = 0; s < n.length; s++) v(e, n[s])
                }

                t.UndoManager = n
            })), deAceFine("ace/layer/lines", ["require", "exports", "module", "ace/lib/dom"], (function (e, t, i) {
                var n = e("../lib/dom"), s = function (e, t) {
                    this.element = e, this.canvasHeight = t || 5e5, this.element.style.height = 2 * this.canvasHeight + "px", this.cells = [], this.cellCache = [], this.$offsetCoefficient = 0
                };
                (function () {
                    this.moveContainer = function (e) {
                        n.translate(this.element, 0, -e.firstRowScreen * e.lineHeight % this.canvasHeight - e.offset * this.$offsetCoefficient)
                    }, this.pageChanged = function (e, t) {
                        return Math.floor(e.firstRowScreen * e.lineHeight / this.canvasHeight) !== Math.floor(t.firstRowScreen * t.lineHeight / this.canvasHeight)
                    }, this.computeLineTop = function (e, t, i) {
                        var n = t.firstRowScreen * t.lineHeight, s = Math.floor(n / this.canvasHeight),
                            o = i.documentToScreenRow(e, 0) * t.lineHeight;
                        return o - s * this.canvasHeight
                    }, this.computeLineHeight = function (e, t, i) {
                        return t.lineHeight * i.getRowLength(e)
                    }, this.getLength = function () {
                        return this.cells.length
                    }, this.get = function (e) {
                        return this.cells[e]
                    }, this.shift = function () {
                        this.$cacheCell(this.cells.shift())
                    }, this.pop = function () {
                        this.$cacheCell(this.cells.pop())
                    }, this.push = function (e) {
                        if (Array.isArray(e)) {
                            this.cells.push.apply(this.cells, e);
                            for (var t = n.createFragment(this.element), i = 0; i < e.length; i++) t.appendChild(e[i].element);
                            this.element.appendChild(t)
                        } else this.cells.push(e), this.element.appendChild(e.element)
                    }, this.unshift = function (e) {
                        if (Array.isArray(e)) {
                            this.cells.unshift.apply(this.cells, e);
                            for (var t = n.createFragment(this.element), i = 0; i < e.length; i++) t.appendChild(e[i].element);
                            this.element.firstChild ? this.element.insertBefore(t, this.element.firstChild) : this.element.appendChild(t)
                        } else this.cells.unshift(e), this.element.insertAdjacentElement("afterbegin", e.element)
                    }, this.last = function () {
                        return this.cells.length ? this.cells[this.cells.length - 1] : null
                    }, this.$cacheCell = function (e) {
                        e && (e.element.remove(), this.cellCache.push(e))
                    }, this.createCell = function (e, t, i, s) {
                        var o = this.cellCache.pop();
                        if (!o) {
                            var r = n.createElement("div");
                            s && s(r), this.element.appendChild(r), o = {element: r, text: "", row: e}
                        }
                        return o.row = e, o
                    }
                }).call(s.prototype), t.Lines = s
            })), deAceFine("ace/layer/gutter", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/layer/lines"], (function (e, t, i) {
                var n = e("../lib/dom"), s = e("../lib/oop"), o = e("../lib/lang"),
                    r = e("../lib/event_emitter").EventEmitter, a = e("./lines").Lines, l = function (e) {
                        this.element = n.createElement("div"), this.element.className = "ace_layer ace_gutter-layer", e.appendChild(this.element), this.setShowFoldWidgets(this.$showFoldWidgets), this.gutterWidth = 0, this.$annotations = [], this.$updateAnnotations = this.$updateAnnotations.bind(this), this.$lines = new a(this.element), this.$lines.$offsetCoefficient = 1
                    };

                function c(e) {
                    var t = document.createTextNode("");
                    e.appendChild(t);
                    var i = n.createElement("span");
                    return e.appendChild(i), e
                }

                (function () {
                    s.implement(this, r), this.setSession = function (e) {
                        this.session && this.session.removeEventListener("change", this.$updateAnnotations), this.session = e, e && e.on("change", this.$updateAnnotations)
                    }, this.addGutterDecoration = function (e, t) {
                        window.console && console.warn && console.warn("deprecated use session.addGutterDecoration"), this.session.addGutterDecoration(e, t)
                    }, this.removeGutterDecoration = function (e, t) {
                        window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration"), this.session.removeGutterDecoration(e, t)
                    }, this.setAnnotations = function (e) {
                        this.$annotations = [];
                        for (var t = 0; t < e.length; t++) {
                            var i = e[t], n = i.row, s = this.$annotations[n];
                            s || (s = this.$annotations[n] = {text: []});
                            var r = i.text;
                            r = r ? o.escapeHTML(r) : i.html || "", -1 === s.text.indexOf(r) && s.text.push(r);
                            var a = i.type;
                            "error" == a ? s.className = " ace_error" : "warning" == a && " ace_error" != s.className ? s.className = " ace_warning" : "info" != a || s.className || (s.className = " ace_info")
                        }
                    }, this.$updateAnnotations = function (e) {
                        if (this.$annotations.length) {
                            var t = e.start.row, i = e.end.row - t;
                            if (0 === i) ; else if ("remove" == e.action) this.$annotations.splice(t, i + 1, null); else {
                                var n = new Array(i + 1);
                                n.unshift(t, 1), this.$annotations.splice.apply(this.$annotations, n)
                            }
                        }
                    }, this.update = function (e) {
                        this.config = e;
                        var t = this.session, i = e.firstRow,
                            n = Math.min(e.lastRow + e.gutterOffset, t.getLength() - 1);
                        this.oldLastRow = n, this.config = e, this.$lines.moveContainer(e), this.$updateCursorRow();
                        var s = t.getNextFoldLine(i), o = s ? s.start.row : 1 / 0, r = null, a = -1, l = i;
                        while (1) {
                            if (l > o && (l = s.end.row + 1, s = t.getNextFoldLine(l, s), o = s ? s.start.row : 1 / 0), l > n) {
                                while (this.$lines.getLength() > a + 1) this.$lines.pop();
                                break
                            }
                            r = this.$lines.get(++a), r ? r.row = l : (r = this.$lines.createCell(l, e, this.session, c), this.$lines.push(r)), this.$renderCell(r, e, s, l), l++
                        }
                        this._signal("afterRender"), this.$updateGutterWidth(e)
                    }, this.$updateGutterWidth = function (e) {
                        var t = this.session, i = t.gutterRenderer || this.$renderer, n = t.$firstLineNumber,
                            s = this.$lines.last() ? this.$lines.last().text : "";
                        (this.$fixedWidth || t.$useWrapMode) && (s = t.getLength() + n - 1);
                        var o = i ? i.getWidth(t, s, e) : s.toString().length * e.characterWidth,
                            r = this.$padding || this.$computePadding();
                        o += r.left + r.right, o === this.gutterWidth || isNaN(o) || (this.gutterWidth = o, this.element.parentNode.style.width = this.element.style.width = Math.ceil(this.gutterWidth) + "px", this._signal("changeGutterWidth", o))
                    }, this.$updateCursorRow = function () {
                        if (this.$highlightGutterLine) {
                            var e = this.session.selection.getCursor();
                            this.$cursorRow !== e.row && (this.$cursorRow = e.row)
                        }
                    }, this.updateLineHighlight = function () {
                        if (this.$highlightGutterLine) {
                            var e = this.session.selection.cursor.row;
                            if (this.$cursorRow = e, !this.$cursorCell || this.$cursorCell.row != e) {
                                this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", ""));
                                var t = this.$lines.cells;
                                this.$cursorCell = null;
                                for (var i = 0; i < t.length; i++) {
                                    var n = t[i];
                                    if (n.row >= this.$cursorRow) {
                                        if (n.row > this.$cursorRow) {
                                            var s = this.session.getFoldLine(this.$cursorRow);
                                            if (!(i > 0 && s && s.start.row == t[i - 1].row)) break;
                                            n = t[i - 1]
                                        }
                                        n.element.className = "ace_gutter-active-line " + n.element.className, this.$cursorCell = n;
                                        break
                                    }
                                }
                            }
                        }
                    }, this.scrollLines = function (e) {
                        var t = this.config;
                        if (this.config = e, this.$updateCursorRow(), this.$lines.pageChanged(t, e)) return this.update(e);
                        this.$lines.moveContainer(e);
                        var i = Math.min(e.lastRow + e.gutterOffset, this.session.getLength() - 1), n = this.oldLastRow;
                        if (this.oldLastRow = i, !t || n < e.firstRow) return this.update(e);
                        if (i < t.firstRow) return this.update(e);
                        if (t.firstRow < e.firstRow) for (var s = this.session.getFoldedRowCount(t.firstRow, e.firstRow - 1); s > 0; s--) this.$lines.shift();
                        if (n > i) for (s = this.session.getFoldedRowCount(i + 1, n); s > 0; s--) this.$lines.pop();
                        e.firstRow < t.firstRow && this.$lines.unshift(this.$renderLines(e, e.firstRow, t.firstRow - 1)), i > n && this.$lines.push(this.$renderLines(e, n + 1, i)), this.updateLineHighlight(), this._signal("afterRender"), this.$updateGutterWidth(e)
                    }, this.$renderLines = function (e, t, i) {
                        var n = [], s = t, o = this.session.getNextFoldLine(s), r = o ? o.start.row : 1 / 0;
                        while (1) {
                            if (s > r && (s = o.end.row + 1, o = this.session.getNextFoldLine(s, o), r = o ? o.start.row : 1 / 0), s > i) break;
                            var a = this.$lines.createCell(s, e, this.session, c);
                            this.$renderCell(a, e, o, s), n.push(a), s++
                        }
                        return n
                    }, this.$renderCell = function (e, t, i, s) {
                        var o = e.element, r = this.session, a = o.childNodes[0], l = o.childNodes[1],
                            c = r.$firstLineNumber, h = r.$breakpoints, u = r.$decorations,
                            d = r.gutterRenderer || this.$renderer, g = this.$showFoldWidgets && r.foldWidgets,
                            f = i ? i.start.row : Number.MAX_VALUE, p = "ace_gutter-cell ";
                        if (this.$highlightGutterLine && (s == this.$cursorRow || i && s < this.$cursorRow && s >= f && this.$cursorRow <= i.end.row) && (p += "ace_gutter-active-line ", this.$cursorCell != e && (this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", "")), this.$cursorCell = e)), h[s] && (p += h[s]), u[s] && (p += u[s]), this.$annotations[s] && (p += this.$annotations[s].className), o.className != p && (o.className = p), g) {
                            var m = g[s];
                            null == m && (m = g[s] = r.getFoldWidget(s))
                        }
                        if (m) {
                            p = "ace_fold-widget ace_" + m;
                            "start" == m && s == f && s < i.end.row ? p += " ace_closed" : p += " ace_open", l.className != p && (l.className = p);
                            var v = t.lineHeight + "px";
                            n.setStyle(l.style, "height", v), n.setStyle(l.style, "display", "inline-block")
                        } else l && n.setStyle(l.style, "display", "none");
                        var w = (d ? d.getText(r, s) : s + c).toString();
                        return w !== a.data && (a.data = w), n.setStyle(e.element.style, "height", this.$lines.computeLineHeight(s, t, r) + "px"), n.setStyle(e.element.style, "top", this.$lines.computeLineTop(s, t, r) + "px"), e.text = w, e
                    }, this.$fixedWidth = !1, this.$highlightGutterLine = !0, this.$renderer = "", this.setHighlightGutterLine = function (e) {
                        this.$highlightGutterLine = e
                    }, this.$showLineNumbers = !0, this.$renderer = "", this.setShowLineNumbers = function (e) {
                        this.$renderer = !e && {
                            getWidth: function () {
                                return 0
                            }, getText: function () {
                                return ""
                            }
                        }
                    }, this.getShowLineNumbers = function () {
                        return this.$showLineNumbers
                    }, this.$showFoldWidgets = !0, this.setShowFoldWidgets = function (e) {
                        e ? n.addCssClass(this.element, "ace_folding-enabled") : n.removeCssClass(this.element, "ace_folding-enabled"), this.$showFoldWidgets = e, this.$padding = null
                    }, this.getShowFoldWidgets = function () {
                        return this.$showFoldWidgets
                    }, this.$computePadding = function () {
                        if (!this.element.firstChild) return {left: 0, right: 0};
                        var e = n.computedStyle(this.element.firstChild);
                        return this.$padding = {}, this.$padding.left = (parseInt(e.borderLeftWidth) || 0) + (parseInt(e.paddingLeft) || 0) + 1, this.$padding.right = (parseInt(e.borderRightWidth) || 0) + (parseInt(e.paddingRight) || 0), this.$padding
                    }, this.getRegion = function (e) {
                        var t = this.$padding || this.$computePadding(), i = this.element.getBoundingClientRect();
                        return e.x < t.left + i.left ? "markers" : this.$showFoldWidgets && e.x > i.right - t.right ? "foldWidgets" : void 0
                    }
                }).call(l.prototype), t.Gutter = l
            })), deAceFine("ace/layer/marker", ["require", "exports", "module", "ace/range", "ace/lib/dom"], (function (e, t, i) {
                var n = e("../range").Range, s = e("../lib/dom"), o = function (e) {
                    this.element = s.createElement("div"), this.element.className = "ace_layer ace_marker-layer", e.appendChild(this.element)
                };
                (function () {
                    function e(e, t, i, n) {
                        return (e ? 1 : 0) | (t ? 2 : 0) | (i ? 4 : 0) | (n ? 8 : 0)
                    }

                    this.$padding = 0, this.setPadding = function (e) {
                        this.$padding = e
                    }, this.setSession = function (e) {
                        this.session = e
                    }, this.setMarkers = function (e) {
                        this.markers = e
                    }, this.elt = function (e, t) {
                        var i = -1 != this.i && this.element.childNodes[this.i];
                        i ? this.i++ : (i = document.createElement("div"), this.element.appendChild(i), this.i = -1), i.style.cssText = t, i.className = e
                    }, this.update = function (e) {
                        if (e) {
                            var t;
                            for (var i in this.config = e, this.i = 0, this.markers) {
                                var n = this.markers[i];
                                if (n.range) {
                                    var s = n.range.clipRows(e.firstRow, e.lastRow);
                                    if (!s.isEmpty()) if (s = s.toScreenRange(this.session), n.renderer) {
                                        var o = this.$getTop(s.start.row, e),
                                            r = this.$padding + s.start.column * e.characterWidth;
                                        n.renderer(t, s, r, o, e)
                                    } else "fullLine" == n.type ? this.drawFullLineMarker(t, s, n.clazz, e) : "screenLine" == n.type ? this.drawScreenLineMarker(t, s, n.clazz, e) : s.isMultiLine() ? "text" == n.type ? this.drawTextMarker(t, s, n.clazz, e) : this.drawMultiLineMarker(t, s, n.clazz, e) : this.drawSingleLineMarker(t, s, n.clazz + " ace_start ace_br15", e)
                                } else n.update(t, this, this.session, e)
                            }
                            if (-1 != this.i) while (this.i < this.element.childElementCount) this.element.removeChild(this.element.lastChild)
                        }
                    }, this.$getTop = function (e, t) {
                        return (e - t.firstRowScreen) * t.lineHeight
                    }, this.drawTextMarker = function (t, i, s, o, r) {
                        for (var a = this.session, l = i.start.row, c = i.end.row, h = l, u = 0, d = 0, g = a.getScreenLastRowColumn(h), f = new n(h, i.start.column, h, d); h <= c; h++) f.start.row = f.end.row = h, f.start.column = h == l ? i.start.column : a.getRowWrapIndent(h), f.end.column = g, u = d, d = g, g = h + 1 < c ? a.getScreenLastRowColumn(h + 1) : h == c ? 0 : i.end.column, this.drawSingleLineMarker(t, f, s + (h == l ? " ace_start" : "") + " ace_br" + e(h == l || h == l + 1 && i.start.column, u < d, d > g, h == c), o, h == c ? 0 : 1, r)
                    }, this.drawMultiLineMarker = function (e, t, i, n, s) {
                        var o = this.$padding, r = n.lineHeight, a = this.$getTop(t.start.row, n),
                            l = o + t.start.column * n.characterWidth;
                        if (s = s || "", this.session.$bidiHandler.isBidiRow(t.start.row)) {
                            var c = t.clone();
                            c.end.row = c.start.row, c.end.column = this.session.getLine(c.start.row).length, this.drawBidiSingleLineMarker(e, c, i + " ace_br1 ace_start", n, null, s)
                        } else this.elt(i + " ace_br1 ace_start", "height:" + r + "px;right:0;top:" + a + "px;left:" + l + "px;" + (s || ""));
                        if (this.session.$bidiHandler.isBidiRow(t.end.row)) {
                            c = t.clone();
                            c.start.row = c.end.row, c.start.column = 0, this.drawBidiSingleLineMarker(e, c, i + " ace_br12", n, null, s)
                        } else {
                            a = this.$getTop(t.end.row, n);
                            var h = t.end.column * n.characterWidth;
                            this.elt(i + " ace_br12", "height:" + r + "px;width:" + h + "px;top:" + a + "px;left:" + o + "px;" + (s || ""))
                        }
                        if (r = (t.end.row - t.start.row - 1) * n.lineHeight, !(r <= 0)) {
                            a = this.$getTop(t.start.row + 1, n);
                            var u = (t.start.column ? 1 : 0) | (t.end.column ? 0 : 8);
                            this.elt(i + (u ? " ace_br" + u : ""), "height:" + r + "px;right:0;top:" + a + "px;left:" + o + "px;" + (s || ""))
                        }
                    }, this.drawSingleLineMarker = function (e, t, i, n, s, o) {
                        if (this.session.$bidiHandler.isBidiRow(t.start.row)) return this.drawBidiSingleLineMarker(e, t, i, n, s, o);
                        var r = n.lineHeight, a = (t.end.column + (s || 0) - t.start.column) * n.characterWidth,
                            l = this.$getTop(t.start.row, n), c = this.$padding + t.start.column * n.characterWidth;
                        this.elt(i, "height:" + r + "px;width:" + a + "px;top:" + l + "px;left:" + c + "px;" + (o || ""))
                    }, this.drawBidiSingleLineMarker = function (e, t, i, n, s, o) {
                        var r = n.lineHeight, a = this.$getTop(t.start.row, n), l = this.$padding,
                            c = this.session.$bidiHandler.getSelections(t.start.column, t.end.column);
                        c.forEach((function (e) {
                            this.elt(i, "height:" + r + "px;width:" + e.width + (s || 0) + "px;top:" + a + "px;left:" + (l + e.left) + "px;" + (o || ""))
                        }), this)
                    }, this.drawFullLineMarker = function (e, t, i, n, s) {
                        var o = this.$getTop(t.start.row, n), r = n.lineHeight;
                        t.start.row != t.end.row && (r += this.$getTop(t.end.row, n) - o), this.elt(i, "height:" + r + "px;top:" + o + "px;left:0;right:0;" + (s || ""))
                    }, this.drawScreenLineMarker = function (e, t, i, n, s) {
                        var o = this.$getTop(t.start.row, n), r = n.lineHeight;
                        this.elt(i, "height:" + r + "px;top:" + o + "px;left:0;right:0;" + (s || ""))
                    }
                }).call(o.prototype), t.Marker = o
            })), deAceFine("ace/layer/text", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/layer/lines", "ace/lib/event_emitter"], (function (e, t, i) {
                var n = e("../lib/oop"), s = e("../lib/dom"), o = e("../lib/lang"), r = e("./lines").Lines,
                    a = e("../lib/event_emitter").EventEmitter, l = function (e) {
                        this.dom = s, this.element = this.dom.createElement("div"), this.element.className = "ace_layer ace_text-layer", e.appendChild(this.element), this.$updateEolChar = this.$updateEolChar.bind(this), this.$lines = new r(this.element)
                    };
                (function () {
                    n.implement(this, a), this.EOF_CHAR = "¶", this.EOL_CHAR_LF = "¬", this.EOL_CHAR_CRLF = "¤", this.EOL_CHAR = this.EOL_CHAR_LF, this.TAB_CHAR = "—", this.SPACE_CHAR = "·", this.$padding = 0, this.MAX_LINE_LENGTH = 1e4, this.$updateEolChar = function () {
                        var e = this.session.doc,
                            t = "\n" == e.getNewLineCharacter() && "windows" != e.getNewLineMode(),
                            i = t ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
                        if (this.EOL_CHAR != i) return this.EOL_CHAR = i, !0
                    }, this.setPadding = function (e) {
                        this.$padding = e, this.element.style.margin = "0 " + e + "px"
                    }, this.getLineHeight = function () {
                        return this.$fontMetrics.$characterSize.height || 0
                    }, this.getCharacterWidth = function () {
                        return this.$fontMetrics.$characterSize.width || 0
                    }, this.$setFontMetrics = function (e) {
                        this.$fontMetrics = e, this.$fontMetrics.on("changeCharacterSize", function (e) {
                            this._signal("changeCharacterSize", e)
                        }.bind(this)), this.$pollSizeChanges()
                    }, this.checkForSizeChanges = function () {
                        this.$fontMetrics.checkForSizeChanges()
                    }, this.$pollSizeChanges = function () {
                        return this.$pollSizeChangesTimer = this.$fontMetrics.$pollSizeChanges()
                    }, this.setSession = function (e) {
                        this.session = e, e && this.$computeTabString()
                    }, this.showInvisibles = !1, this.setShowInvisibles = function (e) {
                        return this.showInvisibles != e && (this.showInvisibles = e, this.$computeTabString(), !0)
                    }, this.displayIndentGuides = !0, this.setDisplayIndentGuides = function (e) {
                        return this.displayIndentGuides != e && (this.displayIndentGuides = e, this.$computeTabString(), !0)
                    }, this.$tabStrings = [], this.onChangeTabSize = this.$computeTabString = function () {
                        var e = this.session.getTabSize();
                        this.tabSize = e;
                        for (var t = this.$tabStrings = [0], i = 1; i < e + 1; i++) if (this.showInvisibles) {
                            var n = this.dom.createElement("span");
                            n.className = "ace_invisible ace_invisible_tab", n.textContent = o.stringRepeat(this.TAB_CHAR, i), t.push(n)
                        } else t.push(this.dom.createTextNode(o.stringRepeat(" ", i), this.element));
                        if (this.displayIndentGuides) {
                            this.$indentGuideRe = /\s\S| \t|\t |\s$/;
                            var s = "ace_indent-guide", r = "", a = "";
                            if (this.showInvisibles) {
                                s += " ace_invisible", r = " ace_invisible_space", a = " ace_invisible_tab";
                                var l = o.stringRepeat(this.SPACE_CHAR, this.tabSize),
                                    c = o.stringRepeat(this.TAB_CHAR, this.tabSize)
                            } else l = o.stringRepeat(" ", this.tabSize), c = l;
                            n = this.dom.createElement("span");
                            n.className = s + r, n.textContent = l, this.$tabStrings[" "] = n;
                            n = this.dom.createElement("span");
                            n.className = s + a, n.textContent = c, this.$tabStrings["\t"] = n
                        }
                    }, this.updateLines = function (e, t, i) {
                        if (this.config.lastRow != e.lastRow || this.config.firstRow != e.firstRow) return this.update(e);
                        this.config = e;
                        for (var n = Math.max(t, e.firstRow), s = Math.min(i, e.lastRow), o = this.element.childNodes, r = 0, a = e.firstRow; a < n; a++) {
                            var l = this.session.getFoldLine(a);
                            if (l) {
                                if (l.containsRow(n)) {
                                    n = l.start.row;
                                    break
                                }
                                a = l.end.row
                            }
                            r++
                        }
                        var c = !1, h = (a = n, l = this.session.getNextFoldLine(a), l ? l.start.row : 1 / 0);
                        while (1) {
                            if (a > h && (a = l.end.row + 1, l = this.session.getNextFoldLine(a, l), h = l ? l.start.row : 1 / 0), a > s) break;
                            var u = o[r++];
                            if (u) {
                                this.dom.removeChildren(u), this.$renderLine(u, a, a == h && l), c && (u.style.top = this.$lines.computeLineTop(a, e, this.session) + "px");
                                var d = e.lineHeight * this.session.getRowLength(a) + "px";
                                u.style.height != d && (c = !0, u.style.height = d)
                            }
                            a++
                        }
                        if (c) while (r < this.$lines.cells.length) {
                            var g = this.$lines.cells[r++];
                            g.element.style.top = this.$lines.computeLineTop(g.row, e, this.session) + "px"
                        }
                    }, this.scrollLines = function (e) {
                        var t = this.config;
                        if (this.config = e, this.$lines.pageChanged(t, e)) return this.update(e);
                        this.$lines.moveContainer(e);
                        var i = e.lastRow, n = t ? t.lastRow : -1;
                        if (!t || n < e.firstRow) return this.update(e);
                        if (i < t.firstRow) return this.update(e);
                        if (!t || t.lastRow < e.firstRow) return this.update(e);
                        if (e.lastRow < t.firstRow) return this.update(e);
                        if (t.firstRow < e.firstRow) for (var s = this.session.getFoldedRowCount(t.firstRow, e.firstRow - 1); s > 0; s--) this.$lines.shift();
                        if (t.lastRow > e.lastRow) for (s = this.session.getFoldedRowCount(e.lastRow + 1, t.lastRow); s > 0; s--) this.$lines.pop();
                        e.firstRow < t.firstRow && this.$lines.unshift(this.$renderLinesFragment(e, e.firstRow, t.firstRow - 1)), e.lastRow > t.lastRow && this.$lines.push(this.$renderLinesFragment(e, t.lastRow + 1, e.lastRow))
                    }, this.$renderLinesFragment = function (e, t, i) {
                        var n = [], o = t, r = this.session.getNextFoldLine(o), a = r ? r.start.row : 1 / 0;
                        while (1) {
                            if (o > a && (o = r.end.row + 1, r = this.session.getNextFoldLine(o, r), a = r ? r.start.row : 1 / 0), o > i) break;
                            var l = this.$lines.createCell(o, e, this.session), c = l.element;
                            this.dom.removeChildren(c), s.setStyle(c.style, "height", this.$lines.computeLineHeight(o, e, this.session) + "px"), s.setStyle(c.style, "top", this.$lines.computeLineTop(o, e, this.session) + "px"), this.$renderLine(c, o, o == a && r), this.$useLineGroups() ? c.className = "ace_line_group" : c.className = "ace_line", n.push(l), o++
                        }
                        return n
                    }, this.update = function (e) {
                        this.$lines.moveContainer(e), this.config = e;
                        var t = e.firstRow, i = e.lastRow, n = this.$lines;
                        while (n.getLength()) n.pop();
                        n.push(this.$renderLinesFragment(e, t, i))
                    }, this.$textToken = {text: !0, rparen: !0, lparen: !0}, this.$renderToken = function (e, t, i, n) {
                        var s, r = this,
                            a = /(\t)|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\uFEFF\uFFF9-\uFFFC]+)|(\u3000)|([\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g,
                            l = this.dom.createFragment(this.element), c = 0;
                        while (s = a.exec(n)) {
                            var h = s[1], u = s[2], d = s[3], g = s[4], f = s[5];
                            if (r.showInvisibles || !u) {
                                var p = c != s.index ? n.slice(c, s.index) : "";
                                if (c = s.index + s[0].length, p && l.appendChild(this.dom.createTextNode(p, this.element)), h) {
                                    var m = r.session.getScreenTabSize(t + s.index);
                                    l.appendChild(r.$tabStrings[m].cloneNode(!0)), t += m - 1
                                } else if (u) if (r.showInvisibles) {
                                    var v = this.dom.createElement("span");
                                    v.className = "ace_invisible ace_invisible_space", v.textContent = o.stringRepeat(r.SPACE_CHAR, u.length), l.appendChild(v)
                                } else l.appendChild(this.com.createTextNode(u, this.element)); else if (d) {
                                    v = this.dom.createElement("span");
                                    v.className = "ace_invisible ace_invisible_space ace_invalid", v.textContent = o.stringRepeat(r.SPACE_CHAR, d.length), l.appendChild(v)
                                } else if (g) {
                                    r.showInvisibles && r.SPACE_CHAR;
                                    t += 1;
                                    v = this.dom.createElement("span");
                                    v.style.width = 2 * r.config.characterWidth + "px", v.className = r.showInvisibles ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk", v.textContent = r.showInvisibles ? r.SPACE_CHAR : "", l.appendChild(v)
                                } else if (f) {
                                    t += 1;
                                    v = this.dom.createElement("span");
                                    v.style.width = 2 * r.config.characterWidth + "px", v.className = "ace_cjk", v.textContent = f, l.appendChild(v)
                                }
                            }
                        }
                        if (l.appendChild(this.dom.createTextNode(c ? n.slice(c) : n, this.element)), this.$textToken[i.type]) e.appendChild(l); else {
                            var w = "ace_" + i.type.replace(/\./g, " ace_");
                            v = this.dom.createElement("span");
                            "fold" == i.type && (v.style.width = i.value.length * this.config.characterWidth + "px"), v.className = w, v.appendChild(l), e.appendChild(v)
                        }
                        return t + n.length
                    }, this.renderIndentGuide = function (e, t, i) {
                        var n = t.search(this.$indentGuideRe);
                        if (n <= 0 || n >= i) return t;
                        if (" " == t[0]) {
                            n -= n % this.tabSize;
                            for (var s = n / this.tabSize, o = 0; o < s; o++) e.appendChild(this.$tabStrings[" "].cloneNode(!0));
                            return t.substr(n)
                        }
                        if ("\t" == t[0]) {
                            for (o = 0; o < n; o++) e.appendChild(this.$tabStrings["\t"].cloneNode(!0));
                            return t.substr(n)
                        }
                        return t
                    }, this.$createLineElement = function (e) {
                        var t = this.dom.createElement("div");
                        return t.className = "ace_line", t.style.height = this.config.lineHeight + "px", t
                    }, this.$renderWrappedLine = function (e, t, i) {
                        var n = 0, s = 0, r = i[0], a = 0, l = this.$createLineElement();
                        e.appendChild(l);
                        for (var c = 0; c < t.length; c++) {
                            var h = t[c], u = h.value;
                            if (0 == c && this.displayIndentGuides) {
                                if (n = u.length, u = this.renderIndentGuide(l, u, r), !u) continue;
                                n -= u.length
                            }
                            if (n + u.length < r) a = this.$renderToken(l, a, h, u), n += u.length; else {
                                while (n + u.length >= r) a = this.$renderToken(l, a, h, u.substring(0, r - n)), u = u.substring(r - n), n = r, l = this.$createLineElement(), e.appendChild(l), l.appendChild(this.dom.createTextNode(o.stringRepeat(" ", i.indent), this.element)), s++, a = 0, r = i[s] || Number.MAX_VALUE;
                                0 != u.length && (n += u.length, a = this.$renderToken(l, a, h, u))
                            }
                        }
                        i[i.length - 1] > this.MAX_LINE_LENGTH && this.$renderOverflowMessage(l, a, null, "", !0)
                    }, this.$renderSimpleLine = function (e, t) {
                        var i = 0, n = t[0], s = n.value;
                        this.displayIndentGuides && (s = this.renderIndentGuide(e, s)), s && (i = this.$renderToken(e, i, n, s));
                        for (var o = 1; o < t.length; o++) {
                            if (n = t[o], s = n.value, i + s.length > this.MAX_LINE_LENGTH) return this.$renderOverflowMessage(e, i, n, s);
                            i = this.$renderToken(e, i, n, s)
                        }
                    }, this.$renderOverflowMessage = function (e, t, i, n, s) {
                        i && this.$renderToken(e, t, i, n.slice(0, this.MAX_LINE_LENGTH - t));
                        var o = this.dom.createElement("span");
                        o.className = "ace_inline_button ace_keyword ace_toggle_wrap", o.textContent = s ? "<hide>" : "<click to see more...>", e.appendChild(o)
                    }, this.$renderLine = function (e, t, i) {
                        if (i || 0 == i || (i = this.session.getFoldLine(t)), i) var n = this.$getFoldLineTokens(t, i); else n = this.session.getTokens(t);
                        var s = e;
                        if (n.length) {
                            var o = this.session.getRowSplitData(t);
                            if (o && o.length) {
                                this.$renderWrappedLine(e, n, o);
                                s = e.lastChild
                            } else {
                                s = e;
                                this.$useLineGroups() && (s = this.$createLineElement(), e.appendChild(s)), this.$renderSimpleLine(s, n)
                            }
                        } else this.$useLineGroups() && (s = this.$createLineElement(), e.appendChild(s));
                        if (this.showInvisibles && s) {
                            i && (t = i.end.row);
                            var r = this.dom.createElement("span");
                            r.className = "ace_invisible ace_invisible_eol", r.textContent = t == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, s.appendChild(r)
                        }
                    }, this.$getFoldLineTokens = function (e, t) {
                        var i = this.session, n = [];

                        function s(e, t, i) {
                            var s = 0, o = 0;
                            while (o + e[s].value.length < t) if (o += e[s].value.length, s++, s == e.length) return;
                            if (o != t) {
                                var r = e[s].value.substring(t - o);
                                r.length > i - t && (r = r.substring(0, i - t)), n.push({
                                    type: e[s].type,
                                    value: r
                                }), o = t + r.length, s += 1
                            }
                            while (o < i && s < e.length) {
                                r = e[s].value;
                                r.length + o > i ? n.push({
                                    type: e[s].type,
                                    value: r.substring(0, i - o)
                                }) : n.push(e[s]), o += r.length, s += 1
                            }
                        }

                        var o = i.getTokens(e);
                        return t.walk((function (e, t, r, a, l) {
                            null != e ? n.push({
                                type: "fold",
                                value: e
                            }) : (l && (o = i.getTokens(t)), o.length && s(o, a, r))
                        }), t.end.row, this.session.getLine(t.end.row).length), n
                    }, this.$useLineGroups = function () {
                        return this.session.getUseWrapMode()
                    }, this.destroy = function () {
                    }
                }).call(l.prototype), t.Text = l
            })), deAceFine("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], (function (e, t, i) {
                var n = e("../lib/dom"), s = function (e) {
                    this.element = n.createElement("div"), this.element.className = "ace_layer ace_cursor-layer", e.appendChild(this.element), this.isVisible = !1, this.isBlinking = !0, this.blinkInterval = 1e3, this.smoothBlinking = !1, this.cursors = [], this.cursor = this.addCursor(), n.addCssClass(this.element, "ace_hidden-cursors"), this.$updateCursors = this.$updateOpacity.bind(this)
                };
                (function () {
                    this.$updateOpacity = function (e) {
                        for (var t = this.cursors, i = t.length; i--;) n.setStyle(t[i].style, "opacity", e ? "" : "0")
                    }, this.$startCssAnimation = function () {
                        for (var e = this.cursors, t = e.length; t--;) e[t].style.animationDuration = this.blinkInterval + "ms";
                        setTimeout(function () {
                            n.addCssClass(this.element, "ace_animate-blinking")
                        }.bind(this))
                    }, this.$stopCssAnimation = function () {
                        n.removeCssClass(this.element, "ace_animate-blinking")
                    }, this.$padding = 0, this.setPadding = function (e) {
                        this.$padding = e
                    }, this.setSession = function (e) {
                        this.session = e
                    }, this.setBlinking = function (e) {
                        e != this.isBlinking && (this.isBlinking = e, this.restartTimer())
                    }, this.setBlinkInterval = function (e) {
                        e != this.blinkInterval && (this.blinkInterval = e, this.restartTimer())
                    }, this.setSmoothBlinking = function (e) {
                        e != this.smoothBlinking && (this.smoothBlinking = e, n.setCssClass(this.element, "ace_smooth-blinking", e), this.$updateCursors(!0), this.restartTimer())
                    }, this.addCursor = function () {
                        var e = n.createElement("div");
                        return e.className = "ace_cursor", this.element.appendChild(e), this.cursors.push(e), e
                    }, this.removeCursor = function () {
                        if (this.cursors.length > 1) {
                            var e = this.cursors.pop();
                            return e.parentNode.removeChild(e), e
                        }
                    }, this.hideCursor = function () {
                        this.isVisible = !1, n.addCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
                    }, this.showCursor = function () {
                        this.isVisible = !0, n.removeCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
                    }, this.restartTimer = function () {
                        var e = this.$updateCursors;
                        if (clearInterval(this.intervalId), clearTimeout(this.timeoutId), this.$stopCssAnimation(), this.smoothBlinking && n.removeCssClass(this.element, "ace_smooth-blinking"), e(!0), this.isBlinking && this.blinkInterval && this.isVisible) if (this.smoothBlinking && setTimeout(function () {
                            n.addCssClass(this.element, "ace_smooth-blinking")
                        }.bind(this)), n.HAS_CSS_ANIMATION) this.$startCssAnimation(); else {
                            var t = function () {
                                this.timeoutId = setTimeout((function () {
                                    e(!1)
                                }), .6 * this.blinkInterval)
                            }.bind(this);
                            this.intervalId = setInterval((function () {
                                e(!0), t()
                            }), this.blinkInterval), t()
                        } else this.$stopCssAnimation()
                    }, this.getPixelPosition = function (e, t) {
                        if (!this.config || !this.session) return {left: 0, top: 0};
                        e || (e = this.session.selection.getCursor());
                        var i = this.session.documentToScreenPosition(e),
                            n = this.$padding + (this.session.$bidiHandler.isBidiRow(i.row, e.row) ? this.session.$bidiHandler.getPosLeft(i.column) : i.column * this.config.characterWidth),
                            s = (i.row - (t ? this.config.firstRowScreen : 0)) * this.config.lineHeight;
                        return {left: n, top: s}
                    }, this.isCursorInView = function (e, t) {
                        return e.top >= 0 && e.top < t.maxHeight
                    }, this.update = function (e) {
                        this.config = e;
                        var t = this.session.$selectionMarkers, i = 0, s = 0;
                        void 0 !== t && 0 !== t.length || (t = [{cursor: null}]);
                        i = 0;
                        for (var o = t.length; i < o; i++) {
                            var r = this.getPixelPosition(t[i].cursor, !0);
                            if (!((r.top > e.height + e.offset || r.top < 0) && i > 1)) {
                                var a = this.cursors[s++] || this.addCursor(), l = a.style;
                                this.drawCursor ? this.drawCursor(a, r, e, t[i], this.session) : this.isCursorInView(r, e) ? (n.setStyle(l, "display", "block"), n.translate(a, r.left, r.top), n.setStyle(l, "width", Math.round(e.characterWidth) + "px"), n.setStyle(l, "height", e.lineHeight + "px")) : n.setStyle(l, "display", "none")
                            }
                        }
                        while (this.cursors.length > s) this.removeCursor();
                        var c = this.session.getOverwrite();
                        this.$setOverwrite(c), this.$pixelPos = r, this.restartTimer()
                    }, this.drawCursor = null, this.$setOverwrite = function (e) {
                        e != this.overwrite && (this.overwrite = e, e ? n.addCssClass(this.element, "ace_overwrite-cursors") : n.removeCssClass(this.element, "ace_overwrite-cursors"))
                    }, this.destroy = function () {
                        clearInterval(this.intervalId), clearTimeout(this.timeoutId)
                    }
                }).call(s.prototype), t.Cursor = s
            })), deAceFine("ace/scrollbar", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], (function (e, t, i) {
                var n = e("./lib/oop"), s = e("./lib/dom"), o = e("./lib/event"),
                    r = e("./lib/event_emitter").EventEmitter, a = 32768, l = function (e) {
                        this.element = s.createElement("div"), this.element.className = "ace_scrollbar ace_scrollbar" + this.classSuffix, this.inner = s.createElement("div"), this.inner.className = "ace_scrollbar-inner", this.inner.textContent = " ", this.element.appendChild(this.inner), e.appendChild(this.element), this.setVisible(!1), this.skipEvent = !1, o.addListener(this.element, "scroll", this.onScroll.bind(this)), o.addListener(this.element, "mousedown", o.preventDefault)
                    };
                (function () {
                    n.implement(this, r), this.setVisible = function (e) {
                        this.element.style.display = e ? "" : "none", this.isVisible = e, this.coeff = 1
                    }
                }).call(l.prototype);
                var c = function (e, t) {
                    l.call(this, e), this.scrollTop = 0, this.scrollHeight = 0, t.$scrollbarWidth = this.width = s.scrollbarWidth(e.ownerDocument), this.inner.style.width = this.element.style.width = (this.width || 15) + 5 + "px", this.$minWidth = 0
                };
                n.inherits(c, l), function () {
                    this.classSuffix = "-v", this.onScroll = function () {
                        if (!this.skipEvent) {
                            if (this.scrollTop = this.element.scrollTop, 1 != this.coeff) {
                                var e = this.element.clientHeight / this.scrollHeight;
                                this.scrollTop = this.scrollTop * (1 - e) / (this.coeff - e)
                            }
                            this._emit("scroll", {data: this.scrollTop})
                        }
                        this.skipEvent = !1
                    }, this.getWidth = function () {
                        return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0)
                    }, this.setHeight = function (e) {
                        this.element.style.height = e + "px"
                    }, this.setInnerHeight = this.setScrollHeight = function (e) {
                        this.scrollHeight = e, e > a ? (this.coeff = a / e, e = a) : 1 != this.coeff && (this.coeff = 1), this.inner.style.height = e + "px"
                    }, this.setScrollTop = function (e) {
                        this.scrollTop != e && (this.skipEvent = !0, this.scrollTop = e, this.element.scrollTop = e * this.coeff)
                    }
                }.call(c.prototype);
                var h = function (e, t) {
                    l.call(this, e), this.scrollLeft = 0, this.height = t.$scrollbarWidth, this.inner.style.height = this.element.style.height = (this.height || 15) + 5 + "px"
                };
                n.inherits(h, l), function () {
                    this.classSuffix = "-h", this.onScroll = function () {
                        this.skipEvent || (this.scrollLeft = this.element.scrollLeft, this._emit("scroll", {data: this.scrollLeft})), this.skipEvent = !1
                    }, this.getHeight = function () {
                        return this.isVisible ? this.height : 0
                    }, this.setWidth = function (e) {
                        this.element.style.width = e + "px"
                    }, this.setInnerWidth = function (e) {
                        this.inner.style.width = e + "px"
                    }, this.setScrollWidth = function (e) {
                        this.inner.style.width = e + "px"
                    }, this.setScrollLeft = function (e) {
                        this.scrollLeft != e && (this.skipEvent = !0, this.scrollLeft = this.element.scrollLeft = e)
                    }
                }.call(h.prototype), t.ScrollBar = c, t.ScrollBarV = c, t.ScrollBarH = h, t.VScrollBar = c, t.HScrollBar = h
            })), deAceFine("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], (function (e, t, i) {
                var n = e("./lib/event"), s = function (e, t) {
                    this.onRender = e, this.pending = !1, this.changes = 0, this.$recursionLimit = 2, this.window = t || window;
                    var i = this;
                    this._flush = function (e) {
                        i.pending = !1;
                        var t = i.changes;
                        if (t && (n.blockIdle(100), i.changes = 0, i.onRender(t)), i.changes) {
                            if (i.$recursionLimit-- < 0) return;
                            i.schedule()
                        } else i.$recursionLimit = 2
                    }
                };
                (function () {
                    this.schedule = function (e) {
                        this.changes = this.changes | e, this.changes && !this.pending && (n.nextFrame(this._flush), this.pending = !0)
                    }, this.clear = function (e) {
                        var t = this.changes;
                        return this.changes = 0, t
                    }
                }).call(s.prototype), t.RenderLoop = s
            })), deAceFine("ace/layer/font_metrics", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/event", "ace/lib/useragent", "ace/lib/event_emitter"], (function (e, t, i) {
                var n = e("../lib/oop"), s = e("../lib/dom"), o = e("../lib/lang"), r = e("../lib/event"),
                    a = e("../lib/useragent"), l = e("../lib/event_emitter").EventEmitter, c = 256,
                    h = "function" == typeof ResizeObserver, u = 200, d = t.FontMetrics = function (e) {
                        this.el = s.createElement("div"), this.$setMeasureNodeStyles(this.el.style, !0), this.$main = s.createElement("div"), this.$setMeasureNodeStyles(this.$main.style), this.$measureNode = s.createElement("div"), this.$setMeasureNodeStyles(this.$measureNode.style), this.el.appendChild(this.$main), this.el.appendChild(this.$measureNode), e.appendChild(this.el), this.$measureNode.innerHTML = o.stringRepeat("X", c), this.$characterSize = {
                            width: 0,
                            height: 0
                        }, h ? this.$addObserver() : this.checkForSizeChanges()
                    };
                (function () {
                    n.implement(this, l), this.$characterSize = {
                        width: 0,
                        height: 0
                    }, this.$setMeasureNodeStyles = function (e, t) {
                        e.width = e.height = "auto", e.left = e.top = "0px", e.visibility = "hidden", e.position = "absolute", e.whiteSpace = "pre", a.isIE < 8 ? e["font-family"] = "inherit" : e.font = "inherit", e.overflow = t ? "hidden" : "visible"
                    }, this.checkForSizeChanges = function (e) {
                        if (void 0 === e && (e = this.$measureSizes()), e && (this.$characterSize.width !== e.width || this.$characterSize.height !== e.height)) {
                            this.$measureNode.style.fontWeight = "bold";
                            var t = this.$measureSizes();
                            this.$measureNode.style.fontWeight = "", this.$characterSize = e, this.charSizes = Object.create(null), this.allowBoldFonts = t && t.width === e.width && t.height === e.height, this._emit("changeCharacterSize", {data: e})
                        }
                    }, this.$addObserver = function () {
                        var e = this;
                        this.$observer = new window.ResizeObserver((function (t) {
                            var i = t[0].contentRect;
                            e.checkForSizeChanges({height: i.height, width: i.width / c})
                        })), this.$observer.observe(this.$measureNode)
                    }, this.$pollSizeChanges = function () {
                        if (this.$pollSizeChangesTimer || this.$observer) return this.$pollSizeChangesTimer;
                        var e = this;
                        return this.$pollSizeChangesTimer = r.onIdle((function t() {
                            e.checkForSizeChanges(), r.onIdle(t, 500)
                        }), 500)
                    }, this.setPolling = function (e) {
                        e ? this.$pollSizeChanges() : this.$pollSizeChangesTimer && (clearInterval(this.$pollSizeChangesTimer), this.$pollSizeChangesTimer = 0)
                    }, this.$measureSizes = function (e) {
                        var t = {
                            height: (e || this.$measureNode).clientHeight,
                            width: (e || this.$measureNode).clientWidth / c
                        };
                        return 0 === t.width || 0 === t.height ? null : t
                    }, this.$measureCharWidth = function (e) {
                        this.$main.innerHTML = o.stringRepeat(e, c);
                        var t = this.$main.getBoundingClientRect();
                        return t.width / c
                    }, this.getCharacterWidth = function (e) {
                        var t = this.charSizes[e];
                        return void 0 === t && (t = this.charSizes[e] = this.$measureCharWidth(e) / this.$characterSize.width), t
                    }, this.destroy = function () {
                        clearInterval(this.$pollSizeChangesTimer), this.$observer && this.$observer.disconnect(), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el)
                    }, this.$getZoom = function e(t) {
                        return t ? (window.getComputedStyle(t).zoom || 1) * e(t.parentElement) : 1
                    }, this.$initTransformMeasureNodes = function () {
                        var e = function (e, t) {
                            return ["div", {style: "position: absolute;top:" + e + "px;left:" + t + "px;"}]
                        };
                        this.els = s.buildDom([e(0, 0), e(u, 0), e(0, u), e(u, u)], this.el)
                    }, this.transformCoordinates = function (e, t) {
                        if (e) {
                            var i = this.$getZoom(this.el);
                            e = r(1 / i, e)
                        }

                        function n(e, t, i) {
                            var n = e[1] * t[0] - e[0] * t[1];
                            return [(-t[1] * i[0] + t[0] * i[1]) / n, (+e[1] * i[0] - e[0] * i[1]) / n]
                        }

                        function s(e, t) {
                            return [e[0] - t[0], e[1] - t[1]]
                        }

                        function o(e, t) {
                            return [e[0] + t[0], e[1] + t[1]]
                        }

                        function r(e, t) {
                            return [e * t[0], e * t[1]]
                        }

                        function a(e) {
                            var t = e.getBoundingClientRect();
                            return [t.left, t.top]
                        }

                        this.els || this.$initTransformMeasureNodes();
                        var l = a(this.els[0]), c = a(this.els[1]), h = a(this.els[2]), d = a(this.els[3]),
                            g = n(s(d, c), s(d, h), s(o(c, h), o(d, l))), f = r(1 + g[0], s(c, l)),
                            p = r(1 + g[1], s(h, l));
                        if (t) {
                            var m = t, v = g[0] * m[0] / u + g[1] * m[1] / u + 1, w = o(r(m[0], f), r(m[1], p));
                            return o(r(1 / v / u, w), l)
                        }
                        var b = s(e, l), y = n(s(f, r(g[0], b)), s(p, r(g[1], b)), b);
                        return r(u, y)
                    }
                }).call(d.prototype)
            })), deAceFine("ace/virtual_renderer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/config", "ace/layer/gutter", "ace/layer/marker", "ace/layer/text", "ace/layer/cursor", "ace/scrollbar", "ace/scrollbar", "ace/renderloop", "ace/layer/font_metrics", "ace/lib/event_emitter", "ace/lib/useragent"], (function (e, t, i) {
                var n = e("./lib/oop"), s = e("./lib/dom"), o = e("./config"), r = e("./layer/gutter").Gutter,
                    a = e("./layer/marker").Marker, l = e("./layer/text").Text, c = e("./layer/cursor").Cursor,
                    h = e("./scrollbar").HScrollBar, u = e("./scrollbar").VScrollBar, d = e("./renderloop").RenderLoop,
                    g = e("./layer/font_metrics").FontMetrics, f = e("./lib/event_emitter").EventEmitter,
                    p = '.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}.ace_editor {position: relative;overflow: hidden;font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', monospace;direction: ltr;text-align: left;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;box-sizing: border-box;min-width: 100%;contain: style size layout;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: \'\';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;contain: style size layout;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {position: absolute;top: 0;left: 0;right: 0;padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {contain: strict;position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;contain: strict;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: transparent;color: inherit;z-index: 1000;opacity: 1;}.ace_composition_placeholder { color: transparent }.ace_composition_marker { border-bottom: 1px solid;position: absolute;border-radius: 0;margin-top: 1px;}[ace_nocontext=true] {transform: none!important;filter: none!important;perspective: none!important;clip-path: none!important;mask : none!important;contain: none!important;perspective: none!important;mix-blend-mode: initial!important;z-index: auto;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;height: 1000000px;contain: style size layout;}.ace_text-layer {font: inherit !important;position: absolute;height: 1000000px;width: 1000000px;contain: style size layout;}.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {contain: style size layout;position: absolute;top: 0;left: 0;right: 0;}.ace_hidpi .ace_text-layer,.ace_hidpi .ace_gutter-layer,.ace_hidpi .ace_content,.ace_hidpi .ace_gutter {contain: strict;will-change: transform;}.ace_hidpi .ace_text-layer > .ace_line, .ace_hidpi .ace_text-layer > .ace_line_group {contain: strict;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {transition: opacity 0.18s;}.ace_animate-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: step-end;animation-name: blink-ace-animate;animation-iteration-count: infinite;}.ace_animate-blinking.ace_smooth-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: ease-in-out;animation-name: blink-ace-animate-smooth;}@keyframes blink-ace-animate {from, to { opacity: 1; }60% { opacity: 0; }}@keyframes blink-ace-animate-smooth {from, to { opacity: 1; }45% { opacity: 1; }60% { opacity: 0; }85% { opacity: 0; }}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;box-sizing: border-box;}.ace_line .ace_fold {box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_inline_button {border: 1px solid lightgray;display: inline-block;margin: -1px 8px;padding: 0 5px;pointer-events: auto;cursor: pointer;}.ace_inline_button:hover {border-color: gray;background: rgba(200,200,200,0.2);display: inline-block;pointer-events: auto;}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_mobile-menu {position: absolute;line-height: 1.5;border-radius: 4px;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;background: white;box-shadow: 1px 3px 2px grey;border: 1px solid #dcdcdc;color: black;}.ace_dark > .ace_mobile-menu {background: #333;color: #ccc;box-shadow: 1px 3px 2px grey;border: 1px solid #444;}.ace_mobile-button {padding: 2px;cursor: pointer;overflow: hidden;}.ace_mobile-button:hover {background-color: #eee;opacity:1;}.ace_mobile-button:active {background-color: #ddd;}',
                    m = e("./lib/useragent"), v = m.isIE;
                s.importCssString(p, "ace_editor.css");
                var w = function (e, t) {
                    var i = this;
                    this.container = e || s.createElement("div"), s.addCssClass(this.container, "ace_editor"), s.HI_DPI && s.addCssClass(this.container, "ace_hidpi"), this.setTheme(t), this.$gutter = s.createElement("div"), this.$gutter.className = "ace_gutter", this.container.appendChild(this.$gutter), this.$gutter.setAttribute("aria-hidden", !0), this.scroller = s.createElement("div"), this.scroller.className = "ace_scroller", this.container.appendChild(this.scroller), this.content = s.createElement("div"), this.content.className = "ace_content", this.scroller.appendChild(this.content), this.$gutterLayer = new r(this.$gutter), this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this)), this.$markerBack = new a(this.content);
                    var n = this.$textLayer = new l(this.content);
                    this.canvas = n.element, this.$markerFront = new a(this.content), this.$cursorLayer = new c(this.content), this.$horizScroll = !1, this.$vScroll = !1, this.scrollBar = this.scrollBarV = new u(this.container, this), this.scrollBarH = new h(this.container, this), this.scrollBarV.addEventListener("scroll", (function (e) {
                        i.$scrollAnimation || i.session.setScrollTop(e.data - i.scrollMargin.top)
                    })), this.scrollBarH.addEventListener("scroll", (function (e) {
                        i.$scrollAnimation || i.session.setScrollLeft(e.data - i.scrollMargin.left)
                    })), this.scrollTop = 0, this.scrollLeft = 0, this.cursorPos = {
                        row: 0,
                        column: 0
                    }, this.$fontMetrics = new g(this.container), this.$textLayer.$setFontMetrics(this.$fontMetrics), this.$textLayer.addEventListener("changeCharacterSize", (function (e) {
                        i.updateCharacterSize(), i.onResize(!0, i.gutterWidth, i.$size.width, i.$size.height), i._signal("changeCharacterSize", e)
                    })), this.$size = {
                        width: 0,
                        height: 0,
                        scrollerHeight: 0,
                        scrollerWidth: 0,
                        $dirty: !0
                    }, this.layerConfig = {
                        width: 1,
                        padding: 0,
                        firstRow: 0,
                        firstRowScreen: 0,
                        lastRow: 0,
                        lineHeight: 0,
                        characterWidth: 0,
                        minHeight: 1,
                        maxHeight: 1,
                        offset: 0,
                        height: 1,
                        gutterOffset: 1
                    }, this.scrollMargin = {left: 0, right: 0, top: 0, bottom: 0, v: 0, h: 0}, this.margin = {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        v: 0,
                        h: 0
                    }, this.$keepTextAreaAtCursor = !m.isIOS, this.$loop = new d(this.$renderChanges.bind(this), this.container.ownerDocument.defaultView), this.$loop.schedule(this.CHANGE_FULL), this.updateCharacterSize(), this.setPadding(4), o.resetOptions(this), o._signal("renderer", this)
                };
                (function () {
                    this.CHANGE_CURSOR = 1, this.CHANGE_MARKER = 2, this.CHANGE_GUTTER = 4, this.CHANGE_SCROLL = 8, this.CHANGE_LINES = 16, this.CHANGE_TEXT = 32, this.CHANGE_SIZE = 64, this.CHANGE_MARKER_BACK = 128, this.CHANGE_MARKER_FRONT = 256, this.CHANGE_FULL = 512, this.CHANGE_H_SCROLL = 1024, n.implement(this, f), this.updateCharacterSize = function () {
                        this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = this.$textLayer.allowBoldFonts, this.setStyle("ace_nobold", !this.$allowBoldFonts)), this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth(), this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight(), this.$updatePrintMargin(), s.setStyle(this.scroller.style, "line-height", this.lineHeight + "px")
                    }, this.setSession = function (e) {
                        this.session && this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode), this.session = e, e && this.scrollMargin.top && e.getScrollTop() <= 0 && e.setScrollTop(-this.scrollMargin.top), this.$cursorLayer.setSession(e), this.$markerBack.setSession(e), this.$markerFront.setSession(e), this.$gutterLayer.setSession(e), this.$textLayer.setSession(e), e && (this.$loop.schedule(this.CHANGE_FULL), this.session.$setFontMetrics(this.$fontMetrics), this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null, this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this), this.onChangeNewLineMode(), this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode))
                    }, this.updateLines = function (e, t, i) {
                        if (void 0 === t && (t = 1 / 0), this.$changedLines ? (this.$changedLines.firstRow > e && (this.$changedLines.firstRow = e), this.$changedLines.lastRow < t && (this.$changedLines.lastRow = t)) : this.$changedLines = {
                            firstRow: e,
                            lastRow: t
                        }, this.$changedLines.lastRow < this.layerConfig.firstRow) {
                            if (!i) return;
                            this.$changedLines.lastRow = this.layerConfig.lastRow
                        }
                        this.$changedLines.firstRow > this.layerConfig.lastRow || this.$loop.schedule(this.CHANGE_LINES)
                    }, this.onChangeNewLineMode = function () {
                        this.$loop.schedule(this.CHANGE_TEXT), this.$textLayer.$updateEolChar(), this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR)
                    }, this.onChangeTabSize = function () {
                        this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER), this.$textLayer.onChangeTabSize()
                    }, this.updateText = function () {
                        this.$loop.schedule(this.CHANGE_TEXT)
                    }, this.updateFull = function (e) {
                        e ? this.$renderChanges(this.CHANGE_FULL, !0) : this.$loop.schedule(this.CHANGE_FULL)
                    }, this.updateFontSize = function () {
                        this.$textLayer.checkForSizeChanges()
                    }, this.$changes = 0, this.$updateSizeAsync = function () {
                        this.$loop.pending ? this.$size.$dirty = !0 : this.onResize()
                    }, this.onResize = function (e, t, i, n) {
                        if (!(this.resizing > 2)) {
                            this.resizing > 0 ? this.resizing++ : this.resizing = e ? 1 : 0;
                            var s = this.container;
                            n || (n = s.clientHeight || s.scrollHeight), i || (i = s.clientWidth || s.scrollWidth);
                            var o = this.$updateCachedSize(e, t, i, n);
                            if (!this.$size.scrollerHeight || !i && !n) return this.resizing = 0;
                            e && (this.$gutterLayer.$padding = null), e ? this.$renderChanges(o | this.$changes, !0) : this.$loop.schedule(o | this.$changes), this.resizing && (this.resizing = 0), this.scrollBarV.scrollLeft = this.scrollBarV.scrollTop = null
                        }
                    }, this.$updateCachedSize = function (e, t, i, n) {
                        n -= this.$extraHeight || 0;
                        var o = 0, r = this.$size, a = {
                            width: r.width,
                            height: r.height,
                            scrollerHeight: r.scrollerHeight,
                            scrollerWidth: r.scrollerWidth
                        };
                        if (n && (e || r.height != n) && (r.height = n, o |= this.CHANGE_SIZE, r.scrollerHeight = r.height, this.$horizScroll && (r.scrollerHeight -= this.scrollBarH.getHeight()), this.scrollBarV.element.style.bottom = this.scrollBarH.getHeight() + "px", o |= this.CHANGE_SCROLL), i && (e || r.width != i)) {
                            o |= this.CHANGE_SIZE, r.width = i, null == t && (t = this.$showGutter ? this.$gutter.offsetWidth : 0), this.gutterWidth = t, s.setStyle(this.scrollBarH.element.style, "left", t + "px"), s.setStyle(this.scroller.style, "left", t + this.margin.left + "px"), r.scrollerWidth = Math.max(0, i - t - this.scrollBarV.getWidth() - this.margin.h), s.setStyle(this.$gutter.style, "left", this.margin.left + "px");
                            var l = this.scrollBarV.getWidth() + "px";
                            s.setStyle(this.scrollBarH.element.style, "right", l), s.setStyle(this.scroller.style, "right", l), s.setStyle(this.scroller.style, "bottom", this.scrollBarH.getHeight()), (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || e) && (o |= this.CHANGE_FULL)
                        }
                        return r.$dirty = !i || !n, o && this._signal("resize", a), o
                    }, this.onGutterResize = function (e) {
                        var t = this.$showGutter ? e : 0;
                        t != this.gutterWidth && (this.$changes |= this.$updateCachedSize(!0, t, this.$size.width, this.$size.height)), this.session.getUseWrapMode() && this.adjustWrapLimit() ? this.$loop.schedule(this.CHANGE_FULL) : this.$size.$dirty ? this.$loop.schedule(this.CHANGE_FULL) : this.$computeLayerConfig()
                    }, this.adjustWrapLimit = function () {
                        var e = this.$size.scrollerWidth - 2 * this.$padding, t = Math.floor(e / this.characterWidth);
                        return this.session.adjustWrapLimit(t, this.$showPrintMargin && this.$printMarginColumn)
                    }, this.setAnimatedScroll = function (e) {
                        this.setOption("animatedScroll", e)
                    }, this.getAnimatedScroll = function () {
                        return this.$animatedScroll
                    }, this.setShowInvisibles = function (e) {
                        this.setOption("showInvisibles", e), this.session.$bidiHandler.setShowInvisibles(e)
                    }, this.getShowInvisibles = function () {
                        return this.getOption("showInvisibles")
                    }, this.getDisplayIndentGuides = function () {
                        return this.getOption("displayIndentGuides")
                    }, this.setDisplayIndentGuides = function (e) {
                        this.setOption("displayIndentGuides", e)
                    }, this.setShowPrintMargin = function (e) {
                        this.setOption("showPrintMargin", e)
                    }, this.getShowPrintMargin = function () {
                        return this.getOption("showPrintMargin")
                    }, this.setPrintMarginColumn = function (e) {
                        this.setOption("printMarginColumn", e)
                    }, this.getPrintMarginColumn = function () {
                        return this.getOption("printMarginColumn")
                    }, this.getShowGutter = function () {
                        return this.getOption("showGutter")
                    }, this.setShowGutter = function (e) {
                        return this.setOption("showGutter", e)
                    }, this.getFadeFoldWidgets = function () {
                        return this.getOption("fadeFoldWidgets")
                    }, this.setFadeFoldWidgets = function (e) {
                        this.setOption("fadeFoldWidgets", e)
                    }, this.setHighlightGutterLine = function (e) {
                        this.setOption("highlightGutterLine", e)
                    }, this.getHighlightGutterLine = function () {
                        return this.getOption("highlightGutterLine")
                    }, this.$updatePrintMargin = function () {
                        if (this.$showPrintMargin || this.$printMarginEl) {
                            if (!this.$printMarginEl) {
                                var e = s.createElement("div");
                                e.className = "ace_layer ace_print-margin-layer", this.$printMarginEl = s.createElement("div"), this.$printMarginEl.className = "ace_print-margin", e.appendChild(this.$printMarginEl), this.content.insertBefore(e, this.content.firstChild)
                            }
                            var t = this.$printMarginEl.style;
                            t.left = Math.round(this.characterWidth * this.$printMarginColumn + this.$padding) + "px", t.visibility = this.$showPrintMargin ? "visible" : "hidden", this.session && -1 == this.session.$wrap && this.adjustWrapLimit()
                        }
                    }, this.getContainerElement = function () {
                        return this.container
                    }, this.getMouseEventTarget = function () {
                        return this.scroller
                    }, this.getTextAreaContainer = function () {
                        return this.container
                    }, this.$moveTextAreaToCursor = function () {
                        if (!this.$isMousePressed) {
                            var e = this.textarea.style, t = this.$composition;
                            if (this.$keepTextAreaAtCursor || t) {
                                var i = this.$cursorLayer.$pixelPos;
                                if (i) {
                                    t && t.markerRange && (i = this.$cursorLayer.getPixelPosition(t.markerRange.start, !0));
                                    var n = this.layerConfig, o = i.top, r = i.left;
                                    o -= n.offset;
                                    var a = t && t.useTextareaForIME ? this.lineHeight : v ? 0 : 1;
                                    if (o < 0 || o > n.height - a) s.translate(this.textarea, 0, 0); else {
                                        var l = 1;
                                        if (t) if (t.useTextareaForIME) {
                                            var c = this.textarea.value;
                                            l = this.characterWidth * this.session.$getStringScreenWidth(c)[0], a += 2
                                        } else o += this.lineHeight + 2; else o += this.lineHeight;
                                        r -= this.scrollLeft, r > this.$size.scrollerWidth - l && (r = this.$size.scrollerWidth - l), r += this.gutterWidth + this.margin.left, s.setStyle(e, "height", a + "px"), s.setStyle(e, "width", l + "px"), s.translate(this.textarea, Math.min(r, this.$size.scrollerWidth - l), Math.min(o, this.$size.height - a))
                                    }
                                }
                            } else s.translate(this.textarea, -100, 0)
                        }
                    }, this.getFirstVisibleRow = function () {
                        return this.layerConfig.firstRow
                    }, this.getFirstFullyVisibleRow = function () {
                        return this.layerConfig.firstRow + (0 === this.layerConfig.offset ? 0 : 1)
                    }, this.getLastFullyVisibleRow = function () {
                        var e = this.layerConfig, t = e.lastRow,
                            i = this.session.documentToScreenRow(t, 0) * e.lineHeight;
                        return i - this.session.getScrollTop() > e.height - e.lineHeight ? t - 1 : t
                    }, this.getLastVisibleRow = function () {
                        return this.layerConfig.lastRow
                    }, this.$padding = null, this.setPadding = function (e) {
                        this.$padding = e, this.$textLayer.setPadding(e), this.$cursorLayer.setPadding(e), this.$markerFront.setPadding(e), this.$markerBack.setPadding(e), this.$loop.schedule(this.CHANGE_FULL), this.$updatePrintMargin()
                    }, this.setScrollMargin = function (e, t, i, n) {
                        var s = this.scrollMargin;
                        s.top = 0 | e, s.bottom = 0 | t, s.right = 0 | n, s.left = 0 | i, s.v = s.top + s.bottom, s.h = s.left + s.right, s.top && this.scrollTop <= 0 && this.session && this.session.setScrollTop(-s.top), this.updateFull()
                    }, this.setMargin = function (e, t, i, n) {
                        var s = this.margin;
                        s.top = 0 | e, s.bottom = 0 | t, s.right = 0 | n, s.left = 0 | i, s.v = s.top + s.bottom, s.h = s.left + s.right, this.$updateCachedSize(!0, this.gutterWidth, this.$size.width, this.$size.height), this.updateFull()
                    }, this.getHScrollBarAlwaysVisible = function () {
                        return this.$hScrollBarAlwaysVisible
                    }, this.setHScrollBarAlwaysVisible = function (e) {
                        this.setOption("hScrollBarAlwaysVisible", e)
                    }, this.getVScrollBarAlwaysVisible = function () {
                        return this.$vScrollBarAlwaysVisible
                    }, this.setVScrollBarAlwaysVisible = function (e) {
                        this.setOption("vScrollBarAlwaysVisible", e)
                    }, this.$updateScrollBarV = function () {
                        var e = this.layerConfig.maxHeight, t = this.$size.scrollerHeight;
                        !this.$maxLines && this.$scrollPastEnd && (e -= (t - this.lineHeight) * this.$scrollPastEnd, this.scrollTop > e - t && (e = this.scrollTop + t, this.scrollBarV.scrollTop = null)), this.scrollBarV.setScrollHeight(e + this.scrollMargin.v), this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top)
                    }, this.$updateScrollBarH = function () {
                        this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h), this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left)
                    }, this.$frozen = !1, this.freeze = function () {
                        this.$frozen = !0
                    }, this.unfreeze = function () {
                        this.$frozen = !1
                    }, this.$renderChanges = function (e, t) {
                        if (this.$changes && (e |= this.$changes, this.$changes = 0), this.session && this.container.offsetWidth && !this.$frozen && (e || t)) {
                            if (this.$size.$dirty) return this.$changes |= e, this.onResize(!0);
                            this.lineHeight || this.$textLayer.checkForSizeChanges(), this._signal("beforeRender"), this.session && this.session.$bidiHandler && this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics);
                            var i = this.layerConfig;
                            if (e & this.CHANGE_FULL || e & this.CHANGE_SIZE || e & this.CHANGE_TEXT || e & this.CHANGE_LINES || e & this.CHANGE_SCROLL || e & this.CHANGE_H_SCROLL) {
                                if (e |= this.$computeLayerConfig() | this.$loop.clear(), i.firstRow != this.layerConfig.firstRow && i.firstRowScreen == this.layerConfig.firstRowScreen) {
                                    var n = this.scrollTop + (i.firstRow - this.layerConfig.firstRow) * this.lineHeight;
                                    n > 0 && (this.scrollTop = n, e |= this.CHANGE_SCROLL, e |= this.$computeLayerConfig() | this.$loop.clear())
                                }
                                i = this.layerConfig, this.$updateScrollBarV(), e & this.CHANGE_H_SCROLL && this.$updateScrollBarH(), s.translate(this.content, -this.scrollLeft, -i.offset);
                                var o = i.width + 2 * this.$padding + "px", r = i.minHeight + "px";
                                s.setStyle(this.content.style, "width", o), s.setStyle(this.content.style, "height", r)
                            }
                            if (e & this.CHANGE_H_SCROLL && (s.translate(this.content, -this.scrollLeft, -i.offset), this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller" : "ace_scroller ace_scroll-left"), e & this.CHANGE_FULL) return this.$changedLines = null, this.$textLayer.update(i), this.$showGutter && this.$gutterLayer.update(i), this.$markerBack.update(i), this.$markerFront.update(i), this.$cursorLayer.update(i), this.$moveTextAreaToCursor(), void this._signal("afterRender");
                            if (e & this.CHANGE_SCROLL) return this.$changedLines = null, e & this.CHANGE_TEXT || e & this.CHANGE_LINES ? this.$textLayer.update(i) : this.$textLayer.scrollLines(i), this.$showGutter && (e & this.CHANGE_GUTTER || e & this.CHANGE_LINES ? this.$gutterLayer.update(i) : this.$gutterLayer.scrollLines(i)), this.$markerBack.update(i), this.$markerFront.update(i), this.$cursorLayer.update(i), this.$moveTextAreaToCursor(), void this._signal("afterRender");
                            e & this.CHANGE_TEXT ? (this.$changedLines = null, this.$textLayer.update(i), this.$showGutter && this.$gutterLayer.update(i)) : e & this.CHANGE_LINES ? (this.$updateLines() || e & this.CHANGE_GUTTER && this.$showGutter) && this.$gutterLayer.update(i) : e & this.CHANGE_TEXT || e & this.CHANGE_GUTTER ? this.$showGutter && this.$gutterLayer.update(i) : e & this.CHANGE_CURSOR && this.$highlightGutterLine && this.$gutterLayer.updateLineHighlight(i), e & this.CHANGE_CURSOR && (this.$cursorLayer.update(i), this.$moveTextAreaToCursor()), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update(i), e & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update(i), this._signal("afterRender")
                        } else this.$changes |= e
                    }, this.$autosize = function () {
                        var e = this.session.getScreenLength() * this.lineHeight, t = this.$maxLines * this.lineHeight,
                            i = Math.min(t, Math.max((this.$minLines || 1) * this.lineHeight, e)) + this.scrollMargin.v + (this.$extraHeight || 0);
                        this.$horizScroll && (i += this.scrollBarH.getHeight()), this.$maxPixelHeight && i > this.$maxPixelHeight && (i = this.$maxPixelHeight);
                        var n = i <= 2 * this.lineHeight, s = !n && e > t;
                        if (i != this.desiredHeight || this.$size.height != this.desiredHeight || s != this.$vScroll) {
                            s != this.$vScroll && (this.$vScroll = s, this.scrollBarV.setVisible(s));
                            var o = this.container.clientWidth;
                            this.container.style.height = i + "px", this.$updateCachedSize(!0, this.$gutterWidth, o, i), this.desiredHeight = i, this._signal("autosize")
                        }
                    }, this.$computeLayerConfig = function () {
                        var e = this.session, t = this.$size, i = t.height <= 2 * this.lineHeight,
                            n = this.session.getScreenLength(), s = n * this.lineHeight, o = this.$getLongestLine(),
                            r = !i && (this.$hScrollBarAlwaysVisible || t.scrollerWidth - o - 2 * this.$padding < 0),
                            a = this.$horizScroll !== r;
                        a && (this.$horizScroll = r, this.scrollBarH.setVisible(r));
                        var l = this.$vScroll;
                        this.$maxLines && this.lineHeight > 1 && this.$autosize();
                        var c = t.scrollerHeight + this.lineHeight,
                            h = !this.$maxLines && this.$scrollPastEnd ? (t.scrollerHeight - this.lineHeight) * this.$scrollPastEnd : 0;
                        s += h;
                        var u = this.scrollMargin;
                        this.session.setScrollTop(Math.max(-u.top, Math.min(this.scrollTop, s - t.scrollerHeight + u.bottom))), this.session.setScrollLeft(Math.max(-u.left, Math.min(this.scrollLeft, o + 2 * this.$padding - t.scrollerWidth + u.right)));
                        var d = !i && (this.$vScrollBarAlwaysVisible || t.scrollerHeight - s + h < 0 || this.scrollTop > u.top),
                            g = l !== d;
                        g && (this.$vScroll = d, this.scrollBarV.setVisible(d));
                        var f, p, m = this.scrollTop % this.lineHeight, v = Math.ceil(c / this.lineHeight) - 1,
                            w = Math.max(0, Math.round((this.scrollTop - m) / this.lineHeight)), b = w + v,
                            y = this.lineHeight;
                        w = e.screenToDocumentRow(w, 0);
                        var $ = e.getFoldLine(w);
                        $ && (w = $.start.row), f = e.documentToScreenRow(w, 0), p = e.getRowLength(w) * y, b = Math.min(e.screenToDocumentRow(b, 0), e.getLength() - 1), c = t.scrollerHeight + e.getRowLength(b) * y + p, m = this.scrollTop - f * y;
                        var S = 0;
                        return (this.layerConfig.width != o || a) && (S = this.CHANGE_H_SCROLL), (a || g) && (S |= this.$updateCachedSize(!0, this.gutterWidth, t.width, t.height), this._signal("scrollbarVisibilityChanged"), g && (o = this.$getLongestLine())), this.layerConfig = {
                            width: o,
                            padding: this.$padding,
                            firstRow: w,
                            firstRowScreen: f,
                            lastRow: b,
                            lineHeight: y,
                            characterWidth: this.characterWidth,
                            minHeight: c,
                            maxHeight: s,
                            offset: m,
                            gutterOffset: y ? Math.max(0, Math.ceil((m + t.height - t.scrollerHeight) / y)) : 0,
                            height: this.$size.scrollerHeight
                        }, this.session.$bidiHandler && this.session.$bidiHandler.setContentWidth(o - this.$padding), S
                    }, this.$updateLines = function () {
                        if (this.$changedLines) {
                            var e = this.$changedLines.firstRow, t = this.$changedLines.lastRow;
                            this.$changedLines = null;
                            var i = this.layerConfig;
                            if (!(e > i.lastRow + 1) && !(t < i.firstRow)) return t === 1 / 0 ? (this.$showGutter && this.$gutterLayer.update(i), void this.$textLayer.update(i)) : (this.$textLayer.updateLines(i, e, t), !0)
                        }
                    }, this.$getLongestLine = function () {
                        var e = this.session.getScreenWidth();
                        return this.showInvisibles && !this.session.$useWrapMode && (e += 1), this.$textLayer && e > this.$textLayer.MAX_LINE_LENGTH && (e = this.$textLayer.MAX_LINE_LENGTH + 30), Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(e * this.characterWidth))
                    }, this.updateFrontMarkers = function () {
                        this.$markerFront.setMarkers(this.session.getMarkers(!0)), this.$loop.schedule(this.CHANGE_MARKER_FRONT)
                    }, this.updateBackMarkers = function () {
                        this.$markerBack.setMarkers(this.session.getMarkers()), this.$loop.schedule(this.CHANGE_MARKER_BACK)
                    }, this.addGutterDecoration = function (e, t) {
                        this.$gutterLayer.addGutterDecoration(e, t)
                    }, this.removeGutterDecoration = function (e, t) {
                        this.$gutterLayer.removeGutterDecoration(e, t)
                    }, this.updateBreakpoints = function (e) {
                        this.$loop.schedule(this.CHANGE_GUTTER)
                    }, this.setAnnotations = function (e) {
                        this.$gutterLayer.setAnnotations(e), this.$loop.schedule(this.CHANGE_GUTTER)
                    }, this.updateCursor = function () {
                        this.$loop.schedule(this.CHANGE_CURSOR)
                    }, this.hideCursor = function () {
                        this.$cursorLayer.hideCursor()
                    }, this.showCursor = function () {
                        this.$cursorLayer.showCursor()
                    }, this.scrollSelectionIntoView = function (e, t, i) {
                        this.scrollCursorIntoView(e, i), this.scrollCursorIntoView(t, i)
                    }, this.scrollCursorIntoView = function (e, t, i) {
                        if (0 !== this.$size.scrollerHeight) {
                            var n = this.$cursorLayer.getPixelPosition(e), s = n.left, o = n.top, r = i && i.top || 0,
                                a = i && i.bottom || 0,
                                l = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;
                            l + r > o ? (t && l + r > o + this.lineHeight && (o -= t * this.$size.scrollerHeight), 0 === o && (o = -this.scrollMargin.top), this.session.setScrollTop(o)) : l + this.$size.scrollerHeight - a < o + this.lineHeight && (t && l + this.$size.scrollerHeight - a < o - this.lineHeight && (o += t * this.$size.scrollerHeight), this.session.setScrollTop(o + this.lineHeight + a - this.$size.scrollerHeight));
                            var c = this.scrollLeft;
                            c > s ? (s < this.$padding + 2 * this.layerConfig.characterWidth && (s = -this.scrollMargin.left), this.session.setScrollLeft(s)) : c + this.$size.scrollerWidth < s + this.characterWidth ? this.session.setScrollLeft(Math.round(s + this.characterWidth - this.$size.scrollerWidth)) : c <= this.$padding && s - c < this.characterWidth && this.session.setScrollLeft(0)
                        }
                    }, this.getScrollTop = function () {
                        return this.session.getScrollTop()
                    }, this.getScrollLeft = function () {
                        return this.session.getScrollLeft()
                    }, this.getScrollTopRow = function () {
                        return this.scrollTop / this.lineHeight
                    }, this.getScrollBottomRow = function () {
                        return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1)
                    }, this.scrollToRow = function (e) {
                        this.session.setScrollTop(e * this.lineHeight)
                    }, this.alignCursor = function (e, t) {
                        "number" == typeof e && (e = {row: e, column: 0});
                        var i = this.$cursorLayer.getPixelPosition(e), n = this.$size.scrollerHeight - this.lineHeight,
                            s = i.top - n * (t || 0);
                        return this.session.setScrollTop(s), s
                    }, this.STEPS = 8, this.$calcSteps = function (e, t) {
                        var i = 0, n = this.STEPS, s = [], o = function (e, t, i) {
                            return i * (Math.pow(e - 1, 3) + 1) + t
                        };
                        for (i = 0; i < n; ++i) s.push(o(i / this.STEPS, e, t - e));
                        return s
                    }, this.scrollToLine = function (e, t, i, n) {
                        var s = this.$cursorLayer.getPixelPosition({row: e, column: 0}), o = s.top;
                        t && (o -= this.$size.scrollerHeight / 2);
                        var r = this.scrollTop;
                        this.session.setScrollTop(o), !1 !== i && this.animateScrolling(r, n)
                    }, this.animateScrolling = function (e, t) {
                        var i = this.scrollTop;
                        if (this.$animatedScroll) {
                            var n = this;
                            if (e != i) {
                                if (this.$scrollAnimation) {
                                    var s = this.$scrollAnimation.steps;
                                    if (s.length && (e = s[0], e == i)) return
                                }
                                var o = n.$calcSteps(e, i);
                                this.$scrollAnimation = {
                                    from: e,
                                    to: i,
                                    steps: o
                                }, clearInterval(this.$timer), n.session.setScrollTop(o.shift()), n.session.$scrollTop = i, this.$timer = setInterval((function () {
                                    o.length ? (n.session.setScrollTop(o.shift()), n.session.$scrollTop = i) : null != i ? (n.session.$scrollTop = -1, n.session.setScrollTop(i), i = null) : (n.$timer = clearInterval(n.$timer), n.$scrollAnimation = null, t && t())
                                }), 10)
                            }
                        }
                    }, this.scrollToY = function (e) {
                        this.scrollTop !== e && (this.$loop.schedule(this.CHANGE_SCROLL), this.scrollTop = e)
                    }, this.scrollToX = function (e) {
                        this.scrollLeft !== e && (this.scrollLeft = e), this.$loop.schedule(this.CHANGE_H_SCROLL)
                    }, this.scrollTo = function (e, t) {
                        this.session.setScrollTop(t), this.session.setScrollLeft(t)
                    }, this.scrollBy = function (e, t) {
                        t && this.session.setScrollTop(this.session.getScrollTop() + t), e && this.session.setScrollLeft(this.session.getScrollLeft() + e)
                    }, this.isScrollableBy = function (e, t) {
                        return t < 0 && this.session.getScrollTop() >= 1 - this.scrollMargin.top || (t > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom || (e < 0 && this.session.getScrollLeft() >= 1 - this.scrollMargin.left || (e > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right || void 0)))
                    }, this.pixelToScreenCoordinates = function (e, t) {
                        var i;
                        if (this.$hasCssTransforms) {
                            i = {top: 0, left: 0};
                            var n = this.$fontMetrics.transformCoordinates([e, t]);
                            e = n[1] - this.gutterWidth - this.margin.left, t = n[0]
                        } else i = this.scroller.getBoundingClientRect();
                        var s = e + this.scrollLeft - i.left - this.$padding, o = s / this.characterWidth,
                            r = Math.floor((t + this.scrollTop - i.top) / this.lineHeight),
                            a = this.$blockCursor ? Math.floor(o) : Math.round(o);
                        return {row: r, column: a, side: o - a > 0 ? 1 : -1, offsetX: s}
                    }, this.screenToTextCoordinates = function (e, t) {
                        var i;
                        if (this.$hasCssTransforms) {
                            i = {top: 0, left: 0};
                            var n = this.$fontMetrics.transformCoordinates([e, t]);
                            e = n[1] - this.gutterWidth - this.margin.left, t = n[0]
                        } else i = this.scroller.getBoundingClientRect();
                        var s = e + this.scrollLeft - i.left - this.$padding, o = s / this.characterWidth,
                            r = this.$blockCursor ? Math.floor(o) : Math.round(o),
                            a = Math.floor((t + this.scrollTop - i.top) / this.lineHeight);
                        return this.session.screenToDocumentPosition(a, Math.max(r, 0), s)
                    }, this.textToScreenCoordinates = function (e, t) {
                        var i = this.scroller.getBoundingClientRect(), n = this.session.documentToScreenPosition(e, t),
                            s = this.$padding + (this.session.$bidiHandler.isBidiRow(n.row, e) ? this.session.$bidiHandler.getPosLeft(n.column) : Math.round(n.column * this.characterWidth)),
                            o = n.row * this.lineHeight;
                        return {pageX: i.left + s - this.scrollLeft, pageY: i.top + o - this.scrollTop}
                    }, this.visualizeFocus = function () {
                        s.addCssClass(this.container, "ace_focus")
                    }, this.visualizeBlur = function () {
                        s.removeCssClass(this.container, "ace_focus")
                    }, this.showComposition = function (e) {
                        this.$composition = e, e.cssText || (e.cssText = this.textarea.style.cssText), e.useTextareaForIME = this.$useTextareaForIME, this.$useTextareaForIME ? (s.addCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = "", this.$moveTextAreaToCursor(), this.$cursorLayer.element.style.display = "none") : e.markerId = this.session.addMarker(e.markerRange, "ace_composition_marker", "text")
                    },this.setCompositionText = function (e) {
                        var t = this.session.selection.cursor;
                        this.addToken(e, "composition_placeholder", t.row, t.column), this.$moveTextAreaToCursor()
                    },this.hideComposition = function () {
                        this.$composition && (this.$composition.markerId && this.session.removeMarker(this.$composition.markerId), s.removeCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = this.$composition.cssText, this.$composition = null, this.$cursorLayer.element.style.display = "")
                    },this.addToken = function (e, t, i, n) {
                        var s = this.session;
                        s.bgTokenizer.lines[i] = null;
                        var o = {type: t, value: e}, r = s.getTokens(i);
                        if (null == n) r.push(o); else for (var a = 0, l = 0; l < r.length; l++) {
                            var c = r[l];
                            if (a += c.value.length, n <= a) {
                                var h = c.value.length - (a - n), u = c.value.slice(0, h), d = c.value.slice(h);
                                r.splice(l, 1, {type: c.type, value: u}, o, {type: c.type, value: d});
                                break
                            }
                        }
                        this.updateLines(i, i)
                    },this.setTheme = function (e, t) {
                        var i = this;
                        if (this.$themeId = e, i._dispatchEvent("themeChange", {theme: e}), e && "string" != typeof e) r(e); else {
                            var n = e || this.$options.theme.initialValue;
                            o.loadModule(["theme", n], r)
                        }

                        function r(n) {
                            if (i.$themeId != e) return t && t();
                            if (!n || !n.cssClass) throw new Error("couldn't load module " + e + " or it didn't call define");
                            n.$id && (i.$themeId = n.$id), s.importCssString(n.cssText, n.cssClass, i.container), i.theme && s.removeCssClass(i.container, i.theme.cssClass);
                            var o = "padding" in n ? n.padding : "padding" in (i.theme || {}) ? 4 : i.$padding;
                            i.$padding && o != i.$padding && i.setPadding(o), i.$theme = n.cssClass, i.theme = n, s.addCssClass(i.container, n.cssClass), s.setCssClass(i.container, "ace_dark", n.isDark), i.$size && (i.$size.width = 0, i.$updateSizeAsync()), i._dispatchEvent("themeLoaded", {theme: n}), t && t()
                        }
                    },this.getTheme = function () {
                        return this.$themeId
                    },this.setStyle = function (e, t) {
                        s.setCssClass(this.container, e, !1 !== t)
                    },this.unsetStyle = function (e) {
                        s.removeCssClass(this.container, e)
                    },this.setCursorStyle = function (e) {
                        s.setStyle(this.scroller.style, "cursor", e)
                    },this.setMouseCursor = function (e) {
                        s.setStyle(this.scroller.style, "cursor", e)
                    },this.attachToShadowRoot = function () {
                        s.importCssString(p, "ace_editor.css", this.container)
                    },this.destroy = function () {
                        this.$fontMetrics.destroy(), this.$cursorLayer.destroy()
                    }
                }).call(w.prototype), o.defineOptions(w.prototype, "renderer", {
                    animatedScroll: {initialValue: !1}, showInvisibles: {
                        set: function (e) {
                            this.$textLayer.setShowInvisibles(e) && this.$loop.schedule(this.CHANGE_TEXT)
                        }, initialValue: !1
                    }, showPrintMargin: {
                        set: function () {
                            this.$updatePrintMargin()
                        }, initialValue: !0
                    }, printMarginColumn: {
                        set: function () {
                            this.$updatePrintMargin()
                        }, initialValue: 80
                    }, printMargin: {
                        set: function (e) {
                            "number" == typeof e && (this.$printMarginColumn = e), this.$showPrintMargin = !!e, this.$updatePrintMargin()
                        }, get: function () {
                            return this.$showPrintMargin && this.$printMarginColumn
                        }
                    }, showGutter: {
                        set: function (e) {
                            this.$gutter.style.display = e ? "block" : "none", this.$loop.schedule(this.CHANGE_FULL), this.onGutterResize()
                        }, initialValue: !0
                    }, fadeFoldWidgets: {
                        set: function (e) {
                            s.setCssClass(this.$gutter, "ace_fade-fold-widgets", e)
                        }, initialValue: !1
                    }, showFoldWidgets: {
                        set: function (e) {
                            this.$gutterLayer.setShowFoldWidgets(e), this.$loop.schedule(this.CHANGE_GUTTER)
                        }, initialValue: !0
                    }, displayIndentGuides: {
                        set: function (e) {
                            this.$textLayer.setDisplayIndentGuides(e) && this.$loop.schedule(this.CHANGE_TEXT)
                        }, initialValue: !0
                    }, highlightGutterLine: {
                        set: function (e) {
                            this.$gutterLayer.setHighlightGutterLine(e), this.$loop.schedule(this.CHANGE_GUTTER)
                        }, initialValue: !0
                    }, hScrollBarAlwaysVisible: {
                        set: function (e) {
                            this.$hScrollBarAlwaysVisible && this.$horizScroll || this.$loop.schedule(this.CHANGE_SCROLL)
                        }, initialValue: !1
                    }, vScrollBarAlwaysVisible: {
                        set: function (e) {
                            this.$vScrollBarAlwaysVisible && this.$vScroll || this.$loop.schedule(this.CHANGE_SCROLL)
                        }, initialValue: !1
                    }, fontSize: {
                        set: function (e) {
                            "number" == typeof e && (e += "px"), this.container.style.fontSize = e, this.updateFontSize()
                        }, initialValue: 12
                    }, fontFamily: {
                        set: function (e) {
                            this.container.style.fontFamily = e, this.updateFontSize()
                        }
                    }, maxLines: {
                        set: function (e) {
                            this.updateFull()
                        }
                    }, minLines: {
                        set: function (e) {
                            this.$minLines < 562949953421311 || (this.$minLines = 0), this.updateFull()
                        }
                    }, maxPixelHeight: {
                        set: function (e) {
                            this.updateFull()
                        }, initialValue: 0
                    }, scrollPastEnd: {
                        set: function (e) {
                            e = +e || 0, this.$scrollPastEnd != e && (this.$scrollPastEnd = e, this.$loop.schedule(this.CHANGE_SCROLL))
                        }, initialValue: 0, handlesSet: !0
                    }, fixedWidthGutter: {
                        set: function (e) {
                            this.$gutterLayer.$fixedWidth = !!e, this.$loop.schedule(this.CHANGE_GUTTER)
                        }
                    }, theme: {
                        set: function (e) {
                            this.setTheme(e)
                        }, get: function () {
                            return this.$themeId || this.theme
                        }, initialValue: "./theme/textmate", handlesSet: !0
                    }, hasCssTransforms: {}, useTextareaForIME: {initialValue: !m.isMobile && !m.isIE}
                }), t.VirtualRenderer = w
            })), deAceFine("ace/worker/worker_client", ["require", "exports", "module", "ace/lib/oop", "ace/lib/net", "ace/lib/event_emitter", "ace/config"], (function (e, t, i) {
                var n = e("../lib/oop"), s = e("../lib/net"), o = e("../lib/event_emitter").EventEmitter,
                    r = e("../config");

                function a(e) {
                    var t = "importScripts('" + s.qualifyURL(e) + "');";
                    try {
                        return new Blob([t], {type: "application/javascript"})
                    } catch (o) {
                        var i = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder, n = new i;
                        return n.append(t), n.getBlob("application/javascript")
                    }
                }

                function l(e) {
                    if ("undefined" == typeof Worker) return {
                        postMessage: function () {
                        }, terminate: function () {
                        }
                    };
                    if (r.get("loadWorkerFromBlob")) {
                        var t = a(e), i = window.URL || window.webkitURL, n = i.createObjectURL(t);
                        return new Worker(n)
                    }
                    return new Worker(e)
                }

                var c = function (e) {
                    e.postMessage || (e = this.$createWorkerFromOldConfig.apply(this, arguments)), this.$worker = e, this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.onMessage = this.onMessage.bind(this), this.callbackId = 1, this.callbacks = {}, this.$worker.onmessage = this.onMessage
                };
                (function () {
                    n.implement(this, o), this.$createWorkerFromOldConfig = function (t, i, n, s, o) {
                        if (e.nameToUrl && !e.toUrl && (e.toUrl = e.nameToUrl), r.get("packaged") || !e.toUrl) s = s || r.moduleUrl(i, "worker"); else {
                            var a = this.$normalizePath;
                            s = s || a(e.toUrl("ace/worker/worker.js", null, "_"));
                            var c = {};
                            t.forEach((function (t) {
                                c[t] = a(e.toUrl(t, null, "_").replace(/(\.js)?(\?.*)?$/, ""))
                            }))
                        }
                        return this.$worker = l(s), o && this.send("importScripts", o), this.$worker.postMessage({
                            init: !0,
                            tlns: c,
                            module: i,
                            classname: n
                        }), this.$worker
                    }, this.onMessage = function (e) {
                        var t = e.data;
                        switch (t.type) {
                            case"event":
                                this._signal(t.name, {data: t.data});
                                break;
                            case"call":
                                var i = this.callbacks[t.id];
                                i && (i(t.data), delete this.callbacks[t.id]);
                                break;
                            case"error":
                                this.reportError(t.data);
                                break;
                            case"log":
                                window.console && console.log && console.log.apply(console, t.data);
                                break
                        }
                    }, this.reportError = function (e) {
                        window.console && console.error && console.error(e)
                    }, this.$normalizePath = function (e) {
                        return s.qualifyURL(e)
                    }, this.terminate = function () {
                        this._signal("terminate", {}), this.deltaQueue = null, this.$worker.terminate(), this.$worker = null, this.$doc && this.$doc.off("change", this.changeListener), this.$doc = null
                    }, this.send = function (e, t) {
                        this.$worker.postMessage({command: e, args: t})
                    }, this.call = function (e, t, i) {
                        if (i) {
                            var n = this.callbackId++;
                            this.callbacks[n] = i, t.push(n)
                        }
                        this.send(e, t)
                    }, this.emit = function (e, t) {
                        try {
                            t.data && t.data.err && (t.data.err = {
                                message: t.data.err.message,
                                stack: t.data.err.stack,
                                code: t.data.err.code
                            }), this.$worker.postMessage({event: e, data: {data: t.data}})
                        } catch (i) {
                            console.error(i.stack)
                        }
                    }, this.attachToDocument = function (e) {
                        this.$doc && this.terminate(), this.$doc = e, this.call("setValue", [e.getValue()]), e.on("change", this.changeListener)
                    }, this.changeListener = function (e) {
                        this.deltaQueue || (this.deltaQueue = [], setTimeout(this.$sendDeltaQueue, 0)), "insert" == e.action ? this.deltaQueue.push(e.start, e.lines) : this.deltaQueue.push(e.start, e.end)
                    }, this.$sendDeltaQueue = function () {
                        var e = this.deltaQueue;
                        e && (this.deltaQueue = null, e.length > 50 && e.length > this.$doc.getLength() >> 1 ? this.call("setValue", [this.$doc.getValue()]) : this.emit("change", {data: e}))
                    }
                }).call(c.prototype);
                var h = function (e, t, i) {
                    var n = null, s = !1, a = Object.create(o), l = [], h = new c({
                        messageBuffer: l, terminate: function () {
                        }, postMessage: function (e) {
                            l.push(e), n && (s ? setTimeout(u) : u())
                        }
                    });
                    h.setEmitSync = function (e) {
                        s = e
                    };
                    var u = function () {
                        var e = l.shift();
                        e.command ? n[e.command].apply(n, e.args) : e.event && a._signal(e.event, e.data)
                    };
                    return a.postMessage = function (e) {
                        h.onMessage({data: e})
                    }, a.callback = function (e, t) {
                        this.postMessage({type: "call", id: t, data: e})
                    }, a.emit = function (e, t) {
                        this.postMessage({type: "event", name: e, data: t})
                    }, r.loadModule(["worker", t], (function (e) {
                        n = new e[i](a);
                        while (l.length) u()
                    })), h
                };
                t.UIWorkerClient = h, t.WorkerClient = c, t.createWorker = l
            })), deAceFine("ace/placeholder", ["require", "exports", "module", "ace/range", "ace/lib/event_emitter", "ace/lib/oop"], (function (e, t, i) {
                var n = e("./range").Range, s = e("./lib/event_emitter").EventEmitter, o = e("./lib/oop"),
                    r = function (e, t, i, n, s, o) {
                        var r = this;
                        this.length = t, this.session = e, this.doc = e.getDocument(), this.mainClass = s, this.othersClass = o, this.$onUpdate = this.onUpdate.bind(this), this.doc.on("change", this.$onUpdate), this.$others = n, this.$onCursorChange = function () {
                            setTimeout((function () {
                                r.onCursorChange()
                            }))
                        }, this.$pos = i;
                        var a = e.getUndoManager().$undoStack || e.getUndoManager().$undostack || {length: -1};
                        this.$undoStackDepth = a.length, this.setup(), e.selection.on("changeCursor", this.$onCursorChange)
                    };
                (function () {
                    o.implement(this, s), this.setup = function () {
                        var e = this, t = this.doc, i = this.session;
                        this.selectionBefore = i.selection.toJSON(), i.selection.inMultiSelectMode && i.selection.toSingleRange(), this.pos = t.createAnchor(this.$pos.row, this.$pos.column);
                        var s = this.pos;
                        s.$insertRight = !0, s.detach(), s.markerId = i.addMarker(new n(s.row, s.column, s.row, s.column + this.length), this.mainClass, null, !1), this.others = [], this.$others.forEach((function (i) {
                            var n = t.createAnchor(i.row, i.column);
                            n.$insertRight = !0, n.detach(), e.others.push(n)
                        })), i.setUndoSelect(!1)
                    }, this.showOtherMarkers = function () {
                        if (!this.othersActive) {
                            var e = this.session, t = this;
                            this.othersActive = !0, this.others.forEach((function (i) {
                                i.markerId = e.addMarker(new n(i.row, i.column, i.row, i.column + t.length), t.othersClass, null, !1)
                            }))
                        }
                    }, this.hideOtherMarkers = function () {
                        if (this.othersActive) {
                            this.othersActive = !1;
                            for (var e = 0; e < this.others.length; e++) this.session.removeMarker(this.others[e].markerId)
                        }
                    }, this.onUpdate = function (e) {
                        if (this.$updating) return this.updateAnchors(e);
                        var t = e;
                        if (t.start.row === t.end.row && t.start.row === this.pos.row) {
                            this.$updating = !0;
                            var i = "insert" === e.action ? t.end.column - t.start.column : t.start.column - t.end.column,
                                s = t.start.column >= this.pos.column && t.start.column <= this.pos.column + this.length + 1,
                                o = t.start.column - this.pos.column;
                            if (this.updateAnchors(e), s && (this.length += i), s && !this.session.$fromUndo) if ("insert" === e.action) for (var r = this.others.length - 1; r >= 0; r--) {
                                var a = this.others[r], l = {row: a.row, column: a.column + o};
                                this.doc.insertMergedLines(l, e.lines)
                            } else if ("remove" === e.action) for (r = this.others.length - 1; r >= 0; r--) {
                                a = this.others[r], l = {row: a.row, column: a.column + o};
                                this.doc.remove(new n(l.row, l.column, l.row, l.column - i))
                            }
                            this.$updating = !1, this.updateMarkers()
                        }
                    }, this.updateAnchors = function (e) {
                        this.pos.onChange(e);
                        for (var t = this.others.length; t--;) this.others[t].onChange(e);
                        this.updateMarkers()
                    }, this.updateMarkers = function () {
                        if (!this.$updating) {
                            var e = this, t = this.session, i = function (i, s) {
                                t.removeMarker(i.markerId), i.markerId = t.addMarker(new n(i.row, i.column, i.row, i.column + e.length), s, null, !1)
                            };
                            i(this.pos, this.mainClass);
                            for (var s = this.others.length; s--;) i(this.others[s], this.othersClass)
                        }
                    }, this.onCursorChange = function (e) {
                        if (!this.$updating && this.session) {
                            var t = this.session.selection.getCursor();
                            t.row === this.pos.row && t.column >= this.pos.column && t.column <= this.pos.column + this.length ? (this.showOtherMarkers(), this._emit("cursorEnter", e)) : (this.hideOtherMarkers(), this._emit("cursorLeave", e))
                        }
                    }, this.detach = function () {
                        this.session.removeMarker(this.pos && this.pos.markerId), this.hideOtherMarkers(), this.doc.removeEventListener("change", this.$onUpdate), this.session.selection.removeEventListener("changeCursor", this.$onCursorChange), this.session.setUndoSelect(!0), this.session = null
                    }, this.cancel = function () {
                        if (-1 !== this.$undoStackDepth) {
                            for (var e = this.session.getUndoManager(), t = (e.$undoStack || e.$undostack).length - this.$undoStackDepth, i = 0; i < t; i++) e.undo(this.session, !0);
                            this.selectionBefore && this.session.selection.fromJSON(this.selectionBefore)
                        }
                    }
                }).call(r.prototype), t.PlaceHolder = r
            })), deAceFine("ace/mouse/multi_select_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], (function (e, t, i) {
                var n = e("../lib/event"), s = e("../lib/useragent");

                function o(e, t) {
                    return e.row == t.row && e.column == t.column
                }

                function r(e) {
                    var t = e.domEvent, i = t.altKey, r = t.shiftKey, a = t.ctrlKey, l = e.getAccelKey(),
                        c = e.getButton();
                    if (a && s.isMac && (c = t.button), e.editor.inMultiSelectMode && 2 == c) e.editor.textInput.onContextMenu(e.domEvent); else if (a || i || l) {
                        if (0 === c) {
                            var h, u = e.editor, d = u.selection, g = u.inMultiSelectMode, f = e.getDocumentPosition(),
                                p = d.getCursor(), m = e.inSelection() || d.isEmpty() && o(f, p), v = e.x, w = e.y,
                                b = function (e) {
                                    v = e.clientX, w = e.clientY
                                }, y = u.session, $ = u.renderer.pixelToScreenCoordinates(v, w), S = $;
                            if (u.$mouseHandler.$enableJumpToDef) a && i || l && i ? h = r ? "block" : "add" : i && u.$blockSelectEnabled && (h = "block"); else if (l && !i) {
                                if (h = "add", !g && r) return
                            } else i && u.$blockSelectEnabled && (h = "block");
                            if (h && s.isMac && t.ctrlKey && u.$mouseHandler.cancelContextMenu(), "add" == h) {
                                if (!g && m) return;
                                if (!g) {
                                    var x = d.toOrientedRange();
                                    u.addSelectionMarker(x)
                                }
                                var C = d.rangeList.rangeAtPoint(f);
                                u.inVirtualSelectionMode = !0, r && (C = null, x = d.ranges[0] || x, u.removeSelectionMarker(x)), u.once("mouseup", (function () {
                                    var e = d.toOrientedRange();
                                    C && e.isEmpty() && o(C.cursor, e.cursor) ? d.substractPoint(e.cursor) : (r ? d.substractPoint(x.cursor) : x && (u.removeSelectionMarker(x), d.addRange(x)), d.addRange(e)), u.inVirtualSelectionMode = !1
                                }))
                            } else if ("block" == h) {
                                var k;
                                e.stop(), u.inVirtualSelectionMode = !0;
                                var L = [], A = function () {
                                    var e = u.renderer.pixelToScreenCoordinates(v, w),
                                        t = y.screenToDocumentPosition(e.row, e.column, e.offsetX);
                                    o(S, e) && o(t, d.lead) || (S = e, u.selection.moveToPosition(t), u.renderer.scrollCursorIntoView(), u.removeSelectionMarkers(L), L = d.rectangularRangeBlock(S, $), u.$mouseHandler.$clickSelection && 1 == L.length && L[0].isEmpty() && (L[0] = u.$mouseHandler.$clickSelection.clone()), L.forEach(u.addSelectionMarker, u), u.updateSelectionMarkers())
                                };
                                g && !l ? d.toSingleRange() : !g && l && (k = d.toOrientedRange(), u.addSelectionMarker(k)), r ? $ = y.documentToScreenPosition(d.lead) : d.moveToPosition(f), S = {
                                    row: -1,
                                    column: -1
                                };
                                var E = function (e) {
                                    A(), clearInterval(R), u.removeSelectionMarkers(L), L.length || (L = [d.toOrientedRange()]), k && (u.removeSelectionMarker(k), d.toSingleRange(k));
                                    for (var t = 0; t < L.length; t++) d.addRange(L[t]);
                                    u.inVirtualSelectionMode = !1, u.$mouseHandler.$clickSelection = null
                                }, _ = A;
                                n.capture(u.container, b, E);
                                var R = setInterval((function () {
                                    _()
                                }), 20);
                                return e.preventDefault()
                            }
                        }
                    } else 0 === c && e.editor.inMultiSelectMode && e.editor.exitMultiSelectMode()
                }

                t.onMouseDown = r
            })), deAceFine("ace/commands/multi_select_commands", ["require", "exports", "module", "ace/keyboard/hash_handler"], (function (e, t, i) {
                t.defaultCommands = [{
                    name: "addCursorAbove", description: "Add cursor above", exec: function (e) {
                        e.selectMoreLines(-1)
                    }, bindKey: {win: "Ctrl-Alt-Up", mac: "Ctrl-Alt-Up"}, scrollIntoView: "cursor", readOnly: !0
                }, {
                    name: "addCursorBelow", description: "Add cursor below", exec: function (e) {
                        e.selectMoreLines(1)
                    }, bindKey: {win: "Ctrl-Alt-Down", mac: "Ctrl-Alt-Down"}, scrollIntoView: "cursor", readOnly: !0
                }, {
                    name: "addCursorAboveSkipCurrent",
                    description: "Add cursor above (skip current)",
                    exec: function (e) {
                        e.selectMoreLines(-1, !0)
                    },
                    bindKey: {win: "Ctrl-Alt-Shift-Up", mac: "Ctrl-Alt-Shift-Up"},
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "addCursorBelowSkipCurrent",
                    description: "Add cursor below (skip current)",
                    exec: function (e) {
                        e.selectMoreLines(1, !0)
                    },
                    bindKey: {win: "Ctrl-Alt-Shift-Down", mac: "Ctrl-Alt-Shift-Down"},
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "selectMoreBefore", description: "Select more before", exec: function (e) {
                        e.selectMore(-1)
                    }, bindKey: {win: "Ctrl-Alt-Left", mac: "Ctrl-Alt-Left"}, scrollIntoView: "cursor", readOnly: !0
                }, {
                    name: "selectMoreAfter", description: "Select more after", exec: function (e) {
                        e.selectMore(1)
                    }, bindKey: {win: "Ctrl-Alt-Right", mac: "Ctrl-Alt-Right"}, scrollIntoView: "cursor", readOnly: !0
                }, {
                    name: "selectNextBefore",
                    description: "Select next before",
                    exec: function (e) {
                        e.selectMore(-1, !0)
                    },
                    bindKey: {win: "Ctrl-Alt-Shift-Left", mac: "Ctrl-Alt-Shift-Left"},
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "selectNextAfter",
                    description: "Select next after",
                    exec: function (e) {
                        e.selectMore(1, !0)
                    },
                    bindKey: {win: "Ctrl-Alt-Shift-Right", mac: "Ctrl-Alt-Shift-Right"},
                    scrollIntoView: "cursor",
                    readOnly: !0
                }, {
                    name: "splitIntoLines", description: "Split into lines", exec: function (e) {
                        e.multiSelect.splitIntoLines()
                    }, bindKey: {win: "Ctrl-Alt-L", mac: "Ctrl-Alt-L"}, readOnly: !0
                }, {
                    name: "alignCursors", description: "Align cursors", exec: function (e) {
                        e.alignCursors()
                    }, bindKey: {win: "Ctrl-Alt-A", mac: "Ctrl-Alt-A"}, scrollIntoView: "cursor"
                }, {
                    name: "findAll", description: "Find all", exec: function (e) {
                        e.findAll()
                    }, bindKey: {win: "Ctrl-Alt-K", mac: "Ctrl-Alt-G"}, scrollIntoView: "cursor", readOnly: !0
                }], t.multiSelectCommands = [{
                    name: "singleSelection",
                    description: "Single selection",
                    bindKey: "esc",
                    exec: function (e) {
                        e.exitMultiSelectMode()
                    },
                    scrollIntoView: "cursor",
                    readOnly: !0,
                    isAvailable: function (e) {
                        return e && e.inMultiSelectMode
                    }
                }];
                var n = e("../keyboard/hash_handler").HashHandler;
                t.keyboardHandler = new n(t.multiSelectCommands)
            })), deAceFine("ace/multi_select", ["require", "exports", "module", "ace/range_list", "ace/range", "ace/selection", "ace/mouse/multi_select_handler", "ace/lib/event", "ace/lib/lang", "ace/commands/multi_select_commands", "ace/search", "ace/edit_session", "ace/editor", "ace/config"], (function (e, t, i) {
                var n = e("./range_list").RangeList, s = e("./range").Range, o = e("./selection").Selection,
                    r = e("./mouse/multi_select_handler").onMouseDown, a = e("./lib/event"), l = e("./lib/lang"),
                    c = e("./commands/multi_select_commands");
                t.commands = c.defaultCommands.concat(c.multiSelectCommands);
                var h = e("./search").Search, u = new h;

                function d(e, t, i) {
                    return u.$options.wrap = !0, u.$options.needle = t, u.$options.backwards = -1 == i, u.find(e)
                }

                var g = e("./edit_session").EditSession;
                (function () {
                    this.getSelectionMarkers = function () {
                        return this.$selectionMarkers
                    }
                }).call(g.prototype), function () {
                    this.ranges = null, this.rangeList = null, this.addRange = function (e, t) {
                        if (e) {
                            if (!this.inMultiSelectMode && 0 === this.rangeCount) {
                                var i = this.toOrientedRange();
                                if (this.rangeList.add(i), this.rangeList.add(e), 2 != this.rangeList.ranges.length) return this.rangeList.removeAll(), t || this.fromOrientedRange(e);
                                this.rangeList.removeAll(), this.rangeList.add(i), this.$onAddRange(i)
                            }
                            e.cursor || (e.cursor = e.end);
                            var n = this.rangeList.add(e);
                            return this.$onAddRange(e), n.length && this.$onRemoveRange(n), this.rangeCount > 1 && !this.inMultiSelectMode && (this._signal("multiSelect"), this.inMultiSelectMode = !0, this.session.$undoSelect = !1, this.rangeList.attach(this.session)), t || this.fromOrientedRange(e)
                        }
                    }, this.toSingleRange = function (e) {
                        e = e || this.ranges[0];
                        var t = this.rangeList.removeAll();
                        t.length && this.$onRemoveRange(t), e && this.fromOrientedRange(e)
                    }, this.substractPoint = function (e) {
                        var t = this.rangeList.substractPoint(e);
                        if (t) return this.$onRemoveRange(t), t[0]
                    }, this.mergeOverlappingRanges = function () {
                        var e = this.rangeList.merge();
                        e.length && this.$onRemoveRange(e)
                    }, this.$onAddRange = function (e) {
                        this.rangeCount = this.rangeList.ranges.length, this.ranges.unshift(e), this._signal("addRange", {range: e})
                    }, this.$onRemoveRange = function (e) {
                        if (this.rangeCount = this.rangeList.ranges.length, 1 == this.rangeCount && this.inMultiSelectMode) {
                            var t = this.rangeList.ranges.pop();
                            e.push(t), this.rangeCount = 0
                        }
                        for (var i = e.length; i--;) {
                            var n = this.ranges.indexOf(e[i]);
                            this.ranges.splice(n, 1)
                        }
                        this._signal("removeRange", {ranges: e}), 0 === this.rangeCount && this.inMultiSelectMode && (this.inMultiSelectMode = !1, this._signal("singleSelect"), this.session.$undoSelect = !0, this.rangeList.detach(this.session)), t = t || this.ranges[0], t && !t.isEqual(this.getRange()) && this.fromOrientedRange(t)
                    }, this.$initRangeList = function () {
                        this.rangeList || (this.rangeList = new n, this.ranges = [], this.rangeCount = 0)
                    }, this.getAllRanges = function () {
                        return this.rangeCount ? this.rangeList.ranges.concat() : [this.getRange()]
                    }, this.splitIntoLines = function () {
                        if (this.rangeCount > 1) {
                            var e = this.rangeList.ranges, t = e[e.length - 1], i = s.fromPoints(e[0].start, t.end);
                            this.toSingleRange(), this.setSelectionRange(i, t.cursor == t.start)
                        } else {
                            i = this.getRange();
                            var n = this.isBackwards(), o = i.start.row, r = i.end.row;
                            if (o == r) {
                                if (n) var a = i.end, l = i.start; else a = i.start, l = i.end;
                                return this.addRange(s.fromPoints(l, l)), void this.addRange(s.fromPoints(a, a))
                            }
                            var c = [], h = this.getLineRange(o, !0);
                            h.start.column = i.start.column, c.push(h);
                            for (var u = o + 1; u < r; u++) c.push(this.getLineRange(u, !0));
                            h = this.getLineRange(r, !0), h.end.column = i.end.column, c.push(h), c.forEach(this.addRange, this)
                        }
                    }, this.toggleBlockSelection = function () {
                        if (this.rangeCount > 1) {
                            var e = this.rangeList.ranges, t = e[e.length - 1], i = s.fromPoints(e[0].start, t.end);
                            this.toSingleRange(), this.setSelectionRange(i, t.cursor == t.start)
                        } else {
                            var n = this.session.documentToScreenPosition(this.cursor),
                                o = this.session.documentToScreenPosition(this.anchor),
                                r = this.rectangularRangeBlock(n, o);
                            r.forEach(this.addRange, this)
                        }
                    }, this.rectangularRangeBlock = function (e, t, i) {
                        var n = [], o = e.column < t.column;
                        if (o) var r = e.column, a = t.column, l = e.offsetX,
                            c = t.offsetX; else r = t.column, a = e.column, l = t.offsetX, c = e.offsetX;
                        var h, u = e.row < t.row;
                        if (u) var d = e.row, g = t.row; else d = t.row, g = e.row;
                        r < 0 && (r = 0), d < 0 && (d = 0), d == g && (i = !0);
                        for (var f = d; f <= g; f++) {
                            var m = s.fromPoints(this.session.screenToDocumentPosition(f, r, l), this.session.screenToDocumentPosition(f, a, c));
                            if (m.isEmpty()) {
                                if (h && p(m.end, h)) break;
                                h = m.end
                            }
                            m.cursor = o ? m.start : m.end, n.push(m)
                        }
                        if (u && n.reverse(), !i) {
                            var v = n.length - 1;
                            while (n[v].isEmpty() && v > 0) v--;
                            if (v > 0) {
                                var w = 0;
                                while (n[w].isEmpty()) w++
                            }
                            for (var b = v; b >= w; b--) n[b].isEmpty() && n.splice(b, 1)
                        }
                        return n
                    }
                }.call(o.prototype);
                var f = e("./editor").Editor;

                function p(e, t) {
                    return e.row == t.row && e.column == t.column
                }

                function m(e) {
                    e.$multiselectOnSessionChange || (e.$onAddRange = e.$onAddRange.bind(e), e.$onRemoveRange = e.$onRemoveRange.bind(e), e.$onMultiSelect = e.$onMultiSelect.bind(e), e.$onSingleSelect = e.$onSingleSelect.bind(e), e.$multiselectOnSessionChange = t.onSessionChange.bind(e), e.$checkMultiselectChange = e.$checkMultiselectChange.bind(e), e.$multiselectOnSessionChange(e), e.on("changeSession", e.$multiselectOnSessionChange), e.on("mousedown", r), e.commands.addCommands(c.defaultCommands), v(e))
                }

                function v(e) {
                    if (e.textInput) {
                        var t = e.textInput.getElement(), i = !1;
                        a.addListener(t, "keydown", (function (t) {
                            var s = 18 == t.keyCode && !(t.ctrlKey || t.shiftKey || t.metaKey);
                            e.$blockSelectEnabled && s ? i || (e.renderer.setMouseCursor("crosshair"), i = !0) : i && n()
                        })), a.addListener(t, "keyup", n), a.addListener(t, "blur", n)
                    }

                    function n(t) {
                        i && (e.renderer.setMouseCursor(""), i = !1)
                    }
                }

                (function () {
                    this.updateSelectionMarkers = function () {
                        this.renderer.updateCursor(), this.renderer.updateBackMarkers()
                    }, this.addSelectionMarker = function (e) {
                        e.cursor || (e.cursor = e.end);
                        var t = this.getSelectionStyle();
                        return e.marker = this.session.addMarker(e, "ace_selection", t), this.session.$selectionMarkers.push(e), this.session.selectionMarkerCount = this.session.$selectionMarkers.length, e
                    }, this.removeSelectionMarker = function (e) {
                        if (e.marker) {
                            this.session.removeMarker(e.marker);
                            var t = this.session.$selectionMarkers.indexOf(e);
                            -1 != t && this.session.$selectionMarkers.splice(t, 1), this.session.selectionMarkerCount = this.session.$selectionMarkers.length
                        }
                    }, this.removeSelectionMarkers = function (e) {
                        for (var t = this.session.$selectionMarkers, i = e.length; i--;) {
                            var n = e[i];
                            if (n.marker) {
                                this.session.removeMarker(n.marker);
                                var s = t.indexOf(n);
                                -1 != s && t.splice(s, 1)
                            }
                        }
                        this.session.selectionMarkerCount = t.length
                    }, this.$onAddRange = function (e) {
                        this.addSelectionMarker(e.range), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
                    }, this.$onRemoveRange = function (e) {
                        this.removeSelectionMarkers(e.ranges), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
                    }, this.$onMultiSelect = function (e) {
                        this.inMultiSelectMode || (this.inMultiSelectMode = !0, this.setStyle("ace_multiselect"), this.keyBinding.addKeyboardHandler(c.keyboardHandler), this.commands.setDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers())
                    }, this.$onSingleSelect = function (e) {
                        this.session.multiSelect.inVirtualMode || (this.inMultiSelectMode = !1, this.unsetStyle("ace_multiselect"), this.keyBinding.removeKeyboardHandler(c.keyboardHandler), this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers(), this._emit("changeSelection"))
                    }, this.$onMultiSelectExec = function (e) {
                        var t = e.command, i = e.editor;
                        if (i.multiSelect) {
                            if (t.multiSelectAction) "forEach" == t.multiSelectAction ? n = i.forEachSelection(t, e.args) : "forEachLine" == t.multiSelectAction ? n = i.forEachSelection(t, e.args, !0) : "single" == t.multiSelectAction ? (i.exitMultiSelectMode(), n = t.exec(i, e.args || {})) : n = t.multiSelectAction(i, e.args || {}); else {
                                var n = t.exec(i, e.args || {});
                                i.multiSelect.addRange(i.multiSelect.toOrientedRange()), i.multiSelect.mergeOverlappingRanges()
                            }
                            return n
                        }
                    }, this.forEachSelection = function (e, t, i) {
                        if (!this.inVirtualSelectionMode) {
                            var n, s = i && i.keepOrder, r = 1 == i || i && i.$byLines, a = this.session,
                                l = this.selection, c = l.rangeList, h = (s ? l : c).ranges;
                            if (!h.length) return e.exec ? e.exec(this, t || {}) : e(this, t || {});
                            var u = l._eventRegistry;
                            l._eventRegistry = {};
                            var d = new o(a);
                            this.inVirtualSelectionMode = !0;
                            for (var g = h.length; g--;) {
                                if (r) while (g > 0 && h[g].start.row == h[g - 1].end.row) g--;
                                d.fromOrientedRange(h[g]), d.index = g, this.selection = a.selection = d;
                                var f = e.exec ? e.exec(this, t || {}) : e(this, t || {});
                                n || void 0 === f || (n = f), d.toOrientedRange(h[g])
                            }
                            d.detach(), this.selection = a.selection = l, this.inVirtualSelectionMode = !1, l._eventRegistry = u, l.mergeOverlappingRanges(), l.ranges[0] && l.fromOrientedRange(l.ranges[0]);
                            var p = this.renderer.$scrollAnimation;
                            return this.onCursorChange(), this.onSelectionChange(), p && p.from == p.to && this.renderer.animateScrolling(p.from), n
                        }
                    }, this.exitMultiSelectMode = function () {
                        this.inMultiSelectMode && !this.inVirtualSelectionMode && this.multiSelect.toSingleRange()
                    }, this.getSelectedText = function () {
                        var e = "";
                        if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                            for (var t = this.multiSelect.rangeList.ranges, i = [], n = 0; n < t.length; n++) i.push(this.session.getTextRange(t[n]));
                            var s = this.session.getDocument().getNewLineCharacter();
                            e = i.join(s), e.length == (i.length - 1) * s.length && (e = "")
                        } else this.selection.isEmpty() || (e = this.session.getTextRange(this.getSelectionRange()));
                        return e
                    }, this.$checkMultiselectChange = function (e, t) {
                        if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                            var i = this.multiSelect.ranges[0];
                            if (this.multiSelect.isEmpty() && t == this.multiSelect.anchor) return;
                            var n = t == this.multiSelect.anchor ? i.cursor == i.start ? i.end : i.start : i.cursor;
                            n.row != t.row || this.session.$clipPositionToDocument(n.row, n.column).column != t.column ? this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange()) : this.multiSelect.mergeOverlappingRanges()
                        }
                    }, this.findAll = function (e, t, i) {
                        if (t = t || {}, t.needle = e || t.needle, void 0 == t.needle) {
                            var n = this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange();
                            t.needle = this.session.getTextRange(n)
                        }
                        this.$search.set(t);
                        var s = this.$search.findAll(this.session);
                        if (!s.length) return 0;
                        var o = this.multiSelect;
                        i || o.toSingleRange(s[0]);
                        for (var r = s.length; r--;) o.addRange(s[r], !0);
                        return n && o.rangeList.rangeAtPoint(n.start) && o.addRange(n, !0), s.length
                    }, this.selectMoreLines = function (e, t) {
                        var i = this.selection.toOrientedRange(), n = i.cursor == i.end,
                            o = this.session.documentToScreenPosition(i.cursor);
                        this.selection.$desiredColumn && (o.column = this.selection.$desiredColumn);
                        var r = this.session.screenToDocumentPosition(o.row + e, o.column);
                        if (i.isEmpty()) l = r; else var a = this.session.documentToScreenPosition(n ? i.end : i.start),
                            l = this.session.screenToDocumentPosition(a.row + e, a.column);
                        if (n) {
                            var c = s.fromPoints(r, l);
                            c.cursor = c.start
                        } else {
                            c = s.fromPoints(l, r);
                            c.cursor = c.end
                        }
                        if (c.desiredColumn = o.column, this.selection.inMultiSelectMode) {
                            if (t) var h = i.cursor
                        } else this.selection.addRange(i);
                        this.selection.addRange(c), h && this.selection.substractPoint(h)
                    }, this.transposeSelections = function (e) {
                        for (var t = this.session, i = t.multiSelect, n = i.ranges, s = n.length; s--;) {
                            var o = n[s];
                            if (o.isEmpty()) {
                                var r = t.getWordRange(o.start.row, o.start.column);
                                o.start.row = r.start.row, o.start.column = r.start.column, o.end.row = r.end.row, o.end.column = r.end.column
                            }
                        }
                        i.mergeOverlappingRanges();
                        var a = [];
                        for (s = n.length; s--;) {
                            o = n[s];
                            a.unshift(t.getTextRange(o))
                        }
                        e < 0 ? a.unshift(a.pop()) : a.push(a.shift());
                        for (s = n.length; s--;) {
                            o = n[s], r = o.clone();
                            t.replace(o, a[s]), o.start.row = r.start.row, o.start.column = r.start.column
                        }
                        i.fromOrientedRange(i.ranges[0])
                    }, this.selectMore = function (e, t, i) {
                        var n = this.session, s = n.multiSelect, o = s.toOrientedRange();
                        if (!o.isEmpty() || (o = n.getWordRange(o.start.row, o.start.column), o.cursor = -1 == e ? o.start : o.end, this.multiSelect.addRange(o), !i)) {
                            var r = n.getTextRange(o), a = d(n, r, e);
                            a && (a.cursor = -1 == e ? a.start : a.end, this.session.unfold(a), this.multiSelect.addRange(a), this.renderer.scrollCursorIntoView(null, .5)), t && this.multiSelect.substractPoint(o.cursor)
                        }
                    }, this.alignCursors = function () {
                        var e = this.session, t = e.multiSelect, i = t.ranges, n = -1, o = i.filter((function (e) {
                            if (e.cursor.row == n) return !0;
                            n = e.cursor.row
                        }));
                        if (i.length && o.length != i.length - 1) {
                            o.forEach((function (e) {
                                t.substractPoint(e.cursor)
                            }));
                            var r = 0, a = 1 / 0, c = i.map((function (t) {
                                var i = t.cursor, n = e.getLine(i.row), s = n.substr(i.column).search(/\S/g);
                                return -1 == s && (s = 0), i.column > r && (r = i.column), s < a && (a = s), s
                            }));
                            i.forEach((function (t, i) {
                                var n = t.cursor, o = r - n.column, h = c[i] - a;
                                o > h ? e.insert(n, l.stringRepeat(" ", o - h)) : e.remove(new s(n.row, n.column, n.row, n.column - o + h)), t.start.column = t.end.column = r, t.start.row = t.end.row = n.row, t.cursor = t.end
                            })), t.fromOrientedRange(i[0]), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
                        } else {
                            var h = this.selection.getRange(), u = h.start.row, d = h.end.row, g = u == d;
                            if (g) {
                                var f, p = this.session.getLength();
                                do {
                                    f = this.session.getLine(d)
                                } while (/[=:]/.test(f) && ++d < p);
                                do {
                                    f = this.session.getLine(u)
                                } while (/[=:]/.test(f) && --u > 0);
                                u < 0 && (u = 0), d >= p && (d = p - 1)
                            }
                            var m = this.session.removeFullLines(u, d);
                            m = this.$reAlignText(m, g), this.session.insert({
                                row: u,
                                column: 0
                            }, m.join("\n") + "\n"), g || (h.start.column = 0, h.end.column = m[m.length - 1].length), this.selection.setRange(h)
                        }
                    }, this.$reAlignText = function (e, t) {
                        var i, n, s, o = !0, r = !0;
                        return e.map((function (e) {
                            var t = e.match(/(\s*)(.*?)(\s*)([=:].*)/);
                            return t ? null == i ? (i = t[1].length, n = t[2].length, s = t[3].length, t) : (i + n + s != t[1].length + t[2].length + t[3].length && (r = !1), i != t[1].length && (o = !1), i > t[1].length && (i = t[1].length), n < t[2].length && (n = t[2].length), s > t[3].length && (s = t[3].length), t) : [e]
                        })).map(t ? c : o ? r ? h : c : u);

                        function a(e) {
                            return l.stringRepeat(" ", e)
                        }

                        function c(e) {
                            return e[2] ? a(i) + e[2] + a(n - e[2].length + s) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
                        }

                        function h(e) {
                            return e[2] ? a(i + n - e[2].length) + e[2] + a(s) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
                        }

                        function u(e) {
                            return e[2] ? a(i) + e[2] + a(s) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
                        }
                    }
                }).call(f.prototype), t.onSessionChange = function (e) {
                    var t = e.session;
                    t && !t.multiSelect && (t.$selectionMarkers = [], t.selection.$initRangeList(), t.multiSelect = t.selection), this.multiSelect = t && t.multiSelect;
                    var i = e.oldSession;
                    i && (i.multiSelect.off("addRange", this.$onAddRange), i.multiSelect.off("removeRange", this.$onRemoveRange), i.multiSelect.off("multiSelect", this.$onMultiSelect), i.multiSelect.off("singleSelect", this.$onSingleSelect), i.multiSelect.lead.off("change", this.$checkMultiselectChange), i.multiSelect.anchor.off("change", this.$checkMultiselectChange)), t && (t.multiSelect.on("addRange", this.$onAddRange), t.multiSelect.on("removeRange", this.$onRemoveRange), t.multiSelect.on("multiSelect", this.$onMultiSelect), t.multiSelect.on("singleSelect", this.$onSingleSelect), t.multiSelect.lead.on("change", this.$checkMultiselectChange), t.multiSelect.anchor.on("change", this.$checkMultiselectChange)), t && this.inMultiSelectMode != t.selection.inMultiSelectMode && (t.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect())
                }, t.MultiSelect = m, e("./config").defineOptions(f.prototype, "editor", {
                    enableMultiselect: {
                        set: function (e) {
                            m(this), e ? (this.on("changeSession", this.$multiselectOnSessionChange), this.on("mousedown", r)) : (this.off("changeSession", this.$multiselectOnSessionChange), this.off("mousedown", r))
                        }, value: !0
                    }, enableBlockSelect: {
                        set: function (e) {
                            this.$blockSelectEnabled = e
                        }, value: !0
                    }
                })
            })), deAceFine("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"], (function (e, t, i) {
                var n = e("../../range").Range, s = t.FoldMode = function () {
                };
                (function () {
                    this.foldingStartMarker = null, this.foldingStopMarker = null, this.getFoldWidget = function (e, t, i) {
                        var n = e.getLine(i);
                        return this.foldingStartMarker.test(n) ? "start" : "markbeginend" == t && this.foldingStopMarker && this.foldingStopMarker.test(n) ? "end" : ""
                    }, this.getFoldWidgetRange = function (e, t, i) {
                        return null
                    }, this.indentationBlock = function (e, t, i) {
                        var s = /\S/, o = e.getLine(t), r = o.search(s);
                        if (-1 != r) {
                            var a = i || o.length, l = e.getLength(), c = t, h = t;
                            while (++t < l) {
                                var u = e.getLine(t).search(s);
                                if (-1 != u) {
                                    if (u <= r) break;
                                    h = t
                                }
                            }
                            if (h > c) {
                                var d = e.getLine(h).length;
                                return new n(c, a, h, d)
                            }
                        }
                    }, this.openingBracketBlock = function (e, t, i, s, o) {
                        var r = {row: i, column: s + 1}, a = e.$findClosingBracket(t, r, o);
                        if (a) {
                            var l = e.foldWidgets[a.row];
                            return null == l && (l = e.getFoldWidget(a.row)), "start" == l && a.row > r.row && (a.row--, a.column = e.getLine(a.row).length), n.fromPoints(r, a)
                        }
                    }, this.closingBracketBlock = function (e, t, i, s, o) {
                        var r = {row: i, column: s}, a = e.$findOpeningBracket(t, r);
                        if (a) return a.column++, r.column--, n.fromPoints(a, r)
                    }
                }).call(s.prototype)
            })), deAceFine("ace/theme/textmate", ["require", "exports", "module", "ace/lib/dom"], (function (e, t, i) {
                t.isDark = !1, t.cssClass = "ace-tm", t.cssText = '.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}', t.$id = "ace/theme/textmate";
                var n = e("../lib/dom");
                n.importCssString(t.cssText, t.cssClass)
            })), deAceFine("ace/line_widgets", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/range"], (function (e, t, i) {
                e("./lib/oop");
                var n = e("./lib/dom");
                e("./range").Range;

                function s(e) {
                    this.session = e, this.session.widgetManager = this, this.session.getRowLength = this.getRowLength, this.session.$getWidgetScreenLength = this.$getWidgetScreenLength, this.updateOnChange = this.updateOnChange.bind(this), this.renderWidgets = this.renderWidgets.bind(this), this.measureWidgets = this.measureWidgets.bind(this), this.session._changedWidgets = [], this.$onChangeEditor = this.$onChangeEditor.bind(this), this.session.on("change", this.updateOnChange), this.session.on("changeFold", this.updateOnFold), this.session.on("changeEditor", this.$onChangeEditor)
                }

                (function () {
                    this.getRowLength = function (e) {
                        var t;
                        return t = this.lineWidgets && this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0, this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 + t : 1 + t
                    }, this.$getWidgetScreenLength = function () {
                        var e = 0;
                        return this.lineWidgets.forEach((function (t) {
                            t && t.rowCount && !t.hidden && (e += t.rowCount)
                        })), e
                    }, this.$onChangeEditor = function (e) {
                        this.attach(e.editor)
                    }, this.attach = function (e) {
                        e && e.widgetManager && e.widgetManager != this && e.widgetManager.detach(), this.editor != e && (this.detach(), this.editor = e, e && (e.widgetManager = this, e.renderer.on("beforeRender", this.measureWidgets), e.renderer.on("afterRender", this.renderWidgets)))
                    }, this.detach = function (e) {
                        var t = this.editor;
                        if (t) {
                            this.editor = null, t.widgetManager = null, t.renderer.off("beforeRender", this.measureWidgets), t.renderer.off("afterRender", this.renderWidgets);
                            var i = this.session.lineWidgets;
                            i && i.forEach((function (e) {
                                e && e.el && e.el.parentNode && (e._inDocument = !1, e.el.parentNode.removeChild(e.el))
                            }))
                        }
                    }, this.updateOnFold = function (e, t) {
                        var i = t.lineWidgets;
                        if (i && e.action) {
                            for (var n = e.data, s = n.start.row, o = n.end.row, r = "add" == e.action, a = s + 1; a < o; a++) i[a] && (i[a].hidden = r);
                            i[o] && (r ? i[s] ? i[o].hidden = r : i[s] = i[o] : (i[s] == i[o] && (i[s] = void 0), i[o].hidden = r))
                        }
                    }, this.updateOnChange = function (e) {
                        var t = this.session.lineWidgets;
                        if (t) {
                            var i = e.start.row, n = e.end.row - i;
                            if (0 === n) ; else if ("remove" == e.action) {
                                var s = t.splice(i + 1, n);
                                s.forEach((function (e) {
                                    e && this.removeLineWidget(e)
                                }), this), this.$updateRows()
                            } else {
                                var o = new Array(n);
                                o.unshift(i, 0), t.splice.apply(t, o), this.$updateRows()
                            }
                        }
                    }, this.$updateRows = function () {
                        var e = this.session.lineWidgets;
                        if (e) {
                            var t = !0;
                            e.forEach((function (e, i) {
                                if (e) {
                                    t = !1, e.row = i;
                                    while (e.$oldWidget) e.$oldWidget.row = i, e = e.$oldWidget
                                }
                            })), t && (this.session.lineWidgets = null)
                        }
                    }, this.addLineWidget = function (e) {
                        this.session.lineWidgets || (this.session.lineWidgets = new Array(this.session.getLength()));
                        var t = this.session.lineWidgets[e.row];
                        t && (e.$oldWidget = t, t.el && t.el.parentNode && (t.el.parentNode.removeChild(t.el), t._inDocument = !1)), this.session.lineWidgets[e.row] = e, e.session = this.session;
                        var i = this.editor.renderer;
                        e.html && !e.el && (e.el = n.createElement("div"), e.el.innerHTML = e.html), e.el && (n.addCssClass(e.el, "ace_lineWidgetContainer"), e.el.style.position = "absolute", e.el.style.zIndex = 5, i.container.appendChild(e.el), e._inDocument = !0), e.coverGutter || (e.el.style.zIndex = 3), null == e.pixelHeight && (e.pixelHeight = e.el.offsetHeight), null == e.rowCount && (e.rowCount = e.pixelHeight / i.layerConfig.lineHeight);
                        var s = this.session.getFoldAt(e.row, 0);
                        if (e.$fold = s, s) {
                            var o = this.session.lineWidgets;
                            e.row != s.end.row || o[s.start.row] ? e.hidden = !0 : o[s.start.row] = e
                        }
                        return this.session._emit("changeFold", {data: {start: {row: e.row}}}), this.$updateRows(), this.renderWidgets(null, i), this.onWidgetChanged(e), e
                    }, this.removeLineWidget = function (e) {
                        if (e._inDocument = !1, e.session = null, e.el && e.el.parentNode && e.el.parentNode.removeChild(e.el), e.editor && e.editor.destroy) try {
                            e.editor.destroy()
                        } catch (i) {
                        }
                        if (this.session.lineWidgets) {
                            var t = this.session.lineWidgets[e.row];
                            if (t == e) this.session.lineWidgets[e.row] = e.$oldWidget, e.$oldWidget && this.onWidgetChanged(e.$oldWidget); else while (t) {
                                if (t.$oldWidget == e) {
                                    t.$oldWidget = e.$oldWidget;
                                    break
                                }
                                t = t.$oldWidget
                            }
                        }
                        this.session._emit("changeFold", {data: {start: {row: e.row}}}), this.$updateRows()
                    }, this.getWidgetsAtRow = function (e) {
                        var t = this.session.lineWidgets, i = t && t[e], n = [];
                        while (i) n.push(i), i = i.$oldWidget;
                        return n
                    }, this.onWidgetChanged = function (e) {
                        this.session._changedWidgets.push(e), this.editor && this.editor.renderer.updateFull()
                    }, this.measureWidgets = function (e, t) {
                        var i = this.session._changedWidgets, n = t.layerConfig;
                        if (i && i.length) {
                            for (var s = 1 / 0, o = 0; o < i.length; o++) {
                                var r = i[o];
                                if (r && r.el && r.session == this.session) {
                                    if (!r._inDocument) {
                                        if (this.session.lineWidgets[r.row] != r) continue;
                                        r._inDocument = !0, t.container.appendChild(r.el)
                                    }
                                    r.h = r.el.offsetHeight, r.fixedWidth || (r.w = r.el.offsetWidth, r.screenWidth = Math.ceil(r.w / n.characterWidth));
                                    var a = r.h / n.lineHeight;
                                    r.coverLine && (a -= this.session.getRowLineCount(r.row), a < 0 && (a = 0)), r.rowCount != a && (r.rowCount = a, r.row < s && (s = r.row))
                                }
                            }
                            s != 1 / 0 && (this.session._emit("changeFold", {data: {start: {row: s}}}), this.session.lineWidgetWidth = null), this.session._changedWidgets = []
                        }
                    }, this.renderWidgets = function (e, t) {
                        var i = t.layerConfig, n = this.session.lineWidgets;
                        if (n) {
                            var s = Math.min(this.firstRow, i.firstRow),
                                o = Math.max(this.lastRow, i.lastRow, n.length);
                            while (s > 0 && !n[s]) s--;
                            this.firstRow = i.firstRow, this.lastRow = i.lastRow, t.$cursorLayer.config = i;
                            for (var r = s; r <= o; r++) {
                                var a = n[r];
                                if (a && a.el) if (a.hidden) a.el.style.top = -100 - (a.pixelHeight || 0) + "px"; else {
                                    a._inDocument || (a._inDocument = !0, t.container.appendChild(a.el));
                                    var l = t.$cursorLayer.getPixelPosition({row: r, column: 0}, !0).top;
                                    a.coverLine || (l += i.lineHeight * this.session.getRowLineCount(a.row)), a.el.style.top = l - i.offset + "px";
                                    var c = a.coverGutter ? 0 : t.gutterWidth;
                                    a.fixedWidth || (c -= t.scrollLeft), a.el.style.left = c + "px", a.fullWidth && a.screenWidth && (a.el.style.minWidth = i.width + 2 * i.padding + "px"), a.fixedWidth ? a.el.style.right = t.scrollBar.getWidth() + "px" : a.el.style.right = ""
                                }
                            }
                        }
                    }
                }).call(s.prototype), t.LineWidgets = s
            })), deAceFine("ace/ext/error_marker", ["require", "exports", "module", "ace/line_widgets", "ace/lib/dom", "ace/range"], (function (e, t, i) {
                var n = e("../line_widgets").LineWidgets, s = e("../lib/dom"), o = e("../range").Range;

                function r(e, t, i) {
                    var n = 0, s = e.length - 1;
                    while (n <= s) {
                        var o = n + s >> 1, r = i(t, e[o]);
                        if (r > 0) n = o + 1; else {
                            if (!(r < 0)) return o;
                            s = o - 1
                        }
                    }
                    return -(n + 1)
                }

                function a(e, t, i) {
                    var n = e.getAnnotations().sort(o.comparePoints);
                    if (n.length) {
                        var s = r(n, {row: t, column: -1}, o.comparePoints);
                        s < 0 && (s = -s - 1), s >= n.length ? s = i > 0 ? 0 : n.length - 1 : 0 === s && i < 0 && (s = n.length - 1);
                        var a = n[s];
                        if (a && i) {
                            if (a.row === t) {
                                do {
                                    a = n[s += i]
                                } while (a && a.row === t);
                                if (!a) return n.slice()
                            }
                            var l = [];
                            t = a.row;
                            do {
                                l[i < 0 ? "unshift" : "push"](a), a = n[s += i]
                            } while (a && a.row == t);
                            return l.length && l
                        }
                    }
                }

                t.showErrorMarker = function (e, t) {
                    var i = e.session;
                    i.widgetManager || (i.widgetManager = new n(i), i.widgetManager.attach(e));
                    var o = e.getCursorPosition(), r = o.row,
                        l = i.widgetManager.getWidgetsAtRow(r).filter((function (e) {
                            return "errorMarker" == e.type
                        }))[0];
                    l ? l.destroy() : r -= t;
                    var c, h = a(i, r, t);
                    if (h) {
                        var u = h[0];
                        o.column = (u.pos && "number" != typeof u.column ? u.pos.sc : u.column) || 0, o.row = u.row, c = e.renderer.$gutterLayer.$annotations[o.row]
                    } else {
                        if (l) return;
                        c = {text: ["Looks good!"], className: "ace_ok"}
                    }
                    e.session.unfold(o.row), e.selection.moveToPosition(o);
                    var d = {
                        row: o.row,
                        fixedWidth: !0,
                        coverGutter: !0,
                        el: s.createElement("div"),
                        type: "errorMarker"
                    }, g = d.el.appendChild(s.createElement("div")), f = d.el.appendChild(s.createElement("div"));
                    f.className = "error_widget_arrow " + c.className;
                    var p = e.renderer.$cursorLayer.getPixelPosition(o).left;
                    f.style.left = p + e.renderer.gutterWidth - 5 + "px", d.el.className = "error_widget_wrapper", g.className = "error_widget " + c.className, g.innerHTML = c.text.join("<br>"), g.appendChild(s.createElement("div"));
                    var m = function (e, t, i) {
                        if (0 === t && ("esc" === i || "return" === i)) return d.destroy(), {command: "null"}
                    };
                    d.destroy = function () {
                        e.$mouseHandler.isMousePressed || (e.keyBinding.removeKeyboardHandler(m), i.widgetManager.removeLineWidget(d), e.off("changeSelection", d.destroy), e.off("changeSession", d.destroy), e.off("mouseup", d.destroy), e.off("change", d.destroy))
                    }, e.keyBinding.addKeyboardHandler(m), e.on("changeSelection", d.destroy), e.on("changeSession", d.destroy), e.on("mouseup", d.destroy), e.on("change", d.destroy), e.session.widgetManager.addLineWidget(d), d.el.onmousedown = e.focus.bind(e), e.renderer.scrollCursorIntoView(null, .5, {bottom: d.el.offsetHeight})
                }, s.importCssString("    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }", "")
            })), deAceFine("ace/ace", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/dom", "ace/lib/event", "ace/range", "ace/editor", "ace/edit_session", "ace/undomanager", "ace/virtual_renderer", "ace/worker/worker_client", "ace/keyboard/hash_handler", "ace/placeholder", "ace/multi_select", "ace/mode/folding/fold_mode", "ace/theme/textmate", "ace/ext/error_marker", "ace/config"], (function (e, t, i) {
                e("./lib/fixoldbrowsers");
                var n = e("./lib/dom"), s = e("./lib/event"), o = e("./range").Range, r = e("./editor").Editor,
                    a = e("./edit_session").EditSession, l = e("./undomanager").UndoManager,
                    c = e("./virtual_renderer").VirtualRenderer;
                e("./worker/worker_client"), e("./keyboard/hash_handler"), e("./placeholder"), e("./multi_select"), e("./mode/folding/fold_mode"), e("./theme/textmate"), e("./ext/error_marker"), t.config = e("./config"), t.require = e, "function" === typeof deAceFine && (t.deAceFine = deAceFine), t.edit = function (e, i) {
                    if ("string" == typeof e) {
                        var o = e;
                        if (e = document.getElementById(o), !e) throw new Error("ace.edit can't find div #" + o)
                    }
                    if (e && e.env && e.env.editor instanceof r) return e.env.editor;
                    var a = "";
                    if (e && /input|textarea/i.test(e.tagName)) {
                        var l = e;
                        a = l.value, e = n.createElement("pre"), l.parentNode.replaceChild(e, l)
                    } else e && (a = e.textContent, e.innerHTML = "");
                    var h = t.createEditSession(a), u = new r(new c(e), h, i),
                        d = {document: h, editor: u, onResize: u.resize.bind(u, null)};
                    return l && (d.textarea = l), s.addListener(window, "resize", d.onResize), u.on("destroy", (function () {
                        s.removeListener(window, "resize", d.onResize), d.editor.container.env = null
                    })), u.container.env = u.env = d, u
                }, t.createEditSession = function (e, t) {
                    var i = new a(e, t);
                    return i.setUndoManager(new l), i
                }, t.Range = o, t.Editor = r, t.EditSession = a, t.UndoManager = l, t.VirtualRenderer = c, t.version = t.config.version
            })), function () {
                window.require(["ace/ace"], (function (i) {
                    for (var n in i && (i.config.init(!0), i.define = window.deAceFine), window.ace || (window.ace = i), i) i.hasOwnProperty(n) && (window.ace[n] = i[n]);
                    window.ace["default"] = window.ace, "object" == Object(t["a"])(e) && "object" == ("undefined" === typeof exports ? "undefined" : Object(t["a"])(exports)) && e && (e.exports = window.ace)
                }))
            }()
        }).call(this, i("dd40")(e))
    }, "3ab1": function (e, t, i) {
        "use strict";
        (function (e) {
            var t = i("bf2d");
            deAceFine("ace/snippets/sql", ["require", "exports", "module"], (function (e, t, i) {
                t.snippetText = "snippet tbl\n\tcreate table ${1:table} (\n\t\t${2:columns}\n\t);\nsnippet col\n\t${1:name}\t${2:type}\t${3:default ''}\t${4:not null}\nsnippet ccol\n\t${1:name}\tvarchar2(${2:size})\t${3:default ''}\t${4:not null}\nsnippet ncol\n\t${1:name}\tnumber\t${3:default 0}\t${4:not null}\nsnippet dcol\n\t${1:name}\tdate\t${3:default sysdate}\t${4:not null}\nsnippet ind\n\tcreate index ${3:$1_$2} on ${1:table}(${2:column});\nsnippet uind\n\tcreate unique index ${1:name} on ${2:table}(${3:column});\nsnippet tblcom\n\tcomment on table ${1:table} is '${2:comment}';\nsnippet colcom\n\tcomment on column ${1:table}.${2:column} is '${3:comment}';\nsnippet addcol\n\talter table ${1:table} add (${2:column} ${3:type});\nsnippet seq\n\tcreate sequence ${1:name} start with ${2:1} increment by ${3:1} minvalue ${4:1};\nsnippet s*\n\tselect * from ${1:table}\n", t.scope = "sql"
            })), function () {
                window.require(["ace/snippets/sql"], (function (i) {
                    "object" == Object(t["a"])(e) && "object" == ("undefined" === typeof exports ? "undefined" : Object(t["a"])(exports)) && e && (e.exports = i)
                }))
            }()
        }).call(this, i("dd40")(e))
    }, "40c0": function (e, t, i) {
    }, "44c2": function (e, t, i) {
    }, "56d7": function (e, t, i) {
        "use strict";
        i.r(t);
        i("e260"), i("e6cf"), i("cca6"), i("a79d");
        var n = i("2b0e"), s = i("5c96"), o = i.n(s), r = (i("0fae"), function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", {attrs: {id: "app"}}, [e.fullscreen ? [i("router-view")] : i("el-container", [i("el-aside", {staticStyle: {background: "#fafafa"}}, [i("div", {
                    staticStyle: {
                        padding: "10px",
                        height: "100%",
                        "box-sizing": "border-box"
                    }
                }, [i("div", {staticStyle: {"margin-bottom": "10px"}}, [i("el-select", {
                    staticStyle: {width: "100%"},
                    attrs: {size: "small", filterable: "", placeholder: "请先选择分组"},
                    on: {change: e.sourceGroupChangeEvents},
                    model: {
                        value: e.choiceDatasourceGroup, callback: function (t) {
                            e.choiceDatasourceGroup = t
                        }, expression: "choiceDatasourceGroup"
                    }
                }, [i("el-option", {attrs: {value: "", label: "全部分组"}}), e._l(e.datasourceGroupList, (function (e) {
                    return i("el-option", {key: e, attrs: {value: e}})
                }))], 2), i("el-select", {
                    staticStyle: {width: "100%", "margin-top": "10px"},
                    attrs: {size: "small", filterable: "", placeholder: "请先选择数据源"},
                    on: {change: e.datasourceChangeEvents},
                    model: {
                        value: e.choiceDatasourceId, callback: function (t) {
                            e.choiceDatasourceId = t
                        }, expression: "choiceDatasourceId"
                    }
                }, e._l(e.datasourceOptions, (function (e) {
                    return i("el-option", {key: e.value, attrs: {label: e.label, value: e.value}})
                })), 1)], 1), i("el-menu", {
                    staticClass: "el-menu-vertical",
                    staticStyle: {height: "auto"},
                    attrs: {router: !0}
                }, [i("el-menu-item", {attrs: {index: "/data/datasourceManage"}}, [i("i", {staticClass: "el-icon-coin"}), e._v("数据源管理")]), i("el-menu-item", {attrs: {index: "/data/executor"}}, [i("i", {staticClass: "el-icon-video-play"}), e._v("SQL执行器")]), i("el-submenu", {attrs: {index: "1"}}, [i("template", {slot: "title"}, [i("i", {staticClass: "el-icon-s-platform"}), i("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [e._v("管理工具")])]), i("el-menu-item", {attrs: {index: "/data/export"}}, [i("i", {staticClass: "el-icon-finished"}), e._v("数据库表导出")]), i("el-menu-item", {attrs: {index: "/data/transferData"}}, [i("i", {staticClass: "el-icon-document-copy"}), e._v("数据互导工具")])], 2)], 1), i("div", {
                    staticStyle: {
                        overflow: "auto",
                        "padding-bottom": "30px"
                    }
                }, [i("el-tree", {
                    ref: "databaseTree",
                    staticClass: "database-list-tree",
                    attrs: {
                        props: e.defaultProps,
                        data: e.databaseList,
                        "highlight-current": "",
                        "empty-text": "",
                        "default-expanded-keys": e.databaseExpandedKeys,
                        "node-key": "id"
                    },
                    on: {"node-click": e.handleNodeClick, "node-expand": e.handleNodeExpand},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            var n = t.node, s = t.data;
                            return i("span", {}, [s.needLoad ? i("span", [i("i", {staticClass: "el-icon-loading"})]) : i("span", [e._v(" " + e._s(n.label) + " "), s.comment ? i("el-tooltip", {
                                attrs: {
                                    effect: "dark",
                                    content: s.comment,
                                    placement: "top-start",
                                    "open-delay": 600
                                }
                            }, [i("span", {staticStyle: {color: "#aaa"}}, [e._v("-" + e._s(s.comment))])]) : e._e()], 1)])
                        }
                    }])
                })], 1)], 1)]), i("el-container", [i("el-header", [i("span", {staticClass: "header-right-user-name"}, [e._v(e._s(e.userSelfInfo.userName))]), i("el-dropdown", {
                    attrs: {trigger: "click"},
                    on: {command: e.userSettingDropdown}
                }, [i("i", {
                    staticClass: "el-icon-setting",
                    staticStyle: {"margin-right": "15px", "font-size": "16px", cursor: "pointer", color: "#fff"}
                }), i("el-dropdown-menu", {
                    attrs: {slot: "dropdown"},
                    slot: "dropdown"
                }, [i("el-dropdown-item", {attrs: {command: "console"}}, [e._v("控制台")]), i("el-dropdown-item", {
                    attrs: {
                        command: "aboutDoc",
                        divided: ""
                    }
                }, [e._v("关于")]), i("el-dropdown-item", {attrs: {command: "myInfo"}}, [e._v("我的资料")]), i("el-dropdown-item", {attrs: {command: "userSignOut"}}, [e._v("退出登录")])], 1)], 1)], 1), i("el-main", {staticStyle: {padding: "0"}}, [i("router-view", {
                    on: {
                        initLoadDataList: e.initLoadDataList,
                        loadDatasourceList: e.loadDatasourceList
                    }
                })], 1)], 1)], 1), i("el-dialog", {
                    attrs: {
                        title: "关于zyplayer-doc",
                        visible: e.aboutDialogVisible,
                        width: "600px"
                    }, on: {
                        "update:visible": function (t) {
                            e.aboutDialogVisible = t
                        }
                    }
                }, [i("el-form", [i("el-form-item", {attrs: {label: "项目地址："}}, [i("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://gitee.com/zyplayer/zyplayer-doc"
                    }
                }, [e._v("zyplayer-doc")])]), i("el-form-item", {attrs: {label: "开发人员："}}, [i("a", {
                    attrs: {
                        target: "_blank",
                        href: "http://zyplayer.com"
                    }
                }, [e._v("暮光：城中城")])]), e.upgradeInfo.lastVersion ? [i("el-form-item", {attrs: {label: "当前版本："}}, [e._v(e._s(e.upgradeInfo.nowVersion))]), i("el-form-item", {attrs: {label: "最新版本："}}, [e._v(e._s(e.upgradeInfo.lastVersion))]), i("el-form-item", {attrs: {label: "升级地址："}}, [i("a", {
                    attrs: {
                        target: "_blank",
                        href: e.upgradeInfo.upgradeUrl
                    }
                }, [e._v(e._s(e.upgradeInfo.upgradeUrl))])]), i("el-form-item", {attrs: {label: "升级内容："}}, [e._v(e._s(e.upgradeInfo.upgradeContent))])] : e._e(), i("el-form-item", {attrs: {label: ""}}, [e._v(" 欢迎加群讨论，QQ群号：466363173，欢迎提交需求，欢迎使用和加入开发！ ")])], 2)], 1)], 2)
            }), a = [],
            l = (i("4de4"), i("4160"), i("a630"), i("b0c0"), i("d3b7"), i("e25e"), i("6062"), i("3ca3"), i("159b"), i("ddb0"), i("4328")),
            c = i.n(l), h = i("bc3a"), u = i.n(h), d = u.a.create({
                baseURL: "./",
                timeout: 1e4,
                headers: {"Content-type": "application/x-www-form-urlencoded"},
                withCredentials: !0
            }), g = {"/zyplayer-doc-db/executor/execute": !0, "/zyplayer-doc-db/datasource/test": !0};
        d.interceptors.request.use((function (e) {
            return e.needValidateResult = !0, g[e.url] && (e.needValidateResult = !1), e
        }), (function (e) {
            return console.log(e), Promise.reject(e)
        })), d.interceptors.response.use((function (e) {
            if (e.message) ct.$message.error("请求错误：" + e.message); else {
                if (!e.config.needValidateResult || 200 == e.data.errCode) return e.data;
                if (400 == e.data.errCode) {
                    ct.$message.error("请先登录");
                    var t = encodeURIComponent(window.location.href);
                    window.location = "./#/user/login?redirect=" + t
                } else 402 == e.data.errCode ? ct.$router.push("/common/noAuth") : 200 !== e.data.errCode && ct.$message.error(e.data.errMsg || "未知错误")
            }
            return Promise.reject("请求错误")
        }), (function (e) {
            return console.log("err" + e), ct.$message.info("请求错误：" + e.message), Promise.reject(e)
        }));
        var f, p, m = d, v = {
                userLogin: function (e) {
                    return m({url: "/login", method: "post", data: c.a.stringify(e)})
                }, userLogout: function () {
                    return m({url: "/logout", method: "post", data: c.a.stringify({})})
                }, getSelfUserInfo: function () {
                    return m({url: "/user/info/selfInfo", method: "post", data: c.a.stringify({})})
                }, getUserBaseInfo: function (e) {
                    return m({url: "/zyplayer-doc-wiki/common/user/base", method: "post", data: c.a.stringify(e)})
                }
            }, w = {
                queryTestDatasource: function (e) {
                    return m({url: "/zyplayer-doc-db/datasource/test", method: "post", data: c.a.stringify(e)})
                }, queryTableDdl: function (e) {
                    return m({url: "/zyplayer-doc-db/doc-db/getTableDdl", method: "post", data: c.a.stringify(e)})
                }, getEditorData: function (e) {
                    return m({url: "/zyplayer-doc-db/doc-db/getEditorData", method: "post", data: c.a.stringify(e)})
                }, datasourceList: function (e) {
                    return m({url: "/zyplayer-doc-db/doc-db/getDataSourceList", method: "post", data: c.a.stringify(e)})
                }, databaseList: function (e) {
                    return m({url: "/zyplayer-doc-db/doc-db/getDatabaseList", method: "post", data: c.a.stringify(e)})
                }, tableList: function (e) {
                    return m({url: "/zyplayer-doc-db/doc-db/getTableList", method: "post", data: c.a.stringify(e)})
                }, tableColumnList: function (e) {
                    return m({url: "/zyplayer-doc-db/doc-db/getTableColumnList", method: "post", data: c.a.stringify(e)})
                }, tableStatus: function (e) {
                    return m({url: "/zyplayer-doc-db/doc-db/getTableStatus", method: "post", data: c.a.stringify(e)})
                }, tableAndColumnBySearch: function (e) {
                    return m({
                        url: "/zyplayer-doc-db/doc-db/getTableAndColumnBySearch",
                        method: "post",
                        data: c.a.stringify(e)
                    })
                }, updateTableDesc: function (e) {
                    return m({url: "/zyplayer-doc-db/doc-db/updateTableDesc", method: "post", data: c.a.stringify(e)})
                }, updateTableColumnDesc: function (e) {
                    return m({url: "/zyplayer-doc-db/doc-db/updateTableColumnDesc", method: "post", data: c.a.stringify(e)})
                }, manageDatasourceList: function (e) {
                    return m({url: "/zyplayer-doc-db/datasource/list", method: "post", data: c.a.stringify(e)})
                }, manageUpdateDatasource: function (e) {
                    return m({url: "/zyplayer-doc-db/datasource/update", method: "post", data: c.a.stringify(e)})
                }, queryExecuteSql: function (e) {
                    return m({url: "/zyplayer-doc-db/executor/execute", method: "post", data: c.a.stringify(e)})
                }, executeSqlCancel: function (e) {
                    return m({url: "/zyplayer-doc-db/executor/cancel", method: "post", data: c.a.stringify(e)})
                }, updateFavorite: function (e) {
                    return m({url: "/zyplayer-doc-db/executor/favorite/add", method: "post", data: c.a.stringify(e)})
                }, favoriteList: function (e) {
                    return m({url: "/zyplayer-doc-db/executor/favorite/list", method: "post", data: c.a.stringify(e)})
                }, historyList: function (e) {
                    return m({url: "/zyplayer-doc-db/executor/history/list", method: "post", data: c.a.stringify(e)})
                }, transferStart: function (e) {
                    return m({url: "/zyplayer-doc-db/transfer/start", method: "post", data: c.a.stringify(e)})
                }, transferCancel: function (e) {
                    return m({url: "/zyplayer-doc-db/transfer/cancel", method: "post", data: c.a.stringify(e)})
                }, transferList: function (e) {
                    return m({url: "/zyplayer-doc-db/transfer/list", method: "post", data: c.a.stringify(e)})
                }, transferDetail: function (e) {
                    return m({url: "/zyplayer-doc-db/transfer/detail", method: "post", data: c.a.stringify(e)})
                }, transferUpdate: function (e) {
                    return m({url: "/zyplayer-doc-db/transfer/update", method: "post", data: c.a.stringify(e)})
                }, transferSqlColumns: function (e) {
                    return m({url: "/zyplayer-doc-db/transfer/sqlColumns", method: "post", data: c.a.stringify(e)})
                }, assignDbUserAuth: function (e) {
                    return m({url: "/zyplayer-doc-db/auth/assign", method: "post", data: c.a.stringify(e)})
                }, dbUserAuthList: function (e) {
                    return m({url: "/zyplayer-doc-db/auth/list", method: "post", data: c.a.stringify(e)})
                }, systemUpgradeInfo: function (e) {
                    return m({url: "/system/info/upgrade", method: "post", data: c.a.stringify(e)})
                }
            }, b = {
                data: function () {
                    return {
                        isCollapse: !1,
                        aboutDialogVisible: !1,
                        userSelfInfo: {},
                        datasourceOptions: [],
                        datasourceList: [],
                        datasourceGroupList: [],
                        choiceDatasourceId: "",
                        choiceDatasourceGroup: "",
                        defaultProps: {children: "children", label: "name"},
                        nowDatasourceShow: {},
                        databaseList: [],
                        databaseExpandedKeys: [],
                        upgradeInfo: {}
                    }
                }, computed: {
                    fullscreen: function () {
                        return this.$store.state.global.fullscreen
                    }
                }, mounted: function () {
                    this.getSelfUserInfo(), this.checkSystemUpgrade(), this.loadDatasourceList()
                }, methods: {
                    userSettingDropdown: function (e) {
                        console.log("command:" + e), "userSignOut" == e ? this.userSignOut() : "aboutDoc" == e ? this.aboutDialogVisible = !0 : "myInfo" == e ? this.$router.push({path: "/user/myInfo"}) : "console" == e ? window.location = "./" : this.$message.warning("功能暂未开放")
                    }, userSignOut: function () {
                        v.userLogout().then((function () {
                            location.reload()
                        }))
                    }, getSelfUserInfo: function () {
                        var e = this;
                        v.getSelfUserInfo().then((function (t) {
                            e.userSelfInfo = t.data
                        }))
                    }, sourceGroupChangeEvents: function () {
                        for (var e = [], t = 0; t < this.datasourceList.length; t++) {
                            var i = this.datasourceList[t];
                            this.choiceDatasourceGroup && this.choiceDatasourceGroup != i.groupName || e.push({
                                label: i.name,
                                value: i.id
                            })
                        }
                        this.datasourceOptions = e
                    }, datasourceChangeEvents: function () {
                        this.nowDatasourceShow = this.choiceDatasourceId;
                        for (var e = "", t = 0; t < this.datasourceList.length; t++) if (this.datasourceList[t].id == this.choiceDatasourceId) {
                            e = this.datasourceList[t].name;
                            break
                        }
                        this.loadDatabaseList(this.choiceDatasourceId, e)
                    }, handleNodeClick: function (e) {
                        console.log("点击节点：", e), 1 == e.type ? (this.nowClickPath = {
                            sourceId: this.choiceDatasourceId,
                            host: e.host,
                            dbName: e.dbName,
                            tableName: e.tableName
                        }, this.$router.push({
                            path: "/table/database",
                            query: this.nowClickPath
                        })) : 2 == e.type && (this.nowClickPath = {
                            sourceId: this.choiceDatasourceId,
                            host: e.host,
                            dbName: e.dbName,
                            tableName: e.tableName
                        }, this.$router.push({path: "/table/info", query: this.nowClickPath}))
                    }, handleNodeExpand: function (e) {
                        e.children.length > 0 && e.children[0].needLoad && (console.log("加载节点：", e), 1 == e.type && this.loadGetTableList(e))
                    }, loadGetTableList: function (e, t) {
                        w.tableList({sourceId: this.choiceDatasourceId, dbName: e.dbName}).then((function (i) {
                            for (var n = [], s = i.data || [], o = 0; o < s.length; o++) {
                                var r = {
                                    id: e.host + "_" + e.dbName + "_" + s[o].tableName,
                                    host: e.host,
                                    dbName: e.dbName,
                                    tableName: s[o].tableName,
                                    name: s[o].tableName,
                                    type: 2,
                                    comment: s[o].tableComment
                                };
                                n.push(r)
                            }
                            e.children = n, "function" == typeof t && t(n)
                        }))
                    }, loadDatasourceList: function () {
                        var e = this;
                        w.datasourceList({}).then((function (t) {
                            e.datasourceList = t.data || [];
                            for (var i = [], n = 0; n < e.datasourceList.length; n++) {
                                var s = e.datasourceList[n];
                                i.push({label: s.name, value: s.id})
                            }
                            e.datasourceOptions = i;
                            var o = [];
                            e.datasourceList.filter((function (e) {
                                return !!e.groupName
                            })).forEach((function (e) {
                                return o.push(e.groupName || "")
                            })), e.datasourceGroupList = Array.from(new Set(o))
                        }))
                    }, loadDatabaseList: function (e, t) {
                        var i = this;
                        return new Promise((function (n, s) {
                            i.databaseList = [], w.databaseList({sourceId: e}).then((function (e) {
                                for (var s = e.data || [], o = [], r = [], a = 0; a < s.length; a++) {
                                    var l = {
                                        id: t + "_" + s[a].dbName,
                                        host: t,
                                        dbName: s[a].dbName,
                                        name: s[a].dbName,
                                        type: 1,
                                        children: [{label: "", needLoad: !0}]
                                    };
                                    r.push(l)
                                }
                                o.push({id: t, host: t, name: t, children: r}), i.databaseList = o, n()
                            }))
                        }))
                    }, initLoadDataList: function (e) {
                        var t = this;
                        this.databaseList.length > 0 || (this.choiceDatasourceId = parseInt(e.sourceId), this.loadDatabaseList(e.sourceId, e.host).then((function () {
                            t.databaseExpandedKeys = [e.host]
                        })))
                    }, checkSystemUpgrade: function () {
                        var e = this;
                        w.systemUpgradeInfo({}).then((function (t) {
                            t.data && (e.upgradeInfo = t.data, console.log("zyplayer-doc发现新版本：\n升级地址：" + t.data.upgradeUrl + "\n当前版本：" + t.data.nowVersion + "\n最新版本：" + t.data.lastVersion + "\n升级内容：" + t.data.upgradeContent))
                        }))
                    }
                }
            }, y = b, $ = (i("034f"), i("2877")), S = Object($["a"])(y, r, a, !1, null, null, null), x = S.exports,
            C = i("8c4f"), k = function () {
                var e = this, t = e.$createElement;
                e._self._c;
                return e._m(0)
            }, L = [function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", {staticStyle: {padding: "10px"}}, [i("div", {
                    staticStyle: {
                        "max-width": "1200px",
                        margin: "20px auto"
                    }
                }, [i("div", {staticStyle: {"text-align": "center"}}, [e._v('欢迎使用ヾ(๑╹◡╹)ﾉ" - 在左上角选择一个数据源吧~')])])])
            }], A = {
                data: function () {
                    return {}
                }, mounted: function () {
                    this
                }, methods: {}
            }, E = A, _ = Object($["a"])(E, k, L, !1, null, null, null), R = _.exports, T = function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", {staticStyle: {"padding-top": "50px"}}, [i("el-form", {
                    ref: "loginParam",
                    staticClass: "demo-ruleForm login-container",
                    attrs: {model: e.loginParam, rules: e.loginRules, "label-position": "left", "label-width": "0px"}
                }, [i("h3", {staticClass: "title"}, [e._v("系统登录")]), i("el-form-item", {attrs: {prop: "username"}}, [i("el-input", {
                    attrs: {
                        type: "text",
                        "auto-complete": "off",
                        placeholder: "账号"
                    }, on: {
                        keyup: function (t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.loginSubmit(t)
                        }
                    }, model: {
                        value: e.loginParam.username, callback: function (t) {
                            e.$set(e.loginParam, "username", t)
                        }, expression: "loginParam.username"
                    }
                })], 1), i("el-form-item", {attrs: {prop: "password"}}, [i("el-input", {
                    attrs: {
                        type: "password",
                        "auto-complete": "off",
                        placeholder: "密码"
                    }, on: {
                        keyup: function (t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.loginSubmit(t)
                        }
                    }, model: {
                        value: e.loginParam.password, callback: function (t) {
                            e.$set(e.loginParam, "password", t)
                        }, expression: "loginParam.password"
                    }
                })], 1), i("el-form-item", {staticStyle: {width: "100%"}}, [i("el-button", {
                    staticStyle: {width: "100%"},
                    attrs: {type: "primary", loading: e.logining},
                    nativeOn: {
                        click: function (t) {
                            return t.preventDefault(), e.loginSubmit(t)
                        }
                    }
                }, [e._v("登录")])], 1)], 1)], 1)
            }, M = [], I = {
                data: function () {
                    return {
                        logining: !1,
                        redirect: "",
                        loginParam: {username: "", password: ""},
                        loginRules: {
                            username: [{required: !0, message: "请输入账号", trigger: "blur"}],
                            password: [{required: !0, message: "请输入密码", trigger: "blur"}]
                        },
                        checked: !0
                    }
                }, mounted: function () {
                    this.redirect = this.$route.query.redirect
                }, methods: {
                    loginSubmit: function () {
                        var e = this;
                        this.$refs.loginParam.validate((function (t) {
                            t && v.userLogin(e.loginParam).then((function () {
                                e.redirect ? location.href = decodeURIComponent(e.redirect) : e.$router.back()
                            }))
                        }))
                    }
                }
            }, D = I, F = (i("9231"), Object($["a"])(D, T, M, !1, null, null, null)), O = F.exports, P = function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", {staticClass: "my-info-vue"}, [i("div", {
                    staticStyle: {
                        margin: "0 auto",
                        "max-width": "1000px"
                    }
                }, [i("el-card", {staticClass: "box-card"}, [i("div", {
                    staticClass: "clearfix",
                    attrs: {slot: "header"},
                    slot: "header"
                }, [e._v("我的信息")]), i("el-form", {
                    staticClass: "search-form-box",
                    attrs: {"label-width": "100px"}
                }, [i("el-form-item", {attrs: {label: "账号："}}, [e._v(e._s(e.userInfo.userNo))]), i("el-form-item", {attrs: {label: "用户名："}}, [e._v(e._s(e.userInfo.userName))]), i("el-form-item", {attrs: {label: "手机号："}}, [e._v(e._s(e.userInfo.phone))]), i("el-form-item", {attrs: {label: "邮箱："}}, [e._v(e._s(e.userInfo.email))]), i("el-form-item", {attrs: {label: "状态："}}, [e._v(e._s(0 == e.userInfo.delFlag ? "正常" : "停用"))]), i("el-form-item", {attrs: {label: "性别："}}, [e._v(e._s(0 == e.userInfo.sex ? "女" : "男"))])], 1)], 1)], 1)])
            }, N = [], W = {
                data: function () {
                    return {userInfo: {}}
                }, mounted: function () {
                    this.getUserInfo()
                }, methods: {
                    getUserInfo: function () {
                        var e = this;
                        v.getSelfUserInfo().then((function (t) {
                            e.userInfo = t.data
                        }))
                    }
                }
            }, B = W, H = (i("dcfc"), Object($["a"])(B, P, N, !1, null, null, null)), z = H.exports, V = function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("router-view")
            }, U = [], K = {}, q = Object($["a"])(K, V, U, !1, null, null, null), j = q.exports, G = function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", [i("el-tabs", {
                    staticStyle: {padding: "5px 10px 0"},
                    attrs: {type: "card", closable: ""},
                    on: {"tab-click": e.changePage, "tab-remove": e.removePageTab},
                    model: {
                        value: e.activePage, callback: function (t) {
                            e.activePage = t
                        }, expression: "activePage"
                    }
                }, e._l(e.pageList, (function (t) {
                    return i("el-tab-pane", {attrs: {label: e.pageTabNameMap[t.fullPath] || t.name, name: t.fullPath}})
                })), 1), i("keep-alive", [i("router-view", {
                    key: e.$route.fullPath,
                    on: {initLoadDataList: e.initLoadDataList, loadDatasourceList: e.loadDatasourceList}
                })], 1)], 1)
            }, Q = [], Y = (i("c975"), {
                name: "PageTableView", components: {}, data: function () {
                    return {pageList: [], linkList: [], activePage: "", multiPage: !0}
                }, computed: {
                    pageTabNameMap: function () {
                        return this.$store.state.global.pageTabNameMap
                    }
                }, created: function () {
                    this.pageList.push(this.$route), this.linkList.push(this.$route.fullPath), this.activePage = this.$route.fullPath
                }, watch: {
                    $route: function (e, t) {
                        this.activePage = e.fullPath, this.linkList.indexOf(e.fullPath) < 0 && (this.linkList.push(e.fullPath), this.pageList.push(e))
                    }, activePage: function (e) {
                        this.$router.push(e)
                    }
                }, methods: {
                    initLoadDataList: function (e) {
                        this.$emit("initLoadDataList", e)
                    }, loadDatasourceList: function () {
                        this.$emit("loadDatasourceList")
                    }, changePage: function (e) {
                        this.activePage = e.name
                    }, editPage: function (e, t) {
                        this[t](e)
                    }, removePageTab: function (e) {
                        if (1 !== this.pageList.length) {
                            this.pageList = this.pageList.filter((function (t) {
                                return t.fullPath !== e
                            }));
                            var t = this.linkList.indexOf(e);
                            this.linkList = this.linkList.filter((function (t) {
                                return t !== e
                            })), t = t >= this.linkList.length ? this.linkList.length - 1 : t, this.activePage = this.linkList[t]
                        } else this.$message.warning("这是最后一页，不能再关闭了啦")
                    }
                }
            }), X = Y, J = Object($["a"])(X, G, Q, !1, null, "a596d90e", null), Z = J.exports, ee = function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", {staticClass: "table-info-vue"}, [i("el-card", {staticStyle: {margin: "10px"}}, [i("div", {
                    staticClass: "clearfix",
                    attrs: {slot: "header"},
                    slot: "header"
                }, [e._v(" 表信息 "), i("span", {
                    staticStyle: {
                        float: "right",
                        "margin-top": "-5px"
                    }
                }, [i("el-button", {
                    staticClass: "search-submit",
                    attrs: {size: "small", type: "primary", icon: "el-icon-search"},
                    on: {click: e.previewTableData}
                }, [e._v("表数据预览")])], 1)]), i("el-row", {staticClass: "status-info-row"}, [i("el-col", {attrs: {span: 24}}, [i("span", {staticClass: "label"}, [e._v("数据源：")]), e._v(e._s(e.vueQueryParam.host))])], 1), i("el-row", {staticClass: "status-info-row"}, [i("el-col", {attrs: {span: 6}}, [i("span", {staticClass: "label"}, [e._v("数据库：")]), e._v(e._s(e.vueQueryParam.dbName))]), i("el-col", {attrs: {span: 6}}, [i("span", {staticClass: "label"}, [e._v("数据表：")]), e._v(e._s(e.tableStatusInfo.name))]), i("el-col", {attrs: {span: 6}}, [i("span", {staticClass: "label"}, [e._v("引擎：")]), e._v(e._s(e.tableStatusInfo.engine))])], 1), i("el-row", {staticClass: "status-info-row"}, [i("el-col", {attrs: {span: 6}}, [i("span", {staticClass: "label"}, [e._v("行数：")]), e._v(e._s(e.tableStatusInfo.rows || 0))]), i("el-col", {attrs: {span: 6}}, [i("span", {staticClass: "label"}, [e._v("自动递增：")]), e._v(e._s(e.tableStatusInfo.avgRowLength || 0))]), i("el-col", {attrs: {span: 6}}, [i("span", {staticClass: "label"}, [e._v("行格式：")]), e._v(e._s(e.tableStatusInfo.rowFormat))]), i("el-col", {attrs: {span: 6}}, [i("span", {staticClass: "label"}, [e._v("排序规则：")]), e._v(e._s(e.tableStatusInfo.collation))])], 1), i("el-row", {staticClass: "status-info-row"}, [i("el-col", {attrs: {span: 6}}, [i("span", {staticClass: "label"}, [e._v("索引长度：")]), e._v(e._s(e.getBytesSize(e.tableStatusInfo.indexLength)))]), i("el-col", {attrs: {span: 6}}, [i("span", {staticClass: "label"}, [e._v("数据长度：")]), e._v(e._s(e.getBytesSize(e.tableStatusInfo.dataLength)))]), i("el-col", {attrs: {span: 6}}, [i("span", {staticClass: "label"}, [e._v("最大长度：")]), e._v(e._s(e.getBytesSize(e.tableStatusInfo.maxDataLength)))]), i("el-col", {attrs: {span: 6}}, [i("span", {staticClass: "label"}, [e._v("可用空间：")]), e._v(e._s(e.getBytesSize(e.tableStatusInfo.dataFree)))])], 1), i("el-row", {staticClass: "status-info-row"}, [i("el-col", {attrs: {span: 6}}, [i("span", {staticClass: "label"}, [e._v("创建时间：")]), e._v(e._s(e.tableStatusInfo.createTime))]), i("el-col", {attrs: {span: 6}}, [i("span", {staticClass: "label"}, [e._v("修改时间：")]), e._v(e._s(e.tableStatusInfo.updateTime))]), i("el-col", {attrs: {span: 6}}, [i("span", {staticClass: "label"}, [e._v("检查时间：")]), e._v(e._s(e.tableStatusInfo.checkTime))]), i("el-col", {attrs: {span: 6}}, [i("span", {staticClass: "label"}, [e._v("创建选项：")]), e._v(e._s(e.tableStatusInfo.createOptions))])], 1), i("el-row", {staticClass: "status-info-row"}, [i("el-col", {attrs: {span: 24}}, [i("span", {staticClass: "label"}, [e._v("表注释：")]), 1 == e.tableInfo.inEdit ? i("span", [i("el-input", {
                    staticStyle: {width: "500px"},
                    attrs: {placeholder: "输入表注释"},
                    on: {
                        keyup: function (t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.saveTableDescription(t)
                        }, blur: e.saveTableDescription
                    },
                    model: {
                        value: e.tableInfo.newDesc, callback: function (t) {
                            e.$set(e.tableInfo, "newDesc", t)
                        }, expression: "tableInfo.newDesc"
                    }
                })], 1) : i("span", [e._v(e._s(e.tableInfo.description || "暂无注释") + " "), i("i", {
                    staticClass: "el-icon-edit edit-table-desc",
                    on: {
                        click: function (t) {
                            e.tableInfo.inEdit = 1
                        }
                    }
                })])])], 1)], 1), i("el-card", {staticStyle: {margin: "10px"}}, [i("div", {
                    staticClass: "clearfix",
                    attrs: {slot: "header"},
                    slot: "header"
                }, [e._v(" 字段信息 "), i("el-tooltip", {
                    attrs: {
                        effect: "dark",
                        content: "点击注释列可编辑字段注释",
                        placement: "top"
                    }
                }, [i("i", {
                    staticClass: "el-icon-info",
                    staticStyle: {color: "#999"}
                })]), i("span", {
                    staticStyle: {
                        float: "right",
                        "margin-top": "-5px"
                    }
                }, [i("el-button", {
                    attrs: {size: "small"},
                    on: {click: e.showCreateTableDdl}
                }, [e._v("DDL")])], 1)], 1), i("div", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.columnListLoading,
                        expression: "columnListLoading"
                    }], staticStyle: {padding: "10px"}
                }, [i("el-table", {
                    staticStyle: {width: "100%", "margin-bottom": "5px"},
                    attrs: {data: e.columnList, stripe: "", border: ""}
                }, [i("el-table-column", {
                    attrs: {
                        prop: "name",
                        label: "字段名",
                        width: "200"
                    }
                }), i("el-table-column", {
                    attrs: {label: "自增", width: "50"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row.isidentity ? "是" : "否"))]
                        }
                    }])
                }), i("el-table-column", {
                    attrs: {
                        prop: "type",
                        label: "类型",
                        width: "150"
                    }
                }), i("el-table-column", {
                    attrs: {
                        prop: "length",
                        label: "长度",
                        width: "80"
                    }
                }), i("el-table-column", {
                    attrs: {
                        prop: "nullable",
                        label: "空值",
                        width: "80"
                    }
                }), i("el-table-column", {
                    attrs: {label: "主键", width: "50"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(t.row.ispramary ? "是" : "否"))]
                        }
                    }])
                }), i("el-table-column", {
                    attrs: {label: "注释"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [1 == t.row.inEdit ? i("div", [i("el-input", {
                                attrs: {placeholder: "输入字段注释"},
                                on: {
                                    keyup: function (i) {
                                        return !i.type.indexOf("key") && e._k(i.keyCode, "enter", 13, i.key, "Enter") ? null : e.saveColumnDescription(t.row)
                                    }, blur: function (i) {
                                        return e.saveColumnDescription(t.row)
                                    }
                                },
                                model: {
                                    value: t.row.newDesc, callback: function (i) {
                                        e.$set(t.row, "newDesc", i)
                                    }, expression: "scope.row.newDesc"
                                }
                            })], 1) : i("div", {
                                staticClass: "description", on: {
                                    click: function (i) {
                                        return e.descBoxClick(t.row)
                                    }
                                }
                            }, [e._v(e._s(t.row.description))])]
                        }
                    }])
                })], 1)], 1)]), i("el-dialog", {
                    attrs: {visible: e.tableDDLInfoDialogVisible, footer: null, width: "760px"},
                    on: {
                        "update:visible": function (t) {
                            e.tableDDLInfoDialogVisible = t
                        }
                    }
                }, [i("div", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [i("span", {staticStyle: {"margin-right": "15px"}}, [e._v("DDL")]), i("el-button", {
                    directives: [{
                        name: "clipboard",
                        rawName: "v-clipboard:copy",
                        value: e.tableDDLInfo,
                        expression: "tableDDLInfo",
                        arg: "copy"
                    }, {
                        name: "clipboard",
                        rawName: "v-clipboard:success",
                        value: e.onCopySuccess,
                        expression: "onCopySuccess",
                        arg: "success"
                    }, {
                        name: "clipboard",
                        rawName: "v-clipboard:error",
                        value: e.onCopyError,
                        expression: "onCopyError",
                        arg: "error"
                    }], attrs: {size: "small", icon: "el-icon-document-copy"}
                }, [e._v("复制")])], 1), i("div", {
                    directives: [{
                        name: "highlight",
                        rawName: "v-highlight"
                    }]
                }, [i("pre", [i("code", {domProps: {innerHTML: e._s(e.tableDDLInfo)}})])])])], 1)
            }, te = [], ie = (i("a4d3"), i("e01a"), i("b680"), {
                data: function () {
                    return {
                        columnListLoading: !1,
                        vueQueryParam: {},
                        tableStatusInfo: {},
                        columnList: [],
                        tableInfo: {},
                        nowExecutorId: 1,
                        tableDDLInfo: "",
                        tableDDLInfoDialogVisible: !1
                    }
                }, mounted: function () {
                    var e = this;
                    setTimeout((function () {
                        e.$emit("initLoadDataList", {
                            sourceId: e.vueQueryParam.sourceId,
                            host: e.vueQueryParam.host,
                            dbName: e.vueQueryParam.dbName
                        })
                    }), 500)
                }, activated: function () {
                    this.initQueryParam(this.$route)
                }, methods: {
                    initQueryParam: function (e) {
                        var t = this;
                        this.columnListLoading || (this.columnListLoading = !0, this.vueQueryParam = e.query, w.tableColumnList(this.vueQueryParam).then((function (e) {
                            for (var i = e.data.columnList || [], n = 0; n < i.length; n++) i[n].inEdit = 0, i[n].newDesc = i[n].description;
                            t.columnList = i;
                            var s = e.data.tableInfo || {};
                            s.inEdit = 0, s.newDesc = s.description, t.tableInfo = s;
                            var o = {key: t.$route.fullPath, val: "表-" + s.tableName};
                            t.$store.commit("global/addTableName", o), t.columnListLoading = !1
                        })), w.tableStatus(this.vueQueryParam).then((function (e) {
                            t.tableStatusInfo = e.data || {}
                        })))
                    }, onCopySuccess: function (e) {
                        this.$message.success("内容已复制到剪切板！")
                    }, onCopyError: function (e) {
                        this.$message.error("抱歉，复制失败！")
                    }, showCreateTableDdl: function () {
                        var e = this;
                        this.tableDDLInfo = "";
                        var t = {
                            sourceId: this.vueQueryParam.sourceId,
                            dbName: this.vueQueryParam.dbName,
                            tableName: this.vueQueryParam.tableName
                        }, i = this.$loading({
                            lock: !0,
                            text: "加载中...",
                            spinner: "el-icon-loading",
                            background: "rgba(0, 0, 0, 0.7)"
                        });
                        this.tableDDLInfoDialogVisible = !1, w.queryTableDdl(t).then((function (t) {
                            i.close(), e.tableDDLInfo = t.data || "获取失败", setTimeout((function () {
                                return e.tableDDLInfoDialogVisible = !0
                            }), 0)
                        })).catch((function () {
                            i.close()
                        }))
                    }, descBoxClick: function (e) {
                        e.inEdit = 1
                    }, previewTableData: function () {
                        var e = {
                            sourceId: this.vueQueryParam.sourceId,
                            dbName: this.vueQueryParam.dbName,
                            tableName: this.vueQueryParam.tableName,
                            host: this.vueQueryParam.host,
                            dbType: this.tableStatusInfo.dbType
                        };
                        this.$router.push({path: "/data/dataPreview", query: e})
                    }, getBytesSize: function (e) {
                        if (!e) return "0 bytes";
                        var t = 1024;
                        return e < t ? e + " bytes" : e < Math.pow(t, 2) ? (e / t).toFixed(2) + "KB" : e < Math.pow(t, 3) ? (e / Math.pow(t, 2)).toFixed(2) + "MB" : e < Math.pow(t, 4) ? (e / Math.pow(t, 3)).toFixed(2) + "GB" : (e / Math.pow(t, 4)).toFixed(2) + "TB"
                    }, saveColumnDescription: function (e) {
                        var t = this;
                        0 != e.inEdit && e.description != e.newDesc ? (e.inEdit = 0, this.vueQueryParam.columnName = e.name, this.vueQueryParam.newDesc = e.newDesc, w.updateTableColumnDesc(this.vueQueryParam).then((function () {
                            e.description = e.newDesc, t.$message.success("修改成功")
                        }))) : e.inEdit = 0
                    }, saveTableDescription: function () {
                        var e = this;
                        0 != this.tableInfo.inEdit && this.tableInfo.description != this.tableInfo.newDesc ? (this.tableInfo.inEdit = 0, this.vueQueryParam.newDesc = this.tableInfo.newDesc, w.updateTableDesc(this.vueQueryParam).then((function () {
                            e.tableInfo.description = e.tableInfo.newDesc, e.$message.success("修改成功")
                        }))) : this.tableInfo.inEdit = 0
                    }
                }
            }), ne = ie, se = (i("ecf2"), Object($["a"])(ne, ee, te, !1, null, null, null)), oe = se.exports,
            re = function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", {staticClass: "table-database-vue"}, [i("el-card", {
                    staticStyle: {margin: "10px"},
                    attrs: {shadow: "never"}
                }, [i("div", {
                    staticClass: "clearfix",
                    attrs: {slot: "header"},
                    slot: "header"
                }, [e._v("库信息")]), i("el-form", {attrs: {"label-width": "100px"}}, [i("el-form-item", {attrs: {label: "数据源："}}, [e._v(e._s(e.vueQueryParam.host))]), i("el-form-item", {attrs: {label: "数据库："}}, [e._v(e._s(e.vueQueryParam.dbName))])], 1), i("el-form", {
                    attrs: {
                        inline: !0,
                        "label-width": "100px"
                    }
                }, [i("el-form-item", {attrs: {label: "关键字："}}, [i("el-input", {
                    staticStyle: {width: "500px"},
                    attrs: {placeholder: "输入字段名或注释搜索相关的表或字段信息"},
                    model: {
                        value: e.keyword, callback: function (t) {
                            e.keyword = t
                        }, expression: "keyword"
                    }
                })], 1), i("el-form-item", [i("el-button", {
                    staticClass: "search-submit",
                    attrs: {type: "primary", icon: "el-icon-search"},
                    on: {click: e.searchSubmit}
                }, [e._v("模糊搜索")])], 1)], 1)], 1), i("div", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.columnListLoading,
                        expression: "columnListLoading"
                    }], staticStyle: {padding: "10px"}
                }, [i("el-table", {
                    staticStyle: {width: "100%", "margin-bottom": "5px"},
                    attrs: {data: e.columnList, stripe: "", border: ""}
                }, [i("el-table-column", {
                    attrs: {
                        prop: "tableName",
                        label: "表名",
                        width: "200"
                    }
                }), i("el-table-column", {
                    attrs: {
                        prop: "columnName",
                        label: "字段名",
                        width: "200"
                    }
                }), i("el-table-column", {attrs: {prop: "description", label: "注释"}})], 1)], 1)], 1)
            }, ae = [], le = {
                data: function () {
                    return {columnListLoading: !1, vueQueryParam: {}, columnList: [], tableInfo: [], keyword: ""}
                }, mounted: function () {
                    var e = this;
                    setTimeout((function () {
                        e.$emit("initLoadDataList", {
                            sourceId: e.vueQueryParam.sourceId,
                            host: e.vueQueryParam.host,
                            dbName: e.vueQueryParam.dbName
                        })
                    }), 500)
                }, activated: function () {
                    this.initQueryParam(this.$route)
                }, methods: {
                    initQueryParam: function (e) {
                        this.vueQueryParam = e.query;
                        var t = {key: this.$route.fullPath, val: "库-" + this.vueQueryParam.dbName};
                        this.$store.commit("global/addTableName", t)
                    }, searchSubmit: function () {
                        var e = this;
                        this.columnListLoading = !0, this.vueQueryParam.searchText = this.keyword, w.tableAndColumnBySearch(this.vueQueryParam).then((function (t) {
                            e.columnList = t.data || [], e.columnListLoading = !1
                        }))
                    }
                }
            }, ce = le, he = (i("0d0e"), Object($["a"])(ce, re, ae, !1, null, null, null)), ue = he.exports,
            de = function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", {staticStyle: {padding: "0 10px"}}, [i("el-card", [i("div", {
                    staticClass: "clearfix",
                    attrs: {slot: "header"},
                    slot: "header"
                }, [i("span", [e._v("数据源管理")]), i("el-button", {
                    staticStyle: {float: "right", "margin-left": "5px"},
                    attrs: {loading: e.loadDataListLoading, plain: "", icon: "el-icon-refresh", size: "small"},
                    on: {click: e.getDatasourceList}
                }, [e._v("刷新")]), i("el-button", {
                    staticStyle: {float: "right"},
                    attrs: {type: "primary", icon: "el-icon-circle-plus-outline", size: "small"},
                    on: {click: e.addDatasource}
                }, [e._v("新增")])], 1), i("el-table", {
                    staticStyle: {width: "100%", "margin-bottom": "5px"},
                    attrs: {data: e.datasourceList, stripe: "", border: ""}
                }, [i("el-table-column", {
                    attrs: {
                        prop: "name",
                        label: "名字",
                        width: "200"
                    }
                }), i("el-table-column", {
                    attrs: {
                        prop: "groupName",
                        label: "分组",
                        width: "100"
                    }
                }), i("el-table-column", {
                    attrs: {
                        prop: "driverClassName",
                        label: "驱动类",
                        width: "200"
                    }
                }), i("el-table-column", {
                    attrs: {
                        prop: "sourceUrl",
                        label: "数据源URL"
                    }
                }), i("el-table-column", {
                    attrs: {
                        prop: "sourceName",
                        label: "账号",
                        width: "200"
                    }
                }), i("el-table-column", {
                    attrs: {label: "操作", width: "220"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [i("el-button", {
                                attrs: {type: "primary", size: "mini"}, on: {
                                    click: function (i) {
                                        return e.editDatasource(t.row)
                                    }
                                }
                            }, [e._v("修改")]), i("el-button", {
                                attrs: {type: "success", size: "mini"},
                                on: {
                                    click: function (i) {
                                        return e.editDbAuth(t.row)
                                    }
                                }
                            }, [e._v("权限")]), i("el-button", {
                                attrs: {type: "danger", size: "mini"},
                                on: {
                                    click: function (i) {
                                        return e.deleteDatasource(t.row)
                                    }
                                }
                            }, [e._v("删除")])]
                        }
                    }])
                })], 1)], 1), i("el-dialog", {
                    attrs: {
                        inline: !0,
                        title: e.newDatasource.id > 0 ? "编辑数据源" : "新增数据源",
                        visible: e.datasourceDialogVisible,
                        width: "760px"
                    }, on: {
                        "update:visible": function (t) {
                            e.datasourceDialogVisible = t
                        }
                    }
                }, [i("el-form", {attrs: {"label-width": "120px"}}, [i("el-form-item", {attrs: {label: "分组："}}, [i("el-select", {
                    staticStyle: {width: "100%"},
                    attrs: {placeholder: "请选择或输入新的分组名字", filterable: "", "allow-create": ""},
                    model: {
                        value: e.newDatasource.groupName, callback: function (t) {
                            e.$set(e.newDatasource, "groupName", t)
                        }, expression: "newDatasource.groupName"
                    }
                }, [i("el-option", {attrs: {value: ""}}, [e._v("未分组")]), e._l(e.datasourceGroupList, (function (e) {
                    return i("el-option", {attrs: {value: e}})
                }))], 2)], 1), i("el-form-item", {attrs: {label: "数据源名称："}}, [i("el-input", {
                    attrs: {placeholder: "给数据源起个中文名称"},
                    model: {
                        value: e.newDatasource.name, callback: function (t) {
                            e.$set(e.newDatasource, "name", t)
                        }, expression: "newDatasource.name"
                    }
                })], 1), i("el-form-item", {attrs: {label: "驱动类："}}, [i("el-select", {
                    staticStyle: {width: "100%"},
                    attrs: {placeholder: "驱动类"},
                    on: {change: e.driverClassNameChange},
                    model: {
                        value: e.newDatasource.driverClassName, callback: function (t) {
                            e.$set(e.newDatasource, "driverClassName", t)
                        }, expression: "newDatasource.driverClassName"
                    }
                }, [i("el-option", {
                    attrs: {
                        label: "com.mysql.jdbc.Driver",
                        value: "com.mysql.jdbc.Driver"
                    }
                }), i("el-option", {
                    attrs: {
                        label: "net.sourceforge.jtds.jdbc.Driver",
                        value: "net.sourceforge.jtds.jdbc.Driver"
                    }
                }), i("el-option", {
                    attrs: {
                        label: "oracle.jdbc.driver.OracleDriver",
                        value: "oracle.jdbc.driver.OracleDriver"
                    }
                }), i("el-option", {
                    attrs: {
                        label: "org.postgresql.Driver",
                        value: "org.postgresql.Driver"
                    }
                })], 1)], 1), i("el-form-item", {attrs: {label: "数据源URL："}}, [i("el-input", {
                    attrs: {placeholder: e.urlPlaceholder},
                    model: {
                        value: e.newDatasource.sourceUrl, callback: function (t) {
                            e.$set(e.newDatasource, "sourceUrl", t)
                        }, expression: "newDatasource.sourceUrl"
                    }
                })], 1), i("el-form-item", {attrs: {label: "账号："}}, [i("el-input", {
                    attrs: {placeholder: "账号"},
                    model: {
                        value: e.newDatasource.sourceName, callback: function (t) {
                            e.$set(e.newDatasource, "sourceName", t)
                        }, expression: "newDatasource.sourceName"
                    }
                })], 1), i("el-form-item", {attrs: {label: "密码："}}, [i("el-input", {
                    attrs: {placeholder: "密码"},
                    model: {
                        value: e.newDatasource.sourcePassword, callback: function (t) {
                            e.$set(e.newDatasource, "sourcePassword", t)
                        }, expression: "newDatasource.sourcePassword"
                    }
                })], 1), i("el-form-item", {attrs: {label: "测试连接："}}, [i("el-button", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.testDatasourceErrLoading,
                        expression: "testDatasourceErrLoading"
                    }], attrs: {type: "primary"}, on: {click: e.testDatasource}
                }, [e._v("测试数据源")])], 1)], 1), i("div", {
                    staticStyle: {"text-align": "center"},
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [i("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.saveDatasource}
                }, [e._v("保存")]), i("el-button", {
                    attrs: {plain: ""}, on: {
                        click: function (t) {
                            e.datasourceDialogVisible = !1
                        }
                    }
                }, [e._v("取消")])], 1)], 1), i("el-dialog", {
                    attrs: {
                        visible: e.dbSourceAuthDialogVisible,
                        width: "900px",
                        "close-on-click-modal": !1
                    }, on: {
                        "update:visible": function (t) {
                            e.dbSourceAuthDialogVisible = t
                        }
                    }
                }, [i("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [i("span", [e._v("权限编辑")]), i("span", {
                    staticStyle: {
                        "margin-left": "10px",
                        color: "#999",
                        "font-size": "12px"
                    }
                }, [i("i", {staticClass: "el-icon-info"}), e._v(" 添加、删除或编辑之后记得点击保存哦~")])]), i("el-row", [i("el-select", {
                    staticStyle: {
                        width: "750px",
                        "margin-right": "10px"
                    },
                    attrs: {
                        filterable: "",
                        remote: "",
                        "reserve-keyword": "",
                        placeholder: "请输入名字、邮箱、账号搜索用户",
                        "remote-method": e.getSearchUserList,
                        loading: e.dbSourceAuthUserLoading
                    },
                    model: {
                        value: e.dbSourceAuthNewUser, callback: function (t) {
                            e.dbSourceAuthNewUser = t
                        }, expression: "dbSourceAuthNewUser"
                    }
                }, e._l(e.searchUserList, (function (e) {
                    return i("el-option", {key: e.id, attrs: {label: e.userName, value: e.id}})
                })), 1), i("el-button", {on: {click: e.addDbSourceAuthUser}}, [e._v("添加")])], 1), i("el-table", {
                    staticStyle: {
                        width: "100%",
                        margin: "10px 0"
                    }, attrs: {data: e.dbSourceAuthUserList, border: "", size: "mini"}
                }, [i("el-table-column", {
                    attrs: {
                        prop: "userName",
                        label: "用户",
                        width: "150"
                    }
                }), i("el-table-column", {
                    attrs: {label: "权限"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [i("el-radio", {
                                attrs: {label: 0},
                                model: {
                                    value: t.row.executeAuth, callback: function (i) {
                                        e.$set(t.row, "executeAuth", i)
                                    }, expression: "scope.row.executeAuth"
                                }
                            }, [e._v("无权限")]), i("el-radio", {
                                attrs: {label: 1},
                                model: {
                                    value: t.row.executeAuth, callback: function (i) {
                                        e.$set(t.row, "executeAuth", i)
                                    }, expression: "scope.row.executeAuth"
                                }
                            }, [e._v("库表查看权")]), i("el-radio", {
                                attrs: {label: 2},
                                model: {
                                    value: t.row.executeAuth, callback: function (i) {
                                        e.$set(t.row, "executeAuth", i)
                                    }, expression: "scope.row.executeAuth"
                                }
                            }, [e._v("数据查询权")]), i("el-radio", {
                                attrs: {label: 3},
                                model: {
                                    value: t.row.executeAuth, callback: function (i) {
                                        e.$set(t.row, "executeAuth", i)
                                    }, expression: "scope.row.executeAuth"
                                }
                            }, [e._v("所有权限")]), i("el-checkbox", {
                                attrs: {"true-label": 1, "false-label": 0},
                                model: {
                                    value: t.row.descEditAuth, callback: function (i) {
                                        e.$set(t.row, "descEditAuth", i)
                                    }, expression: "scope.row.descEditAuth"
                                }
                            }, [e._v("表字段注释修改权")])]
                        }
                    }])
                }), i("el-table-column", {
                    attrs: {label: "操作", width: "80"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [i("el-button", {
                                attrs: {size: "small", type: "danger", plain: ""},
                                on: {
                                    click: function (i) {
                                        return e.deleteUserDbSourceAuth(t.row)
                                    }
                                }
                            }, [e._v("删除")])]
                        }
                    }])
                })], 1), i("div", [i("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.saveUserDbSourceAuth}
                }, [e._v("保存配置")])], 1)], 1), i("el-dialog", {
                    attrs: {
                        title: "测试数据源失败",
                        visible: e.testDatasourceErrVisible,
                        footer: null,
                        width: "760px"
                    }, on: {
                        "update:visible": function (t) {
                            e.testDatasourceErrVisible = t
                        }
                    }
                }, [i("div", {
                    directives: [{
                        name: "highlight",
                        rawName: "v-highlight"
                    }]
                }, [i("pre", [i("code", {domProps: {innerHTML: e._s(e.testDatasourceErrInfo)}})])])])], 1)
            }, ge = [], fe = {
                data: function () {
                    return {
                        loadDataListLoading: !1,
                        datasourceDialogVisible: !1,
                        datasourceList: [],
                        newDatasource: {},
                        urlPlaceholder: "数据源URL",
                        dbSourceAuthDialogVisible: !1,
                        dbSourceAuthUserList: [],
                        dbSourceAuthUserLoading: !1,
                        searchUserList: [],
                        dbSourceAuthNewUser: "",
                        testDatasourceErrInfo: "",
                        testDatasourceErrVisible: !1,
                        testDatasourceErrLoading: !1,
                        datasourceGroupList: []
                    }
                }, mounted: function () {
                    this.getDatasourceList()
                }, methods: {
                    editDbAuth: function (e) {
                        this.newDatasource = JSON.parse(JSON.stringify(e)), this.dbSourceAuthDialogVisible = !0, this.loadDbAuthUserList()
                    }, loadDbAuthUserList: function () {
                        var e = this;
                        this.dbSourceAuthNewUser = [], this.dbSourceAuthUserList = [];
                        var t = {sourceId: this.newDatasource.id};
                        w.dbUserAuthList(t).then((function (t) {
                            e.dbSourceAuthUserList = t.data || []
                        }))
                    }, saveUserDbSourceAuth: function () {
                        var e = this,
                            t = {sourceId: this.newDatasource.id, authList: JSON.stringify(this.dbSourceAuthUserList)};
                        w.assignDbUserAuth(t).then((function () {
                            e.$message.success("保存成功")
                        }))
                    }, deleteUserDbSourceAuth: function (e) {
                        for (var t = [], i = 0; i < this.dbSourceAuthUserList.length; i++) {
                            var n = this.dbSourceAuthUserList[i];
                            n.userId != e.userId && t.push(this.dbSourceAuthUserList[i])
                        }
                        this.dbSourceAuthUserList = t
                    }, addDbSourceAuthUser: function () {
                        if (this.dbSourceAuthNewUser.length <= 0) this.$message.warning("请先选择用户"); else {
                            for (var e = "", t = 0; t < this.searchUserList.length; t++) if (this.dbSourceAuthNewUser == this.searchUserList[t].id) {
                                e = this.searchUserList[t].userName;
                                break
                            }
                            this.dbSourceAuthUserList.push({
                                userName: e,
                                userId: this.dbSourceAuthNewUser,
                                executeAuth: 0,
                                descEditAuth: 0
                            }), this.dbSourceAuthNewUser = ""
                        }
                    }, getSearchUserList: function (e) {
                        var t = this;
                        e && (this.dbSourceAuthUserLoading = !0, v.getUserBaseInfo({search: e}).then((function (e) {
                            t.searchUserList = e.data || [], t.dbSourceAuthUserLoading = !1
                        })))
                    }, addDatasource: function () {
                        this.datasourceDialogVisible = !0, this.newDatasource = {
                            name: "",
                            driverClassName: "",
                            sourceUrl: "",
                            sourceName: "",
                            sourcePassword: "",
                            groupName: ""
                        }
                    }, editDatasource: function (e) {
                        this.newDatasource = JSON.parse(JSON.stringify(e)), this.datasourceDialogVisible = !0
                    }, deleteDatasource: function (e) {
                        var t = this;
                        this.$confirm("确定要删除此数据源吗？", "提示", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            type: "warning"
                        }).then((function () {
                            e.yn = 0, w.manageUpdateDatasource(e).then((function () {
                                t.$message.success("删除成功！"), t.$emit("loadDatasourceList"), t.getDatasourceList()
                            }))
                        })).catch((function () {
                        }))
                    }, saveDatasource: function () {
                        var e = this;
                        this.datasourceDialogVisible = !1, w.manageUpdateDatasource(this.newDatasource).then((function () {
                            e.$message.success("保存成功！"), e.$emit("loadDatasourceList"), e.getDatasourceList()
                        }))
                    }, testDatasource: function () {
                        var e = this;
                        this.testDatasourceErrLoading = !0, w.queryTestDatasource(this.newDatasource).then((function (t) {
                            e.testDatasourceErrLoading = !1, 200 == t.errCode ? e.$message.success("连接成功！") : (e.testDatasourceErrVisible = !0, e.testDatasourceErrInfo = t.errMsg || "")
                        }))
                    }, driverClassNameChange: function () {
                        "com.mysql.jdbc.Driver" == this.newDatasource.driverClassName ? this.urlPlaceholder = "例：jdbc:mysql://127.0.0.1:3306/user_info?useUnicode=true&characterEncoding=utf8" : "net.sourceforge.jtds.jdbc.Driver" == this.newDatasource.driverClassName ? this.urlPlaceholder = "例：jdbc:jtds:sqlserver://127.0.0.1:33434;DatabaseName=user_info;socketTimeout=60;" : "oracle.jdbc.driver.OracleDriver" == this.newDatasource.driverClassName ? this.urlPlaceholder = "例：jdbc:oracle:thin:@127.0.0.1:1521/user_info" : "org.postgresql.Driver" == this.newDatasource.driverClassName && (this.urlPlaceholder = "例：jdbc:postgresql://127.0.0.1:5432/user_info")
                    }, getDatasourceList: function () {
                        var e = this;
                        this.loadDataListLoading = !0, w.manageDatasourceList({}).then((function (t) {
                            e.datasourceList = t.data || [];
                            var i = [];
                            e.datasourceList.filter((function (e) {
                                return !!e.groupName
                            })).forEach((function (e) {
                                return i.push(e.groupName)
                            })), e.datasourceGroupList = Array.from(new Set(i)), setTimeout((function () {
                                e.loadDataListLoading = !1
                            }), 800)
                        }))
                    }
                }
            }, pe = fe, me = Object($["a"])(pe, de, ge, !1, null, null, null), ve = me.exports, we = function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", {
                    staticStyle: {
                        padding: "0 10px",
                        height: "100%",
                        "box-sizing": "border-box"
                    }
                }, [i("el-card", [i("div", {
                    staticClass: "clearfix",
                    attrs: {slot: "header"},
                    slot: "header"
                }, [i("span", [e._v("数据库表导出")])]), i("div", {staticStyle: {"margin-bottom": "10px"}}, [i("el-select", {
                    attrs: {
                        filterable: "",
                        placeholder: "请选择数据源"
                    }, on: {change: e.datasourceChangeEvents}, model: {
                        value: e.choiceDatasourceId, callback: function (t) {
                            e.choiceDatasourceId = t
                        }, expression: "choiceDatasourceId"
                    }
                }, e._l(e.datasourceOptions, (function (e) {
                    return i("el-option", {key: e.value, attrs: {label: e.label, value: e.value}})
                })), 1), i("el-select", {
                    staticStyle: {margin: "0 10px"},
                    attrs: {filterable: "", placeholder: "请选择数据库"},
                    on: {change: e.databaseChangeEvents},
                    model: {
                        value: e.choiceDatabase, callback: function (t) {
                            e.choiceDatabase = t
                        }, expression: "choiceDatabase"
                    }
                }, e._l(e.databaseList, (function (e) {
                    return i("el-option", {key: e.dbName, attrs: {label: e.dbName, value: e.dbName}})
                })), 1), i("el-radio-group", {
                    model: {
                        value: e.exportType, callback: function (t) {
                            e.exportType = t
                        }, expression: "exportType"
                    }
                }, [i("el-radio", {attrs: {label: 1}}, [e._v("HTML格式")]), i("el-radio", {attrs: {label: 2}}, [e._v("Excel格式")]), i("el-radio", {attrs: {label: 3}}, [e._v("Word格式")])], 1), i("el-button", {
                    staticStyle: {margin: "0 10px 0 20px"},
                    attrs: {type: "primary"},
                    on: {click: e.exportChoiceTable}
                }, [e._v("导出选中的表")]), i("a", {
                    attrs: {
                        target: "_blank",
                        title: "点击查看如何使用",
                        href: "http://doc.zyplayer.com/zyplayer-doc-manage/doc-wiki#/page/share/view?pageId=117&space=23f3f59a60824d21af9f7c3bbc9bc3cb"
                    }
                }, [i("i", {
                    staticClass: "el-icon-info",
                    staticStyle: {color: "#999"}
                })])], 1), i("el-table", {
                    staticStyle: {width: "100%", "margin-bottom": "5px"},
                    attrs: {data: e.tableList, stripe: "", border: ""},
                    on: {"selection-change": e.handleSelectionChange}
                }, [i("el-table-column", {
                    attrs: {
                        type: "selection",
                        width: "55"
                    }
                }), i("el-table-column", {
                    attrs: {
                        prop: "tableName",
                        label: "表名"
                    }
                }), i("el-table-column", {
                    attrs: {
                        prop: "tableComment",
                        label: "表注释"
                    }
                })], 1)], 1), i("form", {
                    ref: "downloadForm",
                    attrs: {method: "post", action: e.downloadFormParam.url, target: "_blank"}
                }, e._l(e.downloadFormParam.param, (function (e, t) {
                    return i("input", {attrs: {type: "hidden", name: t}, domProps: {value: e}})
                })), 0)], 1)
            }, be = [], ye = {
                data: function () {
                    return {
                        datasourceOptions: [],
                        datasourceList: [],
                        choiceDatasourceId: "",
                        choiceDatabase: "",
                        choiceTable: "",
                        exportType: 1,
                        nowDatasourceShow: {},
                        databaseList: [],
                        tableList: [],
                        selectTables: [],
                        downloadFormParam: {url: "zyplayer-doc-db/doc-db/exportDatabase", param: {}}
                    }
                }, mounted: function () {
                    f = this, this.loadDatasourceList()
                }, methods: {
                    datasourceChangeEvents: function () {
                        f.nowDatasourceShow = this.choiceDatasourceId, f.loadDatabaseList(this.choiceDatasourceId)
                    }, databaseChangeEvents: function () {
                        f.loadGetTableList()
                    }, exportChoiceTable: function () {
                        var e = this;
                        if (this.selectTables.length <= 0) f.$message.info("请选择需要导出的表"); else {
                            for (var t = "", i = 0; i < this.selectTables.length; i++) "" !== t && (t += ","), t += this.selectTables[i].tableName;
                            this.downloadFormParam.param = {
                                sourceId: this.choiceDatasourceId,
                                exportType: this.exportType,
                                dbName: this.choiceDatabase,
                                tableNames: t
                            }, setTimeout((function () {
                                return e.$refs.downloadForm.submit()
                            }), 0)
                        }
                    }, loadGetTableList: function () {
                        var e = this;
                        w.tableList({sourceId: this.choiceDatasourceId, dbName: this.choiceDatabase}).then((function (t) {
                            e.tableList = t.data || []
                        }))
                    }, loadDatasourceList: function () {
                        var e = this;
                        w.datasourceList({}).then((function (t) {
                            e.datasourceList = t.data || [];
                            for (var i = [], n = 0; n < e.datasourceList.length; n++) i.push({
                                label: e.datasourceList[n].name,
                                value: e.datasourceList[n].id
                            });
                            e.datasourceOptions = i
                        }))
                    }, loadDatabaseList: function () {
                        var e = this;
                        w.databaseList({sourceId: this.choiceDatasourceId}).then((function (t) {
                            e.databaseList = t.data || []
                        }))
                    }, handleSelectionChange: function (e) {
                        this.selectTables = e
                    }
                }
            }, $e = ye, Se = (i("9100"), Object($["a"])($e, we, be, !1, null, null, null)), xe = Se.exports,
            Ce = function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", {staticClass: "data-executor-vue"}, [i("div", {
                    staticStyle: {
                        padding: "0 10px 10px",
                        height: "100%",
                        "box-sizing": "border-box"
                    }
                }, [i("el-card", {staticStyle: {"margin-bottom": "10px"}}, [i("pre", {
                    staticStyle: {
                        width: "100%",
                        height: "500px",
                        "margin-top": "0"
                    }, attrs: {id: "sqlExecutorEditor"}
                }), i("div", [e.sqlExecuting ? i("el-button", {
                    attrs: {
                        type: "primary",
                        plain: "",
                        size: "small",
                        icon: "el-icon-video-pause"
                    }, on: {click: e.cancelExecutorSql}
                }, [e._v("取消执行")]) : i("el-tooltip", {
                    attrs: {
                        effect: "dark",
                        content: "Ctrl+R、Ctrl+Enter",
                        placement: "top"
                    }
                }, [i("el-button", {
                    attrs: {type: "primary", plain: "", size: "small", icon: "el-icon-video-play"},
                    on: {click: e.doExecutorSql}
                }, [e._v("执行")])], 1), i("el-button", {
                    attrs: {icon: "el-icon-brush", size: "small"},
                    on: {click: e.formatterSql}
                }, [e._v("SQL美化")]), i("el-button", {
                    attrs: {plain: "", size: "small", icon: "el-icon-star-off"},
                    on: {
                        click: function (t) {
                            return e.addFavorite("")
                        }
                    }
                }, [e._v("收藏")]), i("el-button", {
                    attrs: {plain: "", size: "small", icon: "el-icon-tickets"},
                    on: {click: e.loadHistoryAndFavoriteList}
                }, [e._v("收藏及历史")]), i("div", {staticStyle: {float: "right"}}, [i("el-select", {
                    staticStyle: {width: "200px"},
                    attrs: {size: "small", filterable: "", placeholder: "请先选择分组"},
                    on: {change: e.sourceGroupChangeEvents},
                    model: {
                        value: e.choiceDatasourceGroup, callback: function (t) {
                            e.choiceDatasourceGroup = t
                        }, expression: "choiceDatasourceGroup"
                    }
                }, [i("el-option", {attrs: {value: "", label: "全部分组"}}), e._l(e.datasourceGroupList, (function (e) {
                    return i("el-option", {key: e, attrs: {value: e}})
                }))], 2), i("el-select", {
                    staticStyle: {width: "300px", "margin-left": "10px"},
                    attrs: {size: "small", filterable: "", placeholder: "请选择数据源"},
                    on: {change: e.datasourceChangeEvents},
                    model: {
                        value: e.choiceDatasourceId, callback: function (t) {
                            e.choiceDatasourceId = t
                        }, expression: "choiceDatasourceId"
                    }
                }, e._l(e.datasourceOptions, (function (e) {
                    return i("el-option", {key: e.id, attrs: {label: e.name, value: e.id}})
                })), 1)], 1)], 1)]), i("el-card", [e.executeError ? i("div", {staticStyle: {color: "#f00"}}, [e._v(e._s(e.executeError))]) : e.executeResultList.length <= 0 ? i("div", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.sqlExecuting,
                        expression: "sqlExecuting"
                    }]
                }, [e._v("暂无数据")]) : i("div", [i("el-tabs", {attrs: {value: e.executeShowTable}}, [i("el-tab-pane", {
                    attrs: {
                        label: "信息",
                        name: "table0"
                    }
                }, [i("pre", [e._v(e._s(e.executeResultInfo))])]), e._l(e.executeResultList, (function (t) {
                    return t.index ? i("el-tab-pane", {
                        attrs: {
                            label: "结果" + t.index,
                            name: "table" + t.index
                        }
                    }, [t.errMsg ? i("div", {staticStyle: {color: "#f00"}}, [e._v(e._s(t.errMsg))]) : i("el-table", {
                        staticClass: "execute-result-table",
                        staticStyle: {width: "100%", "margin-bottom": "5px"},
                        attrs: {data: t.dataList, stripe: "", border: "", "max-height": "600"}
                    }, [t.dataCols.length > 0 ? i("el-table-column", {
                        attrs: {width: "60px"},
                        scopedSlots: e._u([{
                            key: "default", fn: function (t) {
                                return [e._v(e._s(t.row._index))]
                            }
                        }], null, !0)
                    }) : e._e(), e._l(t.dataCols, (function (t) {
                        return i("el-table-column", {
                            attrs: {prop: t.prop, label: t.prop, width: t.width},
                            scopedSlots: e._u([{
                                key: "default", fn: function (e) {
                                    return [i("textarea", {
                                        staticClass: "el-textarea__inner",
                                        attrs: {readonly: "", rows: "1"},
                                        domProps: {value: e.row[t.prop]}
                                    })]
                                }
                            }], null, !0)
                        })
                    }))], 2)], 1) : e._e()
                }))], 2)], 1)])], 1), i("el-drawer", {
                    staticClass: "data-executor-vue-out",
                    attrs: {title: "收藏及历史", visible: e.historyDrawerVisible, size: "50%"},
                    on: {
                        "update:visible": function (t) {
                            e.historyDrawerVisible = t
                        }
                    }
                }, [i("div", {staticStyle: {padding: "10px"}}, [i("el-tabs", {attrs: {value: "favorite"}}, [i("el-tab-pane", {
                    attrs: {
                        label: "我的收藏",
                        name: "favorite"
                    }
                }, [i("el-table", {
                    directives: [{name: "infinite-scroll", rawName: "v-infinite-scroll"}],
                    staticStyle: {width: "100%", "margin-bottom": "5px"},
                    attrs: {data: e.myFavoriteList, stripe: "", border: ""}
                }, [i("el-table-column", {
                    attrs: {prop: "content", label: "SQL"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [i("pre", {staticStyle: {margin: "0"}}, [e._v(e._s(t.row.content))])]
                        }
                    }])
                }), i("el-table-column", {
                    attrs: {label: "操作", width: "160px"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [i("el-button", {
                                attrs: {size: "mini", type: "primary"}, on: {
                                    click: function (i) {
                                        return e.inputFavoriteSql(t.row.content)
                                    }
                                }
                            }, [e._v("输入")]), i("el-button", {
                                staticStyle: {"margin-left": "10px"},
                                attrs: {size: "mini", type: "danger"},
                                on: {
                                    click: function (i) {
                                        return e.delFavorite(t.row)
                                    }
                                }
                            }, [e._v("删除")])]
                        }
                    }])
                })], 1)], 1), i("el-tab-pane", {
                    attrs: {
                        label: "历史记录",
                        name: "history"
                    }
                }, [i("el-table", {
                    staticStyle: {width: "100%", "margin-bottom": "5px"},
                    attrs: {data: e.myHistoryListList, stripe: "", border: ""}
                }, [i("el-table-column", {
                    attrs: {prop: "content", label: "SQL"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [i("pre", {staticStyle: {margin: "0"}}, [e._v(e._s(t.row.content))])]
                        }
                    }])
                }), i("el-table-column", {
                    attrs: {label: "操作", width: "160px"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [i("el-button", {
                                attrs: {size: "mini", type: "primary"}, on: {
                                    click: function (i) {
                                        return e.inputFavoriteSql(t.row.content)
                                    }
                                }
                            }, [e._v("输入")]), i("el-button", {
                                staticStyle: {"margin-left": "10px"},
                                attrs: {size: "mini", type: "success"},
                                on: {
                                    click: function (i) {
                                        return e.addFavorite(t.row.content)
                                    }
                                }
                            }, [e._v("收藏")])]
                        }
                    }])
                })], 1)], 1)], 1)], 1)]), i("span", {
                    staticStyle: {
                        visibility: "hidden",
                        "white-space": "nowrap",
                        position: "fixed"
                    }, attrs: {id: "widthCalculate"}
                })], 1)
            }, ke = [], Le = (i("0d03"), i("8a79"), i("3271"), i("de92"), i("9cd2"), i("a90e"), i("3ab1"), i("db05")),
            Ae = i.n(Le), Ee = {
                data: function () {
                    return {
                        datasourceList: [],
                        choiceDatasourceId: "",
                        datasourceOptions: [],
                        datasourceGroupList: [],
                        choiceDatasourceGroup: "",
                        databaseList: [],
                        choiceDatabase: "",
                        editorDbInfo: [],
                        editorDbTableInfo: {},
                        editorColumnInfo: {},
                        sqlExecuting: !1,
                        executeResultList: [],
                        executeResultInfo: "",
                        executeShowTable: "table1",
                        sqlExecutorEditor: {},
                        nowExecutorId: 1,
                        executeError: "",
                        historyDrawerVisible: !1,
                        myFavoriteList: [],
                        myHistoryListList: []
                    }
                }, mounted: function () {
                    this.loadDatasourceList(), this.addEditorCompleter(), this.sqlExecutorEditor = this.initAceEditor("sqlExecutorEditor", 15), this.sqlExecutorEditor.setFontSize(16);
                    var e = this;
                    this.sqlExecutorEditor.commands.addCommand({
                        name: "execute-sql",
                        bindKey: {win: "Ctrl-R|Ctrl-Shift-R|Ctrl-Enter", mac: "Command-R|Command-Shift-R|Command-Enter"},
                        exec: function (t) {
                            e.doExecutorSql()
                        }
                    })
                }, methods: {
                    initAceEditor: function (e, t) {
                        return ace.edit(e, {
                            theme: "ace/theme/monokai",
                            mode: "ace/mode/sql",
                            wrap: !0,
                            autoScrollEditorIntoView: !0,
                            enableBasicAutocompletion: !0,
                            enableSnippets: !0,
                            enableLiveAutocompletion: !0,
                            minLines: t,
                            maxLines: 40
                        })
                    }, cancelExecutorSql: function () {
                        var e = this;
                        w.executeSqlCancel({executeId: this.nowExecutorId}).then((function () {
                            e.$message.success("取消成功")
                        }))
                    }, loadHistoryAndFavoriteList: function () {
                        this.historyDrawerVisible = !0, this.loadHistoryList(), this.loadFavoriteList()
                    }, loadFavoriteList: function () {
                        var e = this;
                        w.favoriteList({sourceId: this.choiceDatasourceId}).then((function (t) {
                            e.myFavoriteList = t.data || []
                        }))
                    }, loadHistoryList: function () {
                        var e = this;
                        w.historyList({sourceId: this.choiceDatasourceId}).then((function (t) {
                            e.myHistoryListList = t.data || []
                        }))
                    }, addFavorite: function (e) {
                        var t = this;
                        e || (e = this.sqlExecutorEditor.getSelectedText(), e || (e = this.sqlExecutorEditor.getValue()));
                        var i = {name: "我的收藏", content: e, datasourceId: this.choiceDatasourceId};
                        w.updateFavorite(i).then((function () {
                            t.$message.success("收藏成功"), t.loadFavoriteList()
                        }))
                    }, delFavorite: function (e) {
                        var t = this;
                        w.updateFavorite({id: e.id, yn: 0}).then((function () {
                            t.$message.success("删除成功"), t.loadFavoriteList()
                        }))
                    }, inputFavoriteSql: function (e) {
                        this.sqlExecutorEditor.setValue(e, 1), this.historyDrawerVisible = !1
                    }, formatterSql: function () {
                        var e = this.sqlExecutorEditor.getSelectedText();
                        if (e) {
                            var t = this.sqlExecutorEditor.getSelectionRange();
                            this.sqlExecutorEditor.remove(t)
                        } else e = this.sqlExecutorEditor.getValue(), this.sqlExecutorEditor.setValue("", 1);
                        e && (e = Ae.a.format(e), this.sqlExecutorEditor.insert(e))
                    }, doExecutorSql: function () {
                        var e = this;
                        if (this.choiceDatasourceId) {
                            this.executeError = "", this.executeUseTime = "", this.executeResultList = [], this.nowExecutorId = (new Date).getTime() + Math.ceil(1e3 * Math.random());
                            var t = this.sqlExecutorEditor.getSelectedText();
                            t || (t = this.sqlExecutorEditor.getValue()), this.sqlExecuting = !0, w.queryExecuteSql({
                                sourceId: this.choiceDatasourceId,
                                executeId: this.nowExecutorId,
                                sql: t,
                                params: ""
                            }).then((function (t) {
                                if (e.sqlExecuting = !1, 200 == t.errCode) {
                                    for (var i = t.data || [], n = [], s = "", o = 1, r = 0; r < i.length; r++) {
                                        var a = JSON.parse(i[r]);
                                        s += e.getExecuteInfoStr(a);
                                        var l = e.dealExecuteResult(a);
                                        l.updateCount < 0 && (l.index = o, o++), n.push(l)
                                    }
                                    e.executeShowTable = 1 === o ? "table0" : "table1", e.executeResultInfo = s, e.executeResultList = n
                                } else e.executeError = t.errMsg
                            }))
                        } else this.$message.error("请先选择数据源")
                    }, loadDatasourceList: function () {
                        var e = this;
                        w.datasourceList({}).then((function (t) {
                            e.datasourceList = t.data || [], e.datasourceOptions = e.datasourceList;
                            var i = [];
                            e.datasourceList.filter((function (e) {
                                return !!e.groupName
                            })).forEach((function (e) {
                                return i.push(e.groupName || "")
                            })), e.datasourceGroupList = Array.from(new Set(i)), e.datasourceList.length > 0 && (e.choiceDatasourceId = e.datasourceList[0].id, e.loadEditorData())
                        }))
                    }, loadEditorData: function () {
                        var e = this;
                        w.getEditorData({sourceId: this.choiceDatasourceId}).then((function (t) {
                            var i = t.data || {};
                            e.editorDbInfo = i.db || [], e.editorDbTableInfo = i.table || {}, e.editorColumnInfo = i.column || {}
                        }))
                    }, sourceGroupChangeEvents: function () {
                        for (var e = [], t = 0; t < this.datasourceList.length; t++) {
                            var i = this.datasourceList[t];
                            this.choiceDatasourceGroup && this.choiceDatasourceGroup != i.groupName || e.push(i)
                        }
                        this.datasourceOptions = e
                    }, datasourceChangeEvents: function () {
                        this.loadEditorData()
                    }, databaseChangeEvents: function () {
                    }, getExecuteInfoStr: function (e) {
                        var t = e.sql;
                        return t += "\n> 状态：" + (e.errMsg ? "ERROR" : "OK"), e.updateCount >= 0 && (t += "\n> 影响行数：" + e.updateCount), t += "\n> 耗时：" + (e.useTime || 0) / 1e3 + "s", t += "\n\n", t
                    }, dealExecuteResult: function (e) {
                        var t = e.result || [], i = [];
                        if (t.length > 0) {
                            var n = t[0];
                            for (var s in n) {
                                document.getElementById("widthCalculate").innerText = s;
                                var o = document.getElementById("widthCalculate").offsetWidth;
                                document.getElementById("widthCalculate").innerText = n[s];
                                var r = document.getElementById("widthCalculate").offsetWidth, a = o > r ? o : r;
                                a = a < 50 ? 50 : a, a = a > 200 ? 200 : a, i.push({prop: s, width: a + 25})
                            }
                            for (var l = 0; l < t.length; l++) t[l]._index = l + 1
                        }
                        var c = {};
                        return c.dataList = t, c.dataCols = i, c.useTime = e.useTime || 0, c.errMsg = e.errMsg || "", c.updateCount = e.updateCount, c
                    }, addEditorCompleter: function () {
                        var e = this, t = ace.require("ace/ext/language_tools");
                        t.addCompleter({
                            needDestory: !0, getCompletions: function (t, i, n, s, o) {
                                var r = !1, a = [], l = i.getLine(n.row).substring(0, n.column - 1);
                                if (l.endsWith("from ") || l.endsWith("join ")) {
                                    for (var c = 0; c < e.editorDbInfo.length; c++) a.push({
                                        caption: e.editorDbInfo[c].dbName,
                                        snippet: e.editorDbInfo[c].dbName,
                                        meta: "database",
                                        type: "snippet",
                                        score: 1e3
                                    });
                                    for (var h in e.editorDbTableInfo) {
                                        var u = e.editorDbTableInfo[h];
                                        for (c = 0; c < u.length; c++) {
                                            var d = u[c].tableComment ? u[c].tableName + "-" + u[c].tableComment : u[c].tableName;
                                            a.push({
                                                caption: d,
                                                snippet: u[c].tableName,
                                                meta: "table",
                                                type: "snippet",
                                                score: 1e3
                                            })
                                        }
                                    }
                                    o(null, a)
                                } else if (l.endsWith(".")) {
                                    for (c = 0; c < e.editorDbInfo.length; c++) if (l.endsWith(e.editorDbInfo[c].dbName + ".")) {
                                        u = e.editorDbTableInfo[e.editorDbInfo[c].dbName];
                                        if (u) {
                                            for (var g = 0; g < u.length; g++) {
                                                d = u[g].tableComment ? u[g].tableName + "-" + u[g].tableComment : u[g].tableName;
                                                a.push({
                                                    caption: d,
                                                    snippet: u[g].tableName,
                                                    meta: "table",
                                                    type: "snippet",
                                                    score: 1e3
                                                })
                                            }
                                            r = !0
                                        }
                                    }
                                    if (!r) for (var h in e.editorColumnInfo) if (l.endsWith(h + ".")) {
                                        var f = e.editorColumnInfo[h];
                                        if (f) {
                                            for (c = 0; c < f.length; c++) {
                                                d = f[c].description ? f[c].name + "-" + f[c].description : f[c].name;
                                                a.push({
                                                    caption: d,
                                                    snippet: f[c].name,
                                                    meta: "column",
                                                    type: "snippet",
                                                    score: 1e3
                                                })
                                            }
                                            r = !0
                                        }
                                    }
                                    o(null, a)
                                } else if (l.endsWith("select ") || l.endsWith("where ") || l.endsWith("and ")) {
                                    var p = "";
                                    for (c = n.row; c >= 0; c--) {
                                        var m = i.getLine(c);
                                        if (p = m + " " + p, m.indexOf(";") >= 0) break
                                    }
                                    for (c = n.row + 1; c < i.getLength(); c++) {
                                        m = i.getLine(c);
                                        if (p = p + " " + m, m.indexOf(";") >= 0) break
                                    }
                                    for (var h in e.editorDbTableInfo) for (u = e.editorDbTableInfo[h], c = 0; c < u.length; c++) if (!(p.indexOf(u[c].tableName) < 0)) {
                                        f = e.editorColumnInfo[u[c].tableName];
                                        if (f) {
                                            for (g = 0; g < f.length; g++) {
                                                d = f[g].description ? f[g].name + "-" + f[g].description : f[g].name;
                                                a.push({
                                                    caption: d,
                                                    snippet: f[g].name,
                                                    meta: "column",
                                                    type: "snippet",
                                                    score: 1e3
                                                })
                                            }
                                            r = !0
                                        }
                                    }
                                    o(null, a)
                                }
                            }
                        })
                    }
                }
            }, _e = Ee, Re = (i("7002"), Object($["a"])(_e, Ce, ke, !1, null, null, null)), Te = Re.exports,
            Me = function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", {staticClass: "data-transfer-vue"}, [i("div", {
                    staticStyle: {
                        padding: "0 10px",
                        height: "100%",
                        "box-sizing": "border-box"
                    }
                }, [i("el-card", [i("div", {
                    staticClass: "clearfix",
                    attrs: {slot: "header"},
                    slot: "header"
                }, [i("span", [e._v("数据互导工具")]), i("a", {
                    attrs: {
                        target: "_blank",
                        title: "点击查看如何使用",
                        href: "http://doc.zyplayer.com/zyplayer-doc-manage/doc-wiki#/page/share/view?pageId=128&space=23f3f59a60824d21af9f7c3bbc9bc3cb"
                    }
                }, [i("i", {
                    staticClass: "el-icon-info",
                    staticStyle: {color: "#999"}
                })])]), i("div", {
                    staticStyle: {
                        "margin-bottom": "10px",
                        "text-align": "right"
                    }
                }, [i("el-button", {
                    attrs: {type: "success", icon: "el-icon-plus"},
                    on: {click: e.createNewTask}
                }, [e._v("新建")]), i("el-button", {
                    attrs: {
                        type: "primary",
                        loading: e.loadDataListLoading,
                        icon: "el-icon-refresh"
                    }, on: {click: e.loadGetTaskList}
                }, [e._v("查询")])], 1), i("el-table", {
                    staticStyle: {width: "100%", "margin-bottom": "5px"},
                    attrs: {data: e.taskList, stripe: "", border: ""}
                }, [i("el-table-column", {
                    attrs: {
                        prop: "id",
                        label: "ID",
                        width: "55"
                    }
                }), i("el-table-column", {
                    attrs: {
                        prop: "name",
                        label: "任务名称"
                    }
                }), i("el-table-column", {
                    attrs: {label: "条数查询"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(e._s(1 == t.row.needCount ? "是" : "否"))]
                        }
                    }])
                }), i("el-table-column", {
                    attrs: {prop: "lastExecuteStatus", label: "最后执行状态"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [0 == t.row.lastExecuteStatus ? i("el-tag", [e._v("未执行")]) : 1 == t.row.lastExecuteStatus ? i("el-tag", {attrs: {type: "info"}}, [e._v("执行中")]) : 2 == t.row.lastExecuteStatus ? i("el-tag", {attrs: {type: "success"}}, [e._v("执行成功")]) : 3 == t.row.lastExecuteStatus ? i("el-tag", {attrs: {type: "danger"}}, [e._v("执行失败")]) : 4 == t.row.lastExecuteStatus ? i("el-tag", {attrs: {type: "warning"}}, [e._v("取消执行")]) : e._e()]
                        }
                    }])
                }), i("el-table-column", {
                    attrs: {
                        prop: "lastExecuteTime",
                        label: "最后执行时间"
                    }
                }), i("el-table-column", {
                    attrs: {
                        prop: "createUserName",
                        label: "创建人"
                    }
                }), i("el-table-column", {
                    attrs: {
                        prop: "createTime",
                        label: "创建时间"
                    }
                }), i("el-table-column", {
                    attrs: {label: "操作", width: "290"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [i("el-button", {
                                attrs: {size: "mini", type: "primary"}, on: {
                                    click: function (i) {
                                        return e.viewTask(t.row.id)
                                    }
                                }
                            }, [e._v("查看")]), i("el-button", {
                                attrs: {size: "mini", type: "success"},
                                on: {
                                    click: function (i) {
                                        return e.editTask(t.row)
                                    }
                                }
                            }, [e._v("编辑")]), i("el-button", {
                                attrs: {size: "mini", type: "warning"},
                                on: {
                                    click: function (i) {
                                        return e.executeTask(t.row.id)
                                    }
                                }
                            }, [e._v("执行")]), i("el-button", {
                                attrs: {size: "mini", type: "danger"},
                                on: {
                                    click: function (i) {
                                        return e.deleteTask(t.row.id)
                                    }
                                }
                            }, [e._v("删除")])]
                        }
                    }])
                })], 1)], 1)], 1), i("el-dialog", {
                    attrs: {
                        visible: e.taskEditDialogVisible,
                        width: "900px",
                        "close-on-click-modal": !1
                    }, on: {
                        "update:visible": function (t) {
                            e.taskEditDialogVisible = t
                        }
                    }
                }, [e.taskEditInfo.id ? i("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [e._v("编辑任务")]) : i("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [e._v("新建任务")]), i("el-form", {attrs: {"label-width": "120px"}}, [i("el-form-item", {attrs: {label: "任务名称："}}, [i("el-input", {
                    attrs: {placeholder: "任务名称"},
                    model: {
                        value: e.taskEditInfo.name, callback: function (t) {
                            e.$set(e.taskEditInfo, "name", t)
                        }, expression: "taskEditInfo.name"
                    }
                })], 1), i("el-form-item", {attrs: {label: "查询数据源："}}, [i("el-select", {
                    staticStyle: {width: "100%"},
                    attrs: {filterable: "", placeholder: "请选择查询数据源"},
                    model: {
                        value: e.taskEditInfo.queryDatasourceId, callback: function (t) {
                            e.$set(e.taskEditInfo, "queryDatasourceId", t)
                        }, expression: "taskEditInfo.queryDatasourceId"
                    }
                }, e._l(e.datasourceOptions, (function (e) {
                    return i("el-option", {key: e.value, attrs: {label: e.label, value: e.value}})
                })), 1)], 1), i("el-form-item", {attrs: {label: "查询SQL："}}, [i("pre", {
                    staticStyle: {
                        width: "100%",
                        height: "100px",
                        margin: "0"
                    }, attrs: {id: "querySqlEditor"}
                })]), i("el-form-item", {attrs: {label: "总条数查询："}}, [i("el-radio", {
                    attrs: {label: 0},
                    model: {
                        value: e.taskEditInfo.needCount, callback: function (t) {
                            e.$set(e.taskEditInfo, "needCount", t)
                        }, expression: "taskEditInfo.needCount"
                    }
                }, [e._v("不查询")]), i("el-radio", {
                    attrs: {label: 1},
                    model: {
                        value: e.taskEditInfo.needCount, callback: function (t) {
                            e.$set(e.taskEditInfo, "needCount", t)
                        }, expression: "taskEditInfo.needCount"
                    }
                }, [e._v("自动查询")])], 1), i("el-form-item", {attrs: {label: "入库数据源："}}, [i("el-select", {
                    staticStyle: {width: "100%"},
                    attrs: {filterable: "", placeholder: "请选择写入数据源"},
                    model: {
                        value: e.taskEditInfo.storageDatasourceId, callback: function (t) {
                            e.$set(e.taskEditInfo, "storageDatasourceId", t)
                        }, expression: "taskEditInfo.storageDatasourceId"
                    }
                }, e._l(e.datasourceOptions, (function (e) {
                    return i("el-option", {key: e.value, attrs: {label: e.label, value: e.value}})
                })), 1)], 1), i("el-form-item", {attrs: {label: "入库SQL："}}, [i("pre", {
                    staticStyle: {
                        width: "100%",
                        height: "100px",
                        margin: "0"
                    }, attrs: {id: "storageSqlEditor"}
                }), i("el-button", {
                    staticStyle: {"margin-top": "10px"},
                    on: {click: e.autoFillStorageSql}
                }, [e._v("智能填充")])], 1)], 1), i("div", {staticStyle: {"text-align": "center"}}, [i("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.saveEditTask}
                }, [e._v("保存")]), i("el-button", {
                    attrs: {type: "warning"}, on: {
                        click: function (t) {
                            e.taskEditDialogVisible = !1
                        }
                    }
                }, [e._v("取消")])], 1)], 1), i("el-dialog", {
                    attrs: {visible: e.taskViewDialogVisible, width: "80%"},
                    on: {
                        "update:visible": function (t) {
                            e.taskViewDialogVisible = t
                        }
                    }
                }, [i("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [e._v("查看任务")]), i("el-form", {attrs: {"label-width": "120px"}}, [i("el-form-item", {attrs: {label: "任务名称："}}, [e._v(e._s(e.taskEditInfo.name))]), i("el-form-item", {attrs: {label: "最后执行状态："}}, [0 == e.taskEditInfo.lastExecuteStatus ? i("el-tag", [e._v("未执行")]) : 1 == e.taskEditInfo.lastExecuteStatus ? i("el-tag", {attrs: {type: "info"}}, [e._v("执行中")]) : 2 == e.taskEditInfo.lastExecuteStatus ? i("el-tag", {attrs: {type: "success"}}, [e._v("执行成功")]) : 3 == e.taskEditInfo.lastExecuteStatus ? i("el-tag", {attrs: {type: "danger"}}, [e._v("执行失败")]) : 4 == e.taskEditInfo.lastExecuteStatus ? i("el-tag", {attrs: {type: "warning"}}, [e._v("取消执行")]) : e._e()], 1), i("el-form-item", {attrs: {label: "最后执行时间："}}, [e._v(e._s(e.taskEditInfo.lastExecuteTime))]), i("el-form-item", {attrs: {label: "执行信息："}}, [i("pre", {
                    staticStyle: {
                        "word-wrap": "break-word",
                        "word-break": "break-all",
                        "white-space": "pre-wrap",
                        "line-height": "22px"
                    }
                }, [e._v(e._s(e.taskEditInfo.lastExecuteInfo))])]), 1 == e.taskEditInfo.lastExecuteStatus ? i("el-form-item", {attrs: {label: "操作："}}, [i("el-button", {
                    attrs: {
                        type: "success",
                        icon: "el-icon-refresh",
                        loading: e.viewTaskLoading
                    }, on: {
                        click: function (t) {
                            return e.viewTask(e.taskEditInfo.id)
                        }
                    }
                }, [e._v("刷新")]), i("el-button", {
                    attrs: {type: "danger"},
                    on: {click: e.cancelTask}
                }, [e._v("取消执行")])], 1) : e._e()], 1)], 1)], 1)
            }, Ie = [], De = {
                data: function () {
                    return {
                        viewTaskLoading: !1,
                        loadDataListLoading: !1,
                        datasourceOptions: [],
                        queryDatasourceId: "",
                        storageDatasourceId: "",
                        taskList: [],
                        datasourceMap: {},
                        taskViewDialogVisible: !1,
                        taskEditDialogVisible: !1,
                        taskEditInfo: {}
                    }
                }, mounted: function () {
                    p = this, this.loadDatasourceList()
                }, methods: {
                    editTask: function (e) {
                        this.taskEditInfo = JSON.parse(JSON.stringify(e)), this.taskEditDialogVisible = !0, setTimeout((function () {
                            p.querySqlEditor = p.initAceEditor("querySqlEditor", 10), p.storageSqlEditor = p.initAceEditor("storageSqlEditor", 10), p.querySqlEditor.setValue(p.taskEditInfo.querySql, 1), p.storageSqlEditor.setValue(p.taskEditInfo.storageSql, 1)
                        }), 200)
                    }, createNewTask: function () {
                        this.taskEditInfo = {
                            querySql: "",
                            storageSql: "",
                            name: "",
                            needCount: 1,
                            queryDatasourceId: "",
                            storageDatasourceId: ""
                        }, this.taskEditDialogVisible = !0, setTimeout((function () {
                            p.querySqlEditor = p.initAceEditor("querySqlEditor", 10), p.storageSqlEditor = p.initAceEditor("storageSqlEditor", 10), p.querySqlEditor.setValue("", 1), p.storageSqlEditor.setValue("", 1)
                        }), 200)
                    }, deleteTask: function (e) {
                        var t = this;
                        this.$confirm("确定要删除此任务吗？", "提示", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            type: "warning"
                        }).then((function () {
                            w.transferUpdate({id: e, delFlag: 1}).then((function () {
                                t.$message.success("删除成功"), t.loadGetTaskList()
                            }))
                        })).catch((function () {
                        }))
                    }, executeTask: function (e) {
                        var t = this;
                        this.$confirm("确定要执行一次此任务吗？", "提示", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            type: "warning"
                        }).then((function () {
                            w.transferStart({id: e}).then((function () {
                                t.$message.success("任务提交成功")
                            }))
                        })).catch((function () {
                        }))
                    }, saveEditTask: function () {
                        var e = this;
                        this.taskEditInfo.querySql = this.querySqlEditor.getValue(), this.taskEditInfo.storageSql = this.storageSqlEditor.getValue(), w.transferUpdate(this.taskEditInfo).then((function () {
                            e.$message.success("保存成功"), e.taskEditDialogVisible = !1, e.loadGetTaskList()
                        }))
                    }, viewTask: function (e) {
                        var t = this;
                        this.viewTaskLoading = !0, this.taskViewDialogVisible = !0, w.transferDetail({id: e}).then((function (e) {
                            t.taskEditInfo = e.data || {}, setTimeout((function () {
                                p.viewTaskLoading = !1
                            }), 300)
                        }))
                    }, cancelTask: function () {
                        var e = this;
                        this.$confirm("确定要取消执行此任务吗？", "提示", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            type: "warning"
                        }).then((function () {
                            w.transferCancel({id: e.taskEditInfo.id}).then((function () {
                                e.$message.success("取消成功"), e.viewTask(e.taskEditInfo.id)
                            }))
                        })).catch((function () {
                        }))
                    }, loadGetTaskList: function () {
                        var e = this;
                        this.loadDataListLoading = !0, w.transferList({}).then((function (t) {
                            e.taskList = t.data || [], setTimeout((function () {
                                e.loadDataListLoading = !1
                            }), 800)
                        }))
                    }, autoFillStorageSql: function () {
                        var e = this, t = this.querySqlEditor.getValue();
                        w.transferSqlColumns({sql: t}).then((function (t) {
                            var i = t.data || [];
                            if (i.length <= 0) e.$message.error("查询的字段不明确，不能自动填充"); else {
                                var n = "\n";
                                n += "insert into TableName (\n";
                                for (var s = 0; s < i.length; s++) n += "\t" + (0 === s ? "" : ",") + i[s] + "\n";
                                n += ") values (\n";
                                for (var o = 0; o < i.length; o++) n += "\t" + (0 === o ? "" : ",") + "#{" + i[o] + "}\n";
                                n += ")\n\n", e.storageSqlEditor.setValue(n, 1)
                            }
                        }))
                    }, loadDatasourceList: function () {
                        var e = this;
                        w.datasourceList({}).then((function (t) {
                            e.datasourceList = t.data || [];
                            for (var i = [], n = {}, s = 0; s < e.datasourceList.length; s++) n[e.datasourceList[s].id] = e.datasourceList[s].name, i.push({
                                label: e.datasourceList[s].name,
                                value: e.datasourceList[s].id
                            });
                            e.datasourceMap = n, e.datasourceOptions = i, e.loadGetTaskList()
                        }))
                    }, initAceEditor: function (e, t) {
                        return ace.edit(e, {
                            theme: "ace/theme/monokai",
                            mode: "ace/mode/sql",
                            wrap: !0,
                            autoScrollEditorIntoView: !0,
                            enableBasicAutocompletion: !0,
                            enableSnippets: !0,
                            enableLiveAutocompletion: !0,
                            minLines: t,
                            maxLines: 25
                        })
                    }
                }
            }, Fe = De, Oe = (i("9743"), Object($["a"])(Fe, Me, Ie, !1, null, null, null)), Pe = Oe.exports,
            Ne = function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", {staticClass: "data-executor-vue"}, [i("div", {
                    staticStyle: {
                        padding: "0 10px 10px",
                        height: "100%",
                        "box-sizing": "border-box"
                    }
                }, [i("el-card", {staticStyle: {"margin-bottom": "10px"}}, [i("pre", {
                    staticStyle: {
                        width: "100%",
                        height: "500px",
                        "margin-top": "0"
                    }, attrs: {id: "sqlExecutorEditor"}
                }), i("div", [e.sqlExecuting ? i("el-button", {
                    attrs: {
                        type: "primary",
                        plain: "",
                        size: "small",
                        icon: "el-icon-video-pause"
                    }, on: {click: e.cancelExecutorSql}
                }, [e._v("取消执行")]) : i("el-tooltip", {
                    attrs: {
                        effect: "dark",
                        content: "Ctrl+R、Ctrl+Enter",
                        placement: "top"
                    }
                }, [i("el-button", {
                    attrs: {type: "primary", plain: "", size: "small", icon: "el-icon-video-play"},
                    on: {click: e.doExecutorClick}
                }, [e._v("执行")])], 1), i("el-button", {
                    attrs: {icon: "el-icon-brush", size: "small"},
                    on: {click: e.formatterSql}
                }, [e._v("SQL美化")]), i("el-button", {
                    attrs: {icon: "el-icon-refresh-left", size: "small"},
                    on: {click: e.refreshData}
                }, [e._v("重置")])], 1)]), i("el-card", [e.executeError ? i("div", {staticStyle: {color: "#f00"}}, [e._v(e._s(e.executeError))]) : e.sqlExecuting ? i("div", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.sqlExecuting,
                        expression: "sqlExecuting"
                    }], staticStyle: {padding: "20px 0"}
                }, [e._v("数据加载中...")]) : e.executeResultList.length <= 0 ? i("div", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.sqlExecuting,
                        expression: "sqlExecuting"
                    }], staticStyle: {padding: "20px 0"}
                }, [e._v("暂无数据")]) : i("div", [i("el-tabs", {attrs: {value: e.executeShowTable}}, [i("el-tab-pane", {
                    attrs: {
                        label: "信息",
                        name: "table0"
                    }
                }, [i("pre", [e._v(e._s(e.executeResultInfo))])]), e._l(e.executeResultList, (function (t) {
                    return t.index ? i("el-tab-pane", {
                        attrs: {
                            label: "结果" + t.index,
                            name: "table" + t.index
                        }
                    }, [t.errMsg ? i("div", {staticStyle: {color: "#f00"}}, [e._v(e._s(t.errMsg))]) : i("el-table", {
                        staticClass: "execute-result-table",
                        staticStyle: {width: "100%", "margin-bottom": "5px"},
                        attrs: {
                            data: t.dataList,
                            stripe: "",
                            border: "",
                            "max-height": e.tableMaxHeight,
                            "default-sort": e.tableSort
                        },
                        on: {"sort-change": e.tableSortChange}
                    }, [t.dataCols.length > 0 ? i("el-table-column", {
                        attrs: {width: "60px"},
                        scopedSlots: e._u([{
                            key: "default", fn: function (t) {
                                return [e._v(e._s(t.row._index))]
                            }
                        }], null, !0)
                    }) : e._e(), e._l(t.dataCols, (function (t) {
                        return i("el-table-column", {
                            attrs: {sortable: "", prop: t.prop, label: t.prop, width: t.width},
                            scopedSlots: e._u([{
                                key: "default", fn: function (e) {
                                    return [i("textarea", {
                                        staticClass: "el-textarea__inner",
                                        attrs: {readonly: "", rows: "1"},
                                        domProps: {value: e.row[t.prop]}
                                    })]
                                }
                            }], null, !0)
                        })
                    }))], 2), i("el-pagination", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.needShowPage,
                            expression: "needShowPage"
                        }],
                        staticStyle: {"margin-top": "10px"},
                        attrs: {
                            "current-page": e.currentPage,
                            "page-sizes": [50, 100, 300, 500],
                            "page-size": e.pageSize,
                            layout: "total, sizes, prev, pager, next, jumper",
                            total: e.tableTotalCount
                        },
                        on: {"size-change": e.handlePageSizeChange, "current-change": e.handleCurrentChange}
                    })], 1) : e._e()
                }))], 2)], 1)])], 1), i("span", {
                    staticStyle: {
                        visibility: "hidden",
                        "white-space": "nowrap",
                        position: "fixed"
                    }, attrs: {id: "widthCalculate"}
                })])
            }, We = [], Be = {
                data: function () {
                    return {
                        sqlExecuting: !1,
                        executeResultList: [],
                        executeResultInfo: "",
                        executeShowTable: "table1",
                        sqlExecutorEditor: {},
                        nowExecutorId: 1,
                        executeError: "",
                        vueQueryParam: {},
                        pageSize: 50,
                        currentPage: 1,
                        tableTotalCount: 0,
                        tableSort: {},
                        tableMaxHeight: 600,
                        needShowPage: !0
                    }
                }, mounted: function () {
                    var e = this, t = this;
                    this.sqlExecutorEditor = this.initAceEditor("sqlExecutorEditor", 6), this.sqlExecutorEditor.setFontSize(16), this.sqlExecutorEditor.commands.addCommand({
                        name: "execute-sql",
                        bindKey: {win: "Ctrl-R|Ctrl-Shift-R|Ctrl-Enter", mac: "Command-R|Command-Shift-R|Command-Enter"},
                        exec: function (e) {
                            t.doExecutorClick()
                        }
                    }), setTimeout((function () {
                        e.doExecutorSql(), e.$emit("initLoadDataList", {
                            sourceId: e.vueQueryParam.sourceId,
                            host: e.vueQueryParam.host,
                            dbName: e.vueQueryParam.dbName
                        })
                    }), 500)
                }, activated: function () {
                    this.initQueryParam(this.$route)
                }, methods: {
                    initQueryParam: function (e) {
                        this.vueQueryParam = e.query;
                        var t = {key: this.$route.fullPath, val: "数据-" + this.vueQueryParam.tableName};
                        this.$store.commit("global/addTableName", t)
                    }, handleCurrentChange: function (e) {
                        this.currentPage = e, this.doExecutorSql()
                    }, handlePageSizeChange: function (e) {
                        this.pageSize = e, this.doExecutorSql()
                    }, tableSortChange: function (e) {
                        this.tableSort.prop === e.prop && this.tableSort.order === e.order || (this.tableSort = {
                            prop: e.prop,
                            order: e.order
                        }, this.doExecutorSql())
                    }, refreshData: function () {
                        this.tableSort = {}, this.currentPage = 1, this.doExecutorSql()
                    }, formatterSql: function () {
                        var e = this.sqlExecutorEditor.getSelectedText();
                        if (e) {
                            var t = this.sqlExecutorEditor.getSelectionRange();
                            this.sqlExecutorEditor.remove(t)
                        } else e = this.sqlExecutorEditor.getValue(), this.sqlExecutorEditor.setValue("", 1);
                        e && (e = Ae.a.format(e), this.sqlExecutorEditor.insert(e))
                    }, cancelExecutorSql: function () {
                        var e = this;
                        w.executeSqlCancel({executeId: this.nowExecutorId}).then((function () {
                            e.$message.success("取消成功")
                        }))
                    }, doExecutorClick: function () {
                        var e = this.sqlExecutorEditor.getSelectedText();
                        e || (e = this.sqlExecutorEditor.getValue()), e ? (this.needShowPage = !1, this.doExecutorSqlCommon(e)) : this.$message.error("查询SQL不能为空")
                    }, doExecutorSql: function () {
                        var e = this.getExecuteSql(), t = this.getExecuteCountSql();
                        this.sqlExecutorEditor.setValue(e, 1), this.needShowPage = !0, this.doExecutorSqlCommon(e, t)
                    }, doExecutorSqlCommon: function (e, t) {
                        var i = this;
                        if (this.vueQueryParam.sourceId) {
                            this.executeError = "", this.executeUseTime = "", this.executeResultList = [], this.tableMaxHeight = document.body.clientHeight - 230, this.nowExecutorId = (new Date).getTime() + Math.ceil(1e3 * Math.random()), this.sqlExecuting = !0;
                            var n = {
                                sourceId: this.vueQueryParam.sourceId,
                                executeId: this.nowExecutorId,
                                sql: t,
                                params: ""
                            };
                            t && 1 == this.currentPage && w.queryExecuteSql(n).then((function (e) {
                                if (200 == e.errCode && e.data && !(e.data.length <= 0)) {
                                    var t = JSON.parse(e.data[0]);
                                    !t.result || t.result.length <= 0 || (i.tableTotalCount = t.result[0].counts || 0)
                                }
                            })), n.sql = e, w.queryExecuteSql(n).then((function (e) {
                                if (200 != e.errCode) return i.executeError = e.errMsg, void (i.sqlExecuting = !1);
                                for (var t = e.data || [], n = [], s = "", o = 1, r = 0; r < t.length; r++) {
                                    var a = JSON.parse(t[r]);
                                    s += i.getExecuteInfoStr(a);
                                    var l = i.dealExecuteResult(a);
                                    l.updateCount < 0 && (l.index = o, o++), n.push(l)
                                }
                                i.executeShowTable = 1 === o ? "table0" : "table1", i.executeResultInfo = s, i.executeResultList = n, i.sqlExecuting = !1
                            }))
                        } else this.$message.error("请先选择数据源")
                    }, getExecuteSql: function () {
                        if ("mysql" == this.vueQueryParam.dbType) {
                            var e = " ";
                            return this.tableSort.prop && this.tableSort.order && (e = " order by " + this.tableSort.prop + " " + ("ascending" === this.tableSort.order ? "asc" : "desc")), "select * from " + this.vueQueryParam.dbName + "." + this.vueQueryParam.tableName + e + " limit " + this.pageSize + " offset " + (this.currentPage - 1) * this.pageSize
                        }
                        return this.$message.error("暂未支持的数据库类型表数据预览"), ""
                    }, getExecuteCountSql: function () {
                        return "mysql" == this.vueQueryParam.dbType ? "select count(1) as counts from " + this.vueQueryParam.dbName + "." + this.vueQueryParam.tableName : ""
                    }, getExecuteInfoStr: function (e) {
                        var t = e.sql;
                        return t += "\n> 状态：" + (e.errMsg ? "ERROR" : "OK"), e.updateCount >= 0 && (t += "\n> 影响行数：" + e.updateCount), t += "\n> 耗时：" + (e.useTime || 0) / 1e3 + "s", t += "\n\n", t
                    }, dealExecuteResult: function (e) {
                        var t = e.result || [], i = [];
                        if (t.length > 0) {
                            var n = t[0];
                            for (var s in n) {
                                document.getElementById("widthCalculate").innerText = s;
                                var o = document.getElementById("widthCalculate").offsetWidth;
                                document.getElementById("widthCalculate").innerText = n[s];
                                var r = document.getElementById("widthCalculate").offsetWidth, a = o > r ? o : r;
                                a = a < 50 ? 50 : a, a = a > 200 ? 200 : a, i.push({prop: s, width: a + 50})
                            }
                            for (var l = 0; l < t.length; l++) t[l]._index = l + 1
                        }
                        var c = {};
                        return c.dataList = t, c.dataCols = i, c.useTime = e.useTime || 0, c.errMsg = e.errMsg || "", c.updateCount = e.updateCount, c
                    }, initAceEditor: function (e, t) {
                        return ace.edit(e, {
                            theme: "ace/theme/monokai",
                            mode: "ace/mode/sql",
                            wrap: !0,
                            autoScrollEditorIntoView: !0,
                            enableBasicAutocompletion: !0,
                            enableSnippets: !0,
                            enableLiveAutocompletion: !0,
                            minLines: t,
                            maxLines: 40
                        })
                    }
                }
            }, He = Be, ze = (i("f52e"), Object($["a"])(He, Ne, We, !1, null, null, null)), Ve = ze.exports,
            Ue = function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", [e._v("没有权限访问该模块")])
            }, Ke = [], qe = {
                data: function () {
                    return {}
                }, mounted: function () {
                }, methods: {}
            }, je = qe, Ge = Object($["a"])(je, Ue, Ke, !1, null, null, null), Qe = Ge.exports,
            Ye = [{path: "/home", component: R, name: "主页", meta: {requireAuth: !0}}, {
                path: "/",
                redirect: "/home"
            }, {
                path: "/",
                name: "Tab标签页",
                component: Z,
                children: [{path: "/table/info", name: "表信息", component: oe}, {
                    path: "/table/database",
                    name: "库信息",
                    component: ue
                }, {path: "/data/datasourceManage", name: "数据源管理", component: ve}, {
                    path: "/data/export",
                    name: "数据库导出",
                    component: xe
                }, {path: "/data/executor", name: "SQL执行器", component: Te}, {
                    path: "/data/transferData",
                    name: "数据互导工具",
                    component: Pe
                }, {path: "/data/dataPreview", name: "表数据预览", component: Ve}, {
                    path: "/user/myInfo",
                    name: "我的信息",
                    component: z
                }]
            }, {
                path: "/user",
                name: "用户管理",
                component: j,
                children: [{path: "login", name: "系统登录", component: O, meta: {fullscreen: !0}}]
            }, {path: "/common", name: "", component: j, children: [{path: "noAuth", name: "没有权限", component: Qe}]}],
            Xe = Ye, Je = i("2f62"), Ze = {
                namespaced: !0,
                state: {pageTabNameMap: {}, fullscreen: !1},
                getters: {
                    getPageTabNameMap: function (e) {
                        return e.pageTabNameMap
                    }
                },
                mutations: {
                    addTableName: function (e, t) {
                        var i = Object.assign({}, e.pageTabNameMap);
                        i[t.key] = t.val, e.pageTabNameMap = i
                    }, setFullscreen: function (e, t) {
                        e.fullscreen = t
                    }
                }
            };
        n["default"].use(Je["a"]);
        var et = new Je["a"].Store({modules: {global: Ze}}), tt = i("a7fe"), it = i.n(tt), nt = i("2315"), st = i.n(nt),
            ot = (i("f1e9"), i("4eb5")), rt = i.n(ot);
        n["default"].use(rt.a), n["default"].use(o.a), n["default"].use(C["a"]), n["default"].use(it.a, u.a), n["default"].use(st.a), n["default"].prototype.$store = et;
        var at = new C["a"]({routes: Xe});
        at.beforeEach((function (e, t, i) {
            e.meta.title && (document.title = e.meta.title), et.commit("global/setFullscreen", !!e.meta.fullscreen), i()
        }));
        var lt = new n["default"]({
            el: "#app", router: at, render: function (e) {
                return e(x)
            }
        }), ct = t["default"] = lt
    }, 7002: function (e, t, i) {
        "use strict";
        var n = i("a6e7"), s = i.n(n);
        s.a
    }, "85ec": function (e, t, i) {
    }, 9100: function (e, t, i) {
        "use strict";
        var n = i("44c2"), s = i.n(n);
        s.a
    }, 9231: function (e, t, i) {
        "use strict";
        var n = i("40c0"), s = i.n(n);
        s.a
    }, 9743: function (e, t, i) {
        "use strict";
        var n = i("21eb"), s = i.n(n);
        s.a
    }, "9cd2": function (e, t, i) {
        "use strict";
        (function (e) {
            var t = i("bf2d");
            deAceFine("ace/mode/sql_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], (function (e, t, i) {
                var n = e("../lib/oop"), s = e("./text_highlight_rules").TextHighlightRules, o = function () {
                    var e = window.tableMetaInfo || "",
                        t = "select|insert|update|delete|from|where|and|or|group|by|order|limit|offset|having|as|case|when|then|else|end|type|left|right|join|on|outer|desc|asc|union|create|table|primary|key|if|foreign|not|references|default|null|inner|cross|natural|database|drop|grant",
                        i = "true|false",
                        n = "avg|count|first|last|max|min|sum|ucase|lcase|mid|len|round|rank|now|format|coalesce|ifnull|isnull|nvl",
                        s = "int|numeric|decimal|date|varchar|char|bigint|float|double|bit|binary|text|set|timestamp|money|real|number|integer",
                        o = this.createKeywordMapper({
                            "support.function": n,
                            keyword: t,
                            "constant.language": i,
                            "storage.type": s,
                            table: e
                        }, "identifier", !0);
                    this.$rules = {
                        start: [{token: "comment", regex: "--.*$"}, {
                            token: "comment",
                            start: "/\\*",
                            end: "\\*/"
                        }, {token: "string", regex: '".*?"'}, {token: "string", regex: "'.*?'"}, {
                            token: "string",
                            regex: "`.*?`"
                        }, {
                            token: "constant.numeric",
                            regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
                        }, {token: o, regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}, {
                            token: "keyword.operator",
                            regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
                        }, {token: "paren.lparen", regex: "[\\(]"}, {
                            token: "paren.rparen",
                            regex: "[\\)]"
                        }, {token: "text", regex: "\\s+"}]
                    }, this.normalizeRules()
                };
                n.inherits(o, s), t.SqlHighlightRules = o
            })), deAceFine("ace/mode/sql", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/sql_highlight_rules"], (function (e, t, i) {
                var n = e("../lib/oop"), s = e("./text").Mode, o = e("./sql_highlight_rules").SqlHighlightRules,
                    r = function () {
                        this.HighlightRules = o, this.$behaviour = this.$defaultBehaviour
                    };
                n.inherits(r, s), function () {
                    this.lineCommentStart = "--", this.$id = "ace/mode/sql"
                }.call(r.prototype), t.Mode = r
            })), function () {
                window.require(["ace/mode/sql"], (function (i) {
                    "object" == Object(t["a"])(e) && "object" == ("undefined" === typeof exports ? "undefined" : Object(t["a"])(exports)) && e && (e.exports = i)
                }))
            }()
        }).call(this, i("dd40")(e))
    }, a6e7: function (e, t, i) {
    }, a90e: function (e, t, i) {
        "use strict";
        (function (e) {
            i("99af"), i("4de4"), i("4160"), i("c975"), i("a15b"), i("baa5"), i("d81d"), i("26e9"), i("fb6a"), i("45fc"), i("4e82"), i("a434"), i("b0c0"), i("b64b"), i("e25e"), i("4d63"), i("ac1f"), i("25f0"), i("466d"), i("5319"), i("1276"), i("18a5"), i("159b");
            var t = i("bf2d");
            ace.define("ace/snippets", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter", "ace/lib/lang", "ace/range", "ace/anchor", "ace/keyboard/hash_handler", "ace/tokenizer", "ace/lib/dom", "ace/editor"], (function (e, i, n) {
                var s = e("./lib/oop"), o = e("./lib/event_emitter").EventEmitter, r = e("./lib/lang"),
                    a = e("./range").Range, l = e("./anchor").Anchor, c = e("./keyboard/hash_handler").HashHandler,
                    h = e("./tokenizer").Tokenizer, u = a.comparePoints, d = function () {
                        this.snippetMap = {}, this.snippetNameMap = {}
                    };
                (function () {
                    s.implement(this, o), this.getTokenizer = function () {
                        function e(e, t, i) {
                            return e = e.substr(1), /^\d+$/.test(e) && !i.inFormatString ? [{tabstopId: parseInt(e, 10)}] : [{text: e}]
                        }

                        function t(e) {
                            return "(?:[^\\\\" + e + "]|\\\\.)"
                        }

                        return d.$tokenizer = new h({
                            start: [{
                                regex: /:/, onMatch: function (e, t, i) {
                                    return i.length && i[0].expectIf ? (i[0].expectIf = !1, i[0].elseBranch = i[0], [i[0]]) : ":"
                                }
                            }, {
                                regex: /\\./, onMatch: function (e, t, i) {
                                    var n = e[1];
                                    return "}" == n && i.length ? e = n : -1 != "`$\\".indexOf(n) ? e = n : i.inFormatString && ("n" == n ? e = "\n" : "t" == n ? e = "\n" : -1 != "ulULE".indexOf(n) && (e = {
                                        changeCase: n,
                                        local: n > "a"
                                    })), [e]
                                }
                            }, {
                                regex: /}/, onMatch: function (e, t, i) {
                                    return [i.length ? i.shift() : e]
                                }
                            }, {regex: /\$(?:\d+|\w+)/, onMatch: e}, {
                                regex: /\$\{[\dA-Z_a-z]+/,
                                onMatch: function (t, i, n) {
                                    var s = e(t.substr(1), i, n);
                                    return n.unshift(s[0]), s
                                },
                                next: "snippetVar"
                            }, {regex: /\n/, token: "newline", merge: !1}],
                            snippetVar: [{
                                regex: "\\|" + t("\\|") + "*\\|", onMatch: function (e, t, i) {
                                    i[0].choices = e.slice(1, -1).split(",")
                                }, next: "start"
                            }, {
                                regex: "/(" + t("/") + "+)/(?:(" + t("/") + "*)/)(\\w*):?",
                                onMatch: function (e, t, i) {
                                    var n = i[0];
                                    return n.fmtString = e, e = this.splitRegex.exec(e), n.guard = e[1], n.fmt = e[2], n.flag = e[3], ""
                                },
                                next: "start"
                            }, {
                                regex: "`" + t("`") + "*`", onMatch: function (e, t, i) {
                                    return i[0].code = e.splice(1, -1), ""
                                }, next: "start"
                            }, {
                                regex: "\\?", onMatch: function (e, t, i) {
                                    i[0] && (i[0].expectIf = !0)
                                }, next: "start"
                            }, {regex: "([^:}\\\\]|\\\\.)*:?", token: "", next: "start"}],
                            formatString: [{regex: "/(" + t("/") + "+)/", token: "regex"}, {
                                regex: "",
                                onMatch: function (e, t, i) {
                                    i.inFormatString = !0
                                },
                                next: "start"
                            }]
                        }), d.prototype.getTokenizer = function () {
                            return d.$tokenizer
                        }, d.$tokenizer
                    }, this.tokenizeTmSnippet = function (e, t) {
                        return this.getTokenizer().getLineTokens(e, t).tokens.map((function (e) {
                            return e.value || e
                        }))
                    }, this.$getDefaultValue = function (e, t) {
                        if (/^[A-Z]\d+$/.test(t)) {
                            var i = t.substr(1);
                            return (this.variables[t[0] + "__"] || {})[i]
                        }
                        if (/^\d+$/.test(t)) return (this.variables.__ || {})[t];
                        if (t = t.replace(/^TM_/, ""), e) {
                            var n = e.session;
                            switch (t) {
                                case"CURRENT_WORD":
                                    var s = n.getWordRange();
                                case"SELECTION":
                                case"SELECTED_TEXT":
                                    return n.getTextRange(s);
                                case"CURRENT_LINE":
                                    return n.getLine(e.getCursorPosition().row);
                                case"PREV_LINE":
                                    return n.getLine(e.getCursorPosition().row - 1);
                                case"LINE_INDEX":
                                    return e.getCursorPosition().column;
                                case"LINE_NUMBER":
                                    return e.getCursorPosition().row + 1;
                                case"SOFT_TABS":
                                    return n.getUseSoftTabs() ? "YES" : "NO";
                                case"TAB_SIZE":
                                    return n.getTabSize();
                                case"FILENAME":
                                case"FILEPATH":
                                    return "";
                                case"FULLNAME":
                                    return "Ace"
                            }
                        }
                    }, this.variables = {}, this.getVariableValue = function (e, t) {
                        return this.variables.hasOwnProperty(t) ? this.variables[t](e, t) || "" : this.$getDefaultValue(e, t) || ""
                    }, this.tmStrFormat = function (e, i, n) {
                        var s = i.flag || "", o = i.guard;
                        o = new RegExp(o, s.replace(/[^gi]/, ""));
                        var r = this.tokenizeTmSnippet(i.fmt, "formatString"), a = this, l = e.replace(o, (function () {
                            a.variables.__ = arguments;
                            for (var e = a.resolveVariables(r, n), i = "E", s = 0; s < e.length; s++) {
                                var o = e[s];
                                if ("object" == Object(t["a"])(o)) if (e[s] = "", o.changeCase && o.local) {
                                    var l = e[s + 1];
                                    l && "string" == typeof l && ("u" == o.changeCase ? e[s] = l[0].toUpperCase() : e[s] = l[0].toLowerCase(), e[s + 1] = l.substr(1))
                                } else o.changeCase && (i = o.changeCase); else "U" == i ? e[s] = o.toUpperCase() : "L" == i && (e[s] = o.toLowerCase())
                            }
                            return e.join("")
                        }));
                        return this.variables.__ = null, l
                    }, this.resolveVariables = function (e, i) {
                        for (var n = [], s = 0; s < e.length; s++) {
                            var o = e[s];
                            if ("string" == typeof o) n.push(o); else {
                                if ("object" != Object(t["a"])(o)) continue;
                                if (o.skip) a(o); else {
                                    if (o.processed < s) continue;
                                    if (o.text) {
                                        var r = this.getVariableValue(i, o.text);
                                        r && o.fmtString && (r = this.tmStrFormat(r, o)), o.processed = s, null == o.expectIf ? r && (n.push(r), a(o)) : r ? o.skip = o.elseBranch : a(o)
                                    } else null != o.tabstopId ? n.push(o) : null != o.changeCase && n.push(o)
                                }
                            }
                        }

                        function a(t) {
                            var i = e.indexOf(t, s + 1);
                            -1 != i && (s = i)
                        }

                        return n
                    }, this.insertSnippetForSelection = function (e, i) {
                        var n = e.getCursorPosition(), s = e.session.getLine(n.row), o = e.session.getTabString(),
                            r = s.match(/^\s*/)[0];
                        n.column < r.length && (r = r.slice(0, n.column)), i = i.replace(/\r/g, "");
                        var a = this.tokenizeTmSnippet(i);
                        a = this.resolveVariables(a, e), a = a.map((function (e) {
                            return "\n" == e ? e + r : "string" == typeof e ? e.replace(/\t/g, o) : e
                        }));
                        var l = [];
                        a.forEach((function (e, i) {
                            if ("object" == Object(t["a"])(e)) {
                                var n = e.tabstopId, s = l[n];
                                if (s || (s = l[n] = [], s.index = n, s.value = ""), -1 === s.indexOf(e)) {
                                    s.push(e);
                                    var o = a.indexOf(e, i + 1);
                                    if (-1 !== o) {
                                        var r = a.slice(i + 1, o), c = r.some((function (e) {
                                            return "object" === Object(t["a"])(e)
                                        }));
                                        c && !s.value ? s.value = r : !r.length || s.value && "string" === typeof s.value || (s.value = r.join(""))
                                    }
                                }
                            }
                        })), l.forEach((function (e) {
                            e.length = 0
                        }));
                        var c = {};

                        function h(e) {
                            for (var i = [], n = 0; n < e.length; n++) {
                                var s = e[n];
                                if ("object" == Object(t["a"])(s)) {
                                    if (c[s.tabstopId]) continue;
                                    var o = e.lastIndexOf(s, n - 1);
                                    s = i[o] || {tabstopId: s.tabstopId}
                                }
                                i[n] = s
                            }
                            return i
                        }

                        for (var u = 0; u < a.length; u++) {
                            var d = a[u];
                            if ("object" == Object(t["a"])(d)) {
                                var f = d.tabstopId, p = a.indexOf(d, u + 1);
                                if (c[f]) c[f] === d && (c[f] = null); else {
                                    var m = l[f], v = "string" == typeof m.value ? [m.value] : h(m.value);
                                    v.unshift(u + 1, Math.max(0, p - u)), v.push(d), c[f] = d, a.splice.apply(a, v), -1 === m.indexOf(d) && m.push(d)
                                }
                            }
                        }
                        var w = 0, b = 0, y = "";
                        a.forEach((function (e) {
                            if ("string" === typeof e) {
                                var t = e.split("\n");
                                t.length > 1 ? (b = t[t.length - 1].length, w += t.length - 1) : b += e.length, y += e
                            } else e.start ? e.end = {row: w, column: b} : e.start = {row: w, column: b}
                        }));
                        var $ = e.getSelectionRange(), S = e.session.replace($, y), x = new g(e),
                            C = e.inVirtualSelectionMode && e.selection.index;
                        x.addTabstops(l, $.start, S, C)
                    }, this.insertSnippet = function (e, t) {
                        var i = this;
                        if (e.inVirtualSelectionMode) return i.insertSnippetForSelection(e, t);
                        e.forEachSelection((function () {
                            i.insertSnippetForSelection(e, t)
                        }), null, {keepOrder: !0}), e.tabstopManager && e.tabstopManager.tabNext()
                    }, this.$getScope = function (e) {
                        var i = e.session.$mode.$id || "";
                        if (i = i.split("/").pop(), "html" === i || "php" === i) {
                            "php" !== i || e.session.$mode.inlinePhp || (i = "html");
                            var n = e.getCursorPosition(), s = e.session.getState(n.row);
                            "object" === Object(t["a"])(s) && (s = s[0]), s.substring && ("js-" == s.substring(0, 3) ? i = "javascript" : "css-" == s.substring(0, 4) ? i = "css" : "php-" == s.substring(0, 4) && (i = "php"))
                        }
                        return i
                    }, this.getActiveScopes = function (e) {
                        var t = this.$getScope(e), i = [t], n = this.snippetMap;
                        return n[t] && n[t].includeScopes && i.push.apply(i, n[t].includeScopes), i.push("_"), i
                    }, this.expandWithTab = function (e, t) {
                        var i = this, n = e.forEachSelection((function () {
                            return i.expandSnippetForSelection(e, t)
                        }), null, {keepOrder: !0});
                        return n && e.tabstopManager && e.tabstopManager.tabNext(), n
                    }, this.expandSnippetForSelection = function (e, t) {
                        var i, n = e.getCursorPosition(), s = e.session.getLine(n.row), o = s.substring(0, n.column),
                            r = s.substr(n.column), a = this.snippetMap;
                        return this.getActiveScopes(e).some((function (e) {
                            var t = a[e];
                            return t && (i = this.findMatchingSnippet(t, o, r)), !!i
                        }), this), !!i && (!(!t || !t.dryRun) || (e.session.doc.removeInLine(n.row, n.column - i.replaceBefore.length, n.column + i.replaceAfter.length), this.variables.M__ = i.matchBefore, this.variables.T__ = i.matchAfter, this.insertSnippetForSelection(e, i.content), this.variables.M__ = this.variables.T__ = null, !0))
                    }, this.findMatchingSnippet = function (e, t, i) {
                        for (var n = e.length; n--;) {
                            var s = e[n];
                            if ((!s.startRe || s.startRe.test(t)) && ((!s.endRe || s.endRe.test(i)) && (s.startRe || s.endRe))) return s.matchBefore = s.startRe ? s.startRe.exec(t) : [""], s.matchAfter = s.endRe ? s.endRe.exec(i) : [""], s.replaceBefore = s.triggerRe ? s.triggerRe.exec(t)[0] : "", s.replaceAfter = s.endTriggerRe ? s.endTriggerRe.exec(i)[0] : "", s
                        }
                    }, this.snippetMap = {}, this.snippetNameMap = {}, this.register = function (e, t) {
                        var i = this.snippetMap, n = this.snippetNameMap, s = this;

                        function o(e) {
                            return e && !/^\^?\(.*\)\$?$|^\\b$/.test(e) && (e = "(?:" + e + ")"), e || ""
                        }

                        function a(e, t, i) {
                            return e = o(e), t = o(t), i ? (e = t + e, e && "$" != e[e.length - 1] && (e += "$")) : (e += t, e && "^" != e[0] && (e = "^" + e)), new RegExp(e)
                        }

                        function l(e) {
                            e.scope || (e.scope = t || "_"), t = e.scope, i[t] || (i[t] = [], n[t] = {});
                            var o = n[t];
                            if (e.name) {
                                var l = o[e.name];
                                l && s.unregister(l), o[e.name] = e
                            }
                            i[t].push(e), e.tabTrigger && !e.trigger && (!e.guard && /^\w/.test(e.tabTrigger) && (e.guard = "\\b"), e.trigger = r.escapeRegExp(e.tabTrigger)), (e.trigger || e.guard || e.endTrigger || e.endGuard) && (e.startRe = a(e.trigger, e.guard, !0), e.triggerRe = new RegExp(e.trigger), e.endRe = a(e.endTrigger, e.endGuard, !0), e.endTriggerRe = new RegExp(e.endTrigger))
                        }

                        e || (e = []), e && e.content ? l(e) : Array.isArray(e) && e.forEach(l), this._signal("registerSnippets", {scope: t})
                    }, this.unregister = function (e, t) {
                        var i = this.snippetMap, n = this.snippetNameMap;

                        function s(e) {
                            var s = n[e.scope || t];
                            if (s && s[e.name]) {
                                delete s[e.name];
                                var o = i[e.scope || t], r = o && o.indexOf(e);
                                r >= 0 && o.splice(r, 1)
                            }
                        }

                        e.content ? s(e) : Array.isArray(e) && e.forEach(s)
                    }, this.parseSnippetFile = function (e) {
                        e = e.replace(/\r/g, "");
                        var t, i = [], n = {}, s = /^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm;
                        while (t = s.exec(e)) {
                            if (t[1]) try {
                                n = JSON.parse(t[1]), i.push(n)
                            } catch (l) {
                            }
                            if (t[4]) n.content = t[4].replace(/^\t/gm, ""), i.push(n), n = {}; else {
                                var o = t[2], r = t[3];
                                if ("regex" == o) {
                                    var a = /\/((?:[^\/\\]|\\.)*)|$/g;
                                    n.guard = a.exec(r)[1], n.trigger = a.exec(r)[1], n.endTrigger = a.exec(r)[1], n.endGuard = a.exec(r)[1]
                                } else "snippet" == o ? (n.tabTrigger = r.match(/^\S*/)[0], n.name || (n.name = r)) : n[o] = r
                            }
                        }
                        return i
                    }, this.getSnippetByName = function (e, t) {
                        var i, n = this.snippetNameMap;
                        return this.getActiveScopes(t).some((function (t) {
                            var s = n[t];
                            return s && (i = s[e]), !!i
                        }), this), i
                    }
                }).call(d.prototype);
                var g = function (e) {
                    if (e.tabstopManager) return e.tabstopManager;
                    e.tabstopManager = this, this.$onChange = this.onChange.bind(this), this.$onChangeSelection = r.delayedCall(this.onChangeSelection.bind(this)).schedule, this.$onChangeSession = this.onChangeSession.bind(this), this.$onAfterExec = this.onAfterExec.bind(this), this.attach(e)
                };
                (function () {
                    this.attach = function (e) {
                        this.index = 0, this.ranges = [], this.tabstops = [], this.$openTabstops = null, this.selectedTabstop = null, this.editor = e, this.editor.on("change", this.$onChange), this.editor.on("changeSelection", this.$onChangeSelection), this.editor.on("changeSession", this.$onChangeSession), this.editor.commands.on("afterExec", this.$onAfterExec), this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)
                    }, this.detach = function () {
                        this.tabstops.forEach(this.removeTabstopMarkers, this), this.ranges = null, this.tabstops = null, this.selectedTabstop = null, this.editor.removeListener("change", this.$onChange), this.editor.removeListener("changeSelection", this.$onChangeSelection), this.editor.removeListener("changeSession", this.$onChangeSession), this.editor.commands.removeListener("afterExec", this.$onAfterExec), this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler), this.editor.tabstopManager = null, this.editor = null
                    }, this.onChange = function (e) {
                        var t = "r" == e.action[0], i = e.start, n = e.end, s = i.row, o = n.row, r = o - s,
                            a = n.column - i.column;
                        if (t && (r = -r, a = -a), !this.$inChange && t) {
                            var l = this.selectedTabstop, c = l && !l.some((function (e) {
                                return u(e.start, i) <= 0 && u(e.end, n) >= 0
                            }));
                            if (c) return this.detach()
                        }
                        for (var h = this.ranges, d = 0; d < h.length; d++) {
                            var g = h[d];
                            g.end.row < i.row || (t && u(i, g.start) < 0 && u(n, g.end) > 0 ? (this.removeRange(g), d--) : (g.start.row == s && g.start.column > i.column && (g.start.column += a), g.end.row == s && g.end.column >= i.column && (g.end.column += a), g.start.row >= s && (g.start.row += r), g.end.row >= s && (g.end.row += r), u(g.start, g.end) > 0 && this.removeRange(g)))
                        }
                        h.length || this.detach()
                    }, this.updateLinkedFields = function () {
                        var e = this.selectedTabstop;
                        if (e && e.hasLinkedRanges) {
                            this.$inChange = !0;
                            for (var t = this.editor.session, n = t.getTextRange(e.firstNonLinked), s = e.length; s--;) {
                                var o = e[s];
                                if (o.linked) {
                                    var r = i.snippetManager.tmStrFormat(n, o.original);
                                    t.replace(o, r)
                                }
                            }
                            this.$inChange = !1
                        }
                    }, this.onAfterExec = function (e) {
                        e.command && !e.command.readOnly && this.updateLinkedFields()
                    }, this.onChangeSelection = function () {
                        if (this.editor) {
                            for (var e = this.editor.selection.lead, t = this.editor.selection.anchor, i = this.editor.selection.isEmpty(), n = this.ranges.length; n--;) if (!this.ranges[n].linked) {
                                var s = this.ranges[n].contains(e.row, e.column),
                                    o = i || this.ranges[n].contains(t.row, t.column);
                                if (s && o) return
                            }
                            this.detach()
                        }
                    }, this.onChangeSession = function () {
                        this.detach()
                    }, this.tabNext = function (e) {
                        var t = this.tabstops.length, i = this.index + (e || 1);
                        i = Math.min(Math.max(i, 1), t), i == t && (i = 0), this.selectTabstop(i), 0 === i && this.detach()
                    }, this.selectTabstop = function (e) {
                        this.$openTabstops = null;
                        var t = this.tabstops[this.index];
                        if (t && this.addTabstopMarkers(t), this.index = e, t = this.tabstops[this.index], t && t.length) {
                            if (this.selectedTabstop = t, this.editor.inVirtualSelectionMode) this.editor.selection.setRange(t.firstNonLinked); else {
                                var i = this.editor.multiSelect;
                                i.toSingleRange(t.firstNonLinked.clone());
                                for (var n = t.length; n--;) t.hasLinkedRanges && t[n].linked || i.addRange(t[n].clone(), !0);
                                i.ranges[0] && i.addRange(i.ranges[0].clone())
                            }
                            this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)
                        }
                    }, this.addTabstops = function (e, t, i) {
                        if (this.$openTabstops || (this.$openTabstops = []), !e[0]) {
                            var n = a.fromPoints(i, i);
                            m(n.start, t), m(n.end, t), e[0] = [n], e[0].index = 0
                        }
                        var s = this.index, o = [s + 1, 0], r = this.ranges;
                        e.forEach((function (e, i) {
                            for (var n = this.$openTabstops[i] || e, s = e.length; s--;) {
                                var l = e[s], c = a.fromPoints(l.start, l.end || l.start);
                                p(c.start, t), p(c.end, t), c.original = l, c.tabstop = n, r.push(c), n != e ? n.unshift(c) : n[s] = c, l.fmtString ? (c.linked = !0, n.hasLinkedRanges = !0) : n.firstNonLinked || (n.firstNonLinked = c)
                            }
                            n.firstNonLinked || (n.hasLinkedRanges = !1), n === e && (o.push(n), this.$openTabstops[i] = n), this.addTabstopMarkers(n)
                        }), this), o.length > 2 && (this.tabstops.length && o.push(o.splice(2, 1)[0]), this.tabstops.splice.apply(this.tabstops, o))
                    }, this.addTabstopMarkers = function (e) {
                        var t = this.editor.session;
                        e.forEach((function (e) {
                            e.markerId || (e.markerId = t.addMarker(e, "ace_snippet-marker", "text"))
                        }))
                    }, this.removeTabstopMarkers = function (e) {
                        var t = this.editor.session;
                        e.forEach((function (e) {
                            t.removeMarker(e.markerId), e.markerId = null
                        }))
                    }, this.removeRange = function (e) {
                        var t = e.tabstop.indexOf(e);
                        e.tabstop.splice(t, 1), t = this.ranges.indexOf(e), this.ranges.splice(t, 1), this.editor.session.removeMarker(e.markerId), e.tabstop.length || (t = this.tabstops.indexOf(e.tabstop), -1 != t && this.tabstops.splice(t, 1), this.tabstops.length || this.detach())
                    }, this.keyboardHandler = new c, this.keyboardHandler.bindKeys({
                        Tab: function (e) {
                            i.snippetManager && i.snippetManager.expandWithTab(e) || e.tabstopManager.tabNext(1)
                        }, "Shift-Tab": function (e) {
                            e.tabstopManager.tabNext(-1)
                        }, Esc: function (e) {
                            e.tabstopManager.detach()
                        }, Return: function (e) {
                            return !1
                        }
                    })
                }).call(g.prototype);
                var f = {};
                f.onChange = l.prototype.onChange, f.setPosition = function (e, t) {
                    this.pos.row = e, this.pos.column = t
                }, f.update = function (e, t, i) {
                    this.$insertRight = i, this.pos = e, this.onChange(t)
                };
                var p = function (e, t) {
                    0 == e.row && (e.column += t.column), e.row += t.row
                }, m = function (e, t) {
                    e.row == t.row && (e.column -= t.column), e.row -= t.row
                };
                e("./lib/dom").importCssString(".ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}"), i.snippetManager = new d;
                var v = e("./editor").Editor;
                (function () {
                    this.insertSnippet = function (e, t) {
                        return i.snippetManager.insertSnippet(this, e, t)
                    }, this.expandSnippet = function (e) {
                        return i.snippetManager.expandWithTab(this, e)
                    }
                }).call(v.prototype)
            })), ace.define("ace/autocomplete/popup", ["require", "exports", "module", "ace/virtual_renderer", "ace/editor", "ace/range", "ace/lib/event", "ace/lib/lang", "ace/lib/dom"], (function (e, t, i) {
                var n = e("../virtual_renderer").VirtualRenderer, s = e("../editor").Editor, o = e("../range").Range,
                    r = e("../lib/event"), a = e("../lib/lang"), l = e("../lib/dom"), c = function (e) {
                        var t = new n(e);
                        t.$maxLines = 4;
                        var i = new s(t);
                        return i.setHighlightActiveLine(!1), i.setShowPrintMargin(!1), i.renderer.setShowGutter(!1), i.renderer.setHighlightGutterLine(!1), i.$mouseHandler.$focusTimeout = 0, i.$highlightTagPending = !0, i
                    }, h = function (e) {
                        var t = l.createElement("div"), i = new c(t);
                        e && e.appendChild(t), t.style.display = "none", i.renderer.content.style.cursor = "default", i.renderer.setStyle("ace_autocomplete"), i.setOption("displayIndentGuides", !1), i.setOption("dragDelay", 150);
                        var n, s = function () {
                        };
                        i.focus = s, i.$isFocused = !0, i.renderer.$cursorLayer.restartTimer = s, i.renderer.$cursorLayer.element.style.opacity = 0, i.renderer.$maxLines = 8, i.renderer.$keepTextAreaAtCursor = !1, i.setHighlightActiveLine(!1), i.session.highlight(""), i.session.$searchHighlight.clazz = "ace_highlight-marker", i.on("mousedown", (function (e) {
                            var t = e.getDocumentPosition();
                            i.selection.moveToPosition(t), u.start.row = u.end.row = t.row, e.stop()
                        }));
                        var h = new o(-1, 0, -1, 1 / 0), u = new o(-1, 0, -1, 1 / 0);
                        u.id = i.session.addMarker(u, "ace_active-line", "fullLine"), i.setSelectOnHover = function (e) {
                            e ? h.id && (i.session.removeMarker(h.id), h.id = null) : h.id = i.session.addMarker(h, "ace_line-hover", "fullLine")
                        }, i.setSelectOnHover(!1), i.on("mousemove", (function (e) {
                            if (n) {
                                if (n.x != e.x || n.y != e.y) {
                                    n = e, n.scrollTop = i.renderer.scrollTop;
                                    var t = n.getDocumentPosition().row;
                                    h.start.row != t && (h.id || i.setRow(t), g(t))
                                }
                            } else n = e
                        })), i.renderer.on("beforeRender", (function () {
                            if (n && -1 != h.start.row) {
                                n.$pos = null;
                                var e = n.getDocumentPosition().row;
                                h.id || i.setRow(e), g(e, !0)
                            }
                        })), i.renderer.on("afterRender", (function () {
                            var e = i.getRow(), t = i.renderer.$textLayer, n = t.element.childNodes[e - t.config.firstRow];
                            n != t.selectedNode && (t.selectedNode && l.removeCssClass(t.selectedNode, "ace_selected"), t.selectedNode = n, n && l.addCssClass(n, "ace_selected"))
                        }));
                        var d = function () {
                            g(-1)
                        }, g = function (e, t) {
                            e !== h.start.row && (h.start.row = h.end.row = e, t || i.session._emit("changeBackMarker"), i._emit("changeHoverMarker"))
                        };
                        i.getHoveredRow = function () {
                            return h.start.row
                        }, r.addListener(i.container, "mouseout", d), i.on("hide", d), i.on("changeSelection", d), i.session.doc.getLength = function () {
                            return i.data.length
                        }, i.session.doc.getLine = function (e) {
                            var t = i.data[e];
                            return "string" == typeof t ? t : t && t.value || ""
                        };
                        var f = i.session.bgTokenizer;
                        return f.$tokenizeRow = function (e) {
                            var t = i.data[e], n = [];
                            if (!t) return n;
                            "string" == typeof t && (t = {value: t});
                            var s = t.caption || t.value || t.name;

                            function o(e, i) {
                                e && n.push({type: (t.className || "") + (i || ""), value: e})
                            }

                            for (var r = s.toLowerCase(), a = (i.filterText || "").toLowerCase(), l = 0, c = 0, h = 0; h <= a.length; h++) if (h != c && (t.matchMask & 1 << h || h == a.length)) {
                                var u = a.slice(c, h);
                                c = h;
                                var d = r.indexOf(u);
                                if (-1 == d) continue;
                                o(s.slice(l, d), ""), l = d + u.length, o(s.slice(d, l), "completion-highlight")
                            }
                            return o(s.slice(l, s.length), ""), t.meta && n.push({
                                type: "completion-meta",
                                value: t.meta
                            }), n
                        }, f.$updateOnChange = s, f.start = s, i.session.$computeWidth = function () {
                            return this.screenWidth = 0
                        }, i.isOpen = !1, i.isTopdown = !1, i.autoSelect = !0, i.filterText = "", i.data = [], i.setData = function (e, t) {
                            i.filterText = t || "", i.setValue(a.stringRepeat("\n", e.length), -1), i.data = e || [], i.setRow(0)
                        }, i.getData = function (e) {
                            return i.data[e]
                        }, i.getRow = function () {
                            return u.start.row
                        }, i.setRow = function (e) {
                            e = Math.max(this.autoSelect ? 0 : -1, Math.min(this.data.length, e)), u.start.row != e && (i.selection.clearSelection(), u.start.row = u.end.row = e || 0, i.session._emit("changeBackMarker"), i.moveCursorTo(e || 0, 0), i.isOpen && i._signal("select"))
                        }, i.on("changeSelection", (function () {
                            i.isOpen && i.setRow(i.selection.lead.row), i.renderer.scrollCursorIntoView()
                        })), i.hide = function () {
                            this.container.style.display = "none", this._signal("hide"), i.isOpen = !1
                        }, i.show = function (e, t, s) {
                            var o = this.container, r = window.innerHeight, a = window.innerWidth, l = this.renderer,
                                c = l.$maxLines * t * 1.4, h = e.top + this.$borderSize, u = h > r / 2 && !s;
                            u && h + t + c > r ? (l.$maxPixelHeight = h - 2 * this.$borderSize, o.style.top = "", o.style.bottom = r - h + "px", i.isTopdown = !1) : (h += t, l.$maxPixelHeight = r - h - .2 * t, o.style.top = h + "px", o.style.bottom = "", i.isTopdown = !0), o.style.display = "", this.renderer.$textLayer.checkForSizeChanges();
                            var d = e.left;
                            d + o.offsetWidth > a && (d = a - o.offsetWidth), o.style.left = d + "px", this._signal("show"), n = null, i.isOpen = !0
                        }, i.getTextLeftOffset = function () {
                            return this.$borderSize + this.renderer.$padding + this.$imageSize
                        }, i.$imageSize = 0, i.$borderSize = 1, i
                    };
                l.importCssString(".ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #3a674e;}.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);    position: absolute;    z-index: 2;}.ace_dark.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid rgba(109, 150, 13, 0.8);    background: rgba(58, 103, 78, 0.62);}.ace_completion-meta {    opacity: 0.5;    margin: 0.9em;}.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #2d69c7;}.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #93ca12;}.ace_editor.ace_autocomplete {    width: 300px;    z-index: 200000;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;    background: #fefefe;    color: #111;}.ace_dark.ace_editor.ace_autocomplete {    border: 1px #484747 solid;    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.51);    line-height: 1.4;    background: #25282c;    color: #c1c1c1;}", "autocompletion.css"), t.AcePopup = h
            })), ace.define("ace/autocomplete/util", ["require", "exports", "module"], (function (e, t, i) {
                t.parForEach = function (e, t, i) {
                    var n = 0, s = e.length;
                    0 === s && i();
                    for (var o = 0; o < s; o++) t(e[o], (function (e, t) {
                        n++, n === s && i(e, t)
                    }))
                };
                var n = /[a-zA-Z_0-9\$\-\u00A2-\uFFFF]/;
                t.retrievePrecedingIdentifier = function (e, t, i) {
                    i = i || n;
                    for (var s = [], o = t - 1; o >= 0; o--) {
                        if (!i.test(e[o])) break;
                        s.push(e[o])
                    }
                    return s.reverse().join("")
                }, t.retrieveFollowingIdentifier = function (e, t, i) {
                    i = i || n;
                    for (var s = [], o = t; o < e.length; o++) {
                        if (!i.test(e[o])) break;
                        s.push(e[o])
                    }
                    return s
                }, t.getCompletionPrefix = function (e) {
                    var t, i = e.getCursorPosition(), n = e.session.getLine(i.row);
                    return e.completers.forEach(function (e) {
                        e.identifierRegexps && e.identifierRegexps.forEach(function (e) {
                            !t && e && (t = this.retrievePrecedingIdentifier(n, i.column, e))
                        }.bind(this))
                    }.bind(this)), t || this.retrievePrecedingIdentifier(n, i.column)
                }
            })), ace.define("ace/autocomplete", ["require", "exports", "module", "ace/keyboard/hash_handler", "ace/autocomplete/popup", "ace/autocomplete/util", "ace/lib/event", "ace/lib/lang", "ace/lib/dom", "ace/snippets"], (function (e, t, i) {
                var n = e("./keyboard/hash_handler").HashHandler, s = e("./autocomplete/popup").AcePopup,
                    o = e("./autocomplete/util"), r = (e("./lib/event"), e("./lib/lang")), a = e("./lib/dom"),
                    l = e("./snippets").snippetManager, c = function () {
                        this.autoInsert = !1, this.autoSelect = !0, this.exactMatch = !1, this.gatherCompletionsId = 0, this.keyboardHandler = new n, this.keyboardHandler.bindKeys(this.commands), this.blurListener = this.blurListener.bind(this), this.changeListener = this.changeListener.bind(this), this.mousedownListener = this.mousedownListener.bind(this), this.mousewheelListener = this.mousewheelListener.bind(this), this.changeTimer = r.delayedCall(function () {
                            this.updateCompletions(!0)
                        }.bind(this)), this.tooltipTimer = r.delayedCall(this.updateDocTooltip.bind(this), 50)
                    };
                (function () {
                    this.$init = function () {
                        return this.popup = new s(document.body || document.documentElement), this.popup.on("click", function (e) {
                            this.insertMatch(), e.stop()
                        }.bind(this)), this.popup.focus = this.editor.focus.bind(this.editor), this.popup.on("show", this.tooltipTimer.bind(null, null)), this.popup.on("select", this.tooltipTimer.bind(null, null)), this.popup.on("changeHoverMarker", this.tooltipTimer.bind(null, null)), this.popup
                    }, this.getPopup = function () {
                        return this.popup || this.$init()
                    }, this.openPopup = function (e, t, i) {
                        this.popup || this.$init(), this.popup.autoSelect = this.autoSelect, this.popup.setData(this.completions.filtered, this.completions.filterText), e.keyBinding.addKeyboardHandler(this.keyboardHandler);
                        var n = e.renderer;
                        if (this.popup.setRow(this.autoSelect ? 0 : -1), i) i && !t && this.detach(); else {
                            this.popup.setTheme(e.getTheme()), this.popup.setFontSize(e.getFontSize());
                            var s = n.layerConfig.lineHeight, o = n.$cursorLayer.getPixelPosition(this.base, !0);
                            o.left -= this.popup.getTextLeftOffset();
                            var r = e.container.getBoundingClientRect();
                            o.top += r.top - n.layerConfig.offset, o.left += r.left - e.renderer.scrollLeft, o.left += n.gutterWidth, this.popup.show(o, s)
                        }
                    }, this.detach = function () {
                        this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler), this.editor.off("changeSelection", this.changeListener), this.editor.off("blur", this.blurListener), this.editor.off("mousedown", this.mousedownListener), this.editor.off("mousewheel", this.mousewheelListener), this.changeTimer.cancel(), this.hideDocTooltip(), this.gatherCompletionsId += 1, this.popup && this.popup.isOpen && this.popup.hide(), this.base && this.base.detach(), this.activated = !1, this.completions = this.base = null
                    }, this.changeListener = function (e) {
                        var t = this.editor.selection.lead;
                        (t.row != this.base.row || t.column < this.base.column) && this.detach(), this.activated ? this.changeTimer.schedule() : this.detach()
                    }, this.blurListener = function (e) {
                        var t = document.activeElement, i = this.editor.textInput.getElement(),
                            n = e.relatedTarget && this.tooltipNode && this.tooltipNode.contains(e.relatedTarget),
                            s = this.popup && this.popup.container;
                        t == i || t.parentNode == s || n || t == this.tooltipNode || e.relatedTarget == i || this.detach()
                    }, this.mousedownListener = function (e) {
                        this.detach()
                    }, this.mousewheelListener = function (e) {
                        this.detach()
                    }, this.goTo = function (e) {
                        var t = this.popup.getRow(), i = this.popup.session.getLength() - 1;
                        switch (e) {
                            case"up":
                                t = t <= 0 ? i : t - 1;
                                break;
                            case"down":
                                t = t >= i ? -1 : t + 1;
                                break;
                            case"start":
                                t = 0;
                                break;
                            case"end":
                                t = i;
                                break
                        }
                        this.popup.setRow(t)
                    }, this.insertMatch = function (e, t) {
                        if (e || (e = this.popup.getData(this.popup.getRow())), !e) return !1;
                        if (e.completer && e.completer.insertMatch) e.completer.insertMatch(this.editor, e); else {
                            if (this.completions.filterText) for (var i, n = this.editor.selection.getAllRanges(), s = 0; i = n[s]; s++) i.start.column -= this.completions.filterText.length, this.editor.session.remove(i);
                            e.snippet ? l.insertSnippet(this.editor, e.snippet) : this.editor.execCommand("insertstring", e.value || e)
                        }
                        this.detach()
                    }, this.commands = {
                        Up: function (e) {
                            e.completer.goTo("up")
                        }, Down: function (e) {
                            e.completer.goTo("down")
                        }, "Ctrl-Up|Ctrl-Home": function (e) {
                            e.completer.goTo("start")
                        }, "Ctrl-Down|Ctrl-End": function (e) {
                            e.completer.goTo("end")
                        }, Esc: function (e) {
                            e.completer.detach()
                        }, Return: function (e) {
                            return e.completer.insertMatch()
                        }, "Shift-Return": function (e) {
                            e.completer.insertMatch(null, {deleteSuffix: !0})
                        }, Tab: function (e) {
                            var t = e.completer.insertMatch();
                            if (t || e.tabstopManager) return t;
                            e.completer.goTo("down")
                        }, PageUp: function (e) {
                            e.completer.popup.gotoPageUp()
                        }, PageDown: function (e) {
                            e.completer.popup.gotoPageDown()
                        }
                    }, this.gatherCompletions = function (e, t) {
                        var i = e.getSession(), n = e.getCursorPosition(), s = o.getCompletionPrefix(e);
                        this.base = i.doc.createAnchor(n.row, n.column - s.length), this.base.$insertRight = !0;
                        var r = [], a = e.completers.length;
                        return e.completers.forEach((function (l, c) {
                            l.getCompletions(e, i, n, s, (function (i, n) {
                                !i && n && (r = r.concat(n)), t(null, {
                                    prefix: o.getCompletionPrefix(e),
                                    matches: r,
                                    finished: 0 === --a
                                })
                            }))
                        })), !0
                    }, this.showPopup = function (e) {
                        this.editor && this.detach(), this.activated = !0, this.editor = e, e.completer != this && (e.completer && e.completer.detach(), e.completer = this), e.on("changeSelection", this.changeListener), e.on("blur", this.blurListener), e.on("mousedown", this.mousedownListener), e.on("mousewheel", this.mousewheelListener), this.updateCompletions()
                    }, this.updateCompletions = function (e) {
                        if (e && this.base && this.completions) {
                            var t = this.editor.getCursorPosition(),
                                i = this.editor.session.getTextRange({start: this.base, end: t});
                            if (i == this.completions.filterText) return;
                            return this.completions.setFilter(i), this.completions.filtered.length ? 1 != this.completions.filtered.length || this.completions.filtered[0].value != i || this.completions.filtered[0].snippet ? void this.openPopup(this.editor, i, e) : this.detach() : this.detach()
                        }
                        var n = this.gatherCompletionsId;
                        this.gatherCompletions(this.editor, function (t, i) {
                            var s = function () {
                                if (i.finished) return this.detach()
                            }.bind(this), o = i.prefix, r = i && i.matches;
                            if (!r || !r.length) return s();
                            if (0 === o.indexOf(i.prefix) && n == this.gatherCompletionsId) {
                                this.completions = new h(r), this.exactMatch && (this.completions.exactMatch = !0), this.completions.setFilter(o);
                                var a = this.completions.filtered;
                                return a.length && (1 != a.length || a[0].value != o || a[0].snippet) ? this.autoInsert && 1 == a.length && i.finished ? this.insertMatch(a[0]) : void this.openPopup(this.editor, o, e) : s()
                            }
                        }.bind(this))
                    }, this.cancelContextMenu = function () {
                        this.editor.$mouseHandler.cancelContextMenu()
                    }, this.updateDocTooltip = function () {
                        var e = this.popup, t = e.data, i = t && (t[e.getHoveredRow()] || t[e.getRow()]), n = null;
                        return i && this.editor && this.popup.isOpen ? (this.editor.completers.some((function (e) {
                            return e.getDocTooltip && (n = e.getDocTooltip(i)), n
                        })), n || (n = i), "string" == typeof n && (n = {docText: n}), n && (n.docHTML || n.docText) ? void this.showDocTooltip(n) : this.hideDocTooltip()) : this.hideDocTooltip()
                    }, this.showDocTooltip = function (e) {
                        this.tooltipNode || (this.tooltipNode = a.createElement("div"), this.tooltipNode.className = "ace_tooltip ace_doc-tooltip", this.tooltipNode.style.margin = 0, this.tooltipNode.style.pointerEvents = "auto", this.tooltipNode.tabIndex = -1, this.tooltipNode.onblur = this.blurListener.bind(this), this.tooltipNode.onclick = this.onTooltipClick.bind(this));
                        var t = this.tooltipNode;
                        e.docHTML ? t.innerHTML = e.docHTML : e.docText && (t.textContent = e.docText), t.parentNode || document.body.appendChild(t);
                        var i = this.popup, n = i.container.getBoundingClientRect();
                        t.style.top = i.container.style.top, t.style.bottom = i.container.style.bottom, t.style.display = "block", window.innerWidth - n.right < 320 ? n.left < 320 ? i.isTopdown ? (t.style.top = n.bottom + "px", t.style.left = n.left + "px", t.style.right = "", t.style.bottom = "") : (t.style.top = i.container.offsetTop - t.offsetHeight + "px", t.style.left = n.left + "px", t.style.right = "", t.style.bottom = "") : (t.style.right = window.innerWidth - n.left + "px", t.style.left = "") : (t.style.left = n.right + 1 + "px", t.style.right = "")
                    }, this.hideDocTooltip = function () {
                        if (this.tooltipTimer.cancel(), this.tooltipNode) {
                            var e = this.tooltipNode;
                            this.editor.isFocused() || document.activeElement != e || this.editor.focus(), this.tooltipNode = null, e.parentNode && e.parentNode.removeChild(e)
                        }
                    }, this.onTooltipClick = function (e) {
                        var t = e.target;
                        while (t && t != this.tooltipNode) {
                            if ("A" == t.nodeName && t.href) {
                                t.rel = "noreferrer", t.target = "_blank";
                                break
                            }
                            t = t.parentNode
                        }
                    }
                }).call(c.prototype), c.startCommand = {
                    name: "startAutocomplete", exec: function (e) {
                        e.completer || (e.completer = new c), e.completer.autoInsert = !1, e.completer.autoSelect = !0, e.completer.showPopup(e), e.completer.cancelContextMenu()
                    }, bindKey: "Ctrl-Space|Ctrl-Shift-Space|Alt-Space"
                };
                var h = function (e, t) {
                    this.all = e, this.filtered = e, this.filterText = t || "", this.exactMatch = !1
                };
                (function () {
                    this.setFilter = function (e) {
                        if (e.length > this.filterText && 0 === e.lastIndexOf(this.filterText, 0)) var t = this.filtered; else t = this.all;
                        this.filterText = e, t = this.filterCompletions(t, this.filterText), t = t.sort((function (e, t) {
                            return t.exactMatch - e.exactMatch || t.$score - e.$score || (e.caption || e.value) < (t.caption || t.value)
                        }));
                        var i = null;
                        t = t.filter((function (e) {
                            var t = e.snippet || e.caption || e.value;
                            return t !== i && (i = t, !0)
                        })), this.filtered = t
                    }, this.filterCompletions = function (e, t) {
                        var i = [], n = t.toUpperCase(), s = t.toLowerCase();
                        e:for (var o, r = 0; o = e[r]; r++) {
                            var a = o.caption || o.value || o.snippet;
                            if (a) {
                                var l, c, h = -1, u = 0, d = 0;
                                if (this.exactMatch) {
                                    if (t !== a.substr(0, t.length)) continue e
                                } else {
                                    var g = a.toLowerCase().indexOf(s);
                                    if (g > -1) d = g; else for (var f = 0; f < t.length; f++) {
                                        var p = a.indexOf(s[f], h + 1), m = a.indexOf(n[f], h + 1);
                                        if (l = p >= 0 && (m < 0 || p < m) ? p : m, l < 0) continue e;
                                        c = l - h - 1, c > 0 && (-1 === h && (d += 10), d += c, u |= 1 << f), h = l
                                    }
                                }
                                o.matchMask = u, o.exactMatch = d ? 0 : 1, o.$score = (o.score || 0) - d, i.push(o)
                            }
                        }
                        return i
                    }
                }).call(h.prototype), t.Autocomplete = c, t.FilteredList = h
            })), ace.define("ace/autocomplete/text_completer", ["require", "exports", "module", "ace/range"], (function (e, t, i) {
                var n = e("../range").Range, s = /[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;

                function o(e, t) {
                    var i = e.getTextRange(n.fromPoints({row: 0, column: 0}, t));
                    return i.split(s).length - 1
                }

                function r(e, t) {
                    var i = o(e, t), n = e.getValue().split(s), r = Object.create(null), a = n[i];
                    return n.forEach((function (e, t) {
                        if (e && e !== a) {
                            var s = Math.abs(i - t), o = n.length - s;
                            r[e] ? r[e] = Math.max(o, r[e]) : r[e] = o
                        }
                    })), r
                }

                t.getCompletions = function (e, t, i, n, s) {
                    var o = r(t, i), a = Object.keys(o);
                    s(null, a.map((function (e) {
                        return {caption: e, value: e, score: o[e], meta: "local"}
                    })))
                }
            })), ace.define("ace/ext/language_tools", ["require", "exports", "module", "ace/snippets", "ace/autocomplete", "ace/config", "ace/lib/lang", "ace/autocomplete/util", "ace/autocomplete/text_completer", "ace/editor", "ace/config"], (function (e, t, i) {
                var n = e("../snippets").snippetManager, s = e("../autocomplete").Autocomplete, o = e("../config"),
                    r = e("../lib/lang"), a = e("../autocomplete/util"), l = e("../autocomplete/text_completer"), c = {
                        getCompletions: function (e, t, i, n, s) {
                            if (t.$mode.completer) return t.$mode.completer.getCompletions(e, t, i, n, s);
                            var o = e.session.getState(i.row), r = t.$mode.getCompletions(o, t, i, n);
                            s(null, r)
                        }
                    }, h = {
                        getCompletions: function (e, t, i, s, o) {
                            var r = [], a = t.getTokenAt(i.row, i.column);
                            a && a.type.match(/(tag-name|tag-open|tag-whitespace|attribute-name|attribute-value)\.xml$/) ? r.push("html-tag") : r = n.getActiveScopes(e);
                            var l = n.snippetMap, c = [];
                            r.forEach((function (e) {
                                for (var t = l[e] || [], i = t.length; i--;) {
                                    var n = t[i], s = n.name || n.tabTrigger;
                                    s && c.push({
                                        caption: s,
                                        snippet: n.content,
                                        meta: n.tabTrigger && !n.name ? n.tabTrigger + "⇥ " : "snippet",
                                        type: "snippet"
                                    })
                                }
                            }), this), o(null, c)
                        }, getDocTooltip: function (e) {
                            "snippet" != e.type || e.docHTML || (e.docHTML = ["<b>", r.escapeHTML(e.caption), "</b>", "<hr></hr>", r.escapeHTML(e.snippet)].join(""))
                        }
                    }, u = [h, l, c];
                t.setCompleters = function (e) {
                    u.length = 0, e && u.push.apply(u, e)
                }, t.addCompleter = function (e) {
                    for (var t = [], i = 0; i < u.length; i++) u[i].needDestory || t.push(u[i]);
                    t.push(e), u = t
                }, t.textCompleter = l, t.keyWordCompleter = c, t.snippetCompleter = h;
                var d = {
                    name: "expandSnippet", exec: function (e) {
                        return n.expandWithTab(e)
                    }, bindKey: "Tab"
                }, g = function (e, t) {
                    f(t.session.$mode)
                }, f = function e(t) {
                    var i = t.$id;
                    n.files || (n.files = {}), p(i), t.modes && t.modes.forEach(e)
                }, p = function e(t) {
                    if (t && !n.files[t]) {
                        var i = t.replace("mode", "snippets");
                        n.files[t] = {}, o.loadModule(i, (function (i) {
                            i && (n.files[t] = i, !i.snippets && i.snippetText && (i.snippets = n.parseSnippetFile(i.snippetText)), n.register(i.snippets || [], i.scope), i.includeScopes && (n.snippetMap[i.scope].includeScopes = i.includeScopes, i.includeScopes.forEach((function (t) {
                                e("ace/mode/" + t)
                            }))))
                        }))
                    }
                }, m = function (e) {
                    var t = e.editor, i = t.completer && t.completer.activated;
                    if ("backspace" === e.command.name) i && !a.getCompletionPrefix(t) && t.completer.detach(); else if ("insertstring" === e.command.name) {
                        var n = a.getCompletionPrefix(t);
                        n && !i && (t.completer || (t.completer = new s), t.completer.autoInsert = !1, t.completer.showPopup(t))
                    }
                }, v = e("../editor").Editor;
                e("../config").defineOptions(v.prototype, "editor", {
                    enableBasicAutocompletion: {
                        set: function (e) {
                            e ? (this.completers || (this.completers = Array.isArray(e) ? e : u), this.commands.addCommand(s.startCommand)) : this.commands.removeCommand(s.startCommand)
                        }, value: !1
                    }, enableLiveAutocompletion: {
                        set: function (e) {
                            e ? (this.completers || (this.completers = Array.isArray(e) ? e : u), this.commands.on("afterExec", m)) : this.commands.removeListener("afterExec", m)
                        }, value: !1
                    }, enableSnippets: {
                        set: function (e) {
                            e ? (this.commands.addCommand(d), this.on("changeMode", g), g(null, this)) : (this.commands.removeCommand(d), this.off("changeMode", g))
                        }, value: !1
                    }
                })
            })), function () {
                ace.require(["ace/ext/language_tools"], (function (i) {
                    "object" == Object(t["a"])(e) && "object" == ("undefined" === typeof exports ? "undefined" : Object(t["a"])(exports)) && e && (e.exports = i)
                }))
            }()
        }).call(this, i("dd40")(e))
    }, c523: function (e, t, i) {
    }, dcfc: function (e, t, i) {
        "use strict";
        var n = i("ed55"), s = i.n(n);
        s.a
    }, de92: function (e, t, i) {
        "use strict";
        (function (e) {
            var t = i("bf2d");
            deAceFine("ace/theme/monokai", ["require", "exports", "module", "ace/lib/dom"], (function (e, t, i) {
                t.isDark = !0, t.cssClass = "ace-monokai", t.cssText = ".ace-monokai .ace_gutter {background: #2F3129;color: #8F908A}.ace-monokai .ace_print-margin {width: 1px;background: #555651}.ace-monokai {background-color: #272822;color: #F8F8F2}.ace-monokai .ace_cursor {color: #F8F8F0}.ace-monokai .ace_marker-layer .ace_selection {background: #49483E}.ace-monokai.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #272822;}.ace-monokai .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-monokai .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #49483E}.ace-monokai .ace_marker-layer .ace_active-line {background: #202020}.ace-monokai .ace_gutter-active-line {background-color: #272727}.ace-monokai .ace_marker-layer .ace_selected-word {border: 1px solid #49483E}.ace-monokai .ace_invisible {color: #52524d}.ace-monokai .ace_entity.ace_name.ace_tag,.ace-monokai .ace_keyword,.ace-monokai .ace_meta.ace_tag,.ace-monokai .ace_storage {color: #F92672}.ace-monokai .ace_punctuation,.ace-monokai .ace_punctuation.ace_tag {color: #fff}.ace-monokai .ace_constant.ace_character,.ace-monokai .ace_constant.ace_language,.ace-monokai .ace_constant.ace_numeric,.ace-monokai .ace_constant.ace_other {color: #AE81FF}.ace-monokai .ace_invalid {color: #F8F8F0;background-color: #F92672}.ace-monokai .ace_invalid.ace_deprecated {color: #F8F8F0;background-color: #AE81FF}.ace-monokai .ace_support.ace_constant,.ace-monokai .ace_support.ace_function {color: #66D9EF}.ace-monokai .ace_fold {background-color: #A6E22E;border-color: #F8F8F2}.ace-monokai .ace_storage.ace_type,.ace-monokai .ace_support.ace_class,.ace-monokai .ace_support.ace_type {font-style: italic;color: #66D9EF}.ace-monokai .ace_entity.ace_name.ace_function,.ace-monokai .ace_entity.ace_other,.ace-monokai .ace_entity.ace_other.ace_attribute-name,.ace-monokai .ace_variable {color: #A6E22E}.ace-monokai .ace_variable.ace_parameter {font-style: italic;color: #FD971F}.ace-monokai .ace_string {color: #E6DB74}.ace-monokai .ace_comment {color: #75715E}.ace-monokai .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y}";
                var n = e("../lib/dom");
                n.importCssString(t.cssText, t.cssClass)
            })), function () {
                window.require(["ace/theme/monokai"], (function (i) {
                    "object" == Object(t["a"])(e) && "object" == ("undefined" === typeof exports ? "undefined" : Object(t["a"])(exports)) && e && (e.exports = i)
                }))
            }()
        }).call(this, i("dd40")(e))
    }, ecf2: function (e, t, i) {
        "use strict";
        var n = i("c523"), s = i.n(n);
        s.a
    }, ed55: function (e, t, i) {
    }, f52e: function (e, t, i) {
        "use strict";
        var n = i("0ea6"), s = i.n(n);
        s.a
    }, fb92: function (e, t, i) {
    }
});