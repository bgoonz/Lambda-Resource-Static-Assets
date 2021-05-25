! function ( e, t ) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define( t ) : e.CodeMirror = t()
}( this, function () {
  "use strict";
  var e = navigator.userAgent,
    t = navigator.platform,
    r = /gecko\/\d/i.test( e ),
    n = /MSIE \d/.test( e ),
    i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec( e ),
    o = /Edge\/(\d+)/.exec( e ),
    l = n || i || o,
    s = l && ( n ? document.documentMode || 6 : +( o || i )[ 1 ] ),
    a = !o && /WebKit\//.test( e ),
    u = a && /Qt\/\d+\.\d+/.test( e ),
    c = !o && /Chrome\//.test( e ),
    h = /Opera\//.test( e ),
    f = /Apple Computer/.test( navigator.vendor ),
    d = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test( e ),
    p = /PhantomJS/.test( e ),
    g = !o && /AppleWebKit/.test( e ) && /Mobile\/\w+/.test( e ),
    v = /Android/.test( e ),
    m = g || v || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test( e ),
    y = g || /Mac/.test( t ),
    b = /\bCrOS\b/.test( e ),
    w = /win/i.test( t ),
    x = h && e.match( /Version\/(\d*\.\d*)/ );
  x && ( x = Number( x[ 1 ] ) ), x && x >= 15 && ( h = !1, a = !0 );
  var C = y && ( u || h && ( null == x || x < 12.11 ) ),
    S = r || l && s >= 9;

  function L( e ) {
    return new RegExp( "(^|\\s)" + e + "(?:$|\\s)\\s*" )
  }
  var k, T = function ( e, t ) {
    var r = e.className,
      n = L( t ).exec( r );
    if ( n ) {
      var i = r.slice( n.index + n[ 0 ].length );
      e.className = r.slice( 0, n.index ) + ( i ? n[ 1 ] + i : "" )
    }
  };

  function M( e ) {
    for ( var t = e.childNodes.length; t > 0; --t ) e.removeChild( e.firstChild );
    return e
  }

  function N( e, t ) {
    return M( e ).appendChild( t )
  }

  function O( e, t, r, n ) {
    var i = document.createElement( e );
    if ( r && ( i.className = r ), n && ( i.style.cssText = n ), "string" == typeof t ) i.appendChild( document.createTextNode( t ) );
    else if ( t )
      for ( var o = 0; o < t.length; ++o ) i.appendChild( t[ o ] );
    return i
  }

  function A( e, t, r, n ) {
    var i = O( e, t, r, n );
    return i.setAttribute( "role", "presentation" ), i
  }

  function W( e, t ) {
    if ( 3 == t.nodeType && ( t = t.parentNode ), e.contains ) return e.contains( t );
    do {
      if ( 11 == t.nodeType && ( t = t.host ), t == e ) return !0
    } while ( t = t.parentNode )
  }

  function D() {
    var e;
    try {
      e = document.activeElement
    } catch ( t ) {
      e = document.body || null
    }
    for ( ; e && e.shadowRoot && e.shadowRoot.activeElement; ) e = e.shadowRoot.activeElement;
    return e
  }

  function H( e, t ) {
    var r = e.className;
    L( t ).test( r ) || ( e.className += ( r ? " " : "" ) + t )
  }

  function F( e, t ) {
    for ( var r = e.split( " " ), n = 0; n < r.length; n++ ) r[ n ] && !L( r[ n ] ).test( t ) && ( t += " " + r[ n ] );
    return t
  }
  k = document.createRange ? function ( e, t, r, n ) {
    var i = document.createRange();
    return i.setEnd( n || e, r ), i.setStart( e, t ), i
  } : function ( e, t, r ) {
    var n = document.body.createTextRange();
    try {
      n.moveToElementText( e.parentNode )
    } catch ( e ) {
      return n
    }
    return n.collapse( !0 ), n.moveEnd( "character", r ), n.moveStart( "character", t ), n
  };
  var P = function ( e ) {
    e.select()
  };

  function E( e ) {
    var t = Array.prototype.slice.call( arguments, 1 );
    return function () {
      return e.apply( null, t )
    }
  }

  function z( e, t, r ) {
    for ( var n in t || ( t = {} ), e ) !e.hasOwnProperty( n ) || !1 === r && t.hasOwnProperty( n ) || ( t[ n ] = e[ n ] );
    return t
  }

  function I( e, t, r, n, i ) {
    null == t && -1 == ( t = e.search( /[^\s\u00a0]/ ) ) && ( t = e.length );
    for ( var o = n || 0, l = i || 0;; ) {
      var s = e.indexOf( "\t", o );
      if ( s < 0 || s >= t ) return l + ( t - o );
      l += s - o, l += r - l % r, o = s + 1
    }
  }
  g ? P = function ( e ) {
    e.selectionStart = 0, e.selectionEnd = e.value.length
  } : l && ( P = function ( e ) {
    try {
      e.select()
    } catch ( e ) {}
  } );
  var R = function () {
    this.id = null
  };

  function B( e, t ) {
    for ( var r = 0; r < e.length; ++r )
      if ( e[ r ] == t ) return r;
    return -1
  }
  R.prototype.set = function ( e, t ) {
    clearTimeout( this.id ), this.id = setTimeout( t, e )
  };
  var G = 30,
    U = {
      toString: function () {
        return "CodeMirror.Pass"
      }
    },
    V = {
      scroll: !1
    },
    K = {
      origin: "*mouse"
    },
    j = {
      origin: "+move"
    };

  function X( e, t, r ) {
    for ( var n = 0, i = 0;; ) {
      var o = e.indexOf( "\t", n ); - 1 == o && ( o = e.length );
      var l = o - n;
      if ( o == e.length || i + l >= t ) return n + Math.min( l, t - i );
      if ( i += o - n, n = o + 1, ( i += r - i % r ) >= t ) return n
    }
  }
  var Y = [ "" ];

  function _( e ) {
    for ( ; Y.length <= e; ) Y.push( q( Y ) + " " );
    return Y[ e ]
  }

  function q( e ) {
    return e[ e.length - 1 ]
  }

  function $( e, t ) {
    for ( var r = [], n = 0; n < e.length; n++ ) r[ n ] = t( e[ n ], n );
    return r
  }

  function Z() {}

  function Q( e, t ) {
    var r;
    return Object.create ? r = Object.create( e ) : ( Z.prototype = e, r = new Z ), t && z( t, r ), r
  }
  var J = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

  function ee( e ) {
    return /\w/.test( e ) || e > "" && ( e.toUpperCase() != e.toLowerCase() || J.test( e ) )
  }

  function te( e, t ) {
    return t ? !!( t.source.indexOf( "\\w" ) > -1 && ee( e ) ) || t.test( e ) : ee( e )
  }

  function re( e ) {
    for ( var t in e )
      if ( e.hasOwnProperty( t ) && e[ t ] ) return !1;
    return !0
  }
  var ne = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

  function ie( e ) {
    return e.charCodeAt( 0 ) >= 768 && ne.test( e )
  }

  function oe( e, t, r ) {
    for ( ;
      ( r < 0 ? t > 0 : t < e.length ) && ie( e.charAt( t ) ); ) t += r;
    return t
  }

  function le( e, t, r ) {
    for ( var n = t > r ? -1 : 1;; ) {
      if ( t == r ) return t;
      var i = ( t + r ) / 2,
        o = n < 0 ? Math.ceil( i ) : Math.floor( i );
      if ( o == t ) return e( o ) ? t : r;
      e( o ) ? r = o : t = o + n
    }
  }

  function se( e, t, n ) {
    var i = this;
    this.input = n, i.scrollbarFiller = O( "div", null, "CodeMirror-scrollbar-filler" ), i.scrollbarFiller.setAttribute( "cm-not-content", "true" ), i.gutterFiller = O( "div", null, "CodeMirror-gutter-filler" ), i.gutterFiller.setAttribute( "cm-not-content", "true" ), i.lineDiv = A( "div", null, "CodeMirror-code" ), i.selectionDiv = O( "div", null, null, "position: relative; z-index: 1" ), i.cursorDiv = O( "div", null, "CodeMirror-cursors" ), i.measure = O( "div", null, "CodeMirror-measure" ), i.lineMeasure = O( "div", null, "CodeMirror-measure" ), i.lineSpace = A( "div", [ i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv ], null, "position: relative; outline: none" );
    var o = A( "div", [ i.lineSpace ], "CodeMirror-lines" );
    i.mover = O( "div", [ o ], null, "position: relative" ), i.sizer = O( "div", [ i.mover ], "CodeMirror-sizer" ), i.sizerWidth = null, i.heightForcer = O( "div", null, null, "position: absolute; height: " + G + "px; width: 1px;" ), i.gutters = O( "div", null, "CodeMirror-gutters" ), i.lineGutter = null, i.scroller = O( "div", [ i.sizer, i.heightForcer, i.gutters ], "CodeMirror-scroll" ), i.scroller.setAttribute( "tabIndex", "-1" ), i.wrapper = O( "div", [ i.scrollbarFiller, i.gutterFiller, i.scroller ], "CodeMirror" ), l && s < 8 && ( i.gutters.style.zIndex = -1, i.scroller.style.paddingRight = 0 ), a || r && m || ( i.scroller.draggable = !0 ), e && ( e.appendChild ? e.appendChild( i.wrapper ) : e( i.wrapper ) ), i.viewFrom = i.viewTo = t.first, i.reportedViewFrom = i.reportedViewTo = t.first, i.view = [], i.renderedView = null, i.externalMeasured = null, i.viewOffset = 0, i.lastWrapHeight = i.lastWrapWidth = 0, i.updateLineNumbers = null, i.nativeBarWidth = i.barHeight = i.barWidth = 0, i.scrollbarsClipped = !1, i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null, i.alignWidgets = !1, i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null, i.maxLine = null, i.maxLineLength = 0, i.maxLineChanged = !1, i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null, i.shift = !1, i.selForContextMenu = null, i.activeTouch = null, n.init( i )
  }

  function ae( e, t ) {
    if ( ( t -= e.first ) < 0 || t >= e.size ) throw new Error( "There is no line " + ( t + e.first ) + " in the document." );
    for ( var r = e; !r.lines; )
      for ( var n = 0;; ++n ) {
        var i = r.children[ n ],
          o = i.chunkSize();
        if ( t < o ) {
          r = i;
          break
        }
        t -= o
      }
    return r.lines[ t ]
  }

  function ue( e, t, r ) {
    var n = [],
      i = t.line;
    return e.iter( t.line, r.line + 1, function ( e ) {
      var o = e.text;
      i == r.line && ( o = o.slice( 0, r.ch ) ), i == t.line && ( o = o.slice( t.ch ) ), n.push( o ), ++i
    } ), n
  }

  function ce( e, t, r ) {
    var n = [];
    return e.iter( t, r, function ( e ) {
      n.push( e.text )
    } ), n
  }

  function he( e, t ) {
    var r = t - e.height;
    if ( r )
      for ( var n = e; n; n = n.parent ) n.height += r
  }

  function fe( e ) {
    if ( null == e.parent ) return null;
    for ( var t = e.parent, r = B( t.lines, e ), n = t.parent; n; t = n, n = n.parent )
      for ( var i = 0; n.children[ i ] != t; ++i ) r += n.children[ i ].chunkSize();
    return r + t.first
  }

  function de( e, t ) {
    var r = e.first;
    e: do {
      for ( var n = 0; n < e.children.length; ++n ) {
        var i = e.children[ n ],
          o = i.height;
        if ( t < o ) {
          e = i;
          continue e
        }
        t -= o, r += i.chunkSize()
      }
      return r
    } while ( !e.lines );
    for ( var l = 0; l < e.lines.length; ++l ) {
      var s = e.lines[ l ].height;
      if ( t < s ) break;
      t -= s
    }
    return r + l
  }

  function pe( e, t ) {
    return t >= e.first && t < e.first + e.size
  }

  function ge( e, t ) {
    return String( e.lineNumberFormatter( t + e.firstLineNumber ) )
  }

  function ve( e, t, r ) {
    if ( void 0 === r && ( r = null ), !( this instanceof ve ) ) return new ve( e, t, r );
    this.line = e, this.ch = t, this.sticky = r
  }

  function me( e, t ) {
    return e.line - t.line || e.ch - t.ch
  }

  function ye( e, t ) {
    return e.sticky == t.sticky && 0 == me( e, t )
  }

  function be( e ) {
    return ve( e.line, e.ch )
  }

  function we( e, t ) {
    return me( e, t ) < 0 ? t : e
  }

  function xe( e, t ) {
    return me( e, t ) < 0 ? e : t
  }

  function Ce( e, t ) {
    return Math.max( e.first, Math.min( t, e.first + e.size - 1 ) )
  }

  function Se( e, t ) {
    if ( t.line < e.first ) return ve( e.first, 0 );
    var r = e.first + e.size - 1;
    return t.line > r ? ve( r, ae( e, r ).text.length ) : function ( e, t ) {
      var r = e.ch;
      return null == r || r > t ? ve( e.line, t ) : r < 0 ? ve( e.line, 0 ) : e
    }( t, ae( e, t.line ).text.length )
  }

  function Le( e, t ) {
    for ( var r = [], n = 0; n < t.length; n++ ) r[ n ] = Se( e, t[ n ] );
    return r
  }
  var ke = !1,
    Te = !1;

  function Me( e, t, r ) {
    this.marker = e, this.from = t, this.to = r
  }

  function Ne( e, t ) {
    if ( e )
      for ( var r = 0; r < e.length; ++r ) {
        var n = e[ r ];
        if ( n.marker == t ) return n
      }
  }

  function Oe( e, t ) {
    for ( var r, n = 0; n < e.length; ++n ) e[ n ] != t && ( r || ( r = [] ) ).push( e[ n ] );
    return r
  }

  function Ae( e, t ) {
    if ( t.full ) return null;
    var r = pe( e, t.from.line ) && ae( e, t.from.line ).markedSpans,
      n = pe( e, t.to.line ) && ae( e, t.to.line ).markedSpans;
    if ( !r && !n ) return null;
    var i = t.from.ch,
      o = t.to.ch,
      l = 0 == me( t.from, t.to ),
      s = function ( e, t, r ) {
        var n;
        if ( e )
          for ( var i = 0; i < e.length; ++i ) {
            var o = e[ i ],
              l = o.marker;
            if ( null == o.from || ( l.inclusiveLeft ? o.from <= t : o.from < t ) || o.from == t && "bookmark" == l.type && ( !r || !o.marker.insertLeft ) ) {
              var s = null == o.to || ( l.inclusiveRight ? o.to >= t : o.to > t );
              ( n || ( n = [] ) ).push( new Me( l, o.from, s ? null : o.to ) )
            }
          }
        return n
      }( r, i, l ),
      a = function ( e, t, r ) {
        var n;
        if ( e )
          for ( var i = 0; i < e.length; ++i ) {
            var o = e[ i ],
              l = o.marker;
            if ( null == o.to || ( l.inclusiveRight ? o.to >= t : o.to > t ) || o.from == t && "bookmark" == l.type && ( !r || o.marker.insertLeft ) ) {
              var s = null == o.from || ( l.inclusiveLeft ? o.from <= t : o.from < t );
              ( n || ( n = [] ) ).push( new Me( l, s ? null : o.from - t, null == o.to ? null : o.to - t ) )
            }
          }
        return n
      }( n, o, l ),
      u = 1 == t.text.length,
      c = q( t.text ).length + ( u ? i : 0 );
    if ( s )
      for ( var h = 0; h < s.length; ++h ) {
        var f = s[ h ];
        if ( null == f.to ) {
          var d = Ne( a, f.marker );
          d ? u && ( f.to = null == d.to ? null : d.to + c ) : f.to = i
        }
      }
    if ( a )
      for ( var p = 0; p < a.length; ++p ) {
        var g = a[ p ];
        if ( null != g.to && ( g.to += c ), null == g.from ) Ne( s, g.marker ) || ( g.from = c, u && ( s || ( s = [] ) ).push( g ) );
        else g.from += c, u && ( s || ( s = [] ) ).push( g )
      }
    s && ( s = We( s ) ), a && a != s && ( a = We( a ) );
    var v = [ s ];
    if ( !u ) {
      var m, y = t.text.length - 2;
      if ( y > 0 && s )
        for ( var b = 0; b < s.length; ++b ) null == s[ b ].to && ( m || ( m = [] ) ).push( new Me( s[ b ].marker, null, null ) );
      for ( var w = 0; w < y; ++w ) v.push( m );
      v.push( a )
    }
    return v
  }

  function We( e ) {
    for ( var t = 0; t < e.length; ++t ) {
      var r = e[ t ];
      null != r.from && r.from == r.to && !1 !== r.marker.clearWhenEmpty && e.splice( t--, 1 )
    }
    return e.length ? e : null
  }

  function De( e ) {
    var t = e.markedSpans;
    if ( t ) {
      for ( var r = 0; r < t.length; ++r ) t[ r ].marker.detachLine( e );
      e.markedSpans = null
    }
  }

  function He( e, t ) {
    if ( t ) {
      for ( var r = 0; r < t.length; ++r ) t[ r ].marker.attachLine( e );
      e.markedSpans = t
    }
  }

  function Fe( e ) {
    return e.inclusiveLeft ? -1 : 0
  }

  function Pe( e ) {
    return e.inclusiveRight ? 1 : 0
  }

  function Ee( e, t ) {
    var r = e.lines.length - t.lines.length;
    if ( 0 != r ) return r;
    var n = e.find(),
      i = t.find(),
      o = me( n.from, i.from ) || Fe( e ) - Fe( t );
    if ( o ) return -o;
    var l = me( n.to, i.to ) || Pe( e ) - Pe( t );
    return l || t.id - e.id
  }

  function ze( e, t ) {
    var r, n = Te && e.markedSpans;
    if ( n )
      for ( var i = void 0, o = 0; o < n.length; ++o )( i = n[ o ] ).marker.collapsed && null == ( t ? i.from : i.to ) && ( !r || Ee( r, i.marker ) < 0 ) && ( r = i.marker );
    return r
  }

  function Ie( e ) {
    return ze( e, !0 )
  }

  function Re( e ) {
    return ze( e, !1 )
  }

  function Be( e, t, r, n, i ) {
    var o = ae( e, t ),
      l = Te && o.markedSpans;
    if ( l )
      for ( var s = 0; s < l.length; ++s ) {
        var a = l[ s ];
        if ( a.marker.collapsed ) {
          var u = a.marker.find( 0 ),
            c = me( u.from, r ) || Fe( a.marker ) - Fe( i ),
            h = me( u.to, n ) || Pe( a.marker ) - Pe( i );
          if ( !( c >= 0 && h <= 0 || c <= 0 && h >= 0 ) && ( c <= 0 && ( a.marker.inclusiveRight && i.inclusiveLeft ? me( u.to, r ) >= 0 : me( u.to, r ) > 0 ) || c >= 0 && ( a.marker.inclusiveRight && i.inclusiveLeft ? me( u.from, n ) <= 0 : me( u.from, n ) < 0 ) ) ) return !0
        }
      }
  }

  function Ge( e ) {
    for ( var t; t = Ie( e ); ) e = t.find( -1, !0 ).line;
    return e
  }

  function Ue( e, t ) {
    var r = ae( e, t ),
      n = Ge( r );
    return r == n ? t : fe( n )
  }

  function Ve( e, t ) {
    if ( t > e.lastLine() ) return t;
    var r, n = ae( e, t );
    if ( !Ke( e, n ) ) return t;
    for ( ; r = Re( n ); ) n = r.find( 1, !0 ).line;
    return fe( n ) + 1
  }

  function Ke( e, t ) {
    var r = Te && t.markedSpans;
    if ( r )
      for ( var n = void 0, i = 0; i < r.length; ++i )
        if ( ( n = r[ i ] ).marker.collapsed ) {
          if ( null == n.from ) return !0;
          if ( !n.marker.widgetNode && 0 == n.from && n.marker.inclusiveLeft && je( e, t, n ) ) return !0
        }
  }

  function je( e, t, r ) {
    if ( null == r.to ) {
      var n = r.marker.find( 1, !0 );
      return je( e, n.line, Ne( n.line.markedSpans, r.marker ) )
    }
    if ( r.marker.inclusiveRight && r.to == t.text.length ) return !0;
    for ( var i = void 0, o = 0; o < t.markedSpans.length; ++o )
      if ( ( i = t.markedSpans[ o ] ).marker.collapsed && !i.marker.widgetNode && i.from == r.to && ( null == i.to || i.to != r.from ) && ( i.marker.inclusiveLeft || r.marker.inclusiveRight ) && je( e, t, i ) ) return !0
  }

  function Xe( e ) {
    for ( var t = 0, r = ( e = Ge( e ) ).parent, n = 0; n < r.lines.length; ++n ) {
      var i = r.lines[ n ];
      if ( i == e ) break;
      t += i.height
    }
    for ( var o = r.parent; o; o = ( r = o ).parent )
      for ( var l = 0; l < o.children.length; ++l ) {
        var s = o.children[ l ];
        if ( s == r ) break;
        t += s.height
      }
    return t
  }

  function Ye( e ) {
    if ( 0 == e.height ) return 0;
    for ( var t, r = e.text.length, n = e; t = Ie( n ); ) {
      var i = t.find( 0, !0 );
      n = i.from.line, r += i.from.ch - i.to.ch
    }
    for ( n = e; t = Re( n ); ) {
      var o = t.find( 0, !0 );
      r -= n.text.length - o.from.ch, r += ( n = o.to.line ).text.length - o.to.ch
    }
    return r
  }

  function _e( e ) {
    var t = e.display,
      r = e.doc;
    t.maxLine = ae( r, r.first ), t.maxLineLength = Ye( t.maxLine ), t.maxLineChanged = !0, r.iter( function ( e ) {
      var r = Ye( e );
      r > t.maxLineLength && ( t.maxLineLength = r, t.maxLine = e )
    } )
  }
  var qe = null;

  function $e( e, t, r ) {
    var n;
    qe = null;
    for ( var i = 0; i < e.length; ++i ) {
      var o = e[ i ];
      if ( o.from < t && o.to > t ) return i;
      o.to == t && ( o.from != o.to && "before" == r ? n = i : qe = i ), o.from == t && ( o.from != o.to && "before" != r ? n = i : qe = i )
    }
    return null != n ? n : qe
  }
  var Ze = function () {
    var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
      t = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
    var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
      n = /[stwN]/,
      i = /[LRr]/,
      o = /[Lb1n]/,
      l = /[1n]/;

    function s( e, t, r ) {
      this.level = e, this.from = t, this.to = r
    }
    return function ( a, u ) {
      var c = "ltr" == u ? "L" : "R";
      if ( 0 == a.length || "ltr" == u && !r.test( a ) ) return !1;
      for ( var h, f = a.length, d = [], p = 0; p < f; ++p ) d.push( ( h = a.charCodeAt( p ) ) <= 247 ? e.charAt( h ) : 1424 <= h && h <= 1524 ? "R" : 1536 <= h && h <= 1785 ? t.charAt( h - 1536 ) : 1774 <= h && h <= 2220 ? "r" : 8192 <= h && h <= 8203 ? "w" : 8204 == h ? "b" : "L" );
      for ( var g = 0, v = c; g < f; ++g ) {
        var m = d[ g ];
        "m" == m ? d[ g ] = v : v = m
      }
      for ( var y = 0, b = c; y < f; ++y ) {
        var w = d[ y ];
        "1" == w && "r" == b ? d[ y ] = "n" : i.test( w ) && ( b = w, "r" == w && ( d[ y ] = "R" ) )
      }
      for ( var x = 1, C = d[ 0 ]; x < f - 1; ++x ) {
        var S = d[ x ];
        "+" == S && "1" == C && "1" == d[ x + 1 ] ? d[ x ] = "1" : "," != S || C != d[ x + 1 ] || "1" != C && "n" != C || ( d[ x ] = C ), C = S
      }
      for ( var L = 0; L < f; ++L ) {
        var k = d[ L ];
        if ( "," == k ) d[ L ] = "N";
        else if ( "%" == k ) {
          var T = void 0;
          for ( T = L + 1; T < f && "%" == d[ T ]; ++T );
          for ( var M = L && "!" == d[ L - 1 ] || T < f && "1" == d[ T ] ? "1" : "N", N = L; N < T; ++N ) d[ N ] = M;
          L = T - 1
        }
      }
      for ( var O = 0, A = c; O < f; ++O ) {
        var W = d[ O ];
        "L" == A && "1" == W ? d[ O ] = "L" : i.test( W ) && ( A = W )
      }
      for ( var D = 0; D < f; ++D )
        if ( n.test( d[ D ] ) ) {
          var H = void 0;
          for ( H = D + 1; H < f && n.test( d[ H ] ); ++H );
          for ( var F = "L" == ( D ? d[ D - 1 ] : c ), P = F == ( "L" == ( H < f ? d[ H ] : c ) ) ? F ? "L" : "R" : c, E = D; E < H; ++E ) d[ E ] = P;
          D = H - 1
        } for ( var z, I = [], R = 0; R < f; )
        if ( o.test( d[ R ] ) ) {
          var B = R;
          for ( ++R; R < f && o.test( d[ R ] ); ++R );
          I.push( new s( 0, B, R ) )
        } else {
          var G = R,
            U = I.length;
          for ( ++R; R < f && "L" != d[ R ]; ++R );
          for ( var V = G; V < R; )
            if ( l.test( d[ V ] ) ) {
              G < V && I.splice( U, 0, new s( 1, G, V ) );
              var K = V;
              for ( ++V; V < R && l.test( d[ V ] ); ++V );
              I.splice( U, 0, new s( 2, K, V ) ), G = V
            } else ++V;
          G < R && I.splice( U, 0, new s( 1, G, R ) )
        } return "ltr" == u && ( 1 == I[ 0 ].level && ( z = a.match( /^\s+/ ) ) && ( I[ 0 ].from = z[ 0 ].length, I.unshift( new s( 0, 0, z[ 0 ].length ) ) ), 1 == q( I ).level && ( z = a.match( /\s+$/ ) ) && ( q( I ).to -= z[ 0 ].length, I.push( new s( 0, f - z[ 0 ].length, f ) ) ) ), "rtl" == u ? I.reverse() : I
    }
  }();

  function Qe( e, t ) {
    var r = e.order;
    return null == r && ( r = e.order = Ze( e.text, t ) ), r
  }
  var Je = [],
    et = function ( e, t, r ) {
      if ( e.addEventListener ) e.addEventListener( t, r, !1 );
      else if ( e.attachEvent ) e.attachEvent( "on" + t, r );
      else {
        var n = e._handlers || ( e._handlers = {} );
        n[ t ] = ( n[ t ] || Je ).concat( r )
      }
    };

  function tt( e, t ) {
    return e._handlers && e._handlers[ t ] || Je
  }

  function rt( e, t, r ) {
    if ( e.removeEventListener ) e.removeEventListener( t, r, !1 );
    else if ( e.detachEvent ) e.detachEvent( "on" + t, r );
    else {
      var n = e._handlers,
        i = n && n[ t ];
      if ( i ) {
        var o = B( i, r );
        o > -1 && ( n[ t ] = i.slice( 0, o ).concat( i.slice( o + 1 ) ) )
      }
    }
  }

  function nt( e, t ) {
    var r = tt( e, t );
    if ( r.length )
      for ( var n = Array.prototype.slice.call( arguments, 2 ), i = 0; i < r.length; ++i ) r[ i ].apply( null, n )
  }

  function it( e, t, r ) {
    return "string" == typeof t && ( t = {
      type: t,
      preventDefault: function () {
        this.defaultPrevented = !0
      }
    } ), nt( e, r || t.type, e, t ), ct( t ) || t.codemirrorIgnore
  }

  function ot( e ) {
    var t = e._handlers && e._handlers.cursorActivity;
    if ( t )
      for ( var r = e.curOp.cursorActivityHandlers || ( e.curOp.cursorActivityHandlers = [] ), n = 0; n < t.length; ++n ) - 1 == B( r, t[ n ] ) && r.push( t[ n ] )
  }

  function lt( e, t ) {
    return tt( e, t ).length > 0
  }

  function st( e ) {
    e.prototype.on = function ( e, t ) {
      et( this, e, t )
    }, e.prototype.off = function ( e, t ) {
      rt( this, e, t )
    }
  }

  function at( e ) {
    e.preventDefault ? e.preventDefault() : e.returnValue = !1
  }

  function ut( e ) {
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
  }

  function ct( e ) {
    return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
  }

  function ht( e ) {
    at( e ), ut( e )
  }

  function ft( e ) {
    return e.target || e.srcElement
  }

  function dt( e ) {
    var t = e.which;
    return null == t && ( 1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && ( t = 2 ) ), y && e.ctrlKey && 1 == t && ( t = 3 ), t
  }
  var pt, gt, vt = function () {
    if ( l && s < 9 ) return !1;
    var e = O( "div" );
    return "draggable" in e || "dragDrop" in e
  }();

  function mt( e ) {
    if ( null == pt ) {
      var t = O( "span", "​" );
      N( e, O( "span", [ t, document.createTextNode( "x" ) ] ) ), 0 != e.firstChild.offsetHeight && ( pt = t.offsetWidth <= 1 && t.offsetHeight > 2 && !( l && s < 8 ) )
    }
    var r = pt ? O( "span", "​" ) : O( "span", " ", null, "display: inline-block; width: 1px; margin-right: -1px" );
    return r.setAttribute( "cm-text", "" ), r
  }

  function yt( e ) {
    if ( null != gt ) return gt;
    var t = N( e, document.createTextNode( "AخA" ) ),
      r = k( t, 0, 1 ).getBoundingClientRect(),
      n = k( t, 1, 2 ).getBoundingClientRect();
    return M( e ), !( !r || r.left == r.right ) && ( gt = n.right - r.right < 3 )
  }
  var bt, wt = 3 != "\n\nb".split( /\n/ ).length ? function ( e ) {
      for ( var t = 0, r = [], n = e.length; t <= n; ) {
        var i = e.indexOf( "\n", t ); - 1 == i && ( i = e.length );
        var o = e.slice( t, "\r" == e.charAt( i - 1 ) ? i - 1 : i ),
          l = o.indexOf( "\r" ); - 1 != l ? ( r.push( o.slice( 0, l ) ), t += l + 1 ) : ( r.push( o ), t = i + 1 )
      }
      return r
    } : function ( e ) {
      return e.split( /\r\n?|\n/ )
    },
    xt = window.getSelection ? function ( e ) {
      try {
        return e.selectionStart != e.selectionEnd
      } catch ( e ) {
        return !1
      }
    } : function ( e ) {
      var t;
      try {
        t = e.ownerDocument.selection.createRange()
      } catch ( e ) {}
      return !( !t || t.parentElement() != e ) && 0 != t.compareEndPoints( "StartToEnd", t )
    },
    Ct = "oncopy" in ( bt = O( "div" ) ) || ( bt.setAttribute( "oncopy", "return;" ), "function" == typeof bt.oncopy ),
    St = null;
  var Lt = {},
    kt = {};

  function Tt( e ) {
    if ( "string" == typeof e && kt.hasOwnProperty( e ) ) e = kt[ e ];
    else if ( e && "string" == typeof e.name && kt.hasOwnProperty( e.name ) ) {
      var t = kt[ e.name ];
      "string" == typeof t && ( t = {
        name: t
      } ), ( e = Q( t, e ) ).name = t.name
    } else {
      if ( "string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test( e ) ) return Tt( "application/xml" );
      if ( "string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test( e ) ) return Tt( "application/json" )
    }
    return "string" == typeof e ? {
      name: e
    } : e || {
      name: "null"
    }
  }

  function Mt( e, t ) {
    t = Tt( t );
    var r = Lt[ t.name ];
    if ( !r ) return Mt( e, "text/plain" );
    var n = r( e, t );
    if ( Nt.hasOwnProperty( t.name ) ) {
      var i = Nt[ t.name ];
      for ( var o in i ) i.hasOwnProperty( o ) && ( n.hasOwnProperty( o ) && ( n[ "_" + o ] = n[ o ] ), n[ o ] = i[ o ] )
    }
    if ( n.name = t.name, t.helperType && ( n.helperType = t.helperType ), t.modeProps )
      for ( var l in t.modeProps ) n[ l ] = t.modeProps[ l ];
    return n
  }
  var Nt = {};

  function Ot( e, t ) {
    z( t, Nt.hasOwnProperty( e ) ? Nt[ e ] : Nt[ e ] = {} )
  }

  function At( e, t ) {
    if ( !0 === t ) return t;
    if ( e.copyState ) return e.copyState( t );
    var r = {};
    for ( var n in t ) {
      var i = t[ n ];
      i instanceof Array && ( i = i.concat( [] ) ), r[ n ] = i
    }
    return r
  }

  function Wt( e, t ) {
    for ( var r; e.innerMode && ( r = e.innerMode( t ) ) && r.mode != e; ) t = r.state, e = r.mode;
    return r || {
      mode: e,
      state: t
    }
  }

  function Dt( e, t, r ) {
    return !e.startState || e.startState( t, r )
  }
  var Ht = function ( e, t, r ) {
    this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = r
  };
  Ht.prototype.eol = function () {
    return this.pos >= this.string.length
  }, Ht.prototype.sol = function () {
    return this.pos == this.lineStart
  }, Ht.prototype.peek = function () {
    return this.string.charAt( this.pos ) || void 0
  }, Ht.prototype.next = function () {
    if ( this.pos < this.string.length ) return this.string.charAt( this.pos++ )
  }, Ht.prototype.eat = function ( e ) {
    var t = this.string.charAt( this.pos );
    if ( "string" == typeof e ? t == e : t && ( e.test ? e.test( t ) : e( t ) ) ) return ++this.pos, t
  }, Ht.prototype.eatWhile = function ( e ) {
    for ( var t = this.pos; this.eat( e ); );
    return this.pos > t
  }, Ht.prototype.eatSpace = function () {
    for ( var e = this.pos;
      /[\s\u00a0]/.test( this.string.charAt( this.pos ) ); ) ++this.pos;
    return this.pos > e
  }, Ht.prototype.skipToEnd = function () {
    this.pos = this.string.length
  }, Ht.prototype.skipTo = function ( e ) {
    var t = this.string.indexOf( e, this.pos );
    if ( t > -1 ) return this.pos = t, !0
  }, Ht.prototype.backUp = function ( e ) {
    this.pos -= e
  }, Ht.prototype.column = function () {
    return this.lastColumnPos < this.start && ( this.lastColumnValue = I( this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue ), this.lastColumnPos = this.start ), this.lastColumnValue - ( this.lineStart ? I( this.string, this.lineStart, this.tabSize ) : 0 )
  }, Ht.prototype.indentation = function () {
    return I( this.string, null, this.tabSize ) - ( this.lineStart ? I( this.string, this.lineStart, this.tabSize ) : 0 )
  }, Ht.prototype.match = function ( e, t, r ) {
    if ( "string" != typeof e ) {
      var n = this.string.slice( this.pos ).match( e );
      return n && n.index > 0 ? null : ( n && !1 !== t && ( this.pos += n[ 0 ].length ), n )
    }
    var i = function ( e ) {
      return r ? e.toLowerCase() : e
    };
    if ( i( this.string.substr( this.pos, e.length ) ) == i( e ) ) return !1 !== t && ( this.pos += e.length ), !0
  }, Ht.prototype.current = function () {
    return this.string.slice( this.start, this.pos )
  }, Ht.prototype.hideFirstChars = function ( e, t ) {
    this.lineStart += e;
    try {
      return t()
    } finally {
      this.lineStart -= e
    }
  }, Ht.prototype.lookAhead = function ( e ) {
    var t = this.lineOracle;
    return t && t.lookAhead( e )
  }, Ht.prototype.baseToken = function () {
    var e = this.lineOracle;
    return e && e.baseToken( this.pos )
  };
  var Ft = function ( e, t ) {
      this.state = e, this.lookAhead = t
    },
    Pt = function ( e, t, r, n ) {
      this.state = t, this.doc = e, this.line = r, this.maxLookAhead = n || 0, this.baseTokens = null, this.baseTokenPos = 1
    };

  function Et( e, t, r, n ) {
    var i = [ e.state.modeGen ],
      o = {};
    jt( e, t.text, e.doc.mode, r, function ( e, t ) {
      return i.push( e, t )
    }, o, n );
    for ( var l = r.state, s = function ( n ) {
        r.baseTokens = i;
        var s = e.state.overlays[ n ],
          a = 1,
          u = 0;
        r.state = !0, jt( e, t.text, s.mode, r, function ( e, t ) {
          for ( var r = a; u < e; ) {
            var n = i[ a ];
            n > e && i.splice( a, 1, e, i[ a + 1 ], n ), a += 2, u = Math.min( e, n )
          }
          if ( t )
            if ( s.opaque ) i.splice( r, a - r, e, "overlay " + t ), a = r + 2;
            else
              for ( ; r < a; r += 2 ) {
                var o = i[ r + 1 ];
                i[ r + 1 ] = ( o ? o + " " : "" ) + "overlay " + t
              }
        }, o ), r.state = l, r.baseTokens = null, r.baseTokenPos = 1
      }, a = 0; a < e.state.overlays.length; ++a ) s( a );
    return {
      styles: i,
      classes: o.bgClass || o.textClass ? o : null
    }
  }

  function zt( e, t, r ) {
    if ( !t.styles || t.styles[ 0 ] != e.state.modeGen ) {
      var n = It( e, fe( t ) ),
        i = t.text.length > e.options.maxHighlightLength && At( e.doc.mode, n.state ),
        o = Et( e, t, n );
      i && ( n.state = i ), t.stateAfter = n.save( !i ), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && ( t.styleClasses = null ), r === e.doc.highlightFrontier && ( e.doc.modeFrontier = Math.max( e.doc.modeFrontier, ++e.doc.highlightFrontier ) )
    }
    return t.styles
  }

  function It( e, t, r ) {
    var n = e.doc,
      i = e.display;
    if ( !n.mode.startState ) return new Pt( n, !0, t );
    var o = function ( e, t, r ) {
        for ( var n, i, o = e.doc, l = r ? -1 : t - ( e.doc.mode.innerMode ? 1e3 : 100 ), s = t; s > l; --s ) {
          if ( s <= o.first ) return o.first;
          var a = ae( o, s - 1 ),
            u = a.stateAfter;
          if ( u && ( !r || s + ( u instanceof Ft ? u.lookAhead : 0 ) <= o.modeFrontier ) ) return s;
          var c = I( a.text, null, e.options.tabSize );
          ( null == i || n > c ) && ( i = s - 1, n = c )
        }
        return i
      }( e, t, r ),
      l = o > n.first && ae( n, o - 1 ).stateAfter,
      s = l ? Pt.fromSaved( n, l, o ) : new Pt( n, Dt( n.mode ), o );
    return n.iter( o, t, function ( r ) {
      Rt( e, r.text, s );
      var n = s.line;
      r.stateAfter = n == t - 1 || n % 5 == 0 || n >= i.viewFrom && n < i.viewTo ? s.save() : null, s.nextLine()
    } ), r && ( n.modeFrontier = s.line ), s
  }

  function Rt( e, t, r, n ) {
    var i = e.doc.mode,
      o = new Ht( t, e.options.tabSize, r );
    for ( o.start = o.pos = n || 0, "" == t && Bt( i, r.state ); !o.eol(); ) Gt( i, o, r.state ), o.start = o.pos
  }

  function Bt( e, t ) {
    if ( e.blankLine ) return e.blankLine( t );
    if ( e.innerMode ) {
      var r = Wt( e, t );
      return r.mode.blankLine ? r.mode.blankLine( r.state ) : void 0
    }
  }

  function Gt( e, t, r, n ) {
    for ( var i = 0; i < 10; i++ ) {
      n && ( n[ 0 ] = Wt( e, r ).mode );
      var o = e.token( t, r );
      if ( t.pos > t.start ) return o
    }
    throw new Error( "Mode " + e.name + " failed to advance stream." )
  }
  Pt.prototype.lookAhead = function ( e ) {
    var t = this.doc.getLine( this.line + e );
    return null != t && e > this.maxLookAhead && ( this.maxLookAhead = e ), t
  }, Pt.prototype.baseToken = function ( e ) {
    if ( !this.baseTokens ) return null;
    for ( ; this.baseTokens[ this.baseTokenPos ] <= e; ) this.baseTokenPos += 2;
    var t = this.baseTokens[ this.baseTokenPos + 1 ];
    return {
      type: t && t.replace( /( |^)overlay .*/, "" ),
      size: this.baseTokens[ this.baseTokenPos ] - e
    }
  }, Pt.prototype.nextLine = function () {
    this.line++, this.maxLookAhead > 0 && this.maxLookAhead--
  }, Pt.fromSaved = function ( e, t, r ) {
    return t instanceof Ft ? new Pt( e, At( e.mode, t.state ), r, t.lookAhead ) : new Pt( e, At( e.mode, t ), r )
  }, Pt.prototype.save = function ( e ) {
    var t = !1 !== e ? At( this.doc.mode, this.state ) : this.state;
    return this.maxLookAhead > 0 ? new Ft( t, this.maxLookAhead ) : t
  };
  var Ut = function ( e, t, r ) {
    this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = r
  };

  function Vt( e, t, r, n ) {
    var i, o, l = e.doc,
      s = l.mode,
      a = ae( l, ( t = Se( l, t ) ).line ),
      u = It( e, t.line, r ),
      c = new Ht( a.text, e.options.tabSize, u );
    for ( n && ( o = [] );
      ( n || c.pos < t.ch ) && !c.eol(); ) c.start = c.pos, i = Gt( s, c, u.state ), n && o.push( new Ut( c, i, At( l.mode, u.state ) ) );
    return n ? o : new Ut( c, i, u.state )
  }

  function Kt( e, t ) {
    if ( e )
      for ( ;; ) {
        var r = e.match( /(?:^|\s+)line-(background-)?(\S+)/ );
        if ( !r ) break;
        e = e.slice( 0, r.index ) + e.slice( r.index + r[ 0 ].length );
        var n = r[ 1 ] ? "bgClass" : "textClass";
        null == t[ n ] ? t[ n ] = r[ 2 ] : new RegExp( "(?:^|s)" + r[ 2 ] + "(?:$|s)" ).test( t[ n ] ) || ( t[ n ] += " " + r[ 2 ] )
      }
    return e
  }

  function jt( e, t, r, n, i, o, l ) {
    var s = r.flattenSpans;
    null == s && ( s = e.options.flattenSpans );
    var a, u = 0,
      c = null,
      h = new Ht( t, e.options.tabSize, n ),
      f = e.options.addModeClass && [ null ];
    for ( "" == t && Kt( Bt( r, n.state ), o ); !h.eol(); ) {
      if ( h.pos > e.options.maxHighlightLength ? ( s = !1, l && Rt( e, t, n, h.pos ), h.pos = t.length, a = null ) : a = Kt( Gt( r, h, n.state, f ), o ), f ) {
        var d = f[ 0 ].name;
        d && ( a = "m-" + ( a ? d + " " + a : d ) )
      }
      if ( !s || c != a ) {
        for ( ; u < h.start; ) i( u = Math.min( h.start, u + 5e3 ), c );
        c = a
      }
      h.start = h.pos
    }
    for ( ; u < h.pos; ) {
      var p = Math.min( h.pos, u + 5e3 );
      i( p, c ), u = p
    }
  }
  var Xt = function ( e, t, r ) {
    this.text = e, He( this, t ), this.height = r ? r( this ) : 1
  };

  function Yt( e ) {
    e.parent = null, De( e )
  }
  Xt.prototype.lineNo = function () {
    return fe( this )
  }, st( Xt );
  var _t = {},
    qt = {};

  function $t( e, t ) {
    if ( !e || /^\s*$/.test( e ) ) return null;
    var r = t.addModeClass ? qt : _t;
    return r[ e ] || ( r[ e ] = e.replace( /\S+/g, "cm-$&" ) )
  }

  function Zt( e, t ) {
    var r = A( "span", null, null, a ? "padding-right: .1px" : null ),
      n = {
        pre: A( "pre", [ r ], "CodeMirror-line" ),
        content: r,
        col: 0,
        pos: 0,
        cm: e,
        trailingSpace: !1,
        splitSpaces: ( l || a ) && e.getOption( "lineWrapping" )
      };
    t.measure = {};
    for ( var i = 0; i <= ( t.rest ? t.rest.length : 0 ); i++ ) {
      var o = i ? t.rest[ i - 1 ] : t.line,
        s = void 0;
      n.pos = 0, n.addToken = Jt, yt( e.display.measure ) && ( s = Qe( o, e.doc.direction ) ) && ( n.addToken = er( n.addToken, s ) ), n.map = [], rr( o, n, zt( e, o, t != e.display.externalMeasured && fe( o ) ) ), o.styleClasses && ( o.styleClasses.bgClass && ( n.bgClass = F( o.styleClasses.bgClass, n.bgClass || "" ) ), o.styleClasses.textClass && ( n.textClass = F( o.styleClasses.textClass, n.textClass || "" ) ) ), 0 == n.map.length && n.map.push( 0, 0, n.content.appendChild( mt( e.display.measure ) ) ), 0 == i ? ( t.measure.map = n.map, t.measure.cache = {} ) : ( ( t.measure.maps || ( t.measure.maps = [] ) ).push( n.map ), ( t.measure.caches || ( t.measure.caches = [] ) ).push( {} ) )
    }
    if ( a ) {
      var u = n.content.lastChild;
      ( /\bcm-tab\b/.test( u.className ) || u.querySelector && u.querySelector( ".cm-tab" ) ) && ( n.content.className = "cm-tab-wrap-hack" )
    }
    return nt( e, "renderLine", e, t.line, n.pre ), n.pre.className && ( n.textClass = F( n.pre.className, n.textClass || "" ) ), n
  }

  function Qt( e ) {
    var t = O( "span", "•", "cm-invalidchar" );
    return t.title = "\\u" + e.charCodeAt( 0 ).toString( 16 ), t.setAttribute( "aria-label", t.title ), t
  }

  function Jt( e, t, r, n, i, o, a ) {
    if ( t ) {
      var u, c = e.splitSpaces ? function ( e, t ) {
          if ( e.length > 1 && !/  /.test( e ) ) return e;
          for ( var r = t, n = "", i = 0; i < e.length; i++ ) {
            var o = e.charAt( i );
            " " != o || !r || i != e.length - 1 && 32 != e.charCodeAt( i + 1 ) || ( o = " " ), n += o, r = " " == o
          }
          return n
        }( t, e.trailingSpace ) : t,
        h = e.cm.state.specialChars,
        f = !1;
      if ( h.test( t ) ) {
        u = document.createDocumentFragment();
        for ( var d = 0;; ) {
          h.lastIndex = d;
          var p = h.exec( t ),
            g = p ? p.index - d : t.length - d;
          if ( g ) {
            var v = document.createTextNode( c.slice( d, d + g ) );
            l && s < 9 ? u.appendChild( O( "span", [ v ] ) ) : u.appendChild( v ), e.map.push( e.pos, e.pos + g, v ), e.col += g, e.pos += g
          }
          if ( !p ) break;
          d += g + 1;
          var m = void 0;
          if ( "\t" == p[ 0 ] ) {
            var y = e.cm.options.tabSize,
              b = y - e.col % y;
            ( m = u.appendChild( O( "span", _( b ), "cm-tab" ) ) ).setAttribute( "role", "presentation" ), m.setAttribute( "cm-text", "\t" ), e.col += b
          } else "\r" == p[ 0 ] || "\n" == p[ 0 ] ? ( ( m = u.appendChild( O( "span", "\r" == p[ 0 ] ? "␍" : "␤", "cm-invalidchar" ) ) ).setAttribute( "cm-text", p[ 0 ] ), e.col += 1 ) : ( ( m = e.cm.options.specialCharPlaceholder( p[ 0 ] ) ).setAttribute( "cm-text", p[ 0 ] ), l && s < 9 ? u.appendChild( O( "span", [ m ] ) ) : u.appendChild( m ), e.col += 1 );
          e.map.push( e.pos, e.pos + 1, m ), e.pos++
        }
      } else e.col += t.length, u = document.createTextNode( c ), e.map.push( e.pos, e.pos + t.length, u ), l && s < 9 && ( f = !0 ), e.pos += t.length;
      if ( e.trailingSpace = 32 == c.charCodeAt( t.length - 1 ), r || n || i || f || a ) {
        var w = r || "";
        n && ( w += n ), i && ( w += i );
        var x = O( "span", [ u ], w, a );
        return o && ( x.title = o ), e.content.appendChild( x )
      }
      e.content.appendChild( u )
    }
  }

  function er( e, t ) {
    return function ( r, n, i, o, l, s, a ) {
      i = i ? i + " cm-force-border" : "cm-force-border";
      for ( var u = r.pos, c = u + n.length;; ) {
        for ( var h = void 0, f = 0; f < t.length && !( ( h = t[ f ] ).to > u && h.from <= u ); f++ );
        if ( h.to >= c ) return e( r, n, i, o, l, s, a );
        e( r, n.slice( 0, h.to - u ), i, o, null, s, a ), o = null, n = n.slice( h.to - u ), u = h.to
      }
    }
  }

  function tr( e, t, r, n ) {
    var i = !n && r.widgetNode;
    i && e.map.push( e.pos, e.pos + t, i ), !n && e.cm.display.input.needsContentAttribute && ( i || ( i = e.content.appendChild( document.createElement( "span" ) ) ), i.setAttribute( "cm-marker", r.id ) ), i && ( e.cm.display.input.setUneditable( i ), e.content.appendChild( i ) ), e.pos += t, e.trailingSpace = !1
  }

  function rr( e, t, r ) {
    var n = e.markedSpans,
      i = e.text,
      o = 0;
    if ( n )
      for ( var l, s, a, u, c, h, f, d = i.length, p = 0, g = 1, v = "", m = 0;; ) {
        if ( m == p ) {
          a = u = c = h = s = "", f = null, m = 1 / 0;
          for ( var y = [], b = void 0, w = 0; w < n.length; ++w ) {
            var x = n[ w ],
              C = x.marker;
            "bookmark" == C.type && x.from == p && C.widgetNode ? y.push( C ) : x.from <= p && ( null == x.to || x.to > p || C.collapsed && x.to == p && x.from == p ) ? ( null != x.to && x.to != p && m > x.to && ( m = x.to, u = "" ), C.className && ( a += " " + C.className ), C.css && ( s = ( s ? s + ";" : "" ) + C.css ), C.startStyle && x.from == p && ( c += " " + C.startStyle ), C.endStyle && x.to == m && ( b || ( b = [] ) ).push( C.endStyle, x.to ), C.title && !h && ( h = C.title ), C.collapsed && ( !f || Ee( f.marker, C ) < 0 ) && ( f = x ) ) : x.from > p && m > x.from && ( m = x.from )
          }
          if ( b )
            for ( var S = 0; S < b.length; S += 2 ) b[ S + 1 ] == m && ( u += " " + b[ S ] );
          if ( !f || f.from == p )
            for ( var L = 0; L < y.length; ++L ) tr( t, 0, y[ L ] );
          if ( f && ( f.from || 0 ) == p ) {
            if ( tr( t, ( null == f.to ? d + 1 : f.to ) - p, f.marker, null == f.from ), null == f.to ) return;
            f.to == p && ( f = !1 )
          }
        }
        if ( p >= d ) break;
        for ( var k = Math.min( d, m );; ) {
          if ( v ) {
            var T = p + v.length;
            if ( !f ) {
              var M = T > k ? v.slice( 0, k - p ) : v;
              t.addToken( t, M, l ? l + a : a, c, p + M.length == m ? u : "", h, s )
            }
            if ( T >= k ) {
              v = v.slice( k - p ), p = k;
              break
            }
            p = T, c = ""
          }
          v = i.slice( o, o = r[ g++ ] ), l = $t( r[ g++ ], t.cm.options )
        }
      } else
        for ( var N = 1; N < r.length; N += 2 ) t.addToken( t, i.slice( o, o = r[ N ] ), $t( r[ N + 1 ], t.cm.options ) )
  }

  function nr( e, t, r ) {
    this.line = t, this.rest = function ( e ) {
      for ( var t, r; t = Re( e ); ) e = t.find( 1, !0 ).line, ( r || ( r = [] ) ).push( e );
      return r
    }( t ), this.size = this.rest ? fe( q( this.rest ) ) - r + 1 : 1, this.node = this.text = null, this.hidden = Ke( e, t )
  }

  function ir( e, t, r ) {
    for ( var n, i = [], o = t; o < r; o = n ) {
      var l = new nr( e.doc, ae( e.doc, o ), o );
      n = o + l.size, i.push( l )
    }
    return i
  }
  var or = null;
  var lr = null;

  function sr( e, t ) {
    var r = tt( e, t );
    if ( r.length ) {
      var n, i = Array.prototype.slice.call( arguments, 2 );
      or ? n = or.delayedCallbacks : lr ? n = lr : ( n = lr = [], setTimeout( ar, 0 ) );
      for ( var o = function ( e ) {
          n.push( function () {
            return r[ e ].apply( null, i )
          } )
        }, l = 0; l < r.length; ++l ) o( l )
    }
  }

  function ar() {
    var e = lr;
    lr = null;
    for ( var t = 0; t < e.length; ++t ) e[ t ]()
  }

  function ur( e, t, r, n ) {
    for ( var i = 0; i < t.changes.length; i++ ) {
      var o = t.changes[ i ];
      "text" == o ? fr( e, t ) : "gutter" == o ? pr( e, t, r, n ) : "class" == o ? dr( e, t ) : "widget" == o && gr( e, t, n )
    }
    t.changes = null
  }

  function cr( e ) {
    return e.node == e.text && ( e.node = O( "div", null, null, "position: relative" ), e.text.parentNode && e.text.parentNode.replaceChild( e.node, e.text ), e.node.appendChild( e.text ), l && s < 8 && ( e.node.style.zIndex = 2 ) ), e.node
  }

  function hr( e, t ) {
    var r = e.display.externalMeasured;
    return r && r.line == t.line ? ( e.display.externalMeasured = null, t.measure = r.measure, r.built ) : Zt( e, t )
  }

  function fr( e, t ) {
    var r = t.text.className,
      n = hr( e, t );
    t.text == t.node && ( t.node = n.pre ), t.text.parentNode.replaceChild( n.pre, t.text ), t.text = n.pre, n.bgClass != t.bgClass || n.textClass != t.textClass ? ( t.bgClass = n.bgClass, t.textClass = n.textClass, dr( e, t ) ) : r && ( t.text.className = r )
  }

  function dr( e, t ) {
    ! function ( e, t ) {
      var r = t.bgClass ? t.bgClass + " " + ( t.line.bgClass || "" ) : t.line.bgClass;
      if ( r && ( r += " CodeMirror-linebackground" ), t.background ) r ? t.background.className = r : ( t.background.parentNode.removeChild( t.background ), t.background = null );
      else if ( r ) {
        var n = cr( t );
        t.background = n.insertBefore( O( "div", null, r ), n.firstChild ), e.display.input.setUneditable( t.background )
      }
    }( e, t ), t.line.wrapClass ? cr( t ).className = t.line.wrapClass : t.node != t.text && ( t.node.className = "" );
    var r = t.textClass ? t.textClass + " " + ( t.line.textClass || "" ) : t.line.textClass;
    t.text.className = r || ""
  }

  function pr( e, t, r, n ) {
    if ( t.gutter && ( t.node.removeChild( t.gutter ), t.gutter = null ), t.gutterBackground && ( t.node.removeChild( t.gutterBackground ), t.gutterBackground = null ), t.line.gutterClass ) {
      var i = cr( t );
      t.gutterBackground = O( "div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + ( e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth ) + "px; width: " + n.gutterTotalWidth + "px" ), e.display.input.setUneditable( t.gutterBackground ), i.insertBefore( t.gutterBackground, t.text )
    }
    var o = t.line.gutterMarkers;
    if ( e.options.lineNumbers || o ) {
      var l = cr( t ),
        s = t.gutter = O( "div", null, "CodeMirror-gutter-wrapper", "left: " + ( e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth ) + "px" );
      if ( e.display.input.setUneditable( s ), l.insertBefore( s, t.text ), t.line.gutterClass && ( s.className += " " + t.line.gutterClass ), !e.options.lineNumbers || o && o[ "CodeMirror-linenumbers" ] || ( t.lineNumber = s.appendChild( O( "div", ge( e.options, r ), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + n.gutterLeft[ "CodeMirror-linenumbers" ] + "px; width: " + e.display.lineNumInnerWidth + "px" ) ) ), o )
        for ( var a = 0; a < e.options.gutters.length; ++a ) {
          var u = e.options.gutters[ a ],
            c = o.hasOwnProperty( u ) && o[ u ];
          c && s.appendChild( O( "div", [ c ], "CodeMirror-gutter-elt", "left: " + n.gutterLeft[ u ] + "px; width: " + n.gutterWidth[ u ] + "px" ) )
        }
    }
  }

  function gr( e, t, r ) {
    t.alignable && ( t.alignable = null );
    for ( var n = t.node.firstChild, i = void 0; n; n = i ) i = n.nextSibling, "CodeMirror-linewidget" == n.className && t.node.removeChild( n );
    mr( e, t, r )
  }

  function vr( e, t, r, n ) {
    var i = hr( e, t );
    return t.text = t.node = i.pre, i.bgClass && ( t.bgClass = i.bgClass ), i.textClass && ( t.textClass = i.textClass ), dr( e, t ), pr( e, t, r, n ), mr( e, t, n ), t.node
  }

  function mr( e, t, r ) {
    if ( yr( e, t.line, t, r, !0 ), t.rest )
      for ( var n = 0; n < t.rest.length; n++ ) yr( e, t.rest[ n ], t, r, !1 )
  }

  function yr( e, t, r, n, i ) {
    if ( t.widgets )
      for ( var o = cr( r ), l = 0, s = t.widgets; l < s.length; ++l ) {
        var a = s[ l ],
          u = O( "div", [ a.node ], "CodeMirror-linewidget" );
        a.handleMouseEvents || u.setAttribute( "cm-ignore-events", "true" ), br( a, u, r, n ), e.display.input.setUneditable( u ), i && a.above ? o.insertBefore( u, r.gutter || r.text ) : o.appendChild( u ), sr( a, "redraw" )
      }
  }

  function br( e, t, r, n ) {
    if ( e.noHScroll ) {
      ( r.alignable || ( r.alignable = [] ) ).push( t );
      var i = n.wrapperWidth;
      t.style.left = n.fixedPos + "px", e.coverGutter || ( i -= n.gutterTotalWidth, t.style.paddingLeft = n.gutterTotalWidth + "px" ), t.style.width = i + "px"
    }
    e.coverGutter && ( t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || ( t.style.marginLeft = -n.gutterTotalWidth + "px" ) )
  }

  function wr( e ) {
    if ( null != e.height ) return e.height;
    var t = e.doc.cm;
    if ( !t ) return 0;
    if ( !W( document.body, e.node ) ) {
      var r = "position: relative;";
      e.coverGutter && ( r += "margin-left: -" + t.display.gutters.offsetWidth + "px;" ), e.noHScroll && ( r += "width: " + t.display.wrapper.clientWidth + "px;" ), N( t.display.measure, O( "div", [ e.node ], null, r ) )
    }
    return e.height = e.node.parentNode.offsetHeight
  }

  function xr( e, t ) {
    for ( var r = ft( t ); r != e.wrapper; r = r.parentNode )
      if ( !r || 1 == r.nodeType && "true" == r.getAttribute( "cm-ignore-events" ) || r.parentNode == e.sizer && r != e.mover ) return !0
  }

  function Cr( e ) {
    return e.lineSpace.offsetTop
  }

  function Sr( e ) {
    return e.mover.offsetHeight - e.lineSpace.offsetHeight
  }

  function Lr( e ) {
    if ( e.cachedPaddingH ) return e.cachedPaddingH;
    var t = N( e.measure, O( "pre", "x" ) ),
      r = window.getComputedStyle ? window.getComputedStyle( t ) : t.currentStyle,
      n = {
        left: parseInt( r.paddingLeft ),
        right: parseInt( r.paddingRight )
      };
    return isNaN( n.left ) || isNaN( n.right ) || ( e.cachedPaddingH = n ), n
  }

  function kr( e ) {
    return G - e.display.nativeBarWidth
  }

  function Tr( e ) {
    return e.display.scroller.clientWidth - kr( e ) - e.display.barWidth
  }

  function Mr( e ) {
    return e.display.scroller.clientHeight - kr( e ) - e.display.barHeight
  }

  function Nr( e, t, r ) {
    if ( e.line == t ) return {
      map: e.measure.map,
      cache: e.measure.cache
    };
    for ( var n = 0; n < e.rest.length; n++ )
      if ( e.rest[ n ] == t ) return {
        map: e.measure.maps[ n ],
        cache: e.measure.caches[ n ]
      };
    for ( var i = 0; i < e.rest.length; i++ )
      if ( fe( e.rest[ i ] ) > r ) return {
        map: e.measure.maps[ i ],
        cache: e.measure.caches[ i ],
        before: !0
      }
  }

  function Or( e, t, r, n ) {
    return Dr( e, Wr( e, t ), r, n )
  }

  function Ar( e, t ) {
    if ( t >= e.display.viewFrom && t < e.display.viewTo ) return e.display.view[ an( e, t ) ];
    var r = e.display.externalMeasured;
    return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0
  }

  function Wr( e, t ) {
    var r = fe( t ),
      n = Ar( e, r );
    n && !n.text ? n = null : n && n.changes && ( ur( e, n, r, rn( e ) ), e.curOp.forceUpdate = !0 ), n || ( n = function ( e, t ) {
      var r = fe( t = Ge( t ) ),
        n = e.display.externalMeasured = new nr( e.doc, t, r );
      n.lineN = r;
      var i = n.built = Zt( e, n );
      return n.text = i.pre, N( e.display.lineMeasure, i.pre ), n
    }( e, t ) );
    var i = Nr( n, t, r );
    return {
      line: t,
      view: n,
      rect: null,
      map: i.map,
      cache: i.cache,
      before: i.before,
      hasHeights: !1
    }
  }

  function Dr( e, t, r, n, i ) {
    t.before && ( r = -1 );
    var o, a = r + ( n || "" );
    return t.cache.hasOwnProperty( a ) ? o = t.cache[ a ] : ( t.rect || ( t.rect = t.view.text.getBoundingClientRect() ), t.hasHeights || ( ! function ( e, t, r ) {
      var n = e.options.lineWrapping,
        i = n && Tr( e );
      if ( !t.measure.heights || n && t.measure.width != i ) {
        var o = t.measure.heights = [];
        if ( n ) {
          t.measure.width = i;
          for ( var l = t.text.firstChild.getClientRects(), s = 0; s < l.length - 1; s++ ) {
            var a = l[ s ],
              u = l[ s + 1 ];
            Math.abs( a.bottom - u.bottom ) > 2 && o.push( ( a.bottom + u.top ) / 2 - r.top )
          }
        }
        o.push( r.bottom - r.top )
      }
    }( e, t.view, t.rect ), t.hasHeights = !0 ), ( o = function ( e, t, r, n ) {
      var i, o = Pr( t.map, r, n ),
        a = o.node,
        u = o.start,
        c = o.end,
        h = o.collapse;
      if ( 3 == a.nodeType ) {
        for ( var f = 0; f < 4; f++ ) {
          for ( ; u && ie( t.line.text.charAt( o.coverStart + u ) ); ) --u;
          for ( ; o.coverStart + c < o.coverEnd && ie( t.line.text.charAt( o.coverStart + c ) ); ) ++c;
          if ( ( i = l && s < 9 && 0 == u && c == o.coverEnd - o.coverStart ? a.parentNode.getBoundingClientRect() : Er( k( a, u, c ).getClientRects(), n ) ).left || i.right || 0 == u ) break;
          c = u, u -= 1, h = "right"
        }
        l && s < 11 && ( i = function ( e, t ) {
          if ( !window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || ! function ( e ) {
              if ( null != St ) return St;
              var t = N( e, O( "span", "x" ) ),
                r = t.getBoundingClientRect(),
                n = k( t, 0, 1 ).getBoundingClientRect();
              return St = Math.abs( r.left - n.left ) > 1
            }( e ) ) return t;
          var r = screen.logicalXDPI / screen.deviceXDPI,
            n = screen.logicalYDPI / screen.deviceYDPI;
          return {
            left: t.left * r,
            right: t.right * r,
            top: t.top * n,
            bottom: t.bottom * n
          }
        }( e.display.measure, i ) )
      } else {
        var d;
        u > 0 && ( h = n = "right" ), i = e.options.lineWrapping && ( d = a.getClientRects() ).length > 1 ? d[ "right" == n ? d.length - 1 : 0 ] : a.getBoundingClientRect()
      }
      if ( l && s < 9 && !u && ( !i || !i.left && !i.right ) ) {
        var p = a.parentNode.getClientRects()[ 0 ];
        i = p ? {
          left: p.left,
          right: p.left + tn( e.display ),
          top: p.top,
          bottom: p.bottom
        } : Fr
      }
      for ( var g = i.top - t.rect.top, v = i.bottom - t.rect.top, m = ( g + v ) / 2, y = t.view.measure.heights, b = 0; b < y.length - 1 && !( m < y[ b ] ); b++ );
      var w = b ? y[ b - 1 ] : 0,
        x = y[ b ],
        C = {
          left: ( "right" == h ? i.right : i.left ) - t.rect.left,
          right: ( "left" == h ? i.left : i.right ) - t.rect.left,
          top: w,
          bottom: x
        };
      i.left || i.right || ( C.bogus = !0 );
      e.options.singleCursorHeightPerLine || ( C.rtop = g, C.rbottom = v );
      return C
    }( e, t, r, n ) ).bogus || ( t.cache[ a ] = o ) ), {
      left: o.left,
      right: o.right,
      top: i ? o.rtop : o.top,
      bottom: i ? o.rbottom : o.bottom
    }
  }
  var Hr, Fr = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  };

  function Pr( e, t, r ) {
    for ( var n, i, o, l, s, a, u = 0; u < e.length; u += 3 )
      if ( s = e[ u ], a = e[ u + 1 ], t < s ? ( i = 0, o = 1, l = "left" ) : t < a ? o = ( i = t - s ) + 1 : ( u == e.length - 3 || t == a && e[ u + 3 ] > t ) && ( i = ( o = a - s ) - 1, t >= a && ( l = "right" ) ), null != i ) {
        if ( n = e[ u + 2 ], s == a && r == ( n.insertLeft ? "left" : "right" ) && ( l = r ), "left" == r && 0 == i )
          for ( ; u && e[ u - 2 ] == e[ u - 3 ] && e[ u - 1 ].insertLeft; ) n = e[ 2 + ( u -= 3 ) ], l = "left";
        if ( "right" == r && i == a - s )
          for ( ; u < e.length - 3 && e[ u + 3 ] == e[ u + 4 ] && !e[ u + 5 ].insertLeft; ) n = e[ ( u += 3 ) + 2 ], l = "right";
        break
      } return {
      node: n,
      start: i,
      end: o,
      collapse: l,
      coverStart: s,
      coverEnd: a
    }
  }

  function Er( e, t ) {
    var r = Fr;
    if ( "left" == t )
      for ( var n = 0; n < e.length && ( r = e[ n ] ).left == r.right; n++ );
    else
      for ( var i = e.length - 1; i >= 0 && ( r = e[ i ] ).left == r.right; i-- );
    return r
  }

  function zr( e ) {
    if ( e.measure && ( e.measure.cache = {}, e.measure.heights = null, e.rest ) )
      for ( var t = 0; t < e.rest.length; t++ ) e.measure.caches[ t ] = {}
  }

  function Ir( e ) {
    e.display.externalMeasure = null, M( e.display.lineMeasure );
    for ( var t = 0; t < e.display.view.length; t++ ) zr( e.display.view[ t ] )
  }

  function Rr( e ) {
    Ir( e ), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || ( e.display.maxLineChanged = !0 ), e.display.lineNumChars = null
  }

  function Br() {
    return c && v ? -( document.body.getBoundingClientRect().left - parseInt( getComputedStyle( document.body ).marginLeft ) ) : window.pageXOffset || ( document.documentElement || document.body ).scrollLeft
  }

  function Gr() {
    return c && v ? -( document.body.getBoundingClientRect().top - parseInt( getComputedStyle( document.body ).marginTop ) ) : window.pageYOffset || ( document.documentElement || document.body ).scrollTop
  }

  function Ur( e ) {
    var t = 0;
    if ( e.widgets )
      for ( var r = 0; r < e.widgets.length; ++r ) e.widgets[ r ].above && ( t += wr( e.widgets[ r ] ) );
    return t
  }

  function Vr( e, t, r, n, i ) {
    if ( !i ) {
      var o = Ur( t );
      r.top += o, r.bottom += o
    }
    if ( "line" == n ) return r;
    n || ( n = "local" );
    var l = Xe( t );
    if ( "local" == n ? l += Cr( e.display ) : l -= e.display.viewOffset, "page" == n || "window" == n ) {
      var s = e.display.lineSpace.getBoundingClientRect();
      l += s.top + ( "window" == n ? 0 : Gr() );
      var a = s.left + ( "window" == n ? 0 : Br() );
      r.left += a, r.right += a
    }
    return r.top += l, r.bottom += l, r
  }

  function Kr( e, t, r ) {
    if ( "div" == r ) return t;
    var n = t.left,
      i = t.top;
    if ( "page" == r ) n -= Br(), i -= Gr();
    else if ( "local" == r || !r ) {
      var o = e.display.sizer.getBoundingClientRect();
      n += o.left, i += o.top
    }
    var l = e.display.lineSpace.getBoundingClientRect();
    return {
      left: n - l.left,
      top: i - l.top
    }
  }

  function jr( e, t, r, n, i ) {
    return n || ( n = ae( e.doc, t.line ) ), Vr( e, n, Or( e, n, t.ch, i ), r )
  }

  function Xr( e, t, r, n, i, o ) {
    function l( t, l ) {
      var s = Dr( e, i, t, l ? "right" : "left", o );
      return l ? s.left = s.right : s.right = s.left, Vr( e, n, s, r )
    }
    n = n || ae( e.doc, t.line ), i || ( i = Wr( e, n ) );
    var s = Qe( n, e.doc.direction ),
      a = t.ch,
      u = t.sticky;
    if ( a >= n.text.length ? ( a = n.text.length, u = "before" ) : a <= 0 && ( a = 0, u = "after" ), !s ) return l( "before" == u ? a - 1 : a, "before" == u );

    function c( e, t, r ) {
      return l( r ? e - 1 : e, 1 == s[ t ].level != r )
    }
    var h = $e( s, a, u ),
      f = qe,
      d = c( a, h, "before" == u );
    return null != f && ( d.other = c( a, f, "before" != u ) ), d
  }

  function Yr( e, t ) {
    var r = 0;
    t = Se( e.doc, t ), e.options.lineWrapping || ( r = tn( e.display ) * t.ch );
    var n = ae( e.doc, t.line ),
      i = Xe( n ) + Cr( e.display );
    return {
      left: r,
      right: r,
      top: i,
      bottom: i + n.height
    }
  }

  function _r( e, t, r, n, i ) {
    var o = ve( e, t, r );
    return o.xRel = i, n && ( o.outside = !0 ), o
  }

  function qr( e, t, r ) {
    var n = e.doc;
    if ( ( r += e.display.viewOffset ) < 0 ) return _r( n.first, 0, null, !0, -1 );
    var i = de( n, r ),
      o = n.first + n.size - 1;
    if ( i > o ) return _r( n.first + n.size - 1, ae( n, o ).text.length, null, !0, 1 );
    t < 0 && ( t = 0 );
    for ( var l = ae( n, i );; ) {
      var s = Jr( e, l, i, t, r ),
        a = Re( l ),
        u = a && a.find( 0, !0 );
      if ( !a || !( s.ch > u.from.ch || s.ch == u.from.ch && s.xRel > 0 ) ) return s;
      i = fe( l = u.to.line )
    }
  }

  function $r( e, t, r, n ) {
    n -= Ur( t );
    var i = t.text.length,
      o = le( function ( t ) {
        return Dr( e, r, t - 1 ).bottom <= n
      }, i, 0 );
    return {
      begin: o,
      end: i = le( function ( t ) {
        return Dr( e, r, t ).top > n
      }, o, i )
    }
  }

  function Zr( e, t, r, n ) {
    return r || ( r = Wr( e, t ) ), $r( e, t, r, Vr( e, t, Dr( e, r, n ), "line" ).top )
  }

  function Qr( e, t, r, n ) {
    return !( e.bottom <= r ) && ( e.top > r || ( n ? e.left : e.right ) > t )
  }

  function Jr( e, t, r, n, i ) {
    i -= Xe( t );
    var o = Wr( e, t ),
      l = Ur( t ),
      s = 0,
      a = t.text.length,
      u = !0,
      c = Qe( t, e.doc.direction );
    if ( c ) {
      var h = ( e.options.lineWrapping ? function ( e, t, r, n, i, o, l ) {
        var s = $r( e, t, n, l ),
          a = s.begin,
          u = s.end;
        /\s/.test( t.text.charAt( u - 1 ) ) && u--;
        for ( var c = null, h = null, f = 0; f < i.length; f++ ) {
          var d = i[ f ];
          if ( !( d.from >= u || d.to <= a ) ) {
            var p = 1 != d.level,
              g = Dr( e, n, p ? Math.min( u, d.to ) - 1 : Math.max( a, d.from ) ).right,
              v = g < o ? o - g + 1e9 : g - o;
            ( !c || h > v ) && ( c = d, h = v )
          }
        }
        c || ( c = i[ i.length - 1 ] );
        c.from < a && ( c = {
          from: a,
          to: c.to,
          level: c.level
        } );
        c.to > u && ( c = {
          from: c.from,
          to: u,
          level: c.level
        } );
        return c
      } : function ( e, t, r, n, i, o, l ) {
        var s = le( function ( s ) {
            var a = i[ s ],
              u = 1 != a.level;
            return Qr( Xr( e, ve( r, u ? a.to : a.from, u ? "before" : "after" ), "line", t, n ), o, l, !0 )
          }, 0, i.length - 1 ),
          a = i[ s ];
        if ( s > 0 ) {
          var u = 1 != a.level,
            c = Xr( e, ve( r, u ? a.from : a.to, u ? "after" : "before" ), "line", t, n );
          Qr( c, o, l, !0 ) && c.top > l && ( a = i[ s - 1 ] )
        }
        return a
      } )( e, t, r, o, c, n, i );
      s = ( u = 1 != h.level ) ? h.from : h.to - 1, a = u ? h.to : h.from - 1
    }
    var f, d, p = null,
      g = null,
      v = le( function ( t ) {
        var r = Dr( e, o, t );
        return r.top += l, r.bottom += l, !!Qr( r, n, i, !1 ) && ( r.top <= i && r.left <= n && ( p = t, g = r ), !0 )
      }, s, a ),
      m = !1;
    if ( g ) {
      var y = n - g.left < g.right - n,
        b = y == u;
      v = p + ( b ? 0 : 1 ), d = b ? "after" : "before", f = y ? g.left : g.right
    } else {
      u || v != a && v != s || v++, d = 0 == v ? "after" : v == t.text.length ? "before" : Dr( e, o, v - ( u ? 1 : 0 ) ).bottom + l <= i == u ? "after" : "before";
      var w = Xr( e, ve( r, v, d ), "line", t, o );
      f = w.left, m = i < w.top || i >= w.bottom
    }
    return _r( r, v = oe( t.text, v, 1 ), d, m, n - f )
  }

  function en( e ) {
    if ( null != e.cachedTextHeight ) return e.cachedTextHeight;
    if ( null == Hr ) {
      Hr = O( "pre" );
      for ( var t = 0; t < 49; ++t ) Hr.appendChild( document.createTextNode( "x" ) ), Hr.appendChild( O( "br" ) );
      Hr.appendChild( document.createTextNode( "x" ) )
    }
    N( e.measure, Hr );
    var r = Hr.offsetHeight / 50;
    return r > 3 && ( e.cachedTextHeight = r ), M( e.measure ), r || 1
  }

  function tn( e ) {
    if ( null != e.cachedCharWidth ) return e.cachedCharWidth;
    var t = O( "span", "xxxxxxxxxx" ),
      r = O( "pre", [ t ] );
    N( e.measure, r );
    var n = t.getBoundingClientRect(),
      i = ( n.right - n.left ) / 10;
    return i > 2 && ( e.cachedCharWidth = i ), i || 10
  }

  function rn( e ) {
    for ( var t = e.display, r = {}, n = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, l = 0; o; o = o.nextSibling, ++l ) r[ e.options.gutters[ l ] ] = o.offsetLeft + o.clientLeft + i, n[ e.options.gutters[ l ] ] = o.clientWidth;
    return {
      fixedPos: nn( t ),
      gutterTotalWidth: t.gutters.offsetWidth,
      gutterLeft: r,
      gutterWidth: n,
      wrapperWidth: t.wrapper.clientWidth
    }
  }

  function nn( e ) {
    return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
  }

  function on( e ) {
    var t = en( e.display ),
      r = e.options.lineWrapping,
      n = r && Math.max( 5, e.display.scroller.clientWidth / tn( e.display ) - 3 );
    return function ( i ) {
      if ( Ke( e.doc, i ) ) return 0;
      var o = 0;
      if ( i.widgets )
        for ( var l = 0; l < i.widgets.length; l++ ) i.widgets[ l ].height && ( o += i.widgets[ l ].height );
      return r ? o + ( Math.ceil( i.text.length / n ) || 1 ) * t : o + t
    }
  }

  function ln( e ) {
    var t = e.doc,
      r = on( e );
    t.iter( function ( e ) {
      var t = r( e );
      t != e.height && he( e, t )
    } )
  }

  function sn( e, t, r, n ) {
    var i = e.display;
    if ( !r && "true" == ft( t ).getAttribute( "cm-not-content" ) ) return null;
    var o, l, s = i.lineSpace.getBoundingClientRect();
    try {
      o = t.clientX - s.left, l = t.clientY - s.top
    } catch ( t ) {
      return null
    }
    var a, u = qr( e, o, l );
    if ( n && 1 == u.xRel && ( a = ae( e.doc, u.line ).text ).length == u.ch ) {
      var c = I( a, a.length, e.options.tabSize ) - a.length;
      u = ve( u.line, Math.max( 0, Math.round( ( o - Lr( e.display ).left ) / tn( e.display ) ) - c ) )
    }
    return u
  }

  function an( e, t ) {
    if ( t >= e.display.viewTo ) return null;
    if ( ( t -= e.display.viewFrom ) < 0 ) return null;
    for ( var r = e.display.view, n = 0; n < r.length; n++ )
      if ( ( t -= r[ n ].size ) < 0 ) return n
  }

  function un( e ) {
    e.display.input.showSelection( e.display.input.prepareSelection() )
  }

  function cn( e, t ) {
    void 0 === t && ( t = !0 );
    for ( var r = e.doc, n = {}, i = n.cursors = document.createDocumentFragment(), o = n.selection = document.createDocumentFragment(), l = 0; l < r.sel.ranges.length; l++ )
      if ( t || l != r.sel.primIndex ) {
        var s = r.sel.ranges[ l ];
        if ( !( s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom ) ) {
          var a = s.empty();
          ( a || e.options.showCursorWhenSelecting ) && hn( e, s.head, i ), a || dn( e, s, o )
        }
      } return n
  }

  function hn( e, t, r ) {
    var n = Xr( e, t, "div", null, null, !e.options.singleCursorHeightPerLine ),
      i = r.appendChild( O( "div", " ", "CodeMirror-cursor" ) );
    if ( i.style.left = n.left + "px", i.style.top = n.top + "px", i.style.height = Math.max( 0, n.bottom - n.top ) * e.options.cursorHeight + "px", n.other ) {
      var o = r.appendChild( O( "div", " ", "CodeMirror-cursor CodeMirror-secondarycursor" ) );
      o.style.display = "", o.style.left = n.other.left + "px", o.style.top = n.other.top + "px", o.style.height = .85 * ( n.other.bottom - n.other.top ) + "px"
    }
  }

  function fn( e, t ) {
    return e.top - t.top || e.left - t.left
  }

  function dn( e, t, r ) {
    var n = e.display,
      i = e.doc,
      o = document.createDocumentFragment(),
      l = Lr( e.display ),
      s = l.left,
      a = Math.max( n.sizerWidth, Tr( e ) - n.sizer.offsetLeft ) - l.right,
      u = "ltr" == i.direction;

    function c( e, t, r, n ) {
      t < 0 && ( t = 0 ), t = Math.round( t ), n = Math.round( n ), o.appendChild( O( "div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + ( null == r ? a - e : r ) + "px;\n                             height: " + ( n - t ) + "px" ) )
    }

    function h( t, r, n ) {
      var o, l, h = ae( i, t ),
        f = h.text.length;

      function d( r, n ) {
        return jr( e, ve( t, r ), "div", h, n )
      }

      function p( t, r, n ) {
        var i = Zr( e, h, null, t ),
          o = "ltr" == r == ( "after" == n ) ? "left" : "right";
        return d( "after" == n ? i.begin : i.end - ( /\s/.test( h.text.charAt( i.end - 1 ) ) ? 2 : 1 ), o )[ o ]
      }
      var g = Qe( h, i.direction );
      return function ( e, t, r, n ) {
        if ( !e ) return n( t, r, "ltr", 0 );
        for ( var i = !1, o = 0; o < e.length; ++o ) {
          var l = e[ o ];
          ( l.from < r && l.to > t || t == r && l.to == t ) && ( n( Math.max( l.from, t ), Math.min( l.to, r ), 1 == l.level ? "rtl" : "ltr", o ), i = !0 )
        }
        i || n( t, r, "ltr" )
      }( g, r || 0, null == n ? f : n, function ( e, t, i, h ) {
        var v = "ltr" == i,
          m = d( e, v ? "left" : "right" ),
          y = d( t - 1, v ? "right" : "left" ),
          b = null == r && 0 == e,
          w = null == n && t == f,
          x = 0 == h,
          C = !g || h == g.length - 1;
        if ( y.top - m.top <= 3 ) {
          var S = ( u ? w : b ) && C,
            L = ( u ? b : w ) && x ? s : ( v ? m : y ).left,
            k = S ? a : ( v ? y : m ).right;
          c( L, m.top, k - L, m.bottom )
        } else {
          var T, M, N, O;
          v ? ( T = u && b && x ? s : m.left, M = u ? a : p( e, i, "before" ), N = u ? s : p( t, i, "after" ), O = u && w && C ? a : y.right ) : ( T = u ? p( e, i, "before" ) : s, M = !u && b && x ? a : m.right, N = !u && w && C ? s : y.left, O = u ? p( t, i, "after" ) : a ), c( T, m.top, M - T, m.bottom ), m.bottom < y.top && c( s, m.bottom, null, y.top ), c( N, y.top, O - N, y.bottom )
        }( !o || fn( m, o ) < 0 ) && ( o = m ), fn( y, o ) < 0 && ( o = y ), ( !l || fn( m, l ) < 0 ) && ( l = m ), fn( y, l ) < 0 && ( l = y )
      } ), {
        start: o,
        end: l
      }
    }
    var f = t.from(),
      d = t.to();
    if ( f.line == d.line ) h( f.line, f.ch, d.ch );
    else {
      var p = ae( i, f.line ),
        g = ae( i, d.line ),
        v = Ge( p ) == Ge( g ),
        m = h( f.line, f.ch, v ? p.text.length + 1 : null ).end,
        y = h( d.line, v ? 0 : null, d.ch ).start;
      v && ( m.top < y.top - 2 ? ( c( m.right, m.top, null, m.bottom ), c( s, y.top, y.left, y.bottom ) ) : c( m.right, m.top, y.left - m.right, m.bottom ) ), m.bottom < y.top && c( s, m.bottom, null, y.top )
    }
    r.appendChild( o )
  }

  function pn( e ) {
    if ( e.state.focused ) {
      var t = e.display;
      clearInterval( t.blinker );
      var r = !0;
      t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval( function () {
        return t.cursorDiv.style.visibility = ( r = !r ) ? "" : "hidden"
      }, e.options.cursorBlinkRate ) : e.options.cursorBlinkRate < 0 && ( t.cursorDiv.style.visibility = "hidden" )
    }
  }

  function gn( e ) {
    e.state.focused || ( e.display.input.focus(), mn( e ) )
  }

  function vn( e ) {
    e.state.delayingBlurEvent = !0, setTimeout( function () {
      e.state.delayingBlurEvent && ( e.state.delayingBlurEvent = !1, yn( e ) )
    }, 100 )
  }

  function mn( e, t ) {
    e.state.delayingBlurEvent && ( e.state.delayingBlurEvent = !1 ), "nocursor" != e.options.readOnly && ( e.state.focused || ( nt( e, "focus", e, t ), e.state.focused = !0, H( e.display.wrapper, "CodeMirror-focused" ), e.curOp || e.display.selForContextMenu == e.doc.sel || ( e.display.input.reset(), a && setTimeout( function () {
      return e.display.input.reset( !0 )
    }, 20 ) ), e.display.input.receivedFocus() ), pn( e ) )
  }

  function yn( e, t ) {
    e.state.delayingBlurEvent || ( e.state.focused && ( nt( e, "blur", e, t ), e.state.focused = !1, T( e.display.wrapper, "CodeMirror-focused" ) ), clearInterval( e.display.blinker ), setTimeout( function () {
      e.state.focused || ( e.display.shift = !1 )
    }, 150 ) )
  }

  function bn( e ) {
    for ( var t = e.display, r = t.lineDiv.offsetTop, n = 0; n < t.view.length; n++ ) {
      var i = t.view[ n ],
        o = void 0;
      if ( !i.hidden ) {
        if ( l && s < 8 ) {
          var a = i.node.offsetTop + i.node.offsetHeight;
          o = a - r, r = a
        } else {
          var u = i.node.getBoundingClientRect();
          o = u.bottom - u.top
        }
        var c = i.line.height - o;
        if ( o < 2 && ( o = en( t ) ), ( c > .005 || c < -.005 ) && ( he( i.line, o ), wn( i.line ), i.rest ) )
          for ( var h = 0; h < i.rest.length; h++ ) wn( i.rest[ h ] )
      }
    }
  }

  function wn( e ) {
    if ( e.widgets )
      for ( var t = 0; t < e.widgets.length; ++t ) {
        var r = e.widgets[ t ],
          n = r.node.parentNode;
        n && ( r.height = n.offsetHeight )
      }
  }

  function xn( e, t, r ) {
    var n = r && null != r.top ? Math.max( 0, r.top ) : e.scroller.scrollTop;
    n = Math.floor( n - Cr( e ) );
    var i = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight,
      o = de( t, n ),
      l = de( t, i );
    if ( r && r.ensure ) {
      var s = r.ensure.from.line,
        a = r.ensure.to.line;
      s < o ? ( o = s, l = de( t, Xe( ae( t, s ) ) + e.wrapper.clientHeight ) ) : Math.min( a, t.lastLine() ) >= l && ( o = de( t, Xe( ae( t, a ) ) - e.wrapper.clientHeight ), l = a )
    }
    return {
      from: o,
      to: Math.max( l, o + 1 )
    }
  }

  function Cn( e ) {
    var t = e.display,
      r = t.view;
    if ( t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter ) {
      for ( var n = nn( t ) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = n + "px", l = 0; l < r.length; l++ )
        if ( !r[ l ].hidden ) {
          e.options.fixedGutter && ( r[ l ].gutter && ( r[ l ].gutter.style.left = o ), r[ l ].gutterBackground && ( r[ l ].gutterBackground.style.left = o ) );
          var s = r[ l ].alignable;
          if ( s )
            for ( var a = 0; a < s.length; a++ ) s[ a ].style.left = o
        } e.options.fixedGutter && ( t.gutters.style.left = n + i + "px" )
    }
  }

  function Sn( e ) {
    if ( !e.options.lineNumbers ) return !1;
    var t = e.doc,
      r = ge( e.options, t.first + t.size - 1 ),
      n = e.display;
    if ( r.length != n.lineNumChars ) {
      var i = n.measure.appendChild( O( "div", [ O( "div", r ) ], "CodeMirror-linenumber CodeMirror-gutter-elt" ) ),
        o = i.firstChild.offsetWidth,
        l = i.offsetWidth - o;
      return n.lineGutter.style.width = "", n.lineNumInnerWidth = Math.max( o, n.lineGutter.offsetWidth - l ) + 1, n.lineNumWidth = n.lineNumInnerWidth + l, n.lineNumChars = n.lineNumInnerWidth ? r.length : -1, n.lineGutter.style.width = n.lineNumWidth + "px", ai( e ), !0
    }
    return !1
  }

  function Ln( e, t ) {
    var r = e.display,
      n = en( e.display );
    t.top < 0 && ( t.top = 0 );
    var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : r.scroller.scrollTop,
      o = Mr( e ),
      l = {};
    t.bottom - t.top > o && ( t.bottom = t.top + o );
    var s = e.doc.height + Sr( r ),
      a = t.top < n,
      u = t.bottom > s - n;
    if ( t.top < i ) l.scrollTop = a ? 0 : t.top;
    else if ( t.bottom > i + o ) {
      var c = Math.min( t.top, ( u ? s : t.bottom ) - o );
      c != i && ( l.scrollTop = c )
    }
    var h = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : r.scroller.scrollLeft,
      f = Tr( e ) - ( e.options.fixedGutter ? r.gutters.offsetWidth : 0 ),
      d = t.right - t.left > f;
    return d && ( t.right = t.left + f ), t.left < 10 ? l.scrollLeft = 0 : t.left < h ? l.scrollLeft = Math.max( 0, t.left - ( d ? 0 : 10 ) ) : t.right > f + h - 3 && ( l.scrollLeft = t.right + ( d ? 0 : 10 ) - f ), l
  }

  function kn( e, t ) {
    null != t && ( Nn( e ), e.curOp.scrollTop = ( null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop ) + t )
  }

  function Tn( e ) {
    Nn( e );
    var t = e.getCursor();
    e.curOp.scrollToPos = {
      from: t,
      to: t,
      margin: e.options.cursorScrollMargin
    }
  }

  function Mn( e, t, r ) {
    null == t && null == r || Nn( e ), null != t && ( e.curOp.scrollLeft = t ), null != r && ( e.curOp.scrollTop = r )
  }

  function Nn( e ) {
    var t = e.curOp.scrollToPos;
    t && ( e.curOp.scrollToPos = null, On( e, Yr( e, t.from ), Yr( e, t.to ), t.margin ) )
  }

  function On( e, t, r, n ) {
    var i = Ln( e, {
      left: Math.min( t.left, r.left ),
      top: Math.min( t.top, r.top ) - n,
      right: Math.max( t.right, r.right ),
      bottom: Math.max( t.bottom, r.bottom ) + n
    } );
    Mn( e, i.scrollLeft, i.scrollTop )
  }

  function An( e, t ) {
    Math.abs( e.doc.scrollTop - t ) < 2 || ( r || si( e, {
      top: t
    } ), Wn( e, t, !0 ), r && si( e ), ri( e, 100 ) )
  }

  function Wn( e, t, r ) {
    t = Math.min( e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t ), ( e.display.scroller.scrollTop != t || r ) && ( e.doc.scrollTop = t, e.display.scrollbars.setScrollTop( t ), e.display.scroller.scrollTop != t && ( e.display.scroller.scrollTop = t ) )
  }

  function Dn( e, t, r, n ) {
    t = Math.min( t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth ), ( r ? t == e.doc.scrollLeft : Math.abs( e.doc.scrollLeft - t ) < 2 ) && !n || ( e.doc.scrollLeft = t, Cn( e ), e.display.scroller.scrollLeft != t && ( e.display.scroller.scrollLeft = t ), e.display.scrollbars.setScrollLeft( t ) )
  }

  function Hn( e ) {
    var t = e.display,
      r = t.gutters.offsetWidth,
      n = Math.round( e.doc.height + Sr( e.display ) );
    return {
      clientHeight: t.scroller.clientHeight,
      viewHeight: t.wrapper.clientHeight,
      scrollWidth: t.scroller.scrollWidth,
      clientWidth: t.scroller.clientWidth,
      viewWidth: t.wrapper.clientWidth,
      barLeft: e.options.fixedGutter ? r : 0,
      docHeight: n,
      scrollHeight: n + kr( e ) + t.barHeight,
      nativeBarWidth: t.nativeBarWidth,
      gutterWidth: r
    }
  }
  var Fn = function ( e, t, r ) {
    this.cm = r;
    var n = this.vert = O( "div", [ O( "div", null, null, "min-width: 1px" ) ], "CodeMirror-vscrollbar" ),
      i = this.horiz = O( "div", [ O( "div", null, null, "height: 100%; min-height: 1px" ) ], "CodeMirror-hscrollbar" );
    e( n ), e( i ), et( n, "scroll", function () {
      n.clientHeight && t( n.scrollTop, "vertical" )
    } ), et( i, "scroll", function () {
      i.clientWidth && t( i.scrollLeft, "horizontal" )
    } ), this.checkedZeroWidth = !1, l && s < 8 && ( this.horiz.style.minHeight = this.vert.style.minWidth = "18px" )
  };
  Fn.prototype.update = function ( e ) {
    var t = e.scrollWidth > e.clientWidth + 1,
      r = e.scrollHeight > e.clientHeight + 1,
      n = e.nativeBarWidth;
    if ( r ) {
      this.vert.style.display = "block", this.vert.style.bottom = t ? n + "px" : "0";
      var i = e.viewHeight - ( t ? n : 0 );
      this.vert.firstChild.style.height = Math.max( 0, e.scrollHeight - e.clientHeight + i ) + "px"
    } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
    if ( t ) {
      this.horiz.style.display = "block", this.horiz.style.right = r ? n + "px" : "0", this.horiz.style.left = e.barLeft + "px";
      var o = e.viewWidth - e.barLeft - ( r ? n : 0 );
      this.horiz.firstChild.style.width = Math.max( 0, e.scrollWidth - e.clientWidth + o ) + "px"
    } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
    return !this.checkedZeroWidth && e.clientHeight > 0 && ( 0 == n && this.zeroWidthHack(), this.checkedZeroWidth = !0 ), {
      right: r ? n : 0,
      bottom: t ? n : 0
    }
  }, Fn.prototype.setScrollLeft = function ( e ) {
    this.horiz.scrollLeft != e && ( this.horiz.scrollLeft = e ), this.disableHoriz && this.enableZeroWidthBar( this.horiz, this.disableHoriz, "horiz" )
  }, Fn.prototype.setScrollTop = function ( e ) {
    this.vert.scrollTop != e && ( this.vert.scrollTop = e ), this.disableVert && this.enableZeroWidthBar( this.vert, this.disableVert, "vert" )
  }, Fn.prototype.zeroWidthHack = function () {
    var e = y && !d ? "12px" : "18px";
    this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new R, this.disableVert = new R
  }, Fn.prototype.enableZeroWidthBar = function ( e, t, r ) {
    e.style.pointerEvents = "auto", t.set( 1e3, function n() {
      var i = e.getBoundingClientRect();
      ( "vert" == r ? document.elementFromPoint( i.right - 1, ( i.top + i.bottom ) / 2 ) : document.elementFromPoint( ( i.right + i.left ) / 2, i.bottom - 1 ) ) != e ? e.style.pointerEvents = "none" : t.set( 1e3, n )
    } )
  }, Fn.prototype.clear = function () {
    var e = this.horiz.parentNode;
    e.removeChild( this.horiz ), e.removeChild( this.vert )
  };
  var Pn = function () {};

  function En( e, t ) {
    t || ( t = Hn( e ) );
    var r = e.display.barWidth,
      n = e.display.barHeight;
    zn( e, t );
    for ( var i = 0; i < 4 && r != e.display.barWidth || n != e.display.barHeight; i++ ) r != e.display.barWidth && e.options.lineWrapping && bn( e ), zn( e, Hn( e ) ), r = e.display.barWidth, n = e.display.barHeight
  }

  function zn( e, t ) {
    var r = e.display,
      n = r.scrollbars.update( t );
    r.sizer.style.paddingRight = ( r.barWidth = n.right ) + "px", r.sizer.style.paddingBottom = ( r.barHeight = n.bottom ) + "px", r.heightForcer.style.borderBottom = n.bottom + "px solid transparent", n.right && n.bottom ? ( r.scrollbarFiller.style.display = "block", r.scrollbarFiller.style.height = n.bottom + "px", r.scrollbarFiller.style.width = n.right + "px" ) : r.scrollbarFiller.style.display = "", n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? ( r.gutterFiller.style.display = "block", r.gutterFiller.style.height = n.bottom + "px", r.gutterFiller.style.width = t.gutterWidth + "px" ) : r.gutterFiller.style.display = ""
  }
  Pn.prototype.update = function () {
    return {
      bottom: 0,
      right: 0
    }
  }, Pn.prototype.setScrollLeft = function () {}, Pn.prototype.setScrollTop = function () {}, Pn.prototype.clear = function () {};
  var In = {
    native: Fn,
    null: Pn
  };

  function Rn( e ) {
    e.display.scrollbars && ( e.display.scrollbars.clear(), e.display.scrollbars.addClass && T( e.display.wrapper, e.display.scrollbars.addClass ) ), e.display.scrollbars = new In[ e.options.scrollbarStyle ]( function ( t ) {
      e.display.wrapper.insertBefore( t, e.display.scrollbarFiller ), et( t, "mousedown", function () {
        e.state.focused && setTimeout( function () {
          return e.display.input.focus()
        }, 0 )
      } ), t.setAttribute( "cm-not-content", "true" )
    }, function ( t, r ) {
      "horizontal" == r ? Dn( e, t ) : An( e, t )
    }, e ), e.display.scrollbars.addClass && H( e.display.wrapper, e.display.scrollbars.addClass )
  }
  var Bn = 0;

  function Gn( e ) {
    var t;
    e.curOp = {
      cm: e,
      viewChanged: !1,
      startHeight: e.doc.height,
      forceUpdate: !1,
      updateInput: null,
      typing: !1,
      changeObjs: null,
      cursorActivityHandlers: null,
      cursorActivityCalled: 0,
      selectionChanged: !1,
      updateMaxLine: !1,
      scrollLeft: null,
      scrollTop: null,
      scrollToPos: null,
      focus: !1,
      id: ++Bn
    }, t = e.curOp, or ? or.ops.push( t ) : t.ownsGroup = or = {
      ops: [ t ],
      delayedCallbacks: []
    }
  }

  function Un( e ) {
    ! function ( e, t ) {
      var r = e.ownsGroup;
      if ( r ) try {
        ! function ( e ) {
          var t = e.delayedCallbacks,
            r = 0;
          do {
            for ( ; r < t.length; r++ ) t[ r ].call( null );
            for ( var n = 0; n < e.ops.length; n++ ) {
              var i = e.ops[ n ];
              if ( i.cursorActivityHandlers )
                for ( ; i.cursorActivityCalled < i.cursorActivityHandlers.length; ) i.cursorActivityHandlers[ i.cursorActivityCalled++ ].call( null, i.cm )
            }
          } while ( r < t.length )
        }( r )
      } finally {
        or = null, t( r )
      }
    }( e.curOp, function ( e ) {
      for ( var t = 0; t < e.ops.length; t++ ) e.ops[ t ].cm.curOp = null;
      ! function ( e ) {
        for ( var t = e.ops, r = 0; r < t.length; r++ ) Vn( t[ r ] );
        for ( var n = 0; n < t.length; n++ )( i = t[ n ] ).updatedDisplay = i.mustUpdate && oi( i.cm, i.update );
        var i;
        for ( var o = 0; o < t.length; o++ ) Kn( t[ o ] );
        for ( var l = 0; l < t.length; l++ ) jn( t[ l ] );
        for ( var s = 0; s < t.length; s++ ) Xn( t[ s ] )
      }( e )
    } )
  }

  function Vn( e ) {
    var t = e.cm,
      r = t.display;
    ! function ( e ) {
      var t = e.display;
      !t.scrollbarsClipped && t.scroller.offsetWidth && ( t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = kr( e ) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = kr( e ) + "px", t.scrollbarsClipped = !0 )
    }( t ), e.updateMaxLine && _e( t ), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && ( e.scrollToPos.from.line < r.viewFrom || e.scrollToPos.to.line >= r.viewTo ) || r.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new ii( t, e.mustUpdate && {
      top: e.scrollTop,
      ensure: e.scrollToPos
    }, e.forceUpdate )
  }

  function Kn( e ) {
    var t = e.cm,
      r = t.display;
    e.updatedDisplay && bn( t ), e.barMeasure = Hn( t ), r.maxLineChanged && !t.options.lineWrapping && ( e.adjustWidthTo = Or( t, r.maxLine, r.maxLine.text.length ).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max( r.scroller.clientWidth, r.sizer.offsetLeft + e.adjustWidthTo + kr( t ) + t.display.barWidth ), e.maxScrollLeft = Math.max( 0, r.sizer.offsetLeft + e.adjustWidthTo - Tr( t ) ) ), ( e.updatedDisplay || e.selectionChanged ) && ( e.preparedSelection = r.input.prepareSelection() )
  }

  function jn( e ) {
    var t = e.cm;
    null != e.adjustWidthTo && ( t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && Dn( t, Math.min( t.display.scroller.scrollLeft, e.maxScrollLeft ), !0 ), t.display.maxLineChanged = !1 );
    var r = e.focus && e.focus == D();
    e.preparedSelection && t.display.input.showSelection( e.preparedSelection, r ), ( e.updatedDisplay || e.startHeight != t.doc.height ) && En( t, e.barMeasure ), e.updatedDisplay && ui( t, e.barMeasure ), e.selectionChanged && pn( t ), t.state.focused && e.updateInput && t.display.input.reset( e.typing ), r && gn( e.cm )
  }

  function Xn( e ) {
    var t = e.cm,
      r = t.display,
      n = t.doc;
    ( e.updatedDisplay && li( t, e.update ), null == r.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || ( r.wheelStartX = r.wheelStartY = null ), null != e.scrollTop && Wn( t, e.scrollTop, e.forceScroll ), null != e.scrollLeft && Dn( t, e.scrollLeft, !0, !0 ), e.scrollToPos ) && function ( e, t ) {
      if ( !it( e, "scrollCursorIntoView" ) ) {
        var r = e.display,
          n = r.sizer.getBoundingClientRect(),
          i = null;
        if ( t.top + n.top < 0 ? i = !0 : t.bottom + n.top > ( window.innerHeight || document.documentElement.clientHeight ) && ( i = !1 ), null != i && !p ) {
          var o = O( "div", "​", null, "position: absolute;\n                         top: " + ( t.top - r.viewOffset - Cr( e.display ) ) + "px;\n                         height: " + ( t.bottom - t.top + kr( e ) + r.barHeight ) + "px;\n                         left: " + t.left + "px; width: " + Math.max( 2, t.right - t.left ) + "px;" );
          e.display.lineSpace.appendChild( o ), o.scrollIntoView( i ), e.display.lineSpace.removeChild( o )
        }
      }
    }( t, function ( e, t, r, n ) {
      var i;
      null == n && ( n = 0 ), e.options.lineWrapping || t != r || ( r = "before" == ( t = t.ch ? ve( t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after" ) : t ).sticky ? ve( t.line, t.ch + 1, "before" ) : t );
      for ( var o = 0; o < 5; o++ ) {
        var l = !1,
          s = Xr( e, t ),
          a = r && r != t ? Xr( e, r ) : s,
          u = Ln( e, i = {
            left: Math.min( s.left, a.left ),
            top: Math.min( s.top, a.top ) - n,
            right: Math.max( s.left, a.left ),
            bottom: Math.max( s.bottom, a.bottom ) + n
          } ),
          c = e.doc.scrollTop,
          h = e.doc.scrollLeft;
        if ( null != u.scrollTop && ( An( e, u.scrollTop ), Math.abs( e.doc.scrollTop - c ) > 1 && ( l = !0 ) ), null != u.scrollLeft && ( Dn( e, u.scrollLeft ), Math.abs( e.doc.scrollLeft - h ) > 1 && ( l = !0 ) ), !l ) break
      }
      return i
    }( t, Se( n, e.scrollToPos.from ), Se( n, e.scrollToPos.to ), e.scrollToPos.margin ) );
    var i = e.maybeHiddenMarkers,
      o = e.maybeUnhiddenMarkers;
    if ( i )
      for ( var l = 0; l < i.length; ++l ) i[ l ].lines.length || nt( i[ l ], "hide" );
    if ( o )
      for ( var s = 0; s < o.length; ++s ) o[ s ].lines.length && nt( o[ s ], "unhide" );
    r.wrapper.offsetHeight && ( n.scrollTop = t.display.scroller.scrollTop ), e.changeObjs && nt( t, "changes", t, e.changeObjs ), e.update && e.update.finish()
  }

  function Yn( e, t ) {
    if ( e.curOp ) return t();
    Gn( e );
    try {
      return t()
    } finally {
      Un( e )
    }
  }

  function _n( e, t ) {
    return function () {
      if ( e.curOp ) return t.apply( e, arguments );
      Gn( e );
      try {
        return t.apply( e, arguments )
      } finally {
        Un( e )
      }
    }
  }

  function qn( e ) {
    return function () {
      if ( this.curOp ) return e.apply( this, arguments );
      Gn( this );
      try {
        return e.apply( this, arguments )
      } finally {
        Un( this )
      }
    }
  }

  function $n( e ) {
    return function () {
      var t = this.cm;
      if ( !t || t.curOp ) return e.apply( this, arguments );
      Gn( t );
      try {
        return e.apply( this, arguments )
      } finally {
        Un( t )
      }
    }
  }

  function Zn( e, t, r, n ) {
    null == t && ( t = e.doc.first ), null == r && ( r = e.doc.first + e.doc.size ), n || ( n = 0 );
    var i = e.display;
    if ( n && r < i.viewTo && ( null == i.updateLineNumbers || i.updateLineNumbers > t ) && ( i.updateLineNumbers = t ), e.curOp.viewChanged = !0, t >= i.viewTo ) Te && Ue( e.doc, t ) < i.viewTo && Jn( e );
    else if ( r <= i.viewFrom ) Te && Ve( e.doc, r + n ) > i.viewFrom ? Jn( e ) : ( i.viewFrom += n, i.viewTo += n );
    else if ( t <= i.viewFrom && r >= i.viewTo ) Jn( e );
    else if ( t <= i.viewFrom ) {
      var o = ei( e, r, r + n, 1 );
      o ? ( i.view = i.view.slice( o.index ), i.viewFrom = o.lineN, i.viewTo += n ) : Jn( e )
    } else if ( r >= i.viewTo ) {
      var l = ei( e, t, t, -1 );
      l ? ( i.view = i.view.slice( 0, l.index ), i.viewTo = l.lineN ) : Jn( e )
    } else {
      var s = ei( e, t, t, -1 ),
        a = ei( e, r, r + n, 1 );
      s && a ? ( i.view = i.view.slice( 0, s.index ).concat( ir( e, s.lineN, a.lineN ) ).concat( i.view.slice( a.index ) ), i.viewTo += n ) : Jn( e )
    }
    var u = i.externalMeasured;
    u && ( r < u.lineN ? u.lineN += n : t < u.lineN + u.size && ( i.externalMeasured = null ) )
  }

  function Qn( e, t, r ) {
    e.curOp.viewChanged = !0;
    var n = e.display,
      i = e.display.externalMeasured;
    if ( i && t >= i.lineN && t < i.lineN + i.size && ( n.externalMeasured = null ), !( t < n.viewFrom || t >= n.viewTo ) ) {
      var o = n.view[ an( e, t ) ];
      if ( null != o.node ) {
        var l = o.changes || ( o.changes = [] ); - 1 == B( l, r ) && l.push( r )
      }
    }
  }

  function Jn( e ) {
    e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
  }

  function ei( e, t, r, n ) {
    var i, o = an( e, t ),
      l = e.display.view;
    if ( !Te || r == e.doc.first + e.doc.size ) return {
      index: o,
      lineN: r
    };
    for ( var s = e.display.viewFrom, a = 0; a < o; a++ ) s += l[ a ].size;
    if ( s != t ) {
      if ( n > 0 ) {
        if ( o == l.length - 1 ) return null;
        i = s + l[ o ].size - t, o++
      } else i = s - t;
      t += i, r += i
    }
    for ( ; Ue( e.doc, r ) != r; ) {
      if ( o == ( n < 0 ? 0 : l.length - 1 ) ) return null;
      r += n * l[ o - ( n < 0 ? 1 : 0 ) ].size, o += n
    }
    return {
      index: o,
      lineN: r
    }
  }

  function ti( e ) {
    for ( var t = e.display.view, r = 0, n = 0; n < t.length; n++ ) {
      var i = t[ n ];
      i.hidden || i.node && !i.changes || ++r
    }
    return r
  }

  function ri( e, t ) {
    e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set( t, E( ni, e ) )
  }

  function ni( e ) {
    var t = e.doc;
    if ( !( t.highlightFrontier >= e.display.viewTo ) ) {
      var r = +new Date + e.options.workTime,
        n = It( e, t.highlightFrontier ),
        i = [];
      t.iter( n.line, Math.min( t.first + t.size, e.display.viewTo + 500 ), function ( o ) {
        if ( n.line >= e.display.viewFrom ) {
          var l = o.styles,
            s = o.text.length > e.options.maxHighlightLength ? At( t.mode, n.state ) : null,
            a = Et( e, o, n, !0 );
          s && ( n.state = s ), o.styles = a.styles;
          var u = o.styleClasses,
            c = a.classes;
          c ? o.styleClasses = c : u && ( o.styleClasses = null );
          for ( var h = !l || l.length != o.styles.length || u != c && ( !u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass ), f = 0; !h && f < l.length; ++f ) h = l[ f ] != o.styles[ f ];
          h && i.push( n.line ), o.stateAfter = n.save(), n.nextLine()
        } else o.text.length <= e.options.maxHighlightLength && Rt( e, o.text, n ), o.stateAfter = n.line % 5 == 0 ? n.save() : null, n.nextLine();
        if ( +new Date > r ) return ri( e, e.options.workDelay ), !0
      } ), t.highlightFrontier = n.line, t.modeFrontier = Math.max( t.modeFrontier, n.line ), i.length && Yn( e, function () {
        for ( var t = 0; t < i.length; t++ ) Qn( e, i[ t ], "text" )
      } )
    }
  }
  var ii = function ( e, t, r ) {
    var n = e.display;
    this.viewport = t, this.visible = xn( n, e.doc, t ), this.editorIsHidden = !n.wrapper.offsetWidth, this.wrapperHeight = n.wrapper.clientHeight, this.wrapperWidth = n.wrapper.clientWidth, this.oldDisplayWidth = Tr( e ), this.force = r, this.dims = rn( e ), this.events = []
  };

  function oi( e, t ) {
    var r = e.display,
      n = e.doc;
    if ( t.editorIsHidden ) return Jn( e ), !1;
    if ( !t.force && t.visible.from >= r.viewFrom && t.visible.to <= r.viewTo && ( null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo ) && r.renderedView == r.view && 0 == ti( e ) ) return !1;
    Sn( e ) && ( Jn( e ), t.dims = rn( e ) );
    var i = n.first + n.size,
      o = Math.max( t.visible.from - e.options.viewportMargin, n.first ),
      l = Math.min( i, t.visible.to + e.options.viewportMargin );
    r.viewFrom < o && o - r.viewFrom < 20 && ( o = Math.max( n.first, r.viewFrom ) ), r.viewTo > l && r.viewTo - l < 20 && ( l = Math.min( i, r.viewTo ) ), Te && ( o = Ue( e.doc, o ), l = Ve( e.doc, l ) );
    var s = o != r.viewFrom || l != r.viewTo || r.lastWrapHeight != t.wrapperHeight || r.lastWrapWidth != t.wrapperWidth;
    ! function ( e, t, r ) {
      var n = e.display;
      0 == n.view.length || t >= n.viewTo || r <= n.viewFrom ? ( n.view = ir( e, t, r ), n.viewFrom = t ) : ( n.viewFrom > t ? n.view = ir( e, t, n.viewFrom ).concat( n.view ) : n.viewFrom < t && ( n.view = n.view.slice( an( e, t ) ) ), n.viewFrom = t, n.viewTo < r ? n.view = n.view.concat( ir( e, n.viewTo, r ) ) : n.viewTo > r && ( n.view = n.view.slice( 0, an( e, r ) ) ) ), n.viewTo = r
    }( e, o, l ), r.viewOffset = Xe( ae( e.doc, r.viewFrom ) ), e.display.mover.style.top = r.viewOffset + "px";
    var u = ti( e );
    if ( !s && 0 == u && !t.force && r.renderedView == r.view && ( null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo ) ) return !1;
    var c = function ( e ) {
      if ( e.hasFocus() ) return null;
      var t = D();
      if ( !t || !W( e.display.lineDiv, t ) ) return null;
      var r = {
        activeElt: t
      };
      if ( window.getSelection ) {
        var n = window.getSelection();
        n.anchorNode && n.extend && W( e.display.lineDiv, n.anchorNode ) && ( r.anchorNode = n.anchorNode, r.anchorOffset = n.anchorOffset, r.focusNode = n.focusNode, r.focusOffset = n.focusOffset )
      }
      return r
    }( e );
    return u > 4 && ( r.lineDiv.style.display = "none" ),
      function ( e, t, r ) {
        var n = e.display,
          i = e.options.lineNumbers,
          o = n.lineDiv,
          l = o.firstChild;

        function s( t ) {
          var r = t.nextSibling;
          return a && y && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild( t ), r
        }
        for ( var u = n.view, c = n.viewFrom, h = 0; h < u.length; h++ ) {
          var f = u[ h ];
          if ( f.hidden );
          else if ( f.node && f.node.parentNode == o ) {
            for ( ; l != f.node; ) l = s( l );
            var d = i && null != t && t <= c && f.lineNumber;
            f.changes && ( B( f.changes, "gutter" ) > -1 && ( d = !1 ), ur( e, f, c, r ) ), d && ( M( f.lineNumber ), f.lineNumber.appendChild( document.createTextNode( ge( e.options, c ) ) ) ), l = f.node.nextSibling
          } else {
            var p = vr( e, f, c, r );
            o.insertBefore( p, l )
          }
          c += f.size
        }
        for ( ; l; ) l = s( l )
      }( e, r.updateLineNumbers, t.dims ), u > 4 && ( r.lineDiv.style.display = "" ), r.renderedView = r.view,
      function ( e ) {
        if ( e && e.activeElt && e.activeElt != D() && ( e.activeElt.focus(), e.anchorNode && W( document.body, e.anchorNode ) && W( document.body, e.focusNode ) ) ) {
          var t = window.getSelection(),
            r = document.createRange();
          r.setEnd( e.anchorNode, e.anchorOffset ), r.collapse( !1 ), t.removeAllRanges(), t.addRange( r ), t.extend( e.focusNode, e.focusOffset )
        }
      }( c ), M( r.cursorDiv ), M( r.selectionDiv ), r.gutters.style.height = r.sizer.style.minHeight = 0, s && ( r.lastWrapHeight = t.wrapperHeight, r.lastWrapWidth = t.wrapperWidth, ri( e, 400 ) ), r.updateLineNumbers = null, !0
  }

  function li( e, t ) {
    for ( var r = t.viewport, n = !0;
      ( n && e.options.lineWrapping && t.oldDisplayWidth != Tr( e ) || ( r && null != r.top && ( r = {
        top: Math.min( e.doc.height + Sr( e.display ) - Mr( e ), r.top )
      } ), t.visible = xn( e.display, e.doc, r ), !( t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo ) ) ) && oi( e, t ); n = !1 ) {
      bn( e );
      var i = Hn( e );
      un( e ), En( e, i ), ui( e, i ), t.force = !1
    }
    t.signal( e, "update", e ), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || ( t.signal( e, "viewportChange", e, e.display.viewFrom, e.display.viewTo ), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo )
  }

  function si( e, t ) {
    var r = new ii( e, t );
    if ( oi( e, r ) ) {
      bn( e ), li( e, r );
      var n = Hn( e );
      un( e ), En( e, n ), ui( e, n ), r.finish()
    }
  }

  function ai( e ) {
    var t = e.display.gutters.offsetWidth;
    e.display.sizer.style.marginLeft = t + "px"
  }

  function ui( e, t ) {
    e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + kr( e ) + "px"
  }

  function ci( e ) {
    var t = e.display.gutters,
      r = e.options.gutters;
    M( t );
    for ( var n = 0; n < r.length; ++n ) {
      var i = r[ n ],
        o = t.appendChild( O( "div", null, "CodeMirror-gutter " + i ) );
      "CodeMirror-linenumbers" == i && ( e.display.lineGutter = o, o.style.width = ( e.display.lineNumWidth || 1 ) + "px" )
    }
    t.style.display = n ? "" : "none", ai( e )
  }

  function hi( e ) {
    var t = B( e.gutters, "CodeMirror-linenumbers" ); - 1 == t && e.lineNumbers ? e.gutters = e.gutters.concat( [ "CodeMirror-linenumbers" ] ) : t > -1 && !e.lineNumbers && ( e.gutters = e.gutters.slice( 0 ), e.gutters.splice( t, 1 ) )
  }
  ii.prototype.signal = function ( e, t ) {
    lt( e, t ) && this.events.push( arguments )
  }, ii.prototype.finish = function () {
    for ( var e = 0; e < this.events.length; e++ ) nt.apply( null, this.events[ e ] )
  };
  var fi = 0,
    di = null;

  function pi( e ) {
    var t = e.wheelDeltaX,
      r = e.wheelDeltaY;
    return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && ( t = e.detail ), null == r && e.detail && e.axis == e.VERTICAL_AXIS ? r = e.detail : null == r && ( r = e.wheelDelta ), {
      x: t,
      y: r
    }
  }

  function gi( e ) {
    var t = pi( e );
    return t.x *= di, t.y *= di, t
  }

  function vi( e, t ) {
    var n = pi( t ),
      i = n.x,
      o = n.y,
      l = e.display,
      s = l.scroller,
      u = s.scrollWidth > s.clientWidth,
      c = s.scrollHeight > s.clientHeight;
    if ( i && u || o && c ) {
      if ( o && y && a ) e: for ( var f = t.target, d = l.view; f != s; f = f.parentNode )
        for ( var p = 0; p < d.length; p++ )
          if ( d[ p ].node == f ) {
            e.display.currentWheelTarget = f;
            break e
          } if ( i && !r && !h && null != di ) return o && c && An( e, Math.max( 0, s.scrollTop + o * di ) ), Dn( e, Math.max( 0, s.scrollLeft + i * di ) ), ( !o || o && c ) && at( t ), void( l.wheelStartX = null );
      if ( o && null != di ) {
        var g = o * di,
          v = e.doc.scrollTop,
          m = v + l.wrapper.clientHeight;
        g < 0 ? v = Math.max( 0, v + g - 50 ) : m = Math.min( e.doc.height, m + g + 50 ), si( e, {
          top: v,
          bottom: m
        } )
      }
      fi < 20 && ( null == l.wheelStartX ? ( l.wheelStartX = s.scrollLeft, l.wheelStartY = s.scrollTop, l.wheelDX = i, l.wheelDY = o, setTimeout( function () {
        if ( null != l.wheelStartX ) {
          var e = s.scrollLeft - l.wheelStartX,
            t = s.scrollTop - l.wheelStartY,
            r = t && l.wheelDY && t / l.wheelDY || e && l.wheelDX && e / l.wheelDX;
          l.wheelStartX = l.wheelStartY = null, r && ( di = ( di * fi + r ) / ( fi + 1 ), ++fi )
        }
      }, 200 ) ) : ( l.wheelDX += i, l.wheelDY += o ) )
    }
  }
  l ? di = -.53 : r ? di = 15 : c ? di = -.7 : f && ( di = -1 / 3 );
  var mi = function ( e, t ) {
    this.ranges = e, this.primIndex = t
  };
  mi.prototype.primary = function () {
    return this.ranges[ this.primIndex ]
  }, mi.prototype.equals = function ( e ) {
    if ( e == this ) return !0;
    if ( e.primIndex != this.primIndex || e.ranges.length != this.ranges.length ) return !1;
    for ( var t = 0; t < this.ranges.length; t++ ) {
      var r = this.ranges[ t ],
        n = e.ranges[ t ];
      if ( !ye( r.anchor, n.anchor ) || !ye( r.head, n.head ) ) return !1
    }
    return !0
  }, mi.prototype.deepCopy = function () {
    for ( var e = [], t = 0; t < this.ranges.length; t++ ) e[ t ] = new yi( be( this.ranges[ t ].anchor ), be( this.ranges[ t ].head ) );
    return new mi( e, this.primIndex )
  }, mi.prototype.somethingSelected = function () {
    for ( var e = 0; e < this.ranges.length; e++ )
      if ( !this.ranges[ e ].empty() ) return !0;
    return !1
  }, mi.prototype.contains = function ( e, t ) {
    t || ( t = e );
    for ( var r = 0; r < this.ranges.length; r++ ) {
      var n = this.ranges[ r ];
      if ( me( t, n.from() ) >= 0 && me( e, n.to() ) <= 0 ) return r
    }
    return -1
  };
  var yi = function ( e, t ) {
    this.anchor = e, this.head = t
  };

  function bi( e, t ) {
    var r = e[ t ];
    e.sort( function ( e, t ) {
      return me( e.from(), t.from() )
    } ), t = B( e, r );
    for ( var n = 1; n < e.length; n++ ) {
      var i = e[ n ],
        o = e[ n - 1 ];
      if ( me( o.to(), i.from() ) >= 0 ) {
        var l = xe( o.from(), i.from() ),
          s = we( o.to(), i.to() ),
          a = o.empty() ? i.from() == i.head : o.from() == o.head;
        n <= t && --t, e.splice( --n, 2, new yi( a ? s : l, a ? l : s ) )
      }
    }
    return new mi( e, t )
  }

  function wi( e, t ) {
    return new mi( [ new yi( e, t || e ) ], 0 )
  }

  function xi( e ) {
    return e.text ? ve( e.from.line + e.text.length - 1, q( e.text ).length + ( 1 == e.text.length ? e.from.ch : 0 ) ) : e.to
  }

  function Ci( e, t ) {
    if ( me( e, t.from ) < 0 ) return e;
    if ( me( e, t.to ) <= 0 ) return xi( t );
    var r = e.line + t.text.length - ( t.to.line - t.from.line ) - 1,
      n = e.ch;
    return e.line == t.to.line && ( n += xi( t ).ch - t.to.ch ), ve( r, n )
  }

  function Si( e, t ) {
    for ( var r = [], n = 0; n < e.sel.ranges.length; n++ ) {
      var i = e.sel.ranges[ n ];
      r.push( new yi( Ci( i.anchor, t ), Ci( i.head, t ) ) )
    }
    return bi( r, e.sel.primIndex )
  }

  function Li( e, t, r ) {
    return e.line == t.line ? ve( r.line, e.ch - t.ch + r.ch ) : ve( r.line + ( e.line - t.line ), e.ch )
  }

  function ki( e ) {
    e.doc.mode = Mt( e.options, e.doc.modeOption ), Ti( e )
  }

  function Ti( e ) {
    e.doc.iter( function ( e ) {
      e.stateAfter && ( e.stateAfter = null ), e.styles && ( e.styles = null )
    } ), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, ri( e, 100 ), e.state.modeGen++, e.curOp && Zn( e )
  }

  function Mi( e, t ) {
    return 0 == t.from.ch && 0 == t.to.ch && "" == q( t.text ) && ( !e.cm || e.cm.options.wholeLineUpdateBefore )
  }

  function Ni( e, t, r, n ) {
    function i( e ) {
      return r ? r[ e ] : null
    }

    function o( e, r, i ) {
      ! function ( e, t, r, n ) {
        e.text = t, e.stateAfter && ( e.stateAfter = null ), e.styles && ( e.styles = null ), null != e.order && ( e.order = null ), De( e ), He( e, r );
        var i = n ? n( e ) : 1;
        i != e.height && he( e, i )
      }( e, r, i, n ), sr( e, "change", e, t )
    }

    function l( e, t ) {
      for ( var r = [], o = e; o < t; ++o ) r.push( new Xt( u[ o ], i( o ), n ) );
      return r
    }
    var s = t.from,
      a = t.to,
      u = t.text,
      c = ae( e, s.line ),
      h = ae( e, a.line ),
      f = q( u ),
      d = i( u.length - 1 ),
      p = a.line - s.line;
    if ( t.full ) e.insert( 0, l( 0, u.length ) ), e.remove( u.length, e.size - u.length );
    else if ( Mi( e, t ) ) {
      var g = l( 0, u.length - 1 );
      o( h, h.text, d ), p && e.remove( s.line, p ), g.length && e.insert( s.line, g )
    } else if ( c == h )
      if ( 1 == u.length ) o( c, c.text.slice( 0, s.ch ) + f + c.text.slice( a.ch ), d );
      else {
        var v = l( 1, u.length - 1 );
        v.push( new Xt( f + c.text.slice( a.ch ), d, n ) ), o( c, c.text.slice( 0, s.ch ) + u[ 0 ], i( 0 ) ), e.insert( s.line + 1, v )
      }
    else if ( 1 == u.length ) o( c, c.text.slice( 0, s.ch ) + u[ 0 ] + h.text.slice( a.ch ), i( 0 ) ), e.remove( s.line + 1, p );
    else {
      o( c, c.text.slice( 0, s.ch ) + u[ 0 ], i( 0 ) ), o( h, f + h.text.slice( a.ch ), d );
      var m = l( 1, u.length - 1 );
      p > 1 && e.remove( s.line + 1, p - 1 ), e.insert( s.line + 1, m )
    }
    sr( e, "change", e, t )
  }

  function Oi( e, t, r ) {
    ! function e( n, i, o ) {
      if ( n.linked )
        for ( var l = 0; l < n.linked.length; ++l ) {
          var s = n.linked[ l ];
          if ( s.doc != i ) {
            var a = o && s.sharedHist;
            r && !a || ( t( s.doc, a ), e( s.doc, n, a ) )
          }
        }
    }( e, null, !0 )
  }

  function Ai( e, t ) {
    if ( t.cm ) throw new Error( "This document is already in use." );
    e.doc = t, t.cm = e, ln( e ), ki( e ), Wi( e ), e.options.lineWrapping || _e( e ), e.options.mode = t.modeOption, Zn( e )
  }

  function Wi( e ) {
    ( "rtl" == e.doc.direction ? H : T )( e.display.lineDiv, "CodeMirror-rtl" )
  }

  function Di( e ) {
    this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1
  }

  function Hi( e, t ) {
    var r = {
      from: be( t.from ),
      to: xi( t ),
      text: ue( e, t.from, t.to )
    };
    return Ii( e, r, t.from.line, t.to.line + 1 ), Oi( e, function ( e ) {
      return Ii( e, r, t.from.line, t.to.line + 1 )
    }, !0 ), r
  }

  function Fi( e ) {
    for ( ; e.length; ) {
      if ( !q( e ).ranges ) break;
      e.pop()
    }
  }

  function Pi( e, t, r, n ) {
    var i = e.history;
    i.undone.length = 0;
    var o, l, s = +new Date;
    if ( ( i.lastOp == n || i.lastOrigin == t.origin && t.origin && ( "+" == t.origin.charAt( 0 ) && i.lastModTime > s - ( e.cm ? e.cm.options.historyEventDelay : 500 ) || "*" == t.origin.charAt( 0 ) ) ) && ( o = function ( e, t ) {
        return t ? ( Fi( e.done ), q( e.done ) ) : e.done.length && !q( e.done ).ranges ? q( e.done ) : e.done.length > 1 && !e.done[ e.done.length - 2 ].ranges ? ( e.done.pop(), q( e.done ) ) : void 0
      }( i, i.lastOp == n ) ) ) l = q( o.changes ), 0 == me( t.from, t.to ) && 0 == me( t.from, l.to ) ? l.to = xi( t ) : o.changes.push( Hi( e, t ) );
    else {
      var a = q( i.done );
      for ( a && a.ranges || zi( e.sel, i.done ), o = {
          changes: [ Hi( e, t ) ],
          generation: i.generation
        }, i.done.push( o ); i.done.length > i.undoDepth; ) i.done.shift(), i.done[ 0 ].ranges || i.done.shift()
    }
    i.done.push( r ), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = s, i.lastOp = i.lastSelOp = n, i.lastOrigin = i.lastSelOrigin = t.origin, l || nt( e, "historyAdded" )
  }

  function Ei( e, t, r, n ) {
    var i = e.history,
      o = n && n.origin;
    r == i.lastSelOp || o && i.lastSelOrigin == o && ( i.lastModTime == i.lastSelTime && i.lastOrigin == o || function ( e, t, r, n ) {
      var i = t.charAt( 0 );
      return "*" == i || "+" == i && r.ranges.length == n.ranges.length && r.somethingSelected() == n.somethingSelected() && new Date - e.history.lastSelTime <= ( e.cm ? e.cm.options.historyEventDelay : 500 )
    }( e, o, q( i.done ), t ) ) ? i.done[ i.done.length - 1 ] = t : zi( t, i.done ), i.lastSelTime = +new Date, i.lastSelOrigin = o, i.lastSelOp = r, n && !1 !== n.clearRedo && Fi( i.undone )
  }

  function zi( e, t ) {
    var r = q( t );
    r && r.ranges && r.equals( e ) || t.push( e )
  }

  function Ii( e, t, r, n ) {
    var i = t[ "spans_" + e.id ],
      o = 0;
    e.iter( Math.max( e.first, r ), Math.min( e.first + e.size, n ), function ( r ) {
      r.markedSpans && ( ( i || ( i = t[ "spans_" + e.id ] = {} ) )[ o ] = r.markedSpans ), ++o
    } )
  }

  function Ri( e ) {
    if ( !e ) return null;
    for ( var t, r = 0; r < e.length; ++r ) e[ r ].marker.explicitlyCleared ? t || ( t = e.slice( 0, r ) ) : t && t.push( e[ r ] );
    return t ? t.length ? t : null : e
  }

  function Bi( e, t ) {
    var r = function ( e, t ) {
        var r = t[ "spans_" + e.id ];
        if ( !r ) return null;
        for ( var n = [], i = 0; i < t.text.length; ++i ) n.push( Ri( r[ i ] ) );
        return n
      }( e, t ),
      n = Ae( e, t );
    if ( !r ) return n;
    if ( !n ) return r;
    for ( var i = 0; i < r.length; ++i ) {
      var o = r[ i ],
        l = n[ i ];
      if ( o && l ) e: for ( var s = 0; s < l.length; ++s ) {
        for ( var a = l[ s ], u = 0; u < o.length; ++u )
          if ( o[ u ].marker == a.marker ) continue e;
        o.push( a )
      } else l && ( r[ i ] = l )
    }
    return r
  }

  function Gi( e, t, r ) {
    for ( var n = [], i = 0; i < e.length; ++i ) {
      var o = e[ i ];
      if ( o.ranges ) n.push( r ? mi.prototype.deepCopy.call( o ) : o );
      else {
        var l = o.changes,
          s = [];
        n.push( {
          changes: s
        } );
        for ( var a = 0; a < l.length; ++a ) {
          var u = l[ a ],
            c = void 0;
          if ( s.push( {
              from: u.from,
              to: u.to,
              text: u.text
            } ), t )
            for ( var h in u )( c = h.match( /^spans_(\d+)$/ ) ) && B( t, Number( c[ 1 ] ) ) > -1 && ( q( s )[ h ] = u[ h ], delete u[ h ] )
        }
      }
    }
    return n
  }

  function Ui( e, t, r, n ) {
    if ( n ) {
      var i = e.anchor;
      if ( r ) {
        var o = me( t, i ) < 0;
        o != me( r, i ) < 0 ? ( i = t, t = r ) : o != me( t, r ) < 0 && ( t = r )
      }
      return new yi( i, t )
    }
    return new yi( r || t, t )
  }

  function Vi( e, t, r, n, i ) {
    null == i && ( i = e.cm && ( e.cm.display.shift || e.extend ) ), _i( e, new mi( [ Ui( e.sel.primary(), t, r, i ) ], 0 ), n )
  }

  function Ki( e, t, r ) {
    for ( var n = [], i = e.cm && ( e.cm.display.shift || e.extend ), o = 0; o < e.sel.ranges.length; o++ ) n[ o ] = Ui( e.sel.ranges[ o ], t[ o ], null, i );
    _i( e, bi( n, e.sel.primIndex ), r )
  }

  function ji( e, t, r, n ) {
    var i = e.sel.ranges.slice( 0 );
    i[ t ] = r, _i( e, bi( i, e.sel.primIndex ), n )
  }

  function Xi( e, t, r, n ) {
    _i( e, wi( t, r ), n )
  }

  function Yi( e, t, r ) {
    var n = e.history.done,
      i = q( n );
    i && i.ranges ? ( n[ n.length - 1 ] = t, qi( e, t, r ) ) : _i( e, t, r )
  }

  function _i( e, t, r ) {
    qi( e, t, r ), Ei( e, e.sel, e.cm ? e.cm.curOp.id : NaN, r )
  }

  function qi( e, t, r ) {
    ( lt( e, "beforeSelectionChange" ) || e.cm && lt( e.cm, "beforeSelectionChange" ) ) && ( t = function ( e, t, r ) {
      var n = {
        ranges: t.ranges,
        update: function ( t ) {
          this.ranges = [];
          for ( var r = 0; r < t.length; r++ ) this.ranges[ r ] = new yi( Se( e, t[ r ].anchor ), Se( e, t[ r ].head ) )
        },
        origin: r && r.origin
      };
      return nt( e, "beforeSelectionChange", e, n ), e.cm && nt( e.cm, "beforeSelectionChange", e.cm, n ), n.ranges != t.ranges ? bi( n.ranges, n.ranges.length - 1 ) : t
    }( e, t, r ) );
    var n = r && r.bias || ( me( t.primary().head, e.sel.primary().head ) < 0 ? -1 : 1 );
    $i( e, Qi( e, t, n, !0 ) ), r && !1 === r.scroll || !e.cm || Tn( e.cm )
  }

  function $i( e, t ) {
    t.equals( e.sel ) || ( e.sel = t, e.cm && ( e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, ot( e.cm ) ), sr( e, "cursorActivity", e ) )
  }

  function Zi( e ) {
    $i( e, Qi( e, e.sel, null, !1 ) )
  }

  function Qi( e, t, r, n ) {
    for ( var i, o = 0; o < t.ranges.length; o++ ) {
      var l = t.ranges[ o ],
        s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[ o ],
        a = eo( e, l.anchor, s && s.anchor, r, n ),
        u = eo( e, l.head, s && s.head, r, n );
      ( i || a != l.anchor || u != l.head ) && ( i || ( i = t.ranges.slice( 0, o ) ), i[ o ] = new yi( a, u ) )
    }
    return i ? bi( i, t.primIndex ) : t
  }

  function Ji( e, t, r, n, i ) {
    var o = ae( e, t.line );
    if ( o.markedSpans )
      for ( var l = 0; l < o.markedSpans.length; ++l ) {
        var s = o.markedSpans[ l ],
          a = s.marker;
        if ( ( null == s.from || ( a.inclusiveLeft ? s.from <= t.ch : s.from < t.ch ) ) && ( null == s.to || ( a.inclusiveRight ? s.to >= t.ch : s.to > t.ch ) ) ) {
          if ( i && ( nt( a, "beforeCursorEnter" ), a.explicitlyCleared ) ) {
            if ( o.markedSpans ) {
              --l;
              continue
            }
            break
          }
          if ( !a.atomic ) continue;
          if ( r ) {
            var u = a.find( n < 0 ? 1 : -1 ),
              c = void 0;
            if ( ( n < 0 ? a.inclusiveRight : a.inclusiveLeft ) && ( u = to( e, u, -n, u && u.line == t.line ? o : null ) ), u && u.line == t.line && ( c = me( u, r ) ) && ( n < 0 ? c < 0 : c > 0 ) ) return Ji( e, u, t, n, i )
          }
          var h = a.find( n < 0 ? -1 : 1 );
          return ( n < 0 ? a.inclusiveLeft : a.inclusiveRight ) && ( h = to( e, h, n, h.line == t.line ? o : null ) ), h ? Ji( e, h, t, n, i ) : null
        }
      }
    return t
  }

  function eo( e, t, r, n, i ) {
    var o = n || 1,
      l = Ji( e, t, r, o, i ) || !i && Ji( e, t, r, o, !0 ) || Ji( e, t, r, -o, i ) || !i && Ji( e, t, r, -o, !0 );
    return l || ( e.cantEdit = !0, ve( e.first, 0 ) )
  }

  function to( e, t, r, n ) {
    return r < 0 && 0 == t.ch ? t.line > e.first ? Se( e, ve( t.line - 1 ) ) : null : r > 0 && t.ch == ( n || ae( e, t.line ) ).text.length ? t.line < e.first + e.size - 1 ? ve( t.line + 1, 0 ) : null : new ve( t.line, t.ch + r )
  }

  function ro( e ) {
    e.setSelection( ve( e.firstLine(), 0 ), ve( e.lastLine() ), V )
  }

  function no( e, t, r ) {
    var n = {
      canceled: !1,
      from: t.from,
      to: t.to,
      text: t.text,
      origin: t.origin,
      cancel: function () {
        return n.canceled = !0
      }
    };
    return r && ( n.update = function ( t, r, i, o ) {
      t && ( n.from = Se( e, t ) ), r && ( n.to = Se( e, r ) ), i && ( n.text = i ), void 0 !== o && ( n.origin = o )
    } ), nt( e, "beforeChange", e, n ), e.cm && nt( e.cm, "beforeChange", e.cm, n ), n.canceled ? null : {
      from: n.from,
      to: n.to,
      text: n.text,
      origin: n.origin
    }
  }

  function io( e, t, r ) {
    if ( e.cm ) {
      if ( !e.cm.curOp ) return _n( e.cm, io )( e, t, r );
      if ( e.cm.state.suppressEdits ) return
    }
    if ( !( lt( e, "beforeChange" ) || e.cm && lt( e.cm, "beforeChange" ) ) || ( t = no( e, t, !0 ) ) ) {
      var n = ke && !r && function ( e, t, r ) {
        var n = null;
        if ( e.iter( t.line, r.line + 1, function ( e ) {
            if ( e.markedSpans )
              for ( var t = 0; t < e.markedSpans.length; ++t ) {
                var r = e.markedSpans[ t ].marker;
                !r.readOnly || n && -1 != B( n, r ) || ( n || ( n = [] ) ).push( r )
              }
          } ), !n ) return null;
        for ( var i = [ {
            from: t,
            to: r
          } ], o = 0; o < n.length; ++o )
          for ( var l = n[ o ], s = l.find( 0 ), a = 0; a < i.length; ++a ) {
            var u = i[ a ];
            if ( !( me( u.to, s.from ) < 0 || me( u.from, s.to ) > 0 ) ) {
              var c = [ a, 1 ],
                h = me( u.from, s.from ),
                f = me( u.to, s.to );
              ( h < 0 || !l.inclusiveLeft && !h ) && c.push( {
                from: u.from,
                to: s.from
              } ), ( f > 0 || !l.inclusiveRight && !f ) && c.push( {
                from: s.to,
                to: u.to
              } ), i.splice.apply( i, c ), a += c.length - 3
            }
          }
        return i
      }( e, t.from, t.to );
      if ( n )
        for ( var i = n.length - 1; i >= 0; --i ) oo( e, {
          from: n[ i ].from,
          to: n[ i ].to,
          text: i ? [ "" ] : t.text,
          origin: t.origin
        } );
      else oo( e, t )
    }
  }

  function oo( e, t ) {
    if ( 1 != t.text.length || "" != t.text[ 0 ] || 0 != me( t.from, t.to ) ) {
      var r = Si( e, t );
      Pi( e, t, r, e.cm ? e.cm.curOp.id : NaN ), ao( e, t, r, Ae( e, t ) );
      var n = [];
      Oi( e, function ( e, r ) {
        r || -1 != B( n, e.history ) || ( fo( e.history, t ), n.push( e.history ) ), ao( e, t, null, Ae( e, t ) )
      } )
    }
  }

  function lo( e, t, r ) {
    var n = e.cm && e.cm.state.suppressEdits;
    if ( !n || r ) {
      for ( var i, o = e.history, l = e.sel, s = "undo" == t ? o.done : o.undone, a = "undo" == t ? o.undone : o.done, u = 0; u < s.length && ( i = s[ u ], r ? !i.ranges || i.equals( e.sel ) : i.ranges ); u++ );
      if ( u != s.length ) {
        for ( o.lastOrigin = o.lastSelOrigin = null;; ) {
          if ( !( i = s.pop() ).ranges ) {
            if ( n ) return void s.push( i );
            break
          }
          if ( zi( i, a ), r && !i.equals( e.sel ) ) return void _i( e, i, {
            clearRedo: !1
          } );
          l = i
        }
        var c = [];
        zi( l, a ), a.push( {
          changes: c,
          generation: o.generation
        } ), o.generation = i.generation || ++o.maxGeneration;
        for ( var h = lt( e, "beforeChange" ) || e.cm && lt( e.cm, "beforeChange" ), f = function ( r ) {
            var n = i.changes[ r ];
            if ( n.origin = t, h && !no( e, n, !1 ) ) return s.length = 0, {};
            c.push( Hi( e, n ) );
            var o = r ? Si( e, n ) : q( s );
            ao( e, n, o, Bi( e, n ) ), !r && e.cm && e.cm.scrollIntoView( {
              from: n.from,
              to: xi( n )
            } );
            var l = [];
            Oi( e, function ( e, t ) {
              t || -1 != B( l, e.history ) || ( fo( e.history, n ), l.push( e.history ) ), ao( e, n, null, Bi( e, n ) )
            } )
          }, d = i.changes.length - 1; d >= 0; --d ) {
          var p = f( d );
          if ( p ) return p.v
        }
      }
    }
  }

  function so( e, t ) {
    if ( 0 != t && ( e.first += t, e.sel = new mi( $( e.sel.ranges, function ( e ) {
        return new yi( ve( e.anchor.line + t, e.anchor.ch ), ve( e.head.line + t, e.head.ch ) )
      } ), e.sel.primIndex ), e.cm ) ) {
      Zn( e.cm, e.first, e.first - t, t );
      for ( var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++ ) Qn( e.cm, n, "gutter" )
    }
  }

  function ao( e, t, r, n ) {
    if ( e.cm && !e.cm.curOp ) return _n( e.cm, ao )( e, t, r, n );
    if ( t.to.line < e.first ) so( e, t.text.length - 1 - ( t.to.line - t.from.line ) );
    else if ( !( t.from.line > e.lastLine() ) ) {
      if ( t.from.line < e.first ) {
        var i = t.text.length - 1 - ( e.first - t.from.line );
        so( e, i ), t = {
          from: ve( e.first, 0 ),
          to: ve( t.to.line + i, t.to.ch ),
          text: [ q( t.text ) ],
          origin: t.origin
        }
      }
      var o = e.lastLine();
      t.to.line > o && ( t = {
        from: t.from,
        to: ve( o, ae( e, o ).text.length ),
        text: [ t.text[ 0 ] ],
        origin: t.origin
      } ), t.removed = ue( e, t.from, t.to ), r || ( r = Si( e, t ) ), e.cm ? function ( e, t, r ) {
        var n = e.doc,
          i = e.display,
          o = t.from,
          l = t.to,
          s = !1,
          a = o.line;
        e.options.lineWrapping || ( a = fe( Ge( ae( n, o.line ) ) ), n.iter( a, l.line + 1, function ( e ) {
          if ( e == i.maxLine ) return s = !0, !0
        } ) );
        n.sel.contains( t.from, t.to ) > -1 && ot( e );
        Ni( n, t, r, on( e ) ), e.options.lineWrapping || ( n.iter( a, o.line + t.text.length, function ( e ) {
          var t = Ye( e );
          t > i.maxLineLength && ( i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, s = !1 )
        } ), s && ( e.curOp.updateMaxLine = !0 ) );
        ( function ( e, t ) {
          if ( e.modeFrontier = Math.min( e.modeFrontier, t ), !( e.highlightFrontier < t - 10 ) ) {
            for ( var r = e.first, n = t - 1; n > r; n-- ) {
              var i = ae( e, n ).stateAfter;
              if ( i && ( !( i instanceof Ft ) || n + i.lookAhead < t ) ) {
                r = n + 1;
                break
              }
            }
            e.highlightFrontier = Math.min( e.highlightFrontier, r )
          }
        } )( n, o.line ), ri( e, 400 );
        var u = t.text.length - ( l.line - o.line ) - 1;
        t.full ? Zn( e ) : o.line != l.line || 1 != t.text.length || Mi( e.doc, t ) ? Zn( e, o.line, l.line + 1, u ) : Qn( e, o.line, "text" );
        var c = lt( e, "changes" ),
          h = lt( e, "change" );
        if ( h || c ) {
          var f = {
            from: o,
            to: l,
            text: t.text,
            removed: t.removed,
            origin: t.origin
          };
          h && sr( e, "change", e, f ), c && ( e.curOp.changeObjs || ( e.curOp.changeObjs = [] ) ).push( f )
        }
        e.display.selForContextMenu = null
      }( e.cm, t, n ) : Ni( e, t, n ), qi( e, r, V )
    }
  }

  function uo( e, t, r, n, i ) {
    var o;
    ( n || ( n = r ), me( n, r ) < 0 ) && ( r = ( o = [ n, r ] )[ 0 ], n = o[ 1 ] );
    "string" == typeof t && ( t = e.splitLines( t ) ), io( e, {
      from: r,
      to: n,
      text: t,
      origin: i
    } )
  }

  function co( e, t, r, n ) {
    r < e.line ? e.line += n : t < e.line && ( e.line = t, e.ch = 0 )
  }

  function ho( e, t, r, n ) {
    for ( var i = 0; i < e.length; ++i ) {
      var o = e[ i ],
        l = !0;
      if ( o.ranges ) {
        o.copied || ( ( o = e[ i ] = o.deepCopy() ).copied = !0 );
        for ( var s = 0; s < o.ranges.length; s++ ) co( o.ranges[ s ].anchor, t, r, n ), co( o.ranges[ s ].head, t, r, n )
      } else {
        for ( var a = 0; a < o.changes.length; ++a ) {
          var u = o.changes[ a ];
          if ( r < u.from.line ) u.from = ve( u.from.line + n, u.from.ch ), u.to = ve( u.to.line + n, u.to.ch );
          else if ( t <= u.to.line ) {
            l = !1;
            break
          }
        }
        l || ( e.splice( 0, i + 1 ), i = 0 )
      }
    }
  }

  function fo( e, t ) {
    var r = t.from.line,
      n = t.to.line,
      i = t.text.length - ( n - r ) - 1;
    ho( e.done, r, n, i ), ho( e.undone, r, n, i )
  }

  function po( e, t, r, n ) {
    var i = t,
      o = t;
    return "number" == typeof t ? o = ae( e, Ce( e, t ) ) : i = fe( t ), null == i ? null : ( n( o, i ) && e.cm && Qn( e.cm, i, r ), o )
  }

  function go( e ) {
    this.lines = e, this.parent = null;
    for ( var t = 0, r = 0; r < e.length; ++r ) e[ r ].parent = this, t += e[ r ].height;
    this.height = t
  }

  function vo( e ) {
    this.children = e;
    for ( var t = 0, r = 0, n = 0; n < e.length; ++n ) {
      var i = e[ n ];
      t += i.chunkSize(), r += i.height, i.parent = this
    }
    this.size = t, this.height = r, this.parent = null
  }
  yi.prototype.from = function () {
    return xe( this.anchor, this.head )
  }, yi.prototype.to = function () {
    return we( this.anchor, this.head )
  }, yi.prototype.empty = function () {
    return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
  }, go.prototype = {
    chunkSize: function () {
      return this.lines.length
    },
    removeInner: function ( e, t ) {
      for ( var r = e, n = e + t; r < n; ++r ) {
        var i = this.lines[ r ];
        this.height -= i.height, Yt( i ), sr( i, "delete" )
      }
      this.lines.splice( e, t )
    },
    collapse: function ( e ) {
      e.push.apply( e, this.lines )
    },
    insertInner: function ( e, t, r ) {
      this.height += r, this.lines = this.lines.slice( 0, e ).concat( t ).concat( this.lines.slice( e ) );
      for ( var n = 0; n < t.length; ++n ) t[ n ].parent = this
    },
    iterN: function ( e, t, r ) {
      for ( var n = e + t; e < n; ++e )
        if ( r( this.lines[ e ] ) ) return !0
    }
  }, vo.prototype = {
    chunkSize: function () {
      return this.size
    },
    removeInner: function ( e, t ) {
      this.size -= t;
      for ( var r = 0; r < this.children.length; ++r ) {
        var n = this.children[ r ],
          i = n.chunkSize();
        if ( e < i ) {
          var o = Math.min( t, i - e ),
            l = n.height;
          if ( n.removeInner( e, o ), this.height -= l - n.height, i == o && ( this.children.splice( r--, 1 ), n.parent = null ), 0 == ( t -= o ) ) break;
          e = 0
        } else e -= i
      }
      if ( this.size - t < 25 && ( this.children.length > 1 || !( this.children[ 0 ] instanceof go ) ) ) {
        var s = [];
        this.collapse( s ), this.children = [ new go( s ) ], this.children[ 0 ].parent = this
      }
    },
    collapse: function ( e ) {
      for ( var t = 0; t < this.children.length; ++t ) this.children[ t ].collapse( e )
    },
    insertInner: function ( e, t, r ) {
      this.size += t.length, this.height += r;
      for ( var n = 0; n < this.children.length; ++n ) {
        var i = this.children[ n ],
          o = i.chunkSize();
        if ( e <= o ) {
          if ( i.insertInner( e, t, r ), i.lines && i.lines.length > 50 ) {
            for ( var l = i.lines.length % 25 + 25, s = l; s < i.lines.length; ) {
              var a = new go( i.lines.slice( s, s += 25 ) );
              i.height -= a.height, this.children.splice( ++n, 0, a ), a.parent = this
            }
            i.lines = i.lines.slice( 0, l ), this.maybeSpill()
          }
          break
        }
        e -= o
      }
    },
    maybeSpill: function () {
      if ( !( this.children.length <= 10 ) ) {
        var e = this;
        do {
          var t = new vo( e.children.splice( e.children.length - 5, 5 ) );
          if ( e.parent ) {
            e.size -= t.size, e.height -= t.height;
            var r = B( e.parent.children, e );
            e.parent.children.splice( r + 1, 0, t )
          } else {
            var n = new vo( e.children );
            n.parent = e, e.children = [ n, t ], e = n
          }
          t.parent = e.parent
        } while ( e.children.length > 10 );
        e.parent.maybeSpill()
      }
    },
    iterN: function ( e, t, r ) {
      for ( var n = 0; n < this.children.length; ++n ) {
        var i = this.children[ n ],
          o = i.chunkSize();
        if ( e < o ) {
          var l = Math.min( t, o - e );
          if ( i.iterN( e, l, r ) ) return !0;
          if ( 0 == ( t -= l ) ) break;
          e = 0
        } else e -= o
      }
    }
  };
  var mo = function ( e, t, r ) {
    if ( r )
      for ( var n in r ) r.hasOwnProperty( n ) && ( this[ n ] = r[ n ] );
    this.doc = e, this.node = t
  };

  function yo( e, t, r ) {
    Xe( t ) < ( e.curOp && e.curOp.scrollTop || e.doc.scrollTop ) && kn( e, r )
  }
  mo.prototype.clear = function () {
    var e = this.doc.cm,
      t = this.line.widgets,
      r = this.line,
      n = fe( r );
    if ( null != n && t ) {
      for ( var i = 0; i < t.length; ++i ) t[ i ] == this && t.splice( i--, 1 );
      t.length || ( r.widgets = null );
      var o = wr( this );
      he( r, Math.max( 0, r.height - o ) ), e && ( Yn( e, function () {
        yo( e, r, -o ), Qn( e, n, "widget" )
      } ), sr( e, "lineWidgetCleared", e, this, n ) )
    }
  }, mo.prototype.changed = function () {
    var e = this,
      t = this.height,
      r = this.doc.cm,
      n = this.line;
    this.height = null;
    var i = wr( this ) - t;
    i && ( he( n, n.height + i ), r && Yn( r, function () {
      r.curOp.forceUpdate = !0, yo( r, n, i ), sr( r, "lineWidgetChanged", r, e, fe( n ) )
    } ) )
  }, st( mo );
  var bo = 0,
    wo = function ( e, t ) {
      this.lines = [], this.type = t, this.doc = e, this.id = ++bo
    };

  function xo( e, t, r, n, i ) {
    if ( n && n.shared ) return function ( e, t, r, n, i ) {
      ( n = z( n ) ).shared = !1;
      var o = [ xo( e, t, r, n, i ) ],
        l = o[ 0 ],
        s = n.widgetNode;
      return Oi( e, function ( e ) {
        s && ( n.widgetNode = s.cloneNode( !0 ) ), o.push( xo( e, Se( e, t ), Se( e, r ), n, i ) );
        for ( var a = 0; a < e.linked.length; ++a )
          if ( e.linked[ a ].isParent ) return;
        l = q( o )
      } ), new Co( o, l )
    }( e, t, r, n, i );
    if ( e.cm && !e.cm.curOp ) return _n( e.cm, xo )( e, t, r, n, i );
    var o = new wo( e, i ),
      l = me( t, r );
    if ( n && z( n, o, !1 ), l > 0 || 0 == l && !1 !== o.clearWhenEmpty ) return o;
    if ( o.replacedWith && ( o.collapsed = !0, o.widgetNode = A( "span", [ o.replacedWith ], "CodeMirror-widget" ), n.handleMouseEvents || o.widgetNode.setAttribute( "cm-ignore-events", "true" ), n.insertLeft && ( o.widgetNode.insertLeft = !0 ) ), o.collapsed ) {
      if ( Be( e, t.line, t, r, o ) || t.line != r.line && Be( e, r.line, t, r, o ) ) throw new Error( "Inserting collapsed marker partially overlapping an existing one" );
      Te = !0
    }
    o.addToHistory && Pi( e, {
      from: t,
      to: r,
      origin: "markText"
    }, e.sel, NaN );
    var s, a = t.line,
      u = e.cm;
    if ( e.iter( a, r.line + 1, function ( e ) {
        u && o.collapsed && !u.options.lineWrapping && Ge( e ) == u.display.maxLine && ( s = !0 ), o.collapsed && a != t.line && he( e, 0 ),
          function ( e, t ) {
            e.markedSpans = e.markedSpans ? e.markedSpans.concat( [ t ] ) : [ t ], t.marker.attachLine( e )
          }( e, new Me( o, a == t.line ? t.ch : null, a == r.line ? r.ch : null ) ), ++a
      } ), o.collapsed && e.iter( t.line, r.line + 1, function ( t ) {
        Ke( e, t ) && he( t, 0 )
      } ), o.clearOnEnter && et( o, "beforeCursorEnter", function () {
        return o.clear()
      } ), o.readOnly && ( ke = !0, ( e.history.done.length || e.history.undone.length ) && e.clearHistory() ), o.collapsed && ( o.id = ++bo, o.atomic = !0 ), u ) {
      if ( s && ( u.curOp.updateMaxLine = !0 ), o.collapsed ) Zn( u, t.line, r.line + 1 );
      else if ( o.className || o.title || o.startStyle || o.endStyle || o.css )
        for ( var c = t.line; c <= r.line; c++ ) Qn( u, c, "text" );
      o.atomic && Zi( u.doc ), sr( u, "markerAdded", u, o )
    }
    return o
  }
  wo.prototype.clear = function () {
    if ( !this.explicitlyCleared ) {
      var e = this.doc.cm,
        t = e && !e.curOp;
      if ( t && Gn( e ), lt( this, "clear" ) ) {
        var r = this.find();
        r && sr( this, "clear", r.from, r.to )
      }
      for ( var n = null, i = null, o = 0; o < this.lines.length; ++o ) {
        var l = this.lines[ o ],
          s = Ne( l.markedSpans, this );
        e && !this.collapsed ? Qn( e, fe( l ), "text" ) : e && ( null != s.to && ( i = fe( l ) ), null != s.from && ( n = fe( l ) ) ), l.markedSpans = Oe( l.markedSpans, s ), null == s.from && this.collapsed && !Ke( this.doc, l ) && e && he( l, en( e.display ) )
      }
      if ( e && this.collapsed && !e.options.lineWrapping )
        for ( var a = 0; a < this.lines.length; ++a ) {
          var u = Ge( this.lines[ a ] ),
            c = Ye( u );
          c > e.display.maxLineLength && ( e.display.maxLine = u, e.display.maxLineLength = c, e.display.maxLineChanged = !0 )
        }
      null != n && e && this.collapsed && Zn( e, n, i + 1 ), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && ( this.doc.cantEdit = !1, e && Zi( e.doc ) ), e && sr( e, "markerCleared", e, this, n, i ), t && Un( e ), this.parent && this.parent.clear()
    }
  }, wo.prototype.find = function ( e, t ) {
    var r, n;
    null == e && "bookmark" == this.type && ( e = 1 );
    for ( var i = 0; i < this.lines.length; ++i ) {
      var o = this.lines[ i ],
        l = Ne( o.markedSpans, this );
      if ( null != l.from && ( r = ve( t ? o : fe( o ), l.from ), -1 == e ) ) return r;
      if ( null != l.to && ( n = ve( t ? o : fe( o ), l.to ), 1 == e ) ) return n
    }
    return r && {
      from: r,
      to: n
    }
  }, wo.prototype.changed = function () {
    var e = this,
      t = this.find( -1, !0 ),
      r = this,
      n = this.doc.cm;
    t && n && Yn( n, function () {
      var i = t.line,
        o = fe( t.line ),
        l = Ar( n, o );
      if ( l && ( zr( l ), n.curOp.selectionChanged = n.curOp.forceUpdate = !0 ), n.curOp.updateMaxLine = !0, !Ke( r.doc, i ) && null != r.height ) {
        var s = r.height;
        r.height = null;
        var a = wr( r ) - s;
        a && he( i, i.height + a )
      }
      sr( n, "markerChanged", n, e )
    } )
  }, wo.prototype.attachLine = function ( e ) {
    if ( !this.lines.length && this.doc.cm ) {
      var t = this.doc.cm.curOp;
      t.maybeHiddenMarkers && -1 != B( t.maybeHiddenMarkers, this ) || ( t.maybeUnhiddenMarkers || ( t.maybeUnhiddenMarkers = [] ) ).push( this )
    }
    this.lines.push( e )
  }, wo.prototype.detachLine = function ( e ) {
    if ( this.lines.splice( B( this.lines, e ), 1 ), !this.lines.length && this.doc.cm ) {
      var t = this.doc.cm.curOp;
      ( t.maybeHiddenMarkers || ( t.maybeHiddenMarkers = [] ) ).push( this )
    }
  }, st( wo );
  var Co = function ( e, t ) {
    this.markers = e, this.primary = t;
    for ( var r = 0; r < e.length; ++r ) e[ r ].parent = this
  };

  function So( e ) {
    return e.findMarks( ve( e.first, 0 ), e.clipPos( ve( e.lastLine() ) ), function ( e ) {
      return e.parent
    } )
  }

  function Lo( e ) {
    for ( var t = function ( t ) {
        var r = e[ t ],
          n = [ r.primary.doc ];
        Oi( r.primary.doc, function ( e ) {
          return n.push( e )
        } );
        for ( var i = 0; i < r.markers.length; i++ ) {
          var o = r.markers[ i ]; - 1 == B( n, o.doc ) && ( o.parent = null, r.markers.splice( i--, 1 ) )
        }
      }, r = 0; r < e.length; r++ ) t( r )
  }
  Co.prototype.clear = function () {
    if ( !this.explicitlyCleared ) {
      this.explicitlyCleared = !0;
      for ( var e = 0; e < this.markers.length; ++e ) this.markers[ e ].clear();
      sr( this, "clear" )
    }
  }, Co.prototype.find = function ( e, t ) {
    return this.primary.find( e, t )
  }, st( Co );
  var ko = 0,
    To = function ( e, t, r, n, i ) {
      if ( !( this instanceof To ) ) return new To( e, t, r, n, i );
      null == r && ( r = 0 ), vo.call( this, [ new go( [ new Xt( "", null ) ] ) ] ), this.first = r, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = r;
      var o = ve( r, 0 );
      this.sel = wi( o ), this.history = new Di( null ), this.id = ++ko, this.modeOption = t, this.lineSep = n, this.direction = "rtl" == i ? "rtl" : "ltr", this.extend = !1, "string" == typeof e && ( e = this.splitLines( e ) ), Ni( this, {
        from: o,
        to: o,
        text: e
      } ), _i( this, wi( o ), V )
    };
  To.prototype = Q( vo.prototype, {
    constructor: To,
    iter: function ( e, t, r ) {
      r ? this.iterN( e - this.first, t - e, r ) : this.iterN( this.first, this.first + this.size, e )
    },
    insert: function ( e, t ) {
      for ( var r = 0, n = 0; n < t.length; ++n ) r += t[ n ].height;
      this.insertInner( e - this.first, t, r )
    },
    remove: function ( e, t ) {
      this.removeInner( e - this.first, t )
    },
    getValue: function ( e ) {
      var t = ce( this, this.first, this.first + this.size );
      return !1 === e ? t : t.join( e || this.lineSeparator() )
    },
    setValue: $n( function ( e ) {
      var t = ve( this.first, 0 ),
        r = this.first + this.size - 1;
      io( this, {
        from: t,
        to: ve( r, ae( this, r ).text.length ),
        text: this.splitLines( e ),
        origin: "setValue",
        full: !0
      }, !0 ), this.cm && Mn( this.cm, 0, 0 ), _i( this, wi( t ), V )
    } ),
    replaceRange: function ( e, t, r, n ) {
      uo( this, e, t = Se( this, t ), r = r ? Se( this, r ) : t, n )
    },
    getRange: function ( e, t, r ) {
      var n = ue( this, Se( this, e ), Se( this, t ) );
      return !1 === r ? n : n.join( r || this.lineSeparator() )
    },
    getLine: function ( e ) {
      var t = this.getLineHandle( e );
      return t && t.text
    },
    getLineHandle: function ( e ) {
      if ( pe( this, e ) ) return ae( this, e )
    },
    getLineNumber: function ( e ) {
      return fe( e )
    },
    getLineHandleVisualStart: function ( e ) {
      return "number" == typeof e && ( e = ae( this, e ) ), Ge( e )
    },
    lineCount: function () {
      return this.size
    },
    firstLine: function () {
      return this.first
    },
    lastLine: function () {
      return this.first + this.size - 1
    },
    clipPos: function ( e ) {
      return Se( this, e )
    },
    getCursor: function ( e ) {
      var t = this.sel.primary();
      return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from()
    },
    listSelections: function () {
      return this.sel.ranges
    },
    somethingSelected: function () {
      return this.sel.somethingSelected()
    },
    setCursor: $n( function ( e, t, r ) {
      Xi( this, Se( this, "number" == typeof e ? ve( e, t || 0 ) : e ), null, r )
    } ),
    setSelection: $n( function ( e, t, r ) {
      Xi( this, Se( this, e ), Se( this, t || e ), r )
    } ),
    extendSelection: $n( function ( e, t, r ) {
      Vi( this, Se( this, e ), t && Se( this, t ), r )
    } ),
    extendSelections: $n( function ( e, t ) {
      Ki( this, Le( this, e ), t )
    } ),
    extendSelectionsBy: $n( function ( e, t ) {
      Ki( this, Le( this, $( this.sel.ranges, e ) ), t )
    } ),
    setSelections: $n( function ( e, t, r ) {
      if ( e.length ) {
        for ( var n = [], i = 0; i < e.length; i++ ) n[ i ] = new yi( Se( this, e[ i ].anchor ), Se( this, e[ i ].head ) );
        null == t && ( t = Math.min( e.length - 1, this.sel.primIndex ) ), _i( this, bi( n, t ), r )
      }
    } ),
    addSelection: $n( function ( e, t, r ) {
      var n = this.sel.ranges.slice( 0 );
      n.push( new yi( Se( this, e ), Se( this, t || e ) ) ), _i( this, bi( n, n.length - 1 ), r )
    } ),
    getSelection: function ( e ) {
      for ( var t, r = this.sel.ranges, n = 0; n < r.length; n++ ) {
        var i = ue( this, r[ n ].from(), r[ n ].to() );
        t = t ? t.concat( i ) : i
      }
      return !1 === e ? t : t.join( e || this.lineSeparator() )
    },
    getSelections: function ( e ) {
      for ( var t = [], r = this.sel.ranges, n = 0; n < r.length; n++ ) {
        var i = ue( this, r[ n ].from(), r[ n ].to() );
        !1 !== e && ( i = i.join( e || this.lineSeparator() ) ), t[ n ] = i
      }
      return t
    },
    replaceSelection: function ( e, t, r ) {
      for ( var n = [], i = 0; i < this.sel.ranges.length; i++ ) n[ i ] = e;
      this.replaceSelections( n, t, r || "+input" )
    },
    replaceSelections: $n( function ( e, t, r ) {
      for ( var n = [], i = this.sel, o = 0; o < i.ranges.length; o++ ) {
        var l = i.ranges[ o ];
        n[ o ] = {
          from: l.from(),
          to: l.to(),
          text: this.splitLines( e[ o ] ),
          origin: r
        }
      }
      for ( var s = t && "end" != t && function ( e, t, r ) {
          for ( var n = [], i = ve( e.first, 0 ), o = i, l = 0; l < t.length; l++ ) {
            var s = t[ l ],
              a = Li( s.from, i, o ),
              u = Li( xi( s ), i, o );
            if ( i = s.to, o = u, "around" == r ) {
              var c = e.sel.ranges[ l ],
                h = me( c.head, c.anchor ) < 0;
              n[ l ] = new yi( h ? u : a, h ? a : u )
            } else n[ l ] = new yi( a, a )
          }
          return new mi( n, e.sel.primIndex )
        }( this, n, t ), a = n.length - 1; a >= 0; a-- ) io( this, n[ a ] );
      s ? Yi( this, s ) : this.cm && Tn( this.cm )
    } ),
    undo: $n( function () {
      lo( this, "undo" )
    } ),
    redo: $n( function () {
      lo( this, "redo" )
    } ),
    undoSelection: $n( function () {
      lo( this, "undo", !0 )
    } ),
    redoSelection: $n( function () {
      lo( this, "redo", !0 )
    } ),
    setExtending: function ( e ) {
      this.extend = e
    },
    getExtending: function () {
      return this.extend
    },
    historySize: function () {
      for ( var e = this.history, t = 0, r = 0, n = 0; n < e.done.length; n++ ) e.done[ n ].ranges || ++t;
      for ( var i = 0; i < e.undone.length; i++ ) e.undone[ i ].ranges || ++r;
      return {
        undo: t,
        redo: r
      }
    },
    clearHistory: function () {
      this.history = new Di( this.history.maxGeneration )
    },
    markClean: function () {
      this.cleanGeneration = this.changeGeneration( !0 )
    },
    changeGeneration: function ( e ) {
      return e && ( this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null ), this.history.generation
    },
    isClean: function ( e ) {
      return this.history.generation == ( e || this.cleanGeneration )
    },
    getHistory: function () {
      return {
        done: Gi( this.history.done ),
        undone: Gi( this.history.undone )
      }
    },
    setHistory: function ( e ) {
      var t = this.history = new Di( this.history.maxGeneration );
      t.done = Gi( e.done.slice( 0 ), null, !0 ), t.undone = Gi( e.undone.slice( 0 ), null, !0 )
    },
    setGutterMarker: $n( function ( e, t, r ) {
      return po( this, e, "gutter", function ( e ) {
        var n = e.gutterMarkers || ( e.gutterMarkers = {} );
        return n[ t ] = r, !r && re( n ) && ( e.gutterMarkers = null ), !0
      } )
    } ),
    clearGutter: $n( function ( e ) {
      var t = this;
      this.iter( function ( r ) {
        r.gutterMarkers && r.gutterMarkers[ e ] && po( t, r, "gutter", function () {
          return r.gutterMarkers[ e ] = null, re( r.gutterMarkers ) && ( r.gutterMarkers = null ), !0
        } )
      } )
    } ),
    lineInfo: function ( e ) {
      var t;
      if ( "number" == typeof e ) {
        if ( !pe( this, e ) ) return null;
        if ( t = e, !( e = ae( this, e ) ) ) return null
      } else if ( null == ( t = fe( e ) ) ) return null;
      return {
        line: t,
        handle: e,
        text: e.text,
        gutterMarkers: e.gutterMarkers,
        textClass: e.textClass,
        bgClass: e.bgClass,
        wrapClass: e.wrapClass,
        widgets: e.widgets
      }
    },
    addLineClass: $n( function ( e, t, r ) {
      return po( this, e, "gutter" == t ? "gutter" : "class", function ( e ) {
        var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";
        if ( e[ n ] ) {
          if ( L( r ).test( e[ n ] ) ) return !1;
          e[ n ] += " " + r
        } else e[ n ] = r;
        return !0
      } )
    } ),
    removeLineClass: $n( function ( e, t, r ) {
      return po( this, e, "gutter" == t ? "gutter" : "class", function ( e ) {
        var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
          i = e[ n ];
        if ( !i ) return !1;
        if ( null == r ) e[ n ] = null;
        else {
          var o = i.match( L( r ) );
          if ( !o ) return !1;
          var l = o.index + o[ 0 ].length;
          e[ n ] = i.slice( 0, o.index ) + ( o.index && l != i.length ? " " : "" ) + i.slice( l ) || null
        }
        return !0
      } )
    } ),
    addLineWidget: $n( function ( e, t, r ) {
      return function ( e, t, r, n ) {
        var i = new mo( e, r, n ),
          o = e.cm;
        return o && i.noHScroll && ( o.display.alignWidgets = !0 ), po( e, t, "widget", function ( t ) {
          var r = t.widgets || ( t.widgets = [] );
          if ( null == i.insertAt ? r.push( i ) : r.splice( Math.min( r.length - 1, Math.max( 0, i.insertAt ) ), 0, i ), i.line = t, o && !Ke( e, t ) ) {
            var n = Xe( t ) < e.scrollTop;
            he( t, t.height + wr( i ) ), n && kn( o, i.height ), o.curOp.forceUpdate = !0
          }
          return !0
        } ), o && sr( o, "lineWidgetAdded", o, i, "number" == typeof t ? t : fe( t ) ), i
      }( this, e, t, r )
    } ),
    removeLineWidget: function ( e ) {
      e.clear()
    },
    markText: function ( e, t, r ) {
      return xo( this, Se( this, e ), Se( this, t ), r, r && r.type || "range" )
    },
    setBookmark: function ( e, t ) {
      var r = {
        replacedWith: t && ( null == t.nodeType ? t.widget : t ),
        insertLeft: t && t.insertLeft,
        clearWhenEmpty: !1,
        shared: t && t.shared,
        handleMouseEvents: t && t.handleMouseEvents
      };
      return xo( this, e = Se( this, e ), e, r, "bookmark" )
    },
    findMarksAt: function ( e ) {
      var t = [],
        r = ae( this, ( e = Se( this, e ) ).line ).markedSpans;
      if ( r )
        for ( var n = 0; n < r.length; ++n ) {
          var i = r[ n ];
          ( null == i.from || i.from <= e.ch ) && ( null == i.to || i.to >= e.ch ) && t.push( i.marker.parent || i.marker )
        }
      return t
    },
    findMarks: function ( e, t, r ) {
      e = Se( this, e ), t = Se( this, t );
      var n = [],
        i = e.line;
      return this.iter( e.line, t.line + 1, function ( o ) {
        var l = o.markedSpans;
        if ( l )
          for ( var s = 0; s < l.length; s++ ) {
            var a = l[ s ];
            null != a.to && i == e.line && e.ch >= a.to || null == a.from && i != e.line || null != a.from && i == t.line && a.from >= t.ch || r && !r( a.marker ) || n.push( a.marker.parent || a.marker )
          }++i
      } ), n
    },
    getAllMarks: function () {
      var e = [];
      return this.iter( function ( t ) {
        var r = t.markedSpans;
        if ( r )
          for ( var n = 0; n < r.length; ++n ) null != r[ n ].from && e.push( r[ n ].marker )
      } ), e
    },
    posFromIndex: function ( e ) {
      var t, r = this.first,
        n = this.lineSeparator().length;
      return this.iter( function ( i ) {
        var o = i.text.length + n;
        if ( o > e ) return t = e, !0;
        e -= o, ++r
      } ), Se( this, ve( r, t ) )
    },
    indexFromPos: function ( e ) {
      var t = ( e = Se( this, e ) ).ch;
      if ( e.line < this.first || e.ch < 0 ) return 0;
      var r = this.lineSeparator().length;
      return this.iter( this.first, e.line, function ( e ) {
        t += e.text.length + r
      } ), t
    },
    copy: function ( e ) {
      var t = new To( ce( this, this.first, this.first + this.size ), this.modeOption, this.first, this.lineSep, this.direction );
      return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && ( t.history.undoDepth = this.history.undoDepth, t.setHistory( this.getHistory() ) ), t
    },
    linkedDoc: function ( e ) {
      e || ( e = {} );
      var t = this.first,
        r = this.first + this.size;
      null != e.from && e.from > t && ( t = e.from ), null != e.to && e.to < r && ( r = e.to );
      var n = new To( ce( this, t, r ), e.mode || this.modeOption, t, this.lineSep, this.direction );
      return e.sharedHist && ( n.history = this.history ), ( this.linked || ( this.linked = [] ) ).push( {
          doc: n,
          sharedHist: e.sharedHist
        } ), n.linked = [ {
          doc: this,
          isParent: !0,
          sharedHist: e.sharedHist
        } ],
        function ( e, t ) {
          for ( var r = 0; r < t.length; r++ ) {
            var n = t[ r ],
              i = n.find(),
              o = e.clipPos( i.from ),
              l = e.clipPos( i.to );
            if ( me( o, l ) ) {
              var s = xo( e, o, l, n.primary, n.primary.type );
              n.markers.push( s ), s.parent = n
            }
          }
        }( n, So( this ) ), n
    },
    unlinkDoc: function ( e ) {
      if ( e instanceof Sl && ( e = e.doc ), this.linked )
        for ( var t = 0; t < this.linked.length; ++t ) {
          if ( this.linked[ t ].doc == e ) {
            this.linked.splice( t, 1 ), e.unlinkDoc( this ), Lo( So( this ) );
            break
          }
        }
      if ( e.history == this.history ) {
        var r = [ e.id ];
        Oi( e, function ( e ) {
          return r.push( e.id )
        }, !0 ), e.history = new Di( null ), e.history.done = Gi( this.history.done, r ), e.history.undone = Gi( this.history.undone, r )
      }
    },
    iterLinkedDocs: function ( e ) {
      Oi( this, e )
    },
    getMode: function () {
      return this.mode
    },
    getEditor: function () {
      return this.cm
    },
    splitLines: function ( e ) {
      return this.lineSep ? e.split( this.lineSep ) : wt( e )
    },
    lineSeparator: function () {
      return this.lineSep || "\n"
    },
    setDirection: $n( function ( e ) {
      var t;
      ( "rtl" != e && ( e = "ltr" ), e != this.direction ) && ( this.direction = e, this.iter( function ( e ) {
        return e.order = null
      } ), this.cm && Yn( t = this.cm, function () {
        Wi( t ), Zn( t )
      } ) )
    } )
  } ), To.prototype.eachLine = To.prototype.iter;
  var Mo = 0;

  function No( e ) {
    var t = this;
    if ( Oo( t ), !it( t, e ) && !xr( t.display, e ) ) {
      at( e ), l && ( Mo = +new Date );
      var r = sn( t, e, !0 ),
        n = e.dataTransfer.files;
      if ( r && !t.isReadOnly() )
        if ( n && n.length && window.FileReader && window.File )
          for ( var i = n.length, o = Array( i ), s = 0, a = function ( e, n ) {
              if ( !t.options.allowDropFileTypes || -1 != B( t.options.allowDropFileTypes, e.type ) ) {
                var l = new FileReader;
                l.onload = _n( t, function () {
                  var e = l.result;
                  if ( /[\x00-\x08\x0e-\x1f]{2}/.test( e ) && ( e = "" ), o[ n ] = e, ++s == i ) {
                    var a = {
                      from: r = Se( t.doc, r ),
                      to: r,
                      text: t.doc.splitLines( o.join( t.doc.lineSeparator() ) ),
                      origin: "paste"
                    };
                    io( t.doc, a ), Yi( t.doc, wi( r, xi( a ) ) )
                  }
                } ), l.readAsText( e )
              }
            }, u = 0; u < i; ++u ) a( n[ u ], u );
        else {
          if ( t.state.draggingText && t.doc.sel.contains( r ) > -1 ) return t.state.draggingText( e ), void setTimeout( function () {
            return t.display.input.focus()
          }, 20 );
          try {
            var c = e.dataTransfer.getData( "Text" );
            if ( c ) {
              var h;
              if ( t.state.draggingText && !t.state.draggingText.copy && ( h = t.listSelections() ), qi( t.doc, wi( r, r ) ), h )
                for ( var f = 0; f < h.length; ++f ) uo( t.doc, "", h[ f ].anchor, h[ f ].head, "drag" );
              t.replaceSelection( c, "around", "paste" ), t.display.input.focus()
            }
          } catch ( e ) {}
        }
    }
  }

  function Oo( e ) {
    e.display.dragCursor && ( e.display.lineSpace.removeChild( e.display.dragCursor ), e.display.dragCursor = null )
  }

  function Ao( e ) {
    if ( document.getElementsByClassName )
      for ( var t = document.getElementsByClassName( "CodeMirror" ), r = 0; r < t.length; r++ ) {
        var n = t[ r ].CodeMirror;
        n && e( n )
      }
  }
  var Wo = !1;

  function Do() {
    var e;
    Wo || ( et( window, "resize", function () {
      null == e && ( e = setTimeout( function () {
        e = null, Ao( Ho )
      }, 100 ) )
    } ), et( window, "blur", function () {
      return Ao( yn )
    } ), Wo = !0 )
  }

  function Ho( e ) {
    var t = e.display;
    t.lastWrapHeight == t.wrapper.clientHeight && t.lastWrapWidth == t.wrapper.clientWidth || ( t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize() )
  }
  for ( var Fo = {
      3: "Pause",
      8: "Backspace",
      9: "Tab",
      13: "Enter",
      16: "Shift",
      17: "Ctrl",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
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
      44: "PrintScrn",
      45: "Insert",
      46: "Delete",
      59: ";",
      61: "=",
      91: "Mod",
      92: "Mod",
      93: "Mod",
      106: "*",
      107: "=",
      109: "-",
      110: ".",
      111: "/",
      127: "Delete",
      145: "ScrollLock",
      173: "-",
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
      63232: "Up",
      63233: "Down",
      63234: "Left",
      63235: "Right",
      63272: "Delete",
      63273: "Home",
      63275: "End",
      63276: "PageUp",
      63277: "PageDown",
      63302: "Insert"
    }, Po = 0; Po < 10; Po++ ) Fo[ Po + 48 ] = Fo[ Po + 96 ] = String( Po );
  for ( var Eo = 65; Eo <= 90; Eo++ ) Fo[ Eo ] = String.fromCharCode( Eo );
  for ( var zo = 1; zo <= 12; zo++ ) Fo[ zo + 111 ] = Fo[ zo + 63235 ] = "F" + zo;
  var Io = {};

  function Ro( e ) {
    var t, r, n, i, o = e.split( /-(?!$)/ );
    e = o[ o.length - 1 ];
    for ( var l = 0; l < o.length - 1; l++ ) {
      var s = o[ l ];
      if ( /^(cmd|meta|m)$/i.test( s ) ) i = !0;
      else if ( /^a(lt)?$/i.test( s ) ) t = !0;
      else if ( /^(c|ctrl|control)$/i.test( s ) ) r = !0;
      else {
        if ( !/^s(hift)?$/i.test( s ) ) throw new Error( "Unrecognized modifier name: " + s );
        n = !0
      }
    }
    return t && ( e = "Alt-" + e ), r && ( e = "Ctrl-" + e ), i && ( e = "Cmd-" + e ), n && ( e = "Shift-" + e ), e
  }

  function Bo( e ) {
    var t = {};
    for ( var r in e )
      if ( e.hasOwnProperty( r ) ) {
        var n = e[ r ];
        if ( /^(name|fallthrough|(de|at)tach)$/.test( r ) ) continue;
        if ( "..." == n ) {
          delete e[ r ];
          continue
        }
        for ( var i = $( r.split( " " ), Ro ), o = 0; o < i.length; o++ ) {
          var l = void 0,
            s = void 0;
          o == i.length - 1 ? ( s = i.join( " " ), l = n ) : ( s = i.slice( 0, o + 1 ).join( " " ), l = "..." );
          var a = t[ s ];
          if ( a ) {
            if ( a != l ) throw new Error( "Inconsistent bindings for " + s )
          } else t[ s ] = l
        }
        delete e[ r ]
      } for ( var u in t ) e[ u ] = t[ u ];
    return e
  }

  function Go( e, t, r, n ) {
    var i = ( t = jo( t ) ).call ? t.call( e, n ) : t[ e ];
    if ( !1 === i ) return "nothing";
    if ( "..." === i ) return "multi";
    if ( null != i && r( i ) ) return "handled";
    if ( t.fallthrough ) {
      if ( "[object Array]" != Object.prototype.toString.call( t.fallthrough ) ) return Go( e, t.fallthrough, r, n );
      for ( var o = 0; o < t.fallthrough.length; o++ ) {
        var l = Go( e, t.fallthrough[ o ], r, n );
        if ( l ) return l
      }
    }
  }

  function Uo( e ) {
    var t = "string" == typeof e ? e : Fo[ e.keyCode ];
    return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
  }

  function Vo( e, t, r ) {
    var n = e;
    return t.altKey && "Alt" != n && ( e = "Alt-" + e ), ( C ? t.metaKey : t.ctrlKey ) && "Ctrl" != n && ( e = "Ctrl-" + e ), ( C ? t.ctrlKey : t.metaKey ) && "Cmd" != n && ( e = "Cmd-" + e ), !r && t.shiftKey && "Shift" != n && ( e = "Shift-" + e ), e
  }

  function Ko( e, t ) {
    if ( h && 34 == e.keyCode && e.char ) return !1;
    var r = Fo[ e.keyCode ];
    return null != r && !e.altGraphKey && ( 3 == e.keyCode && e.code && ( r = e.code ), Vo( r, e, t ) )
  }

  function jo( e ) {
    return "string" == typeof e ? Io[ e ] : e
  }

  function Xo( e, t ) {
    for ( var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++ ) {
      for ( var o = t( r[ i ] ); n.length && me( o.from, q( n ).to ) <= 0; ) {
        var l = n.pop();
        if ( me( l.from, o.from ) < 0 ) {
          o.from = l.from;
          break
        }
      }
      n.push( o )
    }
    Yn( e, function () {
      for ( var t = n.length - 1; t >= 0; t-- ) uo( e.doc, "", n[ t ].from, n[ t ].to, "+delete" );
      Tn( e )
    } )
  }

  function Yo( e, t, r ) {
    var n = oe( e.text, t + r, r );
    return n < 0 || n > e.text.length ? null : n
  }

  function _o( e, t, r ) {
    var n = Yo( e, t.ch, r );
    return null == n ? null : new ve( t.line, n, r < 0 ? "after" : "before" )
  }

  function qo( e, t, r, n, i ) {
    if ( e ) {
      var o = Qe( r, t.doc.direction );
      if ( o ) {
        var l, s = i < 0 ? q( o ) : o[ 0 ],
          a = i < 0 == ( 1 == s.level ) ? "after" : "before";
        if ( s.level > 0 || "rtl" == t.doc.direction ) {
          var u = Wr( t, r );
          l = i < 0 ? r.text.length - 1 : 0;
          var c = Dr( t, u, l ).top;
          l = le( function ( e ) {
            return Dr( t, u, e ).top == c
          }, i < 0 == ( 1 == s.level ) ? s.from : s.to - 1, l ), "before" == a && ( l = Yo( r, l, 1 ) )
        } else l = i < 0 ? s.to : s.from;
        return new ve( n, l, a )
      }
    }
    return new ve( n, i < 0 ? r.text.length : 0, i < 0 ? "before" : "after" )
  }
  Io.basic = {
    Left: "goCharLeft",
    Right: "goCharRight",
    Up: "goLineUp",
    Down: "goLineDown",
    End: "goLineEnd",
    Home: "goLineStartSmart",
    PageUp: "goPageUp",
    PageDown: "goPageDown",
    Delete: "delCharAfter",
    Backspace: "delCharBefore",
    "Shift-Backspace": "delCharBefore",
    Tab: "defaultTab",
    "Shift-Tab": "indentAuto",
    Enter: "newlineAndIndent",
    Insert: "toggleOverwrite",
    Esc: "singleSelection"
  }, Io.pcDefault = {
    "Ctrl-A": "selectAll",
    "Ctrl-D": "deleteLine",
    "Ctrl-Z": "undo",
    "Shift-Ctrl-Z": "redo",
    "Ctrl-Y": "redo",
    "Ctrl-Home": "goDocStart",
    "Ctrl-End": "goDocEnd",
    "Ctrl-Up": "goLineUp",
    "Ctrl-Down": "goLineDown",
    "Ctrl-Left": "goGroupLeft",
    "Ctrl-Right": "goGroupRight",
    "Alt-Left": "goLineStart",
    "Alt-Right": "goLineEnd",
    "Ctrl-Backspace": "delGroupBefore",
    "Ctrl-Delete": "delGroupAfter",
    "Ctrl-S": "save",
    "Ctrl-F": "find",
    "Ctrl-G": "findNext",
    "Shift-Ctrl-G": "findPrev",
    "Shift-Ctrl-F": "replace",
    "Shift-Ctrl-R": "replaceAll",
    "Ctrl-[": "indentLess",
    "Ctrl-]": "indentMore",
    "Ctrl-U": "undoSelection",
    "Shift-Ctrl-U": "redoSelection",
    "Alt-U": "redoSelection",
    fallthrough: "basic"
  }, Io.emacsy = {
    "Ctrl-F": "goCharRight",
    "Ctrl-B": "goCharLeft",
    "Ctrl-P": "goLineUp",
    "Ctrl-N": "goLineDown",
    "Alt-F": "goWordRight",
    "Alt-B": "goWordLeft",
    "Ctrl-A": "goLineStart",
    "Ctrl-E": "goLineEnd",
    "Ctrl-V": "goPageDown",
    "Shift-Ctrl-V": "goPageUp",
    "Ctrl-D": "delCharAfter",
    "Ctrl-H": "delCharBefore",
    "Alt-D": "delWordAfter",
    "Alt-Backspace": "delWordBefore",
    "Ctrl-K": "killLine",
    "Ctrl-T": "transposeChars",
    "Ctrl-O": "openLine"
  }, Io.macDefault = {
    "Cmd-A": "selectAll",
    "Cmd-D": "deleteLine",
    "Cmd-Z": "undo",
    "Shift-Cmd-Z": "redo",
    "Cmd-Y": "redo",
    "Cmd-Home": "goDocStart",
    "Cmd-Up": "goDocStart",
    "Cmd-End": "goDocEnd",
    "Cmd-Down": "goDocEnd",
    "Alt-Left": "goGroupLeft",
    "Alt-Right": "goGroupRight",
    "Cmd-Left": "goLineLeft",
    "Cmd-Right": "goLineRight",
    "Alt-Backspace": "delGroupBefore",
    "Ctrl-Alt-Backspace": "delGroupAfter",
    "Alt-Delete": "delGroupAfter",
    "Cmd-S": "save",
    "Cmd-F": "find",
    "Cmd-G": "findNext",
    "Shift-Cmd-G": "findPrev",
    "Cmd-Alt-F": "replace",
    "Shift-Cmd-Alt-F": "replaceAll",
    "Cmd-[": "indentLess",
    "Cmd-]": "indentMore",
    "Cmd-Backspace": "delWrappedLineLeft",
    "Cmd-Delete": "delWrappedLineRight",
    "Cmd-U": "undoSelection",
    "Shift-Cmd-U": "redoSelection",
    "Ctrl-Up": "goDocStart",
    "Ctrl-Down": "goDocEnd",
    fallthrough: [ "basic", "emacsy" ]
  }, Io.default = y ? Io.macDefault : Io.pcDefault;
  var $o = {
    selectAll: ro,
    singleSelection: function ( e ) {
      return e.setSelection( e.getCursor( "anchor" ), e.getCursor( "head" ), V )
    },
    killLine: function ( e ) {
      return Xo( e, function ( t ) {
        if ( t.empty() ) {
          var r = ae( e.doc, t.head.line ).text.length;
          return t.head.ch == r && t.head.line < e.lastLine() ? {
            from: t.head,
            to: ve( t.head.line + 1, 0 )
          } : {
            from: t.head,
            to: ve( t.head.line, r )
          }
        }
        return {
          from: t.from(),
          to: t.to()
        }
      } )
    },
    deleteLine: function ( e ) {
      return Xo( e, function ( t ) {
        return {
          from: ve( t.from().line, 0 ),
          to: Se( e.doc, ve( t.to().line + 1, 0 ) )
        }
      } )
    },
    delLineLeft: function ( e ) {
      return Xo( e, function ( e ) {
        return {
          from: ve( e.from().line, 0 ),
          to: e.from()
        }
      } )
    },
    delWrappedLineLeft: function ( e ) {
      return Xo( e, function ( t ) {
        var r = e.charCoords( t.head, "div" ).top + 5;
        return {
          from: e.coordsChar( {
            left: 0,
            top: r
          }, "div" ),
          to: t.from()
        }
      } )
    },
    delWrappedLineRight: function ( e ) {
      return Xo( e, function ( t ) {
        var r = e.charCoords( t.head, "div" ).top + 5,
          n = e.coordsChar( {
            left: e.display.lineDiv.offsetWidth + 100,
            top: r
          }, "div" );
        return {
          from: t.from(),
          to: n
        }
      } )
    },
    undo: function ( e ) {
      return e.undo()
    },
    redo: function ( e ) {
      return e.redo()
    },
    undoSelection: function ( e ) {
      return e.undoSelection()
    },
    redoSelection: function ( e ) {
      return e.redoSelection()
    },
    goDocStart: function ( e ) {
      return e.extendSelection( ve( e.firstLine(), 0 ) )
    },
    goDocEnd: function ( e ) {
      return e.extendSelection( ve( e.lastLine() ) )
    },
    goLineStart: function ( e ) {
      return e.extendSelectionsBy( function ( t ) {
        return Zo( e, t.head.line )
      }, {
        origin: "+move",
        bias: 1
      } )
    },
    goLineStartSmart: function ( e ) {
      return e.extendSelectionsBy( function ( t ) {
        return Qo( e, t.head )
      }, {
        origin: "+move",
        bias: 1
      } )
    },
    goLineEnd: function ( e ) {
      return e.extendSelectionsBy( function ( t ) {
        return function ( e, t ) {
          var r = ae( e.doc, t ),
            n = function ( e ) {
              for ( var t; t = Re( e ); ) e = t.find( 1, !0 ).line;
              return e
            }( r );
          n != r && ( t = fe( n ) );
          return qo( !0, e, r, t, -1 )
        }( e, t.head.line )
      }, {
        origin: "+move",
        bias: -1
      } )
    },
    goLineRight: function ( e ) {
      return e.extendSelectionsBy( function ( t ) {
        var r = e.cursorCoords( t.head, "div" ).top + 5;
        return e.coordsChar( {
          left: e.display.lineDiv.offsetWidth + 100,
          top: r
        }, "div" )
      }, j )
    },
    goLineLeft: function ( e ) {
      return e.extendSelectionsBy( function ( t ) {
        var r = e.cursorCoords( t.head, "div" ).top + 5;
        return e.coordsChar( {
          left: 0,
          top: r
        }, "div" )
      }, j )
    },
    goLineLeftSmart: function ( e ) {
      return e.extendSelectionsBy( function ( t ) {
        var r = e.cursorCoords( t.head, "div" ).top + 5,
          n = e.coordsChar( {
            left: 0,
            top: r
          }, "div" );
        return n.ch < e.getLine( n.line ).search( /\S/ ) ? Qo( e, t.head ) : n
      }, j )
    },
    goLineUp: function ( e ) {
      return e.moveV( -1, "line" )
    },
    goLineDown: function ( e ) {
      return e.moveV( 1, "line" )
    },
    goPageUp: function ( e ) {
      return e.moveV( -1, "page" )
    },
    goPageDown: function ( e ) {
      return e.moveV( 1, "page" )
    },
    goCharLeft: function ( e ) {
      return e.moveH( -1, "char" )
    },
    goCharRight: function ( e ) {
      return e.moveH( 1, "char" )
    },
    goColumnLeft: function ( e ) {
      return e.moveH( -1, "column" )
    },
    goColumnRight: function ( e ) {
      return e.moveH( 1, "column" )
    },
    goWordLeft: function ( e ) {
      return e.moveH( -1, "word" )
    },
    goGroupRight: function ( e ) {
      return e.moveH( 1, "group" )
    },
    goGroupLeft: function ( e ) {
      return e.moveH( -1, "group" )
    },
    goWordRight: function ( e ) {
      return e.moveH( 1, "word" )
    },
    delCharBefore: function ( e ) {
      return e.deleteH( -1, "char" )
    },
    delCharAfter: function ( e ) {
      return e.deleteH( 1, "char" )
    },
    delWordBefore: function ( e ) {
      return e.deleteH( -1, "word" )
    },
    delWordAfter: function ( e ) {
      return e.deleteH( 1, "word" )
    },
    delGroupBefore: function ( e ) {
      return e.deleteH( -1, "group" )
    },
    delGroupAfter: function ( e ) {
      return e.deleteH( 1, "group" )
    },
    indentAuto: function ( e ) {
      return e.indentSelection( "smart" )
    },
    indentMore: function ( e ) {
      return e.indentSelection( "add" )
    },
    indentLess: function ( e ) {
      return e.indentSelection( "subtract" )
    },
    insertTab: function ( e ) {
      return e.replaceSelection( "\t" )
    },
    insertSoftTab: function ( e ) {
      for ( var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0; i < r.length; i++ ) {
        var o = r[ i ].from(),
          l = I( e.getLine( o.line ), o.ch, n );
        t.push( _( n - l % n ) )
      }
      e.replaceSelections( t )
    },
    defaultTab: function ( e ) {
      e.somethingSelected() ? e.indentSelection( "add" ) : e.execCommand( "insertTab" )
    },
    transposeChars: function ( e ) {
      return Yn( e, function () {
        for ( var t = e.listSelections(), r = [], n = 0; n < t.length; n++ )
          if ( t[ n ].empty() ) {
            var i = t[ n ].head,
              o = ae( e.doc, i.line ).text;
            if ( o )
              if ( i.ch == o.length && ( i = new ve( i.line, i.ch - 1 ) ), i.ch > 0 ) i = new ve( i.line, i.ch + 1 ), e.replaceRange( o.charAt( i.ch - 1 ) + o.charAt( i.ch - 2 ), ve( i.line, i.ch - 2 ), i, "+transpose" );
              else if ( i.line > e.doc.first ) {
              var l = ae( e.doc, i.line - 1 ).text;
              l && ( i = new ve( i.line, 1 ), e.replaceRange( o.charAt( 0 ) + e.doc.lineSeparator() + l.charAt( l.length - 1 ), ve( i.line - 1, l.length - 1 ), i, "+transpose" ) )
            }
            r.push( new yi( i, i ) )
          } e.setSelections( r )
      } )
    },
    newlineAndIndent: function ( e ) {
      return Yn( e, function () {
        for ( var t = e.listSelections(), r = t.length - 1; r >= 0; r-- ) e.replaceRange( e.doc.lineSeparator(), t[ r ].anchor, t[ r ].head, "+input" );
        t = e.listSelections();
        for ( var n = 0; n < t.length; n++ ) e.indentLine( t[ n ].from().line, null, !0 );
        Tn( e )
      } )
    },
    openLine: function ( e ) {
      return e.replaceSelection( "\n", "start" )
    },
    toggleOverwrite: function ( e ) {
      return e.toggleOverwrite()
    }
  };

  function Zo( e, t ) {
    var r = ae( e.doc, t ),
      n = Ge( r );
    return n != r && ( t = fe( n ) ), qo( !0, e, n, t, 1 )
  }

  function Qo( e, t ) {
    var r = Zo( e, t.line ),
      n = ae( e.doc, r.line ),
      i = Qe( n, e.doc.direction );
    if ( !i || 0 == i[ 0 ].level ) {
      var o = Math.max( 0, n.text.search( /\S/ ) ),
        l = t.line == r.line && t.ch <= o && t.ch;
      return ve( r.line, l ? 0 : o, r.sticky )
    }
    return r
  }

  function Jo( e, t, r ) {
    if ( "string" == typeof t && !( t = $o[ t ] ) ) return !1;
    e.display.input.ensurePolled();
    var n = e.display.shift,
      i = !1;
    try {
      e.isReadOnly() && ( e.state.suppressEdits = !0 ), r && ( e.display.shift = !1 ), i = t( e ) != U
    } finally {
      e.display.shift = n, e.state.suppressEdits = !1
    }
    return i
  }
  var el = new R;

  function tl( e, t, r, n ) {
    var i = e.state.keySeq;
    if ( i ) {
      if ( Uo( t ) ) return "handled";
      if ( /\'$/.test( t ) ? e.state.keySeq = null : el.set( 50, function () {
          e.state.keySeq == i && ( e.state.keySeq = null, e.display.input.reset() )
        } ), rl( e, i + " " + t, r, n ) ) return !0
    }
    return rl( e, t, r, n )
  }

  function rl( e, t, r, n ) {
    var i = function ( e, t, r ) {
      for ( var n = 0; n < e.state.keyMaps.length; n++ ) {
        var i = Go( t, e.state.keyMaps[ n ], r, e );
        if ( i ) return i
      }
      return e.options.extraKeys && Go( t, e.options.extraKeys, r, e ) || Go( t, e.options.keyMap, r, e )
    }( e, t, n );
    return "multi" == i && ( e.state.keySeq = t ), "handled" == i && sr( e, "keyHandled", e, t, r ), "handled" != i && "multi" != i || ( at( r ), pn( e ) ), !!i
  }

  function nl( e, t ) {
    var r = Ko( t, !0 );
    return !!r && ( t.shiftKey && !e.state.keySeq ? tl( e, "Shift-" + r, t, function ( t ) {
      return Jo( e, t, !0 )
    } ) || tl( e, r, t, function ( t ) {
      if ( "string" == typeof t ? /^go[A-Z]/.test( t ) : t.motion ) return Jo( e, t )
    } ) : tl( e, r, t, function ( t ) {
      return Jo( e, t )
    } ) )
  }
  var il = null;

  function ol( e ) {
    var t = this;
    if ( t.curOp.focus = D(), !it( t, e ) ) {
      l && s < 11 && 27 == e.keyCode && ( e.returnValue = !1 );
      var r = e.keyCode;
      t.display.shift = 16 == r || e.shiftKey;
      var n = nl( t, e );
      h && ( il = n ? r : null, !n && 88 == r && !Ct && ( y ? e.metaKey : e.ctrlKey ) && t.replaceSelection( "", null, "cut" ) ), 18 != r || /\bCodeMirror-crosshair\b/.test( t.display.lineDiv.className ) || function ( e ) {
        var t = e.display.lineDiv;

        function r( e ) {
          18 != e.keyCode && e.altKey || ( T( t, "CodeMirror-crosshair" ), rt( document, "keyup", r ), rt( document, "mouseover", r ) )
        }
        H( t, "CodeMirror-crosshair" ), et( document, "keyup", r ), et( document, "mouseover", r )
      }( t )
    }
  }

  function ll( e ) {
    16 == e.keyCode && ( this.doc.sel.shift = !1 ), it( this, e )
  }

  function sl( e ) {
    var t = this;
    if ( !( xr( t.display, e ) || it( t, e ) || e.ctrlKey && !e.altKey || y && e.metaKey ) ) {
      var r = e.keyCode,
        n = e.charCode;
      if ( h && r == il ) return il = null, void at( e );
      if ( !h || e.which && !( e.which < 10 ) || !nl( t, e ) ) {
        var i = String.fromCharCode( null == n ? r : n );
        "\b" != i && ( function ( e, t, r ) {
          return tl( e, "'" + r + "'", t, function ( t ) {
            return Jo( e, t, !0 )
          } )
        }( t, e, i ) || t.display.input.onKeyPress( e ) )
      }
    }
  }
  var al, ul, cl = function ( e, t, r ) {
    this.time = e, this.pos = t, this.button = r
  };

  function hl( e ) {
    var t = this,
      r = t.display;
    if ( !( it( t, e ) || r.activeTouch && r.input.supportsTouch() ) )
      if ( r.input.ensurePolled(), r.shift = e.shiftKey, xr( r, e ) ) a || ( r.scroller.draggable = !1, setTimeout( function () {
        return r.scroller.draggable = !0
      }, 100 ) );
      else if ( !pl( t, e ) ) {
      var n = sn( t, e ),
        i = dt( e ),
        o = n ? function ( e, t ) {
          var r = +new Date;
          return ul && ul.compare( r, e, t ) ? ( al = ul = null, "triple" ) : al && al.compare( r, e, t ) ? ( ul = new cl( r, e, t ), al = null, "double" ) : ( al = new cl( r, e, t ), ul = null, "single" )
        }( n, i ) : "single";
      window.focus(), 1 == i && t.state.selectingText && t.state.selectingText( e ), n && function ( e, t, r, n, i ) {
        var o = "Click";
        "double" == n ? o = "Double" + o : "triple" == n && ( o = "Triple" + o );
        return tl( e, Vo( o = ( 1 == t ? "Left" : 2 == t ? "Middle" : "Right" ) + o, i ), i, function ( t ) {
          if ( "string" == typeof t && ( t = $o[ t ] ), !t ) return !1;
          var n = !1;
          try {
            e.isReadOnly() && ( e.state.suppressEdits = !0 ), n = t( e, r ) != U
          } finally {
            e.state.suppressEdits = !1
          }
          return n
        } )
      }( t, i, n, o, e ) || ( 1 == i ? n ? function ( e, t, r, n ) {
        l ? setTimeout( E( gn, e ), 0 ) : e.curOp.focus = D();
        var i, o = function ( e, t, r ) {
            var n = e.getOption( "configureMouse" ),
              i = n ? n( e, t, r ) : {};
            if ( null == i.unit ) {
              var o = b ? r.shiftKey && r.metaKey : r.altKey;
              i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line"
            }( null == i.extend || e.doc.extend ) && ( i.extend = e.doc.extend || r.shiftKey );
            null == i.addNew && ( i.addNew = y ? r.metaKey : r.ctrlKey );
            null == i.moveOnDrag && ( i.moveOnDrag = !( y ? r.altKey : r.ctrlKey ) );
            return i
          }( e, r, n ),
          u = e.doc.sel;
        e.options.dragDrop && vt && !e.isReadOnly() && "single" == r && ( i = u.contains( t ) ) > -1 && ( me( ( i = u.ranges[ i ] ).from(), t ) < 0 || t.xRel > 0 ) && ( me( i.to(), t ) > 0 || t.xRel < 0 ) ? function ( e, t, r, n ) {
          var i = e.display,
            o = !1,
            u = _n( e, function ( t ) {
              a && ( i.scroller.draggable = !1 ), e.state.draggingText = !1, rt( i.wrapper.ownerDocument, "mouseup", u ), rt( i.wrapper.ownerDocument, "mousemove", c ), rt( i.scroller, "dragstart", h ), rt( i.scroller, "drop", u ), o || ( at( t ), n.addNew || Vi( e.doc, r, null, null, n.extend ), a || l && 9 == s ? setTimeout( function () {
                i.wrapper.ownerDocument.body.focus(), i.input.focus()
              }, 20 ) : i.input.focus() )
            } ),
            c = function ( e ) {
              o = o || Math.abs( t.clientX - e.clientX ) + Math.abs( t.clientY - e.clientY ) >= 10
            },
            h = function () {
              return o = !0
            };
          a && ( i.scroller.draggable = !0 );
          e.state.draggingText = u, u.copy = !n.moveOnDrag, i.scroller.dragDrop && i.scroller.dragDrop();
          et( i.wrapper.ownerDocument, "mouseup", u ), et( i.wrapper.ownerDocument, "mousemove", c ), et( i.scroller, "dragstart", h ), et( i.scroller, "drop", u ), vn( e ), setTimeout( function () {
            return i.input.focus()
          }, 20 )
        }( e, n, t, o ) : function ( e, t, r, n ) {
          var i = e.display,
            o = e.doc;
          at( t );
          var l, s, a = o.sel,
            u = a.ranges;
          n.addNew && !n.extend ? ( s = o.sel.contains( r ), l = s > -1 ? u[ s ] : new yi( r, r ) ) : ( l = o.sel.primary(), s = o.sel.primIndex );
          if ( "rectangle" == n.unit ) n.addNew || ( l = new yi( r, r ) ), r = sn( e, t, !0, !0 ), s = -1;
          else {
            var c = fl( e, r, n.unit );
            l = n.extend ? Ui( l, c.anchor, c.head, n.extend ) : c
          }
          n.addNew ? -1 == s ? ( s = u.length, _i( o, bi( u.concat( [ l ] ), s ), {
            scroll: !1,
            origin: "*mouse"
          } ) ) : u.length > 1 && u[ s ].empty() && "char" == n.unit && !n.extend ? ( _i( o, bi( u.slice( 0, s ).concat( u.slice( s + 1 ) ), 0 ), {
            scroll: !1,
            origin: "*mouse"
          } ), a = o.sel ) : ji( o, s, l, K ) : ( s = 0, _i( o, new mi( [ l ], 0 ), K ), a = o.sel );
          var h = r;

          function f( t ) {
            if ( 0 != me( h, t ) )
              if ( h = t, "rectangle" == n.unit ) {
                for ( var i = [], u = e.options.tabSize, c = I( ae( o, r.line ).text, r.ch, u ), f = I( ae( o, t.line ).text, t.ch, u ), d = Math.min( c, f ), p = Math.max( c, f ), g = Math.min( r.line, t.line ), v = Math.min( e.lastLine(), Math.max( r.line, t.line ) ); g <= v; g++ ) {
                  var m = ae( o, g ).text,
                    y = X( m, d, u );
                  d == p ? i.push( new yi( ve( g, y ), ve( g, y ) ) ) : m.length > y && i.push( new yi( ve( g, y ), ve( g, X( m, p, u ) ) ) )
                }
                i.length || i.push( new yi( r, r ) ), _i( o, bi( a.ranges.slice( 0, s ).concat( i ), s ), {
                  origin: "*mouse",
                  scroll: !1
                } ), e.scrollIntoView( t )
              } else {
                var b, w = l,
                  x = fl( e, t, n.unit ),
                  C = w.anchor;
                me( x.anchor, C ) > 0 ? ( b = x.head, C = xe( w.from(), x.anchor ) ) : ( b = x.anchor, C = we( w.to(), x.head ) );
                var S = a.ranges.slice( 0 );
                S[ s ] = function ( e, t ) {
                  var r = t.anchor,
                    n = t.head,
                    i = ae( e.doc, r.line );
                  if ( 0 == me( r, n ) && r.sticky == n.sticky ) return t;
                  var o = Qe( i );
                  if ( !o ) return t;
                  var l = $e( o, r.ch, r.sticky ),
                    s = o[ l ];
                  if ( s.from != r.ch && s.to != r.ch ) return t;
                  var a, u = l + ( s.from == r.ch == ( 1 != s.level ) ? 0 : 1 );
                  if ( 0 == u || u == o.length ) return t;
                  if ( n.line != r.line ) a = ( n.line - r.line ) * ( "ltr" == e.doc.direction ? 1 : -1 ) > 0;
                  else {
                    var c = $e( o, n.ch, n.sticky ),
                      h = c - l || ( n.ch - r.ch ) * ( 1 == s.level ? -1 : 1 );
                    a = c == u - 1 || c == u ? h < 0 : h > 0
                  }
                  var f = o[ u + ( a ? -1 : 0 ) ],
                    d = a == ( 1 == f.level ),
                    p = d ? f.from : f.to,
                    g = d ? "after" : "before";
                  return r.ch == p && r.sticky == g ? t : new yi( new ve( r.line, p, g ), n )
                }( e, new yi( Se( o, C ), b ) ), _i( o, bi( S, s ), K )
              }
          }
          var d = i.wrapper.getBoundingClientRect(),
            p = 0;

          function g( t ) {
            e.state.selectingText = !1, p = 1 / 0, at( t ), i.input.focus(), rt( i.wrapper.ownerDocument, "mousemove", v ), rt( i.wrapper.ownerDocument, "mouseup", m ), o.history.lastSelOrigin = null
          }
          var v = _n( e, function ( t ) {
              dt( t ) ? function t( r ) {
                var l = ++p;
                var s = sn( e, r, !0, "rectangle" == n.unit );
                if ( !s ) return;
                if ( 0 != me( s, h ) ) {
                  e.curOp.focus = D(), f( s );
                  var a = xn( i, o );
                  ( s.line >= a.to || s.line < a.from ) && setTimeout( _n( e, function () {
                    p == l && t( r )
                  } ), 150 )
                } else {
                  var u = r.clientY < d.top ? -20 : r.clientY > d.bottom ? 20 : 0;
                  u && setTimeout( _n( e, function () {
                    p == l && ( i.scroller.scrollTop += u, t( r ) )
                  } ), 50 )
                }
              }( t ) : g( t )
            } ),
            m = _n( e, g );
          e.state.selectingText = m, et( i.wrapper.ownerDocument, "mousemove", v ), et( i.wrapper.ownerDocument, "mouseup", m )
        }( e, n, t, o )
      }( t, n, o, e ) : ft( e ) == r.scroller && at( e ) : 2 == i ? ( n && Vi( t.doc, n ), setTimeout( function () {
        return r.input.focus()
      }, 20 ) ) : 3 == i && ( S ? gl( t, e ) : vn( t ) ) )
    }
  }

  function fl( e, t, r ) {
    if ( "char" == r ) return new yi( t, t );
    if ( "word" == r ) return e.findWordAt( t );
    if ( "line" == r ) return new yi( ve( t.line, 0 ), Se( e.doc, ve( t.line + 1, 0 ) ) );
    var n = r( e, t );
    return new yi( n.from, n.to )
  }

  function dl( e, t, r, n ) {
    var i, o;
    if ( t.touches ) i = t.touches[ 0 ].clientX, o = t.touches[ 0 ].clientY;
    else try {
      i = t.clientX, o = t.clientY
    } catch ( t ) {
      return !1
    }
    if ( i >= Math.floor( e.display.gutters.getBoundingClientRect().right ) ) return !1;
    n && at( t );
    var l = e.display,
      s = l.lineDiv.getBoundingClientRect();
    if ( o > s.bottom || !lt( e, r ) ) return ct( t );
    o -= s.top - l.viewOffset;
    for ( var a = 0; a < e.options.gutters.length; ++a ) {
      var u = l.gutters.childNodes[ a ];
      if ( u && u.getBoundingClientRect().right >= i ) return nt( e, r, e, de( e.doc, o ), e.options.gutters[ a ], t ), ct( t )
    }
  }

  function pl( e, t ) {
    return dl( e, t, "gutterClick", !0 )
  }

  function gl( e, t ) {
    xr( e.display, t ) || function ( e, t ) {
      if ( !lt( e, "gutterContextMenu" ) ) return !1;
      return dl( e, t, "gutterContextMenu", !1 )
    }( e, t ) || it( e, t, "contextmenu" ) || e.display.input.onContextMenu( t )
  }

  function vl( e ) {
    e.display.wrapper.className = e.display.wrapper.className.replace( /\s*cm-s-\S+/g, "" ) + e.options.theme.replace( /(^|\s)\s*/g, " cm-s-" ), Rr( e )
  }
  cl.prototype.compare = function ( e, t, r ) {
    return this.time + 400 > e && 0 == me( t, this.pos ) && r == this.button
  };
  var ml = {
      toString: function () {
        return "CodeMirror.Init"
      }
    },
    yl = {},
    bl = {};

  function wl( e ) {
    ci( e ), Zn( e ), Cn( e )
  }

  function xl( e, t, r ) {
    if ( !t != !( r && r != ml ) ) {
      var n = e.display.dragFunctions,
        i = t ? et : rt;
      i( e.display.scroller, "dragstart", n.start ), i( e.display.scroller, "dragenter", n.enter ), i( e.display.scroller, "dragover", n.over ), i( e.display.scroller, "dragleave", n.leave ), i( e.display.scroller, "drop", n.drop )
    }
  }

  function Cl( e ) {
    e.options.lineWrapping ? ( H( e.display.wrapper, "CodeMirror-wrap" ), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null ) : ( T( e.display.wrapper, "CodeMirror-wrap" ), _e( e ) ), ln( e ), Zn( e ), Rr( e ), setTimeout( function () {
      return En( e )
    }, 100 )
  }

  function Sl( e, t ) {
    var r = this;
    if ( !( this instanceof Sl ) ) return new Sl( e, t );
    this.options = t = t ? z( t ) : {}, z( yl, t, !1 ), hi( t );
    var n = t.value;
    "string" == typeof n && ( n = new To( n, t.mode, null, t.lineSeparator, t.direction ) ), this.doc = n;
    var i = new Sl.inputStyles[ t.inputStyle ]( this ),
      o = this.display = new se( e, n, i );
    for ( var u in o.wrapper.CodeMirror = this, ci( this ), vl( this ), t.lineWrapping && ( this.display.wrapper.className += " CodeMirror-wrap" ), Rn( this ), this.state = {
          keyMaps: [],
          overlays: [],
          modeGen: 0,
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          pasteIncoming: !1,
          cutIncoming: !1,
          selectingText: !1,
          draggingText: !1,
          highlight: new R,
          keySeq: null,
          specialChars: null
        }, t.autofocus && !m && o.input.focus(), l && s < 11 && setTimeout( function () {
          return r.display.input.reset( !0 )
        }, 20 ),
        function ( e ) {
          var t = e.display;
          et( t.scroller, "mousedown", _n( e, hl ) ), et( t.scroller, "dblclick", l && s < 11 ? _n( e, function ( t ) {
            if ( !it( e, t ) ) {
              var r = sn( e, t );
              if ( r && !pl( e, t ) && !xr( e.display, t ) ) {
                at( t );
                var n = e.findWordAt( r );
                Vi( e.doc, n.anchor, n.head )
              }
            }
          } ) : function ( t ) {
            return it( e, t ) || at( t )
          } );
          S || et( t.scroller, "contextmenu", function ( t ) {
            return gl( e, t )
          } );
          var r, n = {
            end: 0
          };

          function i() {
            t.activeTouch && ( r = setTimeout( function () {
              return t.activeTouch = null
            }, 1e3 ), ( n = t.activeTouch ).end = +new Date )
          }

          function o( e, t ) {
            if ( null == t.left ) return !0;
            var r = t.left - e.left,
              n = t.top - e.top;
            return r * r + n * n > 400
          }
          et( t.scroller, "touchstart", function ( i ) {
            if ( !it( e, i ) && ! function ( e ) {
                if ( 1 != e.touches.length ) return !1;
                var t = e.touches[ 0 ];
                return t.radiusX <= 1 && t.radiusY <= 1
              }( i ) && !pl( e, i ) ) {
              t.input.ensurePolled(), clearTimeout( r );
              var o = +new Date;
              t.activeTouch = {
                start: o,
                moved: !1,
                prev: o - n.end <= 300 ? n : null
              }, 1 == i.touches.length && ( t.activeTouch.left = i.touches[ 0 ].pageX, t.activeTouch.top = i.touches[ 0 ].pageY )
            }
          } ), et( t.scroller, "touchmove", function () {
            t.activeTouch && ( t.activeTouch.moved = !0 )
          } ), et( t.scroller, "touchend", function ( r ) {
            var n = t.activeTouch;
            if ( n && !xr( t, r ) && null != n.left && !n.moved && new Date - n.start < 300 ) {
              var l, s = e.coordsChar( t.activeTouch, "page" );
              l = !n.prev || o( n, n.prev ) ? new yi( s, s ) : !n.prev.prev || o( n, n.prev.prev ) ? e.findWordAt( s ) : new yi( ve( s.line, 0 ), Se( e.doc, ve( s.line + 1, 0 ) ) ), e.setSelection( l.anchor, l.head ), e.focus(), at( r )
            }
            i()
          } ), et( t.scroller, "touchcancel", i ), et( t.scroller, "scroll", function () {
            t.scroller.clientHeight && ( An( e, t.scroller.scrollTop ), Dn( e, t.scroller.scrollLeft, !0 ), nt( e, "scroll", e ) )
          } ), et( t.scroller, "mousewheel", function ( t ) {
            return vi( e, t )
          } ), et( t.scroller, "DOMMouseScroll", function ( t ) {
            return vi( e, t )
          } ), et( t.wrapper, "scroll", function () {
            return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0
          } ), t.dragFunctions = {
            enter: function ( t ) {
              it( e, t ) || ht( t )
            },
            over: function ( t ) {
              it( e, t ) || ( ! function ( e, t ) {
                var r = sn( e, t );
                if ( r ) {
                  var n = document.createDocumentFragment();
                  hn( e, r, n ), e.display.dragCursor || ( e.display.dragCursor = O( "div", null, "CodeMirror-cursors CodeMirror-dragcursors" ), e.display.lineSpace.insertBefore( e.display.dragCursor, e.display.cursorDiv ) ), N( e.display.dragCursor, n )
                }
              }( e, t ), ht( t ) )
            },
            start: function ( t ) {
              return function ( e, t ) {
                if ( l && ( !e.state.draggingText || +new Date - Mo < 100 ) ) ht( t );
                else if ( !it( e, t ) && !xr( e.display, t ) && ( t.dataTransfer.setData( "Text", e.getSelection() ), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !f ) ) {
                  var r = O( "img", null, null, "position: fixed; left: 0; top: 0;" );
                  r.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", h && ( r.width = r.height = 1, e.display.wrapper.appendChild( r ), r._top = r.offsetTop ), t.dataTransfer.setDragImage( r, 0, 0 ), h && r.parentNode.removeChild( r )
                }
              }( e, t )
            },
            drop: _n( e, No ),
            leave: function ( t ) {
              it( e, t ) || Oo( e )
            }
          };
          var a = t.input.getField();
          et( a, "keyup", function ( t ) {
            return ll.call( e, t )
          } ), et( a, "keydown", _n( e, ol ) ), et( a, "keypress", _n( e, sl ) ), et( a, "focus", function ( t ) {
            return mn( e, t )
          } ), et( a, "blur", function ( t ) {
            return yn( e, t )
          } )
        }( this ), Do(), Gn( this ), this.curOp.forceUpdate = !0, Ai( this, n ), t.autofocus && !m || this.hasFocus() ? setTimeout( E( mn, this ), 20 ) : yn( this ), bl ) bl.hasOwnProperty( u ) && bl[ u ]( r, t[ u ], ml );
    Sn( this ), t.finishInit && t.finishInit( this );
    for ( var c = 0; c < Ll.length; ++c ) Ll[ c ]( r );
    Un( this ), a && t.lineWrapping && "optimizelegibility" == getComputedStyle( o.lineDiv ).textRendering && ( o.lineDiv.style.textRendering = "auto" )
  }
  Sl.defaults = yl, Sl.optionHandlers = bl;
  var Ll = [];

  function kl( e, t, r, n ) {
    var i, o = e.doc;
    null == r && ( r = "add" ), "smart" == r && ( o.mode.indent ? i = It( e, t ).state : r = "prev" );
    var l = e.options.tabSize,
      s = ae( o, t ),
      a = I( s.text, null, l );
    s.stateAfter && ( s.stateAfter = null );
    var u, c = s.text.match( /^\s*/ )[ 0 ];
    if ( n || /\S/.test( s.text ) ) {
      if ( "smart" == r && ( ( u = o.mode.indent( i, s.text.slice( c.length ), s.text ) ) == U || u > 150 ) ) {
        if ( !n ) return;
        r = "prev"
      }
    } else u = 0, r = "not";
    "prev" == r ? u = t > o.first ? I( ae( o, t - 1 ).text, null, l ) : 0 : "add" == r ? u = a + e.options.indentUnit : "subtract" == r ? u = a - e.options.indentUnit : "number" == typeof r && ( u = a + r ), u = Math.max( 0, u );
    var h = "",
      f = 0;
    if ( e.options.indentWithTabs )
      for ( var d = Math.floor( u / l ); d; --d ) f += l, h += "\t";
    if ( f < u && ( h += _( u - f ) ), h != c ) return uo( o, h, ve( t, 0 ), ve( t, c.length ), "+input" ), s.stateAfter = null, !0;
    for ( var p = 0; p < o.sel.ranges.length; p++ ) {
      var g = o.sel.ranges[ p ];
      if ( g.head.line == t && g.head.ch < c.length ) {
        var v = ve( t, c.length );
        ji( o, p, new yi( v, v ) );
        break
      }
    }
  }
  Sl.defineInitHook = function ( e ) {
    return Ll.push( e )
  };
  var Tl = null;

  function Ml( e ) {
    Tl = e
  }

  function Nl( e, t, r, n, i ) {
    var o = e.doc;
    e.display.shift = !1, n || ( n = o.sel );
    var l, s = e.state.pasteIncoming || "paste" == i,
      a = wt( t ),
      u = null;
    if ( s && n.ranges.length > 1 )
      if ( Tl && Tl.text.join( "\n" ) == t ) {
        if ( n.ranges.length % Tl.text.length == 0 ) {
          u = [];
          for ( var c = 0; c < Tl.text.length; c++ ) u.push( o.splitLines( Tl.text[ c ] ) )
        }
      } else a.length == n.ranges.length && e.options.pasteLinesPerSelection && ( u = $( a, function ( e ) {
        return [ e ]
      } ) );
    for ( var h = n.ranges.length - 1; h >= 0; h-- ) {
      var f = n.ranges[ h ],
        d = f.from(),
        p = f.to();
      f.empty() && ( r && r > 0 ? d = ve( d.line, d.ch - r ) : e.state.overwrite && !s ? p = ve( p.line, Math.min( ae( o, p.line ).text.length, p.ch + q( a ).length ) ) : Tl && Tl.lineWise && Tl.text.join( "\n" ) == t && ( d = p = ve( d.line, 0 ) ) ), l = e.curOp.updateInput;
      var g = {
        from: d,
        to: p,
        text: u ? u[ h % u.length ] : a,
        origin: i || ( s ? "paste" : e.state.cutIncoming ? "cut" : "+input" )
      };
      io( e.doc, g ), sr( e, "inputRead", e, g )
    }
    t && !s && Al( e, t ), Tn( e ), e.curOp.updateInput = l, e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = !1
  }

  function Ol( e, t ) {
    var r = e.clipboardData && e.clipboardData.getData( "Text" );
    if ( r ) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || Yn( t, function () {
      return Nl( t, r, 0, null, "paste" )
    } ), !0
  }

  function Al( e, t ) {
    if ( e.options.electricChars && e.options.smartIndent )
      for ( var r = e.doc.sel, n = r.ranges.length - 1; n >= 0; n-- ) {
        var i = r.ranges[ n ];
        if ( !( i.head.ch > 100 || n && r.ranges[ n - 1 ].head.line == i.head.line ) ) {
          var o = e.getModeAt( i.head ),
            l = !1;
          if ( o.electricChars ) {
            for ( var s = 0; s < o.electricChars.length; s++ )
              if ( t.indexOf( o.electricChars.charAt( s ) ) > -1 ) {
                l = kl( e, i.head.line, "smart" );
                break
              }
          } else o.electricInput && o.electricInput.test( ae( e.doc, i.head.line ).text.slice( 0, i.head.ch ) ) && ( l = kl( e, i.head.line, "smart" ) );
          l && sr( e, "electricInput", e, i.head.line )
        }
      }
  }

  function Wl( e ) {
    for ( var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++ ) {
      var i = e.doc.sel.ranges[ n ].head.line,
        o = {
          anchor: ve( i, 0 ),
          head: ve( i + 1, 0 )
        };
      r.push( o ), t.push( e.getRange( o.anchor, o.head ) )
    }
    return {
      text: t,
      ranges: r
    }
  }

  function Dl( e, t ) {
    e.setAttribute( "autocorrect", "off" ), e.setAttribute( "autocapitalize", "off" ), e.setAttribute( "spellcheck", !!t )
  }

  function Hl() {
    var e = O( "textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none" ),
      t = O( "div", [ e ], null, "overflow: hidden; position: relative; width: 3px; height: 0px;" );
    return a ? e.style.width = "1000px" : e.setAttribute( "wrap", "off" ), g && ( e.style.border = "1px solid black" ), Dl( e ), t
  }

  function Fl( e, t, r, n, i ) {
    var o = t,
      l = r,
      s = ae( e, t.line );

    function a( n ) {
      var o, l;
      if ( null == ( o = i ? function ( e, t, r, n ) {
          var i = Qe( t, e.doc.direction );
          if ( !i ) return _o( t, r, n );
          r.ch >= t.text.length ? ( r.ch = t.text.length, r.sticky = "before" ) : r.ch <= 0 && ( r.ch = 0, r.sticky = "after" );
          var o = $e( i, r.ch, r.sticky ),
            l = i[ o ];
          if ( "ltr" == e.doc.direction && l.level % 2 == 0 && ( n > 0 ? l.to > r.ch : l.from < r.ch ) ) return _o( t, r, n );
          var s, a = function ( e, r ) {
              return Yo( t, e instanceof ve ? e.ch : e, r )
            },
            u = function ( r ) {
              return e.options.lineWrapping ? ( s = s || Wr( e, t ), Zr( e, t, s, r ) ) : {
                begin: 0,
                end: t.text.length
              }
            },
            c = u( "before" == r.sticky ? a( r, -1 ) : r.ch );
          if ( "rtl" == e.doc.direction || 1 == l.level ) {
            var h = 1 == l.level == n < 0,
              f = a( r, h ? 1 : -1 );
            if ( null != f && ( h ? f <= l.to && f <= c.end : f >= l.from && f >= c.begin ) ) {
              var d = h ? "before" : "after";
              return new ve( r.line, f, d )
            }
          }
          var p = function ( e, t, n ) {
              for ( var o = function ( e, t ) {
                  return t ? new ve( r.line, a( e, 1 ), "before" ) : new ve( r.line, e, "after" )
                }; e >= 0 && e < i.length; e += t ) {
                var l = i[ e ],
                  s = t > 0 == ( 1 != l.level ),
                  u = s ? n.begin : a( n.end, -1 );
                if ( l.from <= u && u < l.to ) return o( u, s );
                if ( u = s ? l.from : a( l.to, -1 ), n.begin <= u && u < n.end ) return o( u, s )
              }
            },
            g = p( o + n, n, c );
          if ( g ) return g;
          var v = n > 0 ? c.end : a( c.begin, -1 );
          return null == v || n > 0 && v == t.text.length || !( g = p( n > 0 ? 0 : i.length - 1, n, u( v ) ) ) ? null : g
        }( e.cm, s, t, r ) : _o( s, t, r ) ) ) {
        if ( n || ( l = t.line + r ) < e.first || l >= e.first + e.size || ( t = new ve( l, t.ch, t.sticky ), !( s = ae( e, l ) ) ) ) return !1;
        t = qo( i, e.cm, s, t.line, r )
      } else t = o;
      return !0
    }
    if ( "char" == n ) a();
    else if ( "column" == n ) a( !0 );
    else if ( "word" == n || "group" == n )
      for ( var u = null, c = "group" == n, h = e.cm && e.cm.getHelper( t, "wordChars" ), f = !0; !( r < 0 ) || a( !f ); f = !1 ) {
        var d = s.text.charAt( t.ch ) || "\n",
          p = te( d, h ) ? "w" : c && "\n" == d ? "n" : !c || /\s/.test( d ) ? null : "p";
        if ( !c || f || p || ( p = "s" ), u && u != p ) {
          r < 0 && ( r = 1, a(), t.sticky = "after" );
          break
        }
        if ( p && ( u = p ), r > 0 && !a( !f ) ) break
      }
    var g = eo( e, t, o, l, !0 );
    return ye( o, g ) && ( g.hitSide = !0 ), g
  }

  function Pl( e, t, r, n ) {
    var i, o, l = e.doc,
      s = t.left;
    if ( "page" == n ) {
      var a = Math.min( e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight ),
        u = Math.max( a - .5 * en( e.display ), 3 );
      i = ( r > 0 ? t.bottom : t.top ) + r * u
    } else "line" == n && ( i = r > 0 ? t.bottom + 3 : t.top - 3 );
    for ( ;
      ( o = qr( e, s, i ) ).outside; ) {
      if ( r < 0 ? i <= 0 : i >= l.height ) {
        o.hitSide = !0;
        break
      }
      i += 5 * r
    }
    return o
  }
  var El = function ( e ) {
    this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new R, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null
  };

  function zl( e, t ) {
    var r = Ar( e, t.line );
    if ( !r || r.hidden ) return null;
    var n = ae( e.doc, t.line ),
      i = Nr( r, n, t.line ),
      o = Qe( n, e.doc.direction ),
      l = "left";
    o && ( l = $e( o, t.ch ) % 2 ? "right" : "left" );
    var s = Pr( i.map, t.ch, l );
    return s.offset = "right" == s.collapse ? s.end : s.start, s
  }

  function Il( e, t ) {
    return t && ( e.bad = !0 ), e
  }

  function Rl( e, t, r ) {
    var n;
    if ( t == e.display.lineDiv ) {
      if ( !( n = e.display.lineDiv.childNodes[ r ] ) ) return Il( e.clipPos( ve( e.display.viewTo - 1 ) ), !0 );
      t = null, r = 0
    } else
      for ( n = t;; n = n.parentNode ) {
        if ( !n || n == e.display.lineDiv ) return null;
        if ( n.parentNode && n.parentNode == e.display.lineDiv ) break
      }
    for ( var i = 0; i < e.display.view.length; i++ ) {
      var o = e.display.view[ i ];
      if ( o.node == n ) return Bl( o, t, r )
    }
  }

  function Bl( e, t, r ) {
    var n = e.text.firstChild,
      i = !1;
    if ( !t || !W( n, t ) ) return Il( ve( fe( e.line ), 0 ), !0 );
    if ( t == n && ( i = !0, t = n.childNodes[ r ], r = 0, !t ) ) {
      var o = e.rest ? q( e.rest ) : e.line;
      return Il( ve( fe( o ), o.text.length ), i )
    }
    var l = 3 == t.nodeType ? t : null,
      s = t;
    for ( l || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || ( l = t.firstChild, r && ( r = l.nodeValue.length ) ); s.parentNode != n; ) s = s.parentNode;
    var a = e.measure,
      u = a.maps;

    function c( t, r, n ) {
      for ( var i = -1; i < ( u ? u.length : 0 ); i++ )
        for ( var o = i < 0 ? a.map : u[ i ], l = 0; l < o.length; l += 3 ) {
          var s = o[ l + 2 ];
          if ( s == t || s == r ) {
            var c = fe( i < 0 ? e.line : e.rest[ i ] ),
              h = o[ l ] + n;
            return ( n < 0 || s != t ) && ( h = o[ l + ( n ? 1 : 0 ) ] ), ve( c, h )
          }
        }
    }
    var h = c( l, s, r );
    if ( h ) return Il( h, i );
    for ( var f = s.nextSibling, d = l ? l.nodeValue.length - r : 0; f; f = f.nextSibling ) {
      if ( h = c( f, f.firstChild, 0 ) ) return Il( ve( h.line, h.ch - d ), i );
      d += f.textContent.length
    }
    for ( var p = s.previousSibling, g = r; p; p = p.previousSibling ) {
      if ( h = c( p, p.firstChild, -1 ) ) return Il( ve( h.line, h.ch + g ), i );
      g += p.textContent.length
    }
  }
  El.prototype.init = function ( e ) {
    var t = this,
      r = this,
      n = r.cm,
      i = r.div = e.lineDiv;

    function o( e ) {
      if ( !it( n, e ) ) {
        if ( n.somethingSelected() ) Ml( {
          lineWise: !1,
          text: n.getSelections()
        } ), "cut" == e.type && n.replaceSelection( "", null, "cut" );
        else {
          if ( !n.options.lineWiseCopyCut ) return;
          var t = Wl( n );
          Ml( {
            lineWise: !0,
            text: t.text
          } ), "cut" == e.type && n.operation( function () {
            n.setSelections( t.ranges, 0, V ), n.replaceSelection( "", null, "cut" )
          } )
        }
        if ( e.clipboardData ) {
          e.clipboardData.clearData();
          var o = Tl.text.join( "\n" );
          if ( e.clipboardData.setData( "Text", o ), e.clipboardData.getData( "Text" ) == o ) return void e.preventDefault()
        }
        var l = Hl(),
          s = l.firstChild;
        n.display.lineSpace.insertBefore( l, n.display.lineSpace.firstChild ), s.value = Tl.text.join( "\n" );
        var a = document.activeElement;
        P( s ), setTimeout( function () {
          n.display.lineSpace.removeChild( l ), a.focus(), a == i && r.showPrimarySelection()
        }, 50 )
      }
    }
    Dl( i, n.options.spellcheck ), et( i, "paste", function ( e ) {
      it( n, e ) || Ol( e, n ) || s <= 11 && setTimeout( _n( n, function () {
        return t.updateFromDOM()
      } ), 20 )
    } ), et( i, "compositionstart", function ( e ) {
      t.composing = {
        data: e.data,
        done: !1
      }
    } ), et( i, "compositionupdate", function ( e ) {
      t.composing || ( t.composing = {
        data: e.data,
        done: !1
      } )
    } ), et( i, "compositionend", function ( e ) {
      t.composing && ( e.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0 )
    } ), et( i, "touchstart", function () {
      return r.forceCompositionEnd()
    } ), et( i, "input", function () {
      t.composing || t.readFromDOMSoon()
    } ), et( i, "copy", o ), et( i, "cut", o )
  }, El.prototype.prepareSelection = function () {
    var e = cn( this.cm, !1 );
    return e.focus = this.cm.state.focused, e
  }, El.prototype.showSelection = function ( e, t ) {
    e && this.cm.display.view.length && ( ( e.focus || t ) && this.showPrimarySelection(), this.showMultipleSelections( e ) )
  }, El.prototype.showPrimarySelection = function () {
    var e = window.getSelection(),
      t = this.cm,
      n = t.doc.sel.primary(),
      i = n.from(),
      o = n.to();
    if ( t.display.viewTo == t.display.viewFrom || i.line >= t.display.viewTo || o.line < t.display.viewFrom ) e.removeAllRanges();
    else {
      var l = Rl( t, e.anchorNode, e.anchorOffset ),
        s = Rl( t, e.focusNode, e.focusOffset );
      if ( !l || l.bad || !s || s.bad || 0 != me( xe( l, s ), i ) || 0 != me( we( l, s ), o ) ) {
        var a = t.display.view,
          u = i.line >= t.display.viewFrom && zl( t, i ) || {
            node: a[ 0 ].measure.map[ 2 ],
            offset: 0
          },
          c = o.line < t.display.viewTo && zl( t, o );
        if ( !c ) {
          var h = a[ a.length - 1 ].measure,
            f = h.maps ? h.maps[ h.maps.length - 1 ] : h.map;
          c = {
            node: f[ f.length - 1 ],
            offset: f[ f.length - 2 ] - f[ f.length - 3 ]
          }
        }
        if ( u && c ) {
          var d, p = e.rangeCount && e.getRangeAt( 0 );
          try {
            d = k( u.node, u.offset, c.offset, c.node )
          } catch ( e ) {}
          d && ( !r && t.state.focused ? ( e.collapse( u.node, u.offset ), d.collapsed || ( e.removeAllRanges(), e.addRange( d ) ) ) : ( e.removeAllRanges(), e.addRange( d ) ), p && null == e.anchorNode ? e.addRange( p ) : r && this.startGracePeriod() ), this.rememberSelection()
        } else e.removeAllRanges()
      }
    }
  }, El.prototype.startGracePeriod = function () {
    var e = this;
    clearTimeout( this.gracePeriod ), this.gracePeriod = setTimeout( function () {
      e.gracePeriod = !1, e.selectionChanged() && e.cm.operation( function () {
        return e.cm.curOp.selectionChanged = !0
      } )
    }, 20 )
  }, El.prototype.showMultipleSelections = function ( e ) {
    N( this.cm.display.cursorDiv, e.cursors ), N( this.cm.display.selectionDiv, e.selection )
  }, El.prototype.rememberSelection = function () {
    var e = window.getSelection();
    this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
  }, El.prototype.selectionInEditor = function () {
    var e = window.getSelection();
    if ( !e.rangeCount ) return !1;
    var t = e.getRangeAt( 0 ).commonAncestorContainer;
    return W( this.div, t )
  }, El.prototype.focus = function () {
    "nocursor" != this.cm.options.readOnly && ( this.selectionInEditor() || this.showSelection( this.prepareSelection(), !0 ), this.div.focus() )
  }, El.prototype.blur = function () {
    this.div.blur()
  }, El.prototype.getField = function () {
    return this.div
  }, El.prototype.supportsTouch = function () {
    return !0
  }, El.prototype.receivedFocus = function () {
    var e = this;
    this.selectionInEditor() ? this.pollSelection() : Yn( this.cm, function () {
      return e.cm.curOp.selectionChanged = !0
    } ), this.polling.set( this.cm.options.pollInterval, function t() {
      e.cm.state.focused && ( e.pollSelection(), e.polling.set( e.cm.options.pollInterval, t ) )
    } )
  }, El.prototype.selectionChanged = function () {
    var e = window.getSelection();
    return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
  }, El.prototype.pollSelection = function () {
    if ( null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged() ) {
      var e = window.getSelection(),
        t = this.cm;
      if ( v && c && this.cm.options.gutters.length && function ( e ) {
          for ( var t = e; t; t = t.parentNode )
            if ( /CodeMirror-gutter-wrapper/.test( t.className ) ) return !0;
          return !1
        }( e.anchorNode ) ) return this.cm.triggerOnKeyDown( {
        type: "keydown",
        keyCode: 8,
        preventDefault: Math.abs
      } ), this.blur(), void this.focus();
      if ( !this.composing ) {
        this.rememberSelection();
        var r = Rl( t, e.anchorNode, e.anchorOffset ),
          n = Rl( t, e.focusNode, e.focusOffset );
        r && n && Yn( t, function () {
          _i( t.doc, wi( r, n ), V ), ( r.bad || n.bad ) && ( t.curOp.selectionChanged = !0 )
        } )
      }
    }
  }, El.prototype.pollContent = function () {
    null != this.readDOMTimeout && ( clearTimeout( this.readDOMTimeout ), this.readDOMTimeout = null );
    var e, t, r, n = this.cm,
      i = n.display,
      o = n.doc.sel.primary(),
      l = o.from(),
      s = o.to();
    if ( 0 == l.ch && l.line > n.firstLine() && ( l = ve( l.line - 1, ae( n.doc, l.line - 1 ).length ) ), s.ch == ae( n.doc, s.line ).text.length && s.line < n.lastLine() && ( s = ve( s.line + 1, 0 ) ), l.line < i.viewFrom || s.line > i.viewTo - 1 ) return !1;
    l.line == i.viewFrom || 0 == ( e = an( n, l.line ) ) ? ( t = fe( i.view[ 0 ].line ), r = i.view[ 0 ].node ) : ( t = fe( i.view[ e ].line ), r = i.view[ e - 1 ].node.nextSibling );
    var a, u, c = an( n, s.line );
    if ( c == i.view.length - 1 ? ( a = i.viewTo - 1, u = i.lineDiv.lastChild ) : ( a = fe( i.view[ c + 1 ].line ) - 1, u = i.view[ c + 1 ].node.previousSibling ), !r ) return !1;
    for ( var h = n.doc.splitLines( function ( e, t, r, n, i ) {
        var o = "",
          l = !1,
          s = e.doc.lineSeparator();

        function a() {
          l && ( o += s, l = !1 )
        }

        function u( e ) {
          e && ( a(), o += e )
        }

        function c( t ) {
          if ( 1 == t.nodeType ) {
            var r = t.getAttribute( "cm-text" );
            if ( null != r ) return void u( r || t.textContent.replace( /\u200b/g, "" ) );
            var o, h = t.getAttribute( "cm-marker" );
            if ( h ) {
              var f = e.findMarks( ve( n, 0 ), ve( i + 1, 0 ), ( g = +h, function ( e ) {
                return e.id == g
              } ) );
              return void( f.length && ( o = f[ 0 ].find( 0 ) ) && u( ue( e.doc, o.from, o.to ).join( s ) ) )
            }
            if ( "false" == t.getAttribute( "contenteditable" ) ) return;
            var d = /^(pre|div|p)$/i.test( t.nodeName );
            d && a();
            for ( var p = 0; p < t.childNodes.length; p++ ) c( t.childNodes[ p ] );
            d && ( l = !0 )
          } else 3 == t.nodeType && u( t.nodeValue );
          var g
        }
        for ( ; c( t ), t != r; ) t = t.nextSibling;
        return o
      }( n, r, u, t, a ) ), f = ue( n.doc, ve( t, 0 ), ve( a, ae( n.doc, a ).text.length ) ); h.length > 1 && f.length > 1; )
      if ( q( h ) == q( f ) ) h.pop(), f.pop(), a--;
      else {
        if ( h[ 0 ] != f[ 0 ] ) break;
        h.shift(), f.shift(), t++
      } for ( var d = 0, p = 0, g = h[ 0 ], v = f[ 0 ], m = Math.min( g.length, v.length ); d < m && g.charCodeAt( d ) == v.charCodeAt( d ); ) ++d;
    for ( var y = q( h ), b = q( f ), w = Math.min( y.length - ( 1 == h.length ? d : 0 ), b.length - ( 1 == f.length ? d : 0 ) ); p < w && y.charCodeAt( y.length - p - 1 ) == b.charCodeAt( b.length - p - 1 ); ) ++p;
    if ( 1 == h.length && 1 == f.length && t == l.line )
      for ( ; d && d > l.ch && y.charCodeAt( y.length - p - 1 ) == b.charCodeAt( b.length - p - 1 ); ) d--, p++;
    h[ h.length - 1 ] = y.slice( 0, y.length - p ).replace( /^\u200b+/, "" ), h[ 0 ] = h[ 0 ].slice( d ).replace( /\u200b+$/, "" );
    var x = ve( t, d ),
      C = ve( a, f.length ? q( f ).length - p : 0 );
    return h.length > 1 || h[ 0 ] || me( x, C ) ? ( uo( n.doc, h, x, C, "+input" ), !0 ) : void 0
  }, El.prototype.ensurePolled = function () {
    this.forceCompositionEnd()
  }, El.prototype.reset = function () {
    this.forceCompositionEnd()
  }, El.prototype.forceCompositionEnd = function () {
    this.composing && ( clearTimeout( this.readDOMTimeout ), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus() )
  }, El.prototype.readFromDOMSoon = function () {
    var e = this;
    null == this.readDOMTimeout && ( this.readDOMTimeout = setTimeout( function () {
      if ( e.readDOMTimeout = null, e.composing ) {
        if ( !e.composing.done ) return;
        e.composing = null
      }
      e.updateFromDOM()
    }, 80 ) )
  }, El.prototype.updateFromDOM = function () {
    var e = this;
    !this.cm.isReadOnly() && this.pollContent() || Yn( this.cm, function () {
      return Zn( e.cm )
    } )
  }, El.prototype.setUneditable = function ( e ) {
    e.contentEditable = "false"
  }, El.prototype.onKeyPress = function ( e ) {
    0 != e.charCode && ( e.preventDefault(), this.cm.isReadOnly() || _n( this.cm, Nl )( this.cm, String.fromCharCode( null == e.charCode ? e.keyCode : e.charCode ), 0 ) )
  }, El.prototype.readOnlyChanged = function ( e ) {
    this.div.contentEditable = String( "nocursor" != e )
  }, El.prototype.onContextMenu = function () {}, El.prototype.resetPosition = function () {}, El.prototype.needsContentAttribute = !0;
  var Gl = function ( e ) {
    this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new R, this.hasSelection = !1, this.composing = null
  };
  Gl.prototype.init = function ( e ) {
      var t = this,
        r = this,
        n = this.cm;
      this.createField( e );
      var i = this.textarea;

      function o( e ) {
        if ( !it( n, e ) ) {
          if ( n.somethingSelected() ) Ml( {
            lineWise: !1,
            text: n.getSelections()
          } );
          else {
            if ( !n.options.lineWiseCopyCut ) return;
            var t = Wl( n );
            Ml( {
              lineWise: !0,
              text: t.text
            } ), "cut" == e.type ? n.setSelections( t.ranges, null, V ) : ( r.prevInput = "", i.value = t.text.join( "\n" ), P( i ) )
          }
          "cut" == e.type && ( n.state.cutIncoming = !0 )
        }
      }
      e.wrapper.insertBefore( this.wrapper, e.wrapper.firstChild ), g && ( i.style.width = "0px" ), et( i, "input", function () {
        l && s >= 9 && t.hasSelection && ( t.hasSelection = null ), r.poll()
      } ), et( i, "paste", function ( e ) {
        it( n, e ) || Ol( e, n ) || ( n.state.pasteIncoming = !0, r.fastPoll() )
      } ), et( i, "cut", o ), et( i, "copy", o ), et( e.scroller, "paste", function ( t ) {
        xr( e, t ) || it( n, t ) || ( n.state.pasteIncoming = !0, r.focus() )
      } ), et( e.lineSpace, "selectstart", function ( t ) {
        xr( e, t ) || at( t )
      } ), et( i, "compositionstart", function () {
        var e = n.getCursor( "from" );
        r.composing && r.composing.range.clear(), r.composing = {
          start: e,
          range: n.markText( e, n.getCursor( "to" ), {
            className: "CodeMirror-composing"
          } )
        }
      } ), et( i, "compositionend", function () {
        r.composing && ( r.poll(), r.composing.range.clear(), r.composing = null )
      } )
    }, Gl.prototype.createField = function ( e ) {
      this.wrapper = Hl(), this.textarea = this.wrapper.firstChild
    }, Gl.prototype.prepareSelection = function () {
      var e = this.cm,
        t = e.display,
        r = e.doc,
        n = cn( e );
      if ( e.options.moveInputWithCursor ) {
        var i = Xr( e, r.sel.primary().head, "div" ),
          o = t.wrapper.getBoundingClientRect(),
          l = t.lineDiv.getBoundingClientRect();
        n.teTop = Math.max( 0, Math.min( t.wrapper.clientHeight - 10, i.top + l.top - o.top ) ), n.teLeft = Math.max( 0, Math.min( t.wrapper.clientWidth - 10, i.left + l.left - o.left ) )
      }
      return n
    }, Gl.prototype.showSelection = function ( e ) {
      var t = this.cm.display;
      N( t.cursorDiv, e.cursors ), N( t.selectionDiv, e.selection ), null != e.teTop && ( this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px" )
    }, Gl.prototype.reset = function ( e ) {
      if ( !this.contextMenuPending && !this.composing ) {
        var t = this.cm;
        if ( t.somethingSelected() ) {
          this.prevInput = "";
          var r = t.getSelection();
          this.textarea.value = r, t.state.focused && P( this.textarea ), l && s >= 9 && ( this.hasSelection = r )
        } else e || ( this.prevInput = this.textarea.value = "", l && s >= 9 && ( this.hasSelection = null ) )
      }
    }, Gl.prototype.getField = function () {
      return this.textarea
    }, Gl.prototype.supportsTouch = function () {
      return !1
    }, Gl.prototype.focus = function () {
      if ( "nocursor" != this.cm.options.readOnly && ( !m || D() != this.textarea ) ) try {
        this.textarea.focus()
      } catch ( e ) {}
    }, Gl.prototype.blur = function () {
      this.textarea.blur()
    }, Gl.prototype.resetPosition = function () {
      this.wrapper.style.top = this.wrapper.style.left = 0
    }, Gl.prototype.receivedFocus = function () {
      this.slowPoll()
    }, Gl.prototype.slowPoll = function () {
      var e = this;
      this.pollingFast || this.polling.set( this.cm.options.pollInterval, function () {
        e.poll(), e.cm.state.focused && e.slowPoll()
      } )
    }, Gl.prototype.fastPoll = function () {
      var e = !1,
        t = this;
      t.pollingFast = !0, t.polling.set( 20, function r() {
        t.poll() || e ? ( t.pollingFast = !1, t.slowPoll() ) : ( e = !0, t.polling.set( 60, r ) )
      } )
    }, Gl.prototype.poll = function () {
      var e = this,
        t = this.cm,
        r = this.textarea,
        n = this.prevInput;
      if ( this.contextMenuPending || !t.state.focused || xt( r ) && !n && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq ) return !1;
      var i = r.value;
      if ( i == n && !t.somethingSelected() ) return !1;
      if ( l && s >= 9 && this.hasSelection === i || y && /[\uf700-\uf7ff]/.test( i ) ) return t.display.input.reset(), !1;
      if ( t.doc.sel == t.display.selForContextMenu ) {
        var o = i.charCodeAt( 0 );
        if ( 8203 != o || n || ( n = "​" ), 8666 == o ) return this.reset(), this.cm.execCommand( "undo" )
      }
      for ( var a = 0, u = Math.min( n.length, i.length ); a < u && n.charCodeAt( a ) == i.charCodeAt( a ); ) ++a;
      return Yn( t, function () {
        Nl( t, i.slice( a ), n.length - a, null, e.composing ? "*compose" : null ), i.length > 1e3 || i.indexOf( "\n" ) > -1 ? r.value = e.prevInput = "" : e.prevInput = i, e.composing && ( e.composing.range.clear(), e.composing.range = t.markText( e.composing.start, t.getCursor( "to" ), {
          className: "CodeMirror-composing"
        } ) )
      } ), !0
    }, Gl.prototype.ensurePolled = function () {
      this.pollingFast && this.poll() && ( this.pollingFast = !1 )
    }, Gl.prototype.onKeyPress = function () {
      l && s >= 9 && ( this.hasSelection = null ), this.fastPoll()
    }, Gl.prototype.onContextMenu = function ( e ) {
      var t = this,
        r = t.cm,
        n = r.display,
        i = t.textarea,
        o = sn( r, e ),
        u = n.scroller.scrollTop;
      if ( o && !h ) {
        r.options.resetSelectionOnContextMenu && -1 == r.doc.sel.contains( o ) && _n( r, _i )( r.doc, wi( o ), V );
        var c = i.style.cssText,
          f = t.wrapper.style.cssText;
        t.wrapper.style.cssText = "position: absolute";
        var d, p = t.wrapper.getBoundingClientRect();
        if ( i.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + ( e.clientY - p.top - 5 ) + "px; left: " + ( e.clientX - p.left - 5 ) + "px;\n      z-index: 1000; background: " + ( l ? "rgba(255, 255, 255, .05)" : "transparent" ) + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", a && ( d = window.scrollY ), n.input.focus(), a && window.scrollTo( null, d ), n.input.reset(), r.somethingSelected() || ( i.value = t.prevInput = " " ), t.contextMenuPending = !0, n.selForContextMenu = r.doc.sel, clearTimeout( n.detectingSelectAll ), l && s >= 9 && v(), S ) {
          ht( e );
          var g = function () {
            rt( window, "mouseup", g ), setTimeout( m, 20 )
          };
          et( window, "mouseup", g )
        } else setTimeout( m, 50 )
      }

      function v() {
        if ( null != i.selectionStart ) {
          var e = r.somethingSelected(),
            o = "​" + ( e ? i.value : "" );
          i.value = "⇚", i.value = o, t.prevInput = e ? "" : "​", i.selectionStart = 1, i.selectionEnd = o.length, n.selForContextMenu = r.doc.sel
        }
      }

      function m() {
        if ( t.contextMenuPending = !1, t.wrapper.style.cssText = f, i.style.cssText = c, l && s < 9 && n.scrollbars.setScrollTop( n.scroller.scrollTop = u ), null != i.selectionStart ) {
          ( !l || l && s < 9 ) && v();
          var e = 0,
            o = function () {
              n.selForContextMenu == r.doc.sel && 0 == i.selectionStart && i.selectionEnd > 0 && "​" == t.prevInput ? _n( r, ro )( r ) : e++ < 10 ? n.detectingSelectAll = setTimeout( o, 500 ) : ( n.selForContextMenu = null, n.input.reset() )
            };
          n.detectingSelectAll = setTimeout( o, 200 )
        }
      }
    }, Gl.prototype.readOnlyChanged = function ( e ) {
      e || this.reset(), this.textarea.disabled = "nocursor" == e
    }, Gl.prototype.setUneditable = function () {}, Gl.prototype.needsContentAttribute = !1,
    function ( e ) {
      var t = e.optionHandlers;

      function r( r, n, i, o ) {
        e.defaults[ r ] = n, i && ( t[ r ] = o ? function ( e, t, r ) {
          r != ml && i( e, t, r )
        } : i )
      }
      e.defineOption = r, e.Init = ml, r( "value", "", function ( e, t ) {
        return e.setValue( t )
      }, !0 ), r( "mode", null, function ( e, t ) {
        e.doc.modeOption = t, ki( e )
      }, !0 ), r( "indentUnit", 2, ki, !0 ), r( "indentWithTabs", !1 ), r( "smartIndent", !0 ), r( "tabSize", 4, function ( e ) {
        Ti( e ), Rr( e ), Zn( e )
      }, !0 ), r( "lineSeparator", null, function ( e, t ) {
        if ( e.doc.lineSep = t, t ) {
          var r = [],
            n = e.doc.first;
          e.doc.iter( function ( e ) {
            for ( var i = 0;; ) {
              var o = e.text.indexOf( t, i );
              if ( -1 == o ) break;
              i = o + t.length, r.push( ve( n, o ) )
            }
            n++
          } );
          for ( var i = r.length - 1; i >= 0; i-- ) uo( e.doc, t, r[ i ], ve( r[ i ].line, r[ i ].ch + t.length ) )
        }
      } ), r( "specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function ( e, t, r ) {
        e.state.specialChars = new RegExp( t.source + ( t.test( "\t" ) ? "" : "|\t" ), "g" ), r != ml && e.refresh()
      } ), r( "specialCharPlaceholder", Qt, function ( e ) {
        return e.refresh()
      }, !0 ), r( "electricChars", !0 ), r( "inputStyle", m ? "contenteditable" : "textarea", function () {
        throw new Error( "inputStyle can not (yet) be changed in a running editor" )
      }, !0 ), r( "spellcheck", !1, function ( e, t ) {
        return e.getInputField().spellcheck = t
      }, !0 ), r( "rtlMoveVisually", !w ), r( "wholeLineUpdateBefore", !0 ), r( "theme", "default", function ( e ) {
        vl( e ), wl( e )
      }, !0 ), r( "keyMap", "default", function ( e, t, r ) {
        var n = jo( t ),
          i = r != ml && jo( r );
        i && i.detach && i.detach( e, n ), n.attach && n.attach( e, i || null )
      } ), r( "extraKeys", null ), r( "configureMouse", null ), r( "lineWrapping", !1, Cl, !0 ), r( "gutters", [], function ( e ) {
        hi( e.options ), wl( e )
      }, !0 ), r( "fixedGutter", !0, function ( e, t ) {
        e.display.gutters.style.left = t ? nn( e.display ) + "px" : "0", e.refresh()
      }, !0 ), r( "coverGutterNextToScrollbar", !1, function ( e ) {
        return En( e )
      }, !0 ), r( "scrollbarStyle", "native", function ( e ) {
        Rn( e ), En( e ), e.display.scrollbars.setScrollTop( e.doc.scrollTop ), e.display.scrollbars.setScrollLeft( e.doc.scrollLeft )
      }, !0 ), r( "lineNumbers", !1, function ( e ) {
        hi( e.options ), wl( e )
      }, !0 ), r( "firstLineNumber", 1, wl, !0 ), r( "lineNumberFormatter", function ( e ) {
        return e
      }, wl, !0 ), r( "showCursorWhenSelecting", !1, un, !0 ), r( "resetSelectionOnContextMenu", !0 ), r( "lineWiseCopyCut", !0 ), r( "pasteLinesPerSelection", !0 ), r( "readOnly", !1, function ( e, t ) {
        "nocursor" == t && ( yn( e ), e.display.input.blur() ), e.display.input.readOnlyChanged( t )
      } ), r( "disableInput", !1, function ( e, t ) {
        t || e.display.input.reset()
      }, !0 ), r( "dragDrop", !0, xl ), r( "allowDropFileTypes", null ), r( "cursorBlinkRate", 530 ), r( "cursorScrollMargin", 0 ), r( "cursorHeight", 1, un, !0 ), r( "singleCursorHeightPerLine", !0, un, !0 ), r( "workTime", 100 ), r( "workDelay", 100 ), r( "flattenSpans", !0, Ti, !0 ), r( "addModeClass", !1, Ti, !0 ), r( "pollInterval", 100 ), r( "undoDepth", 200, function ( e, t ) {
        return e.doc.history.undoDepth = t
      } ), r( "historyEventDelay", 1250 ), r( "viewportMargin", 10, function ( e ) {
        return e.refresh()
      }, !0 ), r( "maxHighlightLength", 1e4, Ti, !0 ), r( "moveInputWithCursor", !0, function ( e, t ) {
        t || e.display.input.resetPosition()
      } ), r( "tabindex", null, function ( e, t ) {
        return e.display.input.getField().tabIndex = t || ""
      } ), r( "autofocus", null ), r( "direction", "ltr", function ( e, t ) {
        return e.doc.setDirection( t )
      }, !0 )
    }( Sl ),
    function ( e ) {
      var t = e.optionHandlers,
        r = e.helpers = {};
      e.prototype = {
        constructor: e,
        focus: function () {
          window.focus(), this.display.input.focus()
        },
        setOption: function ( e, r ) {
          var n = this.options,
            i = n[ e ];
          n[ e ] == r && "mode" != e || ( n[ e ] = r, t.hasOwnProperty( e ) && _n( this, t[ e ] )( this, r, i ), nt( this, "optionChange", this, e ) )
        },
        getOption: function ( e ) {
          return this.options[ e ]
        },
        getDoc: function () {
          return this.doc
        },
        addKeyMap: function ( e, t ) {
          this.state.keyMaps[ t ? "push" : "unshift" ]( jo( e ) )
        },
        removeKeyMap: function ( e ) {
          for ( var t = this.state.keyMaps, r = 0; r < t.length; ++r )
            if ( t[ r ] == e || t[ r ].name == e ) return t.splice( r, 1 ), !0
        },
        addOverlay: qn( function ( t, r ) {
          var n = t.token ? t : e.getMode( this.options, t );
          if ( n.startState ) throw new Error( "Overlays may not be stateful." );
          ! function ( e, t, r ) {
            for ( var n = 0, i = r( t ); n < e.length && r( e[ n ] ) <= i; ) n++;
            e.splice( n, 0, t )
          }( this.state.overlays, {
            mode: n,
            modeSpec: t,
            opaque: r && r.opaque,
            priority: r && r.priority || 0
          }, function ( e ) {
            return e.priority
          } ), this.state.modeGen++, Zn( this )
        } ),
        removeOverlay: qn( function ( e ) {
          for ( var t = this.state.overlays, r = 0; r < t.length; ++r ) {
            var n = t[ r ].modeSpec;
            if ( n == e || "string" == typeof e && n.name == e ) return t.splice( r, 1 ), this.state.modeGen++, void Zn( this )
          }
        } ),
        indentLine: qn( function ( e, t, r ) {
          "string" != typeof t && "number" != typeof t && ( t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract" ), pe( this.doc, e ) && kl( this, e, t, r )
        } ),
        indentSelection: qn( function ( e ) {
          for ( var t = this.doc.sel.ranges, r = -1, n = 0; n < t.length; n++ ) {
            var i = t[ n ];
            if ( i.empty() ) i.head.line > r && ( kl( this, i.head.line, e, !0 ), r = i.head.line, n == this.doc.sel.primIndex && Tn( this ) );
            else {
              var o = i.from(),
                l = i.to(),
                s = Math.max( r, o.line );
              r = Math.min( this.lastLine(), l.line - ( l.ch ? 0 : 1 ) ) + 1;
              for ( var a = s; a < r; ++a ) kl( this, a, e );
              var u = this.doc.sel.ranges;
              0 == o.ch && t.length == u.length && u[ n ].from().ch > 0 && ji( this.doc, n, new yi( o, u[ n ].to() ), V )
            }
          }
        } ),
        getTokenAt: function ( e, t ) {
          return Vt( this, e, t )
        },
        getLineTokens: function ( e, t ) {
          return Vt( this, ve( e ), t, !0 )
        },
        getTokenTypeAt: function ( e ) {
          e = Se( this.doc, e );
          var t, r = zt( this, ae( this.doc, e.line ) ),
            n = 0,
            i = ( r.length - 1 ) / 2,
            o = e.ch;
          if ( 0 == o ) t = r[ 2 ];
          else
            for ( ;; ) {
              var l = n + i >> 1;
              if ( ( l ? r[ 2 * l - 1 ] : 0 ) >= o ) i = l;
              else {
                if ( !( r[ 2 * l + 1 ] < o ) ) {
                  t = r[ 2 * l + 2 ];
                  break
                }
                n = l + 1
              }
            }
          var s = t ? t.indexOf( "overlay " ) : -1;
          return s < 0 ? t : 0 == s ? null : t.slice( 0, s - 1 )
        },
        getModeAt: function ( t ) {
          var r = this.doc.mode;
          return r.innerMode ? e.innerMode( r, this.getTokenAt( t ).state ).mode : r
        },
        getHelper: function ( e, t ) {
          return this.getHelpers( e, t )[ 0 ]
        },
        getHelpers: function ( e, t ) {
          var n = [];
          if ( !r.hasOwnProperty( t ) ) return n;
          var i = r[ t ],
            o = this.getModeAt( e );
          if ( "string" == typeof o[ t ] ) i[ o[ t ] ] && n.push( i[ o[ t ] ] );
          else if ( o[ t ] )
            for ( var l = 0; l < o[ t ].length; l++ ) {
              var s = i[ o[ t ][ l ] ];
              s && n.push( s )
            } else o.helperType && i[ o.helperType ] ? n.push( i[ o.helperType ] ) : i[ o.name ] && n.push( i[ o.name ] );
          for ( var a = 0; a < i._global.length; a++ ) {
            var u = i._global[ a ];
            u.pred( o, this ) && -1 == B( n, u.val ) && n.push( u.val )
          }
          return n
        },
        getStateAfter: function ( e, t ) {
          var r = this.doc;
          return It( this, ( e = Ce( r, null == e ? r.first + r.size - 1 : e ) ) + 1, t ).state
        },
        cursorCoords: function ( e, t ) {
          var r = this.doc.sel.primary();
          return Xr( this, null == e ? r.head : "object" == typeof e ? Se( this.doc, e ) : e ? r.from() : r.to(), t || "page" )
        },
        charCoords: function ( e, t ) {
          return jr( this, Se( this.doc, e ), t || "page" )
        },
        coordsChar: function ( e, t ) {
          return qr( this, ( e = Kr( this, e, t || "page" ) ).left, e.top )
        },
        lineAtHeight: function ( e, t ) {
          return e = Kr( this, {
            top: e,
            left: 0
          }, t || "page" ).top, de( this.doc, e + this.display.viewOffset )
        },
        heightAtLine: function ( e, t, r ) {
          var n, i = !1;
          if ( "number" == typeof e ) {
            var o = this.doc.first + this.doc.size - 1;
            e < this.doc.first ? e = this.doc.first : e > o && ( e = o, i = !0 ), n = ae( this.doc, e )
          } else n = e;
          return Vr( this, n, {
            top: 0,
            left: 0
          }, t || "page", r || i ).top + ( i ? this.doc.height - Xe( n ) : 0 )
        },
        defaultTextHeight: function () {
          return en( this.display )
        },
        defaultCharWidth: function () {
          return tn( this.display )
        },
        getViewport: function () {
          return {
            from: this.display.viewFrom,
            to: this.display.viewTo
          }
        },
        addWidget: function ( e, t, r, n, i ) {
          var o, l, s, a = this.display,
            u = ( e = Xr( this, Se( this.doc, e ) ) ).bottom,
            c = e.left;
          if ( t.style.position = "absolute", t.setAttribute( "cm-ignore-events", "true" ), this.display.input.setUneditable( t ), a.sizer.appendChild( t ), "over" == n ) u = e.top;
          else if ( "above" == n || "near" == n ) {
            var h = Math.max( a.wrapper.clientHeight, this.doc.height ),
              f = Math.max( a.sizer.clientWidth, a.lineSpace.clientWidth );
            ( "above" == n || e.bottom + t.offsetHeight > h ) && e.top > t.offsetHeight ? u = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= h && ( u = e.bottom ), c + t.offsetWidth > f && ( c = f - t.offsetWidth )
          }
          t.style.top = u + "px", t.style.left = t.style.right = "", "right" == i ? ( c = a.sizer.clientWidth - t.offsetWidth, t.style.right = "0px" ) : ( "left" == i ? c = 0 : "middle" == i && ( c = ( a.sizer.clientWidth - t.offsetWidth ) / 2 ), t.style.left = c + "px" ), r && ( o = this, l = {
            left: c,
            top: u,
            right: c + t.offsetWidth,
            bottom: u + t.offsetHeight
          }, null != ( s = Ln( o, l ) ).scrollTop && An( o, s.scrollTop ), null != s.scrollLeft && Dn( o, s.scrollLeft ) )
        },
        triggerOnKeyDown: qn( ol ),
        triggerOnKeyPress: qn( sl ),
        triggerOnKeyUp: ll,
        triggerOnMouseDown: qn( hl ),
        execCommand: function ( e ) {
          if ( $o.hasOwnProperty( e ) ) return $o[ e ].call( null, this )
        },
        triggerElectric: qn( function ( e ) {
          Al( this, e )
        } ),
        findPosH: function ( e, t, r, n ) {
          var i = 1;
          t < 0 && ( i = -1, t = -t );
          for ( var o = Se( this.doc, e ), l = 0; l < t && !( o = Fl( this.doc, o, i, r, n ) ).hitSide; ++l );
          return o
        },
        moveH: qn( function ( e, t ) {
          var r = this;
          this.extendSelectionsBy( function ( n ) {
            return r.display.shift || r.doc.extend || n.empty() ? Fl( r.doc, n.head, e, t, r.options.rtlMoveVisually ) : e < 0 ? n.from() : n.to()
          }, j )
        } ),
        deleteH: qn( function ( e, t ) {
          var r = this.doc.sel,
            n = this.doc;
          r.somethingSelected() ? n.replaceSelection( "", null, "+delete" ) : Xo( this, function ( r ) {
            var i = Fl( n, r.head, e, t, !1 );
            return e < 0 ? {
              from: i,
              to: r.head
            } : {
              from: r.head,
              to: i
            }
          } )
        } ),
        findPosV: function ( e, t, r, n ) {
          var i = 1,
            o = n;
          t < 0 && ( i = -1, t = -t );
          for ( var l = Se( this.doc, e ), s = 0; s < t; ++s ) {
            var a = Xr( this, l, "div" );
            if ( null == o ? o = a.left : a.left = o, ( l = Pl( this, a, i, r ) ).hitSide ) break
          }
          return l
        },
        moveV: qn( function ( e, t ) {
          var r = this,
            n = this.doc,
            i = [],
            o = !this.display.shift && !n.extend && n.sel.somethingSelected();
          if ( n.extendSelectionsBy( function ( l ) {
              if ( o ) return e < 0 ? l.from() : l.to();
              var s = Xr( r, l.head, "div" );
              null != l.goalColumn && ( s.left = l.goalColumn ), i.push( s.left );
              var a = Pl( r, s, e, t );
              return "page" == t && l == n.sel.primary() && kn( r, jr( r, a, "div" ).top - s.top ), a
            }, j ), i.length )
            for ( var l = 0; l < n.sel.ranges.length; l++ ) n.sel.ranges[ l ].goalColumn = i[ l ]
        } ),
        findWordAt: function ( e ) {
          var t = ae( this.doc, e.line ).text,
            r = e.ch,
            n = e.ch;
          if ( t ) {
            var i = this.getHelper( e, "wordChars" );
            "before" != e.sticky && n != t.length || !r ? ++n : --r;
            for ( var o = t.charAt( r ), l = te( o, i ) ? function ( e ) {
                return te( e, i )
              } : /\s/.test( o ) ? function ( e ) {
                return /\s/.test( e )
              } : function ( e ) {
                return !/\s/.test( e ) && !te( e )
              }; r > 0 && l( t.charAt( r - 1 ) ); ) --r;
            for ( ; n < t.length && l( t.charAt( n ) ); ) ++n
          }
          return new yi( ve( e.line, r ), ve( e.line, n ) )
        },
        toggleOverwrite: function ( e ) {
          null != e && e == this.state.overwrite || ( ( this.state.overwrite = !this.state.overwrite ) ? H( this.display.cursorDiv, "CodeMirror-overwrite" ) : T( this.display.cursorDiv, "CodeMirror-overwrite" ), nt( this, "overwriteToggle", this, this.state.overwrite ) )
        },
        hasFocus: function () {
          return this.display.input.getField() == D()
        },
        isReadOnly: function () {
          return !( !this.options.readOnly && !this.doc.cantEdit )
        },
        scrollTo: qn( function ( e, t ) {
          Mn( this, e, t )
        } ),
        getScrollInfo: function () {
          var e = this.display.scroller;
          return {
            left: e.scrollLeft,
            top: e.scrollTop,
            height: e.scrollHeight - kr( this ) - this.display.barHeight,
            width: e.scrollWidth - kr( this ) - this.display.barWidth,
            clientHeight: Mr( this ),
            clientWidth: Tr( this )
          }
        },
        scrollIntoView: qn( function ( e, t ) {
          null == e ? ( e = {
            from: this.doc.sel.primary().head,
            to: null
          }, null == t && ( t = this.options.cursorScrollMargin ) ) : "number" == typeof e ? e = {
            from: ve( e, 0 ),
            to: null
          } : null == e.from && ( e = {
            from: e,
            to: null
          } ), e.to || ( e.to = e.from ), e.margin = t || 0, null != e.from.line ? function ( e, t ) {
            Nn( e ), e.curOp.scrollToPos = t
          }( this, e ) : On( this, e.from, e.to, e.margin )
        } ),
        setSize: qn( function ( e, t ) {
          var r = this,
            n = function ( e ) {
              return "number" == typeof e || /^\d+$/.test( String( e ) ) ? e + "px" : e
            };
          null != e && ( this.display.wrapper.style.width = n( e ) ), null != t && ( this.display.wrapper.style.height = n( t ) ), this.options.lineWrapping && Ir( this );
          var i = this.display.viewFrom;
          this.doc.iter( i, this.display.viewTo, function ( e ) {
            if ( e.widgets )
              for ( var t = 0; t < e.widgets.length; t++ )
                if ( e.widgets[ t ].noHScroll ) {
                  Qn( r, i, "widget" );
                  break
                }++ i
          } ), this.curOp.forceUpdate = !0, nt( this, "refresh", this )
        } ),
        operation: function ( e ) {
          return Yn( this, e )
        },
        startOperation: function () {
          return Gn( this )
        },
        endOperation: function () {
          return Un( this )
        },
        refresh: qn( function () {
          var e = this.display.cachedTextHeight;
          Zn( this ), this.curOp.forceUpdate = !0, Rr( this ), Mn( this, this.doc.scrollLeft, this.doc.scrollTop ), ai( this ), ( null == e || Math.abs( e - en( this.display ) ) > .5 ) && ln( this ), nt( this, "refresh", this )
        } ),
        swapDoc: qn( function ( e ) {
          var t = this.doc;
          return t.cm = null, Ai( this, e ), Rr( this ), this.display.input.reset(), Mn( this, e.scrollLeft, e.scrollTop ), this.curOp.forceScroll = !0, sr( this, "swapDoc", this, t ), t
        } ),
        getInputField: function () {
          return this.display.input.getField()
        },
        getWrapperElement: function () {
          return this.display.wrapper
        },
        getScrollerElement: function () {
          return this.display.scroller
        },
        getGutterElement: function () {
          return this.display.gutters
        }
      }, st( e ), e.registerHelper = function ( t, n, i ) {
        r.hasOwnProperty( t ) || ( r[ t ] = e[ t ] = {
          _global: []
        } ), r[ t ][ n ] = i
      }, e.registerGlobalHelper = function ( t, n, i, o ) {
        e.registerHelper( t, n, o ), r[ t ]._global.push( {
          pred: i,
          val: o
        } )
      }
    }( Sl );
  var Ul = "iter insert remove copy getEditor constructor".split( " " );
  for ( var Vl in To.prototype ) To.prototype.hasOwnProperty( Vl ) && B( Ul, Vl ) < 0 && ( Sl.prototype[ Vl ] = function ( e ) {
    return function () {
      return e.apply( this.doc, arguments )
    }
  }( To.prototype[ Vl ] ) );
  return st( To ), Sl.inputStyles = {
      textarea: Gl,
      contenteditable: El
    }, Sl.defineMode = function ( e ) {
      Sl.defaults.mode || "null" == e || ( Sl.defaults.mode = e ),
        function ( e, t ) {
          arguments.length > 2 && ( t.dependencies = Array.prototype.slice.call( arguments, 2 ) ), Lt[ e ] = t
        }.apply( this, arguments )
    }, Sl.defineMIME = function ( e, t ) {
      kt[ e ] = t
    }, Sl.defineMode( "null", function () {
      return {
        token: function ( e ) {
          return e.skipToEnd()
        }
      }
    } ), Sl.defineMIME( "text/plain", "null" ), Sl.defineExtension = function ( e, t ) {
      Sl.prototype[ e ] = t
    }, Sl.defineDocExtension = function ( e, t ) {
      To.prototype[ e ] = t
    }, Sl.fromTextArea = function ( e, t ) {
      if ( ( t = t ? z( t ) : {} ).value = e.value, !t.tabindex && e.tabIndex && ( t.tabindex = e.tabIndex ), !t.placeholder && e.placeholder && ( t.placeholder = e.placeholder ), null == t.autofocus ) {
        var r = D();
        t.autofocus = r == e || null != e.getAttribute( "autofocus" ) && r == document.body
      }

      function n() {
        e.value = s.getValue()
      }
      var i;
      if ( e.form && ( et( e.form, "submit", n ), !t.leaveSubmitMethodAlone ) ) {
        var o = e.form;
        i = o.submit;
        try {
          var l = o.submit = function () {
            n(), o.submit = i, o.submit(), o.submit = l
          }
        } catch ( e ) {}
      }
      t.finishInit = function ( t ) {
        t.save = n, t.getTextArea = function () {
          return e
        }, t.toTextArea = function () {
          t.toTextArea = isNaN, n(), e.parentNode.removeChild( t.getWrapperElement() ), e.style.display = "", e.form && ( rt( e.form, "submit", n ), "function" == typeof e.form.submit && ( e.form.submit = i ) )
        }
      }, e.style.display = "none";
      var s = Sl( function ( t ) {
        return e.parentNode.insertBefore( t, e.nextSibling )
      }, t );
      return s
    },
    function ( e ) {
      e.off = rt, e.on = et, e.wheelEventPixels = gi, e.Doc = To, e.splitLines = wt, e.countColumn = I, e.findColumn = X, e.isWordChar = ee, e.Pass = U, e.signal = nt, e.Line = Xt, e.changeEnd = xi, e.scrollbarModel = In, e.Pos = ve, e.cmpPos = me, e.modes = Lt, e.mimeModes = kt, e.resolveMode = Tt, e.getMode = Mt, e.modeExtensions = Nt, e.extendMode = Ot, e.copyState = At, e.startState = Dt, e.innerMode = Wt, e.commands = $o, e.keyMap = Io, e.keyName = Ko, e.isModifierKey = Uo, e.lookupKey = Go, e.normalizeKeyMap = Bo, e.StringStream = Ht, e.SharedTextMarker = Co, e.TextMarker = wo, e.LineWidget = mo, e.e_preventDefault = at, e.e_stopPropagation = ut, e.e_stop = ht, e.addClass = H, e.contains = W, e.rmClass = T, e.keyNames = Fo
    }( Sl ), Sl.version = "5.36.0", Sl
} );
