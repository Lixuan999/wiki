(function (e) {
    function t(t) {
        for (var n, o, s = t[0], c = t[1], l = t[2], u = 0, p = []; u < s.length; u++) o = s[u], Object.prototype.hasOwnProperty.call(r, o) && r[o] && p.push(r[o][0]), r[o] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
        d && d(t);
        while (p.length) p.shift()();
        return i.push.apply(i, l || []), a()
    }

    function a() {
        for (var e, t = 0; t < i.length; t++) {
            for (var a = i[t], n = !0, o = 1; o < a.length; o++) {
                var s = a[o];
                0 !== r[s] && (n = !1)
            }
            n && (i.splice(t--, 1), e = c(c.s = a[0]))
        }
        return e
    }

    var n = {}, o = {app: 0}, r = {app: 0}, i = [];

    function s(e) {
        return c.p + "js/" + ({}[e] || e) + "." + {
            "chunk-2d207ece": "20edf665",
            "chunk-32cc5643": "fcf57a84",
            "chunk-34407190": "69ced152",
            "chunk-49c0ba36": "9cc34b7e",
            "chunk-4cdf76bb": "8e528c95",
            "chunk-1ca8e011": "09e03fc5",
            "chunk-213012a0": "535d4abf",
            "chunk-55738a8b": "cc569cb9",
            "chunk-2e5083a6": "8ac3bd20",
            "chunk-5544a2b8": "6714a421",
            "chunk-578c28a7": "6a10864d"
        }[e] + ".js"
    }

    function c(t) {
        if (n[t]) return n[t].exports;
        var a = n[t] = {i: t, l: !1, exports: {}};
        return e[t].call(a.exports, a, a.exports, c), a.l = !0, a.exports
    }

    c.e = function (e) {
        var t = [], a = {
            "chunk-32cc5643": 1,
            "chunk-34407190": 1,
            "chunk-49c0ba36": 1,
            "chunk-4cdf76bb": 1,
            "chunk-1ca8e011": 1,
            "chunk-213012a0": 1,
            "chunk-55738a8b": 1,
            "chunk-2e5083a6": 1,
            "chunk-5544a2b8": 1,
            "chunk-578c28a7": 1
        };
        o[e] ? t.push(o[e]) : 0 !== o[e] && a[e] && t.push(o[e] = new Promise((function (t, a) {
            for (var n = "css/" + ({}[e] || e) + "." + {
                "chunk-2d207ece": "31d6cfe0",
                "chunk-32cc5643": "5a5b2ca1",
                "chunk-34407190": "57bbfb51",
                "chunk-49c0ba36": "ec6236ec",
                "chunk-4cdf76bb": "bb45a557",
                "chunk-1ca8e011": "d9272d9c",
                "chunk-213012a0": "46d1a39a",
                "chunk-55738a8b": "a38bf186",
                "chunk-2e5083a6": "d0c31182",
                "chunk-5544a2b8": "b3d0f39b",
                "chunk-578c28a7": "83c6d32d"
            }[e] + ".css", r = c.p + n, i = document.getElementsByTagName("link"), s = 0; s < i.length; s++) {
                var l = i[s], u = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (u === n || u === r)) return t()
            }
            var p = document.getElementsByTagName("style");
            for (s = 0; s < p.length; s++) {
                l = p[s], u = l.getAttribute("data-href");
                if (u === n || u === r) return t()
            }
            var d = document.createElement("link");
            d.rel = "stylesheet", d.type = "text/css", d.onload = t, d.onerror = function (t) {
                var n = t && t.target && t.target.src || r,
                    i = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                i.code = "CSS_CHUNK_LOAD_FAILED", i.request = n, delete o[e], d.parentNode.removeChild(d), a(i)
            }, d.href = r;
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(d)
        })).then((function () {
            o[e] = 0
        })));
        var n = r[e];
        if (0 !== n) if (n) t.push(n[2]); else {
            var i = new Promise((function (t, a) {
                n = r[e] = [t, a]
            }));
            t.push(n[2] = i);
            var l, u = document.createElement("script");
            u.charset = "utf-8", u.timeout = 120, c.nc && u.setAttribute("nonce", c.nc), u.src = s(e);
            var p = new Error;
            l = function (t) {
                u.onerror = u.onload = null, clearTimeout(d);
                var a = r[e];
                if (0 !== a) {
                    if (a) {
                        var n = t && ("load" === t.type ? "missing" : t.type), o = t && t.target && t.target.src;
                        p.message = "Loading chunk " + e + " failed.\n(" + n + ": " + o + ")", p.name = "ChunkLoadError", p.type = n, p.request = o, a[1](p)
                    }
                    r[e] = void 0
                }
            };
            var d = setTimeout((function () {
                l({type: "timeout", target: u})
            }), 12e4);
            u.onerror = u.onload = l, document.head.appendChild(u)
        }
        return Promise.all(t)
    }, c.m = e, c.c = n, c.d = function (e, t, a) {
        c.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: a})
    }, c.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, c.t = function (e, t) {
        if (1 & t && (e = c(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (c.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var n in e) c.d(a, n, function (t) {
            return e[t]
        }.bind(null, n));
        return a
    }, c.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return c.d(t, "a", t), t
    }, c.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, c.p = "", c.oe = function (e) {
        throw console.error(e), e
    };
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [], u = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var p = 0; p < l.length; p++) t(l[p]);
    var d = u;
    i.push([0, "chunk-vendors"]), a()
})({
    0: function (e, t, a) {
        e.exports = a("56d7")
    }, "034f": function (e, t, a) {
        "use strict";
        var n = a("85ec"), o = a.n(n);
        o.a
    }, "0a79": function (e, t, a) {
        "use strict";
        var n = a("4328"), o = a.n(n), r = a("d978");
        t["a"] = {
            pageUpdate: function (e) {
                return Object(r["a"])({url: "/zyplayer-doc-wiki/page/update", method: "post", data: o.a.stringify(e)})
            }, pageChangeParent: function (e) {
                return Object(r["a"])({
                    url: "/zyplayer-doc-wiki/page/changeParent",
                    method: "post",
                    data: o.a.stringify(e)
                })
            }, pageList: function (e) {
                return Object(r["a"])({url: "/zyplayer-doc-wiki/page/list", method: "post", data: o.a.stringify(e)})
            }, updatePage: function (e) {
                return Object(r["a"])({url: "/zyplayer-doc-wiki/page/update", method: "post", data: o.a.stringify(e)})
            }, pageDetail: function (e) {
                return Object(r["a"])({url: "/zyplayer-doc-wiki/page/detail", method: "post", data: o.a.stringify(e)})
            }, pageDelete: function (e) {
                return Object(r["a"])({url: "/zyplayer-doc-wiki/page/delete", method: "post", data: o.a.stringify(e)})
            }, pageHistoryList: function (e) {
                return Object(r["a"])({
                    url: "/zyplayer-doc-wiki/page/history/list",
                    method: "post",
                    data: o.a.stringify(e)
                })
            }, pageHistoryDetail: function (e) {
                return Object(r["a"])({
                    url: "/zyplayer-doc-wiki/page/history/detail",
                    method: "post",
                    data: o.a.stringify(e)
                })
            }, pageNews: function (e) {
                return Object(r["a"])({url: "/zyplayer-doc-wiki/page/news", method: "post", data: o.a.stringify(e)})
            }, pageSearchByEs: function (e) {
                return Object(r["a"])({
                    url: "/zyplayer-doc-wiki/page/searchByEs",
                    method: "post",
                    data: o.a.stringify(e)
                })
            }, pageLock: function (e) {
                return Object(r["a"])({url: "/zyplayer-doc-wiki/page/lock", method: "post", data: o.a.stringify(e)})
            }, pageUnlock: function (e) {
                return Object(r["a"])({url: "/zyplayer-doc-wiki/page/unlock", method: "post", data: o.a.stringify(e)})
            }, spaceList: function (e) {
                return Object(r["a"])({url: "/zyplayer-doc-wiki/space/list", method: "post", data: o.a.stringify(e)})
            }, updateSpace: function (e) {
                return Object(r["a"])({url: "/zyplayer-doc-wiki/space/update", method: "post", data: o.a.stringify(e)})
            }, getPageUserAuthList: function (e) {
                return Object(r["a"])({
                    url: "/zyplayer-doc-wiki/page/auth/list",
                    method: "post",
                    data: o.a.stringify(e)
                })
            }, assignPageUserAuth: function (e) {
                return Object(r["a"])({
                    url: "/zyplayer-doc-wiki/page/auth/assign",
                    method: "post",
                    data: o.a.stringify(e)
                })
            }, deletePageFile: function (e) {
                return Object(r["a"])({
                    url: "/zyplayer-doc-wiki/page/file/delete",
                    method: "post",
                    data: o.a.stringify(e)
                })
            }, pageCommentList: function (e) {
                return Object(r["a"])({
                    url: "/zyplayer-doc-wiki/page/comment/list",
                    method: "post",
                    data: o.a.stringify(e)
                })
            }, updatePageComment: function (e) {
                return Object(r["a"])({
                    url: "/zyplayer-doc-wiki/page/comment/update",
                    method: "post",
                    data: o.a.stringify(e)
                })
            }, deletePageComment: function (e) {
                return Object(r["a"])({
                    url: "/zyplayer-doc-wiki/page/comment/delete",
                    method: "post",
                    data: o.a.stringify(e)
                })
            }, pageZanList: function (e) {
                return Object(r["a"])({url: "/zyplayer-doc-wiki/page/zan/list", method: "post", data: o.a.stringify(e)})
            }, updatePageZan: function (e) {
                return Object(r["a"])({
                    url: "/zyplayer-doc-wiki/page/zan/update",
                    method: "post",
                    data: o.a.stringify(e)
                })
            }, openPageDetail: function (e) {
                return Object(r["a"])({
                    url: "/zyplayer-doc-wiki/open-api/page/detail",
                    method: "post",
                    data: o.a.stringify(e)
                })
            }, openPageList: function (e) {
                return Object(r["a"])({
                    url: "/zyplayer-doc-wiki/open-api/page/list",
                    method: "post",
                    data: o.a.stringify(e)
                })
            }, openSpaceInfo: function (e) {
                return Object(r["a"])({
                    url: "/zyplayer-doc-wiki/open-api/space/info",
                    method: "post",
                    data: o.a.stringify(e)
                })
            }, openPageNews: function (e) {
                return Object(r["a"])({
                    url: "/zyplayer-doc-wiki/open-api/page/news",
                    method: "post",
                    data: o.a.stringify(e)
                })
            }, xxxxxxxxxxxx: function (e) {
                return Object(r["a"])({url: "update", method: "post", data: o.a.stringify(e)})
            }
        }
    }, "149b": function (e, t, a) {
        "use strict";
        var n = a("197f"), o = a.n(n);
        o.a
    }, "197f": function (e, t, a) {
    }, 2750: function (e, t, a) {
        "use strict";
        var n = a("945a"), o = a.n(n);
        o.a
    }, "56d7": function (e, t, a) {
        "use strict";
        a.r(t);
        a("b0c0"), a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var n = a("2b0e"), o = a("5c96"), r = a.n(o), i = (a("0fae"), function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {attrs: {id: "app"}}, [a("router-view")], 1)
            }), s = [], c = {
                name: "app", components: {}, data: function () {
                    return {}
                }, methods: {}
            }, l = c, u = (a("034f"), a("2877")), p = Object(u["a"])(l, i, s, !1, null, null, null), d = p.exports,
            f = a("8c4f"), h = (a("d3b7"), function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "global-layout-vue"}, [a("el-container", [a("el-aside", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.leftCollapse,
                        expression: "leftCollapse"
                    }]
                }, [a("div", {
                    staticStyle: {
                        padding: "10px",
                        height: "100%",
                        "box-sizing": "border-box",
                        background: "#fafafa"
                    }
                }, [a("div", {staticStyle: {"margin-bottom": "10px"}}, [a("el-select", {
                    staticStyle: {width: "100%"},
                    attrs: {value: e.choiceSpace, filterable: "", placeholder: "选择空间"},
                    on: {change: e.spaceChangeEvents}
                }, [a("el-option-group", {attrs: {label: ""}}, [a("el-option", {
                    key: "0",
                    attrs: {label: "创建空间", value: "0"}
                }), a("el-option", {
                    key: "-1",
                    attrs: {label: "空间管理", value: "-1"}
                })], 1), a("el-option-group", {attrs: {label: ""}}, e._l(e.spaceOptions, (function (e) {
                    return a("el-option", {key: e.value, attrs: {label: e.label, value: e.value}})
                })), 1)], 1)], 1), a("div", {attrs: {align: "center"}}, [a("el-button", {
                    staticStyle: {width: "100%"},
                    attrs: {icon: "el-icon-plus"},
                    on: {click: e.createWiki}
                }, [e._v("创建文档")])], 1), a("el-input", {
                    staticStyle: {margin: "10px 0"},
                    attrs: {placeholder: "搜索文档"},
                    on: {input: e.searchByKeywords},
                    nativeOn: {
                        keyup: function (t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.searchByKeywords(t)
                        }
                    },
                    model: {
                        value: e.searchKeywords, callback: function (t) {
                            e.searchKeywords = t
                        }, expression: "searchKeywords"
                    }
                }, [a("el-button", {
                    attrs: {slot: "append", icon: "el-icon-search"},
                    on: {click: e.searchByKeywordsNewPage},
                    slot: "append"
                })], 1), a("div", {
                    staticStyle: {
                        overflow: "auto",
                        "padding-bottom": "30px"
                    }
                }, [a("el-tree", {
                    ref: "wikiPageTree",
                    staticStyle: {"background-color": "#fafafa"},
                    attrs: {
                        props: e.defaultProps,
                        data: e.wikiPageList,
                        draggable: "",
                        "filter-node-method": e.filterPageNode,
                        "highlight-current": "",
                        "expand-on-click-node": !1,
                        "default-expanded-keys": e.wikiPageExpandedKeys,
                        "node-key": "id"
                    },
                    on: {"node-click": e.handleNodeClick, "node-expand": e.handleNodeExpand, "node-drop": e.handlePageDrop}
                })], 1)], 1)]), a("el-container", {staticStyle: {"border-left": "1px solid #dcdfe6"}}, [a("el-header", [a("i", {
                    staticClass: "el-icon-menu icon-collapse",
                    on: {
                        click: function (t) {
                            e.leftCollapse = !e.leftCollapse
                        }
                    }
                }), a("span", {staticClass: "header-right-user-name"}, [e._v(e._s(e.userSelfInfo.userName))]), a("el-popover", {
                    attrs: {
                        placement: "bottom",
                        width: "600",
                        trigger: "click"
                    }, model: {
                        value: e.userMessagePopVisible, callback: function (t) {
                            e.userMessagePopVisible = t
                        }, expression: "userMessagePopVisible"
                    }
                }, [a("el-badge", {
                    staticStyle: {"line-height": "20px", margin: "0 15px"},
                    attrs: {slot: "reference", "is-dot": e.haveNotReadUserMessage},
                    slot: "reference"
                }, [a("i", {
                    staticClass: "el-icon-bell head-icon",
                    staticStyle: {"margin-right": "0"},
                    on: {click: e.loadUserMessageIfPopVisible}
                })]), a("div", {staticStyle: {"margin-bottom": "10px"}}, [a("span", {
                    staticStyle: {
                        "font-size": "14px",
                        "font-weight": "bold"
                    }
                }, [e._v("通知")]), e.haveNotReadUserMessage ? a("el-link", {
                    staticStyle: {float: "right"},
                    attrs: {type: "primary", icon: "el-icon-check"},
                    on: {click: e.readAllUserMessage}
                }, [e._v("本页标记已读")]) : e._e()], 1), a("div", {staticClass: "header-user-message"}, [a("el-table", {
                    staticStyle: {
                        width: "100%",
                        "margin-bottom": "5px"
                    }, attrs: {data: e.userMessageList, border: "", "max-height": "500", size: "mini"}
                }, [a("el-table-column", {
                    attrs: {
                        prop: "operatorUserName",
                        label: "操作人",
                        width: "100px"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "creationTime",
                        label: "操作时间",
                        width: "140px"
                    }
                }), a("el-table-column", {
                    attrs: {label: "内容"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [e._v(" " + e._s(t.row.msgContent) + " "), a("el-badge", {
                                staticStyle: {
                                    "line-height": "10px",
                                    "padding-right": "5px"
                                }, attrs: {slot: "reference", "is-dot": 0 == t.row.msgStatus}, slot: "reference"
                            }, [a("el-link", {
                                attrs: {type: "primary"}, on: {
                                    click: function (a) {
                                        return e.showUserMessage(t.row)
                                    }
                                }
                            }, [e._v("查看>")])], 1)]
                        }
                    }])
                })], 1), a("div", {staticClass: "page-info-box"}, [a("el-pagination", {
                    attrs: {
                        "page-size": e.userMsgParam.pageSize,
                        "current-page": e.userMsgParam.pageNum,
                        layout: "prev, pager, next, total",
                        total: e.userMsgTotalCountl
                    }, on: {"current-change": e.handleCurrentChange}
                })], 1)], 1)], 1), a("el-dropdown", {
                    attrs: {trigger: "click"},
                    on: {command: e.userSettingDropdown}
                }, [a("i", {staticClass: "el-icon-setting head-icon"}), a("el-dropdown-menu", {
                    attrs: {slot: "dropdown"},
                    slot: "dropdown"
                }, [a("el-dropdown-item", {attrs: {command: "console"}}, [e._v("控制台")]), a("el-dropdown-item", {
                    attrs: {
                        command: "aboutDoc",
                        divided: ""
                    }
                }, [e._v("关于")]), a("el-dropdown-item", {attrs: {command: "myInfo"}}, [e._v("我的资料")]), a("el-dropdown-item", {attrs: {command: "userSignOut"}}, [e._v("退出登录")])], 1)], 1)], 1), a("el-main", {staticStyle: {padding: "0"}}, [a("router-view", {
                    attrs: {
                        spaceId: e.choiceSpace,
                        spaceInfo: e.getSpaceInfo(e.choiceSpace)
                    },
                    on: {
                        loadPageList: e.loadPageList,
                        changeExpandedKeys: e.changeWikiPageExpandedKeys,
                        switchSpace: e.switchSpacePage
                    }
                })], 1)], 1)], 1), a("el-dialog", {
                    attrs: {
                        title: "创建空间",
                        visible: e.newSpaceDialogVisible,
                        width: "600px",
                        "close-on-click-modal": !1
                    }, on: {
                        "update:visible": function (t) {
                            e.newSpaceDialogVisible = t
                        }
                    }
                }, [a("el-form", {
                    ref: "newSpaceForm",
                    attrs: {"label-width": "100px", model: e.newSpaceForm, rules: e.newSpaceFormRules}
                }, [a("el-form-item", {
                    attrs: {
                        label: "空间名：",
                        prop: "name"
                    }
                }, [a("el-input", {
                    model: {
                        value: e.newSpaceForm.name, callback: function (t) {
                            e.$set(e.newSpaceForm, "name", t)
                        }, expression: "newSpaceForm.name"
                    }
                })], 1), a("el-form-item", {
                    attrs: {
                        label: "空间描述：",
                        prop: "spaceExplain"
                    }
                }, [a("el-input", {
                    model: {
                        value: e.newSpaceForm.spaceExplain, callback: function (t) {
                            e.$set(e.newSpaceForm, "spaceExplain", t)
                        }, expression: "newSpaceForm.spaceExplain"
                    }
                })], 1), a("el-form-item", {
                    attrs: {
                        label: "成员组：",
                        prop: "userGroup"
                    }
                }, [a("el-input", {
                    model: {
                        value: e.newSpaceForm.userGroup, callback: function (t) {
                            e.$set(e.newSpaceForm, "userGroup", t)
                        }, expression: "newSpaceForm.userGroup"
                    }
                })], 1), a("el-form-item", {attrs: {label: "空间开放："}}, [a("el-switch", {
                    attrs: {
                        "inactive-text": "需要登录",
                        "inactive-value": 0,
                        "active-text": "开放访问",
                        "active-value": 1
                    }, model: {
                        value: e.newSpaceForm.openDoc, callback: function (t) {
                            e.$set(e.newSpaceForm, "openDoc", t)
                        }, expression: "newSpaceForm.openDoc"
                    }
                })], 1), a("el-form-item", {attrs: {label: "目录加载："}}, [a("el-switch", {
                    attrs: {
                        "inactive-text": "预先加载",
                        "inactive-value": 0,
                        "active-text": "延迟加载",
                        "active-value": 1
                    }, model: {
                        value: e.newSpaceForm.treeLazyLoad, callback: function (t) {
                            e.$set(e.newSpaceForm, "treeLazyLoad", t)
                        }, expression: "newSpaceForm.treeLazyLoad"
                    }
                })], 1), a("el-form-item", {attrs: {label: "空间类型："}}, [a("el-select", {
                    staticStyle: {width: "100%"},
                    attrs: {filterable: "", placeholder: "选择类型"},
                    model: {
                        value: e.newSpaceForm.type, callback: function (t) {
                            e.$set(e.newSpaceForm, "type", t)
                        }, expression: "newSpaceForm.type"
                    }
                }, [a("el-option", {
                    key: 1,
                    attrs: {label: "公共空间", value: 1}
                }, [a("span", {staticStyle: {float: "left"}}, [e._v("公共空间")]), a("span", {
                    staticStyle: {
                        float: "right",
                        color: "#8492a6",
                        "font-size": "13px"
                    }
                }, [e._v("属于公共，登录用户可访问、编辑")])]), a("el-option", {
                    key: 2,
                    attrs: {label: "个人空间", value: 2}
                }, [a("span", {staticStyle: {float: "left"}}, [e._v("个人空间")]), a("span", {
                    staticStyle: {
                        float: "right",
                        color: "#8492a6",
                        "font-size": "13px"
                    }
                }, [e._v("属于个人，所有登录用户可访问")])]), a("el-option", {
                    key: 3,
                    attrs: {label: "隐私空间", value: 3}
                }, [a("span", {staticStyle: {float: "left"}}, [e._v("隐私空间")]), a("span", {
                    staticStyle: {
                        float: "right",
                        color: "#8492a6",
                        "font-size": "13px"
                    }
                }, [e._v("属于个人，仅创建者和组内成员可访问")])])], 1)], 1), a("el-form-item", [e.newSpaceForm.id > 0 ? a("el-button", {
                    attrs: {type: "primary"},
                    on: {
                        click: function (t) {
                            return e.onNewSpaceSubmit("newSpaceForm")
                        }
                    }
                }, [e._v("保存修改")]) : a("el-button", {
                    attrs: {type: "primary"}, on: {
                        click: function (t) {
                            return e.onNewSpaceSubmit("newSpaceForm")
                        }
                    }
                }, [e._v("立即创建")]), a("el-button", {on: {click: e.onNewSpaceCancel}}, [e._v("取消")])], 1)], 1)], 1), a("el-dialog", {
                    attrs: {
                        title: "管理空间",
                        visible: e.manageSpaceDialogVisible,
                        "close-on-click-modal": !1,
                        width: "80%"
                    }, on: {
                        "update:visible": function (t) {
                            e.manageSpaceDialogVisible = t
                        }
                    }
                }, [a("el-table", {
                    staticStyle: {width: "100%", "margin-bottom": "5px"},
                    attrs: {data: e.spaceList, border: "", "max-height": "500"}
                }, [a("el-table-column", {
                    attrs: {
                        prop: "id",
                        label: "ID",
                        width: "60"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "name",
                        label: "名字"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "spaceExplain",
                        label: "说明"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "userGroup",
                        label: "内部成员"
                    }
                }), a("el-table-column", {
                    attrs: {label: "开放地址"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [1 == t.row.openDoc ? a("el-button", {
                                attrs: {type: "text"}, on: {
                                    click: function (a) {
                                        return e.showOpenSpace(t.row.uuid)
                                    }
                                }
                            }, [e._v(e._s(t.row.name))]) : a("span", [e._v("暂未开放")])]
                        }
                    }])
                }), a("el-table-column", {
                    attrs: {
                        prop: "createUserName",
                        label: "创建人"
                    }
                }), a("el-table-column", {
                    attrs: {
                        prop: "createTime",
                        label: "创建时间"
                    }
                }), a("el-table-column", {
                    attrs: {label: "操作"}, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [a("el-button", {
                                attrs: {size: "small", type: "primary"}, on: {
                                    click: function (a) {
                                        return e.editSpaceInfo(t.row)
                                    }
                                }
                            }, [e._v("编辑")]), a("el-button", {
                                attrs: {size: "small", type: "danger"},
                                on: {
                                    click: function (a) {
                                        return e.deleteSpaceInfo(t.row)
                                    }
                                }
                            }, [e._v("删除")])]
                        }
                    }])
                })], 1)], 1), a("el-dialog", {
                    attrs: {
                        title: "关于zyplayer-doc-wiki",
                        visible: e.aboutDialogVisible,
                        width: "600px"
                    }, on: {
                        "update:visible": function (t) {
                            e.aboutDialogVisible = t
                        }
                    }
                }, [a("el-form", [a("el-form-item", {attrs: {label: "开源地址："}}, [a("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://gitee.com/zyplayer/zyplayer-doc"
                    }
                }, [e._v("zyplayer-doc")])]), a("el-form-item", {attrs: {label: "开发人员："}}, [a("a", {
                    attrs: {
                        target: "_blank",
                        href: "http://zyplayer.com"
                    }
                }, [e._v("暮光：城中城")])]), e.upgradeInfo.lastVersion ? [a("el-form-item", {attrs: {label: "当前版本："}}, [e._v(e._s(e.upgradeInfo.nowVersion) + "、最新版本：" + e._s(e.upgradeInfo.lastVersion) + "，"), a("a", {
                    attrs: {
                        target: "_blank",
                        href: e.upgradeInfo.upgradeUrl
                    }
                }, [e._v("去升级")])]), a("el-form-item", {attrs: {label: "升级内容："}}, [e._v(e._s(e.upgradeInfo.upgradeContent))])] : e._e(), a("el-form-item", {attrs: {label: ""}}, [e._v(" zyplayer-doc是一款开源的在线文档工具，现有WIKI文档、数据库文档、swagger文档、dubbo文档、ElasticSearch文档等，不止文档。期待与你一起来迭代完善，欢迎加群讨论，QQ群号：466363173 ")])], 2)], 1)], 1)
            }), g = [],
            m = (a("4de4"), a("4160"), a("c975"), a("a15b"), a("4ec9"), a("e25e"), a("3ca3"), a("159b"), a("ddb0"), a("9f03")),
            y = a("0a79"), b = {
                data: function () {
                    return {
                        leftCollapse: !0,
                        aboutDialogVisible: !1,
                        rightContentLoading: !1,
                        pathIndex: [],
                        defaultProps: {children: "children", label: "name"},
                        spaceOptions: [],
                        spaceList: [],
                        choiceSpace: "",
                        nowSpaceShow: {},
                        newSpaceDialogVisible: !1,
                        manageSpaceDialogVisible: !1,
                        newSpaceForm: {
                            id: "",
                            name: "",
                            spaceExplain: "",
                            userGroup: "",
                            treeLazyLoad: 0,
                            openDoc: 0,
                            uuid: "",
                            type: 1
                        },
                        newSpaceFormRules: {
                            name: [{required: !0, message: "请输入空间名", trigger: "blur"}, {
                                min: 2,
                                max: 25,
                                message: "长度在 2 到 25 个字符",
                                trigger: "blur"
                            }]
                        },
                        nowPageId: "",
                        treePathDataMap: new Map,
                        searchKeywords: "",
                        wikiPageList: [],
                        wikiPage: {},
                        wikiPageExpandedKeys: [],
                        userSelfInfo: {},
                        upgradeInfo: {},
                        userMessageList: [],
                        haveNotReadUserMessage: !1,
                        userMessagePopVisible: !1,
                        userMsgTotalCount: 0,
                        userMsgParam: {sysType: 2, pageNum: 1, pageSize: 20}
                    }
                }, computed: {}, mounted: function () {
                    this.loadSpaceList(), this.loadUserMessageList(), this.getSelfUserInfo(), this.checkSystemUpgrade()
                }, methods: {
                    loadPageList: function (e) {
                        e = e || {}, this.doGetPageList(e.parentId, e.node)
                    }, createWiki: function () {
                        this.choiceSpace > 0 ? this.$router.push({
                            path: "/page/edit",
                            query: {parentId: this.nowPageId}
                        }) : this.$message.warning("请先选择或创建空间")
                    }, changeWikiPageExpandedKeys: function (e) {
                        this.wikiPageExpandedKeys = [e]
                    }, searchByKeywords: function () {
                        this.$refs.wikiPageTree.filter(this.searchKeywords)
                    }, searchByKeywordsNewPage: function () {
                        var e = this.$router.resolve({path: "/page/search", query: {keywords: this.searchKeywords}});
                        window.open(e.href, "_blank")
                    }, handleNodeClick: function (e) {
                        console.log("点击节点：", e), this.nowPageId = e.id, this.$router.push({
                            path: "/page/show",
                            query: {pageId: e.id}
                        })
                    }, handleNodeExpand: function (e) {
                        e.children.length > 0 && e.children[0].needLoad && (console.log("加载节点：", e), this.doGetPageList(e.id, e))
                    }, handlePageDrop: function (e, t, a, n) {
                        var o = this;
                        console.log("tree drop: ", e.data, t.data, a);
                        var r = {id: e.data.id, parentId: t.data.parentId};
                        "inner" == a ? r.parentId = t.data.id : "before" == a ? r.beforeSeq = t.data.seqNo : "after" == a && (r.afterSeq = t.data.seqNo), y["a"].pageChangeParent(r).then((function (e) {
                            o.doGetPageList(null)
                        }))
                    }, loadUserMessageIfPopVisible: function () {
                        this.userMessagePopVisible || this.loadUserMessageList()
                    }, loadUserMessageList: function () {
                        var e = this;
                        m["a"].getUserMessageList(this.userMsgParam).then((function (t) {
                            e.userMessageList = t.data || [], e.userMsgTotalCount = t.total || 0, e.haveNotReadUserMessage = e.userMessageList.filter((function (e) {
                                return 0 == e.msgStatus
                            })).length > 0
                        }))
                    }, showUserMessage: function (e) {
                        var t = this;
                        0 == e.msgStatus && m["a"].readUserMessage({ids: e.id}).then((function () {
                            t.loadUserMessageList()
                        })), e.msgType >= 2 && e.msgType <= 12 && (this.$router.push({
                            path: "/page/show",
                            query: {pageId: e.dataId}
                        }), this.userMessagePopVisible = !1)
                    }, readAllUserMessage: function () {
                        var e = this, t = [];
                        this.userMessageList.filter((function (e) {
                            return 0 == e.msgStatus
                        })).forEach((function (e) {
                            t.push(e.id)
                        })), t.length <= 0 || m["a"].readUserMessage({ids: t.join(",")}).then((function () {
                            e.$message.success("标记成功"), e.loadUserMessageList()
                        }))
                    }, handleCurrentChange: function (e) {
                        this.userMsgParam.pageNum = e, this.loadUserMessageList()
                    }, filterPageNode: function (e, t) {
                        if (!e || !t.name) return !0;
                        var a = t.name.toLowerCase();
                        return -1 !== a.indexOf(e.toLowerCase())
                    }, showOpenSpace: function (e) {
                        var t = this.$router.resolve({path: "/page/share/home", query: {space: e}});
                        window.open(t.href, "_blank")
                    }, editSpaceInfo: function (e) {
                        this.newSpaceForm = {
                            id: e.id,
                            name: e.name,
                            spaceExplain: e.spaceExplain,
                            userGroup: e.userGroup,
                            treeLazyLoad: e.treeLazyLoad,
                            openDoc: e.openDoc,
                            type: e.type
                        }, this.newSpaceDialogVisible = !0
                    }, deleteSpaceInfo: function (e) {
                        var t = this;
                        this.$confirm("确定要删除此空间及下面的所有文档吗？", "提示", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            type: "warning"
                        }).then((function () {
                            var a = {id: e.id, delFlag: 1};
                            y["a"].updateSpace(a).then((function () {
                                t.loadSpaceList()
                            }))
                        }))
                    }, spaceChangeEvents: function (e) {
                        if (0 == e) this.newSpaceForm = {
                            id: "",
                            name: "",
                            spaceExplain: "",
                            userGroup: "",
                            treeLazyLoad: 0,
                            openDoc: 0,
                            uuid: "",
                            type: 1
                        }, this.newSpaceDialogVisible = !0; else if (-1 == e) this.manageSpaceDialogVisible = !0; else {
                            this.choiceSpace = e;
                            for (var t = 0; t < this.spaceList.length; t++) if (this.spaceList[t].id == e) {
                                this.nowSpaceShow = this.spaceList[t];
                                break
                            }
                            this.nowPageId = "", this.doGetPageList(null), this.$router.push({
                                path: "/home",
                                query: {spaceId: e}
                            })
                        }
                    }, loadSpaceList: function () {
                        var e = this;
                        y["a"].spaceList({}).then((function (t) {
                            e.spaceList = t.data || [];
                            for (var a = [], n = 0; n < e.spaceList.length; n++) a.push({
                                label: e.spaceList[n].name,
                                value: e.spaceList[n].id
                            });
                            if (e.spaceOptions = a, e.spaceList.length > 0) {
                                var o = e.spaceList[0].id;
                                e.nowSpaceShow = e.spaceList[0], e.choiceSpace = o, e.nowPageId = "", e.doGetPageList(null);
                                try {
                                    "/home" == e.$router.app._route.path && e.$router.push({
                                        path: "/home",
                                        query: {spaceId: o}
                                    })
                                } catch (r) {
                                    console.log(r)
                                }
                            }
                        }))
                    }, doGetPageList: function (e, t) {
                        var a = this, n = {spaceId: this.choiceSpace, parentId: e || 0};
                        0 == this.nowSpaceShow.treeLazyLoad && (n.parentId = null), y["a"].pageList(n).then((function (n) {
                            var o = n.data || [], r = [];
                            if (0 == a.nowSpaceShow.treeLazyLoad) r = o; else for (var i = 0; i < o.length; i++) {
                                var s = o[i];
                                s.parentId = s.parentId || 0, s.children = [{label: "", needLoad: !0}], r.push(s)
                            }
                            e > 0 ? t.children = r : a.wikiPageList = r
                        }))
                    }, userSettingDropdown: function (e) {
                        console.log("command:" + e), "userSignOut" == e ? this.userSignOut() : "aboutDoc" == e ? this.aboutDialogVisible = !0 : "myInfo" == e ? this.$router.push({path: "/user/myInfo"}) : "console" == e ? window.location = "./" : this.$message.warning("暂未开放")
                    }, userSignOut: function () {
                        m["a"].userLogout().then((function () {
                            location.reload()
                        }))
                    }, getSelfUserInfo: function () {
                        var e = this;
                        m["a"].getSelfUserInfo().then((function (t) {
                            e.userSelfInfo = t.data
                        }))
                    }, getSpaceInfo: function (e) {
                        for (var t = 0; t < this.spaceList.length; t++) if (this.spaceList[t].id == e) return this.spaceList[t];
                        return {}
                    }, onNewSpaceSubmit: function (e) {
                        var t = this;
                        this.$refs[e].validate((function (e) {
                            if (e) {
                                var a = {
                                    id: t.newSpaceForm.id,
                                    name: t.newSpaceForm.name,
                                    type: t.newSpaceForm.type,
                                    openDoc: t.newSpaceForm.openDoc,
                                    spaceExplain: t.newSpaceForm.spaceExplain,
                                    userGroup: t.newSpaceForm.userGroup,
                                    treeLazyLoad: t.newSpaceForm.treeLazyLoad
                                };
                                y["a"].updateSpace(a).then((function (e) {
                                    a.id > 0 ? t.loadSpaceList() : (t.spaceList.push(e.data), t.spaceOptions.push({
                                        label: e.data.name,
                                        value: e.data.id
                                    }), t.nowSpaceShow = e.data, t.choiceSpace = e.data.id, t.doGetPageList(null)), t.newSpaceForm = {
                                        id: "",
                                        name: "",
                                        spaceExplain: "",
                                        userGroup: "",
                                        treeLazyLoad: 0,
                                        openDoc: 0,
                                        uuid: "",
                                        type: 1
                                    }, t.newSpaceDialogVisible = !1
                                }))
                            }
                        }))
                    }, onNewSpaceCancel: function () {
                        this.newSpaceDialogVisible = !1
                    }, checkSystemUpgrade: function () {
                        var e = this;
                        m["a"].systemUpgradeInfo({}).then((function (t) {
                            t.data && (e.upgradeInfo = t.data, console.log("zyplayer-doc发现新版本：\n升级地址：" + t.data.upgradeUrl + "\n当前版本：" + t.data.nowVersion + "\n最新版本：" + t.data.lastVersion + "\n升级内容：" + t.data.upgradeContent))
                        }))
                    }, switchSpacePage: function (e) {
                        e = parseInt(e), this.choiceSpace != e && (this.choiceSpace = e, this.doGetPageList(null))
                    }
                }
            }, w = b, v = (a("149b"), Object(u["a"])(w, h, g, !1, null, null, null)), k = v.exports, S = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticStyle: {height: "100%"}}, [a("el-container", [a("el-aside", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.leftCollapse,
                        expression: "leftCollapse"
                    }], staticStyle: {"background-color": "#fafafa"}, attrs: {width: "300px"}
                }, [a("div", {staticClass: "logo"}, [e._v(e._s(e.nowSpaceShow.name))]), a("div", {
                    staticStyle: {
                        padding: "10px",
                        "box-sizing": "border-box",
                        background: "#fafafa"
                    }
                }, [a("el-input", {
                    staticStyle: {margin: "10px 0"},
                    attrs: {placeholder: "搜索文档"},
                    nativeOn: {
                        keyup: function (t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.searchByKeywords(t)
                        }
                    },
                    model: {
                        value: e.searchKeywords, callback: function (t) {
                            e.searchKeywords = t
                        }, expression: "searchKeywords"
                    }
                }, [a("el-button", {
                    attrs: {slot: "append", icon: "el-icon-search"},
                    on: {click: e.searchByKeywords},
                    slot: "append"
                })], 1), a("el-tree", {
                    ref: "wikiPageTree",
                    staticStyle: {"background-color": "#fafafa", "padding-bottom": "30px"},
                    attrs: {
                        props: e.defaultProps,
                        data: e.wikiPageList,
                        "filter-node-method": e.filterPageNode,
                        "highlight-current": "",
                        "expand-on-click-node": !1,
                        "default-expanded-keys": e.wikiPageExpandedKeys,
                        "node-key": "id"
                    },
                    on: {"node-click": e.handleNodeClick}
                }), a("div", {staticClass: "build-info"}, [e._v("本文档使用"), a("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://gitee.com/zyplayer/zyplayer-doc"
                    }
                }, [e._v("zyplayer-doc")]), e._v("构建")])], 1)]), a("el-container", [a("el-main", {staticClass: "doc-body-box"}, [a("router-view")], 1)], 1)], 1)], 1)
            }, x = [], L = {
                data: function () {
                    return {
                        leftCollapse: !0,
                        defaultProps: {children: "children", label: "name"},
                        spaceUuid: "",
                        nowPageId: "",
                        nowSpaceShow: {},
                        searchKeywords: "",
                        wikiPageList: [],
                        wikiPageExpandedKeys: []
                    }
                }, mounted: function () {
                    this.spaceUuid = this.$route.query.space || "", this.getSpaceInfo(), this.doGetPageList(null)
                }, methods: {
                    filterPageNode: function (e, t) {
                        if (!e || !t.name) return !0;
                        var a = t.name.toLowerCase();
                        return -1 !== a.indexOf(e.toLowerCase())
                    }, handleNodeClick: function (e) {
                        this.nowPageId != e.id && (console.log("点击节点：", e), this.nowPageId = e.id, this.$router.push({
                            path: "/page/share/view",
                            query: {pageId: e.id, space: this.spaceUuid}
                        }))
                    }, searchByKeywords: function () {
                        this.$refs.wikiPageTree.filter(this.searchKeywords)
                    }, doGetPageList: function () {
                        var e = this;
                        y["a"].openPageList({space: this.spaceUuid}).then((function (t) {
                            e.wikiPageList = t.data || [], e.nowPageId = ""
                        }))
                    }, getSpaceInfo: function () {
                        var e = this;
                        y["a"].openSpaceInfo({space: this.spaceUuid}).then((function (t) {
                            e.nowSpaceShow = t.data
                        }))
                    }
                }
            }, P = L, I = (a("2750"), Object(u["a"])(P, S, x, !1, null, "51ce7152", null)), _ = I.exports,
            O = [{path: "/", redirect: "/home"}, {
                path: "/page/search", name: "WIKI-全局搜索", component: function () {
                    return a.e("chunk-34407190").then(a.bind(null, "f890"))
                }
            }, {
                path: "/common/noAuth", name: "WIKI-没有权限", component: function () {
                    return a.e("chunk-2d207ece").then(a.bind(null, "a339"))
                }
            }, {
                path: "/page/editorTest", name: "编辑内容", component: function () {
                    return a.e("chunk-5544a2b8").then(a.bind(null, "ed40"))
                }
            }, {
                path: "/",
                name: "页面管理",
                component: k,
                children: [{
                    path: "/home", name: "WIKI文档管理", component: function () {
                        return a.e("chunk-578c28a7").then(a.bind(null, "b3d7"))
                    }
                }, {
                    path: "/user/myInfo", name: "WIKI-我的信息", component: function () {
                        return a.e("chunk-32cc5643").then(a.bind(null, "408e"))
                    }
                }, {
                    path: "/page/show", name: "WIKI-内容展示", component: function () {
                        return Promise.all([a.e("chunk-4cdf76bb"), a.e("chunk-1ca8e011"), a.e("chunk-213012a0")]).then(a.bind(null, "fb9f"))
                    }
                }, {
                    path: "/page/edit", name: "WIKI-编辑内容", component: function () {
                        return Promise.all([a.e("chunk-4cdf76bb"), a.e("chunk-2e5083a6")]).then(a.bind(null, "73f0"))
                    }
                }]
            }, {
                path: "/",
                name: "页面管理",
                component: _,
                children: [{
                    path: "/page/share/home", name: "WIKI-开放文档", component: function () {
                        return a.e("chunk-49c0ba36").then(a.bind(null, "7fc3"))
                    }
                }, {
                    path: "/page/share/view", name: "WIKI-内容展示", component: function () {
                        return Promise.all([a.e("chunk-4cdf76bb"), a.e("chunk-1ca8e011"), a.e("chunk-55738a8b")]).then(a.bind(null, "4aa7"))
                    }
                }]
            }], z = O, C = a("2f62"), j = {
                namespaced: !0, state: {pageTabNameMap: {}}, getters: {
                    getPageTabNameMap: function (e) {
                        return e.pageTabNameMap
                    }
                }, mutations: {
                    addTableName: function (e, t) {
                        var a = Object.assign({}, e.pageTabNameMap);
                        a[t.key] = t.val, e.pageTabNameMap = a
                    }
                }
            };
        n["default"].use(C["a"]);
        var M = new C["a"].Store({modules: {global: j}}), U = a("bc3a"), N = a.n(U), E = a("a7fe"), D = a.n(E);
        n["default"].use(r.a), n["default"].use(f["a"]), n["default"].use(D.a, N.a), n["default"].prototype.$store = M;
        var K = new f["a"]({routes: z});
        K.beforeEach((function (e, t, a) {
            e.name && (document.title = e.name), a()
        }));
        var F = new n["default"]({
            el: "#app", router: K, render: function (e) {
                return e(d)
            }
        });
        t["default"] = F
    }, "85ec": function (e, t, a) {
    }, "945a": function (e, t, a) {
    }, "9f03": function (e, t, a) {
        "use strict";
        var n = a("4328"), o = a.n(n), r = a("d978");
        t["a"] = {
            systemUpgradeInfo: function (e) {
                return Object(r["a"])({url: "/system/info/upgrade", method: "post", data: o.a.stringify(e)})
            }, userLogin: function (e) {
                return Object(r["a"])({url: "/login", method: "post", data: o.a.stringify(e)})
            }, userLogout: function () {
                return Object(r["a"])({url: "/logout", method: "post", data: o.a.stringify({})})
            }, getSelfUserInfo: function () {
                return Object(r["a"])({url: "/user/info/selfInfo", method: "post", data: o.a.stringify({})})
            }, getUserBaseInfo: function (e) {
                return Object(r["a"])({
                    url: "/zyplayer-doc-wiki/common/user/base",
                    method: "post",
                    data: o.a.stringify(e)
                })
            }, getUserMessageList: function (e) {
                return Object(r["a"])({url: "/user/message/list", method: "post", data: o.a.stringify(e)})
            }, readUserMessage: function (e) {
                return Object(r["a"])({url: "/user/message/read", method: "post", data: o.a.stringify(e)})
            }, deleteUserMessage: function (e) {
                return Object(r["a"])({url: "/user/message/delete", method: "post", data: o.a.stringify(e)})
            }
        }
    }, d978: function (e, t, a) {
        "use strict";
        a("d3b7");
        var n = a("bc3a"), o = a.n(n), r = a("56d7"), i = o.a.create({
            baseURL: "./",
            timeout: 1e4,
            headers: {"Content-type": "application/x-www-form-urlencoded"},
            withCredentials: !0
        }), s = {"/zyplayer-doc-db/executor/execute": !0};
        i.interceptors.request.use((function (e) {
            return e.needValidateResult = !0, s[e.url] && (e.needValidateResult = !1), e
        }), (function (e) {
            return console.log(e), Promise.reject(e)
        })), i.interceptors.response.use((function (e) {
            if (e.message) r["default"].$message.error("请求错误：" + e.message); else {
                if (!e.config.needValidateResult || 200 == e.data.errCode) return e.data;
                if (400 == e.data.errCode) {
                    r["default"].$message.error("请先登录");
                    var t = encodeURIComponent(window.location.href);
                    window.location = "./#/user/login?redirect=" + t
                } else 402 == e.data.errCode ? r["default"].$router.push("/common/noAuth") : 200 !== e.data.errCode && r["default"].$message.error(e.data.errMsg || "未知错误")
            }
            return Promise.reject("请求错误")
        }), (function (e) {
            return console.log("err" + e), r["default"].$message.info("请求错误：" + e.message), Promise.reject(e)
        })), t["a"] = i
    }
});