(self.webpackChunklite = self.webpackChunklite || []).push([
  [9692],
  {
    90264: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      var r = n(67294);
      function a() {
        return (a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var o = r.createElement("path", {
        d: "M14 14.05a1 1 0 0 1-1 1H6a.99.99 0 0 1-1-1v-4a1 1 0 0 1 1-1h7a.99.99 0 0 1 1 1v4zm-7-8.6c0-1.26 1.11-2.3 2.5-2.3S12 4.19 12 5.45v2.6H7v-2.6zm6 2.6v-2.6c0-1.83-1.58-3.3-3.5-3.3S6 3.62 6 5.45v2.6a2 2 0 0 0-2 2v4a1.99 1.99 0 0 0 2 2h7a2 2 0 0 0 2-2v-4a1.99 1.99 0 0 0-2-2z",
        fillRule: "evenodd",
      });
      const i = function (e) {
        return r.createElement("svg", a({ width: 19, height: 19 }, e), o);
      };
    },
    43198: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => c, s: () => s });
      var r = n(59713),
        a = n.n(r),
        o = n(14391),
        i = function (e) {
          var t;
          return ((t = {}),
          a()(t, o.NJ.BQ, !0),
          a()(t, o.NJ.PQ, !0),
          a()(t, o.NJ.H1, !0),
          a()(t, o.NJ.H2, !0),
          a()(t, o.NJ.H3, !0),
          a()(t, o.NJ.HR, !0),
          a()(t, o.NJ.COVER_TITLE, !0),
          a()(t, o.NJ.H4, !0),
          a()(t, o.NJ.OLI, !0),
          a()(t, o.NJ.P, !0),
          a()(t, o.NJ.SECTION_CAPTION, !0),
          a()(t, o.NJ.ULI, !0),
          a()(t, o.NJ.PRE, !0),
          a()(t, o.NJ.IFRAME, !1),
          a()(t, o.NJ.MIXTAPE_EMBED, !1),
          a()(t, o.NJ.IMG, !1),
          t)[e];
        },
        c = [o.NJ.PQ, o.NJ.H4],
        s = function (e, t) {
          for (var n = null, r = 0; r < e.length && e[r]; r++) {
            var a = e[r].type;
            if (i(a)) {
              if (!t.includes(a)) break;
              n = r;
              break;
            }
          }
          return n;
        };
    },
    22669: (e, t, n) => {
      "use strict";
      n.d(t, { P: () => u });
      var r = n(68337),
        a = n.n(r),
        o = n(67294),
        i = n(76134),
        c = n.n(i),
        s = n(85432),
        u = function (e) {
          var t = e.children,
            n = e.linkifyTwitterHandles,
            r = void 0 !== n && n,
            i = e.wrapLinks,
            u = void 0 !== i && i;
          if (!t) return null;
          var l = a()().tlds(c());
          r &&
            l.add("@", {
              validate: function (e, t, n) {
                var r = e.slice(t);
                return (
                  n.re.twitter ||
                    (n.re.twitter = new RegExp(
                      "^([a-zA-Z0-9_]){1,15}(?!_)(?=$|" + n.re.src_ZPCc + ")"
                    )),
                  n.re.twitter.test(r)
                    ? !(t >= 2 && "@" === r[t - 2]) &&
                      r.match(n.re.twitter)[0].length
                    : 0
                );
              },
              normalize: function (e) {
                e.url = "https://twitter.com/" + e.url.replace(/^@/, "");
              },
            });
          var p = l.match(t);
          if (!p) return t;
          var f = 0;
          return p.reduce(function (e, n, r) {
            return t
              ? (n.index > f && e.push(t.substring(f, n.index)),
                e.push(
                  o.createElement(
                    s.rU,
                    {
                      wrapLinks: u,
                      disableSourceParam: !0,
                      key: r,
                      inline: !0,
                      linkStyle: "OBVIOUS",
                      href: n.url,
                    },
                    n.text
                  )
                ),
                r === p.length - 1 &&
                  n.lastIndex < t.length &&
                  e.push(t.substring(n.lastIndex, t.length)),
                (f = n.lastIndex),
                e)
              : [];
          }, []);
        };
    },
    6741: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => P, s: () => I });
      var r = n(59713),
        a = n.n(r),
        o = n(28655),
        i = n.n(o),
        c = n(71439),
        s = n(80439),
        u = n(67294),
        l = n(12291),
        p = n(27599),
        f = n(27572);
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function h() {
        var e = i()([
          "\n  query QuoteDeleteMutation_postQuotes($postId: ID!) {\n    post(id: $postId) {\n      id\n      highlights {\n        id\n        ...QuoteDeleteMutation_highlight\n      }\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = i()([
          "\n  mutation QuoteDeleteMutation($targetPostId: ID!, $targetQuoteId: ID!) {\n    deleteQuote(targetPostId: $targetPostId, targetQuoteId: $targetQuoteId)\n  }\n",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = i()([
          "\n  fragment QuoteDeleteMutation_highlight on Quote {\n    id\n    paragraphs {\n      id\n      name\n    }\n    startOffset\n    endOffset\n    userId\n  }\n",
        ]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      var E = (0, c.Ps)(v()),
        y = (0, c.Ps)(m()),
        O = (0, c.Ps)(h(), E),
        P = function (e) {
          var t = e.children,
            n = e.onCompleted,
            r = e.targetPostId,
            a = e.targetQuoteId,
            o = (0, p.Av)(),
            i = (0, f.Qi)();
          return u.createElement(
            s.mm,
            {
              mutation: y,
              onCompleted: function (e) {
                o.event("quotes.ui.quoteDeleted", {
                  postId: r,
                  quoteId: a,
                  source: i,
                }),
                  n && n(e);
              },
              optimisticResponse: { deleteQuote: !0 },
              update: function (e) {
                var t = { query: O, variables: { postId: r } },
                  n = e.readQuery(t);
                e.writeQuery(
                  g(
                    {
                      data: {
                        post: g(
                          g({}, n.post),
                          {},
                          {
                            highlights: n.post.highlights.filter(function (e) {
                              return e.id !== a;
                            }),
                          }
                        ),
                      },
                    },
                    t
                  )
                );
              },
              variables: { targetPostId: r, targetQuoteId: a },
            },
            function (e) {
              return t({ deleteQuote: e });
            }
          );
        },
        I = (0, l.$j)()(P);
    },
    86156: (e, t, n) => {
      "use strict";
      n.d(t, { f: () => r });
      var r = n(67294).createContext({
        openSidebarToRespondToHighlight: function () {
          return null;
        },
        addContinueThisThreadSidebar: function () {
          return null;
        },
      });
    },
    25415: (e, t, n) => {
      "use strict";
      n.d(t, { KN: () => s, Zx: () => u });
      var r = n(63038),
        a = n.n(r),
        o = n(67294),
        i = n(69677),
        c = o.createContext({
          openPrivateNoteId: null,
          privateNoteSelection: null,
          setOpenPrivateNoteId: function () {},
          setPrivateNoteSelection: function () {},
        }),
        s = function (e) {
          var t = e.children,
            n = e.initialActivePrivateNoteId,
            r = e.initialActiveGrafName,
            s = (0, i.Ij)().paragraphRefsMappers,
            u = s.paragraphRefsMap,
            l = s.paragraphRefsByNameMap,
            p = o.useState(null),
            f = a()(p, 2),
            d = f[0],
            g = f[1],
            h = o.useState(null),
            m = a()(h, 2),
            v = m[0],
            E = m[1];
          return (
            o.useEffect(
              function () {
                g(n);
              },
              [n]
            ),
            o.useEffect(
              function () {
                if (r && !n) {
                  var e = l.get(r);
                  e &&
                    setTimeout(function () {
                      return window.scrollTo(0, e.offsetTop);
                    });
                }
              },
              [u]
            ),
            o.createElement(
              c.Provider,
              {
                value: {
                  openPrivateNoteId: d,
                  privateNoteSelection: v,
                  setOpenPrivateNoteId: g,
                  setPrivateNoteSelection: E,
                },
              },
              t
            )
          );
        },
        u = function () {
          return o.useContext(c);
        };
    },
    40820: (e, t, n) => {
      "use strict";
      n.d(t, { Tz: () => Ee, UW: () => Pe, iF: () => Ie, Ms: () => Oe });
      var r = n(28655),
        a = n.n(r),
        o = n(63038),
        i = n.n(o),
        c = n(71439),
        s = n(67294),
        u = n(25415),
        l = n(69677),
        p = n(76915),
        f = n(67154),
        d = n.n(f),
        g = n(59713),
        h = n.n(g),
        m = n(6479),
        v = n.n(m),
        E = n(12291),
        y = n(319),
        O = n.n(y),
        P = n(80439),
        I = n(27599),
        S = n(27572);
      function b(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function w() {
        var e = a()([
          "\n  query QuoteCreateMutation_postQuotes($postId: ID!) {\n    post(id: $postId) {\n      id\n      highlights {\n        id\n        ...QuoteCreateMutation_highlight\n      }\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      function R() {
        var e = a()([
          "\n  mutation QuoteCreateMutation(\n    $targetPostId: ID!\n    $targetPostVersionId: ID!\n    $targetParagraphNames: [ID!]!\n    $startOffset: Int!\n    $endOffset: Int!\n    $quoteType: StreamItemQuoteType!\n  ) {\n    createQuote(\n      targetPostId: $targetPostId\n      targetPostVersionId: $targetPostVersionId\n      targetParagraphNames: $targetParagraphNames\n      startOffset: $startOffset\n      endOffset: $endOffset\n      quoteType: $quoteType\n    ) {\n      __typename\n      id\n      ...QuoteCreateMutation_highlight\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (R = function () {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = a()([
          "\n  fragment QuoteCreateMutation_highlight on Quote {\n    id\n    paragraphs {\n      ...QuoteCreateMutation_paragraph\n    }\n    startOffset\n    endOffset\n    userId\n    user {\n      __typename\n      id\n      name\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (N = function () {
            return e;
          }),
          e
        );
      }
      function T() {
        var e = a()([
          "\n  fragment QuoteCreateMutation_paragraph on Paragraph {\n    id\n    name\n    text\n  }\n",
        ]);
        return (
          (T = function () {
            return e;
          }),
          e
        );
      }
      var M = (0, c.Ps)(T()),
        C = (0, c.Ps)(N(), M),
        _ = (0, c.Ps)(R(), C),
        D = (0, c.Ps)(w(), C),
        H = function (e) {
          var t = e.children,
            n = e.endOffset,
            r = e.onUpdate,
            a = e.onCompleted,
            o = e.quoteType,
            i = e.startOffset,
            c = e.targetParagraphs,
            u = e.targetPostId,
            l = e.targetPostVersionId,
            p = e.viewer,
            f = (0, I.Av)(),
            d = (0, S.Qi)(),
            g = c
              .map(function (e) {
                return e.name;
              })
              .filter(function (e) {
                return !!e;
              });
          return s.createElement(
            P.mm,
            {
              mutation: _,
              onCompleted: function (e) {
                e.createQuote &&
                  f.event("quotes.ui.quoteCreated", {
                    postId: u,
                    quoteId: e.createQuote.id,
                    source: d,
                  }),
                  a && a(e);
              },
              optimisticResponse: {
                createQuote: {
                  __typename: "Quote",
                  id: "temp",
                  paragraphs: c.map(function (e) {
                    return {
                      id: "tempQuote_".concat(e.id),
                      name: e.name,
                      text: e.text,
                      __typename: "Paragraph",
                    };
                  }),
                  startOffset: i,
                  endOffset: n,
                  userId: p ? p.id : "",
                  user: {
                    __typename: "User",
                    id: p ? p.id : "",
                    name: p ? p.name : "",
                  },
                },
              },
              update: function (e, t) {
                var n,
                  a = e.readQuery({ query: D, variables: { postId: u } }),
                  o =
                    null === (n = t.data) || void 0 === n
                      ? void 0
                      : n.createQuote;
                if (o) {
                  var i,
                    c,
                    s = x(
                      x({}, a),
                      {},
                      {
                        post: x(
                          x({}, null == a ? void 0 : a.post),
                          {},
                          {
                            highlights: [].concat(
                              O()(
                                null !==
                                  (i =
                                    null == a ||
                                    null === (c = a.post) ||
                                    void 0 === c
                                      ? void 0
                                      : c.highlights) && void 0 !== i
                                  ? i
                                  : []
                              ),
                              [o]
                            ),
                          }
                        ),
                      }
                    );
                  e.writeQuery({ query: D, variables: { postId: u }, data: s });
                }
                r && r(t.data);
              },
              variables: {
                targetPostId: u,
                targetPostVersionId: l,
                targetParagraphNames: g,
                startOffset: i,
                endOffset: n,
                quoteType: o,
              },
            },
            function (e) {
              return t({ createQuote: e });
            }
          );
        },
        k = n(6741),
        L = (0, E.$j)()(function (e) {
          var t = e.children,
            n = e.endOffset,
            r = e.onCompleted,
            a = e.quoteType,
            o = e.startOffset,
            i = e.onUpdate,
            c = e.targetParagraphs,
            u = e.targetPostId,
            l = e.targetPostVersionId,
            p = e.targetQuoteId,
            f = e.viewer;
          return s.createElement(
            H,
            {
              endOffset: n,
              onUpdate: i,
              onCompleted: r,
              quoteType: a,
              startOffset: o,
              targetParagraphs: c,
              targetPostId: u,
              targetPostVersionId: l,
              viewer: f,
            },
            function (e) {
              var n = e.createQuote;
              return s.createElement(
                k.m,
                { targetPostId: u, targetQuoteId: p || "", onCompleted: r },
                function (e) {
                  var r = e.deleteQuote;
                  return t({ createQuote: n, deleteQuote: r });
                }
              );
            }
          );
        }),
        j = n(86156),
        A = n(34675),
        q = n(43516),
        Q = n(14391),
        F = n(67297),
        U = n(95614),
        $ = n(96879),
        G = n(27952);
      function B() {
        var e = a()([
          "\n  fragment SelectionMenu_post on Post {\n    id\n    isPublished\n    isLocked\n    latestPublishedVersion\n    visibility\n    creator {\n      id\n      allowNotes\n    }\n  }\n",
        ]);
        return (
          (B = function () {
            return e;
          }),
          e
        );
      }
      function z() {
        var e = a()([
          "\n  fragment SelectionMenu_highlight on Quote {\n    id\n    userId\n    user {\n      name\n    }\n  }\n",
        ]);
        return (
          (z = function () {
            return e;
          }),
          e
        );
      }
      function V(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function W(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? V(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : V(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function J(e) {
        var t = e.highlightId,
          n = e.children,
          r = v()(e, ["highlightId", "children"]),
          a = s.useContext(j.f).openSidebarToRespondToHighlight,
          o = s.useContext(Ee),
          i = o.activeSelection,
          c = o.setActiveSelection;
        return s.createElement(
          L,
          d()({}, r, { quoteType: Q.a6.HIGHLIGHT, targetQuoteId: t }),
          function (e) {
            var o = e.createQuote,
              u = e.deleteQuote;
            return s.createElement(
              L,
              d()({}, r, {
                quoteType: Q.a6.RESPONSE,
                onCompleted: function (e) {
                  e && e.createQuote && e.createQuote.id && a(e.createQuote);
                },
              }),
              function (e) {
                var a = e.createQuote;
                return s.createElement(
                  L,
                  d()({}, r, {
                    quoteType: Q.a6.HIGHLIGHT,
                    targetQuoteId: t,
                    onUpdate: function (e) {
                      return (
                        i &&
                        c(W(W({}, i), {}, { highlightId: e.createQuote.id }))
                      );
                    },
                  }),
                  function (e) {
                    var t = e.createQuote;
                    return n({
                      createHighlightQuote: o,
                      createResponseQuote: a,
                      createTweetQuote: t,
                      deleteHighlightQuote: u,
                    });
                  }
                );
              }
            );
          }
        );
      }
      function K(e) {
        var t = e.createPrivateNote,
          n = e.interactivePost,
          r = e.isPersistent,
          a = e.mouseEnter,
          o = e.mouseLeave,
          i = e.position,
          c = void 0 === i ? { left: 0, top: 0, bottom: 0 } : i,
          u = e.highlightId,
          l = e.highlights,
          p = e.selectedParagraphs,
          f = e.startOffset,
          g = e.endOffset,
          h = s.useContext(Ee),
          m = h.activeSelection,
          v = h.setActiveSelection,
          E = (0, I.Av)(),
          y = (0, F.v9)(function (e) {
            return e.config.authDomain;
          }),
          O = !!n && !!n.isPublished,
          P = !!(n && n.creator && n.creator.allowNotes),
          S =
            l &&
            l.find(function (e) {
              return e.id === u;
            }),
          b = n.id,
          x = n.latestPublishedVersion,
          w = !(0, U.T)(),
          R = p.map(function (e) {
            return e.name;
          }),
          N = O && ("PUBLIC" === n.visibility || !!n.isLocked),
          T = w || N,
          M = s.useCallback(
            function (e) {
              var t = e.isYourHighlight,
                n = e.createQuote,
                r = e.viewer,
                a = m && m.selectedParagraph && m.selectedParagraph.text,
                o = m && m.startOffset,
                i = m && m.endOffset,
                c = "";
              a &&
                "number" == typeof o &&
                "number" == typeof i &&
                (c = encodeURIComponent(a.slice(o, i))),
                r && r.id && !t && n(),
                window.open(
                  ""
                    .concat((0, G.A2M)(y, b), "?type=highlight&text=")
                    .concat(c),
                  "_blank"
                ),
                E.event("post.shareOpen", {
                  postId: b,
                  source: "highlight_menu",
                  dest: "twitter",
                  dialogType: "native",
                });
            },
            [m, f, g, b]
          ),
          C = s.useCallback(
            function (e, n) {
              return function (r) {
                "highlight" === r
                  ? (v(null),
                    n ? e.deleteHighlightQuote() : e.createHighlightQuote())
                  : "respond" === r
                  ? e.createResponseQuote()
                  : "tweet" === r
                  ? e.createTweetQuote()
                  : "privateNote" === r && t();
              };
            },
            [v, t]
          );
        return s.createElement(A.I8, { nonBlocking: !0 }, function (e) {
          var t,
            n = !(!S || !e) && e.id === S.userId;
          if (n) t = "You highlighted";
          else if (S && "anon" === S.userId) t = "Top highlight";
          else {
            var i, l;
            t =
              null !==
                (i =
                  null == S || null === (l = S.user) || void 0 === l
                    ? void 0
                    : l.name) && void 0 !== i
                ? i
                : "";
          }
          var h = {
            targetPostId: b,
            targetPostVersionId: x,
            targetParagraphs: p,
            startOffset: f,
            endOffset: g,
            viewer: e,
          };
          return s.createElement(J, d()({ highlightId: u }, h), function (i) {
            return s.createElement(q.P, {
              position: c,
              allowMainActions: O,
              visible: P || O,
              allowNotes: r && P,
              allowResponse: w,
              allowTweet: N,
              rightContent: r ? void 0 : t,
              isYourHighlight: n,
              hasIconAfterHighlightIcon: T,
              hasPaddingAfterResponse: N,
              highlightSourceProvider: S
                ? "quote_click_menu"
                : "selection_menu",
              highlightSusiProps: {
                actionUrl: (0, $.Rk)((0, G.QWD)(y, b), {
                  endOffset: g.toString(),
                  paragraphName: R.toString(),
                  startOffset: f.toString(),
                  versionId: x,
                }),
                operation: "register",
              },
              mouseEnter: a,
              mouseLeave: o,
              onAction: C(
                W(
                  W({}, i),
                  {},
                  {
                    createTweetQuote: function () {
                      return M({
                        isYourHighlight: n,
                        viewer: e,
                        createQuote: i.createTweetQuote,
                      });
                    },
                  }
                ),
                n
              ),
            });
          });
        });
      }
      var X = (0, c.Ps)(z()),
        Y = (0, c.Ps)(B()),
        Z = n(37206),
        ee = n(16803);
      function te(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? te(Object(n), !0).forEach(function (t) {
                h()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : te(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function re() {
        var e = a()([
          "\n  mutation NoteCreateMutation(\n    $targetPostId: ID!\n    $targetPostVersion: ID!\n    $targetParagraphName: ID!\n    $noteContent: String!\n    $selectionStartOffset: Int!\n    $selectionEndOffset: Int!\n  ) {\n    createNote(\n      targetPostId: $targetPostId\n      targetPostVersion: $targetPostVersion\n      targetParagraphName: $targetParagraphName\n      noteContent: $noteContent\n      selectionStartOffset: $selectionStartOffset\n      selectionEndOffset: $selectionEndOffset\n    ) {\n      id\n      ...NoteCreateMutation_privateNote\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (re = function () {
            return e;
          }),
          e
        );
      }
      function ae() {
        var e = a()([
          "\n  query NoteCreateMutation_postNotes($postId: ID!) {\n    post(id: $postId) {\n      id\n      privateNotes {\n        id\n        ...NoteCreateMutation_privateNote\n      }\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (ae = function () {
            return e;
          }),
          e
        );
      }
      function oe() {
        var e = a()([
          "\n  fragment NoteCreateMutation_privateNote on Note {\n    id\n    anchor\n    author {\n      id\n    }\n    content\n    createdAt\n    replies {\n      id\n    }\n    post {\n      id\n    }\n    postId\n    selectionStartOffset\n    selectionEndOffset\n  }\n",
        ]);
        return (
          (oe = function () {
            return e;
          }),
          e
        );
      }
      var ie = (0, c.Ps)(oe()),
        ce = (0, c.Ps)(ae(), ie),
        se = (0, c.Ps)(re(), ie),
        ue = function (e) {
          var t = e.children,
            n = e.onCompleted,
            r = e.targetPostId,
            a = e.targetPostVersion,
            o = e.targetParagraphName,
            i = e.selectionStartOffset,
            c = e.selectionEndOffset,
            l = (0, u.Zx)().setOpenPrivateNoteId;
          return s.createElement(A.I8, null, function (e) {
            return s.createElement(
              P.mm,
              {
                mutation: se,
                onCompleted: n,
                update: function (e, t) {
                  var n = e.readQuery({ query: ce, variables: { postId: r } }),
                    a = ne(
                      ne({}, t.data.createNote),
                      {},
                      {
                        selectionStartOffset: i,
                        selectionEndOffset: c,
                        post: { id: r, __typename: "Post" },
                      }
                    ),
                    o = {
                      post: ne(
                        ne({}, n.post),
                        {},
                        {
                          privateNotes: [].concat(O()(n.post.privateNotes), [
                            a,
                          ]),
                        }
                      ),
                    };
                  e.writeQuery({
                    query: ce,
                    variables: { postId: r },
                    data: o,
                  });
                },
              },
              function (n) {
                return t({
                  onCreateMutate: function (t) {
                    var s = n({
                      variables: {
                        targetPostId: r,
                        targetPostVersion: a,
                        targetParagraphName: o,
                        selectionStartOffset: i,
                        selectionEndOffset: c,
                        noteContent: t,
                      },
                      optimisticResponse: {
                        __typename: "Mutation",
                        createNote: {
                          __typename: "Note",
                          id: "temp",
                          anchor: o,
                          author: e,
                          content: t,
                          createdAt: new Date(),
                          replies: [],
                          postId: r,
                          selectionStartOffset: i,
                          selectionEndOffset: c,
                          post: { id: r, __typename: "Post" },
                        },
                      },
                    });
                    return l("temp"), s;
                  },
                });
              }
            );
          });
        },
        le = n(11241),
        pe = n(85432);
      function fe() {
        var e = a()([
          "\n  fragment PostNewNoteCard_post on Post {\n    id\n    latestPublishedVersion\n  }\n",
        ]);
        return (
          (fe = function () {
            return e;
          }),
          e
        );
      }
      var de = function (e) {
          var t = e.activeSelection,
            n = t.selectedParagraph.name,
            r = t.startOffset,
            a = t.endOffset,
            o = e.onCancel,
            i = e.onMutationComplete,
            c = e.onNoteCreation,
            u = e.post;
          return n
            ? s.createElement(
                pe.xu,
                { padding: "12px 20px" },
                s.createElement(
                  ue,
                  {
                    targetPostId: u.id,
                    targetPostVersion: u.latestPublishedVersion,
                    targetParagraphName: n,
                    selectionStartOffset: r,
                    selectionEndOffset: a,
                    onCompleted: i,
                  },
                  function (e) {
                    var t = e.onCreateMutate;
                    return s.createElement(le.X, {
                      onSubmit: function (e) {
                        t(e), c();
                      },
                      onCancel: o,
                    });
                  }
                )
              )
            : null;
        },
        ge = (0, c.Ps)(fe()),
        he = n(19464);
      function me() {
        var e = a()([
          "\n  fragment ActiveSelectionContext_post on Post {\n    id\n    ...SelectionMenu_post\n    ...PostNewNoteCard_post\n  }\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (me = function () {
            return e;
          }),
          e
        );
      }
      function ve() {
        var e = a()([
          "\n  fragment ActiveSelectionContext_highlight on Quote {\n    id\n    ...SelectionMenu_highlight\n  }\n  ",
          "\n",
        ]);
        return (
          (ve = function () {
            return e;
          }),
          e
        );
      }
      var Ee = s.createContext({
          activeSelection: null,
          setActiveSelection: function () {},
        }),
        ye = function (e, t, n) {
          for (
            var r,
              a = document.createNodeIterator(
                n,
                NodeFilter.SHOW_ELEMENT + NodeFilter.SHOW_TEXT
              ),
              o = 0;
            (r = a.nextNode());

          )
            if ("NOSCRIPT" !== r.nodeName) {
              if (e === r) return o + t;
              r.nodeType === Node.TEXT_NODE
                ? (o += r.nodeValue.length)
                : "BR" === r.nodeName && (o += 1);
            } else a.nextNode();
          return -1;
        },
        Oe = function (e) {
          var t,
            n = e.children,
            r = e.highlights,
            a = e.interactivePost,
            o = e.disableSelection,
            c = void 0 !== o && o,
            f = s.useState(null),
            d = i()(f, 2),
            g = d[0],
            h = d[1],
            m = (0, u.Zx)(),
            v = m.setOpenPrivateNoteId,
            E = m.setPrivateNoteSelection,
            y = function (e) {
              var t = e.createNote,
                n = null == t ? void 0 : t.id;
              n && v(n);
            },
            O = (0, l.Ij)().paragraphRefsMappers,
            P = O.paragraphRefsMap,
            I = O.paragraphRefsByNameMap,
            S = s.useCallback(
              function () {
                h(null), document.removeEventListener("click", S);
              },
              [h]
            ),
            b = s.useCallback(
              function (e, n) {
                var r = (function (e, t) {
                    return {
                      startOffset: ye(e.startContainer, e.startOffset, t),
                      endOffset: ye(e.endContainer, e.endOffset, t),
                    };
                  })(e, n),
                  a = r.startOffset,
                  o = r.endOffset;
                if (
                  -1 !== a &&
                  -1 !== o &&
                  o - a != 0 &&
                  (!g || g.startOffset !== a || g.endOffset !== o)
                ) {
                  var i = P.get(n);
                  if (i) {
                    var c = e.getBoundingClientRect(),
                      s = c.left,
                      u = c.top,
                      l = c.right,
                      p = c.bottom,
                      f = {
                        isFocused: !0,
                        selectedParagraph: i,
                        startOffset: a,
                        endOffset: o,
                        menuPosition: {
                          left: (s + l) / 2 + window.pageXOffset,
                          top: u + window.pageYOffset,
                          bottom: p + window.pageYOffset,
                        },
                      };
                    setTimeout(function () {
                      h(f);
                    }),
                      document.removeEventListener("click", S),
                      (t = setTimeout(function () {
                        return document.addEventListener("click", S);
                      }, 20));
                  }
                }
              },
              [P, g, h]
            );
          return (
            s.useEffect(
              function () {
                return function () {
                  t && clearTimeout(t),
                    document.removeEventListener("click", S);
                };
              },
              [P, h]
            ),
            (0, p.f)(b, c),
            s.createElement(
              Ee.Provider,
              { value: { activeSelection: g, setActiveSelection: h } },
              s.createElement(he.B, null, function (e) {
                var t = e.isVisible,
                  n = e.hide,
                  o = e.show,
                  i = function () {
                    h(null), E(null), n();
                  },
                  c = g && g.selectedParagraph && g.selectedParagraph.name,
                  u = I.get(c || "");
                return s.createElement(
                  ee.G,
                  {
                    isVisible: t,
                    hide: i,
                    reference: u,
                    popoverRenderFn: function () {
                      return s.createElement(
                        Z.Y,
                        null,
                        a && g
                          ? s.createElement(de, {
                              activeSelection: g,
                              onCancel: i,
                              onMutationComplete: y,
                              onNoteCreation: i,
                              post: a,
                            })
                          : s.createElement(s.Fragment, null)
                      );
                    },
                  },
                  a && !t && g && g.menuPosition
                    ? s.createElement(K, {
                        createPrivateNote: function () {
                          E({
                            id: "private-note-selection",
                            paragraphs: [g.selectedParagraph],
                            userId: null,
                            startOffset: g.startOffset,
                            endOffset: g.endOffset,
                            user: void 0,
                          }),
                            o();
                        },
                        endOffset: g.endOffset,
                        highlightId: g.highlightId,
                        highlights: r,
                        interactivePost: a,
                        isPersistent: g.isFocused,
                        mouseEnter: g.menuMouseEnter,
                        mouseLeave: g.menuMouseLeave,
                        position: g.menuPosition,
                        selectedParagraphs: [g.selectedParagraph],
                        startOffset: g.startOffset,
                      })
                    : s.createElement(s.Fragment, null)
                );
              }),
              n
            )
          );
        },
        Pe = (0, c.Ps)(ve(), X),
        Ie = (0, c.Ps)(me(), Y, ge);
    },
    69677: (e, t, n) => {
      "use strict";
      n.d(t, { yb: () => d, Ij: () => g, CF: () => h, pK: () => m });
      var r = n(28655),
        a = n.n(r),
        o = n(63038),
        i = n.n(o),
        c = n(71439),
        s = n(67294),
        u = n(76915);
      function l() {
        var e = a()([
          "\n  fragment ParagraphRefsMapContext_paragraph on Paragraph {\n    id\n    name\n    text\n  }\n",
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      var p = s.createContext({
          paragraphRefsMappers: {
            paragraphRefsMap: new Map(),
            paragraphRefsByNameMap: new Map(),
          },
          addParagraphRef: function () {},
        }),
        f = function () {
          return {
            paragraphRefsMap: new Map(),
            paragraphRefsByNameMap: new Map(),
          };
        },
        d = function (e) {
          var t = e.children,
            n = s.useState(f),
            r = i()(n, 2),
            a = r[0],
            o = r[1],
            c = s.useCallback(
              function (e, t) {
                o(function (n) {
                  if (!e.current) return n;
                  var r = n.paragraphRefsMap,
                    a = n.paragraphRefsByNameMap,
                    o = new Map(r);
                  o.set(e.current, t);
                  var i = new Map(a);
                  return (
                    t.name && i.set(t.name, e.current),
                    { paragraphRefsMap: o, paragraphRefsByNameMap: i }
                  );
                });
              },
              [o]
            );
          return s.createElement(
            p.Provider,
            { value: { paragraphRefsMappers: a, addParagraphRef: c } },
            t
          );
        },
        g = function () {
          return s.useContext(p);
        },
        h = function (e, t) {
          var n = s.useContext(p).addParagraphRef,
            r = s.useRef(null);
          return (
            s.useEffect(
              function () {
                r.current &&
                  !["Title", "Subtitle"].includes(t) &&
                  (r.current.setAttribute(u.O, ""), n(r, e));
              },
              [r]
            ),
            r
          );
        },
        m = (0, c.Ps)(l());
    },
    76915: (e, t, n) => {
      "use strict";
      n.d(t, { O: () => a, f: () => i });
      var r = n(67294),
        a = "data-selectable-paragraph",
        o = function (e) {
          if (!e.commonAncestorContainer) return null;
          var t =
            e.commonAncestorContainer instanceof Element
              ? e.commonAncestorContainer
              : e.commonAncestorContainer.parentElement;
          return t ? t.closest("[".concat(a, "]")) : null;
        },
        i = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          r.useEffect(
            function () {
              var n = function () {
                if (!t) {
                  var n = document.getSelection();
                  if (n && "Range" === n.type && !(n.rangeCount > 1)) {
                    var r = n.getRangeAt(0);
                    if (r) {
                      var a = o(r);
                      a && e(r, a);
                    }
                  }
                }
              };
              return (
                document.addEventListener("mouseup", n),
                function () {
                  return document.removeEventListener("mouseup", n);
                }
              );
            },
            [e]
          );
        };
    },
    3523: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => c });
      var r = n(67294),
        a = n(28309),
        o = n(5955),
        i = function (e) {
          return {
            backgroundColor: e.baseColor.background.normal,
            padding: "2px 4px",
            fontSize: "75%",
            "> strong": { fontFamily: "inherit" },
          };
        },
        c = function (e) {
          var t = e.children,
            n = (0, a.Iq)();
          return r.createElement("code", { className: n([i, (0, o.XK)()]) }, t);
        };
    },
    91442: (e, t, n) => {
      "use strict";
      n.d(t, { Vc: () => y, U7: () => I, g8: () => S, iB: () => b });
      var r = n(28655),
        a = n.n(r),
        o = n(59713),
        i = n.n(o),
        c = n(63038),
        s = n.n(c),
        u = n(71439),
        l = n(67294),
        p = n(40820),
        f = n(69677);
      function d() {
        var e = a()([
          "\n  fragment HighlighSegmentContext_paragraph on Paragraph {\n    ...ParagraphRefsMapContext_paragraph\n  }\n  ",
          "\n",
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = a()([
          "\n  fragment HighlighSegmentContext_highlight on Quote {\n    endOffset\n    id\n    paragraphs {\n      name\n    }\n    startOffset\n    userId\n  }\n",
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var v,
        E,
        y = l.createContext({
          updateHighlightSegments: function () {},
          highlightSegments: new Map(),
        }),
        O = function () {
          return new Map();
        },
        P = function (e, t, n) {
          var r = e.reduce(function (e, r) {
            var a = t.get(r);
            if (
              !a ||
              (!a.startOffset && 0 !== a.startOffset) ||
              (!a.endOffset && 0 !== a.endOffset)
            )
              return e;
            if (
              !e ||
              (!e.startOffset && 0 !== e.startOffset) ||
              (!e.endOffset && 0 !== e.endOffset)
            )
              return a;
            var o = e.endOffset - e.startOffset,
              i = a.endOffset - a.startOffset;
            return (a.userId === n && e.userId !== n) || o > i ? a : e;
          }, null);
          return r && r.id;
        },
        I = function (e) {
          var t = e.children,
            n = e.highlights,
            r = e.paragraphs,
            a = e.viewer,
            o = n || [],
            i = l.useMemo(
              function () {
                return new Map(
                  o.map(function (e) {
                    return [e.id, e];
                  })
                );
              },
              [o]
            ),
            c = l.useMemo(function () {
              return new Map();
            }, []),
            u = l.useState(O),
            f = s()(u, 2),
            d = f[0],
            g = f[1],
            h = l.useContext(p.Tz),
            I = h.activeSelection,
            S = h.setActiveSelection,
            b = function (e) {
              var t = c.get(e);
              if (t) {
                var n = Array.from(t)
                  .map(function (e) {
                    return d.get(e);
                  })
                  .filter(Boolean)
                  .reduce(function (e, t) {
                    if (!t.ref.current) return e;
                    var n = t.ref.current.getBoundingClientRect(),
                      r = n.left,
                      a = n.top,
                      o = n.right,
                      i = n.bottom,
                      c = r + window.pageXOffset,
                      s = o + window.pageXOffset,
                      u = a + window.pageYOffset,
                      l = i + window.pageYOffset;
                    return (
                      (!e.minLeft || c < e.minLeft) && (e.minLeft = c),
                      (!e.maxRight || s > e.maxRight) && (e.maxRight = s),
                      (!e.minTop || u < e.minTop) && (e.minTop = u),
                      (!e.maxTop || l < e.maxTop) && (e.maxTop = l),
                      e
                    );
                  }, {});
                return {
                  left: (n.minLeft + n.maxRight) / 2,
                  top: n.minTop,
                  bottom: n.maxTop,
                };
              }
            },
            x = function (e) {
              if (
                e &&
                e.paragraphs &&
                (e.startOffset || 0 === e.startOffset) &&
                (e.endOffset || 0 === e.endOffset)
              ) {
                var t = r.find(function (t) {
                  var n = t.name;
                  return e && e.paragraphs[0].name === n;
                });
                return t
                  ? {
                      isFocused: !1,
                      selectedParagraph: t,
                      highlightId: e.id,
                      startOffset: e.startOffset,
                      endOffset: e.endOffset,
                      menuPosition: b(e.id),
                    }
                  : null;
              }
            },
            w = {
              highlightSegments: l.useMemo(
                function () {
                  var e = new Map();
                  return (
                    d.forEach(function (t, n) {
                      var r = t.highlightIds,
                        o = function () {
                          (I && I.isFocused) ||
                            ((E = function () {
                              P(r, i, a && a.id) &&
                                (S(null), (v = null), (E = null));
                            }),
                            (v = setTimeout(E, 100)));
                        },
                        c = m(
                          m({}, t),
                          {},
                          {
                            isActive:
                              !!I && t.highlightIds.includes(I.highlightId),
                            onClick: function () {
                              var e = document.getSelection();
                              if (!e || "Range" !== e.type) {
                                var t = P(r, i, a && a.id),
                                  n = i.get(t || ""),
                                  o = x(n);
                                if (o) {
                                  setTimeout(function () {
                                    S(m(m({}, o), {}, { isFocused: !0 }));
                                  });
                                  var c =
                                    document.documentElement &&
                                    "ontouchstart" in document.documentElement
                                      ? "touchstart"
                                      : "click";
                                  document.addEventListener(c, function e() {
                                    S(null), document.removeEventListener(c, e);
                                  });
                                }
                              }
                            },
                          }
                        );
                      document.documentElement &&
                        !("ontouchstart" in document.documentElement) &&
                        ((c.onMouseEnter = function e() {
                          if (!I || !I.isFocused) {
                            v && E && (clearTimeout(v), E());
                            var t = P(r, i, a && a.id),
                              n = i.get(t || ""),
                              c = x(n);
                            c &&
                              S(
                                m(
                                  m({}, c),
                                  {},
                                  {
                                    isFocused: !1,
                                    menuMouseEnter: e,
                                    menuMouseLeave: o,
                                  }
                                )
                              );
                          }
                        }),
                        (c.onMouseLeave = o)),
                        e.set(n, c);
                    }),
                    e
                  );
                },
                [d, i, a, I]
              ),
              updateHighlightSegments: function (e, t) {
                var n = t.highlightIds,
                  r = t.ref;
                g(function (t) {
                  var o = new Map(t);
                  return (
                    o.set(e, {
                      isActive: !!I && n.includes(I.highlightId),
                      highlightIds: n,
                      ref: r,
                      viewerIsOwner: n.some(function (e) {
                        var t = i.get(e);
                        return a && t && t.userId === a.id;
                      }),
                    }),
                    o
                  );
                }),
                  n.forEach(function (t) {
                    var n = c.get(t);
                    n || (n = new Set()), n.add(e), c.set(t, n);
                  });
              },
            };
          return l.createElement(y.Provider, { value: w }, t);
        },
        S = (0, u.Ps)(g()),
        b = (0, u.Ps)(d(), f.pK);
    },
    3011: (e, t, n) => {
      "use strict";
      n.d(t, { T2: () => ge, DV: () => he, Zr: () => me });
      var r = n(28655),
        a = n.n(r),
        o = n(71439),
        i = n(67294),
        c = n(319),
        s = n.n(c),
        u = n(43198),
        l = n(56862),
        p = n(28309),
        f = n(84564),
        d = n.n(f),
        g = "[^\\.!*'\\(\\);:@&=+$,/?#\\[\\]\\/]+",
        h = "(?:".concat(g, "@)?"),
        m = "".concat(g, "(?:\\.").concat(g, ")+"),
        v =
          (new RegExp(
            "^"
              .concat("(?:[A-Za-z][A-Za-z0-9\\.-]*:)?(?:\\/\\/)?")
              .concat(h)
              .concat(m)
          ),
          ["http:", "https:", "mailto:"]),
        E = function (e, t) {
          return {
            color: "inherit",
            textDecoration:
              "Kicker" === e ||
              (function (e, t) {
                return (
                  ["Title"].concat(s()(u.j)).includes(e) &&
                  ("CARD" === t || "SHORTFORM_CARD" === t)
                );
              })(e, t)
                ? "none"
                : "underline",
          };
        },
        y = function (e) {
          var t,
            n,
            r = e.href,
            a = e.children,
            o = e.paragraphStyle,
            c = e.richTextStyle,
            s = (0, p.Iq)();
          return (
            (t = r),
            (n = d()(t)).protocol && !v.includes(n.protocol)
              ? a
              : "STREAM" === c
              ? i.createElement("span", { className: s(E(o, c)) }, a)
              : i.createElement(
                  l.e,
                  { href: r, className: s(E(o, c)), disableSourceParam: !0 },
                  a
                )
          );
        },
        O = n(3523),
        P = n(59713),
        I = n.n(P),
        S = n(27721),
        b = n(53006),
        x = n(90038);
      function w() {
        var e = a()([
          "\n  fragment DropCap_image on ImageMetadata {\n    id\n    originalHeight\n    originalWidth\n  }\n",
        ]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      function R(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var N = function (e, t) {
          return {
            display: "block",
            float: "left",
            height: "".concat(t, "px"),
            marginRight: "12px",
            position: "relative",
            width: "".concat(e, "px"),
          };
        },
        T = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? R(Object(n), !0).forEach(function (t) {
                  I()(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : R(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        })(
          {
            maxWidth: "100%",
            marginTop: {
              xs: "-2px",
              sm: "-2px",
              md: "11px",
              lg: "11px",
              xl: "11px",
            },
          },
          (0, b.m)()
        );
      function M(e) {
        var t = e.children,
          n = e.image,
          r = e.text,
          a = (0, p.Iq)(),
          o = (0, p.Fg)();
        if (!n || !n.originalWidth || !n.originalHeight)
          return i.createElement(i.Fragment, null, t);
        var c = 3 * o.newFonts.body.lineHeight.S - 5,
          s = n.originalHeight,
          u = c * (n.originalWidth / s);
        return i.createElement(
          "span",
          { className: a(N(u, c)) },
          i.createElement(S.UV, {
            alt: r,
            miroId: n.id,
            rules: [T],
            strategy: x._S.Resample,
            height: c,
            width: u,
            freezeGifs: !1,
          }),
          t
        );
      }
      function C(e) {
        var t,
          n = (0, p.Iq)(),
          r = e.image,
          a = e.text;
        return i.createElement(
          M,
          e,
          i.createElement(
            "span",
            {
              className: n(
                ((t = !!r),
                {
                  display: "block",
                  float: "left",
                  fontSize: "66px",
                  lineHeight: ".83",
                  marginRight: "12px",
                  paddingTop: {
                    xs: "0",
                    sm: "0",
                    md: "7px",
                    lg: "7px",
                    xl: "7px",
                  },
                  position: "relative",
                  opacity: t ? "0" : null,
                })
              ),
            },
            a
          )
        );
      }
      var _ = (0, o.Ps)(w()),
        D = n(65441),
        H = function (e) {
          switch (e) {
            case "P":
            case "OLI":
            case "ULI":
            case "BQ":
            case "PRE":
              return "italic" === (0, D.S$)(e)
                ? { fontStyle: "normal" }
                : { fontStyle: "italic" };
            default:
              return { fontStyle: "inherit" };
          }
        },
        k = function (e) {
          var t = e.children,
            n = e.paragraphStyle,
            r = (0, p.Iq)();
          return i.createElement("em", { className: r(H(n)) }, t);
        },
        L = /[\r\n↵]/,
        j = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = e.split(L);
          if (n.length <= 1) return e;
          if (1 === e.length && "" === n[0] && "" === n[1])
            return i.createElement("br", { key: "".concat(t) });
          "" === n[n.length - 1] && n.pop();
          var r = [];
          return (
            n.forEach(function (e) {
              r.push(e), r.push("br");
            }),
            L.test(e[e.length - 1]) || r.pop(),
            i.createElement(
              i.Fragment,
              null,
              r.map(function (e, n) {
                return n % 2 == 0
                  ? e || null
                  : i.createElement("br", { key: "".concat(t).concat(n) });
              })
            )
          );
        },
        A = n(91442),
        q = function (e, t) {
          return function (n) {
            return {
              backgroundColor:
                (e && n.highlightColor.dark) ||
                (t && n.highlightColor.normal) ||
                n.highlightColor.light,
              color: "currentColor",
              cursor: "pointer",
            };
          };
        },
        Q = function (e) {
          var t = e.children,
            n = e.highlightIds,
            r = e.segmentId,
            a = (0, p.Iq)(),
            o = i.useRef(null),
            c = n.some(function (e) {
              return "private-note-selection" === e;
            }),
            s = i.useContext(A.Vc),
            u = s.highlightSegments,
            l = s.updateHighlightSegments,
            f = u.get(r),
            d = f || {},
            g = d.isActive,
            h = d.viewerIsOwner,
            m = d.onClick,
            v = d.onMouseEnter,
            E = d.onMouseLeave;
          return (
            i.useEffect(
              function () {
                c ||
                  (f &&
                    f.ref &&
                    f.ref.current &&
                    n.length === f.highlightIds.length &&
                    n.every(function (e) {
                      return f.highlightIds.includes(e);
                    })) ||
                  l(r, { highlightIds: n, ref: o });
              },
              [n, o]
            ),
            i.createElement(
              "mark",
              {
                className: a(q(g || c, !!h)),
                onClick: m,
                onMouseEnter: v,
                onMouseLeave: E,
                ref: o,
              },
              t
            )
          );
        },
        F = i.memo(Q),
        U = n(10515),
        $ = n(54260),
        G = n(5955),
        B = function (e, t, n) {
          return function (r) {
            switch (e) {
              case "P":
              case "BQ":
              case "OLI":
              case "ULI":
                return t
                  ? (0, G.OA)()(r)
                  : n
                  ? (0, G.qd)()(r)
                  : {
                      fontFamily: r.newFonts.body.family,
                      fontWeight: r.newFonts.body.boldWeight,
                    };
              case "PRE":
                return (0, G.t5)()(r);
              case "IMG":
                return {
                  fontFamily: r.newFonts.detail.family,
                  fontWeight: r.newFonts.detail.boldWeight,
                };
              default:
                return { fontWeight: "inherit" };
            }
          };
        },
        z = function (e) {
          var t = e.children,
            n = e.paragraphStyle,
            r = (0, p.Iq)(),
            a = i.useContext($.H).threadDepthOnPage;
          return i.createElement(U.M.Consumer, null, function (e) {
            return i.createElement("strong", { className: r(B(n, !!a, e)) }, t);
          });
        },
        V = n(46829),
        W = n(12291),
        J = n(85740),
        K = n(41832),
        X = n(22091),
        Y = n(27952);
      function Z() {
        var e = a()([
          "\n  query UserMentionTooltipQuery($userId: ID!) {\n    user(id: $userId) {\n      ...UserMentionTooltip_user\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (Z = function () {
            return e;
          }),
          e
        );
      }
      var ee = function (e) {
          return {
            background: "none",
            color: e.accentColor.text.normal,
            textDecoration: "none",
          };
        },
        te = { display: "inline-block", width: "auto" },
        ne = (0, W.$j)(function (e) {
          return { authDomain: e.config.authDomain };
        })(function (e) {
          var t = e.children,
            n = e.userId,
            r = e.richTextStyle,
            a = e.authDomain,
            o = (0, p.Iq)(),
            c = (0, V.useQuery)(re, { variables: { userId: n }, ssr: !1 }).data,
            s = null == c ? void 0 : c.user,
            u = i.createElement(
              l.e,
              { target: "_blank", href: (0, Y.bUn)(a, n), className: o(ee) },
              t
            );
          return "STREAM" === r
            ? i.createElement("span", { className: o(ee) }, t)
            : i.createElement(
                J.bZ,
                {
                  name: "enable_author_cards",
                  placeholder: function () {
                    return u;
                  },
                },
                function (e) {
                  return e && s
                    ? i.createElement(
                        "div",
                        { className: o(te) },
                        i.createElement(
                          X.$W,
                          {
                            placement: "right",
                            targetDistance: 15,
                            mouseLeaveDelay: 200,
                            popoverRenderFn: function () {
                              return s && i.createElement(K.K$, { user: s });
                            },
                          },
                          i.createElement(
                            l.e,
                            {
                              target: "_blank",
                              href: (0, Y.bUn)(a, n),
                              className: o(ee),
                            },
                            t
                          )
                        )
                      )
                    : u;
                }
              );
        }),
        re = (0, o.Ps)(Z(), K.OJ);
      function ae() {
        var e = a()([
          "\n  fragment MarkupNode_data_dropCapImage on ImageMetadata {\n    ...DropCap_image\n  }\n  ",
          "\n",
        ]);
        return (
          (ae = function () {
            return e;
          }),
          e
        );
      }
      var oe = (0, o.Ps)(ae(), _),
        ie = function e(t) {
          var n = t.data,
            r = t.prefix,
            a = t.paragraphStyle,
            o = t.richTextStyle;
          if ("string" == typeof n) return j(n, r);
          var c = n.children.map(function (t, n) {
            return "string" == typeof t
              ? j(t, "".concat(r).concat(n))
              : i.createElement(e, {
                  key: n,
                  data: t,
                  paragraphStyle: a,
                  prefix: "".concat(r).concat(n),
                  richTextStyle: o,
                });
          });
          switch (n.type) {
            case "A":
              return i.createElement(
                y,
                { href: n.href, paragraphStyle: a, richTextStyle: o },
                c
              );
            case "CODE":
              return "PRE" === a
                ? i.createElement(i.Fragment, null, c)
                : i.createElement(O.E, null, c);
            case "DROPCAP":
              var s = c[0];
              return s && "string" == typeof s
                ? "BQ" === a || "PQ" === a
                  ? s
                  : i.createElement(C, { text: s, image: n.dropCapImage })
                : null;
            case "EM":
              return i.createElement(k, { paragraphStyle: a }, c);
            case "QUOTE":
              return i.createElement(
                F,
                {
                  highlightIds: n.highlightIds,
                  segmentId: n.segmentId,
                  key: n.segmentId,
                },
                c
              );
            case "STRONG":
              return i.createElement(z, { paragraphStyle: a }, c);
            case "ID_WRAPPER":
              return i.createElement("span", { id: n.wrapperId }, c);
            case "USER_MENTION":
              return i.createElement(
                ne,
                { userId: n.userId, richTextStyle: o },
                c
              );
            default:
              return null;
          }
        },
        ce = i.memo(ie);
      function se() {
        var e = a()([
          "\n  fragment Markups_paragraph on Paragraph {\n    name\n    text\n    hasDropCap\n    dropCapImage {\n      ...MarkupNode_data_dropCapImage\n    }\n    markups {\n      type\n      start\n      end\n      href\n      anchorType\n      userId\n      linkMetadata {\n        httpStatus\n      }\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (se = function () {
            return e;
          }),
          e
        );
      }
      function ue() {
        var e = a()([
          "\n  fragment Markups_highlight on Quote {\n    id\n    paragraphs {\n      name\n    }\n    startOffset\n    endOffset\n    userId\n  }\n",
        ]);
        return (
          (ue = function () {
            return e;
          }),
          e
        );
      }
      var le =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƏǺǼǾȘȚẀẂẄẞỲΩ∆",
        pe =
          "abcdefghijklmnopqrstuvwxyzµßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżžſǻǽǿșțȷəẁẃẅỳ",
        fe = new RegExp(
          "^[" +
            le +
            "][" +
            pe +
            "\\,\\.](?= )|^[" +
            le +
            "]’(?=[" +
            pe +
            "])|^[’‘“„”]?[" +
            le +
            "]|^[0-9]{1,4}\\.?(?![0-9])"
        ),
        de = function (e) {
          var t = e.highlights,
            n = e.paragraph,
            r = e.paragraphStyle,
            a = e.richTextStyle,
            o = e.allowDropCap;
          return ye(n, a, void 0 !== o && o, t || []).map(function (e, t) {
            return i.createElement(ce, {
              key: t,
              data: e,
              paragraphStyle: r,
              prefix: t.toString(),
              richTextStyle: a,
            });
          });
        },
        ge = i.memo(de),
        he = (0, o.Ps)(ue()),
        me = (0, o.Ps)(se(), oe),
        ve = function (e) {
          return null != e.type && null != e.start && null != e.end;
        },
        Ee = function (e, t) {
          var n = {
            COMMENT: 1,
            HIGHLIGHT: 2,
            FULL_HIGHLIGHT: 3,
            HIGHLIGHT_SEGMENT: 4,
            QUOTE: 5,
            QUERY: 6,
            CODE: 7,
            A: 8,
            STRONG: 9,
            EM: 10,
            WARNING: 11,
            DROPCAP: 12,
            ID_WRAPPER: 13,
            UNUSED_DETAIL: 14,
            SENTENCE_DEPRECATED: 15,
          };
          if (
            null == e.type ||
            null == e.start ||
            null == e.end ||
            null == t.type ||
            null == t.start ||
            null == t.end
          )
            throw new Error(
              "Comparing markups requires type, start, and end fields."
            );
          var r = n[e.type] - n[t.type];
          if (0 !== r) return r;
          if (0 != (r = e.start - t.start)) return r;
          if (0 != (r = e.end - t.end)) return r;
          var a = JSON.stringify(e),
            o = JSON.stringify(t);
          return a > o ? 1 : a < o ? -1 : 0;
        },
        ye = function (e, t, n, r) {
          var a = e.dropCapImage,
            o = [],
            i = (function (e, t, n, r) {
              var a = e.hasDropCap,
                o = e.text;
              if (!o) return [];
              var i = n && "FULL_PAGE" === t && a,
                c = e.text ? e.text.length : 0,
                s = r.map(function (t) {
                  return {
                    type: "FULL_HIGHLIGHT",
                    highlightId: t.id,
                    start: t.startOffset || 0,
                    end:
                      (t.paragraphs[0].name === e.name && t.endOffset) || c - 1,
                  };
                }),
                u = [].concat(e.markups, s).filter(ve),
                l = new Set();
              l.add(0),
                l.add(o.length),
                u.forEach(function (e) {
                  l.add(e.start), l.add(e.end);
                });
              var p = [];
              if (
                (u
                  .slice()
                  .sort(Ee)
                  .forEach(function (e) {
                    p.push(e);
                  }),
                i)
              ) {
                var f = (function (e) {
                  if (!e) return "";
                  var t = fe.exec(e),
                    n = t ? t[0] : "";
                  return n.length >= e.trim().length ? "" : n;
                })(e.text);
                f.length > 0 &&
                  (l.add(f.length),
                  p.unshift({ type: "DROPCAP", start: 0, end: f.length }));
              }
              var d = Array.from(l).sort(function (e, t) {
                  return e - t;
                }),
                g = d.map(function (e, t) {
                  var n;
                  return {
                    point: e,
                    markups: p
                      .filter(function (t) {
                        return t.start <= e && t.end > e;
                      })
                      .reduce(function (r, a) {
                        return (
                          "FULL_HIGHLIGHT" === a.type
                            ? (n ||
                                ((n = {
                                  type: "HIGHLIGHT_SEGMENT",
                                  highlightIds: [],
                                  start: e,
                                  end: d[t] - 1,
                                }),
                                r.push(n)),
                              n.highlightIds.push(a.highlightId))
                            : r.push(a),
                          r
                        );
                      }, []),
                  };
                });
              if (i) {
                var h = g[0].markups.filter(function (e) {
                  return "DROPCAP" === e.type;
                });
                if (h.length > 0) {
                  var m = h[0];
                  g[0].markups = [m];
                }
              }
              return g;
            })(e, t, n, r),
            c = [],
            s = [];
          return (
            i.forEach(function (t, n) {
              var r = t.point,
                u = t.markups,
                l = (i[n + 1] || i[i.length - 1]).point,
                p = (e.text || "").slice(r, l);
              (c = s), (s = []);
              var f = !1,
                d = o,
                g = function (e) {
                  s.push(e);
                  var t = e.markupNodeData;
                  "string" != typeof t && (d = t.children);
                };
              u.forEach(function (t, n) {
                var r = c[n];
                if (!f && r && r.markup === t)
                  g({ markup: t, markupNodeData: r.markupNodeData });
                else {
                  f = !0;
                  var o = Oe(t, a, e);
                  o && (d.push(o), g({ markup: t, markupNodeData: o }));
                }
              }),
                d.push(p);
            }),
            o
          );
        },
        Oe = function (e, t, n) {
          switch (e.type) {
            case "A":
              return "LINK" !== e.anchorType && e.anchorType
                ? "USER" === e.anchorType && e.userId
                  ? { type: "USER_MENTION", userId: e.userId, children: [] }
                  : null
                : e.href
                ? { type: "A", href: e.href, children: [] }
                : null;
            case "CODE":
              return { type: "CODE", children: [] };
            case "DROPCAP":
              return { type: "DROPCAP", dropCapImage: t, children: [] };
            case "EM":
              return { type: "EM", children: [] };
            case "STRONG":
              return { type: "STRONG", children: [] };
            case "ID_WRAPPER":
              return {
                type: "ID_WRAPPER",
                wrapperId: e.wrapperId,
                children: [],
              };
            case "HIGHLIGHT":
              return {
                type: "QUOTE",
                highlightIds: [],
                segmentId: "".concat(n.name || "", "_").concat(e.start),
                children: [],
              };
            case "HIGHLIGHT_SEGMENT":
              return {
                type: "QUOTE",
                highlightIds: e.highlightIds,
                segmentId: "".concat(n.name || "", "_").concat(e.start),
                children: [],
              };
            default:
              return null;
          }
        };
    },
    24219: (e, t, n) => {
      "use strict";
      n.d(t, { A7: () => He, Mx: () => ke, uR: () => Le });
      var r = n(28655),
        a = n.n(r),
        o = n(319),
        i = n.n(o),
        c = n(63038),
        s = n.n(c),
        u = n(71439),
        l = n(67294),
        p = n(25415),
        f = n(37206),
        d = n(16803),
        g = n(12291),
        h = n(95482),
        m = n(22669),
        v = n(24548),
        E = n(59713),
        y = n.n(E),
        O = n(80439);
      function P(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function S() {
        var e = a()([
          "\n  query NoteDeleteMutation_postNotes($postId: ID!) {\n    post(id: $postId) {\n      id\n      privateNotes {\n        id\n      }\n    }\n  }\n",
        ]);
        return (
          (S = function () {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = a()([
          "\n  mutation NoteDeleteMutation($targetPostId: ID!, $targetNoteId: ID!) {\n    deleteNote(targetPostId: $targetPostId, targetNoteId: $targetNoteId)\n  }\n",
        ]);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      var x = (0, u.Ps)(b()),
        w = (0, u.Ps)(S()),
        R = (0, g.$j)()(function (e) {
          var t = e.children,
            n = e.onCompleted,
            r = e.targetPostId,
            a = e.targetNoteId;
          return l.createElement(
            O.mm,
            {
              mutation: x,
              onCompleted: n,
              optimisticResponse: { deleteNote: !0 },
              update: function (e) {
                var t = e.readQuery({ query: w, variables: { postId: r } }),
                  n = {
                    post: I(
                      I({}, t.post),
                      {},
                      {
                        privateNotes: t.post.privateNotes.filter(function (e) {
                          return e.id !== a;
                        }),
                      }
                    ),
                  };
                e.writeQuery({ query: w, variables: { postId: r }, data: n });
              },
              variables: { targetPostId: r, targetNoteId: a },
            },
            function (e) {
              return t({ mutate: e });
            }
          );
        });
      function N(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function M() {
        var e = a()([
          "\n  query NoteDismissMutation_postNotes($postId: ID!) {\n    post(id: $postId) {\n      id\n      privateNotes {\n        id\n      }\n    }\n  }\n",
        ]);
        return (
          (M = function () {
            return e;
          }),
          e
        );
      }
      function C() {
        var e = a()([
          "\n  mutation NoteDismissMutation($targetPostId: ID!, $targetNoteId: ID!) {\n    dismissNote(targetPostId: $targetPostId, targetNoteId: $targetNoteId)\n  }\n",
        ]);
        return (
          (C = function () {
            return e;
          }),
          e
        );
      }
      var _ = (0, u.Ps)(C()),
        D = (0, u.Ps)(M()),
        H = (0, g.$j)()(function (e) {
          var t = e.children,
            n = e.onCompleted,
            r = e.targetPostId,
            a = e.targetNoteId;
          return l.createElement(
            O.mm,
            {
              mutation: _,
              onCompleted: n,
              optimisticResponse: { dismissNote: !0 },
              update: function (e) {
                var t = e.readQuery({ query: D, variables: { postId: r } }),
                  n = {
                    post: T(
                      T({}, t.post),
                      {},
                      {
                        privateNotes: t.post.privateNotes.filter(function (e) {
                          return e.id !== a;
                        }),
                      }
                    ),
                  };
                e.writeQuery({ query: D, variables: { postId: r }, data: n });
              },
              variables: { targetPostId: r, targetNoteId: a },
            },
            function (e) {
              return t({ mutate: e });
            }
          );
        });
      function k(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function j() {
        var e = a()([
          "\n  mutation NoteReplyCreateMutation($targetPostId: ID!, $targetNoteId: ID!, $replyContent: String!) {\n    createNoteReply(\n      targetPostId: $targetPostId\n      targetNoteId: $targetNoteId\n      replyContent: $replyContent\n    ) {\n      id\n      ...NoteReplyCreateMutation_privateNoteReply\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      function A() {
        var e = a()([
          "\n  query NoteReplyCreateMutation_postNotes($postId: ID!) {\n    post(id: $postId) {\n      id\n      privateNotes {\n        id\n        replies {\n          id\n          ...NoteReplyCreateMutation_privateNoteReply\n        }\n      }\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      function q() {
        var e = a()([
          "\n  fragment NoteReplyCreateMutation_privateNoteReply on NoteReply {\n    id\n    noteId\n    author {\n      id\n    }\n    content\n    createdAt\n    postId\n  }\n",
        ]);
        return (
          (q = function () {
            return e;
          }),
          e
        );
      }
      var Q = (0, u.Ps)(q()),
        F = (0, u.Ps)(A(), Q),
        U = (0, u.Ps)(j(), Q),
        $ = function (e) {
          var t = e.children,
            n = e.targetPostId,
            r = e.targetNoteId;
          return l.createElement(
            O.mm,
            {
              mutation: U,
              update: function (e, t) {
                var a = e.readQuery({ query: F, variables: { postId: n } }),
                  o = a.post.privateNotes.map(function (e) {
                    return e.id !== r
                      ? e
                      : L(
                          L({}, e),
                          {},
                          {
                            replies: [].concat(i()(e.replies), [
                              t.data.createNoteReply,
                            ]),
                          }
                        );
                  }),
                  c = { post: L(L({}, a.post), {}, { privateNotes: o }) };
                e.writeQuery({ query: F, variables: { postId: n }, data: c });
              },
            },
            function (e) {
              return t({
                mutate: function (t) {
                  return e(
                    L(
                      L({}, t),
                      {},
                      {
                        variables: L(
                          { targetPostId: n, targetNoteId: r },
                          t && t.variables
                        ),
                      }
                    )
                  );
                },
              });
            }
          );
        };
      function G(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? G(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : G(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function z() {
        var e = a()([
          "\n  query PostNotesReplies($postId: ID!) {\n    post(id: $postId) {\n      id\n      privateNotes {\n        id\n        replies {\n          id\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (z = function () {
            return e;
          }),
          e
        );
      }
      function V() {
        var e = a()([
          "\n  mutation NoteReplyDeleteMutation($targetPostId: ID!, $targetNoteId: ID!, $targetReplyId: ID!) {\n    deleteNoteReply(\n      targetPostId: $targetPostId\n      targetNoteId: $targetNoteId\n      targetReplyId: $targetReplyId\n    )\n  }\n",
        ]);
        return (
          (V = function () {
            return e;
          }),
          e
        );
      }
      var W = (0, u.Ps)(V()),
        J = (0, u.Ps)(z()),
        K = function (e) {
          var t = e.children,
            n = e.targetPostId,
            r = e.targetNoteId,
            a = e.targetReplyId;
          return l.createElement(
            O.mm,
            {
              mutation: W,
              optimisticResponse: { deleteNoteReply: !0 },
              update: function (e) {
                var t = e.readQuery({ query: J, variables: { postId: n } }),
                  o = t.post.privateNotes.map(function (e) {
                    return e.id !== r
                      ? e
                      : B(
                          B({}, e),
                          {},
                          {
                            replies: e.replies.filter(function (e) {
                              return e.id !== a;
                            }),
                          }
                        );
                  }),
                  i = { post: B(B({}, t.post), {}, { privateNotes: o }) };
                e.writeQuery({ query: J, variables: { postId: n }, data: i });
              },
              variables: { targetPostId: n, targetNoteId: r, targetReplyId: a },
            },
            function (e) {
              return t({ mutate: e });
            }
          );
        },
        X = n(46829);
      function Y() {
        var e = a()([
          "\n  mutation NoteReplyReportMutation($targetId: ID!) {\n    reportNoteReply(targetNoteReplyId: $targetId)\n  }\n",
        ]);
        return (
          (Y = function () {
            return e;
          }),
          e
        );
      }
      var Z = (0, u.Ps)(Y());
      function ee() {
        var e = a()([
          "\n  mutation NoteReportMutation($targetId: ID!) {\n    reportNote(targetNoteId: $targetId)\n  }\n",
        ]);
        return (
          (ee = function () {
            return e;
          }),
          e
        );
      }
      var te = (0, u.Ps)(ee()),
        ne = n(11241),
        re = n(34675),
        ae = n(98281),
        oe = n(85432),
        ie = n(64504),
        ce = n(85277),
        se = n(67297),
        ue = n(27952);
      function le() {
        var e = a()([
          "\n  fragment PostViewNoteCard_privateNote on Note {\n    id\n    author {\n      id\n      ...PostViewNoteCard_user\n    }\n    content\n    createdAt\n    postId\n    post {\n      id\n      creator {\n        id\n      }\n      collection {\n        id\n        viewerEdge {\n          id\n          isEditor\n        }\n      }\n    }\n    replies {\n      id\n      ...PostViewNoteCard_noteReply\n    }\n    selectionStartOffset\n    selectionEndOffset\n  }\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (le = function () {
            return e;
          }),
          e
        );
      }
      function pe() {
        var e = a()([
          "\n  fragment PostViewNoteCard_paragraph on Paragraph {\n    name\n  }\n",
        ]);
        return (
          (pe = function () {
            return e;
          }),
          e
        );
      }
      function fe() {
        var e = a()([
          "\n  fragment PostViewNoteCard_noteReply on NoteReply {\n    id\n    author {\n      id\n      ...PostViewNoteCard_user\n    }\n    content\n    createdAt\n    noteId\n    postId\n  }\n  ",
          "\n",
        ]);
        return (
          (fe = function () {
            return e;
          }),
          e
        );
      }
      function de() {
        var e = a()([
          "\n  fragment PostViewNoteCard_user on User {\n    id\n    name\n    username\n    ...UserAvatar_user\n    ...userUrl_user\n  }\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (de = function () {
            return e;
          }),
          e
        );
      }
      var ge = function (e) {
          var t = e.timestamp;
          return t
            ? n.g.Date.now() - t < 864e5
              ? l.createElement(v.b, { timestamp: t })
              : l.createElement(h.E, { timestamp: t })
            : null;
        },
        he = function (e) {
          var t = (0, se.v9)(function (e) {
              return e.config.authDomain;
            }),
            n = e.author,
            r = e.content,
            a = e.createdAt,
            o = e.id,
            i = e.isNote,
            c = e.onDelete,
            u = e.onReportError,
            p = (function (e) {
              var t = e.onError,
                n = e.targetId;
              return (0, X.useMutation)(Z, {
                onError: t,
                variables: { targetId: n },
                optimisticResponse: { reportNoteReply: !0 },
              });
            })({ onError: u, targetId: o }),
            f = (function (e) {
              var t = e.onCompleted,
                n = e.onError,
                r = e.targetId;
              return (0, X.useMutation)(te, {
                onCompleted: t,
                onError: n,
                optimisticResponse: { reportNote: !0 },
                variables: { targetId: r },
              });
            })({ onError: u, targetId: o });
          if (!n) return null;
          var d = i ? f : p,
            g = s()(d, 2),
            h = g[0],
            v = g[1],
            E = v.called,
            y = v.error,
            O = v.loading;
          return (
            y && u(),
            l.createElement(re.I8, { nonBlocking: !0 }, function (e) {
              return l.createElement(
                oe.xu,
                { padding: "12px 0" },
                l.createElement(
                  oe.xu,
                  {
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                  },
                  l.createElement(
                    oe.xu,
                    { marginRight: "12px" },
                    l.createElement(ae.Yt, { scale: "XS", user: n, link: !0 })
                  ),
                  l.createElement(
                    oe.xu,
                    { flexGrow: "1", flexShrink: "1" },
                    l.createElement(
                      ie.F,
                      { scale: "M", tag: "h4", color: "DARKER", clamp: 1 },
                      l.createElement(
                        oe.rU,
                        { href: (0, ue.AWr)(n, t), inline: !0 },
                        n.name
                      )
                    ),
                    l.createElement(
                      ie.F,
                      { scale: "M" },
                      l.createElement(ge, { timestamp: a })
                    )
                  ),
                  e &&
                    e.id === n.id &&
                    l.createElement(
                      oe.xu,
                      { alignSelf: "flex-start", marginLeft: "12px" },
                      l.createElement(
                        ie.F,
                        { scale: "M", tag: "div" },
                        l.createElement(
                          oe.rU,
                          { linkStyle: "SUBTLE", onClick: c },
                          "Delete"
                        )
                      )
                    ),
                  e &&
                    e.id !== n.id &&
                    l.createElement(
                      oe.xu,
                      { alignSelf: "flex-start" },
                      l.createElement(
                        ie.F,
                        { scale: "M", tag: "div" },
                        l.createElement(oe.Bn, null, function (e) {
                          var t = e.isVisible,
                            n = e.show,
                            r = e.hide;
                          return l.createElement(
                            oe.xu,
                            null,
                            l.createElement(
                              oe.QH,
                              {
                                confirmText: "Report",
                                hide: r,
                                isVisible: t,
                                onConfirm: h,
                                titleText: "Confirm",
                                isDestructiveAction: !0,
                              },
                              "Are you sure you want to report this note?"
                            ),
                            l.createElement(
                              oe.rU,
                              {
                                linkStyle: "SUBTLE",
                                onClick: n,
                                disabled: E || O,
                              },
                              E ? "Reported" : "Report"
                            )
                          );
                        })
                      )
                    )
                ),
                l.createElement(
                  oe.xu,
                  { whiteSpace: "pre-wrap" },
                  l.createElement(
                    ie.F,
                    { scale: "M", tag: "span", color: "DARKER" },
                    l.createElement(m.P, null, r)
                  )
                )
              );
            })
          );
        },
        me = function (e) {
          var t = e.note,
            n = e.exitReplyingMode;
          return l.createElement(
            oe.xu,
            { padding: "12px 0" },
            l.createElement(
              $,
              { targetPostId: t.postId, targetNoteId: t.id },
              function (e) {
                var t = e.mutate;
                return l.createElement(ne.$, {
                  onSubmit: function (e) {
                    t({ variables: { replyContent: e } }), n();
                  },
                  onCancel: n,
                });
              }
            )
          );
        },
        ve = function (e) {
          var t = e.note,
            n = e.isReplyingMode,
            r = e.exitReplyingMode,
            a = e.dispatch,
            o = t.replies;
          return 0 !== o.length || n
            ? l.createElement(
                oe.xu,
                { tag: "ol", marginLeft: "20px" },
                o.map(function (e) {
                  return l.createElement(
                    "li",
                    { key: e.id },
                    l.createElement(
                      K,
                      {
                        targetPostId: e.postId,
                        targetNoteId: e.noteId,
                        targetReplyId: e.id,
                      },
                      function (t) {
                        var n = t.mutate;
                        return l.createElement(he, {
                          author: e.author,
                          content: e.content,
                          createdAt: e.createdAt,
                          onDelete: function () {
                            n(),
                              a(
                                (0, ce.Dx)({
                                  duration: 5e3,
                                  message: "The reply has been deleted.",
                                })
                              );
                          },
                          id: e.id,
                          isNote: !1,
                          onReportError: function () {
                            a(
                              (0, ce.Dx)({
                                duration: 5e3,
                                toastStyle: "ERROR",
                                message:
                                  "An error occurred while reporting this reply.",
                              })
                            );
                          },
                        });
                      }
                    )
                  );
                }),
                n &&
                  l.createElement(
                    "li",
                    { key: "reply-new" },
                    l.createElement(me, { note: t, exitReplyingMode: r })
                  )
              )
            : null;
        },
        Ee = (0, g.$j)()(function (e) {
          var t = e.isLast,
            n = e.isReplyingMode,
            r = e.onReplyClick,
            a = e.note,
            o = e.dispatch,
            i = e.viewer,
            c = (0, p.Zx)().setPrivateNoteSelection;
          if (!i || !a.post) return null;
          var s = !n,
            u =
              (a.post.creator &&
                a.post.creator.id &&
                a.post.creator.id === i.id) ||
              (a.post.collection && a.post.collection.viewerEdge.isEditor),
            f =
              s &&
              l.createElement(
                ie.F,
                { scale: "M", tag: "div" },
                l.createElement(
                  oe.rU,
                  { linkStyle: "OBVIOUS", onClick: r },
                  "Reply"
                )
              ),
            d =
              u &&
              l.createElement(
                H,
                { targetPostId: a.postId, targetNoteId: a.id },
                function (e) {
                  var t = e.mutate;
                  return l.createElement(
                    oe.xu,
                    { flexGrow: "1", flexShrink: "1", textAlign: "right" },
                    l.createElement(
                      ie.F,
                      { scale: "M", tag: "span" },
                      l.createElement(
                        oe.rU,
                        {
                          linkStyle: "SUBTLE",
                          onClick: function () {
                            t(),
                              c(null),
                              o(
                                (0, ce.Dx)({
                                  duration: 5e3,
                                  message: "The note has been dismissed.",
                                })
                              );
                          },
                        },
                        "Dismiss note"
                      )
                    )
                  );
                }
              );
          return f || d || !t
            ? l.createElement(
                oe.xu,
                {
                  display: "flex",
                  borderTop: "BASE_LIGHTER",
                  padding: "12px 0",
                  marginTop: "8px",
                  marginBottom: t ? "0" : "16px",
                },
                f,
                d
              )
            : null;
        }),
        ye = (0, g.$j)()(function (e) {
          var t = e.dispatch,
            n = e.isLast,
            r = e.paragraph,
            a = e.note,
            o = l.useState(!1),
            i = s()(o, 2),
            c = i[0],
            u = i[1],
            f = (0, p.Zx)().setPrivateNoteSelection;
          return (
            l.useEffect(function () {
              if (
                (a.selectionStartOffset || 0 === a.selectionStartOffset) &&
                (a.selectionEndOffset || 0 === a.selectionEndOffset)
              )
                return (
                  f({
                    id: "private-note-selection",
                    paragraphs: [r],
                    userId: null,
                    startOffset: a.selectionStartOffset,
                    endOffset: a.selectionEndOffset,
                    user: void 0,
                  }),
                  function () {
                    return f(null);
                  }
                );
            }, []),
            l.createElement(
              oe.xu,
              { padding: "0 20px" },
              l.createElement(
                R,
                { targetPostId: a.postId, targetNoteId: a.id },
                function (e) {
                  var n = e.mutate;
                  return l.createElement(he, {
                    author: a.author,
                    createdAt: a.createdAt,
                    content: a.content,
                    id: a.id,
                    isNote: !0,
                    onDelete: function () {
                      n(),
                        f(null),
                        t(
                          (0, ce.Dx)({
                            duration: 5e3,
                            message: "The note has been deleted.",
                          })
                        );
                    },
                    onReportError: function () {
                      t(
                        (0, ce.Dx)({
                          duration: 5e3,
                          toastStyle: "ERROR",
                          message:
                            "An error occurred while reporting this note.",
                        })
                      );
                    },
                  });
                }
              ),
              l.createElement(ve, {
                note: a,
                isReplyingMode: c,
                exitReplyingMode: function () {
                  u(!1);
                },
                dispatch: t,
              }),
              l.createElement(re.I8, { nonBlocking: !0 }, function (e) {
                return l.createElement(Ee, {
                  note: a,
                  viewer: e,
                  isLast: n,
                  isReplyingMode: c,
                  onReplyClick: function () {
                    return u(!0);
                  },
                });
              })
            )
          );
        }),
        Oe = (0, u.Ps)(de(), ae.WQ, ue.$mN),
        Pe = (0, u.Ps)(fe(), Oe),
        Ie = (0, u.Ps)(pe()),
        Se = (0, u.Ps)(le(), Oe, Pe),
        be = n(27599),
        xe = n(28309);
      function we() {
        return (we =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var Re = l.createElement("path", {
        d: "M14.78 8.07a8.68 8.68 0 0 0-.43-1.38.48.48 0 0 0-.58-.27l-3.12.77V4.03c0-.24-.2-.48-.43-.5a7.23 7.23 0 0 0-1.38 0c-.24.02-.43.26-.43.5V7.2L5.3 6.41a.48.48 0 0 0-.58.27c-.18.45-.33.92-.43 1.39-.05.24.1.5.32.58l3.06.75-1.98 2.96c-.14.2-.13.5.04.67.34.33.7.63 1.1.9.2.13.48.07.62-.12l2.1-3.12 2.08 3.12c.15.19.43.25.63.11a7.7 7.7 0 0 0 1.1-.89.53.53 0 0 0 .03-.67L11.4 9.41l3.06-.76a.52.52 0 0 0 .32-.58",
        fillRule: "evenodd",
      });
      const Ne = function (e) {
        return l.createElement("svg", we({ width: 19, height: 19 }, e), Re);
      };
      var Te = n(51064);
      function Me() {
        var e = a()([
          "\n  fragment PostAnnotationsMarker_privateNote on Note {\n    ...PostViewNoteCard_privateNote\n  }\n  ",
          "\n",
        ]);
        return (
          (Me = function () {
            return e;
          }),
          e
        );
      }
      function Ce() {
        var e = a()([
          "\n  fragment PostAnnotationsMarker_paragraph on Paragraph {\n    ...PostViewNoteCard_paragraph\n  }\n  ",
          "\n",
        ]);
        return (
          (Ce = function () {
            return e;
          }),
          e
        );
      }
      var _e = {
          float: "right",
          position: "relative",
          width: "0",
          height: "0",
        },
        De = {
          position: "absolute",
          left: 0,
          top: 0,
          fontSize: 0,
          lineHeight: 0,
          userSelect: "none",
          "-webkit-user-select": "none",
        },
        He = function (e) {
          var t = e.paragraph,
            n = e.privateNotes,
            r = (0, xe.Iq)(),
            a = (0, be.Av)(),
            o = (0, p.Zx)(),
            c = o.openPrivateNoteId,
            u = o.setOpenPrivateNoteId,
            g = o.privateNoteSelection,
            h = o.setPrivateNoteSelection,
            m = n.map(function (e) {
              return e.id;
            }),
            v = l.useMemo(
              function () {
                return new Set(m);
              },
              [m]
            ),
            E = l.useRef(null),
            y = (0, Te.O)(!1),
            O = s()(y, 4),
            P = O[0],
            I = O[1],
            S = O[2],
            b = O[3];
          if (
            (l.useEffect(
              function () {
                c &&
                  v.has(c) &&
                  !P &&
                  E.current &&
                  (I(), window.scrollTo({ top: E.current.offsetTop }));
              },
              [c]
            ),
            !n || 0 === n.length)
          )
            return null;
          var x = n[0].postId,
            w = Math.min.apply(
              Math,
              i()(
                n.map(function (e) {
                  var t;
                  return null !== (t = e.selectionStartOffset) && void 0 !== t
                    ? t
                    : 0;
                })
              )
            ),
            R = Math.max.apply(
              Math,
              i()(
                n.map(function (e) {
                  var t;
                  return null !== (t = e.selectionEndOffset) && void 0 !== t
                    ? t
                    : 0;
                })
              )
            );
          return l.createElement(
            "span",
            { className: r(_e), ref: E },
            l.createElement(
              d.G,
              {
                isVisible: P,
                hide: function () {
                  u(null), S();
                },
                popoverRenderFn: function () {
                  return l.createElement(
                    f.Y,
                    null,
                    n.map(function (e, r) {
                      return l.createElement(ye, {
                        isLast: r === n.length - 1,
                        key: e.id,
                        note: e,
                        paragraph: t,
                      });
                    })
                  );
                },
              },
              l.createElement(
                "span",
                { className: r(De) },
                l.createElement(
                  oe.D6,
                  {
                    onMouseEnter: function () {
                      h({
                        id: "private-note-hover",
                        paragraphs: [t],
                        userId: null,
                        startOffset: w,
                        endOffset: R,
                        user: void 0,
                      });
                    },
                    onMouseLeave: function () {
                      "private-note-hover" === (null == g ? void 0 : g.id) &&
                        h(null);
                    },
                  },
                  l.createElement(
                    oe.PS,
                    {
                      onClick: function () {
                        b(),
                          a.event("notes.ui.showNotes", {
                            postId: x,
                            noteIds: m,
                          });
                      },
                    },
                    l.createElement(Ne, {
                      "aria-label": "View ".concat(n.length, " Private Notes"),
                    })
                  )
                )
              )
            )
          );
        },
        ke = (0, u.Ps)(Ce(), Ie),
        Le = (0, u.Ps)(Me(), Se);
    },
    37206: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => l });
      var r = n(67294),
        a = n(324),
        o = n(85432),
        i = n(64504),
        c = n(98024),
        s = n(90264),
        u = n(27952),
        l = function (e) {
          return r.createElement(
            a.N8,
            null,
            r.createElement(
              o.xu,
              { width: "400px", backgroundColor: "BACKGROUND" },
              r.createElement(
                o.xu,
                {
                  backgroundColor: "BASE_DARK",
                  padding: "12px 20px",
                  display: "flex",
                  alignItems: "center",
                },
                r.createElement(
                  o.xu,
                  { marginLeft: "-4px", marginRight: "8px" },
                  r.createElement(s.Z, null)
                ),
                r.createElement(
                  o.xu,
                  {
                    flexGrow: "1",
                    flexShrink: "1",
                    position: "relative",
                    top: "1px",
                  },
                  r.createElement(
                    i.Lh,
                    { tag: "h4" },
                    r.createElement(
                      c.F,
                      { scale: "S", tag: "span", color: "DARKER" },
                      "Private Notes"
                    )
                  )
                ),
                r.createElement(
                  o.xu,
                  { position: "relative", top: "1px" },
                  r.createElement(
                    c.F,
                    { scale: "S", color: "DARKER" },
                    r.createElement(
                      o.rU,
                      {
                        href: (0, u.qPp)(),
                        inline: !0,
                        target: "_blank",
                        linkStyle: "SUBTLE",
                      },
                      "Learn more"
                    )
                  )
                )
              ),
              e.children
            )
          );
        };
    },
    16803: (e, t, n) => {
      "use strict";
      n.d(t, { G: () => g });
      var r = n(67154),
        a = n.n(r),
        o = n(63038),
        i = n.n(o),
        c = n(67294),
        s = n(18736),
        u = n(75617),
        l = n(39453),
        p = n(28309),
        f = function (e) {
          return {
            background: e.backgroundColor,
            boxSizing: "border-box",
            border: "1px solid ".concat(e.baseColor.border.lighter),
            borderRadius: "".concat(e.borderRadius.regular, "px"),
            boxShadow: "0 1px 4px ".concat(e.baseColor.border.lighter),
            maxHeight: "100vh",
            overflowY: "auto",
          };
        },
        d = function (e) {
          e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
        },
        g = function (e) {
          var t = e.boundariesElement,
            n = void 0 === t ? "viewport" : t,
            r = e.children,
            o = e.popoverRenderFn,
            g = e.isVisible,
            h = e.hide,
            m = e.placement,
            v = void 0 === m ? "right-start" : m,
            E = e.referenceHeight,
            y = e.reference,
            O = (0, p.Iq)(),
            P = { display: "block", height: E },
            I = c.useState(null),
            S = i()(I, 2),
            b = S[0],
            x = S[1],
            w = c.useState(null),
            R = i()(w, 2),
            N = R[0],
            T = R[1],
            M = c.useCallback(function (e) {
              return x(e);
            }, []),
            C = c.useCallback(function (e) {
              return T(e);
            }, []),
            _ = (0, s.D)(y || b, N, {
              modifiers: [
                { name: "flip", enabled: !1 },
                {
                  name: "preventOverflow",
                  options: { altAxis: !0, rootBoundary: n, padding: 15 },
                },
              ],
              placement: v,
            }),
            D = _.styles,
            H = _.attributes,
            k = _.update,
            L = c.createElement(
              u.i,
              {
                disableOverlay: !1,
                onClick: function (e) {
                  return (0, l.fF)(h, e);
                },
                onKeyDown: function (e) {
                  return (0, l.cD)(h, e);
                },
              },
              c.createElement(
                "div",
                { onClick: d },
                c.createElement(
                  "div",
                  a()({ ref: C, style: D.popper, className: O(f) }, H.popper),
                  c.createElement("div", null, o(k))
                )
              )
            );
          return c.createElement(
            c.Fragment,
            null,
            y ? r : c.createElement("span", { ref: M, className: O(P) }, r),
            g ? L : null
          );
        };
    },
    11241: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => v, $: () => y });
      var r = n(67154),
        a = n.n(r),
        o = n(63038),
        i = n.n(o),
        c = n(67294),
        s = n(34675),
        u = n(98281),
        l = n(85432),
        p = n(64504),
        f = n(67995),
        d = n(28309),
        g = {
          border: "none",
          display: "block",
          resize: "none",
          width: "100%",
          ":focus": { outline: "none" },
        },
        h = function (e) {
          var t = e.onSubmit,
            r = e.onCancel,
            a = e.thresholdMaxChars,
            o = e.thresholdCharsShowIndicator,
            h = e.placeholderText,
            m = e.numTextAreaLines,
            v = (0, d.Iq)(),
            E = c.useState(""),
            y = i()(E, 2),
            O = y[0],
            P = y[1],
            I = c.useRef(null);
          c.useEffect(function () {
            I.current &&
              "function" == typeof I.current.focus &&
              setTimeout(function () {
                I.current && I.current.focus();
              });
          }),
            c.useEffect(
              function () {
                var e = function (e) {
                  if (O)
                    return (
                      e.preventDefault(),
                      (e.returnValue = "Note input not empty"),
                      "Note input not empty"
                    );
                };
                return (
                  n.g.window.addEventListener("beforeunload", e),
                  function () {
                    n.g.window.removeEventListener("beforeunload", e);
                  }
                );
              },
              [O]
            );
          var S = function (e) {
              var t = e.target.value;
              P(t);
            },
            b = (0, f.n)({ name: "detail", scale: "M", color: "DARKER" });
          return c.createElement(s.I8, null, function (e) {
            return (
              !!e &&
              c.createElement(
                l.xu,
                null,
                c.createElement(
                  l.xu,
                  {
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                  },
                  c.createElement(
                    l.xu,
                    { marginRight: "12px" },
                    c.createElement(u.Yt, { scale: "XS", user: e })
                  ),
                  c.createElement(
                    p.F,
                    { scale: "M", tag: "h5", color: "DARKER", clamp: 1 },
                    (e && e.name) || ""
                  )
                ),
                c.createElement(
                  l.xu,
                  { marginBottom: "12px", tag: "label" },
                  c.createElement("textarea", {
                    ref: I,
                    required: !0,
                    placeholder: h,
                    value: O,
                    rows: m,
                    onChange: S,
                    className: v([b, g]),
                  }),
                  O.length >= o &&
                    c.createElement(
                      l.xu,
                      { marginTop: "4px" },
                      c.createElement(
                        p.F,
                        {
                          scale: "XS",
                          color: O.length > a ? "ERROR" : "LIGHTER",
                        },
                        O.length,
                        "/",
                        a
                      )
                    )
                ),
                c.createElement(
                  p.F,
                  { scale: "M", tag: "div" },
                  c.createElement(
                    l.xu,
                    { display: "flex", justifyContent: "space-between" },
                    c.createElement(
                      l.xu,
                      { display: "flex" },
                      c.createElement(
                        l.rU,
                        {
                          disabled: 0 === O.length || O.length > a,
                          linkStyle: "OBVIOUS",
                          onClick: function () {
                            t(O);
                          },
                        },
                        "Send"
                      )
                    ),
                    c.createElement(
                      l.xu,
                      { display: "flex" },
                      c.createElement(
                        l.rU,
                        { linkStyle: "SUBTLE", onClick: r },
                        "Cancel"
                      )
                    )
                  )
                )
              )
            );
          });
        },
        m = {
          thresholdMaxChars: 400,
          thresholdCharsShowIndicator: 255,
          placeholderText: "Write a note…",
          numTextAreaLines: 5,
        },
        v = function (e) {
          return c.createElement(h, a()({}, m, e));
        },
        E = {
          thresholdMaxChars: 200,
          thresholdCharsShowIndicator: 133,
          placeholderText: "Leave a reply…",
          numTextAreaLines: 3,
        },
        y = function (e) {
          return c.createElement(h, a()({}, E, e));
        };
    },
    19692: (e, t, n) => {
      "use strict";
      n.d(t, {
        Pq: () => Z,
        Do: () => re,
        m8: () => oe,
        Rg: () => ae,
        hz: () => ie,
        zZ: () => ne,
      });
      var r = n(28655),
        a = n.n(r),
        o = n(63038),
        i = n.n(o),
        c = n(59854),
        s = n.n(c),
        u = n(71439),
        l = n(67294),
        p = n(10515),
        f = n(69677),
        d = n(3011),
        g = n(24219),
        h = n(319),
        m = n.n(h),
        v = n(67995),
        E = n(28309),
        y = { xs: "S", sm: "S", md: "M", lg: "M", xl: "M" },
        O = function (e) {
          return { color: e.baseColor.text.normal };
        },
        P = l.forwardRef(function (e, t) {
          var n = e.children,
            r = e.paragraphName,
            a = e.rules,
            o = e.richTextStyle,
            i = (0, E.Iq)(),
            c = l.useContext(p.M),
            s =
              "FULL_PAGE" === o || "CARD" === o || "SHORTFORM_CARD" === o
                ? y
                : "S",
            u = (0, v.n)({ name: "body", scale: s }),
            f = i([a, { wordBreak: "break-word" }].concat(m()(c ? [O] : [u])));
          return l.createElement("p", { id: r, className: f, ref: t }, n);
        }),
        I = n(14391),
        S = {
          card: { xs: "S", sm: "S", md: "M", lg: "M", xl: "M" },
          fullPage: { xs: "M", sm: "M", md: "L", lg: "L", xl: "L" },
          streamLike: "M",
        },
        b = {
          card: { xs: "XS", sm: "XS", md: "S", lg: "S", xl: "S" },
          fullPage: { xs: "S", sm: "S", md: "M", lg: "M", xl: "M" },
          streamLike: "S",
        },
        x = l.forwardRef(function (e, t) {
          var n = e.children,
            r = e.paragraphName,
            a = e.richTextStyle,
            o = e.rules,
            i = e.paragraphType,
            c = (0, E.Iq)(),
            s = "CARD" === a || "SHORTFORM_CARD" === a,
            u = "STREAM" === a || s,
            p = i === I.NJ.H4 ? "h2" : "h1",
            f = "h1" === p ? S : b,
            d = s ? f.card : u ? f.streamLike : f.fullPage,
            g = c([o, (0, v.n)({ name: "heading", scale: d })]);
          return l.createElement(p, { id: r, className: g, ref: t }, n);
        }),
        w = l.forwardRef(function (e, t) {
          var n = e.children,
            r = e.paragraphName,
            a = e.rules,
            o = (0, E.Iq)()([
              a,
              (0, v.n)({ name: "overline", scale: "M", color: "LIGHTER" }),
            ]);
          return l.createElement("h2", { id: r, className: o, ref: t }, n);
        }),
        R = { xs: "S", sm: "S", md: "M", lg: "M", xl: "M" },
        N = function (e) {
          return { color: e.baseColor.text.normal };
        },
        T = l.forwardRef(function (e, t) {
          var n = e.children,
            r = e.paragraphName,
            a = e.rules,
            o = e.richTextStyle,
            i = (0, E.Iq)(),
            c = l.useContext(p.M),
            s = "FULL_PAGE" === o ? R : "S",
            u = (0, v.n)({ name: "body", scale: s }),
            f = i(
              [
                a,
                {
                  listStyleType: "decimal",
                  marginLeft: "30px",
                  paddingLeft: "0px",
                },
              ].concat(m()(c ? [N] : [u]))
            );
          return l.createElement("li", { id: r, className: f, ref: t }, n);
        }),
        M = { xs: "S", sm: "S", md: "M", lg: "M", xl: "M" },
        C = function (e) {
          return { color: e.baseColor.text.normal };
        },
        _ = l.forwardRef(function (e, t) {
          var n = e.children,
            r = e.hasDropCap,
            a = e.paragraphName,
            o = e.rules,
            i = e.richTextStyle,
            c = (0, E.Iq)(),
            s = l.useContext(p.M),
            u =
              "FULL_PAGE" === i || "CARD" === i || "SHORTFORM_CARD" === i
                ? M
                : "S",
            f = (0, v.n)({ name: "body", scale: u }),
            d = c(
              [o, { wordBreak: "break-word" }].concat(
                m()(s ? [C] : [f]),
                m()(r ? [{ clear: "left" }] : [])
              )
            );
          return l.createElement("p", { id: a, className: d, ref: t }, n);
        }),
        D = l.forwardRef(function (e, t) {
          var n = e.children,
            r = e.paragraphName,
            a = e.richTextStyle,
            o = e.rules,
            i = (0, E.Iq)()([
              o,
              (0, v.n)({
                name: "pullQuote",
                scale:
                  "CARD" === a || "SHORTFORM_CARD" === a
                    ? { xs: "M", sm: "M", md: "L", lg: "L", xl: "L" }
                    : "L",
              }),
            ]);
          return l.createElement("p", { id: r, className: i, ref: t }, n);
        }),
        H = function (e) {
          return { color: e.baseColor.text.normal };
        },
        k = l.forwardRef(function (e, t) {
          var n = e.children,
            r = e.paragraphName,
            a = e.rules,
            o = (0, E.Iq)()([
              H,
              a,
              { display: "block", whiteSpace: "pre-wrap" },
            ]);
          return l.createElement("span", { id: r, className: o, ref: t }, n);
        }),
        L = { xs: "M", sm: "M", md: "L", lg: "L", xl: "L" },
        j = l.forwardRef(function (e, t) {
          var n = e.children,
            r = e.paragraphName,
            a = e.richTextStyle,
            o = e.rules,
            i = "FULL_PAGE" === a,
            c = "CARD" === a || "SHORTFORM_CARD" === a,
            s = (0, E.Iq)()([
              o,
              (0, v.n)({
                name: "subtitle",
                scale: i || c ? L : "L",
                color: "LIGHTER",
                richTextStyle: a,
              }),
            ]);
          return l.createElement("h2", { id: r, className: s, ref: t }, n);
        }),
        A = { xs: "M", sm: "M", md: "XL", lg: "XL", xl: "XL" },
        q = { xs: "S", sm: "S", md: "L", lg: "L", xl: "L" },
        Q = l.forwardRef(function (e, t) {
          var n = e.children,
            r = e.richTextStyle,
            a = e.paragraphName,
            o = e.rules,
            i = "CARD" === r || "SHORTFORM_CARD" === r,
            c = "FULL_PAGE" === r,
            s = (0, E.Iq)()([
              o,
              [
                (0, v.n)({
                  name: "title",
                  scale: c ? A : i ? q : "M",
                  richTextStyle: r,
                }),
              ],
            ]);
          return l.createElement("h1", { id: a, className: s, ref: t }, n);
        }),
        F = { xs: "S", sm: "S", md: "M", lg: "M", xl: "M" },
        U = function (e) {
          return { color: e.baseColor.text.normal };
        },
        $ = l.forwardRef(function (e, t) {
          var n = e.children,
            r = e.paragraphName,
            a = e.rules,
            o = e.richTextStyle,
            i = (0, E.Iq)(),
            c = l.useContext(p.M),
            s = "FULL_PAGE" === o ? F : "S",
            u = (0, v.n)({ name: "body", scale: s }),
            f = i(
              [
                a,
                {
                  listStyleType: "disc",
                  marginLeft: "30px",
                  paddingLeft: "0px",
                },
              ].concat(m()(c ? [U] : [u]))
            );
          return l.createElement("li", { id: r, className: f, ref: t }, n);
        }),
        G = n(77714),
        B = n(98701),
        z = n(5955),
        V = n(65441),
        W = n(11642);
      function J() {
        var e = a()([
          "\n  fragment TextParagraph_privateNote on Note {\n    ...PostAnnotationsMarker_privateNote\n  }\n  ",
          "\n",
        ]);
        return (
          (J = function () {
            return e;
          }),
          e
        );
      }
      function K() {
        var e = a()([
          "\n  fragment TextParagraph_highlight on Quote {\n    ...Markups_highlight\n  }\n  ",
          "\n",
        ]);
        return (
          (K = function () {
            return e;
          }),
          e
        );
      }
      function X() {
        var e = a()([
          "\n  fragment TextParagraph_paragraph on Paragraph {\n    type\n    hasDropCap\n    ...Markups_paragraph\n    ...ParagraphRefsMapContext_paragraph\n  }\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (X = function () {
            return e;
          }),
          e
        );
      }
      var Y = { xs: "M", sm: "M", md: "L", lg: "L", xl: "L" },
        Z = {
          marginTop: {
            xs: "8px",
            sm: "12px",
            md: "12px",
            lg: "18px",
            xl: "20px",
          },
        },
        ee = function (e) {
          return e !== V.qq.P ? {} : Z;
        },
        te = function (e, t, n, r, a) {
          return {
            marginTop: a
              ? "".concat(a, "px")
              : (0, B.mu)(
                  function (e) {
                    var n = i()(e, 2),
                      a = n[0],
                      o = n[1];
                    return "".concat(
                      s()(a / o - (r.xHeight + (t - 1) / 2), 2),
                      "em"
                    );
                  },
                  e,
                  n
                ),
            marginBottom: "".concat(
              s()(-1 * (r.baseline + (t - 1) / 2), 2),
              "em"
            ),
          };
        },
        ne = function (e) {
          var t = e.children,
            n = e.hasDropCap,
            r = e.marginTopOverride,
            a = e.name,
            o = e.paragraphRef,
            c = e.paragraphStyle,
            s = e.richTextStyle,
            u = e.spaceTop,
            f = (0, E.Fg)(),
            d = (function (e) {
              var t = e.isEmbedded,
                n = e.marginTopOverride,
                r = e.paragraphStyle,
                a = e.richTextStyle,
                o = e.spaceTop,
                c = (function (e, t, n) {
                  var r = "FULL_PAGE" === t,
                    a = "CARD" === t || "SHORTFORM_CARD" === t,
                    o = "STREAM" === t || "TOPIC_LANDING" === t || a;
                  switch (e) {
                    case V.qq.Title:
                      var c = n.newFonts.title.fontSize,
                        s =
                          c &&
                          (0, B.mu)(function (e) {
                            var t = i()(e, 1)[0];
                            return c[t];
                          }, A);
                      return r || a
                        ? {
                            fontRule: z.Wd,
                            multipliers: z.jo,
                            fontSize: s,
                            lineHeight: 1.23,
                            letterSpacing: "0",
                          }
                        : {
                            fontRule: z.Yu,
                            multipliers: z.Yq,
                            fontSize: o ? 34 : 30,
                            lineHeight: 1.12,
                            letterSpacing: "-0.022em",
                          };
                    case V.qq.Subtitle:
                      var u = n.newFonts.subtitle.fontSize,
                        l =
                          u &&
                          (0, B.mu)(function (e) {
                            var t = i()(e, 1)[0];
                            return u[t];
                          }, Y);
                      return {
                        fontRule: z.Wt,
                        multipliers: z.Yq,
                        fontSize: o ? 24 : l,
                        lineHeight: 1.394,
                        letterSpacing: "0",
                      };
                    case V.qq.Kicker:
                      var p = n.newFonts.overline.fontSize,
                        f = p && p.M;
                      return {
                        fontRule: z.Wt,
                        multipliers: z.Yq,
                        fontSize: f || 22,
                        lineHeight: 1.18,
                        letterSpacing: "-0.022em",
                      };
                    case V.qq.P:
                    case V.qq.BQ:
                      return {
                        fontRule: z.rJ,
                        multipliers: z.Ol,
                        fontSize: {
                          xs: 18,
                          sm: 18,
                          md: r || a ? 21 : 18,
                          lg: r || a ? 21 : 18,
                          xl: r || a ? 21 : 18,
                        },
                        lineHeight: 1.58,
                        letterSpacing: "-0.004em",
                      };
                    case V.qq.ULI:
                    case V.qq.OLI:
                      return {
                        fontRule: z.rJ,
                        multipliers: z.Ol,
                        fontSize: {
                          xs: 18,
                          sm: 18,
                          md: r ? 21 : 18,
                          lg: r ? 21 : 18,
                          xl: r ? 21 : 18,
                        },
                        lineHeight: 1.58,
                        letterSpacing: "-0.004em",
                      };
                    case V.qq.H1:
                    case V.qq.H2:
                    case V.qq.H3:
                      return {
                        fontRule: z.Yu,
                        multipliers: z.Yq,
                        fontSize: a
                          ? {
                              xs: n.newFonts.heading.fontSize.S,
                              sm: n.newFonts.heading.fontSize.S,
                              md: n.newFonts.heading.fontSize.M,
                              lg: n.newFonts.heading.fontSize.M,
                              xl: n.newFonts.heading.fontSize.M,
                            }
                          : o
                          ? 26
                          : { xs: 30, sm: 30, md: 34, lg: 34, xl: 34 },
                        lineHeight: a ? 1.31 : 1.12,
                        letterSpacing: "-0.022em",
                      };
                    case V.qq.H4:
                      return {
                        fontRule: z.Yu,
                        multipliers: z.Yq,
                        fontSize: a
                          ? {
                              xs: n.newFonts.heading.fontSize.XS,
                              sm: n.newFonts.heading.fontSize.XS,
                              md: n.newFonts.heading.fontSize.S,
                              lg: n.newFonts.heading.fontSize.S,
                              xl: n.newFonts.heading.fontSize.S,
                            }
                          : o
                          ? 22
                          : { xs: 24, sm: 24, md: 26, lg: 26, xl: 26 },
                        lineHeight: a ? 1.22 : 1.18,
                        letterSpacing: "-0.022em",
                      };
                    case V.qq.PRE:
                      return {
                        fontRule: z.XK,
                        multipliers: z.G4,
                        fontSize: 16,
                        lineHeight: 1.18,
                        letterSpacing: "-0.022em",
                      };
                    case V.qq.PQ:
                      return {
                        fontRule: z.Wd,
                        multipliers: z.z1,
                        fontSize: 24,
                        lineHeight: 1.48,
                        letterSpacing: "-0.014em",
                      };
                    default:
                      return null;
                  }
                })(r, a, e.theme);
              if (null == c) return [];
              t &&
                (c = (function (e, t) {
                  switch (e) {
                    case V.qq.P:
                    case V.qq.BQ:
                      (t.fontSize = { xs: 18, sm: 18, md: 18, lg: 18, xl: 18 }),
                        (t.lineHeight = 1.34),
                        (t.fontRule = z.Wt);
                      break;
                    case V.qq.ULI:
                      (t.fontSize = { xs: 18, sm: 18, md: 18, lg: 18, xl: 18 }),
                        (t.lineHeight = 1.48),
                        (t.fontRule = z.Wt);
                  }
                  return t;
                })(r, c));
              var s = c,
                u = s.fontRule,
                l = s.multipliers,
                p = s.fontSize,
                f = s.lineHeight,
                d = s.letterSpacing,
                g =
                  "number" == typeof p
                    ? p * f
                    : Object.entries(p).reduce(function (e, t) {
                        var n = i()(t, 2),
                          r = n[0],
                          a = n[1];
                        return (e[r] = a * f), e;
                      }, {}),
                h =
                  "SHORTFORM_CARD" === a && r === V.qq.Subtitle && f
                    ? (0, G.V)({ clamp: 1, lineHeight: g })
                    : {};
              return [
                { lineHeight: f, letterSpacing: d, fontStyle: (0, V.S$)(r) },
                u({ fontSize: p }),
                t ? ee(r) : te(o, f, p, l, n),
                h,
              ];
            })({
              isEmbedded: l.useContext(p.M),
              marginTopOverride: r,
              richTextStyle: s,
              paragraphStyle: c,
              spaceTop: u,
              theme: f,
            });
          switch (c) {
            case V.qq.Title:
              return l.createElement(
                Q,
                { paragraphName: a, richTextStyle: s, ref: o, rules: d },
                t
              );
            case V.qq.Subtitle:
              return l.createElement(
                j,
                { paragraphName: a, richTextStyle: s, ref: o, rules: d },
                t
              );
            case V.qq.PQ:
              return l.createElement(
                D,
                { paragraphName: a, richTextStyle: s, ref: o, rules: d },
                t
              );
            case V.qq.Kicker:
              return l.createElement(
                w,
                { paragraphName: a, ref: o, rules: d },
                t
              );
            case V.qq.P:
              return l.createElement(
                _,
                {
                  hasDropCap: n,
                  paragraphName: a,
                  richTextStyle: s,
                  ref: o,
                  rules: d,
                },
                t
              );
            case V.qq.BQ:
              return l.createElement(
                P,
                { paragraphName: a, richTextStyle: s, ref: o, rules: d },
                t
              );
            case V.qq.ULI:
              return l.createElement(
                $,
                { paragraphName: a, richTextStyle: s, ref: o, rules: d },
                t
              );
            case V.qq.OLI:
              return l.createElement(
                T,
                { paragraphName: a, richTextStyle: s, ref: o, rules: d },
                t
              );
            case V.qq.H1:
            case V.qq.H2:
            case V.qq.H3:
            case V.qq.H4:
              return l.createElement(
                x,
                {
                  paragraphName: a,
                  paragraphType: c,
                  richTextStyle: s,
                  ref: o,
                  rules: d,
                },
                t
              );
            case V.qq.PRE:
              return l.createElement(
                k,
                { paragraphName: a, ref: o, rules: d },
                t
              );
            default:
              return (0, W.v)(c), null;
          }
        };
      function re(e) {
        var t = e.highlights,
          n = e.marginTopOverride,
          r = e.paragraph,
          a = e.paragraphStyle,
          o = e.privateNotes,
          i = e.richTextStyle,
          c = e.spaceTop,
          s = !!r && !!r.hasDropCap,
          u = (0, f.CF)(r, a);
        return l.createElement(
          ne,
          {
            hasDropCap: s,
            marginTopOverride: n,
            name: r.name || void 0,
            paragraphRef: u,
            paragraphStyle: a,
            richTextStyle: i,
            spaceTop: c,
          },
          o && l.createElement(g.A7, { paragraph: r, privateNotes: o }),
          l.createElement(d.T2, {
            allowDropCap: !0,
            highlights: t,
            paragraph: r,
            paragraphStyle: a,
            richTextStyle: i,
          })
        );
      }
      var ae = (0, u.Ps)(X(), d.Zr, f.pK),
        oe = (0, u.Ps)(K(), d.DV),
        ie = (0, u.Ps)(J(), g.uR);
    },
    54260: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => r });
      var r = n(67294).createContext({
        inResponseToPostId: "",
        isThreadedResponsesVisible: !1,
        toggleThreadedResponses: function () {},
        showThreadedResponses: function () {},
        threadDepthFromRootPost: 0,
        threadDepthOnPage: 0,
        hideCreateReply: function () {},
        toggleCreateReply: function () {},
        loadThreadedResponses: function () {},
        isThreadedResponsesQueryCalled: !1,
        isThreadedResponsesQueryLoading: !1,
        showContinueThisThreadSidebar: function () {},
      });
    },
    43516: (e, t, n) => {
      "use strict";
      n.d(t, { P: () => L });
      var r = n(67154),
        a = n.n(r),
        o = n(6479),
        i = n.n(o),
        c = n(67294),
        s = n(34675),
        u = n(63038),
        l = n.n(u),
        p = n(62181),
        f = n(73810);
      function d() {
        return (d =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var g = c.createElement("path", {
        d: "M13.7 15.96l5.2-9.38-4.72-2.62-5.2 9.38 4.72 2.62zm-.5.89l-1.3 2.37-1.26.54-.7 1.26-3.8-.86 1.23-2.22-.2-1.35 1.31-2.37 4.73 2.62z",
        fillRule: "evenodd",
      });
      const h = function (e) {
        return c.createElement(
          "svg",
          d({ width: 25, height: 25, viewBox: "0 0 25 25" }, e),
          g
        );
      };
      function m() {
        return (m =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var v = c.createElement(
        "g",
        { fillRule: "evenodd" },
        c.createElement("path", {
          d: "M17.66 4.55H7.35A4.36 4.36 0 0 0 3 8.9v5.68a4.35 4.35 0 0 0 3.7 4.28v2.77c0 .3.35.48.59.3l3.9-3h6.48a4.37 4.37 0 0 0 4.35-4.35V8.9a4.35 4.35 0 0 0-4.34-4.35zM16 14.31a.99.99 0 0 1-1 .99h-5a1 1 0 0 1-1-.99v-3.02a.99.99 0 0 1 1-.99v-.78A2.5 2.5 0 0 1 12.5 7 2.5 2.5 0 0 1 15 9.5v.79a1 1 0 0 1 1 .99v3.02z",
        }),
        c.createElement("path", {
          d: "M14 9.81c0-.83-.67-1.68-1.5-1.68S11 8.97 11 9.81v.49h3v-.49z",
        })
      );
      const E = function (e) {
        return c.createElement(
          "svg",
          m({ width: 25, height: 25, viewBox: "0 0 25 25" }, e),
          v
        );
      };
      function y() {
        return (y =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var O = c.createElement("path", {
        d: "M19.07 21.12a6.33 6.33 0 0 1-3.53-1.1 7.8 7.8 0 0 1-.7-.52c-.77.21-1.57.32-2.38.32-4.67 0-8.46-3.5-8.46-7.8C4 7.7 7.79 4.2 12.46 4.2c4.66 0 8.46 3.5 8.46 7.8 0 2.06-.85 3.99-2.4 5.45a6.28 6.28 0 0 0 1.14 2.59c.15.21.17.48.06.7a.69.69 0 0 1-.62.38h-.03z",
        fillRule: "evenodd",
      });
      const P = function (e) {
        return c.createElement(
          "svg",
          y({ width: 25, height: 25, viewBox: "0 0 25 25" }, e),
          O
        );
      };
      var I = n(27778);
      function S(e) {
        var t,
          n = e.action,
          r = e.actionHandler,
          o = e.requireLogin,
          i = void 0 === o || o,
          s = e.susiProps,
          u = e.viewer,
          d = c.useState(null),
          g = l()(d, 2),
          m = g[0],
          v = g[1];
        switch (
          (c.useEffect(function () {
            v(
              document &&
                document.documentElement &&
                "ontouchstart" in document.documentElement
            );
          }, []),
          n)
        ) {
          case "highlight":
            t = h;
            break;
          case "respond":
            t = P;
            break;
          case "tweet":
            t = I.Z;
            break;
          case "privateNote":
            t = E;
            break;
          default:
            t = function () {
              return null;
            };
        }
        var y = m
            ? function (e) {
                e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
              }
            : function () {},
          O =
            !u && i
              ? function (e) {
                  var t = e.children;
                  return c.createElement(
                    "div",
                    { onTouchStart: y },
                    !!s &&
                      c.createElement(
                        p.R9,
                        a()({ susiEntry: "highlight_text" }, s),
                        t
                      )
                  );
                }
              : function (e) {
                  var t = e.children;
                  return c.createElement(
                    f.P,
                    {
                      rules: { fill: "inherit" },
                      onClick: function () {
                        return r(n);
                      },
                      onTouchStart: y,
                    },
                    t
                  );
                };
        return c.createElement(O, null, c.createElement(t, null));
      }
      var b = n(85432),
        x = n(98024),
        w = n(27572),
        R = n(28309),
        N = n(67122),
        T = n(534),
        M = function (e, t) {
          return function (n) {
            return {
              display: "inline-block",
              fill: e ? n.accentColor.fill.light : null,
              paddingRight: t ? "6px" : null,
              ":hover": { fill: e ? n.accentColor.fill.light : null },
            };
          };
        },
        C = function () {
          return {
            display: "inline-block",
            fill: N.ix,
            padding: "8px 0",
            whiteSpace: "nowrap",
          };
        },
        _ = function (e) {
          return {
            background: e.baseColor.overlay.lighter,
            display: "inline-block",
            height: "25px",
            width: "1px",
            verticalAlign: "top",
          };
        };
      function D(e) {
        var t = e.id,
          n = e.allowNotes,
          r = e.allowMainActions,
          a = e.highlightSourceProvider,
          o = e.rightContent,
          i = e.isYourHighlight,
          u = e.hasIconAfterHighlightIcon,
          l = e.mouseEnter,
          p = e.mouseLeave,
          f = e.position,
          d = e.update,
          g = e.onAction,
          h = e.allowResponse,
          m = e.allowTweet,
          v = e.highlightSusiProps,
          E = (0, R.Fg)(),
          y = (0, R.Iq)();
        c.useEffect(
          function () {
            d && d();
          },
          [l, p, f, d]
        );
        var O = c.useCallback(
          function (e) {
            return c.createElement(S, {
              action: "highlight",
              viewer: e,
              actionHandler: g,
              susiProps: v,
            });
          },
          [g, v]
        );
        return c.createElement(
          R.f6,
          { theme: (0, T.$_)(E) },
          c.createElement(s.I8, { nonBlocking: !0 }, function (e) {
            return c.createElement(
              "div",
              { id: t, onMouseEnter: l, onMouseLeave: p },
              c.createElement(
                "div",
                { className: y(C) },
                r &&
                  c.createElement(
                    c.Fragment,
                    null,
                    c.createElement(
                      b.xu,
                      { display: "inline-block", padding: "0 12px 0 10px" },
                      c.createElement(
                        c.Fragment,
                        null,
                        c.createElement(
                          "div",
                          { className: y(M(i, u)) },
                          a
                            ? c.createElement(
                                w.cW,
                                { source: { name: a } },
                                O(e)
                              )
                            : O(e)
                        ),
                        h &&
                          c.createElement(
                            "div",
                            {
                              className: y(
                                ((s = m),
                                {
                                  display: "inline-block",
                                  paddingRight: s ? "6px" : null,
                                })
                              ),
                            },
                            c.createElement(S, {
                              action: "respond",
                              viewer: e,
                              actionHandler: g,
                            })
                          ),
                        m &&
                          c.createElement(S, {
                            action: "tweet",
                            viewer: e,
                            requireLogin: !1,
                            actionHandler: g,
                          })
                      )
                    ),
                    (!!o || n) && c.createElement("div", { className: y(_) })
                  ),
                !n &&
                  !!o &&
                  c.createElement(
                    b.xu,
                    { display: "inline-block", padding: "0 16px" },
                    c.createElement(x.F, { color: "DARKER", scale: "S" }, o)
                  ),
                n &&
                  c.createElement(
                    b.xu,
                    { display: "inline-block", padding: "0 16px" },
                    c.createElement(S, {
                      action: "privateNote",
                      viewer: e,
                      actionHandler: g,
                    })
                  )
              )
            );
            var s;
          })
        );
      }
      var H = c.memo(D),
        k = n(74465);
      function L(e) {
        var t = e.visible,
          n = void 0 === t || t,
          r = e.position,
          o = void 0 === r ? { left: 0, top: 0, bottom: 0 } : r,
          s = i()(e, ["visible", "position"]),
          u = o.left,
          l = o.top,
          p = o.bottom,
          f = c.useCallback(function (e) {
            e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
          }, []),
          d = c.useCallback(function (e) {
            e.preventDefault();
          }, []);
        return c.createElement(
          "span",
          {
            onMouseDown: d,
            onMouseUp: f,
            onClick: f,
            style: {
              display: "block",
              position: "absolute",
              left: u,
              top: l,
              height: "".concat(p - l, "px"),
              width: "0px",
            },
          },
          n &&
            c.createElement(
              b.J2,
              {
                darkTheme: !0,
                disablePortalOverlay: !0,
                display: "block",
                isVisible: !0,
                hide: function () {},
                placement: "top",
                customZIndex: k.ZP.selectionMenu,
                popoverRenderFn: function (e) {
                  return c.createElement(H, a()({ position: o, update: e }, s));
                },
                referenceHeight: "100%",
                refTag: "span",
                shouldAnimateOpen: !0,
              },
              c.createElement(c.Fragment, null)
            )
        );
      }
    },
    69703: (e, t, n) => {
      "use strict";
      n.d(t, {
        HM: () => l,
        QS: () => p,
        nO: () => f,
        yH: () => d,
        Zf: () => g,
        m1: () => h,
        lA: () => m,
        Mk: () => v,
        OG: () => E,
        Bu: () => y,
        S1: () => O,
        h_: () => P,
        zg: () => I,
        qB: () => S,
      });
      var r = n(63038),
        a = n.n(r),
        o = n(59713),
        i = n.n(o),
        c = n(98701);
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var l = 0,
        p = 10,
        f = { xs: 24, sm: 24, md: 32, lg: 32, xl: 32 },
        d = 36,
        g = { xs: 40, sm: 40, md: 56, lg: 56, xl: 56 },
        h = { xs: 48, sm: 48, md: 66, lg: 66, xl: 66 },
        m = { xs: 48, sm: 48, md: 80, lg: 80, xl: 80 },
        v = 36,
        E = 24,
        y = 24,
        O = 32,
        P = 40,
        I = u(u({}, g), {}, { lg: 0, xl: 0 }),
        S = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return function (t) {
            return {
              marginTop: (0, c.mu)(function (e) {
                var t = a()(e, 1)[0];
                return "".concat(t, "px");
              }, e),
            };
          };
        };
    },
    65441: (e, t, n) => {
      "use strict";
      n.d(t, {
        qq: () => H,
        XC: () => q,
        Zp: () => Q,
        S$: () => z,
        W: () => X,
        fj: () => Y,
        jH: () => Z,
        gd: () => ee,
        Cn: () => te,
        EH: () => ne,
      });
      var r = n(319),
        a = n.n(r),
        o = n(63038),
        i = n.n(o),
        c = n(59713),
        s = n.n(c),
        u = n(28655),
        l = n.n(u),
        p = n(71439),
        f = n(14391),
        d = n(69703),
        g = n(27952);
      function h() {
        var e = l()([
          "\n  fragment normalizedBodyModel_privateNote on Note {\n    ...getParagraphPrivateNotes_privateNote\n  }\n  ",
          "\n",
        ]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = l()([
          "\n  fragment normalizedBodyModel_highlight on Quote {\n    ...getParagraphHighlights_highlight\n  }\n  ",
          "\n",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = l()([
          "\n  fragment normalizedBodyModel_richText on RichText {\n    paragraphs {\n      markups {\n        type\n      }\n      ...getParagraphHighlights_paragraph\n      ...getParagraphPrivateNotes_paragraph\n    }\n    sections {\n      startIndex\n      ...getSectionEndIndex_section\n    }\n    ...getParagraphStyles_richText\n    ...getParagraphSpaces_richText\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = l()([
          "\n  fragment getParagraphPrivateNotes_privateNote on Note {\n    id\n    anchor\n    author {\n      id\n      name\n      username\n      imageId\n      mediumMemberAt\n      ...userUrl_user\n    }\n    content\n    createdAt\n    postId\n    post {\n      id\n      creator {\n        id\n      }\n      collection {\n        id\n        viewerEdge {\n          id\n          isEditor\n        }\n      }\n    }\n    replies {\n      id\n      author {\n        id\n        name\n        username\n        imageId\n        mediumMemberAt\n        ...userUrl_user\n      }\n      content\n      createdAt\n      noteId\n      postId\n    }\n    selectionStartOffset\n    selectionEndOffset\n  }\n  ",
          "\n",
        ]);
        return (
          (E = function () {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = l()([
          "\n  fragment getParagraphPrivateNotes_paragraph on Paragraph {\n    name\n  }\n",
        ]);
        return (
          (y = function () {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = l()([
          "\n  fragment getParagraphHighlights_highlight on Quote {\n    id\n    paragraphs {\n      name\n    }\n    startOffset\n    endOffset\n    userId\n  }\n",
        ]);
        return (
          (O = function () {
            return e;
          }),
          e
        );
      }
      function P() {
        var e = l()([
          "\n  fragment getParagraphHighlights_paragraph on Paragraph {\n    name\n  }\n",
        ]);
        return (
          (P = function () {
            return e;
          }),
          e
        );
      }
      function I() {
        var e = l()([
          "\n  fragment getParagraphSpaces_richText on RichText {\n    paragraphs {\n      layout\n      metadata {\n        originalHeight\n        originalWidth\n      }\n      type\n      ...paragraphExtendsImageGrid_paragraph\n    }\n    ...getSeriesParagraphTopSpacings_richText\n    ...getPostParagraphTopSpacings_richText\n  }\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (I = function () {
            return e;
          }),
          e
        );
      }
      function S() {
        var e = l()([
          "\n  fragment paragraphExtendsImageGrid_paragraph on Paragraph {\n    layout\n    type\n  }\n",
        ]);
        return (
          (S = function () {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = l()([
          "\n  fragment getSeriesParagraphTopSpacings_richText on RichText {\n    paragraphs {\n      id\n    }\n    sections {\n      startIndex\n    }\n  }\n",
        ]);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = l()([
          "\n  fragment getEmbedlyCardUrlParams_paragraph on Paragraph {\n    type\n    iframe {\n      mediaResource {\n        iframeSrc\n      }\n    }\n  }\n",
        ]);
        return (
          (x = function () {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = l()([
          "\n  fragment getPostParagraphTopSpacings_richText on RichText {\n    paragraphs {\n      layout\n      text\n    }\n    sections {\n      startIndex\n    }\n  }\n",
        ]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      function R() {
        var e = l()([
          "\n  fragment getParagraphStyles_richText on RichText {\n    paragraphs {\n      text\n      type\n    }\n    sections {\n      ...getSectionEndIndex_section\n    }\n  }\n  ",
          "\n",
        ]);
        return (
          (R = function () {
            return e;
          }),
          e
        );
      }
      function N(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                s()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function M() {
        var e = l()([
          "\n  fragment getSectionEndIndex_section on Section {\n    startIndex\n  }\n",
        ]);
        return (
          (M = function () {
            return e;
          }),
          e
        );
      }
      var C,
        _ = function (e, t, n) {
          var r = e[t + 1];
          return r && null != r.startIndex ? r.startIndex : n;
        },
        D = (0, p.Ps)(M());
      !(function (e) {
        (e.Title = "Title"), (e.Subtitle = "Subtitle"), (e.Kicker = "Kicker");
      })(C || (C = {}));
      var H = T(T({}, C), f.NJ),
        k = (0, p.Ps)(R(), D),
        L = function (e, t, n) {
          var r = e.paragraphs,
            a = e.sections,
            o = Z(n),
            i = o ? d.OG : d.nO,
            c = o ? d.Bu : d.yH,
            s = o ? d.S1 : d.Zf,
            u = o ? d.h_ : d.lA,
            l = -1;
          return r.map(function (e, n) {
            var p = t[n],
              f = t[n - 1],
              g = e.layout,
              h = r[n - 1] && r[n - 1].layout,
              m = a[l + 1];
            if (m && m.startIndex === n) {
              if ((l++, ("IMG" === p || "IFRAME" === p) && !o)) {
                if ("OUTSET_LEFT" === g) return d.zg;
                if ("INSET_LEFT" === g) return d.HM;
                if (0 === n) return "FULL_WIDTH" === g ? d.HM : d.nO;
              }
              return s;
            }
            if ("PQ" === f) return p === f ? s : o ? d.h_ : d.m1;
            switch (p) {
              case "Title":
                switch (f) {
                  case "Kicker":
                    return c;
                  default:
                    return s;
                }
              case "Subtitle":
                switch (f) {
                  case "Title":
                    return i;
                  default:
                    return s;
                }
              case "P":
                switch (f) {
                  case "H1":
                  case "H2":
                  case "H3":
                  case "H4":
                    return i;
                  default:
                    return s;
                }
              case "H1":
              case "H2":
              case "H3":
                return u;
              case "OLI":
                switch (f) {
                  case "H1":
                  case "H2":
                  case "H3":
                  case "H4":
                    return i;
                  case "OLI":
                    return d.Mk;
                  default:
                    return s;
                }
              case "ULI":
                switch (f) {
                  case "H1":
                  case "H2":
                  case "H3":
                  case "H4":
                    return i;
                  case "ULI":
                    return d.Mk;
                  default:
                    return s;
                }
              case "IMG":
              case "IFRAME":
                switch (f) {
                  case "IMG":
                  case "IFRAME":
                    switch (h) {
                      case "OUTSET_LEFT":
                      case "INSET_LEFT":
                        return d.HM;
                      case "OUTSET_CENTER":
                        switch (g) {
                          case "OUTSET_CENTER":
                          case "OUTSET_ROW":
                            return d.HM;
                          case "FULL_WIDTH":
                            return u;
                          default:
                            return s;
                        }
                      case "OUTSET_ROW_CONTINUE":
                        switch (g) {
                          case "OUTSET_CENTER":
                          case "OUTSET_ROW":
                            return d.HM;
                          default:
                            return s;
                        }
                      case "INSET_CENTER":
                        switch (g) {
                          case "INSET_LEFT":
                            return d.HM;
                          case "OUTSET_LEFT":
                            return d.QS;
                          case "FULL_WIDTH":
                            return u;
                          default:
                            return s;
                        }
                      case "FULL_WIDTH":
                        return "FULL_WIDTH" === g ? d.HM : u;
                      default:
                        return s;
                    }
                  default:
                    return s;
                }
              case "PRE":
                switch (f) {
                  case "PRE":
                    return i;
                  default:
                    return s;
                }
              case "PQ":
                switch (f) {
                  case "H1":
                  case "H2":
                  case "H3":
                  case "H4":
                  case "P":
                    return s;
                  default:
                    return u;
                }
              case "MIXTAPE_EMBED":
                return i;
            }
            return s;
          });
        },
        j = function (e, t) {
          var n = e.paragraphs;
          return n.map(function (e, r) {
            var a = t[r],
              o = t[r - 1];
            if (0 === r) return 24;
            switch (a) {
              case "Title":
                switch (o) {
                  case "Kicker":
                    return 8;
                  case "IMG":
                    return n[r - 1].text ? 48 : 32;
                  default:
                    return 24;
                }
              case "Subtitle":
                switch (o) {
                  case "Title":
                    return 18;
                  default:
                    return 24;
                }
              case "P":
                switch (o) {
                  case "Title":
                    return 30;
                  case "Subtitle":
                    return 23;
                  case "H1":
                  case "H2":
                    return 14;
                  case "H3":
                    return 13;
                  case "H4":
                    return 11;
                  case "P":
                    return 42;
                  case "BQ":
                    return 40;
                  case "PQ":
                    return 35;
                  case "IMG":
                    return 32;
                  case "MIXTAPE_EMBED":
                    return 48;
                  default:
                    return;
                }
              case "H1":
              case "H2":
              case "H3":
                switch (o) {
                  case "P":
                    return 40;
                  default:
                    return;
                }
              case "H4":
                switch (o) {
                  case "P":
                    return 36;
                  default:
                    return;
                }
              case "IMG":
              case "IFRAME":
                switch (o) {
                  case "Subtitle":
                    return 31;
                  default:
                    return;
                }
              case "BQ":
                switch (o) {
                  case "P":
                    return 24;
                  default:
                    return;
                }
              case "PQ":
                switch (o) {
                  case "P":
                    return 32;
                  default:
                    return;
                }
              case "MIXTAPE_EMBED":
                switch (o) {
                  case "P":
                    return 40;
                  default:
                    return;
                }
            }
          });
        },
        A = (0, p.Ps)(w()),
        q = function (e) {
          if (!e || !e.type || "IFRAME" !== e.type) return null;
          var t =
            e &&
            e.iframe &&
            e.iframe.mediaResource &&
            e.iframe.mediaResource.iframeSrc
              ? e.iframe.mediaResource.iframeSrc
              : "";
          if (
            !(
              t.includes("https://cdn.embedly.com") &&
              t.includes("&schema=") &&
              t.includes("&key=") &&
              t.includes("&url=")
            )
          )
            return null;
          var n = {};
          decodeURIComponent(t)
            .split("?")[1]
            .split("&")
            .forEach(function (e) {
              var t = e.split("="),
                r = i()(t, 2),
                a = r[0],
                o = r[1];
              n[a] = o;
            });
          var r = n.key,
            a = n.schema,
            o = n.url;
          return r && a && o ? { key: r, schema: a, url: o } : null;
        },
        Q = (0, p.Ps)(x()),
        F = function (e, t) {
          var n = e.paragraphs,
            r = e.sections,
            a = d.nO,
            o = d.Zf,
            i = d.lA,
            c = -1;
          return n.map(function (e, n) {
            var s = r[c + 1];
            if (s && s.startIndex === n) return c++, d.HM;
            var u = t[n],
              l = t[n - 1];
            switch (l) {
              case "PQ":
                if ("PQ" !== u) return i;
            }
            switch (u) {
              case "BQ":
                switch (l) {
                  case "BQ":
                    return a;
                  default:
                    return o;
                }
              case "OLI":
                switch (l) {
                  case "OLI":
                    return a;
                  default:
                    return o;
                }
              case "ULI":
                switch (l) {
                  case "ULI":
                    return a;
                  default:
                    return o;
                }
              case "PQ":
                switch (l) {
                  case "PQ":
                    return o;
                  default:
                    return i;
                }
            }
            return o;
          });
        },
        U = (0, p.Ps)(b()),
        $ = function (e) {
          return e && "OUTSET_ROW_CONTINUE" === e.layout && "IMG" === e.type;
        },
        G = (0, p.Ps)(S()),
        B = (0, p.Ps)(I(), G, U, A),
        z = function (e) {
          switch (e) {
            case "BQ":
              return "italic";
            default:
              return "normal";
          }
        },
        V = (0, p.Ps)(P()),
        W = (0, p.Ps)(O()),
        J = (0, p.Ps)(y()),
        K = (0, p.Ps)(E(), g.$mN),
        X = "rmm",
        Y = function (e, t) {
          var n = t.bylineParagraphName,
            r = t.highlights,
            o = t.isAuroraPostPageEnabled,
            i = void 0 !== o && o,
            c = t.isPostPage,
            s = void 0 !== c && c,
            u = t.privateNotes,
            l = t.richTextStyle,
            p = t.shouldAddHrs,
            g = void 0 === p || p;
          if (!e) return [];
          var h = e.paragraphs,
            m = e.sections,
            v = (function (e) {
              var t = e.paragraphs,
                n = e.sections;
              if (!n[0]) return [];
              for (
                var r = _(n, 0, t.length),
                  a = t.map(function (e) {
                    return e.type || f.NJ.P;
                  }),
                  o = !1,
                  i = -1,
                  c = 0;
                c < r;
                c++
              ) {
                var s = t[c];
                if (o) {
                  "H4" === s.type && (a[c] = H.Subtitle);
                  break;
                }
                if ("H3" === s.type || "H2" === s.type)
                  (a[c] = H.Title), (o = !0);
                else {
                  if (-1 !== i) break;
                  if ("H4" !== s.type) {
                    if (
                      "IMG" === s.type ||
                      "IFRAME" === s.type ||
                      ("P" === s.type && /^\s*$/.test(s.text || ""))
                    )
                      continue;
                    break;
                  }
                  i = c;
                }
              }
              return o && -1 !== i && (a[i] = H.Kicker), a;
            })(e),
            E = (function (e, t, n) {
              for (
                var r =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3],
                  a = e.paragraphs,
                  o = "SERIES" === n ? F(e, t) : L(e, t, n),
                  i = j(e, t),
                  c = [],
                  s = 0;
                s < a.length;
                s++
              )
                if (a[s]) {
                  var u = a[s].layout,
                    l = a[s].type;
                  if ("OUTSET_ROW" === u && "IMG" === l) {
                    var p = a[s].metadata;
                    if (!p || !p.originalHeight || !p.originalWidth) continue;
                    for (
                      var f = p.originalWidth / p.originalHeight, g = s + 1;
                      $(a[g]);

                    ) {
                      var h = a[g].metadata;
                      if (!h || !h.originalHeight || !h.originalWidth) break;
                      (f += h.originalWidth / h.originalHeight), g++;
                    }
                    for (; s < g; ) (c[s] = f), s++;
                    s = g - 1;
                  }
                }
              return a.map(function (e, s) {
                var u = o[s],
                  l = i[s],
                  p = { paragraphTopSpacing: u },
                  f = t[s],
                  g = t[s - 1],
                  h = e.layout,
                  m = a[s - 1] ? a[s - 1].layout : null;
                switch (f) {
                  case "PRE":
                    switch (g) {
                      case "PRE":
                        break;
                      default:
                        p = {
                          sequenceTopSpacing: p.paragraphTopSpacing,
                          paragraphTopSpacing: d.HM,
                        };
                    }
                }
                switch (h) {
                  case "OUTSET_ROW":
                    switch (m) {
                      case "OUTSET_ROW_CONTINUE":
                      case "OUTSET_CENTER":
                        p = { paragraphTopSpacing: d.HM };
                        break;
                      default:
                        p = {
                          paragraphTopSpacing: d.HM,
                          sequenceTopSpacing: p.paragraphTopSpacing,
                        };
                    }
                    break;
                  case "OUTSET_ROW_CONTINUE":
                    p = { paragraphTopSpacing: "STREAM" === n ? d.S1 : d.HM };
                }
                return (
                  c[s] && (p.sequenceAspectRatio = c[s]),
                  r && (p.paragraphTopMarginForPostPage = l),
                  p
                );
              });
            })(e, v, l, s),
            y = (function (e, t) {
              if (!t) return [];
              var n = new Map();
              return (
                t.forEach(function (e) {
                  e.paragraphs.forEach(function (t) {
                    var r = n.get(t.name) || [];
                    r.push(e), n.set(t.name, r);
                  });
                }),
                e.map(function (e) {
                  return n.get(e.name) || [];
                })
              );
            })(h, r),
            O = (function (e, t) {
              if (!t) return [];
              var n = new Map();
              return (
                t.forEach(function (e) {
                  var t = e.anchor,
                    r = n.get(t) || [];
                  r.push(e), n.set(t, r);
                }),
                e.map(function (e) {
                  return n.get(e.name) || [];
                })
              );
            })(h, u),
            P = h.findIndex(function (e) {
              return e.name === n;
            }),
            I = 0,
            S = h.map(function (e, t) {
              var n,
                r = v[t];
              if (
                i &&
                "FULL_PAGE" === l &&
                "P" === e.type &&
                "string" == typeof e.text
              ) {
                var o = ((null == e ? void 0 : e.text) || "").split(
                  /\s+/
                ).length;
                if (I + o < 100) I += o;
                else if (I < 100) {
                  var c = 100 - I;
                  (e.markups = [].concat(a()(e.markups), [
                    {
                      type: "ID_WRAPPER",
                      wrapperId: X,
                      start: c,
                      end: c + 1,
                      __typename: "Markup",
                    },
                  ])),
                    (I += o);
                }
              }
              var u,
                p,
                f = h[t].layout,
                d = null === (n = h[t + 1]) || void 0 === n ? void 0 : n.layout,
                g = "OUTSET_ROW" === f && "OUTSET_ROW_CONTINUE" === d;
              if (i && "FULL_PAGE" === l && t === P + 1)
                switch (r) {
                  case "IMG":
                    g || (u = 33);
                    break;
                  case "P":
                    u = 24;
                }
              else
                !s ||
                  g ||
                  ("CARD" !== l && "SHORTFORM_CARD" !== l) ||
                  !E[t].paragraphTopMarginForPostPage ||
                  ((u =
                    i && 0 === t && "Title" === r
                      ? 12
                      : E[t].paragraphTopMarginForPostPage),
                  "SHORTFORM_CARD" === l &&
                    ((u = 0),
                    "Title" === r ? (p = 28) : "Subtitle" === r && (p = 0)));
              return {
                highlights: y[t],
                marginTopOverride: u,
                marginBottomOverride: p,
                paragraph: e,
                paragraphStyle: r,
                privateNotes: O[t],
                richTextStyle: l,
                sequenceAspectRatio: E[t].sequenceAspectRatio,
                sequenceSpaceTop: E[t].sequenceTopSpacing,
                spaceTop: E[t].paragraphTopSpacing,
              };
            }),
            b = [];
          return (
            m.forEach(function (e, t) {
              var n = _(m, t, h.length);
              g && 0 !== t && b.push("HR"),
                b.push({
                  section: e,
                  paragraphViewModels: S.slice(e.startIndex, n),
                });
            }),
            b
          );
        },
        Z = function (e) {
          return "STREAM" === e || "CARD" === e || "SHORTFORM_CARD" === e;
        },
        ee = (0, p.Ps)(v(), V, J, D, k, B),
        te = (0, p.Ps)(m(), W),
        ne = (0, p.Ps)(h(), K);
    },
  },
]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/9692.8ebc0ed1.chunk.js.map
