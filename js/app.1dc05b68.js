(function(f) {
    function e(e) {
        for (var a, b, s = e[0], r = e[1], c = e[2], o = 0, u = []; o < s.length; o++) b = s[o], Object.prototype.hasOwnProperty.call(n, b) && n[b] && u.push(n[b][0]), n[b] = 0;
        for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (f[a] = r[a]);
        d && d(e);
        while (u.length) u.shift()();
        return i.push.apply(i, c || []), t()
    }

    function t() {
        for (var f, e = 0; e < i.length; e++) {
            for (var t = i[e], a = !0, s = 1; s < t.length; s++) {
                var r = t[s];
                0 !== n[r] && (a = !1)
            }
            a && (i.splice(e--, 1), f = b(b.s = t[0]))
        }
        return f
    }
    var a = {},
        n = { app: 0 },
        i = [];

    function b(e) { if (a[e]) return a[e].exports; var t = a[e] = { i: e, l: !1, exports: {} }; return f[e].call(t.exports, t, t.exports, b), t.l = !0, t.exports }
    b.m = f, b.c = a, b.d = function(f, e, t) { b.o(f, e) || Object.defineProperty(f, e, { enumerable: !0, get: t }) }, b.r = function(f) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(f, "__esModule", { value: !0 }) }, b.t = function(f, e) {
        if (1 & e && (f = b(f)), 8 & e) return f;
        if (4 & e && "object" === typeof f && f && f.__esModule) return f;
        var t = Object.create(null);
        if (b.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: f }), 2 & e && "string" != typeof f)
            for (var a in f) b.d(t, a, function(e) { return f[e] }.bind(null, a));
        return t
    }, b.n = function(f) { var e = f && f.__esModule ? function() { return f["default"] } : function() { return f }; return b.d(e, "a", e), e }, b.o = function(f, e) { return Object.prototype.hasOwnProperty.call(f, e) }, b.p = "/";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
        r = s.push.bind(s);
    s.push = e, s = s.slice();
    for (var c = 0; c < s.length; c++) e(s[c]);
    var d = r;
    i.push([0, "chunk-vendors"]), t()
})({
    0: function(f, e, t) { f.exports = t("56d7") },
    "0c41": function(f, e, t) {
        "use strict";
        t("ca8b")
    },
    1: function(f, e) {},
    10: function(f, e) {},
    11: function(f, e) {},
    12: function(f, e) {},
    13: function(f, e) {},
    14: function(f, e) {},
    15: function(f, e) {},
    "15f9": function(f, e, t) {
        "use strict";
        t("7b13")
    },
    16: function(f, e) {},
    17: function(f, e) {},
    18: function(f, e) {},
    19: function(f, e) {},
    2: function(f, e) {},
    2097: function(f, e, t) { f.exports = t.p + "img/World_Icon.b78edbd4.png" },
    3: function(f, e) {},
    "343d": function(f, e) { f.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAHF0lEQVRYha2XXWib5xXHf0eSJevLki1b8pf8EceOU6f56tK0WzPaMspgkJSlycXYKCuD0l4MdrNsF8sou+jasF2MtSWwMsgYlG6DVRdtAiusWWlJmzhpUju2nA8nr+3odSzrw/p89UrPLiS7tmM7zroDQu/7PM97/v/znPOc5xzhASQcOmgBdgC7gT4R8QMopZLAdWAYZFTT36tsVqdsEvgh4CXgORFp3WitUioG/B14S9Mjo1+LQDh0sBM4IchRBMtmyH7FhIpCvQMc0/TI1AMR6Go9hFLqKHBycZv/V6m550URefd27L175q3rgB8X4Q0Rqf864AAiUi/CEaVQfu/gR6nM+PoEvgKXVzYZHpulgYg8pZQq+72DZ5eTWOFXpdRREV75PyKvJvKbmmuXUatJLeCurOVzC9Dl9tHubsBls2MCKaPIdDbFbH7hgShUY0KGNP29GQDbsrnXVoPXW6w809bNE6EwzjoHJSUUFZQUGAiGgruFPMOzk1yZu01FqRVgAbuduGGs3AMRv1LqNeBHSzsQDh0cFGRk+VEb9Pp5qf9hGuxODCBVKhFdSDFXzFNG8NpdhNx+lKUOQ8FsfoF/TV4iWcgsbe3f9h+grBTnE3E+S8S5kJwnY5ooRQXUkKZHxqwAPs+2X4nIY4vg+xqbObZ9Dy5bHbFinr/evMpfboxwIX6HsdQc0dRdrszPcH52kgWjQNDtw2130d3YQSwzT65UAGA4OU9rfT3PhNp5siVEumQwspBCBAHMdHb8jNTSqyYi7QC9Lg+/3fkoYrHyaXyWNye+RKH4ZksHg40hPHY3OQXTuQxjiRgTiRns1jq+07uHgDvAVDrOhzfO4bbaeKF7C4faw1ilGmovXPiUm7lsLRaYARW2AYOL4AL8bGAIh9XK5/Nz/CF6mR63l5f7d+GyO8kpIVeBOiXU1TkJeoP0t2zh3zcvcPr6efa2beNSLMrTLSFe7h0g4HDwZTpJrFBgl8/PZA28Ggu0K8WgDdi7OHggEKTP7SVplvjjtRE6nC6ODz0CYmOqkOf0nVvczKRQCG2eJgZbevDVeznQ9xgfRv/DZ9Oj/KS7jx+Ee0ibJU5ER/lAn+HEjr18noizMkQB2G0DehbfvtvaDsAHdzRSJYNfP7Qbl9XGxWSC349dpFApL305nU0yEp/i6b793E7pGOUSAGdm7+Crs/OnyWukzOrY8atf4LTek3QBtthEpBHAJsJOXyMAZ+di7GjwM+BpIGGavDFxeQX4ouRNgzMTn2Aum9PyOX537eqKdblymVz53u9F8NmUUogIrfVOHBYr6XIZLZflh129AOiFPI80BTEVmAimghJgKphIxCiUS4S9zXjsTsoIFaCioAxoiSkqav3SQKlqIkoAuK3VnJQxSyggYHcA0O328nzv9moA1oKw+gxZs8SNZIw+fyv9gfBScqr+hFhap2gW1yUAkrABNwCMSpWpw1L1VdY0AYgbBUYX0hi1LFhc9p+oJZ1EMcNkSsdUUBELzd4goCiv4bZVezBpA4YB9GKeilJ4bXU02R2MLaQ5BCileDN6GVOtEcM1+WJ2EpgEoMnp4ylvEKNcwqyY9yHAsAWIKqWmcuUy17PVi+XRxmbOJeZIGAbNDifPhbeuq2Ff5xBBT2DpvcMXAiCRnd/YdqVuA1FrOjuufJ5tnSLyuNNqZY8/QKjezfsxDb1YYH8gSI+nkSaHm6l8hlztaLU4G/h218OE/R0EfW3cjGtYRHi8axdisXJVn2ChmNmIw9uaHjlTuw3lJEr99P3YtO1wRy8dLjdHOrfwjnadhjoHR7oH2NfcxlCgjXjJpKCEsqWOXEVYKJcZ1i5jlA2+1bUTh81OvJBhJhXbyHwTeAtqFVE6Ox5v8Gzbaiq1K24U2d8UZKChkbRZ4nRM40pyDp/dQYPDhYgNJVbylQoTSZ2zty5xNzvPN9oGGGzuxlTwya2LZEv59fHhlKZH/gwrC5JWYEREmp7v6ed77d0YSvjo7h3evTVBqlTEbrHis9dTAZLFPGVVwWd38UTndtobghQVnJu+yvjc5Ea+nweGND0SW0GgRuJZkH+IYDnc2cuznX2YWMhVygwn5hhPJ4gX8ygEn8NF2Bugw9tMCQuFSoWPp0aJxrUNLFcVFIc1PfLPxbF7Ks9w6OAvRORVgH6vj6Nd2+jy+DCQNSsiQ8H11BwfT48t5YUNrD+m6ZHXl4/dQ6BWGf8c4VVBLABdbi87/EFaXQ210gzmjQJT2TTRpM58IbtazSrLqaDUL0Xk9dW9wbq1d9UdvC0iTRtqv4/UfP5jTY9E1ppf844ESGfHx3yewVOgmoEdIvJArZmqHrVTIN/X9MiF9dZttjndCrwIHBWRrvsAT1JtTk9qeuTa/XQ/UPsTbj0ESg1QraJ6qNUSKJWgeqldQiSqrdEDrif/BXvzQ7rLTw9xAAAAAElFTkSuQmCC" },
    4: function(f, e) {},
    "4b97": function(f, e, t) { f.exports = t.p + "img/BUSD_Coin.373c1fab.png" },
    5: function(f, e) {},
    "56d7": function(f, e, t) {
        "use strict";
        t.r(e);
        t("e260"), t("e6cf"), t("cca6"), t("a79d");
        var a = t("a026"),
            n = function() {
                var f = this,
                    e = f.$createElement,
                    a = f._self._c || e;
                return a("v-app", [a("Snackbar"), f.loading ? [a("v-container", { attrs: { "fill-height": "" } }, [a("v-row", { attrs: { justify: "center", align: "center" } }, [a("v-col", { staticClass: "text-center", attrs: { cols: "12" } }, [a("v-progress-circular", { attrs: { indeterminate: "" } })], 1)], 1)], 1)] : f._e(), [a("v-app-bar", { attrs: { app: "" } }, [a("div", { staticClass: "main-header" }, [a("div", { staticClass: "container" }, [a("div", { staticClass: "row" }, [a("div", { staticClass: "inner-header" }, [a("div", { staticClass: "logo" }, [a("a", { attrs: { href: "https://shinzotoken.com/" } }, [a("img", { staticClass: "d-flex ", attrs: { src: t("dfb9"), width: "200" } })])]), a("div", { staticClass: "header-btn" }, [f.logged || "Dashboard" != f.$route.name ? f._e() : a("v-btn", { staticClass: "pa-1", attrs: { loading: f.connectloader, color: "blue darken-4" }, on: { click: function(e) { return f.connectWallet(!1) } } }, [f._v("Connect Wallet")]), f.logged && "Dashboard" == f.$route.name ? a("div", { staticClass: "d-flex" }, [a("div", [a("span", [f._v("Connected")]), a("br"), a("a", { attrs: { href: "https://bscscan.com/address/" + f.logged, target: "_blank" } }, [f._v("(" + f._s(f.logged.substring(0, 4)) + "..." + f._s(f.logged.substring(f.logged.length - 4)) + ")")])]), a("div", [a("v-btn", { attrs: { loading: f.disconnectloader, color: "darken-4", icon: "" }, on: { click: function(e) { return f.disconnectWallet() } } }, [a("v-icon", [f._v("mdi-logout")])], 1)], 1)]) : f._e(), a("v-app-bar-nav-icon", { staticClass: "d-sm-none", on: { click: function(e) { e.stopPropagation(), f.menuVisible = !f.menuVisible, f.mini = !1, f.hidemenu = !1 } } })], 1)])])])]), a("div", { staticClass: "original-announcement", attrs: { align: "center" } }, [a("div", { staticClass: "wrtext" }, [f._v("(Please make sure you are visiting https://shinzotoken.com/)")])])]), a("v-navigation-drawer", { class: (f.hidemenu ? "d-none " : " ") + "d-sm-flex", attrs: { app: "", "mini-variant": f.mini, "mini-variant-width": "90", stateless: "", elevation: "5" }, model: { value: f.menuVisible, callback: function(e) { f.menuVisible = e }, expression: "menuVisible" } }, [a("v-list-item", { staticClass: "mt-2 mb-2 d-none d-sm-flex", attrs: { height: "" } }, [a("v-list-item-title", { staticClass: "title", attrs: { height: "60" } }), a("v-btn", { attrs: { icon: "" }, on: { click: function(e) { e.stopPropagation(), f.menuVisible = !f.menuVisible } } }, [a("v-icon", [f._v("mdi-chevron-left")])], 1)], 1), [a("v-list", { attrs: { nav: "" } }, [a("v-list-item-group", { staticClass: "border-top" }, [a("v-list-item", { attrs: { link: "", to: { name: "Dashboard" } } }, [a("v-list-item-icon", { attrs: { title: f.$t("Earnings") } }, [a("img", { attrs: { src: t("9e77") } })]), a("v-list-item-content", [a("v-list-item-title", [f._v(f._s(f.$t("Earnings")))])], 1)], 1), a("v-list-item", { attrs: { link: "", href: "https://pancakeswap.finance/swap?outputCurrency=0x30338633a8321FCc4533bD47E8E6CC3DC6e844f2", target: "_blank" } }, [a("v-list-item-icon", { attrs: { title: f.$t("Swap Tokens") } }, [a("img", { attrs: { src: t("652c") } })]), a("v-list-item-content", [a("v-list-item-title", [f._v(f._s(f.$t("Swap Tokens")))])], 1)], 1)], 1)], 1)], a("v-list", { attrs: { nav: "" } }, [a("v-list-item-group", [a("v-list-item", { attrs: { link: "", href: "https://shinzotoken.com/", target: "_blank" } }, [a("v-list-item-icon", { attrs: { title: f.$t("Website") } }, [a("img", { attrs: { src: t("2097") } })]), a("v-list-item-content", [a("v-list-item-title", [f._v(f._s(f.$t("Website")))])], 1)], 1)], 1)], 1), a("v-list", { attrs: { nav: "" } }, [a("v-list-group", { scopedSlots: f._u([{ key: "activator", fn: function() { return [a("v-list-item-icon", [a("img", { attrs: { src: t("7b50") } })]), a("v-list-item-content", [a("v-list-item-title", [f._v("Communities")])], 1)] }, proxy: !0 }]) }, [a("v-list-item", { attrs: { link: "", href: "https://www.instagram.com/shinzotoken/", target: "_blank" } }, [a("v-list-item-icon", { attrs: { title: f.$t("Telegram") } }, [a("v-icon", [f._v("mdi-send")])], 1), a("v-list-item-content", [a("v-list-item-title", [f._v(f._s(f.$t("Telegram")))])], 1)], 1), a("v-list-item", { attrs: { link: "", href: "https://twitter.com/ShinzoToken", target: "_blank" } }, [a("v-list-item-icon", { attrs: { title: f.$t("Twitter") } }, [a("v-icon", [f._v("mdi-twitter")])], 1), a("v-list-item-content", [a("v-list-item-title", [f._v(f._s(f.$t("Twitter")))])], 1)], 1), a("v-list-item", { attrs: { link: "", href: "https://www.facebook.com/ShinzoToken-101527725764349", target: "_blank" } }, [a("v-list-item-icon", { attrs: { title: f.$t("Facebook") } }, [a("v-icon", [f._v("mdi-facebook")])], 1), a("v-list-item-content", [a("v-list-item-title", [f._v(f._s(f.$t("Facebook")))])], 1)], 1), a("v-list-item", { attrs: { link: "", href: "https://www.reddit.com/user/ShinzoToken", target: "_blank" } }, [a("v-list-item-icon", { attrs: { title: f.$t("Reddit") } }, [a("v-icon", [f._v("mdi-reddit")])], 1), a("v-list-item-content", [a("v-list-item-title", [f._v(f._s(f.$t("Reddit")))])], 1)], 1)], 1)], 1)], 2), a("v-main", { staticClass: "blue-white lighten-5" }, [a("div", { staticClass: "blue-white--text text--darken-4" }, [a("div", { staticClass: "main-content" }, [a("transition", { attrs: { name: "fade", mode: "out-in" } }, [a("router-view")], 1)], 1)])])]], 2)
            },
            i = [],
            b = t("1da1"),
            s = (t("96cf"), function() {
                var f = this,
                    e = f.$createElement,
                    t = f._self._c || e;
                return t("v-snackbar", { attrs: { color: f.color }, scopedSlots: f._u([{ key: "action", fn: function(e) { var a = e.attrs; return [t("v-btn", f._b({ attrs: { icon: "" }, nativeOn: { click: function(e) { f.showsnack = !1 } } }, "v-btn", a, !1), [t("v-icon", { attrs: { color: "primary" } }, [f._v("mdi-close")])], 1)] } }]), model: { value: f.showsnack, callback: function(e) { f.showsnack = e }, expression: "showsnack" } }, ["" != f.icon ? t("v-icon", { staticClass: "mr-1" }, [f._v(f._s(f.icon))]) : f._e(), f._v(" " + f._s(f.message) + " ")], 1)
            }),
            r = [],
            c = {
                data: function() { return { showsnack: !1, message: "", icon: "mdi-information-outline", color: "green" } },
                created: function() {
                    var f = this;
                    this.$store.watch((function(f) { return f.snackbar.snackbar }), (function() { var e = f.$store.state.snackbar.snackbar; "" !== e && (f.showsnack = !0, f.message = f.$store.state.snackbar.snackbar.msg, f.icon = f.$store.state.snackbar.snackbar.icon, f.color = f.$store.state.snackbar.snackbar.color, f.$store.dispatch("setSnack", "")) }))
                }
            },
            d = c,
            o = t("2877"),
            u = t("6544"),
            l = t.n(u),
            p = t("8336"),
            y = t("132d"),
            m = t("2db4"),
            v = Object(o["a"])(d, s, r, !1, null, null, null),
            h = v.exports;
        l()(v, { VBtn: p["a"], VIcon: y["a"], VSnackbar: m["a"] });
        var g = t("bee2"),
            w = t("d4ec"),
            T = t("ade3"),
            x = (t("b680"), t("9624")),
            C = t("99e5"),
            _ = t.n(C),
            k = t("2eaf"),
            D = t("5aac"),
            B = t.n(D),
            S = { walletconnect: { package: k["a"], options: { rpc: { 56: "https://bsc-dataseed.binance.org" }, chainId: 56, qrcodeModalOptions: { mobileLinks: ["metamask", "trust"], desktopLinks: [] } } } },
            M = new B.a({ providerOptions: S, cacheProvider: !1, theme: { background: "rgb(31 23 80)", main: "rgb(199, 199, 199)", secondary: "rgb(136, 136, 136)", border: "rgba(195, 195, 195, 0.14)", hover: "rgb(19 14 48)" } }),
            O = Object(b["a"])(regeneratorRuntime.mark((function f() {
                var e, t, a, n;
                return regeneratorRuntime.wrap((function(f) {
                    while (1) switch (f.prev = f.next) {
                        case 0:
                            return f.prev = 0, f.next = 3, M.clearCachedProvider();
                        case 3:
                            return f.next = 5, M.connect();
                        case 5:
                            return t = f.sent, e = new _.a(t), console.log("web3", e.currentProvider.networkVersion), f.next = 10, e.eth.chainId();
                        case 10:
                            return a = f.sent, f.next = 13, e.eth.net.getId();
                        case 13:
                            n = f.sent, console.log("chainId", a), console.log("networkId", n), t.on("connect", (function(f) { console.log("connect", f) })), t.on("accountsChanged", (function(f) { console.log(f), window.location.reload() })), t.on("chainChanged", (function(f) { console.log(f), window.location.reload() })), t.on("disconnect", (function(f, e) { console.log(f, e), window.location.reload() })), f.next = 25;
                            break;
                        case 22:
                            f.prev = 22, f.t0 = f["catch"](0), console.log(f.t0);
                        case 25:
                            return f.abrupt("return", e);
                        case 26:
                        case "end":
                            return f.stop()
                    }
                }), f, null, [
                    [0, 22]
                ])
            }))),
            A = Object(b["a"])(regeneratorRuntime.mark((function f() {
                var e;
                return regeneratorRuntime.wrap((function(f) {
                    while (1) switch (f.prev = f.next) {
                        case 0:
                            try { e = new _.a(new _.a.providers.HttpProvider("https://bsc-dataseed.binance.org/")) } catch (t) { console.log(t) }
                            return f.abrupt("return", e);
                        case 2:
                        case "end":
                            return f.stop()
                    }
                }), f)
            }))),
            R = t("bc3a"),
            E = t.n(R),
            U = "0x30338633a8321fcc4533bd47e8e6cc3dc6e844f2",
            j = "0xe9e7cea3dedca5984780bafc599bd69add087d56",
            V = JSON.parse('{"abi":[{"inputs":[{"internalType":"address","name":"_router","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"claimDividend","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"dividendsPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dividendsPerShareAccuracyFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"shareholder","type":"address"}],"name":"getUnpaidEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minDistribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"process","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minPeriod","type":"uint256"},{"internalType":"uint256","name":"_minDistribution","type":"uint256"}],"name":"setDistributionCriteria","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"shareholder","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setShare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"shares","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"totalExcluded","type":"uint256"},{"internalType":"uint256","name":"totalRealised","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]}'),
            P = !1,
            F = !1,
            G = Object(g["a"])((function f() {
                Object(w["a"])(this, f), Object(T["a"])(this, "connect", Object(b["a"])(regeneratorRuntime.mark((function f() {
                    var e, t = arguments;
                    return regeneratorRuntime.wrap((function(f) {
                        while (1) switch (f.prev = f.next) {
                            case 0:
                                return e = t.length > 0 && void 0 !== t[0] && t[0], f.next = 3, O(e);
                            case 3:
                                if (P = f.sent, P) { f.next = 8; break }
                                return f.abrupt("return", !1);
                            case 8:
                                return f.abrupt("return", !0);
                            case 9:
                            case "end":
                                return f.stop()
                        }
                    }), f)
                })))), Object(T["a"])(this, "connect2", Object(b["a"])(regeneratorRuntime.mark((function f() {
                    return regeneratorRuntime.wrap((function(f) {
                        while (1) switch (f.prev = f.next) {
                            case 0:
                                return f.next = 2, A();
                            case 2:
                                if (F = f.sent, F) { f.next = 7; break }
                                return f.abrupt("return", !1);
                            case 7:
                                return f.abrupt("return", !0);
                            case 8:
                            case "end":
                                return f.stop()
                        }
                    }), f)
                })))), Object(T["a"])(this, "disconnectWallet", Object(b["a"])(regeneratorRuntime.mark((function f() {
                    return regeneratorRuntime.wrap((function(f) {
                        while (1) switch (f.prev = f.next) {
                            case 0:
                                return f.abrupt("return", !0);
                            case 1:
                            case "end":
                                return f.stop()
                        }
                    }), f)
                })))), Object(T["a"])(this, "getBalanceOfAccount", function() {
                    var f = Object(b["a"])(regeneratorRuntime.mark((function f(e) {
                        var t, a;
                        return regeneratorRuntime.wrap((function(f) {
                            while (1) switch (f.prev = f.next) {
                                case 0:
                                    return f.prev = 0, f.next = 3, new F.eth.Contract(JSON.parse(x["Payments"].abi), x["Payments"].contract);
                                case 3:
                                    return t = f.sent, f.next = 6, t.methods.balanceOf(e).call();
                                case 6:
                                    return a = f.sent, f.abrupt("return", (a / 1e9).toFixed(3));
                                case 10:
                                    return f.prev = 10, f.t0 = f["catch"](0), f.abrupt("return", 0);
                                case 13:
                                case "end":
                                    return f.stop()
                            }
                        }), f, null, [
                            [0, 10]
                        ])
                    })));
                    return function(e) { return f.apply(this, arguments) }
                }()), Object(T["a"])(this, "fetchBusdBalance", function() {
                    var f = Object(b["a"])(regeneratorRuntime.mark((function f(e) {
                        var t, a;
                        return regeneratorRuntime.wrap((function(f) {
                            while (1) switch (f.prev = f.next) {
                                case 0:
                                    return f.prev = 0, f.next = 3, new F.eth.Contract(JSON.parse(x["Payments"].busdabi), j);
                                case 3:
                                    return t = f.sent, f.next = 6, t.methods.balanceOf(e).call();
                                case 6:
                                    return a = f.sent, f.abrupt("return", (a / 1e18).toFixed(3));
                                case 10:
                                    return f.prev = 10, f.t0 = f["catch"](0), f.abrupt("return", 0);
                                case 13:
                                case "end":
                                    return f.stop()
                            }
                        }), f, null, [
                            [0, 10]
                        ])
                    })));
                    return function(e) { return f.apply(this, arguments) }
                }()), Object(T["a"])(this, "fetchUserShares", function() {
                    var f = Object(b["a"])(regeneratorRuntime.mark((function f(e) {
                        var t, a;
                        return regeneratorRuntime.wrap((function(f) {
                            while (1) switch (f.prev = f.next) {
                                case 0:
                                    return f.prev = 0, f.next = 3, new F.eth.Contract(V.abi, U);
                                case 3:
                                    return t = f.sent, f.next = 6, t.methods.shares(e).call();
                                case 6:
                                    return a = f.sent, f.abrupt("return", a);
                                case 10:
                                    return f.prev = 10, f.t0 = f["catch"](0), f.abrupt("return", 0);
                                case 13:
                                case "end":
                                    return f.stop()
                            }
                        }), f, null, [
                            [0, 10]
                        ])
                    })));
                    return function(e) { return f.apply(this, arguments) }
                }()), Object(T["a"])(this, "reflectManually", function() {
                    var f = Object(b["a"])(regeneratorRuntime.mark((function f(e) {
                        var t, a;
                        return regeneratorRuntime.wrap((function(f) {
                            while (1) switch (f.prev = f.next) {
                                case 0:
                                    return f.prev = 0, f.next = 3, new P.eth.Contract(V.abi, U);
                                case 3:
                                    return t = f.sent, f.next = 6, t.methods.claimDividend().send({ from: e });
                                case 6:
                                    a = f.sent, console.log(a), f.next = 13;
                                    break;
                                case 10:
                                    return f.prev = 10, f.t0 = f["catch"](0), f.abrupt("return", !0);
                                case 13:
                                case "end":
                                    return f.stop()
                            }
                        }), f, null, [
                            [0, 10]
                        ])
                    })));
                    return function(e) { return f.apply(this, arguments) }
                }()), Object(T["a"])(this, "getUnpaidEarnings", function() {
                    var f = Object(b["a"])(regeneratorRuntime.mark((function f(e) {
                        var t, a;
                        return regeneratorRuntime.wrap((function(f) {
                            while (1) switch (f.prev = f.next) {
                                case 0:
                                    return f.prev = 0, f.next = 3, new F.eth.Contract(V.abi, U);
                                case 3:
                                    return t = f.sent, f.next = 6, t.methods.getUnpaidEarnings(e).call();
                                case 6:
                                    return a = f.sent, f.abrupt("return", (a / 1e18).toFixed(3));
                                case 10:
                                    return f.prev = 10, f.t0 = f["catch"](0), f.abrupt("return", 0);
                                case 13:
                                case "end":
                                    return f.stop()
                            }
                        }), f, null, [
                            [0, 10]
                        ])
                    })));
                    return function(e) { return f.apply(this, arguments) }
                }()), Object(T["a"])(this, "getDvdData", Object(b["a"])(regeneratorRuntime.mark((function f() {
                    var e, t, a;
                    return regeneratorRuntime.wrap((function(f) {
                        while (1) switch (f.prev = f.next) {
                            case 0:
                                return f.prev = 0, f.next = 3, new F.eth.Contract(V.abi, U);
                            case 3:
                                return e = f.sent, f.next = 6, e.methods.totalDistributed().call();
                            case 6:
                                return t = f.sent, a = { totalDistributed: (t / 1e18).toFixed(3) }, f.abrupt("return", a);
                            case 11:
                                return f.prev = 11, f.t0 = f["catch"](0), f.abrupt("return", 0);
                            case 14:
                            case "end":
                                return f.stop()
                        }
                    }), f, null, [
                        [0, 11]
                    ])
                })))), Object(T["a"])(this, "getDvdDataAPI", Object(b["a"])(regeneratorRuntime.mark((function f() {
                    var e, t, a;
                    return regeneratorRuntime.wrap((function(f) {
                        while (1) switch (f.prev = f.next) {
                            case 0:
                                return e = 0, f.next = 3, E.a.get("https://evergrow-contract.herokuapp.com/api/getDivData");
                            case 3:
                                return t = f.sent, e = t.data, a = { totalDistributed: (e / 1e18).toFixed(3) }, f.abrupt("return", a);
                            case 7:
                            case "end":
                                return f.stop()
                        }
                    }), f)
                })))), Object(T["a"])(this, "getEGCPrice", Object(b["a"])(regeneratorRuntime.mark((function f() {
                    var e, t, a;
                    return regeneratorRuntime.wrap((function(f) {
                        while (1) switch (f.prev = f.next) {
                            case 0:
                                return e = 0, f.prev = 1, f.next = 4, E.a.get("https://api.coingecko.com/api/v3/simple/price?ids=evergrowcoin&vs_currencies=USD");
                            case 4:
                                t = f.sent, console.log(t.data), a = t.data, e = a.evergrowcoin.usd, f.next = 13;
                                break;
                            case 10:
                                return f.prev = 10, f.t0 = f["catch"](1), f.abrupt("return", !1);
                            case 13:
                                return f.abrupt("return", e);
                            case 14:
                            case "end":
                                return f.stop()
                        }
                    }), f, null, [
                        [1, 10]
                    ])
                })))), Object(T["a"])(this, "getBUSDPrice", Object(b["a"])(regeneratorRuntime.mark((function f() {
                    var e, t, a;
                    return regeneratorRuntime.wrap((function(f) {
                        while (1) switch (f.prev = f.next) {
                            case 0:
                                return e = 0, f.prev = 1, f.next = 4, E.a.get("https://api.coingecko.com/api/v3/simple/price?ids=busd&vs_currencies=USD");
                            case 4:
                                t = f.sent, console.log(t.data), a = t.data, e = a.busd.usd, f.next = 13;
                                break;
                            case 10:
                                return f.prev = 10, f.t0 = f["catch"](1), f.abrupt("return", !1);
                            case 13:
                                return f.abrupt("return", e);
                            case 14:
                            case "end":
                                return f.stop()
                        }
                    }), f, null, [
                        [1, 10]
                    ])
                })))), Object(T["a"])(this, "getLoggedAccount", Object(b["a"])(regeneratorRuntime.mark((function f() {
                    var e;
                    return regeneratorRuntime.wrap((function(f) {
                        while (1) switch (f.prev = f.next) {
                            case 0:
                                return f.next = 2, P.eth.getAccounts();
                            case 2:
                                return e = f.sent, f.abrupt("return", e && e.length > 0 ? e[0] : void 0);
                            case 4:
                            case "end":
                                return f.stop()
                        }
                    }), f)
                }))))
            })),
            I = G,
            N = {
                data: function() { return { loading: !1, menuVisible: !0, mini: !0, hidemenu: !0, logged: !1, connected: !1, connectloader: !1, disconnectloader: !1 } },
                created: function() {},
                watch: {},
                methods: {
                    connectWallet: function() {
                        var f = Object(b["a"])(regeneratorRuntime.mark((function f() {
                            var e;
                            return regeneratorRuntime.wrap((function(f) {
                                while (1) switch (f.prev = f.next) {
                                    case 0:
                                        return this.connectloader = !0, e = new I, f.next = 4, e.connect();
                                    case 4:
                                        if (this.connected = f.sent, !this.connected) { f.next = 11; break }
                                        return f.next = 8, e.getLoggedAccount();
                                    case 8:
                                        this.logged = f.sent, this.$store.commit("setAddress", this.logged), this.connectloader = !1;
                                    case 11:
                                        this.connected || (this.connectloader = !1);
                                    case 12:
                                    case "end":
                                        return f.stop()
                                }
                            }), f, this)
                        })));

                        function e() { return f.apply(this, arguments) }
                        return e
                    }(),
                    disconnectWallet: function() {
                        var f = Object(b["a"])(regeneratorRuntime.mark((function f() {
                            var e, t;
                            return regeneratorRuntime.wrap((function(f) {
                                while (1) switch (f.prev = f.next) {
                                    case 0:
                                        return this.disconnectloader = !0, e = new I, f.next = 4, e.disconnectWallet();
                                    case 4:
                                        t = f.sent, t && (this.disconnectloader = !1, window.location.reload()), t && (this.disconnectloader = !1, window.location.reload());
                                    case 7:
                                    case "end":
                                        return f.stop()
                                }
                            }), f, this)
                        })));

                        function e() { return f.apply(this, arguments) }
                        return e
                    }()
                },
                computed: {},
                components: { Snackbar: h }
            },
            L = N,
            W = (t("5c0b"), t("7496")),
            H = t("40dc"),
            J = t("5bc1"),
            Q = t("62ad"),
            X = t("a523"),
            z = t("8860"),
            Y = t("56b0"),
            q = t("da13"),
            $ = t("5d23"),
            K = t("1baa"),
            Z = t("34c3"),
            ff = t("f6c4"),
            ef = t("f774"),
            tf = t("490a"),
            af = t("0fd9"),
            nf = Object(o["a"])(L, n, i, !1, null, null, null),
            bf = nf.exports;
        l()(nf, { VApp: W["a"], VAppBar: H["a"], VAppBarNavIcon: J["a"], VBtn: p["a"], VCol: Q["a"], VContainer: X["a"], VIcon: y["a"], VList: z["a"], VListGroup: Y["a"], VListItem: q["a"], VListItemContent: $["a"], VListItemGroup: K["a"], VListItemIcon: Z["a"], VListItemTitle: $["b"], VMain: ff["a"], VNavigationDrawer: ef["a"], VProgressCircular: tf["a"], VRow: af["a"] });
        var sf = t("ce5b"),
            rf = t.n(sf);
        t("bf40");
        a["default"].use(rf.a);
        var cf = { theme: { dark: !0 } },
            df = new rf.a(cf),
            of = t("8c4f"),
            uf = function() {
                var f = this,
                    e = f.$createElement,
                    a = f._self._c || e;
                return a("div", { staticClass: "inner-content" }, [a("div", { staticClass: "container" }, [a("div", { staticClass: "row" }, [a("div", { attrs: { sm: "12" } }, [a("div", {}, [a("v-card", { staticClass: "egccol", attrs: { color: " darken-4 pa-1" } }, [a("div", { staticClass: "d-sm-none", attrs: { align: "center" } }, [a("div", { staticClass: "font-weight-light wrtext" }, [f._v('(On 📱SmartPhone! Use Dapps Browser like Metamask and Trustwallet and Select "Binance Smart Chain" Network on Wallet to see Your Rewards.)')])])])], 1), a("div", { staticClass: "pt-4" }, [a("v-card", { staticClass: "egccol", attrs: { color: " darken-4 pa-1" } }, [a("div", { attrs: { align: "center" } }, [a("div", { staticClass: "font-weight-light wrtext" }, [a("v-text-field", { staticClass: "shrink", staticStyle: { width: "100vh" }, attrs: { outlined: "", "hide-details": "", placeholder: "Wallet Address", color: "", solo: "", clearable: "", light: "" }, model: { value: f.wallet_address2, callback: function(e) { f.wallet_address2 = e }, expression: "wallet_address2" } })], 1)])])], 1), a("div", { staticClass: "pt-4 wallet-section" }, [a("v-card", { staticClass: "egccol mb-5", attrs: { color: "darken-4 pa-5" } }, [a("v-row", [a("v-col", { staticClass: "left-wallet", attrs: { cols: "12", md: "6", sm: "6" } }, [a("div", { attrs: { align: "center" } }, [a("div", { staticClass: "text-h4 font-weight-light" }, [f._v("Your Wallet")]), a("div", { staticClass: "mt-3", attrs: { align: "center" } }, [a("span", { staticClass: "text-h4 font-weight-bold lh0" }, [f._v(f._s(f.wallet_Balance))]), f._v(" "), a("img", { staticClass: "ml-1", attrs: { src: t("97e0"), width: "30" } })]), a("div", { attrs: { align: "center" } }, [a("span", { staticClass: "text-h6 font-weight-light" }, [f._v("($" + f._s(f.totalEGCUSDprice) + ")")])]), a("div", { staticClass: "mt-3", attrs: { align: "center" } }, [a("span", { staticClass: "text-h4 font-weight-bold lh0" }, [f._v(f._s(f.busd_Balance))]), f._v(" "), a("img", { staticClass: "ml-1", attrs: { src: "https://bscscan.com/token/images/busd_32.png", width: "30" } })]), a("div", { attrs: { align: "center" } }, [a("span", { staticClass: "text-h6 font-weight-light" }, [f._v("($" + f._s(f.totalBUSDUSDprice) + ")")])]), a("v-divider", { staticClass: "pa-2" }), a("div", { staticClass: "text-h4 font-weight-light" }, [f._v("Total Earned:")]), a("div", { staticClass: "mt-2", attrs: { align: "center" } }, [a("span", { staticClass: "text-h4 font-weight-bold lh0" }, [f._v(f._s(f.totalrewared))]), f._v(" "), a("img", { staticClass: "ml-1", attrs: { src: "https://bscscan.com/token/images/busd_32.png", width: "30" } })]), a("div", { attrs: { align: "center" } }, [a("span", { staticClass: "text-h6 font-weight-light" }, [f._v("($" + f._s(f.totalEBUSDUSDprice) + ")")])])], 1)]), a("v-col", { staticClass: "right-wallet", attrs: { cols: "12", md: "6", sm: "6" } }, [a("v-divider", { staticClass: "d-sm-none pa-2" }), a("div", { attrs: { align: "center" } }, [a("div", { staticClass: "text-h4 font-weight-light" }, [f._v("Rewards Not Claimed")]), a("div", { staticClass: "mt-5", attrs: { align: "center" } }, [a("span", { staticClass: "text-h4 font-weight-bold lh0" }, [f._v(f._s(f.unpaid_Balance))]), f._v(" "), a("img", { staticClass: "ml-1", attrs: { src: "https://bscscan.com/token/images/busd_32.png", width: "30" } })]), a("div", { attrs: { align: "center" } }, [a("span", { staticClass: "text-h6 font-weight-light" }, [f._v("($" + f._s(f.totalNCBUSDUSDprice) + ")")])]), a("v-btn", { staticClass: "manual-claim-btn", attrs: { loading: f.reflectManuallyLoader }, on: { click: f.reflectManually } }, [f._v("Claim Manually")])], 1), a("div", { staticClass: "mt-2", attrs: { align: "center" } }, [a("p", [f._v(" Rewards are automatically sent every 60 minutes. It can, however, take longer depending on your holdings and trading volume. Rewards will be triggered once they are big enough to cover the gas fees. If you are a smaller holder it may take from a couple hours to a few days for rewards to appear in your wallet. You can also manually claim unclaimed rewards, but you will need to pay the gas fees. ")])])], 1)], 1)], 1)], 1)])])]), a("div", { staticClass: "reward-section" }, [f._m(0), a("div", { staticClass: "egccol v-card v-sheet theme--dark darken-4 pa-5" }, [a("div", { staticClass: "row" }, [a("div", { staticClass: "col-sm-2" }, [f._v(" ")]), a("div", { staticClass: "col-sm-8" }, [a("div", { staticClass: "detail-section" }, [a("div", { staticClass: "details-total" }, [a("span", { staticClass: "text-h4 font-weight-light" }, [f._v(f._s(f.totaldis))]), a("span", { staticClass: "text-h4 font-weight-light" }, [f._v("($" + f._s(f.totalDBUSDUSDprice) + ")")])]), a("div", { staticClass: "busd-coin-img" }, [a("img", { attrs: { src: t("4b97") } })])]), a("div", { staticClass: "contract-details" }, [a("div", { staticClass: "contract-img" }, [a("img", { attrs: { src: t("6e8d") } })]), a("div", { staticClass: "contact-link" }, [a("div", { staticClass: "contract-head text-h5 font-weight-bold" }, [f._v("Shinzo Contract:")]), a("div", { staticClass: "contract-link" }, [a("span", { staticClass: "text-h5 font-weight-light" }, [f._v(f._s(f.egcContract))]), a("v-btn", { attrs: { icon: "" }, on: { click: f.copyEGCContract } }, [a("v-icon", [f._v("mdi-content-copy")])], 1)], 1)])]), a("div", { staticClass: "contract-details" }, [a("div", { staticClass: "contract-img" }, [a("img", { attrs: { src: t("6e8d") } })]), a("div", { staticClass: "contact-link" }, [a("div", { staticClass: "contract-head text-h5 font-weight-bold" }, [f._v("BUSD Contract:")]), a("div", { staticClass: "contract-link" }, [a("span", { staticClass: "text-h5 font-weight-light" }, [f._v(f._s(f.busdContract))]), a("v-btn", { attrs: { icon: "" }, on: { click: f.copyBUSDContract } }, [a("v-icon", [f._v("mdi-content-copy")])], 1)], 1)])])]), a("div", { staticClass: "col-sm-2" }, [f._v(" ")])])]), f._m(1)])])
            },
            lf = [function() {
                var f = this,
                    e = f.$createElement,
                    t = f._self._c || e;
                return t("div", { staticClass: "reward-title" }, [t("div", { staticClass: "container" }, [t("div", { staticClass: "row" }, [t("div", { staticClass: "col-sm-12 text-center" }, [t("h2", [f._v("Rewards Distributed To Holders")])])])])])
            }, function() {
                var f = this,
                    e = f.$createElement,
                    t = f._self._c || e;
                return t("div", { staticClass: "dashboard-footer" }, [t("div", { staticClass: "container" }, [t("div", { staticClass: "row" }, [t("div", { staticClass: "col-sm-6" }, [t("ul", [t("li", [t("a", { attrs: { href: " ", target: "_blank" } }, [f._v(" ")])]), t("li", [t("a", { attrs: { href: "  ", target: "_blank" } }, [f._v(" ")])])])]), t("div", { staticClass: "col-sm-6" }, [t("p", [f._v("Copyright® 2022 Shinzo Token. All rights reserved.")])])])])])
            }],
            pf = {
                data: function() { return { egcContract: "0x30338633a8321FCc4533bD47E8E6CC3DC6e844f2", busdContract: "0xe9e7cea3dedca5984780bafc599bd69add087d56", wallet_address: "", wallet_address2: "", wallet_Balance: 0, busd_Balance: 0, unpaid_Balance: 0, bal_conv: 0, data: {}, reflectManuallyLoader: !1, DvdData: {}, totaldis: 0, totalrewared: 0, DvdAPIData: {}, connected: !1, paymentsService: new I, EGCprice: 0, BUSDprice: 0, totalEGCUSDprice: 0, totalBUSDUSDprice: 0, totalEBUSDUSDprice: 0, totalNCBUSDUSDprice: 0, totalDBUSDUSDprice: 0 } },
                watch: { wallet_address: { handler: function() { localStorage.wallet_address = this.wallet_address, this.fetchAccountBalance(), this.fetchUserShares(), this.fetchBusdBalance(), this.getUnpaidEarnings(), this.getDvdData() } } },
                mounted: function() { this.fetchAccountBalance(), this.fetchUserShares(), this.fetchBusdBalance(), this.getUnpaidEarnings(), this.getDvdData() },
                created: function() {
                    var f = this;
                    this.$store.watch((function(f) { return f.wallet.address }), (function() { var e = f.$store.state.wallet.address; "" !== e && (f.wallet_address = e, f.wallet_address2 = e) })), this.connectWeb3(), this.getEGCPrice(), this.getBUSDPrice(), setInterval((function() { f.getEGCPrice(), f.getBUSDPrice() }), 1e4)
                },
                methods: {
                    copyEGCContract: function() { navigator.clipboard.writeText(this.egcContract) },
                    copyBUSDContract: function() { navigator.clipboard.writeText(this.busdContract) },
                    connectWeb3: function() {
                        var f = Object(b["a"])(regeneratorRuntime.mark((function f() {
                            var e = this;
                            return regeneratorRuntime.wrap((function(f) {
                                while (1) switch (f.prev = f.next) {
                                    case 0:
                                        return f.next = 2, this.paymentsService.connect2();
                                    case 2:
                                        this.connected = f.sent, this.connected && (this.getDvdData(), setInterval((function() { e.fetchAccountBalance(), e.fetchUserShares(), e.fetchBusdBalance(), e.getUnpaidEarnings(), e.getDvdData() }), 3e3));
                                    case 4:
                                    case "end":
                                        return f.stop()
                                }
                            }), f, this)
                        })));

                        function e() { return f.apply(this, arguments) }
                        return e
                    }(),
                    fetchAccountBalance: function() {
                        var f = Object(b["a"])(regeneratorRuntime.mark((function f() {
                            return regeneratorRuntime.wrap((function(f) {
                                while (1) switch (f.prev = f.next) {
                                    case 0:
                                        if ("" == this.wallet_address2) { f.next = 6; break }
                                        return f.next = 3, this.paymentsService.getBalanceOfAccount(this.wallet_address2);
                                    case 3:
                                        this.wallet_Balance = f.sent, console.log("wallet_Balance", this.wallet_Balance), this.totalEGCUSDprice = this.wallet_Balance * this.EGCprice;
                                    case 6:
                                    case "end":
                                        return f.stop()
                                }
                            }), f, this)
                        })));

                        function e() { return f.apply(this, arguments) }
                        return e
                    }(),
                    fetchBusdBalance: function() {
                        var f = Object(b["a"])(regeneratorRuntime.mark((function f() {
                            return regeneratorRuntime.wrap((function(f) {
                                while (1) switch (f.prev = f.next) {
                                    case 0:
                                        if ("" == this.wallet_address2) { f.next = 6; break }
                                        return f.next = 3, this.paymentsService.fetchBusdBalance(this.wallet_address2);
                                    case 3:
                                        this.busd_Balance = f.sent, console.log("busd_Balance", this.busd_Balance), this.totalBUSDUSDprice = this.busd_Balance * this.BUSDprice;
                                    case 6:
                                    case "end":
                                        return f.stop()
                                }
                            }), f, this)
                        })));

                        function e() { return f.apply(this, arguments) }
                        return e
                    }(),
                    getUnpaidEarnings: function() {
                        var f = Object(b["a"])(regeneratorRuntime.mark((function f() {
                            return regeneratorRuntime.wrap((function(f) {
                                while (1) switch (f.prev = f.next) {
                                    case 0:
                                        if ("" == this.wallet_address2) { f.next = 6; break }
                                        return f.next = 3, this.paymentsService.getUnpaidEarnings(this.wallet_address2);
                                    case 3:
                                        this.unpaid_Balance = f.sent, console.log("unpaid_Balance", this.unpaid_Balance), this.totalNCBUSDUSDprice = this.unpaid_Balance * this.BUSDprice;
                                    case 6:
                                    case "end":
                                        return f.stop()
                                }
                            }), f, this)
                        })));

                        function e() { return f.apply(this, arguments) }
                        return e
                    }(),
                    getDvdData: function() {
                        var f = Object(b["a"])(regeneratorRuntime.mark((function f() {
                            return regeneratorRuntime.wrap((function(f) {
                                while (1) switch (f.prev = f.next) {
                                    case 0:
                                        return f.next = 2, this.paymentsService.getDvdData(this.wallet_address2);
                                    case 2:
                                        this.DvdData = f.sent, console.log("DvdData", this.DvdData), this.totaldis = this.DvdData.totalDistributed, this.totalDBUSDUSDprice = this.totaldis * this.BUSDprice;
                                    case 6:
                                    case "end":
                                        return f.stop()
                                }
                            }), f, this)
                        })));

                        function e() { return f.apply(this, arguments) }
                        return e
                    }(),
                    getDvdDataAPI: function() {
                        var f = Object(b["a"])(regeneratorRuntime.mark((function f() {
                            return regeneratorRuntime.wrap((function(f) {
                                while (1) switch (f.prev = f.next) {
                                    case 0:
                                        return f.next = 2, this.paymentsService.getDvdDataAPI();
                                    case 2:
                                        this.DvdAPIData = f.sent, console.log("DvdData", this.DvdAPIData), this.totaldis = this.DvdAPIData.totalDistributed;
                                    case 5:
                                    case "end":
                                        return f.stop()
                                }
                            }), f, this)
                        })));

                        function e() { return f.apply(this, arguments) }
                        return e
                    }(),
                    fetchUserShares: function() {
                        var f = Object(b["a"])(regeneratorRuntime.mark((function f() {
                            return regeneratorRuntime.wrap((function(f) {
                                while (1) switch (f.prev = f.next) {
                                    case 0:
                                        if ("" == this.wallet_address2) { f.next = 7; break }
                                        return f.next = 3, this.paymentsService.fetchUserShares(this.wallet_address2);
                                    case 3:
                                        this.usershares = f.sent, console.log("shares", this.shares), this.totalrewared = (this.usershares.totalRealised / 1e18).toFixed(3), this.totalEBUSDUSDprice = this.totalrewared * this.BUSDprice;
                                    case 7:
                                    case "end":
                                        return f.stop()
                                }
                            }), f, this)
                        })));

                        function e() { return f.apply(this, arguments) }
                        return e
                    }(),
                    reflectManually: function() {
                        var f = Object(b["a"])(regeneratorRuntime.mark((function f() {
                            var e;
                            return regeneratorRuntime.wrap((function(f) {
                                while (1) switch (f.prev = f.next) {
                                    case 0:
                                        if ("" == this.wallet_address) { f.next = 12; break }
                                        if (this.wallet_address == this.wallet_address2) { f.next = 4; break }
                                        return alert("Wallet address and input address are diffrent!"), f.abrupt("return", !1);
                                    case 4:
                                        return this.reflectManuallyLoader = !0, f.next = 7, this.paymentsService.reflectManually(this.wallet_address);
                                    case 7:
                                        e = f.sent, console.log("reflectManually", e), (e || 0 == e || void 0 == e) && (this.reflectManuallyLoader = !1, this.fetchAccountBalance(), this.fetchUserShares(), this.fetchBusdBalance(), this.getUnpaidEarnings(), this.getDvdData()), f.next = 13;
                                        break;
                                    case 12:
                                        alert("Please, Connect your wallet!");
                                    case 13:
                                    case "end":
                                        return f.stop()
                                }
                            }), f, this)
                        })));

                        function e() { return f.apply(this, arguments) }
                        return e
                    }(),
                    getEGCPrice: function() {
                        var f = Object(b["a"])(regeneratorRuntime.mark((function f() {
                            var e;
                            return regeneratorRuntime.wrap((function(f) {
                                while (1) switch (f.prev = f.next) {
                                    case 0:
                                        return f.next = 2, this.paymentsService.getEGCPrice();
                                    case 2:
                                        e = f.sent, e && (console.log("getEGCPrice", e), this.EGCprice = e);
                                    case 4:
                                    case "end":
                                        return f.stop()
                                }
                            }), f, this)
                        })));

                        function e() { return f.apply(this, arguments) }
                        return e
                    }(),
                    getBUSDPrice: function() {
                        var f = Object(b["a"])(regeneratorRuntime.mark((function f() {
                            var e;
                            return regeneratorRuntime.wrap((function(f) {
                                while (1) switch (f.prev = f.next) {
                                    case 0:
                                        return f.next = 2, this.paymentsService.getBUSDPrice();
                                    case 2:
                                        e = f.sent, e && (console.log("getBUSDPrice", e), this.BUSDprice = e);
                                    case 4:
                                    case "end":
                                        return f.stop()
                                }
                            }), f, this)
                        })));

                        function e() { return f.apply(this, arguments) }
                        return e
                    }()
                }
            },
            yf = pf,
            mf = (t("0c41"), t("b0af")),
            vf = t("ce7e"),
            hf = t("8654"),
            gf = Object(o["a"])(yf, uf, lf, !1, null, null, null),
            wf = gf.exports;
        l()(gf, { VBtn: p["a"], VCard: mf["a"], VCol: Q["a"], VDivider: vf["a"], VIcon: y["a"], VRow: af["a"], VTextField: hf["a"] });
        var Tf = function() {
                var f = this,
                    e = f.$createElement;
                f._self._c;
                return f._m(0)
            },
            xf = [function() {
                var f = this,
                    e = f.$createElement,
                    t = f._self._c || e;
                return t("div", [t("div", { staticClass: "mt-4" }, [t("div", { attrs: { align: "center" } }, [t("iframe", { staticStyle: { width: "100%", height: "100vh" }, attrs: { src: "https://swap.evergrowcoin.com/swap?inputCurrency=BNB&outputCurrency=0x30338633a8321FCc4533bD47E8E6CC3DC6e844f2", frameBorder: "0" } })])])])
            }],
            Cf = { data: function() { return {} } },
            _f = Cf,
            kf = Object(o["a"])(_f, Tf, xf, !1, null, null, null),
            Df = kf.exports,
            Bf = function() {
                var f = this,
                    e = f.$createElement,
                    t = f._self._c || e;
                return t("div", { staticClass: "text-center" }, [t("div", { staticClass: "mb-3 mt-3" }, [t("v-btn", { attrs: { color: "blue darken-4" }, on: { click: f.raminit } }, [f._v("Buy BNB")])], 1)])
            },
            Sf = [],
            Mf = t("11fa"),
            Of = { created: function() {}, methods: { raminit: function() { new Mf["a"]({ variant: "auto", hostAppName: "EverGrow", hostLogoUrl: t("343d"), defaultAsset: "BSC_BNB" }).show() } } },
            Af = Of,
            Rf = (t("15f9"), Object(o["a"])(Af, Bf, Sf, !1, null, null, null)),
            Ef = Rf.exports;
        l()(Rf, { VBtn: p["a"] }), a["default"].use(of["a"]);
        var Uf = [{ path: "/", redirect: "/dashboard" }, { path: "/dashboard", name: "Dashboard", component: wf, meta: { title: "Dashboard" } }, { path: "/swap", name: "Swap", component: Df, meta: { title: "Swap Tokens" } }, { path: "/buy", name: "Buy", component: Ef, meta: { title: "Buy Crypto" } }],
            jf = new of["a"]({ mode: "history", base: "/", routes: Uf });
        jf.afterEach((function(f) { a["default"].nextTick((function() { document.title = "Shinzo Token - " + f.meta.title || !1 })) }));
        var Vf = jf,
            Pf = t("2f62"),
            Ff = { snackbar: "" },
            Gf = {
                setSnack: function(f, e) {
                    var t = f.commit;
                    t("setSnack", e)
                }
            },
            If = { setSnack: function(f, e) { f.snackbar = e } },
            Nf = { state: Ff, actions: Gf, mutations: If },
            Lf = { address: "" },
            Wf = {
                setAddress: function(f, e) {
                    var t = f.commit;
                    t("setAddress", e)
                }
            },
            Hf = { setAddress: function(f, e) { f.address = e } },
            Jf = { state: Lf, actions: Wf, mutations: Hf };
        a["default"].use(Pf["a"]);
        var Qf = new Pf["a"].Store({ modules: { snackbar: Nf, wallet: Jf } }),
            Xf = t("f2f3"),
            zf = t("6202"),
            Yf = t("9522"),
            qf = t("130e");
        a["default"].use(qf["a"], E.a), a["default"].use(Xf["a"].plugin, Qf), a["default"].i18n.add("En", zf), a["default"].i18n.add("Nl", Yf), a["default"].i18n.set("En"), a["default"].config.productionTip = !1, a["default"].prototype.$urlPrefix = "", new a["default"]({ vuetify: df, router: Vf, render: function(f) { return f(bf) }, store: Qf }).$mount("#app")
    },
    "5c0b": function(f, e, t) {
        "use strict";
        t("9c0c")
    },
    6: function(f, e) {},
    6202: function(f) { f.exports = JSON.parse("{}") },
    "652c": function(f, e, t) { f.exports = t.p + "img/Arrow_Icon.ba246326.png" },
    "6e8d": function(f, e, t) { f.exports = t.p + "img/Contract_icon.61537da5.png" },
    7: function(f, e) {},
    "7b13": function(f, e, t) {},
    "7b50": function(f, e, t) { f.exports = t.p + "img/User_Icon.fcffcad4.png" },
    8: function(f, e) {},
    9: function(f, e) {},
    9522: function(f) { f.exports = JSON.parse("{}") },
    9624: function(f, e, t) { f.exports.Payments = t("a1bc") },
    "97e0": function(f, e, t) { f.exports = t.p + "img/EGC_Logo.db55568d.png" },
    "9c0c": function(f, e, t) {},
    "9e77": function(f, e, t) { f.exports = t.p + "img/Wallet_Icon.d00b11b2.png" },
    a1bc: function(f) { f.exports = JSON.parse('{"contract":"0x30338633a8321FCc4533bD47E8E6CC3DC6e844f2","abi":"[{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_dexRouter\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Approval\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amountBNB\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"amountBOG\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"AutoLiquify\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"duration\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"BuybackMultiplierActive\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"OwnershipTransferred\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Transfer\\",\\"type\\":\\"event\\"},{\\"inputs\\":[],\\"name\\":\\"MASK\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"WBNB\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"_maxTxAmount\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"holder\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"}],\\"name\\":\\"allowance\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"approve\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"}],\\"name\\":\\"approveMax\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"adr\\",\\"type\\":\\"address\\"}],\\"name\\":\\"authorize\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"autoBuybackEnabled\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"autoLiquidityReceiver\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"account\\",\\"type\\":\\"address\\"}],\\"name\\":\\"balanceOf\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"clearBuybackMultiplier\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"decimals\\",\\"outputs\\":[{\\"internalType\\":\\"uint8\\",\\"name\\":\\"\\",\\"type\\":\\"uint8\\"}],\\"stateMutability\\":\\"pure\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"distributorAddress\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"getCirculatingSupply\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"accuracy\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"getLiquidityBacking\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"getMultipliedFee\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"getOwner\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"selling\\",\\"type\\":\\"bool\\"}],\\"name\\":\\"getTotalFee\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"adr\\",\\"type\\":\\"address\\"}],\\"name\\":\\"isAuthorized\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"target\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"accuracy\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"isOverLiquified\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"account\\",\\"type\\":\\"address\\"}],\\"name\\":\\"isOwner\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"launch\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"launchedAt\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"launchedAtTimestamp\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"marketingFeeReceiver\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"name\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"pure\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"pair\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"router\\",\\"outputs\\":[{\\"internalType\\":\\"contract IDEXRouter\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"_enabled\\",\\"type\\":\\"bool\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_cap\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_amount\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_period\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"setAutoBuybackSettings\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"numerator\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"denominator\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"length\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"setBuybackMultiplierSettings\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_minPeriod\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_minDistribution\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"setDistributionCriteria\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"gas\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"setDistributorSettings\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_autoLiquidityReceiver\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"_marketingFeeReceiver\\",\\"type\\":\\"address\\"}],\\"name\\":\\"setFeeReceivers\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_liquidityFee\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_buybackFee\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_reflectionFee\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_marketingFee\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_feeDenominator\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"setFees\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"holder\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"bool\\",\\"name\\":\\"exempt\\",\\"type\\":\\"bool\\"}],\\"name\\":\\"setIsDividendExempt\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"holder\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"bool\\",\\"name\\":\\"exempt\\",\\"type\\":\\"bool\\"}],\\"name\\":\\"setIsFeeExempt\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"holder\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"bool\\",\\"name\\":\\"exempt\\",\\"type\\":\\"bool\\"}],\\"name\\":\\"setIsTxLimitExempt\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"_enabled\\",\\"type\\":\\"bool\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"setSwapBackSettings\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_target\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_denominator\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"setTargetLiquidity\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"setTxLimit\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"swapEnabled\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"swapThreshold\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"symbol\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"pure\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"totalSupply\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"recipient\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transfer\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"sender\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"recipient\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transferFrom\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address payable\\",\\"name\\":\\"adr\\",\\"type\\":\\"address\\"}],\\"name\\":\\"transferOwnership\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"bool\\",\\"name\\":\\"triggerBuybackMultiplier\\",\\"type\\":\\"bool\\"}],\\"name\\":\\"triggerZeusBuyback\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"adr\\",\\"type\\":\\"address\\"}],\\"name\\":\\"unauthorize\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"stateMutability\\":\\"payable\\",\\"type\\":\\"receive\\"}]","busdabi":"[{\\"inputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Approval\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"previousOwner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"newOwner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"OwnershipTransferred\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Transfer\\",\\"type\\":\\"event\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"_decimals\\",\\"outputs\\":[{\\"internalType\\":\\"uint8\\",\\"name\\":\\"\\",\\"type\\":\\"uint8\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"_name\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"_symbol\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"}],\\"name\\":\\"allowance\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"approve\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"account\\",\\"type\\":\\"address\\"}],\\"name\\":\\"balanceOf\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"burn\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"decimals\\",\\"outputs\\":[{\\"internalType\\":\\"uint8\\",\\"name\\":\\"\\",\\"type\\":\\"uint8\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"subtractedValue\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"decreaseAllowance\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getOwner\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"addedValue\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"increaseAllowance\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"mint\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"name\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"owner\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[],\\"name\\":\\"renounceOwnership\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"symbol\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"totalSupply\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"recipient\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transfer\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"sender\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"recipient\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transferFrom\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"newOwner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"transferOwnership\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}]","bytecode":"608060405273e9e7cea3dedca5984780bafc599bd69add087d56600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073bb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061dead600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061dead600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506009600a62000186919062000da8565b66038d7ea4c680006200019a919062000ee5565b600755620001bb61019060075462000b2f60201b620021741790919060201c565b60085560c8600e5561012c600f5561032060105560646011556105786012556127106013556019601655606460175560c8601c556064601d55610708601f556000602060006101000a81548160ff0219169083151502179055506207a1206029556001602a60006101000a81548160ff0219169083151502179055506107d060075462000249919062000d15565b602b553480156200025957600080fd5b5060405162006f6338038062006f6383398181016040528101906200027f919062000c60565b33806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505080601860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550601860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b158015620003c257600080fd5b505afa158015620003d7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003fd919062000c60565b73ffffffffffffffffffffffffffffffffffffffff1663c9c65396600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16306040518363ffffffff1660e01b81526004016200045b92919062000ccb565b602060405180830381600087803b1580156200047657600080fd5b505af11580156200048b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620004b1919062000c60565b601960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600754600a60003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000601860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550601860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ad5c46486040518163ffffffff1660e01b815260040160206040518083038186803b158015620005ff57600080fd5b505afa15801562000614573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200063a919062000c60565b600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080604051620006899062000c3b565b62000695919062000cae565b604051809103906000f080158015620006b2573d6000803e3d6000fd5b50602760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16602860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600d6000601960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600d60003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600d6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001602160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555033601460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033601560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000a408160075462000b4760201b60201c565b5062000a77601960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660075462000b4760201b60201c565b50600754600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60075460405162000b20919062000cf8565b60405180910390a35062001016565b6000818362000b3f919062000d15565b905092915050565b600081600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405162000c29919062000cf8565b60405180910390a36001905092915050565b611d46806200521d83390190565b60008151905062000c5a8162000ffc565b92915050565b60006020828403121562000c7357600080fd5b600062000c838482850162000c49565b91505092915050565b62000c978162000f46565b82525050565b62000ca88162000f7a565b82525050565b600060208201905062000cc5600083018462000c8c565b92915050565b600060408201905062000ce2600083018562000c8c565b62000cf1602083018462000c8c565b9392505050565b600060208201905062000d0f600083018462000c9d565b92915050565b600062000d228262000f7a565b915062000d2f8362000f7a565b92508262000d425762000d4162000fc0565b5b828204905092915050565b6000808291508390505b600185111562000d9f5780860481111562000d775762000d7662000f91565b5b600185161562000d875780820291505b808102905062000d978562000fef565b945062000d57565b94509492505050565b600062000db58262000f7a565b915062000dc28362000f84565b925062000df17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848462000df9565b905092915050565b60008262000e0b576001905062000ede565b8162000e1b576000905062000ede565b816001811462000e34576002811462000e3f5762000e75565b600191505062000ede565b60ff84111562000e545762000e5362000f91565b5b8360020a91508482111562000e6e5762000e6d62000f91565b5b5062000ede565b5060208310610133831016604e8410600b841016171562000eaf5782820a90508381111562000ea95762000ea862000f91565b5b62000ede565b62000ebe848484600162000d4d565b9250905081840481111562000ed85762000ed762000f91565b5b81810290505b9392505050565b600062000ef28262000f7a565b915062000eff8362000f7a565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161562000f3b5762000f3a62000f91565b5b828202905092915050565b600062000f538262000f5a565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60008160011c9050919050565b620010078162000f46565b81146200101357600080fd5b50565b6141f780620010266000396000f3fe6080604052600436106102b25760003560e01c806395d89b4111610175578063d806d12f116100dc578063f1f3bca311610095578063f708a64f1161006f578063f708a64f14610abd578063f84ba65d14610ae6578063f887ea4014610b0f578063fe9fbb8014610b3a576102b9565b8063f1f3bca314610a2e578063f2fde38b14610a6b578063f5cfec0a14610a94576102b9565b8063d806d12f1461091e578063dd62ed3e14610949578063df20fd4914610986578063e91f214e146109af578063e96fada2146109da578063f0b37c0414610a05576102b9565b8063b210b06d1161012e578063b210b06d14610820578063b6a5d7de14610837578063bf56b37114610860578063c6d2577d1461088b578063ca33e64c146108b6578063d51ed1c8146108e1576102b9565b806395d89b41146107105780639d1944f51461073b578063a4b45c0014610764578063a51af4c51461078d578063a8aa1b31146107b8578063a9059cbb146107e3576102b9565b80632d48e89611610219578063658d4b7f116101d2578063658d4b7f146105fe5780636ddd17131461062757806370a08231146106525780637d1db4a51461068f578063893d20e8146106ba5780638dd95002146106e5576102b9565b80632d48e896146104dc5780632f54bf6e14610505578063313ce567146105425780633bb8a8d41461056d578063571ac8b0146105985780635c85974f146105d5576102b9565b80631161ae391161026b5780631161ae39146103ba57806318160ddd146103f7578063201e7991146104225780632375ce401461044b57806323b872dd146104745780632b112e49146104b1576102b9565b806301339c21146102be5780630445b667146102d5578063048c7baf1461030057806304a66b481461032957806306fdde0314610352578063095ea7b31461037d576102b9565b366102b957005b600080fd5b3480156102ca57600080fd5b506102d3610b77565b005b3480156102e157600080fd5b506102ea610c14565b6040516102f79190613dcd565b60405180910390f35b34801561030c57600080fd5b5061032760048036038101906103229190613780565b610c1a565b005b34801561033557600080fd5b50610350600480360381019061034b9190613922565b610ca6565b005b34801561035e57600080fd5b50610367610d71565b6040516103749190613d2b565b60405180910390f35b34801561038957600080fd5b506103a4600480360381019061039f91906136df565b610dae565b6040516103b19190613ca9565b60405180910390f35b3480156103c657600080fd5b506103e160048036038101906103dc9190613848565b610ea0565b6040516103ee9190613ca9565b60405180910390f35b34801561040357600080fd5b5061040c610eb5565b6040516104199190613dcd565b60405180910390f35b34801561042e57600080fd5b5061044960048036038101906104449190613848565b610ebf565b005b34801561045757600080fd5b50610472600480360381019061046d9190613884565b610f19565b005b34801561048057600080fd5b5061049b60048036038101906104969190613654565b610f9f565b6040516104a89190613ca9565b60405180910390f35b3480156104bd57600080fd5b506104c6611181565b6040516104d39190613dcd565b60405180910390f35b3480156104e857600080fd5b5061050360048036038101906104fe9190613848565b611203565b005b34801561051157600080fd5b5061052c600480360381019061052791906135c6565b6112de565b6040516105399190613ca9565b60405180910390f35b34801561054e57600080fd5b50610557611337565b6040516105649190613e6b565b60405180910390f35b34801561057957600080fd5b50610582611340565b60405161058f9190613ca9565b60405180910390f35b3480156105a457600080fd5b506105bf60048036038101906105ba91906135c6565b611353565b6040516105cc9190613ca9565b60405180910390f35b3480156105e157600080fd5b506105fc60048036038101906105f791906137e3565b611368565b005b34801561060a57600080fd5b50610625600480360381019061062091906136a3565b6113d6565b005b34801561063357600080fd5b5061063c611479565b6040516106499190613ca9565b60405180910390f35b34801561065e57600080fd5b50610679600480360381019061067491906135c6565b61148c565b6040516106869190613dcd565b60405180910390f35b34801561069b57600080fd5b506106a46114d5565b6040516106b19190613dcd565b60405180910390f35b3480156106c657600080fd5b506106cf6114db565b6040516106dc9190613bc0565b60405180910390f35b3480156106f157600080fd5b506106fa611504565b6040516107079190613bc0565b60405180910390f35b34801561071c57600080fd5b5061072561152a565b6040516107329190613d2b565b60405180910390f35b34801561074757600080fd5b50610762600480360381019061075d91906137e3565b611567565b005b34801561077057600080fd5b5061078b60048036038101906107869190613618565b6115c8565b005b34801561079957600080fd5b506107a2611696565b6040516107af9190613bc0565b60405180910390f35b3480156107c457600080fd5b506107cd6116bc565b6040516107da9190613bc0565b60405180910390f35b3480156107ef57600080fd5b5061080a600480360381019061080591906136df565b6116e2565b6040516108179190613ca9565b60405180910390f35b34801561082c57600080fd5b506108356116f7565b005b34801561084357600080fd5b5061085e600480360381019061085991906135c6565b611749565b005b34801561086c57600080fd5b506108756117eb565b6040516108829190613dcd565b60405180910390f35b34801561089757600080fd5b506108a06117f1565b6040516108ad9190613dcd565b60405180910390f35b3480156108c257600080fd5b506108cb6117f7565b6040516108d89190613bc0565b60405180910390f35b3480156108ed57600080fd5b50610908600480360381019061090391906137e3565b61181d565b6040516109159190613dcd565b60405180910390f35b34801561092a57600080fd5b5061093361188f565b6040516109409190613dcd565b60405180910390f35b34801561095557600080fd5b50610970600480360381019061096b9190613618565b6119b6565b60405161097d9190613dcd565b60405180910390f35b34801561099257600080fd5b506109ad60048036038101906109a89190613744565b611a3d565b005b3480156109bb57600080fd5b506109c4611aaa565b6040516109d19190613dcd565b60405180910390f35b3480156109e657600080fd5b506109ef611ac0565b6040516109fc9190613bc0565b60405180910390f35b348015610a1157600080fd5b50610a2c6004803603810190610a2791906135c6565b611ae6565b005b348015610a3a57600080fd5b50610a556004803603810190610a50919061371b565b611b89565b604051610a629190613dcd565b60405180910390f35b348015610a7757600080fd5b50610a926004803603810190610a8d91906135ef565b611bdd565b005b348015610aa057600080fd5b50610abb6004803603810190610ab6919061380c565b611cf6565b005b348015610ac957600080fd5b50610ae46004803603810190610adf91906136a3565b611db5565b005b348015610af257600080fd5b50610b0d6004803603810190610b0891906136a3565b612055565b005b348015610b1b57600080fd5b50610b246120f8565b604051610b319190613cc4565b60405180910390f35b348015610b4657600080fd5b50610b616004803603810190610b5c91906135c6565b61211e565b604051610b6e9190613ca9565b60405180910390f35b610b803361211e565b610bbf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb690613dad565b60405180910390fd5b6000601a5414610c04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfb90613d6d565b60405180910390fd5b43601a8190555042601b81905550565b602b5481565b610c233361211e565b610c62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5990613dad565b60405180910390fd5b83602060006101000a81548160ff02191690831515021790555082602281905550600060238190555081602481905550806025819055504360268190555050505050565b610caf3361211e565b610cee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce590613dad565b60405180910390fd5b84600e8190555083600f819055508260108190555081601181905550610d4182610d3385610d25888a61218a90919063ffffffff16565b61218a90919063ffffffff16565b61218a90919063ffffffff16565b601281905550806013819055506004601354610d5d9190613f31565b60125410610d6a57600080fd5b5050505050565b60606040518060400160405280600d81526020017f4576657247726f7720436f696e00000000000000000000000000000000000000815250905090565b600081600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610e8e9190613dcd565b60405180910390a36001905092915050565b600082610eac8361181d565b11905092915050565b6000600754905090565b610ec83361211e565b610f07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610efe90613dad565b60405180910390fd5b81601681905550806017819055505050565b610f223361211e565b610f61576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5890613dad565b60405180910390fd5b60028284610f6f9190613f31565b11158015610f7c57508183115b610f8557600080fd5b82601c8190555081601d8190555080601f81905550505050565b6000600754600a60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461116d576110ec826040518060400160405280601681526020017f496e73756666696369656e7420416c6c6f77616e636500000000000000000000815250600a60008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121a09092919063ffffffff16565b600a60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b6111788484846121f5565b90509392505050565b60006111fe6111b1600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661148c565b6111f06111df600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661148c565b60075461272290919063ffffffff16565b61272290919063ffffffff16565b905090565b61120c3361211e565b61124b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124290613dad565b60405180910390fd5b602760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632d48e89683836040518363ffffffff1660e01b81526004016112a8929190613e42565b600060405180830381600087803b1580156112c257600080fd5b505af11580156112d6573d6000803e3d6000fd5b505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b60006009905090565b602060009054906101000a900460ff1681565b600061136182600754610dae565b9050919050565b6113713361211e565b6113b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a790613dad565b60405180910390fd5b6103e86007546113c09190613f31565b8110156113cc57600080fd5b8060088190555050565b6113df3361211e565b61141e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161141590613dad565b60405180910390fd5b80600b60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b602a60009054906101000a900460ff1681565b6000600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60085481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606040518060400160405280600381526020017f4547430000000000000000000000000000000000000000000000000000000000815250905090565b6115703361211e565b6115af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115a690613dad565b60405180910390fd5b620b71b081106115be57600080fd5b8060298190555050565b6115d13361211e565b611610576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161160790613dad565b60405180910390fd5b81601460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080601560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b602860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b601960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006116ef3384846121f5565b905092915050565b6117003361211e565b61173f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161173690613dad565b60405180910390fd5b6000601e81905550565b611752336112de565b611791576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161178890613d8d565b60405180910390fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b601a5481565b601b5481565b601460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061188861182a611181565b61187a61186b600261185d601960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661148c565b61273890919063ffffffff16565b8561273890919063ffffffff16565b61217490919063ffffffff16565b9050919050565b60004262015180601b546118a39190613edb565b11156118db576118d46013546118c661465060125461273890919063ffffffff16565b61217490919063ffffffff16565b90506119b3565b426118f3601f54601e5461218a90919063ffffffff16565b11156119ad57600061192442611916601f54601e5461218a90919063ffffffff16565b61272290919063ffffffff16565b90506000611967601254611959601d5461194b601c5460125461273890919063ffffffff16565b61217490919063ffffffff16565b61272290919063ffffffff16565b90506119a4611993601f54611985858561273890919063ffffffff16565b61217490919063ffffffff16565b60125461218a90919063ffffffff16565b925050506119b3565b60125490505b90565b6000600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b611a463361211e565b611a85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a7c90613dad565b60405180910390fd5b81602a60006101000a81548160ff02191690831515021790555080602b819055505050565b6fffffffffffffffffffffffffffffffff801681565b601560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b611aef336112de565b611b2e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b2590613d8d565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6000436001601a54611b9b9190613edb565b10611bbd57611bb6600160135461272290919063ffffffff16565b9050611bd8565b8115611bd257611bcb61188f565b9050611bd8565b60125490505b919050565b611be6336112de565b611c25576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c1c90613d8d565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f04dba622d284ed0014ee4b9a6a68386be1a4c08a4913ae272de89199cc68616381604051611ceb9190613bdb565b60405180910390a150565b611cff3361211e565b611d3e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d3590613dad565b60405180910390fd5b611d6a82600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661274e565b8015611db15742601e819055507f39d2389ec5c1fa77b2c0d374bc61b6d7bd97ccba280fcdeb4e9c7644898d7c3a601f54604051611da89190613dcd565b60405180910390a15b5050565b611dbe3361211e565b611dfd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611df490613dad565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614158015611e875750601960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b611e9057600080fd5b80600d60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508015611f8257602760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166314b6ca968360006040518363ffffffff1660e01b8152600401611f4b929190613bf6565b600060405180830381600087803b158015611f6557600080fd5b505af1158015611f79573d6000803e3d6000fd5b50505050612051565b602760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166314b6ca9683600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518363ffffffff1660e01b815260040161201e929190613c1f565b600060405180830381600087803b15801561203857600080fd5b505af115801561204c573d6000803e3d6000fd5b505050505b5050565b61205e3361211e565b61209d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161209490613dad565b60405180910390fd5b80600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b601860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600081836121829190613f31565b905092915050565b600081836121989190613edb565b905092915050565b60008383111582906121e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121df9190613d2b565b60405180910390fd5b5082840390509392505050565b6000602c60009054906101000a900460ff161561221e5761221784848461299e565b905061271b565b6122288483612b0c565b612230612ba9565b1561223e5761223d612c80565b5b61224661323c565b15612254576122536132ef565b5b6122dd826040518060400160405280601481526020017f496e73756666696369656e742042616c616e6365000000000000000000000000815250600960008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121a09092919063ffffffff16565b600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600061232b8561336b565b6123355782612341565b6123408585856133c2565b5b905061239581600960008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461218a90919063ffffffff16565b600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600d60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166124fb57602760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166314b6ca9686600960008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518363ffffffff1660e01b81526004016124c5929190613c1f565b600060405180830381600087803b1580156124df57600080fd5b505af19250505080156124f0575060015b6124f9576124fa565b5b5b600d60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661261e57602760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166314b6ca9685600960008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518363ffffffff1660e01b81526004016125e8929190613c1f565b600060405180830381600087803b15801561260257600080fd5b505af1925050508015612613575060015b61261c5761261d565b5b5b602760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ffb2c4796029546040518263ffffffff1660e01b815260040161267b9190613dcd565b600060405180830381600087803b15801561269557600080fd5b505af19250505080156126a6575060015b6126af576126b0565b5b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161270d9190613dcd565b60405180910390a360019150505b9392505050565b600081836127309190613fbc565b905092915050565b600081836127469190613f62565b905092915050565b6001602c60006101000a81548160ff0219169083151502179055506000600267ffffffffffffffff8111156127ac577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156127da5781602001602082028036833780820191505090505b509050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160008151811061283a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505030816001815181106128af577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050601860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b6f9de958460008486426040518663ffffffff1660e01b815260040161294c9493929190613cdf565b6000604051808303818588803b15801561296557600080fd5b505af1158015612979573d6000803e3d6000fd5b5050505050506000602c60006101000a81548160ff0219169083151502179055505050565b6000612a29826040518060400160405280601481526020017f496e73756666696369656e742042616c616e6365000000000000000000000000815250600960008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121a09092919063ffffffff16565b600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612abe82600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461218a90919063ffffffff16565b600960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600190509392505050565b60085481111580612b665750600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b612ba5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612b9c90613d4d565b60405180910390fd5b5050565b6000601960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614158015612c165750602c60009054906101000a900460ff16155b8015612c2e5750602a60009054906101000a900460ff165b8015612c7b5750602b54600960003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b905090565b6001602c60006101000a81548160ff0219169083151502179055506000612cab601654601754610ea0565b612cb757600e54612cba565b60005b90506000612cfa6002612cec601254612cde86602b5461273890919063ffffffff16565b61217490919063ffffffff16565b61217490919063ffffffff16565b90506000612d1382602b5461272290919063ffffffff16565b90506000600267ffffffffffffffff811115612d58577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015612d865781602001602082028036833780820191505090505b5090503081600081518110612dc4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681600181518110612e5b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506000479050601860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663791ac9478460008530426040518663ffffffff1660e01b8152600401612efe959493929190613de8565b600060405180830381600087803b158015612f1857600080fd5b505af1158015612f2c573d6000803e3d6000fd5b505050506000612f45824761272290919063ffffffff16565b90506000612f71612f6060028961217490919063ffffffff16565b60125461272290919063ffffffff16565b90506000612fad6002612f9f84612f918c8861273890919063ffffffff16565b61217490919063ffffffff16565b61217490919063ffffffff16565b90506000612fd883612fca6010548761273890919063ffffffff16565b61217490919063ffffffff16565b9050600061300384612ff56011548861273890919063ffffffff16565b61217490919063ffffffff16565b9050602760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0836040518263ffffffff1660e01b81526004016000604051808303818588803b15801561306f57600080fd5b505af193505050508015613081575060015b61308a5761308b565b5b601560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156130f3573d6000803e3d6000fd5b50600089111561321557601860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f305d71984308c600080601460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16426040518863ffffffff1660e01b815260040161318696959493929190613c48565b6060604051808303818588803b15801561319f57600080fd5b505af11580156131b3573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906131d891906138d3565b5050507f424db2872186fa7e7afa7a5e902ed3b49a2ef19c2f5431e672462495dd6b4506838a60405161320c929190613e42565b60405180910390a15b505050505050505050506000602c60006101000a81548160ff021916908315150217905550565b6000601960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141580156132a95750602c60009054906101000a900460ff16155b80156132c15750602060009054906101000a900460ff165b80156132dc5750436025546026546132d99190613edb565b11155b80156132ea57506024544710155b905090565b61331d602454600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661274e565b4360268190555061333b60245460235461218a90919063ffffffff16565b6023819055506022546023541115613369576000602060006101000a81548160ff0219169083151502179055505b565b6000600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16159050919050565b600080613444601354613436613427601960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1614611b89565b8661273890919063ffffffff16565b61217490919063ffffffff16565b905061349881600960003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461218a90919063ffffffff16565b600960003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516135389190613dcd565b60405180910390a3613553818461272290919063ffffffff16565b9150509392505050565b60008135905061356c81614165565b92915050565b6000813590506135818161417c565b92915050565b60008135905061359681614193565b92915050565b6000813590506135ab816141aa565b92915050565b6000815190506135c0816141aa565b92915050565b6000602082840312156135d857600080fd5b60006135e68482850161355d565b91505092915050565b60006020828403121561360157600080fd5b600061360f84828501613572565b91505092915050565b6000806040838503121561362b57600080fd5b60006136398582860161355d565b925050602061364a8582860161355d565b9150509250929050565b60008060006060848603121561366957600080fd5b60006136778682870161355d565b93505060206136888682870161355d565b92505060406136998682870161359c565b9150509250925092565b600080604083850312156136b657600080fd5b60006136c48582860161355d565b92505060206136d585828601613587565b9150509250929050565b600080604083850312156136f257600080fd5b60006137008582860161355d565b92505060206137118582860161359c565b9150509250929050565b60006020828403121561372d57600080fd5b600061373b84828501613587565b91505092915050565b6000806040838503121561375757600080fd5b600061376585828601613587565b92505060206137768582860161359c565b9150509250929050565b6000806000806080858703121561379657600080fd5b60006137a487828801613587565b94505060206137b58782880161359c565b93505060406137c68782880161359c565b92505060606137d78782880161359c565b91505092959194509250565b6000602082840312156137f557600080fd5b60006138038482850161359c565b91505092915050565b6000806040838503121561381f57600080fd5b600061382d8582860161359c565b925050602061383e85828601613587565b9150509250929050565b6000806040838503121561385b57600080fd5b60006138698582860161359c565b925050602061387a8582860161359c565b9150509250929050565b60008060006060848603121561389957600080fd5b60006138a78682870161359c565b93505060206138b88682870161359c565b92505060406138c98682870161359c565b9150509250925092565b6000806000606084860312156138e857600080fd5b60006138f6868287016135b1565b9350506020613907868287016135b1565b9250506040613918868287016135b1565b9150509250925092565b600080600080600060a0868803121561393a57600080fd5b60006139488882890161359c565b95505060206139598882890161359c565b945050604061396a8882890161359c565b935050606061397b8882890161359c565b925050608061398c8882890161359c565b9150509295509295909350565b60006139a583836139c0565b60208301905092915050565b6139ba81614057565b82525050565b6139c981613ff0565b82525050565b6139d881613ff0565b82525050565b60006139e982613e96565b6139f38185613eb9565b93506139fe83613e86565b8060005b83811015613a2f578151613a168882613999565b9750613a2183613eac565b925050600181019050613a02565b5085935050505092915050565b613a4581614014565b82525050565b613a5481614069565b82525050565b613a638161408d565b82525050565b6000613a7482613ea1565b613a7e8185613eca565b9350613a8e8185602086016140c3565b613a9781614154565b840191505092915050565b6000613aaf601183613eca565b91507f5458204c696d69742045786365656465640000000000000000000000000000006000830152602082019050919050565b6000613aef601483613eca565b91507f416c7265616479206c61756e6368656420626f690000000000000000000000006000830152602082019050919050565b6000613b2f600683613eca565b91507f214f574e455200000000000000000000000000000000000000000000000000006000830152602082019050919050565b6000613b6f600b83613eca565b91507f21415554484f52495a45440000000000000000000000000000000000000000006000830152602082019050919050565b613bab81614040565b82525050565b613bba8161404a565b82525050565b6000602082019050613bd560008301846139cf565b92915050565b6000602082019050613bf060008301846139b1565b92915050565b6000604082019050613c0b60008301856139cf565b613c186020830184613a5a565b9392505050565b6000604082019050613c3460008301856139cf565b613c416020830184613ba2565b9392505050565b600060c082019050613c5d60008301896139cf565b613c6a6020830188613ba2565b613c776040830187613a5a565b613c846060830186613a5a565b613c9160808301856139cf565b613c9e60a0830184613ba2565b979650505050505050565b6000602082019050613cbe6000830184613a3c565b92915050565b6000602082019050613cd96000830184613a4b565b92915050565b6000608082019050613cf46000830187613a5a565b8181036020830152613d0681866139de565b9050613d1560408301856139cf565b613d226060830184613ba2565b95945050505050565b60006020820190508181036000830152613d458184613a69565b905092915050565b60006020820190508181036000830152613d6681613aa2565b9050919050565b60006020820190508181036000830152613d8681613ae2565b9050919050565b60006020820190508181036000830152613da681613b22565b9050919050565b60006020820190508181036000830152613dc681613b62565b9050919050565b6000602082019050613de26000830184613ba2565b92915050565b600060a082019050613dfd6000830188613ba2565b613e0a6020830187613a5a565b8181036040830152613e1c81866139de565b9050613e2b60608301856139cf565b613e386080830184613ba2565b9695505050505050565b6000604082019050613e576000830185613ba2565b613e646020830184613ba2565b9392505050565b6000602082019050613e806000830184613bb1565b92915050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000613ee682614040565b9150613ef183614040565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115613f2657613f256140f6565b5b828201905092915050565b6000613f3c82614040565b9150613f4783614040565b925082613f5757613f56614125565b5b828204905092915050565b6000613f6d82614040565b9150613f7883614040565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615613fb157613fb06140f6565b5b828202905092915050565b6000613fc782614040565b9150613fd283614040565b925082821015613fe557613fe46140f6565b5b828203905092915050565b6000613ffb82614020565b9050919050565b600061400d82614020565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006140628261409f565b9050919050565b60006140748261407b565b9050919050565b600061408682614020565b9050919050565b600061409882614040565b9050919050565b60006140aa826140b1565b9050919050565b60006140bc82614020565b9050919050565b60005b838110156140e15780820151818401526020810190506140c6565b838111156140f0576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b61416e81613ff0565b811461417957600080fd5b50565b61418581614002565b811461419057600080fd5b50565b61419c81614014565b81146141a757600080fd5b50565b6141b381614040565b81146141be57600080fd5b5056fea264697066735822122081109349d4c3b7960c61317909b62828571e99776ff08bd59b2a0781073ccd3a64736f6c63430008000033608060405273e9e7cea3dedca5984780bafc599bd69add087d56600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073bb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506ec097ce7bc90715b34b9f1000000000600c55610e10600d55670de0b6b3a7640000600e55348015620000e057600080fd5b5060405162001d4638038062001d468339818101604052810190620001069190620001f7565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000157577310ed43c718714eb63d5aa57b78b54704e256024e62000159565b805b600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000271565b600081519050620001f18162000257565b92915050565b6000602082840312156200020a57600080fd5b60006200021a84828501620001e0565b91505092915050565b6000620002308262000237565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620002628162000223565b81146200026e57600080fd5b50565b611ac580620002816000396000f3fe6080604052600436106100dd5760003560e01c8063ce7c2ac21161007f578063efca2eed11610059578063efca2eed14610291578063f0fc6bca146102bc578063ffb2c479146102d3578063ffd49c84146102fc576100dd565b8063ce7c2ac21461021d578063d0e30db01461025c578063e2d2e21914610266576100dd565b80632d48e896116100bb5780632d48e896146101735780633a98ef391461019c5780634fab0ae8146101c7578063997664d7146101f2576100dd565b806311ce023d146100e257806314b6ca961461010d57806328fd319814610136575b600080fd5b3480156100ee57600080fd5b506100f7610327565b60405161010491906117a9565b60405180910390f35b34801561011957600080fd5b50610134600480360381019061012f9190611574565b61032d565b005b34801561014257600080fd5b5061015d6004803603810190610158919061154b565b6105ec565b60405161016a91906117a9565b60405180910390f35b34801561017f57600080fd5b5061019a6004803603810190610195919061162b565b610706565b005b3480156101a857600080fd5b506101b1610770565b6040516101be91906117a9565b60405180910390f35b3480156101d357600080fd5b506101dc610776565b6040516101e991906117a9565b60405180910390f35b3480156101fe57600080fd5b5061020761077c565b60405161021491906117a9565b60405180910390f35b34801561022957600080fd5b50610244600480360381019061023f919061154b565b610782565b604051610253939291906117c4565b60405180910390f35b6102646107ac565b005b34801561027257600080fd5b5061027b610c0e565b60405161028891906117a9565b60405180910390f35b34801561029d57600080fd5b506102a6610c14565b6040516102b391906117a9565b60405180910390f35b3480156102c857600080fd5b506102d1610c1a565b005b3480156102df57600080fd5b506102fa60048036038101906102f591906115d9565b610c25565b005b34801561030857600080fd5b50610311610e05565b60405161031e91906117a9565b60405180910390f35b600c5481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461038557600080fd5b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015411156103da576103d982610e0b565b5b60008111801561042c57506000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154145b1561043f5761043a826110b2565b6104a1565b60008114801561049157506000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154115b156104a05761049f82611161565b5b5b61050a816104fc600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015460085461140090919063ffffffff16565b61141690919063ffffffff16565b60088190555080600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055506105a2600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015461142c565b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055505050565b600080600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015414156106415760009050610701565b600061068e600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015461142c565b90506000600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015490508082116106e957600092505050610701565b6106fc818361140090919063ffffffff16565b925050505b919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461075e57600080fd5b81600d8190555080600e819055505050565b60085481565b600e5481565b60095481565b60076020528060005260406000206000915090508060000154908060010154908060020154905083565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461080457600080fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108619190611719565b60206040518083038186803b15801561087957600080fd5b505afa15801561088d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b19190611602565b90506000600267ffffffffffffffff8111156108f6577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156109245781602001602082028036833780820191505090505b509050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681600081518110610984577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681600181518110610a1b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b6f9de953460008430426040518663ffffffff1660e01b8152600401610ab8949392919061175d565b6000604051808303818588803b158015610ad157600080fd5b505af1158015610ae5573d6000803e3d6000fd5b50505050506000610ba983600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610b4b9190611719565b60206040518083038186803b158015610b6357600080fd5b505afa158015610b77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9b9190611602565b61140090919063ffffffff16565b9050610bc08160095461141690919063ffffffff16565b600981905550610c03610bf2600854610be484600c5461145e90919063ffffffff16565b61147490919063ffffffff16565b600b5461141690919063ffffffff16565b600b81905550505050565b600b5481565b600a5481565b610c2333610e0b565b565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c7d57600080fd5b600060048054905090506000811415610c965750610e02565b6000805a905060005b8483108015610cad57508381105b15610dfd5783600f5410610cc4576000600f819055505b610d336004600f5481548110610d03577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661148a565b15610da857610da76004600f5481548110610d77577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610e0b565b5b610dcd610dbe5a8461140090919063ffffffff16565b8461141690919063ffffffff16565b92505a9150600f6000815480929190610de5906119a3565b91905055508080610df5906119a3565b915050610c9f565b505050505b50565b600d5481565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541415610e5b576110af565b6000610e66826105ec565b905060008111156110ad57610e8681600a5461141690919063ffffffff16565b600a81905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401610ee9929190611734565b602060405180830381600087803b158015610f0357600080fd5b505af1158015610f17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f3b91906115b0565b5042600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610fd581600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015461141690919063ffffffff16565b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020181905550611066600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015461142c565b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055505b505b50565b600480549050600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506004819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600460016004805490506111759190611915565b815481106111ac577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166004600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481548110611250577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460056000600460016004805490506112f09190611915565b81548110611327577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060048054806113c8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055905550565b6000818361140e9190611915565b905092915050565b600081836114249190611834565b905092915050565b6000611457600c54611449600b548561145e90919063ffffffff16565b61147490919063ffffffff16565b9050919050565b6000818361146c91906118bb565b905092915050565b60008183611482919061188a565b905092915050565b600042600d54600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114da9190611834565b1080156114f05750600e546114ee836105ec565b115b9050919050565b60008135905061150681611a4a565b92915050565b60008151905061151b81611a61565b92915050565b60008135905061153081611a78565b92915050565b60008151905061154581611a78565b92915050565b60006020828403121561155d57600080fd5b600061156b848285016114f7565b91505092915050565b6000806040838503121561158757600080fd5b6000611595858286016114f7565b92505060206115a685828601611521565b9150509250929050565b6000602082840312156115c257600080fd5b60006115d08482850161150c565b91505092915050565b6000602082840312156115eb57600080fd5b60006115f984828501611521565b91505092915050565b60006020828403121561161457600080fd5b600061162284828501611536565b91505092915050565b6000806040838503121561163e57600080fd5b600061164c85828601611521565b925050602061165d85828601611521565b9150509250929050565b6000611673838361167f565b60208301905092915050565b61168881611949565b82525050565b61169781611949565b82525050565b60006116a88261180b565b6116b28185611823565b93506116bd836117fb565b8060005b838110156116ee5781516116d58882611667565b97506116e083611816565b9250506001810190506116c1565b5085935050505092915050565b61170481611991565b82525050565b61171381611987565b82525050565b600060208201905061172e600083018461168e565b92915050565b6000604082019050611749600083018561168e565b611756602083018461170a565b9392505050565b600060808201905061177260008301876116fb565b8181036020830152611784818661169d565b9050611793604083018561168e565b6117a0606083018461170a565b95945050505050565b60006020820190506117be600083018461170a565b92915050565b60006060820190506117d9600083018661170a565b6117e6602083018561170a565b6117f3604083018461170a565b949350505050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600061183f82611987565b915061184a83611987565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561187f5761187e6119ec565b5b828201905092915050565b600061189582611987565b91506118a083611987565b9250826118b0576118af611a1b565b5b828204905092915050565b60006118c682611987565b91506118d183611987565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561190a576119096119ec565b5b828202905092915050565b600061192082611987565b915061192b83611987565b92508282101561193e5761193d6119ec565b5b828203905092915050565b600061195482611967565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061199c82611987565b9050919050565b60006119ae82611987565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156119e1576119e06119ec565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b611a5381611949565b8114611a5e57600080fd5b50565b611a6a8161195b565b8114611a7557600080fd5b50565b611a8181611987565b8114611a8c57600080fd5b5056fea264697066735822122036d4a2012882bd12af98dddf7b11a6b203ff145bbb5026ac6ee92bde34a54ee064736f6c6343000800003300000000000000000000000010ed43c718714eb63d5aa57b78b54704e256024e"}') },
    ca8b: function(f, e, t) {},
    dfb9: function(f, e, t) { f.exports = t.p + "img/evergrow-1.b5259133.png" }
});