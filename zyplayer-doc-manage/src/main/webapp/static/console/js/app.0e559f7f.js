(function (e) {
    function t(t) {
        for (var a, r, s = t[0], u = t[1], l = t[2], c = 0, f = []; c < s.length; c++) r = s[c], Object.prototype.hasOwnProperty.call(o, r) && o[r] && f.push(o[r][0]), o[r] = 0;
        for (a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
        d && d(t);
        while (f.length) f.shift()();
        return i.push.apply(i, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], a = !0, r = 1; r < n.length; r++) {
                var s = n[r];
                0 !== o[s] && (a = !1)
            }
            a && (i.splice(t--, 1), e = u(u.s = n[0]))
        }
        return e
    }

    var a = {}, r = {app: 0}, o = {app: 0}, i = [];

    function s(e) {
        return u.p + "js/" + ({}[e] || e) + "." + {
            "chunk-0741282a": "225ac580",
            "chunk-2d207ece": "471a6eef",
            "chunk-30126bdc": "0c65330c",
            "chunk-32cc5643": "522aafd7",
            "chunk-35c34f90": "bb1dbae1",
            "chunk-4582ecc6": "34ccd545",
            "chunk-7349f4ef": "84d79223"
        }[e] + ".js"
    }

    function u(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {i: t, l: !1, exports: {}};
        return e[t].call(n.exports, n, n.exports, u), n.l = !0, n.exports
    }

    u.e = function (e) {
        var t = [], n = {
            "chunk-0741282a": 1,
            "chunk-30126bdc": 1,
            "chunk-32cc5643": 1,
            "chunk-35c34f90": 1,
            "chunk-4582ecc6": 1,
            "chunk-7349f4ef": 1
        };
        r[e] ? t.push(r[e]) : 0 !== r[e] && n[e] && t.push(r[e] = new Promise((function (t, n) {
            for (var a = "css/" + ({}[e] || e) + "." + {
                "chunk-0741282a": "cbb897f6",
                "chunk-2d207ece": "31d6cfe0",
                "chunk-30126bdc": "ee6e60f7",
                "chunk-32cc5643": "5a5b2ca1",
                "chunk-35c34f90": "938e4b31",
                "chunk-4582ecc6": "ee6e60f7",
                "chunk-7349f4ef": "be15d6a0"
            }[e] + ".css", o = u.p + a, i = document.getElementsByTagName("link"), s = 0; s < i.length; s++) {
                var l = i[s], c = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (c === a || c === o)) return t()
            }
            var f = document.getElementsByTagName("style");
            for (s = 0; s < f.length; s++) {
                l = f[s], c = l.getAttribute("data-href");
                if (c === a || c === o) return t()
            }
            var d = document.createElement("link");
            d.rel = "stylesheet", d.type = "text/css", d.onload = t, d.onerror = function (t) {
                var a = t && t.target && t.target.src || o,
                    i = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                i.code = "CSS_CHUNK_LOAD_FAILED", i.request = a, delete r[e], d.parentNode.removeChild(d), n(i)
            }, d.href = o;
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(d)
        })).then((function () {
            r[e] = 0
        })));
        var a = o[e];
        if (0 !== a) if (a) t.push(a[2]); else {
            var i = new Promise((function (t, n) {
                a = o[e] = [t, n]
            }));
            t.push(a[2] = i);
            var l, c = document.createElement("script");
            c.charset = "utf-8", c.timeout = 120, u.nc && c.setAttribute("nonce", u.nc), c.src = s(e);
            var f = new Error;
            l = function (t) {
                c.onerror = c.onload = null, clearTimeout(d);
                var n = o[e];
                if (0 !== n) {
                    if (n) {
                        var a = t && ("load" === t.type ? "missing" : t.type), r = t && t.target && t.target.src;
                        f.message = "Loading chunk " + e + " failed.\n(" + a + ": " + r + ")", f.name = "ChunkLoadError", f.type = a, f.request = r, n[1](f)
                    }
                    o[e] = void 0
                }
            };
            var d = setTimeout((function () {
                l({type: "timeout", target: c})
            }), 12e4);
            c.onerror = c.onload = l, document.head.appendChild(c)
        }
        return Promise.all(t)
    }, u.m = e, u.c = a, u.d = function (e, t, n) {
        u.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, u.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, u.t = function (e, t) {
        if (1 & t && (e = u(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (u.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var a in e) u.d(n, a, function (t) {
            return e[t]
        }.bind(null, a));
        return n
    }, u.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return u.d(t, "a", t), t
    }, u.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, u.p = "", u.oe = function (e) {
        throw console.error(e), e
    };
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [], c = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var f = 0; f < l.length; f++) t(l[f]);
    var d = c;
    i.push([0, "chunk-vendors"]), n()
})({
    0: function (e, t, n) {
        e.exports = n("56d7")
    }, "034f": function (e, t, n) {
        "use strict";
        var a = n("85ec"), r = n.n(a);
        r.a
    }, 3099: function (e, t, n) {
        "use strict";
        var a = n("4328"), r = n.n(a),
            o = (n("c975"), n("0d03"), n("d3b7"), n("4d63"), n("ac1f"), n("25f0"), n("466d"), n("bc3a")), i = n.n(o),
            s = n("56d7"), u = i.a.create({
                baseURL: "./",
                timeout: 1e4,
                headers: {"Content-type": "application/x-www-form-urlencoded"},
                withCredentials: !0
            }), l = {"/zyplayer-doc-db/executor/execute": !0, "/zyplayer-doc-db/datasource/test": !0}, c = 0;
        u.interceptors.request.use((function (e) {
            return e.needValidateResult = !0, l[e.url] && (e.needValidateResult = !1), e
        }), (function (e) {
            return console.log(e), Promise.reject(e)
        })), u.interceptors.response.use((function (e) {
            if (e.message) s["default"].$message.error("请求错误：" + e.message); else {
                if (!e.config.needValidateResult || 200 == e.data.errCode) return e.data;
                if (400 == e.data.errCode) {
                    (new Date).getTime() - c > 1e3 && (s["default"].$message.error("请先登录"), c = (new Date).getTime());
                    var t = "", n = window.location.href;
                    if (n.indexOf("?") >= 0) {
                        var a = new RegExp("(^|&)redirect=([^&]*)(&|$)", "i"),
                            r = n.substring(n.indexOf("?") + 1).match(a);
                        null != r && (t = unescape(r[2]))
                    }
                    t = t || encodeURIComponent(window.location.href), s["default"].$router.push({
                        path: "/user/login",
                        query: {redirect: t}
                    })
                } else 402 == e.data.errCode ? s["default"].$router.push("/common/noAuth") : 200 !== e.data.errCode && s["default"].$message.error(e.data.errMsg || "未知错误")
            }
            return Promise.reject("请求错误")
        }), (function (e) {
            return console.log("err" + e), s["default"].$message.info("请求错误：" + e.message), Promise.reject(e)
        }));
        var f = u;
        t["a"] = {
            systemUpgradeInfo: function (e) {
                return f({url: "/system/info/upgrade", method: "post", data: r.a.stringify(e)})
            }, userLogin: function (e) {
                return f({url: "/login", method: "post", data: r.a.stringify(e)})
            }, userLogout: function (e) {
                return f({url: "/logout", method: "post", data: r.a.stringify(e)})
            }, getSelfUserInfo: function (e) {
                return f({url: "/user/info/selfInfo", method: "post", data: r.a.stringify(e)})
            }, selfInfoWithAuth: function (e) {
                return f({url: "/user/info/selfInfoWithAuth", method: "post", data: r.a.stringify(e)})
            }, getUserInfoList: function (e) {
                return f({url: "/user/info/list", method: "post", data: r.a.stringify(e)})
            }, updateUserInfo: function (e) {
                return f({url: "/user/info/update", method: "post", data: r.a.stringify(e)})
            }, deleteUserInfo: function (e) {
                return f({url: "/user/info/delete", method: "post", data: r.a.stringify(e)})
            }, userAuthList: function (e) {
                return f({url: "/user/info/auth/list", method: "post", data: r.a.stringify(e)})
            }, updateUserAuth: function (e) {
                return f({url: "/user/info/auth/update", method: "post", data: r.a.stringify(e)})
            }, resetPassword: function (e) {
                return f({url: "/user/info/resetPassword", method: "post", data: r.a.stringify(e)})
            }
        }
    }, "56d7": function (e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var a = n("2b0e"), r = n("5c96"), o = n.n(r), i = (n("0fae"), function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {attrs: {id: "app"}}, [e.fullscreen ? [n("router-view", {on: {loginSuccess: e.getSelfUserInfo}})] : n("el-container", [n("el-aside", [n("div", {
                    staticStyle: {
                        padding: "10px",
                        height: "100%",
                        "box-sizing": "border-box",
                        background: "#fafafa"
                    }
                }, [n("el-menu", {
                    staticClass: "el-menu-vertical",
                    attrs: {"default-active": "1-4-1", router: !0, collapse: e.isCollapse},
                    on: {open: e.handleOpen, close: e.handleClose}
                }, [n("el-menu-item", {attrs: {index: "/"}}, [n("i", {staticClass: "el-icon-s-home"}), e._v("控制台")]), e.userAuth.userManage ? n("el-submenu", {attrs: {index: "1"}}, [n("template", {slot: "title"}, [n("i", {staticClass: "el-icon-s-platform"}), n("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [e._v("系统管理")])]), n("el-menu-item", {attrs: {index: "/console/userList"}}, [n("i", {staticClass: "el-icon-user-solid"}), e._v("用户管理")])], 2) : e._e()], 1)], 1)]), n("el-container", [n("el-header", [n("span", {staticClass: "header-right-user-name"}, [e._v(e._s(e.userSelfInfo.userName))]), n("el-dropdown", {
                    attrs: {trigger: "click"},
                    on: {command: e.userSettingDropdown}
                }, [n("i", {
                    staticClass: "el-icon-setting",
                    staticStyle: {"margin-right": "15px", "font-size": "16px", cursor: "pointer", color: "#fff"}
                }), n("el-dropdown-menu", {
                    attrs: {slot: "dropdown"},
                    slot: "dropdown"
                }, [n("el-dropdown-item", {attrs: {command: "console"}}, [e._v("控制台")]), n("el-dropdown-item", {
                    attrs: {
                        command: "aboutDoc",
                        divided: ""
                    }
                }, [e._v("关于")]), n("el-dropdown-item", {attrs: {command: "myInfo"}}, [e._v("我的资料")]), n("el-dropdown-item", {attrs: {command: "userSignOut"}}, [e._v("退出登录")])], 1)], 1)], 1), n("el-main", {staticStyle: {padding: "0"}}, [n("router-view")], 1)], 1)], 1), n("el-dialog", {
                    attrs: {
                        title: "关于zyplayer-doc",
                        visible: e.aboutDialogVisible,
                        width: "600px"
                    }, on: {
                        "update:visible": function (t) {
                            e.aboutDialogVisible = t
                        }
                    }
                }, [n("el-form", [n("el-form-item", {attrs: {label: "项目地址："}}, [n("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://gitee.com/zyplayer/zyplayer-doc"
                    }
                }, [e._v("zyplayer-doc")])]), n("el-form-item", {attrs: {label: "开发人员："}}, [n("a", {
                    attrs: {
                        target: "_blank",
                        href: "http://zyplayer.com"
                    }
                }, [e._v("暮光：城中城")])]), e.upgradeInfo.lastVersion ? [n("el-form-item", {attrs: {label: "当前版本："}}, [e._v(e._s(e.upgradeInfo.nowVersion))]), n("el-form-item", {attrs: {label: "最新版本："}}, [e._v(e._s(e.upgradeInfo.lastVersion))]), n("el-form-item", {attrs: {label: "升级地址："}}, [n("a", {
                    attrs: {
                        target: "_blank",
                        href: e.upgradeInfo.upgradeUrl
                    }
                }, [e._v(e._s(e.upgradeInfo.upgradeUrl))])]), n("el-form-item", {attrs: {label: "升级内容："}}, [e._v(e._s(e.upgradeInfo.upgradeContent))])] : e._e(), n("el-form-item", {attrs: {label: ""}}, [e._v(" 欢迎加群讨论，QQ群号：466363173，欢迎提交需求，欢迎使用和加入开发！ ")])], 2)], 1)], 2)
            }), s = [], u = n("3099"), l = {
                data: function () {
                    return {
                        isCollapse: !1,
                        aboutDialogVisible: !1,
                        userSelfInfo: {},
                        userAuth: {userManage: !1},
                        upgradeInfo: {}
                    }
                }, computed: {
                    fullscreen: function () {
                        return this.$store.state.global.fullscreen
                    }
                }, mounted: function () {
                    this.getSelfUserInfo(), this.checkSystemUpgrade()
                }, methods: {
                    handleOpen: function (e, t) {
                        console.log(e, t)
                    }, handleClose: function (e, t) {
                        console.log(e, t)
                    }, userSettingDropdown: function (e) {
                        console.log("command:" + e), "userSignOut" == e ? this.userSignOut() : "aboutDoc" == e ? this.aboutDialogVisible = !0 : "myInfo" == e ? this.$router.push({path: "/user/myInfo"}) : "console" == e ? window.location = "./" : this.$message.warn("功能暂未开放")
                    }, userSignOut: function () {
                        u["a"].userLogout().then((function () {
                            location.reload()
                        })).catch((function (e) {
                            console.log("退出登录失败", e)
                        }))
                    }, getSelfUserInfo: function () {
                        var e = this;
                        u["a"].selfInfoWithAuth().then((function (t) {
                            var n = t.data || {};
                            e.userSelfInfo = n.userInfo || {}, e.userAuth = n.userAuth || {}
                        })).catch((function (e) {
                            console.log("获取用户信息失败", e)
                        }))
                    }, checkSystemUpgrade: function () {
                        var e = this;
                        u["a"].systemUpgradeInfo({}).then((function (t) {
                            t.data && (e.upgradeInfo = t.data, console.log("zyplayer-doc发现新版本：\n升级地址：" + t.data.upgradeUrl + "\n当前版本：" + t.data.nowVersion + "\n最新版本：" + t.data.lastVersion + "\n升级内容：" + t.data.upgradeContent))
                        }))
                    }
                }
            }, c = l, f = (n("034f"), n("2877")), d = Object(f["a"])(c, i, s, !1, null, null, null), h = d.exports,
            p = n("8c4f"), m = (n("d3b7"), function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", [n("el-tabs", {
                    staticStyle: {padding: "5px 10px 0"},
                    attrs: {type: "card", closable: ""},
                    on: {"tab-click": e.changePage, "tab-remove": e.removePageTab},
                    model: {
                        value: e.activePage, callback: function (t) {
                            e.activePage = t
                        }, expression: "activePage"
                    }
                }, e._l(e.pageList, (function (t) {
                    return n("el-tab-pane", {attrs: {label: e.pageTabNameMap[t.fullPath] || t.name, name: t.fullPath}})
                })), 1), n("keep-alive", [n("router-view", {
                    key: e.$route.fullPath,
                    on: {initLoadDataList: e.initLoadDataList, loadDatasourceList: e.loadDatasourceList}
                })], 1)], 1)
            }), g = [], b = (n("4de4"), n("c975"), n("b0c0"), {
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
            }), v = b, y = Object(f["a"])(v, m, g, !1, null, "a596d90e", null), k = y.exports,
            w = [{path: "/", redirect: "/home"}, {
                path: "/user/login", name: "系统登录", component: function () {
                    return n.e("chunk-0741282a").then(n.bind(null, "ac2a"))
                }, meta: {fullscreen: !0}
            }, {
                path: "/", name: "页面管理", component: k, children: [{
                    path: "/home", name: "控制台", component: function () {
                        return n.e("chunk-7349f4ef").then(n.bind(null, "b3d7"))
                    }
                }]
            }, {
                path: "/user",
                name: "用户管理",
                component: k,
                children: [{
                    path: "myInfo", name: "我的信息", component: function () {
                        return n.e("chunk-32cc5643").then(n.bind(null, "408e"))
                    }
                }]
            }, {
                path: "/console",
                name: "系统管理",
                component: k,
                children: [{
                    path: "userList", name: "用户管理", component: function () {
                        return n.e("chunk-35c34f90").then(n.bind(null, "b9bf"))
                    }
                }, {
                    path: "roleList", name: "权限管理", component: function () {
                        return n.e("chunk-30126bdc").then(n.bind(null, "0b39"))
                    }
                }, {
                    path: "authList", name: "角色列表", component: function () {
                        return n.e("chunk-4582ecc6").then(n.bind(null, "97ae"))
                    }
                }]
            }, {
                path: "/common",
                name: "",
                component: k,
                children: [{
                    path: "noAuth", name: "没有权限", component: function () {
                        return n.e("chunk-2d207ece").then(n.bind(null, "a339"))
                    }
                }]
            }], L = w, P = n("2f62"), _ = {
                namespaced: !0,
                state: {pageTabNameMap: {}, fullscreen: !1},
                getters: {
                    getPageTabNameMap: function (e) {
                        return e.pageTabNameMap
                    }
                },
                mutations: {
                    addTableName: function (e, t) {
                        var n = Object.assign({}, e.pageTabNameMap);
                        n[t.key] = t.val, e.pageTabNameMap = n
                    }, setFullscreen: function (e, t) {
                        e.fullscreen = t
                    }
                }
            };
        a["default"].use(P["a"]);
        var I = new P["a"].Store({modules: {global: _}}), S = n("bc3a"), x = n.n(S), C = n("a7fe"), O = n.n(C),
            $ = n("2315"), T = n.n($);
        n("f1e9");
        a["default"].use(o.a), a["default"].use(p["a"]), a["default"].use(O.a, x.a), a["default"].use(T.a), a["default"].prototype.$store = I;
        var D = new p["a"]({routes: L});
        D.beforeEach((function (e, t, n) {
            e.meta.title && (document.title = e.meta.title), I.commit("global/setFullscreen", !!e.meta.fullscreen), n()
        }));
        var U = new a["default"]({
            el: "#app", router: D, render: function (e) {
                return e(h)
            }
        });
        t["default"] = U
    }, "85ec": function (e, t, n) {
    }
});