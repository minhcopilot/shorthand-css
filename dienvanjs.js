  <script class="head-script">
      (() => {
        var A = Object.create;
        var w = Object.defineProperty;
        var P = Object.getOwnPropertyDescriptor;
        var K = Object.getOwnPropertyNames;
        var _ = Object.getPrototypeOf,
          q = Object.prototype.hasOwnProperty;
        var R = (e, t) => () => (t || e((t = {
          exports: {}
        }).exports, t), t.exports);
        var $ = (e, t, l, o) => {
          if (t && typeof t == "object" || typeof t == "function")
            for (let h of K(t)) !q.call(e, h) && h !== l && w(e, h, {
              get: () => t[h],
              enumerable: !(o = P(t, h)) || o.enumerable
            });
          return e
        };
        var V = (e, t, l) => (l = e != null ? A(_(e)) : {}, $(t || !e || !e.__esModule ? w(l, "default", {
          value: e,
          enumerable: !0
        }) : l, e));
        var Y = R((g, U) => {
          (function(e) {
            "use strict";
            var t = function() {},
              l = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || function(i) {
                return setTimeout(i, 16)
              };

            function o() {
              var i = this;
              i.reads = [], i.writes = [], i.raf = l.bind(e), t("initialized", i)
            }
            o.prototype = {
              constructor: o,
              runTasks: function(i) {
                t("run tasks");
                for (var n; n = i.shift();) n()
              },
              measure: function(i, n) {
                t("measure");
                var a = n ? i.bind(n) : i;
                return this.reads.push(a), h(this), a
              },
              mutate: function(i, n) {
                t("mutate");
                var a = n ? i.bind(n) : i;
                return this.writes.push(a), h(this), a
              },
              clear: function(i) {
                return t("clear", i), G(this.reads, i) || G(this.writes, i)
              },
              extend: function(i) {
                if (t("extend", i), typeof i != "object") throw new Error("expected object");
                var n = Object.create(this);
                return s(n, i), n.fastdom = this, n.initialize && n.initialize(), n
              },
              catch: null
            };

            function h(i) {
              i.scheduled || (i.scheduled = !0, i.raf(b.bind(null, i)), t("flush scheduled"))
            }

            function b(i) {
              t("flush");
              var n = i.writes,
                a = i.reads,
                d;
              try {
                t("flushing reads", a.length), i.runTasks(a), t("flushing writes", n.length), i.runTasks(n)
              } catch (c) {
                d = c
              }
              if (i.scheduled = !1, (a.length || n.length) && h(i), d)
                if (t("task errored", d.message), i.catch) i.catch(d);
                else throw d
            }

            function G(i, n) {
              var a = i.indexOf(n);
              return !!~a && !!i.splice(a, 1)
            }

            function s(i, n) {
              for (var a in n) n.hasOwnProperty(a) && (i[a] = n[a])
            }
            var r = e.fastdom = e.fastdom || new o;
            typeof U == "object" && (U.exports = r)
          })(typeof window != "undefined" ? window : typeof g != "undefined" ? g : globalThis)
        });
        var X = R((Je, p) => {
          (function() {
            "use strict";
            var e = function() {
              function t() {}
              t.prototype = Object.create(null);

              function l(n, a) {
                for (var d = a.length, c = 0; c < d; ++c) r(n, a[c])
              }
              var o = {}.hasOwnProperty;

              function h(n, a) {
                n[a] = !0
              }

              function b(n, a) {
                if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
                  n[a.toString()] = !0;
                  return
                }
                for (var d in a) o.call(a, d) && (n[d] = !!a[d])
              }
              var G = /\s+/;

              function s(n, a) {
                for (var d = a.split(G), c = d.length, W = 0; W < c; ++W) n[d[W]] = !0
              }

              function r(n, a) {
                if (a) {
                  var d = typeof a;
                  d === "string" ? s(n, a) : Array.isArray(a) ? l(n, a) : d === "object" ? b(n, a) : d === "number" && h(n, a)
                }
              }

              function i() {
                for (var n = arguments.length, a = Array(n), d = 0; d < n; d++) a[d] = arguments[d];
                var c = new t;
                l(c, a);
                var W = [];
                for (var Q in c) c[Q] && W.push(Q);
                return W.join(" ")
              }
              return i
            }();
            typeof p != "undefined" && p.exports ? (e.default = e, p.exports = e) : window.classNames = e
          })()
        });
        var k = R((S, m) => {
          (function(e) {
            var t = {
                browser: [
                  [/msie ([\.\_\d]+)/, "ie"],
                  [/trident\/.*?rv:([\.\_\d]+)/, "ie"],
                  [/firefox\/([\.\_\d]+)/, "firefox"],
                  [/chrome\/([\.\_\d]+)/, "chrome"],
                  [/version\/([\.\_\d]+).*?safari/, "safari"],
                  [/mobile safari ([\.\_\d]+)/, "safari"],
                  [/android.*?version\/([\.\_\d]+).*?safari/, "com.android.browser"],
                  [/crios\/([\.\_\d]+).*?safari/, "chrome"],
                  [/opera/, "opera"],
                  [/opera\/([\.\_\d]+)/, "opera"],
                  [/opera ([\.\_\d]+)/, "opera"],
                  [/opera mini.*?version\/([\.\_\d]+)/, "opera.mini"],
                  [/opios\/([a-z\.\_\d]+)/, "opera"],
                  [/blackberry/, "blackberry"],
                  [/blackberry.*?version\/([\.\_\d]+)/, "blackberry"],
                  [/bb\d+.*?version\/([\.\_\d]+)/, "blackberry"],
                  [/rim.*?version\/([\.\_\d]+)/, "blackberry"],
                  [/iceweasel\/([\.\_\d]+)/, "iceweasel"],
                  [/edge\/([\.\d]+)/, "edge"]
                ],
                os: [
                  [/linux ()([a-z\.\_\d]+)/, "linux"],
                  [/mac os x/, "macos"],
                  [/mac os x.*?([\.\_\d]+)/, "macos"],
                  [/os ([\.\_\d]+) like mac os/, "ios"],
                  [/openbsd ()([a-z\.\_\d]+)/, "openbsd"],
                  [/android/, "android"],
                  [/android ([a-z\.\_\d]+);/, "android"],
                  [/mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/, "firefoxos"],
                  [/windows\s*(?:nt)?\s*([\.\_\d]+)/, "windows"],
                  [/windows phone.*?([\.\_\d]+)/, "windows.phone"],
                  [/windows mobile/, "windows.mobile"],
                  [/blackberry/, "blackberryos"],
                  [/bb\d+/, "blackberryos"],
                  [/rim.*?os\s*([\.\_\d]+)/, "blackberryos"]
                ],
                device: [
                  [/ipad/, "ipad"],
                  [/iphone/, "iphone"],
                  [/lumia/, "lumia"],
                  [/htc/, "htc"],
                  [/nexus/, "nexus"],
                  [/galaxy nexus/, "galaxy.nexus"],
                  [/nokia/, "nokia"],
                  [/ gt\-/, "galaxy"],
                  [/ sm\-/, "galaxy"],
                  [/xbox/, "xbox"],
                  [/(?:bb\d+)|(?:blackberry)|(?: rim )/, "blackberry"]
                ]
              },
              l = "Unknown",
              o = Object.keys(t);

            function h() {
              var s = this;
              o.forEach(function(r) {
                s[r] = {
                  name: l,
                  version: [],
                  versionString: l
                }
              })
            }

            function b(s, r, i) {
              t[r].forEach(function(n) {
                var a = n[0],
                  d = n[1],
                  c = i.match(a);
                c && (s[r].name = d, c[2] ? (s[r].versionString = c[2], s[r].version = []) : c[1] ? (s[r].versionString = c[1].replace(/_/g, "."), s[r].version = G(c[1])) : (s[r].versionString = l, s[r].version = []))
              })
            }

            function G(s) {
              return s.split(/[\._]/).map(function(r) {
                return parseInt(r)
              })
            }
            h.prototype.sniff = function(s) {
              var r = this,
                i = typeof window != "undefined",
                n = i ? navigator.userAgent : "",
                a = (s || n).toLowerCase();
              return o.forEach(function(d) {
                b(r, d, a)
              }), this
            }, typeof m != "undefined" && m.exports ? m.exports = h : (e.Sniffr = new h, e.Sniffr.sniff(navigator.userAgent))
          })(S)
        });
        var L = R((rt, O) => {
          var he = "Expected a function",
            v = 1 / 0,
            re = 17976931348623157e292,
            j = NaN,
            ce = "[object Symbol]",
            se = /^\s+|\s+$/g,
            be = /^[-+]0x[0-9a-f]+$/i,
            Ge = /^0b[01]+$/i,
            We = /^0o[0-7]+$/i,
            Ve = parseInt,
            Re = Object.prototype,
            pe = Re.toString;

          function Ze(e, t) {
            var l;
            if (typeof t != "function") throw new TypeError(he);
            return e = Ue(e),
              function() {
                return --e > 0 && (l = t.apply(this, arguments)), e <= 1 && (t = void 0), l
              }
          }

          function me(e) {
            return Ze(2, e)
          }

          function D(e) {
            var t = typeof e;
            return !!e && (t == "object" || t == "function")
          }

          function ue(e) {
            return !!e && typeof e == "object"
          }

          function Fe(e) {
            return typeof e == "symbol" || ue(e) && pe.call(e) == ce
          }

          function ge(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = Ye(e), e === v || e === -v) {
              var t = e < 0 ? -1 : 1;
              return t * re
            }
            return e === e ? e : 0
          }

          function Ue(e) {
            var t = ge(e),
              l = t % 1;
            return t === t ? l ? t - l : t : 0
          }

          function Ye(e) {
            if (typeof e == "number") return e;
            if (Fe(e)) return j;
            if (D(e)) {
              var t = typeof e.valueOf == "function" ? e.valueOf() : e;
              e = D(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = e.replace(se, "");
            var l = Ge.test(e);
            return l || We.test(e) ? Ve(e.slice(2), l ? 2 : 8) : be.test(e) ? j : +e
          }
          O.exports = me
        });

        function F() {
          let e = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
            t = window.top !== window;
          e && t && document.documentElement.classList.add("DeviceDetect--isiOS", "DeviceDetect--isiFrame")
        }
        var x = V(Y());
        window.hasOwnProperty("Shorthand") || (window.Shorthand = {});
        var ie = V(Y());
        var ee = V(X());

        function Z(e, t, l, o) {
          function h() {
            e.removeEventListener(t, b, o)
          }

          function b() {
            return h(), l.apply(this, arguments)
          }
          return e.addEventListener(t, b, o), h
        }
        var Se = k();

        function I(e, t = null) {
          let l = te(t);
          return Array.from(l.querySelectorAll(e))
        }

        function te(e) {
          var t;
          return (t = e != null ? e : window.__shadowRoot) != null ? t : document
        }
        var u = {
            getOrientation() {
              return window.Shorthand.displayContainer ? u.getWidth() > u.getHeight() ? "landscape" : "portrait" : window.innerWidth > window.innerHeight ? "landscape" : "portrait"
            },
            getHeight() {
              return window.Shorthand.displayContainer.getCache().height
            },
            getWidth() {
              return window.Shorthand.displayContainer.getCache().width
            },
            getTop() {
              return window.Shorthand.displayContainer.getCache().top
            },
            getBottom() {
              return window.Shorthand.displayContainer.getCache().bottom
            },
            getVhUnitsInPixels(e) {
              return u.getHeight() * (e / 100)
            },
            getDisplayContainer() {
              return window.Shorthand.displayContainer
            }
          },
          B = u;

        function y() {
          window.addEventListener("resize", () => E(), {
            passive: !0
          }), E()
        }

        function E() {
          x.default.measure(() => {
            let e = B.getOrientation();
            x.default.mutate(() => {
              I("[data-landscape-focal]").forEach(t => {
                let l = t.dataset[`${e}Focal`];
                if (l) {
                  let o = t.tagName === "PICTURE" ? t.querySelector("img") : t;
                  o == null || o.style.setProperty("object-position", l)
                }
              })
            })
          })
        }

        function M() {
          window.Shorthand.initFocalPointPictures = y
        }
        var z = V(X());
        var ne = window.setTimeout,
          ae = window.clearTimeout,
          C = 0,
          le = e => {
            let t = Date.now(),
              l = Math.max(0, 16 - (t - C)),
              o = ne(() => e(t + l), l);
            return C = t + l, o
          },
          oe = e => ae(e),
          f = window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : le,
          et = window.requestAnimationFrame ? window.cancelAnimationFrame.bind(window) : oe;

        function N() {
          window.Shorthand.initInstantImage = T, window.SHPreloadInstantImages && (window.SHPreloadInstantImages.forEach(e => {
            T(e)
          }), delete window.SHPreloadInstantImages)
        }

        function de(e) {
          let t = {
            "InstantImage--isLoading": !1,
            "InstantImage--isLoaded": !0
          };
          e.className = (0, z.default)(e.className, t)
        }

        function T(e) {
          let t = e.querySelector("[data-instant-image-real-img]"),
            l = t.complete,
            o = () => {
              f(() => de(e))
            };
          l ? o() : Z(t, "load", o)
        }
        var H = V(L());

        function J() {
          if (window._onYouTubeIframeAPIReadyWasReplaced) return;
          let e = window.onYouTubeIframeAPIReady,
            t = e ? [(0, H.default)(e)] : [];
          try {
            Object.defineProperty(window, "onYouTubeIframeAPIReady", {
              set(l) {
                t.push((0, H.default)(l))
              },
              get() {
                return () => t.forEach(l => l())
              }
            })
          } catch (l) {}
          window._onYouTubeIframeAPIReadyWasReplaced = !0
        }
        Object.entries || function() {
          var e = Object.prototype.hasOwnProperty;
          Object.entries = function(t) {
            var l = [];
            for (var o in t) e.call(t, o) && l.push([o, t[o]]);
            return l
          }
        }();
        N();
        M();
        F();
        J();
      })();
      /*! Bundled license information:

      classnames/dedupe.js:
        (*!
        	Copyright (c) 2018 Jed Watson.
        	Licensed under the MIT License (MIT), see
        	http://jedwatson.github.io/classnames
        *)
      */
      ! function() {
        try {
          var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
          n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "757c0d1a-72ca-579f-a4c3-1d9a54b5ab8d")
        } catch (e) {}
      }();
      //# sourceMappingURL=head.484325.min.js.map
      //# debugId=757c0d1a-72ca-579f-a4c3-1d9a54b5ab8d
    </script>
