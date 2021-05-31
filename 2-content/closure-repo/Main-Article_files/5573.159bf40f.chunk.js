(self.webpackChunklite = self.webpackChunklite || []).push([
  [5573],
  {
    45573: (t, e, n) => {
      t.exports = n(59792);
    },
    59792: function (t) {
      t.exports = (function (t) {
        function e(r) {
          if (n[r]) return n[r].exports;
          var o = (n[r] = { exports: {}, id: r, loaded: !1 });
          return (
            t[r].call(o.exports, o, o.exports, e), (o.loaded = !0), o.exports
          );
        }
        var n = {};
        return (e.m = t), (e.c = n), (e.p = ""), e(0);
      })([
        function (t, e, n) {
          "use strict";
          var r = (function (t) {
              return t && t.__esModule ? t : { default: t };
            })(n(24)),
            o = n(4),
            i = { Tracer: r.default };
          o.Platform.initLibrary(i), (t.exports = i);
        },
        function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function (t, e) {
              if (t) for (var n in t) hasOwnProperty.call(t, n) && e(t[n], n);
            }),
            (t.exports = e.default);
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = n(7),
            o = (function () {
              function t() {}
              return (
                (t.prototype.context = function () {
                  return this._context();
                }),
                (t.prototype.tracer = function () {
                  return this._tracer();
                }),
                (t.prototype.setOperationName = function (t) {
                  return this._setOperationName(t), this;
                }),
                (t.prototype.setBaggageItem = function (t, e) {
                  return this._setBaggageItem(t, e), this;
                }),
                (t.prototype.getBaggageItem = function (t) {
                  return this._getBaggageItem(t);
                }),
                (t.prototype.setTag = function (t, e) {
                  return this._addTags((((n = {})[t] = e), n)), this;
                  var n;
                }),
                (t.prototype.addTags = function (t) {
                  return this._addTags(t), this;
                }),
                (t.prototype.log = function (t, e) {
                  return this._log(t, e), this;
                }),
                (t.prototype.logEvent = function (t, e) {
                  return this._log({ event: t, payload: e });
                }),
                (t.prototype.finish = function (t) {
                  this._finish(t);
                }),
                (t.prototype._context = function () {
                  return r.spanContext;
                }),
                (t.prototype._tracer = function () {
                  return r.tracer;
                }),
                (t.prototype._setOperationName = function (t) {}),
                (t.prototype._setBaggageItem = function (t, e) {}),
                (t.prototype._getBaggageItem = function (t) {}),
                (t.prototype._addTags = function (t) {}),
                (t.prototype._log = function (t, e) {}),
                (t.prototype._finish = function (t) {}),
                t
              );
            })();
          (e.Span = o), (e.default = o);
        },
        function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = (e.LOG_INFO = 0),
            r = (e.LOG_WARN = 1),
            o = (e.LOG_ERROR = 2),
            i = (e.LOG_FATAL = 3);
          (e.LOG_LEVEL_TO_STRING = {
            LOG_INFO: "I",
            LOG_WARN: "W",
            LOG_ERROR: "E",
            LOG_FATAL: "F",
          }),
            (e.LOG_STRING_TO_LEVEL = { I: n, W: r, E: o, F: i }),
            (e.CLOCK_STATE_REFRESH_INTERVAL_MS = 350),
            (e.LIGHTSTEP_APP_URL_PREFIX = "https://app.lightstep.com"),
            (e.JOIN_ID_PREFIX = "join:");
        },
        function (t, e, n) {
          "use strict";
          t.exports = {
            Platform: n(18),
            Transport: n(20),
            thrift: n(19),
            crouton_thrift: n(16),
          };
        },
        function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.toString = function (t) {
              return "" + t;
            }),
            (e.toNumber = function (t) {
              return Number(t);
            }),
            (e.toBoolean = function (t) {
              return !!t;
            });
        },
        function (t, e, n) {
          "use strict";
          function r(t) {
            for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = n(32);
          e.BinaryCarrier = o.default;
          var i = n(33);
          e.Tags = i;
          var s = n(7),
            a = n(12);
          e.Reference = a.default;
          var u = n(2);
          e.Span = u.default;
          var l = n(13);
          e.SpanContext = l.default;
          var c = n(8);
          (e.Tracer = c.default), r(n(34)), r(n(10)), r(n(11)), s.initialize();
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = n(2),
            o = n(13),
            i = n(8);
          (e.tracer = null),
            (e.spanContext = null),
            (e.span = null),
            (e.initialize = function () {
              (e.tracer = new i.default()),
                (e.span = new r.default()),
                (e.spanContext = new o.default());
            });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = n(11),
            o = n(7),
            i = n(2),
            s = (function () {
              function t() {}
              return (
                (t.prototype.startSpan = function (t, e) {
                  if ((void 0 === e && (e = {}), e.childOf)) {
                    var n = r.childOf(e.childOf);
                    e.references ? e.references.push(n) : (e.references = [n]),
                      delete e.childOf;
                  }
                  return this._startSpan(t, e);
                }),
                (t.prototype.inject = function (t, e, n) {
                  return (
                    t instanceof i.default && (t = t.context()),
                    this._inject(t, e, n)
                  );
                }),
                (t.prototype.extract = function (t, e) {
                  return this._extract(t, e);
                }),
                (t.prototype._startSpan = function (t, e) {
                  return o.span;
                }),
                (t.prototype._inject = function (t, e, n) {}),
                (t.prototype._extract = function (t, e) {
                  return o.spanContext;
                }),
                t
              );
            })();
          (e.Tracer = s), (e.default = s);
        },
        function (t, e) {
          "use strict";
          !(function () {
            var e = {},
              n = {};
            void 0 === n && (n = {}),
              (n.KeyValue = function (t) {
                if (((this.Key = null), (this.Value = null), t)) {
                  if (void 0 === t.Key)
                    throw new e.TProtocolException(
                      e.TProtocolExceptionType.UNKNOWN,
                      "Required field Key is unset!"
                    );
                  if (((this.Key = t.Key), void 0 === t.Value))
                    throw new e.TProtocolException(
                      e.TProtocolExceptionType.UNKNOWN,
                      "Required field Value is unset!"
                    );
                  this.Value = t.Value;
                }
              }),
              (n.KeyValue.prototype = {}),
              (n.KeyValue.prototype.read = !1),
              (n.KeyValue.prototype.write = !1),
              (n.NamedCounter = function (t) {
                if (((this.Name = null), (this.Value = null), t)) {
                  if (void 0 === t.Name)
                    throw new e.TProtocolException(
                      e.TProtocolExceptionType.UNKNOWN,
                      "Required field Name is unset!"
                    );
                  if (((this.Name = t.Name), void 0 === t.Value))
                    throw new e.TProtocolException(
                      e.TProtocolExceptionType.UNKNOWN,
                      "Required field Value is unset!"
                    );
                  this.Value = t.Value;
                }
              }),
              (n.NamedCounter.prototype = {}),
              (n.NamedCounter.prototype.read = !1),
              (n.NamedCounter.prototype.write = !1),
              (n.Runtime = function (t) {
                (this.guid = null),
                  (this.start_micros = null),
                  (this.group_name = null),
                  (this.attrs = null),
                  t &&
                    (void 0 !== t.guid && (this.guid = t.guid),
                    void 0 !== t.start_micros &&
                      (this.start_micros = t.start_micros),
                    void 0 !== t.group_name && (this.group_name = t.group_name),
                    void 0 !== t.attrs && (this.attrs = t.attrs));
              }),
              (n.Runtime.prototype = {}),
              (n.Runtime.prototype.read = !1),
              (n.Runtime.prototype.write = !1),
              (n.LogRecord = function (t) {
                (this.timestamp_micros = null),
                  (this.fields = null),
                  (this.runtime_guid = null),
                  (this.span_guid = null),
                  (this.stable_name = null),
                  (this.message = null),
                  (this.level = null),
                  (this.thread_id = null),
                  (this.filename = null),
                  (this.line_number = null),
                  (this.stack_frames = null),
                  (this.payload_json = null),
                  (this.error_flag = null),
                  t &&
                    (void 0 !== t.timestamp_micros &&
                      (this.timestamp_micros = t.timestamp_micros),
                    void 0 !== t.fields && (this.fields = t.fields),
                    void 0 !== t.runtime_guid &&
                      (this.runtime_guid = t.runtime_guid),
                    void 0 !== t.span_guid && (this.span_guid = t.span_guid),
                    void 0 !== t.stable_name &&
                      (this.stable_name = t.stable_name),
                    void 0 !== t.message && (this.message = t.message),
                    void 0 !== t.level && (this.level = t.level),
                    void 0 !== t.thread_id && (this.thread_id = t.thread_id),
                    void 0 !== t.filename && (this.filename = t.filename),
                    void 0 !== t.line_number &&
                      (this.line_number = t.line_number),
                    void 0 !== t.stack_frames &&
                      (this.stack_frames = t.stack_frames),
                    void 0 !== t.payload_json &&
                      (this.payload_json = t.payload_json),
                    void 0 !== t.error_flag &&
                      (this.error_flag = t.error_flag));
              }),
              (n.LogRecord.prototype = {}),
              (n.LogRecord.prototype.read = !1),
              (n.LogRecord.prototype.write = !1),
              (n.TraceJoinId = function (t) {
                if (((this.TraceKey = null), (this.Value = null), t)) {
                  if (void 0 === t.TraceKey)
                    throw new e.TProtocolException(
                      e.TProtocolExceptionType.UNKNOWN,
                      "Required field TraceKey is unset!"
                    );
                  if (((this.TraceKey = t.TraceKey), void 0 === t.Value))
                    throw new e.TProtocolException(
                      e.TProtocolExceptionType.UNKNOWN,
                      "Required field Value is unset!"
                    );
                  this.Value = t.Value;
                }
              }),
              (n.TraceJoinId.prototype = {}),
              (n.TraceJoinId.prototype.read = !1),
              (n.TraceJoinId.prototype.write = !1),
              (n.SpanRecord = function (t) {
                (this.span_guid = null),
                  (this.trace_guid = null),
                  (this.runtime_guid = null),
                  (this.span_name = null),
                  (this.join_ids = null),
                  (this.oldest_micros = null),
                  (this.youngest_micros = null),
                  (this.attributes = null),
                  (this.error_flag = null),
                  (this.log_records = null),
                  t &&
                    (void 0 !== t.span_guid && (this.span_guid = t.span_guid),
                    void 0 !== t.trace_guid && (this.trace_guid = t.trace_guid),
                    void 0 !== t.runtime_guid &&
                      (this.runtime_guid = t.runtime_guid),
                    void 0 !== t.span_name && (this.span_name = t.span_name),
                    void 0 !== t.join_ids && (this.join_ids = t.join_ids),
                    void 0 !== t.oldest_micros &&
                      (this.oldest_micros = t.oldest_micros),
                    void 0 !== t.youngest_micros &&
                      (this.youngest_micros = t.youngest_micros),
                    void 0 !== t.attributes && (this.attributes = t.attributes),
                    void 0 !== t.error_flag && (this.error_flag = t.error_flag),
                    void 0 !== t.log_records &&
                      (this.log_records = t.log_records));
              }),
              (n.SpanRecord.prototype = {}),
              (n.SpanRecord.prototype.read = !1),
              (n.SpanRecord.prototype.write = !1),
              (n.Auth = function (t) {
                (this.access_token = null),
                  t &&
                    void 0 !== t.access_token &&
                    (this.access_token = t.access_token);
              }),
              (n.Auth.prototype = {}),
              (n.Auth.prototype.read = !1),
              (n.Auth.prototype.write = !1),
              (n.Timing = function (t) {
                (this.receive_micros = null),
                  (this.transmit_micros = null),
                  t &&
                    (void 0 !== t.receive_micros &&
                      (this.receive_micros = t.receive_micros),
                    void 0 !== t.transmit_micros &&
                      (this.transmit_micros = t.transmit_micros));
              }),
              (n.Timing.prototype = {}),
              (n.Timing.prototype.read = !1),
              (n.Timing.prototype.write = !1),
              (n.SampleCount = function (t) {
                (this.oldest_micros = null),
                  (this.youngest_micros = null),
                  (this.count = null),
                  t &&
                    (void 0 !== t.oldest_micros &&
                      (this.oldest_micros = t.oldest_micros),
                    void 0 !== t.youngest_micros &&
                      (this.youngest_micros = t.youngest_micros),
                    void 0 !== t.count && (this.count = t.count));
              }),
              (n.SampleCount.prototype = {}),
              (n.SampleCount.prototype.read = !1),
              (n.SampleCount.prototype.write = !1),
              (n.MetricsSample = function (t) {
                if (
                  ((this.name = null),
                  (this.int64_value = null),
                  (this.double_value = null),
                  t)
                ) {
                  if (void 0 === t.name)
                    throw new e.TProtocolException(
                      e.TProtocolExceptionType.UNKNOWN,
                      "Required field name is unset!"
                    );
                  (this.name = t.name),
                    void 0 !== t.int64_value &&
                      (this.int64_value = t.int64_value),
                    void 0 !== t.double_value &&
                      (this.double_value = t.double_value);
                }
              }),
              (n.MetricsSample.prototype = {}),
              (n.MetricsSample.prototype.read = !1),
              (n.MetricsSample.prototype.write = !1),
              (n.Metrics = function (t) {
                (this.counts = null),
                  (this.gauges = null),
                  t &&
                    (void 0 !== t.counts && (this.counts = t.counts),
                    void 0 !== t.gauges && (this.gauges = t.gauges));
              }),
              (n.Metrics.prototype = {}),
              (n.Metrics.prototype.read = !1),
              (n.Metrics.prototype.write = !1),
              (n.ReportRequest = function (t) {
                (this.runtime = null),
                  (this.span_records = null),
                  (this.log_records = null),
                  (this.timestamp_offset_micros = null),
                  (this.oldest_micros = null),
                  (this.youngest_micros = null),
                  (this.counters = null),
                  (this.internal_logs = null),
                  (this.internal_metrics = null),
                  t &&
                    (void 0 !== t.runtime && (this.runtime = t.runtime),
                    void 0 !== t.span_records &&
                      (this.span_records = t.span_records),
                    void 0 !== t.log_records &&
                      (this.log_records = t.log_records),
                    void 0 !== t.timestamp_offset_micros &&
                      (this.timestamp_offset_micros =
                        t.timestamp_offset_micros),
                    void 0 !== t.oldest_micros &&
                      (this.oldest_micros = t.oldest_micros),
                    void 0 !== t.youngest_micros &&
                      (this.youngest_micros = t.youngest_micros),
                    void 0 !== t.counters && (this.counters = t.counters),
                    void 0 !== t.internal_logs &&
                      (this.internal_logs = t.internal_logs),
                    void 0 !== t.internal_metrics &&
                      (this.internal_metrics = t.internal_metrics));
              }),
              (n.ReportRequest.prototype = {}),
              (n.ReportRequest.prototype.read = !1),
              (n.ReportRequest.prototype.write = !1),
              (n.Command = function (t) {
                (this.disable = null),
                  t && void 0 !== t.disable && (this.disable = t.disable);
              }),
              (n.Command.prototype = {}),
              (n.Command.prototype.read = !1),
              (n.Command.prototype.write = !1),
              (n.ReportResponse = function (t) {
                (this.commands = null),
                  (this.timing = null),
                  (this.errors = null),
                  t &&
                    (void 0 !== t.commands && (this.commands = t.commands),
                    void 0 !== t.timing && (this.timing = t.timing),
                    void 0 !== t.errors && (this.errors = t.errors));
              }),
              (n.ReportResponse.prototype = {}),
              (n.ReportResponse.prototype.read = !1),
              (n.ReportResponse.prototype.write = !1),
              (t.exports.crouton_thrift = n),
              (t.exports.Thrift = {});
          })();
        },
        function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.FORMAT_BINARY = "binary"),
            (e.FORMAT_TEXT_MAP = "text_map"),
            (e.FORMAT_HTTP_HEADERS = "http_headers"),
            (e.REFERENCE_CHILD_OF = "child_of"),
            (e.REFERENCE_FOLLOWS_FROM = "follows_from");
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = n(10),
            o = n(12),
            i = n(2);
          (e.childOf = function (t) {
            return (
              t instanceof i.default && (t = t.context()),
              new o.default(r.REFERENCE_CHILD_OF, t)
            );
          }),
            (e.followsFrom = function (t) {
              return (
                t instanceof i.default && (t = t.context()),
                new o.default(r.REFERENCE_FOLLOWS_FROM, t)
              );
            });
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = n(2),
            o = (function () {
              function t(t, e) {
                (this._type = t),
                  (this._referencedContext =
                    e instanceof r.default ? e.context() : e);
              }
              return (
                (t.prototype.type = function () {
                  return this._type;
                }),
                (t.prototype.referencedContext = function () {
                  return this._referencedContext;
                }),
                t
              );
            })();
          e.default = o;
        },
        function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = function () {};
          (e.SpanContext = n), (e.default = n);
        },
        function (t, e, n) {
          "use strict";
          var r = (function () {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            o = (function (t) {
              return t && t.__esModule ? t : { default: t };
            })(n(1)),
            i = (function () {
              function t() {
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this.options = {});
              }
              return (
                r(t, [
                  {
                    key: "setOptions",
                    value: function (t) {
                      var e = this;
                      (0, o.default)(t, function (t, n) {
                        e.options[n] = t;
                      });
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = new i();
        },
        function (t, e, n) {
          "use strict";
          var r = (function () {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            o = n(4),
            i = n(3),
            s = n(5),
            a = (function () {
              function t(e) {
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this._runtime = e),
                  (this._record = new o.crouton_thrift.LogRecord({
                    timestamp_micros: e._platform.nowMicros(),
                    runtime_guid: null,
                    span_guid: null,
                    stable_name: null,
                    message: null,
                    level: null,
                    thread_id: null,
                    filename: null,
                    line_number: null,
                    stack_frames: null,
                    payload_json: null,
                    error_flag: null,
                  }));
              }
              return (
                r(t, [
                  {
                    key: "record",
                    value: function () {
                      return this._record;
                    },
                  },
                  {
                    key: "end",
                    value: function () {
                      this._runtime._addLogRecord(this._record);
                    },
                  },
                  {
                    key: "timestamp",
                    value: function (t) {
                      return (
                        (this._record.timestamp_micros = s.toNumber(t)), this
                      );
                    },
                  },
                  {
                    key: "message",
                    value: function (t) {
                      return (this._record.message = s.toString(t)), this;
                    },
                  },
                  {
                    key: "level",
                    value: function (t) {
                      return (
                        (this._record.level = i.LOG_LEVEL_TO_STRING[t] || null),
                        t >= i.LOG_ERROR && this.error(!0),
                        this
                      );
                    },
                  },
                  {
                    key: "span",
                    value: function (t) {
                      return (
                        void 0 !== t &&
                          (this._record.span_guid = s.toString(t)),
                        this
                      );
                    },
                  },
                  {
                    key: "name",
                    value: function (t) {
                      return (this._record.stable_name = s.toString(t)), this;
                    },
                  },
                  {
                    key: "error",
                    value: function (t) {
                      return (this._record.error_flag = s.toBoolean(t)), this;
                    },
                  },
                  {
                    key: "payload",
                    value: function (t) {
                      return (
                        void 0 !== t &&
                          (this._record.payload_json = this._encodePayload(t)),
                        this
                      );
                    },
                  },
                  {
                    key: "_encodePayload",
                    value: function (t) {
                      var e = null;
                      try {
                        e = JSON.stringify(t);
                      } catch (t) {
                        return;
                      }
                      return e;
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = a;
        },
        function (t, e, n) {
          "use strict";
          t.exports = n(9).crouton_thrift;
        },
        function (t, e) {
          "use strict";
          var n = (function () {
            var t = document.getElementsByTagName("SCRIPT");
            return t.length > 0 ? t[t.length - 1] : null;
          })();
          (t.exports.parseScriptElementOptions = function (t, e) {
            if (n) {
              var r = n.dataset,
                o = r.access_token;
              "string" == typeof o && o.length > 0 && (t.access_token = o);
              var i = r.component_name;
              "string" == typeof i && i.length > 0 && (t.component_name = i);
              var s = r.collector_host;
              "string" == typeof s && s.length > 0 && (t.collector_host = s);
              var a = r.collector_port;
              a && (t.collector_port = parseInt(a, 10));
              var u = r.collector_path;
              "string" == typeof u && u.length > 0 && (t.collector_path = u);
              var l = r.collector_encryption;
              l && (t.collector_encryption = l);
              var c = r.enable;
              "string" == typeof c &&
                ("true" === c
                  ? (t.enable = !0)
                  : "false" === c && (t.enable = !1));
              var p = r.verbosity;
              "string" == typeof p && (t.verbosity = parseInt(p, 10));
              var _ = r.init_global_tracer;
              "string" == typeof _ &&
                ("true" === _
                  ? (e.init_global_tracer = !0)
                  : "false" === _ && (e.init_global_tracer = !1)),
                "string" == typeof r.xhr_instrumentation &&
                  "true" === r.xhr_instrumentation &&
                  (t.xhr_instrumentation = !0),
                "string" == typeof r.instrument_page_load &&
                  "true" === r.instrument_page_load &&
                  (t.instrument_page_load = !0);
            }
          }),
            (t.exports.parseURLQueryOptions = function (t) {
              if (window) {
                var e = (function (t) {
                  var e = {},
                    n = window.location.href.indexOf("?");
                  if (n < 0) return e;
                  var r = window.location.href.slice(n + 1);
                  r.indexOf("#") >= 0 && (r = r.slice(0, r.indexOf("#")));
                  for (
                    var o = r.replace(/\+/, "%20").split("&"), i = 0;
                    i < o.length;
                    i++
                  ) {
                    var s = o[i].split("=");
                    e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
                  }
                  return e;
                })();
                if (e.lightstep_verbosity)
                  try {
                    t.verbosity = parseInt(e.lightstep_verbosity, 10);
                  } catch (t) {}
                e.lightstep_log_to_console && (t.log_to_console = !0);
              }
            });
        },
        function (t, e, n) {
          "use strict";
          var r = (function () {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            o = n(17),
            i = n(21),
            s = "lightstep_session_id",
            a = 604800,
            u = (function () {
              if (
                window.performance &&
                window.performance.now &&
                window.performance.timing &&
                window.performance.timing.navigationStart
              ) {
                var t = (function () {
                  var t = performance.timing.navigationStart;
                  return {
                    v: function () {
                      return Math.floor(1e3 * (t + performance.now()));
                    },
                  };
                })();
                if ("object" == typeof t) return t.v;
              }
              return function () {
                return 1e3 * Date.now();
              };
            })(),
            l = (function () {
              function t() {
                !(function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t);
              }
              return (
                r(
                  t,
                  [
                    {
                      key: "name",
                      value: function () {
                        return "browser";
                      },
                    },
                    {
                      key: "nowMicros",
                      value: function () {
                        return u();
                      },
                    },
                    {
                      key: "runtimeGUID",
                      value: function (t) {
                        var e = "lightstep_guid/" + t,
                          n = i.cookie(e) || this._generateLongUUID();
                        i.cookie(e, n, a, "/");
                        var r = i.cookie(s) || this._generateLongUUID();
                        return i.cookie(s, r, a, "/"), n;
                      },
                    },
                    {
                      key: "generateUUID",
                      value: function () {
                        return this._generateLongUUID();
                      },
                    },
                    {
                      key: "_generateLongUUID",
                      value: function () {
                        return (
                          "" +
                          (
                            "00000000" +
                            Math.abs((4294967295 * Math.random()) | 0).toString(
                              16
                            )
                          ).substr(-8) +
                          (
                            "00000000" +
                            Math.abs((4294967295 * Math.random()) | 0).toString(
                              16
                            )
                          ).substr(-8)
                        );
                      },
                    },
                    {
                      key: "onBeforeExit",
                      value: function () {
                        if (window) {
                          for (
                            var t, e = arguments.length, n = Array(e), r = 0;
                            r < e;
                            r++
                          )
                            n[r] = arguments[r];
                          (t = window).addEventListener.apply(
                            t,
                            ["beforeunload"].concat(n)
                          );
                        }
                      },
                    },
                    {
                      key: "plugins",
                      value: function (t) {
                        return [n(28), n(27)];
                      },
                    },
                    {
                      key: "options",
                      value: function (t) {
                        var e = {},
                          n = {};
                        return (
                          o.parseScriptElementOptions(e, n),
                          o.parseURLQueryOptions(e, n),
                          e
                        );
                      },
                    },
                    {
                      key: "tracerTags",
                      value: function () {
                        return { "lightstep.tracer_platform": "browser" };
                      },
                    },
                    {
                      key: "fatal",
                      value: function (t) {
                        throw new Error(t);
                      },
                    },
                    {
                      key: "localStoreGet",
                      value: function (t) {
                        if (!window.sessionStorage) return null;
                        try {
                          return JSON.parse(
                            sessionStorage.getItem("lightstep/" + t)
                          );
                        } catch (t) {
                          return null;
                        }
                      },
                    },
                    {
                      key: "localStoreSet",
                      value: function (t, e) {
                        if (window.sessionStorage)
                          try {
                            sessionStorage.setItem(
                              "lightstep/" + t,
                              JSON.stringify(e)
                            );
                          } catch (t) {}
                      },
                    },
                  ],
                  [
                    {
                      key: "initLibrary",
                      value: function (e) {
                        var n = {},
                          r = {};
                        o.parseScriptElementOptions(n, r),
                          r.init_global_tracer && t.initGlobalTracer(e, n);
                      },
                    },
                    {
                      key: "initGlobalTracer",
                      value: function (t, e) {
                        "object" == typeof window &&
                          "object" == typeof window.opentracing &&
                          opentracing.initGlobalTracer(new t.Tracer(e));
                      },
                    },
                  ]
                ),
                t
              );
            })();
          t.exports = l;
        },
        function (t, e, n) {
          "use strict";
          t.exports = n(9).Thrift;
        },
        function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = (function () {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            r = (function () {
              function t() {
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this._host = ""),
                  (this._port = 0),
                  (this._path = ""),
                  (this._encryption = "");
              }
              return (
                n(t, [
                  {
                    key: "ensureConnection",
                    value: function (t) {
                      (this._host = t.collector_host),
                        (this._port = t.collector_port),
                        (this._path = t.collector_path),
                        (this._encryption = t.collector_encryption);
                    },
                  },
                  {
                    key: "report",
                    value: function (t, e, n, r) {
                      try {
                        t
                          ? this._reportAsyncScript(e, n, r)
                          : this._reportAJAX(e, n, r);
                      } catch (t) {
                        return r(t, null);
                      }
                    },
                  },
                  {
                    key: "_reportAJAX",
                    value: function (t, e, n) {
                      var r = JSON.stringify(e),
                        o =
                          ("none" === this._encryption ? "http" : "https") +
                          "://" +
                          this._host +
                          ":" +
                          this._port +
                          this._path +
                          "/api/v0/reports",
                        i = new XMLHttpRequest();
                      i.open("POST", o),
                        i.setRequestHeader(
                          "LightStep-Access-Token",
                          t.access_token
                        ),
                        i.setRequestHeader("Content-Type", "application/json"),
                        (i.onreadystatechange = function () {
                          if (4 === this.readyState) {
                            var t = null,
                              e = null;
                            if (200 !== this.status)
                              t = new Error("status code = " + this.status);
                            else if (this.responseText)
                              try {
                                e = JSON.parse(this.responseText);
                              } catch (e) {
                                t = e;
                              }
                            else t = new Error("unexpected empty response");
                            return n(t, e);
                          }
                        }),
                        i.send(r);
                    },
                  },
                  {
                    key: "_reportAsyncScript",
                    value: function (t, e, n) {
                      var r = JSON.stringify(t),
                        o = JSON.stringify(e),
                        i =
                          ("none" === this._encryption ? "http" : "https") +
                          "://" +
                          this._host +
                          ":" +
                          this._port +
                          this._path +
                          "/_rpc/v1/reports/uri_encoded?auth=" +
                          encodeURIComponent(r) +
                          "&report=" +
                          encodeURIComponent(o),
                        s = document.createElement("script");
                      (s.async = !0),
                        (s.defer = !0),
                        (s.src = i),
                        (s.type = "text/javascript");
                      var a = document.getElementsByTagName("head")[0];
                      return a && a.appendChild(s), n(null, null);
                    },
                  },
                ]),
                t
              );
            })();
          (e.default = r), (t.exports = e.default);
        },
        function (t, e) {
          "use strict";
          t.exports = {
            cookie: function (t, e, n, r, o, i) {
              if (arguments.length > 1) {
                var s =
                  t +
                  "=" +
                  encodeURIComponent(e) +
                  (n
                    ? "; expires=" +
                      new Date(+new Date() + 1e3 * n).toUTCString()
                    : "") +
                  (r ? "; path=" + r : "") +
                  (o ? "; domain=" + o : "") +
                  (i ? "; secure" : "");
                return (document.cookie = s), s;
              }
              return decodeURIComponent(
                (("; " + document.cookie).split("; " + t + "=")[1] || "").split(
                  ";"
                )[0]
              );
            },
          };
        },
        function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var r = (function () {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            o = (function (t) {
              return t && t.__esModule ? t : { default: t };
            })(n(1)),
            i = (function () {
              function t(e, n) {
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this._baggage = {}),
                  (this._guid = e),
                  (this._traceGUID = n);
              }
              return (
                r(t, [
                  {
                    key: "setBaggageItem",
                    value: function (t, e) {
                      this._baggage[t] = e;
                    },
                  },
                  {
                    key: "getBaggageItem",
                    value: function (t) {
                      return this._baggage[t];
                    },
                  },
                  {
                    key: "forEachBaggageItem",
                    value: function (t) {
                      (0, o.default)(this._baggage, function (e, n) {
                        t(n, e);
                      });
                    },
                  },
                ]),
                t
              );
            })();
          (e.default = i), (t.exports = e.default);
        },
        function (t, e, n) {
          "use strict";
          function r(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return (e.default = t), e;
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function () {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            i = r(n(5)),
            s = r(n(3)),
            a = (function (t) {
              return t && t.__esModule ? t : { default: t };
            })(n(1)),
            u = r(n(6)),
            l = n(4),
            c = (function (t) {
              function e(t, n, r) {
                !(function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
                var o = (function (t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(this, Object.getPrototypeOf(e).call(this));
                return (
                  console.assert("object" == typeof t, "Invalid runtime"),
                  (o._tracerImp = t),
                  (o._ctx = r),
                  (o._ended = !1),
                  (o._operationName = n),
                  (o._tags = {}),
                  (o._beginMicros = t._platform.nowMicros()),
                  (o._endMicros = 0),
                  (o._errorFlag = !1),
                  (o._log_records = null),
                  o
                );
              }
              return (
                (function (t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                o(e, [
                  {
                    key: "_tracer",
                    value: function () {
                      return this._tracerImp;
                    },
                  },
                  {
                    key: "_context",
                    value: function () {
                      return this._ctx;
                    },
                  },
                  {
                    key: "_setOperationName",
                    value: function (t) {
                      this._operationName = "" + t;
                    },
                  },
                  {
                    key: "_addTags",
                    value: function (t) {
                      var e = this;
                      (0, a.default)(t, function (t, n) {
                        e._tags[n] = t;
                      });
                    },
                  },
                  {
                    key: "_log",
                    value: function (t, e) {
                      var n = this;
                      if ("object" == typeof t) {
                        var r = e
                            ? 1e3 * e
                            : n._tracerImp._platform.nowMicros(),
                          o = [];
                        (0, a.default)(t, function (t, e) {
                          if (e && t) {
                            var r = i.toString(e),
                              s = null;
                            if (t instanceof Object)
                              try {
                                s = JSON.stringify(t, null, "  ");
                              } catch (t) {
                                s = "Could not encode value. Exception: " + t;
                              }
                            else s = i.toString(t);
                            r.length >
                              n._tracerImp._options.log_field_key_hard_limit &&
                              (n._tracerImp._counters["logs.keys.over_limit"]++,
                              (r =
                                r.substr(
                                  0,
                                  n._tracerImp._options.log_field_key_hard_limit
                                ) + "...")),
                              s.length >
                                n._tracerImp._options
                                  .log_field_value_hard_limit &&
                                (n._tracerImp._counters[
                                  "logs.values.over_limit"
                                ]++,
                                (s =
                                  s.substr(
                                    0,
                                    n._tracerImp._options
                                      .log_field_value_hard_limit
                                  ) + "...")),
                              o.push(
                                new l.crouton_thrift.KeyValue({
                                  Key: r,
                                  Value: s,
                                })
                              );
                          }
                        });
                        var s = new l.crouton_thrift.LogRecord({
                          timestamp_micros: r,
                          fields: o,
                        });
                        (n._log_records = n._log_records || []),
                          n._log_records.push(s),
                          n._tracerImp.emit("log_added", s);
                      } else
                        n._tracerImp._error(
                          "Span.log() expects an object as its first argument"
                        );
                    },
                  },
                  {
                    key: "_finish",
                    value: function (t) {
                      return this.end(t);
                    },
                  },
                ]),
                o(e, [
                  {
                    key: "getOperationName",
                    value: function () {
                      return this._operationName;
                    },
                  },
                  {
                    key: "guid",
                    value: function () {
                      return this._ctx._guid;
                    },
                  },
                  {
                    key: "traceGUID",
                    value: function () {
                      return this._ctx._traceGUID;
                    },
                  },
                  {
                    key: "parentGUID",
                    value: function () {
                      return this._tags.parent_span_guid;
                    },
                  },
                  {
                    key: "setParentGUID",
                    value: function (t) {
                      return (
                        (this._tags.parent_span_guid = i.toString(t)), this
                      );
                    },
                  },
                  {
                    key: "beginMicros",
                    value: function () {
                      return this._beginMicros;
                    },
                  },
                  {
                    key: "setBeginMicros",
                    value: function (t) {
                      return (this._beginMicros = t), this;
                    },
                  },
                  {
                    key: "endMicros",
                    value: function () {
                      return this._endMicros;
                    },
                  },
                  {
                    key: "setEndMicros",
                    value: function (t) {
                      return (this._endMicros = t), this;
                    },
                  },
                  {
                    key: "generateTraceURL",
                    value: function () {
                      var t;
                      return (
                        (t =
                          this._beginMicros > 0 && this._endMicros > 0
                            ? Math.floor(
                                (this._beginMicros + this._endMicros) / 2
                              )
                            : this._tracerImp._platform.nowMicros()),
                        s.LIGHTSTEP_APP_URL_PREFIX +
                          "/" +
                          encodeURIComponent(
                            this._tracerImp.options().access_token
                          ) +
                          "/trace?span_guid=" +
                          encodeURIComponent(this.guid()) +
                          "&at_micros=" +
                          t
                      );
                    },
                  },
                  {
                    key: "getTags",
                    value: function () {
                      return this._tags;
                    },
                  },
                  {
                    key: "end",
                    value: function (t) {
                      this._ended ||
                        ((this._ended = !0),
                        void 0 !== t && (this._endMicros = 1e3 * t),
                        0 === this._endMicros &&
                          (this._endMicros =
                            this._tracerImp._platform.nowMicros()),
                        this._tracerImp._addSpanRecord(this._toThrift()));
                    },
                  },
                  {
                    key: "_toThrift",
                    value: function () {
                      var t = [];
                      return (
                        (0, a.default)(this._tags, function (e, n) {
                          t.push(
                            new l.crouton_thrift.KeyValue({
                              Key: i.toString(n),
                              Value: i.toString(e),
                            })
                          );
                        }),
                        new l.crouton_thrift.SpanRecord({
                          span_guid: this.guid(),
                          trace_guid: this.traceGUID(),
                          runtime_guid: this._tracerImp.guid(),
                          span_name: this._operationName,
                          oldest_micros: this._beginMicros,
                          youngest_micros: this._endMicros,
                          attributes: t,
                          error_flag: this._errorFlag,
                          log_records: this._log_records,
                        })
                      );
                    },
                  },
                ]),
                e
              );
            })(u.Span);
          (e.default = c), (t.exports = e.default);
        },
        function (t, e, n) {
          "use strict";
          function r(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function () {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            i = r(n(30)),
            s = (function (t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return (e.default = t), e;
            })(n(6)),
            a = r(n(22)),
            u = r(n(23)),
            l = r(n(1)),
            c = n(4),
            p = n(25),
            _ = n(15),
            f = n(5),
            d = n(3),
            h = n(14),
            v = n(31),
            g = n(26),
            m = "ot-tracer-",
            y = "ot-baggage-",
            b = null,
            w = (function (t) {
              function e(t) {
                !(function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
                var r = (function (t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                })(this, Object.getPrototypeOf(e).call(this));
                r._delegateEventEmitterMethods(),
                  (t = t || {}),
                  b || (h.setOptions(t), (b = r)),
                  (r._platform = new c.Platform(r)),
                  (r._runtimeGUID = t.guid || r.override_runtime_guid || null),
                  (r._plugins = {}),
                  (r._options = {}),
                  (r._optionDescs = []),
                  r._makeOptionsTable(),
                  (r._opentracing = s),
                  t.opentracing_module &&
                    (r._opentracing = t.opentracing_module);
                var o = r._platform.nowMicros();
                (r._startMicros = o),
                  (r._thriftAuth = null),
                  (r._thriftRuntime = null);
                var i = {
                  warn: function (t, e) {
                    r._warn(t, e);
                  },
                  error: function (t, e) {
                    r._error(t, e);
                  },
                };
                return (
                  (r._transport =
                    (t ? t.override_transport : null) || new c.Transport(i)),
                  (r._reportingLoopActive = !1),
                  (r._reportYoungestMicros = o),
                  (r._reportTimer = null),
                  (r._reportErrorStreak = 0),
                  (r._lastVisibleErrorMillis = 0),
                  (r._skippedVisibleErrors = 0),
                  (r._activeRootSpanSet = {}),
                  (r._activeRootSpan = null),
                  (r._useClockState = !0),
                  (r._clockState = new p({
                    nowMicros: function () {
                      return r._platform.nowMicros();
                    },
                    localStoreGet: function () {
                      var t = "clock_state/" + r._options.collector_host;
                      return r._platform.localStoreGet(t);
                    },
                    localStoreSet: function (t) {
                      var e = "clock_state/" + r._options.collector_host;
                      return r._platform.localStoreSet(e, t);
                    },
                  })),
                  (r._spanRecords = []),
                  (r._counters = {
                    "internal.errors": 0,
                    "internal.warnings": 0,
                    "spans.dropped": 0,
                    "logs.dropped": 0,
                    "logs.keys.over_limit": 0,
                    "logs.values.over_limit": 0,
                    "reports.errors.send": 0,
                  }),
                  (r._internalLogs = []),
                  (r._flushIsActive = !1),
                  r.addPlugin(n(29)),
                  r.addPlatformPlugins(t),
                  r.setPlatformOptions(t),
                  t && r.options(t),
                  r._setupReportOnExit(),
                  r._info("Tracer created with guid " + r._runtimeGUID),
                  r.startPlugins(),
                  r
                );
              }
              return (
                (function (t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                o(e, [
                  {
                    key: "_delegateEventEmitterMethods",
                    value: function () {
                      var t = this;
                      (this._ee = new i.default()),
                        (0, l.default)(
                          [
                            "addListener",
                            "emit",
                            "eventNames",
                            "getMaxListeners",
                            "listenerCount",
                            "listeners",
                            "on",
                            "once",
                            "prependListener",
                            "prependOnceListener",
                            "removeAllListeners",
                            "removeListener",
                            "setMaxListeners",
                          ],
                          function (e) {
                            t[e] = function () {
                              t._ee[e] && t._ee[e].apply(t._ee, arguments);
                            };
                          }
                        );
                    },
                  },
                  {
                    key: "_makeOptionsTable",
                    value: function () {
                      this.addOption("verbosity", {
                        type: "int",
                        min: 0,
                        max: 9,
                        defaultValue: 1,
                      }),
                        this.addOption("access_token", {
                          type: "string",
                          defaultValue: "",
                        }),
                        this.addOption("component_name", {
                          type: "string",
                          defaultValue: "",
                        }),
                        this.addOption("collector_host", {
                          type: "string",
                          defaultValue: "collector.lightstep.com",
                        }),
                        this.addOption("collector_port", {
                          type: "int",
                          defaultValue: 443,
                        }),
                        this.addOption("collector_path", {
                          type: "string",
                          defaultValue: "",
                        }),
                        this.addOption("collector_encryption", {
                          type: "string",
                          defaultValue: "tls",
                        }),
                        this.addOption("tags", {
                          type: "any",
                          defaultValue: {},
                        }),
                        this.addOption("max_reporting_interval_millis", {
                          type: "int",
                          defaultValue: 2500,
                        }),
                        this.addOption("disabled", {
                          type: "bool",
                          defaultValue: !1,
                        }),
                        this.addOption("max_span_records", {
                          type: "int",
                          defaultValue: 4096,
                        }),
                        this.addOption("default_span_tags", {
                          type: "any",
                          defaultValue: {},
                        }),
                        this.addOption("report_timeout_millis", {
                          type: "int",
                          defaultValue: 3e4,
                        }),
                        this.addOption("gzip_json_requests", {
                          type: "bool",
                          defaultValue: !0,
                        }),
                        this.addOption("disable_reporting_loop", {
                          type: "bool",
                          defaultValue: !1,
                        }),
                        this.addOption("disable_report_on_exit", {
                          type: "bool",
                          defaultValue: !1,
                        }),
                        this.addOption("delay_initial_report_millis", {
                          type: "int",
                          defaultValue: 1e3,
                        }),
                        this.addOption("error_throttle_millis", {
                          type: "int",
                          defaultValue: 6e4,
                        }),
                        this.addOption("certificate_verification", {
                          type: "bool",
                          defaultValue: !0,
                        }),
                        this.addOption("override_transport", {
                          type: "any",
                          defaultValue: null,
                        }),
                        this.addOption("silent", {
                          type: "bool",
                          defaultValue: !1,
                        }),
                        this.addOption("log_field_key_hard_limit", {
                          type: "int",
                          defaultValue: 256,
                        }),
                        this.addOption("log_field_value_hard_limit", {
                          type: "int",
                          defaultValue: 1024,
                        });
                    },
                  },
                  {
                    key: "_startSpan",
                    value: function (t, e) {
                      var n = this,
                        r = null;
                      if ((e = e || {}).references)
                        for (var o = 0; o < e.references.length; o++) {
                          var i = e.references[o],
                            s = i.type();
                          if (
                            s === this._opentracing.REFERENCE_CHILD_OF ||
                            s === this._opentracing.REFERENCE_FOLLOWS_FROM
                          ) {
                            var c = i.referencedContext();
                            if (!c) {
                              this._error(
                                "Span reference has an invalid context",
                                c
                              );
                              continue;
                            }
                            r = c;
                            break;
                          }
                        }
                      var p = r
                          ? r._traceGUID
                          : this.generateTraceGUIDForRootSpan(),
                        _ = new u.default(
                          this,
                          t,
                          new a.default(this._platform.generateUUID(), p)
                        );
                      return (
                        _.addTags(this._options.default_span_tags),
                        (0, l.default)(e, function (t, e) {
                          switch (e) {
                            case "references":
                              break;
                            case "startTime":
                              _.setBeginMicros(1e3 * t);
                              break;
                            case "tags":
                              _.addTags(t);
                              break;
                            default:
                              n._warn("Ignoring unknown field '" + e + "'");
                          }
                        }),
                        null !== r && _.setParentGUID(r._guid),
                        this.emit("start_span", _),
                        _
                      );
                    },
                  },
                  {
                    key: "_inject",
                    value: function (t, e, n) {
                      switch (e) {
                        case this._opentracing.FORMAT_HTTP_HEADERS:
                        case this._opentracing.FORMAT_TEXT_MAP:
                          this._injectToTextMap(t, n);
                          break;
                        case this._opentracing.FORMAT_BINARY:
                          this._error("Unsupported format: " + e);
                          break;
                        default:
                          this._error("Unknown format: " + e);
                      }
                    },
                  },
                  {
                    key: "_injectToTextMap",
                    value: function (t, e) {
                      return e
                        ? "object" != typeof e
                          ? void this._error(
                              "Unexpected '" +
                                typeof e +
                                "' FORMAT_TEXT_MAP carrier in call to inject"
                            )
                          : ((e[m + "spanid"] = t._guid),
                            (e[m + "traceid"] = t._traceGUID),
                            t.forEachBaggageItem(function (t, n) {
                              e["" + y + t] = n;
                            }),
                            (e[m + "sampled"] = "true"),
                            e)
                        : void this._error(
                            "Unexpected null FORMAT_TEXT_MAP carrier in call to inject"
                          );
                    },
                  },
                  {
                    key: "_extract",
                    value: function (t, e) {
                      switch (t) {
                        case this._opentracing.FORMAT_HTTP_HEADERS:
                        case this._opentracing.FORMAT_TEXT_MAP:
                          return this._extractTextMap(t, e);
                        case this._opentracing.FORMAT_BINARY:
                        default:
                          return this._error("Unsupported format: " + t), null;
                      }
                    },
                  },
                  {
                    key: "_extractTextMap",
                    value: function (t, e) {
                      var n = this,
                        r = new a.default(null, null),
                        o = 0;
                      return (
                        (0, l.default)(e, function (t, e) {
                          if ((e = e.toLowerCase()).substr(0, m.length) === m)
                            switch (e.substr(m.length)) {
                              case "traceid":
                                o++, (r._traceGUID = t);
                                break;
                              case "spanid":
                                o++, (r._guid = t);
                                break;
                              case "sampled":
                                break;
                              default:
                                n._error(
                                  "Unrecognized carrier key '" +
                                    e +
                                    "' with recognized prefix. Ignoring."
                                );
                            }
                        }),
                        0 === o
                          ? null
                          : o < 2
                          ? (this._error(
                              "Only found a partial SpanContext: " +
                                t +
                                ", " +
                                e
                            ),
                            null)
                          : ((0, l.default)(e, function (t, e) {
                              if (
                                (e = e.toLowerCase()).substr(0, y.length) === y
                              ) {
                                var n = e.substr(y.length);
                                r.setBaggageItem(n, t);
                              }
                            }),
                            r)
                      );
                    },
                  },
                  {
                    key: "flush",
                    value: function (t) {
                      return (
                        t || (t = function () {}),
                        this._options.disabled
                          ? (this._warn(
                              "Manual flush() called in disabled state."
                            ),
                            t(null))
                          : void this._flushReport(!0, !1, t)
                      );
                    },
                  },
                  {
                    key: "guid",
                    value: function () {
                      return this._runtimeGUID;
                    },
                  },
                  {
                    key: "verbosity",
                    value: function () {
                      var t = this._options.verbosity;
                      return void 0 === t ? 1 : t;
                    },
                  },
                  {
                    key: "generateTraceGUIDForRootSpan",
                    value: function () {
                      var t = this._platform.generateUUID();
                      return (
                        this._activeRootSpan &&
                          (t = this._activeRootSpan.traceGUID()),
                        t
                      );
                    },
                  },
                  {
                    key: "setPlatformOptions",
                    value: function (t) {
                      var e = this._platform.options(this) || {};
                      (0, l.default)(t, function (t, n) {
                        e[n] = t;
                      }),
                        this.options(e);
                    },
                  },
                  {
                    key: "addOption",
                    value: function (t, e) {
                      (e.name = t),
                        this._optionDescs.push(e),
                        (this._options[e.name] = e.defaultValue);
                    },
                  },
                  {
                    key: "options",
                    value: function (t) {
                      var e = this;
                      if (0 === arguments.length)
                        return (
                          console.assert(
                            "object" == typeof this._options,
                            "Internal error: _options field incorrect"
                          ),
                          this._options
                        );
                      if ("object" != typeof t)
                        throw new Error(
                          "options() must be called with an object: type was " +
                            typeof t
                        );
                      0 === t.collector_port && delete t.collector_port,
                        void 0 !== t.collector_encryption &&
                          void 0 === t.collector_port &&
                          (t.collector_port =
                            "none" !== t.collector_encryption ? 443 : 80);
                      var n = {},
                        r = {};
                      for (var o in ((0, l.default)(
                        this._optionDescs,
                        function (o) {
                          e._setOptionInternal(n, r, t, o);
                        }
                      ),
                      t))
                        void 0 === n[o] &&
                          void 0 === r[o] &&
                          this._warn(
                            "Invalid option " + o + " with value " + t[o]
                          );
                      this._initReportingDataIfNeeded(n),
                        this._reportingLoopActive || this._startReportingLoop(),
                        this.verbosity() >= 3 &&
                          (function () {
                            var t = "",
                              r = 0;
                            (0, l.default)(n, function (e, n) {
                              (t +=
                                "\t" +
                                JSON.stringify(n) +
                                ": " +
                                JSON.stringify(e.newValue) +
                                "\n"),
                                r++;
                            }),
                              r > 0 && e._debug("Options modified:\n" + t);
                          })(),
                        this.emit("options", n, this._options, this);
                    },
                  },
                  {
                    key: "_setOptionInternal",
                    value: function (t, e, n, r) {
                      var o = r.name,
                        i = n[o],
                        s = typeof i;
                      if (void 0 !== i) {
                        switch (r.type) {
                          case "any":
                            break;
                          case "bool":
                            if (!0 !== i && !1 !== i)
                              return void this._error(
                                "Invalid boolean option '" + o + "' '" + i + "'"
                              );
                            break;
                          case "int":
                            if ("number" !== s || Math.floor(i) !== i)
                              return void this._error(
                                "Invalid int option '" + o + "' '" + i + "'"
                              );
                            if (
                              void 0 !== r.min &&
                              void 0 !== r.max &&
                              !(i >= r.min && i <= r.max)
                            )
                              return void this._error(
                                "Option '" +
                                  o +
                                  "' out of range '" +
                                  i +
                                  "' is not between " +
                                  r.min +
                                  " and " +
                                  r.max
                              );
                            break;
                          case "string":
                            switch (s) {
                              case "string":
                                break;
                              case "number":
                                i = f.toString(i);
                                break;
                              default:
                                return void this._error(
                                  "Invalid string option " + o + " " + i
                                );
                            }
                            break;
                          case "array":
                            if (
                              "[object Array]" !==
                              Object.prototype.toString.call(i)
                            )
                              return void this._error(
                                "Invalid type for array option " +
                                  o +
                                  ": found '" +
                                  s +
                                  "'"
                              );
                            break;
                          default:
                            return void this._error(
                              "Unknown option type '" + r.type + "'"
                            );
                        }
                        var a = this._options[o];
                        if (void 0 === a)
                          throw new Error("Attempt to set unknown option " + o);
                        if ("object" !== s && a === i) return void (e[o] = !0);
                        (t[o] = { oldValue: a, newValue: i }),
                          (this._options[o] = i);
                      }
                    },
                  },
                  {
                    key: "_initReportingDataIfNeeded",
                    value: function (t) {
                      var e = this;
                      if (null === this._thriftAuth)
                        this._options.access_token.length > 0 &&
                          this._options.component_name.length > 0 &&
                          (function () {
                            (e._runtimeGUID = e._platform.runtimeGUID(
                              e._options.component_name
                            )),
                              (e._thriftAuth = new c.crouton_thrift.Auth({
                                access_token: e._options.access_token,
                              }));
                            var t = {};
                            (0, l.default)(e._options.tags, function (n, r) {
                              return "string" != typeof n
                                ? void e._error(
                                    "Tracer tag value is not a string: key=" + r
                                  )
                                : void (t[r] = n);
                            }),
                              (t["lightstep.tracer_version"] = v.version);
                            var n = e._platform.tracerTags();
                            (0, l.default)(n, function (e, n) {
                              t[n] = e;
                            });
                            var r = [];
                            (0, l.default)(t, function (t, e) {
                              r.push(
                                new c.crouton_thrift.KeyValue({
                                  Key: f.toString(e),
                                  Value: f.toString(t),
                                })
                              );
                            }),
                              (e._thriftRuntime = new c.crouton_thrift.Runtime({
                                guid: e._runtimeGUID,
                                start_micros: e._startMicros,
                                group_name: e._options.component_name,
                                attrs: r,
                              })),
                              e._info("Initializing thrift reporting data", {
                                component_name: e._options.component_name,
                                access_token: e._thriftAuth.access_token,
                              }),
                              e.emit("reporting_initialized");
                          })();
                      else {
                        if (!this._thriftRuntime)
                          return this._error(
                            "Inconsistent state: thrift auth initialized without runtime."
                          );
                        if (t.access_token)
                          throw new Error(
                            "Cannot change access_token after it has been set."
                          );
                        if (t.component_name)
                          throw new Error(
                            "Cannot change component_name after it has been set."
                          );
                        if (t.collector_host)
                          throw new Error(
                            "Cannot change collector_host after the connection is established"
                          );
                        if (t.collector_port)
                          throw new Error(
                            "Cannot change collector_port after the connection is established"
                          );
                        if (t.collector_path)
                          throw new Error(
                            "Cannot change collector_path after the connection is established"
                          );
                        if (t.collector_encryption)
                          throw new Error(
                            "Cannot change collector_encryption after the connection is established"
                          );
                      }
                    },
                  },
                  {
                    key: "addPlatformPlugins",
                    value: function (t) {
                      var e = this,
                        n = this._platform.plugins(t);
                      (0, l.default)(n, function (t) {
                        e.addPlugin(t);
                      });
                    },
                  },
                  {
                    key: "addPlugin",
                    value: function (t) {
                      var e = t.name();
                      this._plugins[e] ||
                        ((this._plugins[e] = t), t.addOptions(this));
                    },
                  },
                  {
                    key: "startPlugins",
                    value: function () {
                      var t = this;
                      (0, l.default)(this._plugins, function (e, n) {
                        t._plugins[n].start(t);
                      });
                    },
                  },
                  {
                    key: "addActiveRootSpan",
                    value: function (t) {
                      (this._activeRootSpanSet[t._guid] = t),
                        this._setActiveRootSpanToYoungest();
                    },
                  },
                  {
                    key: "removeActiveRootSpan",
                    value: function (t) {
                      delete this._activeRootSpanSet[t._guid],
                        this._setActiveRootSpanToYoungest();
                    },
                  },
                  {
                    key: "_setActiveRootSpanToYoungest",
                    value: function () {
                      var t = this;
                      (this._activeRootSpan = null),
                        (0, l.default)(this._activeRootSpanSet, function (e) {
                          (!t._activeRootSpan ||
                            e._beginMicros > t._activeRootSpan._beginMicros) &&
                            (t._activeRootSpan = e);
                        });
                    },
                  },
                  {
                    key: "_objectToUint8Array",
                    value: function (t) {
                      var e = void 0;
                      try {
                        e = encodeURIComponent(JSON.stringify(t));
                      } catch (t) {
                        return (
                          this._error("Could not binary encode carrier data."),
                          null
                        );
                      }
                      for (
                        var n = new ArrayBuffer(e.length),
                          r = new Uint8Array(n),
                          o = 0;
                        o < e.length;
                        o++
                      ) {
                        var i = e.charCodeAt(o);
                        if (!(i >= 0 && i <= 255))
                          return this._error("Unexpected character code"), null;
                        r[o] = i;
                      }
                      return r;
                    },
                  },
                  {
                    key: "_uint8ArrayToObject",
                    value: function (t) {
                      if (!t) return this._error("Array is null"), null;
                      for (var e = "", n = 0; n < t.length; n++)
                        e += String.fromCharCode(t[n]);
                      try {
                        return JSON.parse(decodeURIComponent(e));
                      } catch (t) {
                        return (
                          this._error("Could not decode binary data."), null
                        );
                      }
                    },
                  },
                  {
                    key: "log",
                    value: function () {
                      return new _(this);
                    },
                  },
                  {
                    key: "_clearBuffers",
                    value: function () {
                      (this._spanRecords = []), (this._internalLogs = []);
                      var t = {};
                      (0, l.default)(this._counters, function (e, n) {
                        t[n] = 0;
                      }),
                        (this._counters = t);
                    },
                  },
                  {
                    key: "_buffersAreEmpty",
                    value: function () {
                      if (this._spanRecords.length > 0) return !1;
                      if (this._internalLogs.length > 0) return !1;
                      var t = !0;
                      return (
                        (0, l.default)(this._counters, function (e) {
                          e > 0 && (t = !1);
                        }),
                        t
                      );
                    },
                  },
                  {
                    key: "_addSpanRecord",
                    value: function (t) {
                      this._internalAddSpanRecord(t),
                        this.emit("span_added", t);
                    },
                  },
                  {
                    key: "_internalAddSpanRecord",
                    value: function (t) {
                      if (t)
                        if (
                          this._spanRecords.length >=
                          this._options.max_span_records
                        ) {
                          var e = Math.floor(
                            this._spanRecords.length * Math.random()
                          );
                          (this._spanRecords[e] = t),
                            this._counters["spans.dropped"]++;
                        } else this._spanRecords.push(t);
                      else this._error("Attempt to add null record to buffer");
                    },
                  },
                  {
                    key: "_restoreRecords",
                    value: function (t, e, n) {
                      var r = this;
                      (0, l.default)(t, function (t) {
                        r._internalAddSpanRecord(t);
                      });
                      var o = this._internalLogs;
                      this._internalLogs = [];
                      var i = e.concat(o);
                      (0, l.default)(i, function (t) {
                        r._pushInternalLog(t);
                      }),
                        (0, l.default)(n, function (t) {
                          r._counters[t.Name]
                            ? (r._counters[t.Name] += t.Value)
                            : r._error("Bad counter name: " + t.Name);
                        });
                    },
                  },
                  {
                    key: "_setupReportOnExit",
                    value: function () {
                      var t = this;
                      if (this._options.disable_report_on_exit)
                        this._debug("report-on-exit is disabled.");
                      else {
                        var e = 0;
                        this._platform.onBeforeExit(function () {
                          e++ > 0 ||
                            (t._info("Final flush before exit."),
                            t._flushReport(!1, !0, function (e) {
                              e &&
                                t._warn("Final report before exit failed", {
                                  error: e,
                                  unflushed_spans: t._spanRecords.length,
                                  buffer_youngest_micros:
                                    t._reportYoungestMicros,
                                });
                            }));
                        });
                      }
                    },
                  },
                  {
                    key: "_startReportingLoop",
                    value: function () {
                      var t = this;
                      if (this._options.disabled)
                        this._info(
                          "Not starting reporting loop: instrumentation is disabled."
                        );
                      else if (this._options.disable_reporting_loop)
                        this._info(
                          "Not starting reporting loop: reporting loop is disabled."
                        );
                      else if (null !== this._thriftAuth) {
                        if (this._reportingLoopActive)
                          return void this._info(
                            "Reporting loop already started!"
                          );
                        this._info(
                          "Starting reporting loop:",
                          this._thriftRuntime
                        ),
                          (this._reportingLoopActive = !0);
                        var e = 0;
                        this._platform.onBeforeExit(function () {
                          e++ > 0 || t._stopReportingLoop();
                        });
                        var n = function () {
                            t._enqueueNextReport(function (e) {
                              t._reportingLoopActive && n();
                            });
                          },
                          r = Math.floor(
                            Math.random() *
                              this._options.delay_initial_report_millis
                          );
                        g.detachedTimeout(function () {
                          n();
                        }, r);
                      }
                    },
                  },
                  {
                    key: "_stopReportingLoop",
                    value: function () {
                      this._debug("Stopping reporting loop"),
                        (this._reportingLoopActive = !1),
                        clearTimeout(this._reportTimer),
                        (this._reportTimer = null);
                    },
                  },
                  {
                    key: "_enqueueNextReport",
                    value: function (t) {
                      var e = this;
                      if (!this._reportTimer) {
                        var n = this._options.max_reporting_interval_millis;
                        0 === this._reportErrorStreak &&
                          this._useClockState &&
                          !this._clockState.isReady() &&
                          (n = Math.min(d.CLOCK_STATE_REFRESH_INTERVAL_MS, n));
                        var r =
                            (1 +
                              Math.min(
                                7,
                                Math.max(0, this._reportErrorStreak)
                              )) *
                            n,
                          o = 0.5 * Math.random() - 0.25 + 1,
                          i = Math.floor(Math.max(0, o * r));
                        this._debug("Delaying next flush for " + i + "ms"),
                          (this._reportTimer = g.detachedTimeout(function () {
                            (e._reportTimer = null), e._flushReport(!1, !1, t);
                          }, i));
                      }
                    },
                  },
                  {
                    key: "_flushReport",
                    value: function (t, e, n) {
                      var r = this;
                      n = n || function (t) {};
                      var o = this._clockState.isReady(),
                        i = this._clockState.offsetMicros();
                      this._debug("time correction state", {
                        offset_micros: i,
                        active_samples: this._clockState.activeSampleCount(),
                        ready: o,
                      });
                      var s = this._spanRecords,
                        a = this._counters,
                        u = this._internalLogs;
                      if (!this._useClockState || t || o || e) {
                        if (this._buffersAreEmpty())
                          return this._debug("Skipping empty report"), n(null);
                        this._clearBuffers(),
                          this._debug(
                            "Flushing report (" + s.length + " spans)"
                          );
                      } else
                        this._debug(
                          "Flushing empty report to prime clock state"
                        ),
                          (s = []),
                          (a = {}),
                          (u = []);
                      this._transport.ensureConnection(this._options),
                        console.assert(
                          null !== this._runtimeGUID,
                          "No runtime GUID for Tracer"
                        ),
                        (0, l.default)(s, function (t) {
                          t.runtime_guid = r._runtimeGUID;
                        });
                      var p = [];
                      (0, l.default)(a, function (t, e) {
                        0 !== t &&
                          p.push(
                            new c.crouton_thrift.MetricsSample({
                              name: f.toString(e),
                              double_value: f.toNumber(t),
                            })
                          );
                      });
                      var _ = this._useClockState ? i : 0,
                        d = this._platform.nowMicros(),
                        h = new c.crouton_thrift.ReportRequest({
                          runtime: this._thriftRuntime,
                          oldest_micros: this._reportYoungestMicros,
                          youngest_micros: d,
                          span_records: s,
                          internal_logs: u,
                          internal_metrics: new c.crouton_thrift.Metrics({
                            counts: p,
                          }),
                          timestamp_offset_micros: _,
                        });
                      this.emit("prereport", h);
                      var v = this._platform.nowMicros();
                      this._transport.report(
                        e,
                        this._thriftAuth,
                        h,
                        function (t, o) {
                          var i = r._platform.nowMicros(),
                            s = (d - h.oldest_micros) / 1e6;
                          if (t) {
                            r._reportErrorStreak++;
                            var a;
                            (a = t.message ? "" + t.message : "" + t),
                              r._warn("Error in report: " + a, {
                                last_report_seconds_ago: s,
                              }),
                              r._restoreRecords(
                                h.span_records,
                                h.internal_logs,
                                h.counters
                              ),
                              r._counters["reports.errors.send"]++,
                              r.emit("report_error", t, {
                                error: t,
                                streak: r._reportErrorStreak,
                                detached: e,
                              });
                          } else
                            r.verbosity() >= 4 &&
                              r._debug(
                                "Report flushed for last " + s + " seconds",
                                { spans_reported: h.span_records.length }
                              ),
                              (r._reportErrorStreak = 0),
                              (r._reportYoungestMicros = d),
                              o
                                ? (o.timing &&
                                  o.timing.receive_micros &&
                                  o.timing.transmit_micros
                                    ? r._clockState.addSample(
                                        v,
                                        o.timing.receive_micros,
                                        o.timing.transmit_micros,
                                        i
                                      )
                                    : (r._useClockState = !1),
                                  o.errors &&
                                    o.errors.length > 0 &&
                                    r._warn("Errors in report", o.errors))
                                : (r._useClockState = !1),
                              r.emit("report", h, o);
                          return n(t);
                        }
                      );
                    },
                  },
                  {
                    key: "stats",
                    value: function () {
                      return { counters: this._counters };
                    },
                  },
                  {
                    key: "_debug",
                    value: function (t, e) {
                      this.verbosity() < 4 ||
                        this._printToConsole(
                          "log",
                          "[LightStep:DEBUG] " + t,
                          e
                        );
                    },
                  },
                  {
                    key: "_info",
                    value: function (t, e) {
                      this.verbosity() < 3 ||
                        this._printToConsole("log", "[LightStep:INFO] " + t, e);
                    },
                  },
                  {
                    key: "_warn",
                    value: function (t, e) {
                      this._counters["internal.warnings"]++,
                        this.verbosity() < 3 ||
                          this._printToConsole(
                            "warn",
                            "[LightStep:WARN] " + t,
                            e
                          );
                    },
                  },
                  {
                    key: "_error",
                    value: function (t, e) {
                      this._counters["internal.errors"]++;
                      var n = this.log()
                        .level(d.LOG_ERROR)
                        .message(t)
                        .payload(e)
                        .record();
                      this._pushInternalLog(n);
                      var r = this.verbosity();
                      if (0 !== r) {
                        var o = Date.now();
                        if (1 === r) {
                          if (
                            o <
                            this._lastVisibleErrorMillis +
                              this._options.error_throttle_millis
                          )
                            return void this._skippedVisibleErrors++;
                          if (this._skippedVisibleErrors > 0) {
                            var i =
                              this._skippedVisibleErrors +
                              " errors masked since last logged error. Increase 'verbosity' option to see all errors.";
                            this._printToConsole(
                              "error",
                              "[LightStep:ERROR] " + i,
                              e
                            );
                          }
                        }
                        this._printToConsole(
                          "error",
                          "[LightStep:ERROR] " + t,
                          e
                        ),
                          (this._lastVisibleErrorMillis = o),
                          (this._skippedVisibleErrors = 0);
                      }
                    },
                  },
                  {
                    key: "_printToConsole",
                    value: function (t, e, n) {
                      this._options.silent ||
                        (void 0 !== n ? console[t](e, n) : console[t](e));
                    },
                  },
                  {
                    key: "_pushInternalLog",
                    value: function (t) {
                      t &&
                        (this._internalLogs.length >= 20
                          ? ((t.message =
                              "MAX_INTERNAL_LOGS limit hit. Last error: " +
                              t.message),
                            (this._internalLogs[this._internalLogs.length - 1] =
                              t))
                          : this._internalLogs.push(t));
                    },
                  },
                ]),
                e
              );
            })(s.Tracer);
          (e.default = w), (t.exports = e.default);
        },
        function (t, e, n) {
          "use strict";
          var r = (function () {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            o = (function (t) {
              return t && t.__esModule ? t : { default: t };
            })(n(1)),
            i = (function () {
              function t(e) {
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this._nowMicros = e.nowMicros),
                  (this._localStoreGet = e.localStoreGet),
                  (this._localStoreSet = e.localStoreSet),
                  (this._samples = []),
                  (this._currentOffsetMicros = 0),
                  (this._currentOffsetAge = 8);
                var n = this._localStoreGet();
                n &&
                  n.timestamp_micros &&
                  n.timestamp_micros > this._nowMicros() - 36e8 &&
                  (this._samples = n.samples.slice(-8)),
                  this.update();
              }
              return (
                r(t, [
                  {
                    key: "addSample",
                    value: function (t, e, n, r) {
                      var o = Number.MAX_VALUE,
                        i = 0;
                      t > 0 &&
                        e > 0 &&
                        n > 0 &&
                        r > 0 &&
                        ((o = r - t - (n - e)), (i = (e - t + (n - r)) / 2)),
                        8 === this._samples.length && this._samples.shift(),
                        this._samples.push({ delayMicros: o, offsetMicros: i }),
                        this._currentOffsetAge++,
                        this._localStoreSet({
                          timestamp_micros: this._nowMicros(),
                          samples: this._samples,
                        }),
                        this.update();
                    },
                  },
                  {
                    key: "update",
                    value: function () {
                      var t = Number.MAX_VALUE,
                        e = 0;
                      if (
                        ((0, o.default)(this._samples, function (n) {
                          n.delayMicros < t &&
                            ((t = n.delayMicros), (e = n.offsetMicros));
                        }),
                        e !== this._currentOffsetMicros)
                      ) {
                        var n = 0;
                        (0, o.default)(this._samples, function (t) {
                          n += Math.pow(e - t.offsetMicros, 2);
                        }),
                          (n = Math.sqrt(n / this._samples.length));
                        (this._currentOffsetAge > 7 ||
                          Math.abs(this._currentOffsetMicros - e) < 3 * n) &&
                          ((this._currentOffsetMicros = e),
                          (this._currentOffsetAge = 0));
                      }
                    },
                  },
                  {
                    key: "offsetMicros",
                    value: function () {
                      return Math.floor(this._currentOffsetMicros);
                    },
                  },
                  {
                    key: "isReady",
                    value: function () {
                      return this._samples.length > 3;
                    },
                  },
                  {
                    key: "activeSampleCount",
                    value: function () {
                      return this._samples.length;
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = i;
        },
        function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = (function () {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            r = (function () {
              function t() {
                !(function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t);
              }
              return (
                n(t, [
                  {
                    key: "detachedTimeout",
                    value: function (t, e) {
                      var n = setTimeout(t, e);
                      return n.unref && n.unref(), n;
                    },
                  },
                ]),
                t
              );
            })();
          (e.default = new r()), (t.exports = e.default);
        },
        function (t, e, n) {
          "use strict";
          var r = (function () {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            o = (function (t) {
              return t && t.__esModule ? t : { default: t };
            })(n(1)),
            i = (function () {
              function t() {
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this._inited = !1),
                  (this._span = null);
              }
              return (
                r(t, [
                  {
                    key: "name",
                    value: function () {
                      return "instrument_page_load";
                    },
                  },
                  {
                    key: "addOptions",
                    value: function (t) {
                      t.addOption("instrument_page_load", {
                        type: "bool",
                        defaultValue: !1,
                      });
                    },
                  },
                  {
                    key: "start",
                    value: function (t) {
                      this._inited ||
                        ((this._inited = !0),
                        "object" != typeof window ||
                          "object" != typeof document) ||
                        (t.options().instrument_page_load &&
                          (this._ensureSpanStarted(t),
                          document.addEventListener(
                            "readystatechange",
                            this._handleReadyStateChange.bind(this)
                          )));
                    },
                  },
                  { key: "stop", value: function () {} },
                  {
                    key: "_ensureSpanStarted",
                    value: function (t) {
                      this._span ||
                        ((this._span = t.startSpan("document/load")),
                        t.addActiveRootSpan(this._span));
                    },
                  },
                  {
                    key: "_handleReadyStateChange",
                    value: function () {
                      if (this._span) {
                        var t = this._span,
                          e = document.readyState,
                          n = void 0;
                        "complete" === e &&
                          ((n = {}),
                          window.performance &&
                            performance.timing &&
                            (this._addTimingSpans(t, performance.timing),
                            (n["window.performance.timing"] =
                              performance.timing))),
                          t.logEvent("document.readystatechange " + e, n),
                          "complete" === e &&
                            (t.tracer() &&
                              t.tracer().removeActiveRootSpan(t.tracer()),
                            t.finish());
                      }
                    },
                  },
                  {
                    key: "_copyNavigatorProperties",
                    value: function (t) {
                      var e = {};
                      for (var n in t)
                        try {
                          var r = t[n];
                          switch (n) {
                            case "plugins":
                              for (var o = [], i = 0; i < r.length; i++) {
                                var s = r.item(i);
                                o.push({
                                  name: s.name,
                                  description: s.description,
                                });
                              }
                              e[n] = o;
                              break;
                            case "mimeTypes":
                              for (var a = [], u = 0; u < r.length; u++) {
                                var l = r.item(u);
                                a.push({
                                  type: l.type,
                                  description: l.description,
                                  suffixes: l.suffixes,
                                });
                              }
                              e[n] = a;
                              break;
                            default:
                              e[n] = r;
                          }
                        } catch (t) {}
                      return e;
                    },
                  },
                  {
                    key: "_addTimingSpans",
                    value: function (t, e) {
                      var n = this;
                      if (t) {
                        if (
                          (t.setTag("user_agent", navigator.userAgent),
                          (0, o.default)(e, function (e, r) {
                            if ("number" == typeof e && 0 !== e) {
                              var o = void 0;
                              "navigationStart" === r &&
                                "object" == typeof navigator &&
                                (o = {
                                  navigator:
                                    n._copyNavigatorProperties(navigator),
                                }),
                                t.log(
                                  { message: "document " + r, payload: o },
                                  e
                                );
                            }
                          }),
                          window.chrome && window.chrome.loadTimes)
                        ) {
                          var r = window.chrome.loadTimes();
                          r &&
                            t.log(
                              {
                                message: "window.chrome.loadTimes()",
                                payload: r,
                              },
                              e.domComplete
                            );
                        }
                        t.setBeginMicros(1e3 * e.navigationStart),
                          t
                            .tracer()
                            .startSpan("document/time_to_first_byte", {
                              childOf: t,
                            })
                            .setBeginMicros(1e3 * e.requestStart)
                            .setEndMicros(1e3 * e.responseStart)
                            .finish(),
                          t
                            .tracer()
                            .startSpan("document/response_transfer", {
                              childOf: t,
                            })
                            .setBeginMicros(1e3 * e.responseStart)
                            .setEndMicros(1e3 * e.responseEnd)
                            .finish(),
                          t
                            .tracer()
                            .startSpan("document/dom_load", { childOf: t })
                            .setBeginMicros(1e3 * e.domLoading)
                            .setEndMicros(1e3 * e.domInteractive)
                            .finish();
                      }
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = new i();
        },
        function (t, e, n) {
          "use strict";
          function r() {
            if ("undefined" == typeof document || !document.cookie) return null;
            for (
              var t = document.cookie.split(";"), e = {}, n = 0, r = 0;
              r < t.length;
              r++
            ) {
              var o = t[r].split("=", 2);
              if (2 === o.length) {
                var i = o[0].replace(/^\s+/, "").replace(/\s+$/, "");
                e[i] = decodeURIComponent(o[1]);
                try {
                  e[i] = JSON.parse(e[i]);
                } catch (t) {}
                n++;
              }
            }
            return n > 0 ? e : null;
          }
          function o(t) {
            for (
              var e = t.getAllResponseHeaders().replace(/\s+$/, "").split(/\n/),
                n = 0;
              n < e.length;
              n++
            )
              e[n] = e[n]
                .replace(/\r/g, "")
                .replace(/^\s+/, "")
                .replace(/\s+$/, "");
            return e;
          }
          var i = (function () {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            s = (function (t) {
              return t && t.__esModule ? t : { default: t };
            })(n(1)),
            a = (function (t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return (e.default = t), e;
            })(n(6)),
            u = {};
          "object" == typeof window &&
            void 0 !== window.XMLHttpRequest &&
            (u = {
              XMLHttpRequest,
              open: XMLHttpRequest.prototype.open,
              send: XMLHttpRequest.prototype.send,
              setRequestHeader: XMLHttpRequest.prototype.setRequestHeader,
            });
          var l = (function () {
            function t() {
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this._enabled = this._isValidContext()),
                (this._proxyInited = !1),
                (this._internalExclusions = []),
                (this._tracer = null),
                (this._handleOptions = this._handleOptions.bind(this)),
                this._enabled;
            }
            return (
              i(t, [
                {
                  key: "name",
                  value: function () {
                    return "instrument_xhr";
                  },
                },
                {
                  key: "addOptions",
                  value: function (t) {
                    t.addOption("xhr_instrumentation", {
                      type: "bool",
                      defaultValue: !1,
                    }),
                      t.addOption("xhr_url_inclusion_patterns", {
                        type: "array",
                        defaultValue: [/.*/],
                      }),
                      t.addOption("xhr_url_exclusion_patterns", {
                        type: "array",
                        defaultValue: [],
                      });
                  },
                },
                {
                  key: "start",
                  value: function (t) {
                    if (this._enabled) {
                      this._tracer = t;
                      var e = t.options();
                      this._addServiceHostToExclusions(e),
                        this._handleOptions({}, e),
                        t.on("options", this._handleOptions);
                    }
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    if (this._enabled) {
                      var t = u.XMLHttpRequest.prototype;
                      (t.open = u.open), (t.send = u.send);
                    }
                  },
                },
                {
                  key: "_handleOptions",
                  value: function (t, e) {
                    if (
                      (t.collector_host && this._addServiceHostToExclusions(e),
                      !this._proxyInited && e.xhr_instrumentation)
                    ) {
                      this._proxyInited = !0;
                      var n = u.XMLHttpRequest.prototype;
                      (n.setRequestHeader = this._instrumentSetRequestHeader()),
                        (n.open = this._instrumentOpen()),
                        (n.send = this._instrumentSend());
                    }
                  },
                },
                {
                  key: "_addServiceHostToExclusions",
                  value: function (t) {
                    function e(t) {
                      return ("" + t).replace(
                        /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
                        "\\$&"
                      );
                    }
                    if (0 !== t.collector_host.length) {
                      var n = e(t.collector_host),
                        r = e(t.collector_port),
                        o = [new RegExp("^https?://" + n + ":" + r)];
                      "80" === r
                        ? o.push(new RegExp("^http://" + n))
                        : "443" === r && o.push(new RegExp("^https://" + n)),
                        (this._internalExclusions = o);
                    }
                  },
                },
                {
                  key: "_isValidContext",
                  value: function () {
                    return (
                      "undefined" != typeof window &&
                      !!window.XMLHttpRequest &&
                      !!window.XMLHttpRequest.prototype
                    );
                  },
                },
                {
                  key: "_instrumentSetRequestHeader",
                  value: function () {
                    return function (t, e) {
                      return (
                        (this.__requestHeaders = this.__requestHeaders || {}),
                        (this.__requestHeaders[t] = e),
                        u.setRequestHeader.apply(this, arguments)
                      );
                    };
                  },
                },
                {
                  key: "_instrumentOpen",
                  value: function () {
                    var t = this,
                      e = this._tracer;
                    return function (n, i, a, l, c) {
                      if (!t._shouldTrace(e, this, i))
                        return u.open.apply(this, arguments);
                      var p = e.startSpan("XMLHttpRequest");
                      e.addActiveRootSpan(p),
                        (this.__tracer_span = p),
                        (this.__tracer_url = i);
                      var _ = { method: n, url: i, async: a, user: l };
                      i && (_.url_pathname = i.split("?")[0]);
                      var f = {};
                      (0, s.default)(_, function (t, e) {
                        f[e] = t;
                      }),
                        (f.cookies = r());
                      var d = void 0 === a || a;
                      d &&
                        this.addEventListener("readystatechange", function () {
                          if (0 === this.readyState)
                            p.log({ readyState: 0, event: "unsent" });
                          else if (1 === this.readyState)
                            p.log({ readyState: 1, event: "sending" });
                          else if (2 === this.readyState)
                            p.log({
                              readyState: 2,
                              event: "headers received",
                              method: n,
                              url: i,
                              openPayload: f,
                              headers: o(this),
                            }),
                              p.addTags(_);
                          else if (3 === this.readyState)
                            p.log({ readyState: 3, event: "loading" });
                          else if (4 === this.readyState) {
                            var t = this.responseType;
                            p.log({
                              readyState: 4,
                              url: i,
                              method: n,
                              headers: o(this),
                              status: this.status,
                              statusText: this.statusText,
                              responseType: t,
                            }),
                              e.removeActiveRootSpan(p),
                              p.finish();
                          } else p.log({ readyState: this.readyState });
                        });
                      var h = u.open.apply(this, arguments);
                      return d || (e.removeActiveRootSpan(p), p.finish()), h;
                    };
                  },
                },
                {
                  key: "_instrumentSend",
                  value: function () {
                    var t = this,
                      e = this._tracer;
                    return function () {
                      var n = this;
                      if (!t._shouldTrace(e, this, this.__tracer_url))
                        return u.send.apply(this, arguments);
                      var r = this.__tracer_span;
                      if (!r) return u.send.apply(this, arguments);
                      var o = Array.prototype.slice.call(arguments),
                        i = void 0;
                      if (1 === o.length) {
                        o[0] && o[0].length && (i = o[0].length);
                        try {
                          o = JSON.parse(o[0]);
                        } catch (t) {}
                      }
                      var s = void 0 === i ? "" : ", data length=" + i;
                      r.log({ event: "send", data_length: s });
                      var l = {};
                      return (
                        e.inject(r.context(), a.FORMAT_HTTP_HEADERS, l),
                        Object.keys(l).forEach(function (t) {
                          u.setRequestHeader.call(n, t, l[t]);
                        }),
                        u.send.apply(this, arguments)
                      );
                    };
                  },
                },
                {
                  key: "_shouldTrace",
                  value: function (t, e, n) {
                    if (!t) return !1;
                    var r = t.options();
                    if (r.disabled) return !1;
                    if (!n) return !1;
                    for (var o in this._internalExclusions)
                      if (
                        this._internalExclusions.hasOwnProperty(o) &&
                        this._internalExclusions[o].test(n)
                      )
                        return !1;
                    var i = !1;
                    for (var s in r.xhr_url_inclusion_patterns)
                      if (
                        r.xhr_url_inclusion_patterns.hasOwnProperty(s) &&
                        r.xhr_url_inclusion_patterns[s].test(n)
                      ) {
                        i = !0;
                        break;
                      }
                    if (!i) return !1;
                    for (var a in r.xhr_url_exclusion_patterns)
                      if (
                        r.xhr_url_exclusion_patterns.hasOwnProperty(a) &&
                        r.xhr_url_exclusion_patterns[a].test(n)
                      )
                        return !1;
                    return !0;
                  },
                },
              ]),
              t
            );
          })();
          t.exports = new l();
        },
        function (t, e, n) {
          "use strict";
          var r = (function () {
              function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              }
              return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e;
              };
            })(),
            o = n(3),
            i = (function () {
              function t() {
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                  (this._enabled = !1),
                  (this._tracer = null),
                  (this._optionsCb = this._handleOptions.bind(this)),
                  (this._logAddedCb = this._handleLogAdded.bind(this));
              }
              return (
                r(t, [
                  {
                    key: "name",
                    value: function () {
                      return "log_to_console";
                    },
                  },
                  {
                    key: "addOptions",
                    value: function (t) {
                      t.addOption("log_to_console", {
                        type: "bool",
                        defaultValue: !1,
                      }),
                        t.on("options", this._optionsCb);
                    },
                  },
                  {
                    key: "start",
                    value: function (t, e) {
                      this._tracer = t;
                    },
                  },
                  {
                    key: "stop",
                    value: function () {
                      this._tracer.removeListener("options", this._optionsCb);
                    },
                  },
                  {
                    key: "_handleOptions",
                    value: function (t, e, n) {
                      var r = e.log_to_console;
                      this._enabled !== r &&
                        ((this._enabled = r),
                        this._enabled
                          ? n.on("log_added", this._logAddedCb)
                          : n.removeListener("log_added", this._logAddedCb));
                    },
                  },
                  {
                    key: "_handleLogAdded",
                    value: function (t) {
                      var e = o.LOG_STRING_TO_LEVEL[t.level],
                        n = t.message;
                      if (n) {
                        var r = t.payload_json;
                        if (r)
                          try {
                            r = JSON.parse(r);
                          } catch (t) {}
                        switch (e) {
                          case o.LOG_ERROR:
                          case o.LOG_FATAL:
                            void 0 !== r
                              ? console.error(n, r)
                              : console.error(n);
                            break;
                          case o.LOG_WARN:
                            void 0 !== r ? console.warn(n, r) : console.warn(n);
                            break;
                          case o.LOG_INFO:
                          default:
                            void 0 !== r ? console.log(n, r) : console.log(n);
                        }
                      }
                    },
                  },
                ]),
                t
              );
            })();
          t.exports = new i();
        },
        function (t, e, n) {
          "use strict";
          function r(t, e, n) {
            (this.fn = t), (this.context = e), (this.once = n || !1);
          }
          function o() {}
          var i = "function" != typeof Object.create && "~";
          (o.prototype._events = void 0),
            (o.prototype.listeners = function (t, e) {
              var n = i ? i + t : t,
                r = this._events && this._events[n];
              if (e) return !!r;
              if (!r) return [];
              if (r.fn) return [r.fn];
              for (var o = 0, s = r.length, a = new Array(s); o < s; o++)
                a[o] = r[o].fn;
              return a;
            }),
            (o.prototype.emit = function (t, e, n, r, o, s) {
              var a = i ? i + t : t;
              if (!this._events || !this._events[a]) return !1;
              var u,
                l,
                c = this._events[a],
                p = arguments.length;
              if ("function" == typeof c.fn) {
                switch (
                  (c.once && this.removeListener(t, c.fn, void 0, !0), p)
                ) {
                  case 1:
                    return c.fn.call(c.context), !0;
                  case 2:
                    return c.fn.call(c.context, e), !0;
                  case 3:
                    return c.fn.call(c.context, e, n), !0;
                  case 4:
                    return c.fn.call(c.context, e, n, r), !0;
                  case 5:
                    return c.fn.call(c.context, e, n, r, o), !0;
                  case 6:
                    return c.fn.call(c.context, e, n, r, o, s), !0;
                }
                for (l = 1, u = new Array(p - 1); l < p; l++)
                  u[l - 1] = arguments[l];
                c.fn.apply(c.context, u);
              } else {
                var _,
                  f = c.length;
                for (l = 0; l < f; l++)
                  switch (
                    (c[l].once && this.removeListener(t, c[l].fn, void 0, !0),
                    p)
                  ) {
                    case 1:
                      c[l].fn.call(c[l].context);
                      break;
                    case 2:
                      c[l].fn.call(c[l].context, e);
                      break;
                    case 3:
                      c[l].fn.call(c[l].context, e, n);
                      break;
                    default:
                      if (!u)
                        for (_ = 1, u = new Array(p - 1); _ < p; _++)
                          u[_ - 1] = arguments[_];
                      c[l].fn.apply(c[l].context, u);
                  }
              }
              return !0;
            }),
            (o.prototype.on = function (t, e, n) {
              var o = new r(e, n || this),
                s = i ? i + t : t;
              return (
                this._events || (this._events = i ? {} : Object.create(null)),
                this._events[s]
                  ? this._events[s].fn
                    ? (this._events[s] = [this._events[s], o])
                    : this._events[s].push(o)
                  : (this._events[s] = o),
                this
              );
            }),
            (o.prototype.once = function (t, e, n) {
              var o = new r(e, n || this, !0),
                s = i ? i + t : t;
              return (
                this._events || (this._events = i ? {} : Object.create(null)),
                this._events[s]
                  ? this._events[s].fn
                    ? (this._events[s] = [this._events[s], o])
                    : this._events[s].push(o)
                  : (this._events[s] = o),
                this
              );
            }),
            (o.prototype.removeListener = function (t, e, n, r) {
              var o = i ? i + t : t;
              if (!this._events || !this._events[o]) return this;
              var s = this._events[o],
                a = [];
              if (e)
                if (s.fn)
                  (s.fn !== e || (r && !s.once) || (n && s.context !== n)) &&
                    a.push(s);
                else
                  for (var u = 0, l = s.length; u < l; u++)
                    (s[u].fn !== e ||
                      (r && !s[u].once) ||
                      (n && s[u].context !== n)) &&
                      a.push(s[u]);
              return (
                a.length
                  ? (this._events[o] = 1 === a.length ? a[0] : a)
                  : delete this._events[o],
                this
              );
            }),
            (o.prototype.removeAllListeners = function (t) {
              return this._events
                ? (t
                    ? delete this._events[i ? i + t : t]
                    : (this._events = i ? {} : Object.create(null)),
                  this)
                : this;
            }),
            (o.prototype.off = o.prototype.removeListener),
            (o.prototype.addListener = o.prototype.on),
            (o.prototype.setMaxListeners = function () {
              return this;
            }),
            (o.prefixed = i),
            (t.exports = o);
        },
        function (t, e) {
          t.exports = {
            name: "lightstep-tracer",
            version: "0.20.8",
            main: "index.js",
            engines: { node: ">=0.12.0" },
            scripts: {
              test: "rm -f test/results/*.json && node node_modules/mocha/bin/mocha -c test/unittest_node.js",
            },
            license: "MIT",
            repository: {
              type: "git",
              url: "http://github.com/lightstep/lightstep-tracer-javascript.git",
            },
            dependencies: {
              async: "1.5.0",
              eventemitter3: "1.1.1",
              "source-map-support": "0.3.3",
              thrift: "0.9.2",
            },
            devDependencies: {
              "babel-cli": "6.14.0",
              "babel-core": "6.3.26",
              "babel-loader": "6.2.0",
              "babel-plugin-add-module-exports": "0.1.2",
              "babel-plugin-check-es2015-constants": "6.7.2",
              "babel-plugin-transform-es2015-arrow-functions": "6.5.2",
              "babel-plugin-transform-es2015-block-scoped-functions": "6.6.5",
              "babel-plugin-transform-es2015-block-scoping": "6.7.1",
              "babel-plugin-transform-es2015-classes": "6.6.5",
              "babel-plugin-transform-es2015-computed-properties": "6.6.5",
              "babel-plugin-transform-es2015-destructuring": "6.6.5",
              "babel-plugin-transform-es2015-duplicate-keys": "6.6.4",
              "babel-plugin-transform-es2015-literals": "6.5.0",
              "babel-plugin-transform-es2015-modules-commonjs": "6.7.4",
              "babel-plugin-transform-es2015-object-super": "6.6.5",
              "babel-plugin-transform-es2015-parameters": "6.7.0",
              "babel-plugin-transform-es2015-spread": "6.6.5",
              "babel-plugin-transform-es2015-sticky-regex": "6.5.0",
              "babel-plugin-transform-es2015-template-literals": "6.6.5",
              "babel-plugin-transform-es2015-unicode-regex": "6.5.0",
              "babel-polyfill": "6.3.14",
              "babel-preset-es2015": "6.3.13",
              chai: "3.4.1",
              clone: "1.0.2",
              colors: "1.1.2",
              eslint: "2.4.0",
              "eslint-config-airbnb": "6.2.0",
              "eslint-plugin-react": "4.2.3",
              express: "^4.16.3",
              istanbul: "0.4.4",
              "json-loader": "0.5.4",
              mocha: "2.3.4",
              opentracing: "0.14.0",
              shelljs: "0.5.3",
              "sprintf-js": "1.0.3",
              underscore: "1.8.3",
              "watch-trigger": "0.0.5",
              webpack: "1.12.9",
            },
          };
        },
        function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = function (t) {
            this.buffer = t;
          };
          e.default = n;
        },
        function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.SPAN_KIND = "span.kind"),
            (e.SPAN_KIND_RPC_CLIENT = "client"),
            (e.SPAN_KIND_RPC_SERVER = "server"),
            (e.SPAN_KIND_MESSAGING_PRODUCER = "producer"),
            (e.SPAN_KIND_MESSAGING_CONSUMER = "consumer"),
            (e.ERROR = "error"),
            (e.COMPONENT = "component"),
            (e.SAMPLING_PRIORITY = "sampling.priority"),
            (e.PEER_SERVICE = "peer.service"),
            (e.PEER_HOSTNAME = "peer.hostname"),
            (e.PEER_ADDRESS = "peer.address"),
            (e.PEER_HOST_IPV4 = "peer.ipv4"),
            (e.PEER_HOST_IPV6 = "peer.ipv6"),
            (e.PEER_PORT = "peer.port"),
            (e.HTTP_URL = "http.url"),
            (e.HTTP_METHOD = "http.method"),
            (e.HTTP_STATUS_CODE = "http.status_code"),
            (e.MESSAGE_BUS_DESTINATION = "message_bus.destination"),
            (e.DB_INSTANCE = "db.instance"),
            (e.DB_STATEMENT = "db.statement"),
            (e.DB_TYPE = "db.type"),
            (e.DB_USER = "db.user");
        },
        function (t, e, n) {
          "use strict";
          var r =
            (this && this.__extends) ||
            (function () {
              var t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                };
              return function (e, n) {
                function r() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = n(8),
            i = new o.default(),
            s = null,
            a = new ((function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                r(e, t),
                (e.prototype.startSpan = function () {
                  return (s || i).startSpan.apply(this, arguments);
                }),
                (e.prototype.inject = function () {
                  return (s || i).inject.apply(this, arguments);
                }),
                (e.prototype.extract = function () {
                  return (s || i).extract.apply(this, arguments);
                }),
                e
              );
            })(o.default))();
          (e.initGlobalTracer = function (t) {
            s = t;
          }),
            (e.globalTracer = function () {
              return a;
            });
        },
      ]);
    },
  },
]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/5573.159bf40f.chunk.js.map
