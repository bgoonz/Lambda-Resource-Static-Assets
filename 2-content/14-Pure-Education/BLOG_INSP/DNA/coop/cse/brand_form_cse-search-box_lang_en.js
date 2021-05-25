( function () {
  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var f, aa = function ( a ) {
      var b = 0;
      return function () {
        return b < a.length ? {
          done: !1,
          value: a[ b++ ]
        } : {
          done: !0
        }
      }
    },
    q = function ( a ) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[ Symbol.iterator ];
      return b ? b.call( a ) : {
        next: aa( a )
      }
    },
    r = function ( a, b ) {
      function c() {}
      c.prototype = b.prototype;
      a.$ = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a;
      a.Z = function ( d, e, g ) {
        for ( var k = Array( arguments.length - 2 ), l = 2; l < arguments.length; l++ ) k[ l - 2 ] = arguments[ l ];
        return b.prototype[ e ].apply( d, k )
      }
    };
  var u = {
    ar: "\u0645\u062d\u0633\u0651\u064e\u0646 \u0645\u0646 \u062e\u0644\u0627\u0644 Google",
    bg: "\u043f\u043e\u0434\u043e\u0431\u0440\u0435\u043d\u043e \u043e\u0442 Google",
    ca: "millorat per Google",
    cs: "vylep\u0161eno spole\u010dnost\u00ed Google",
    da: "forbedret af Google",
    de: "Unterst\u00fctzt durch Google",
    el: "\u03bc\u03b5 \u03c0\u03c1\u03bf\u03c3\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae \u03b1\u03c0\u03cc \u03c4\u03b7\u03bd Google",
    en: "enhanced by Google",
    es: "optimizado por Google",
    fi: "Googlen tehostama",
    fil: "pinahusay ng Google",
    fr: "optimis\u00e9 par Google",
    he: "\u05de\u05e9\u05d5\u05e4\u05e8 \u05e2\u05dc \u05d9\u05d3\u05d9 Google",
    hi: "Google \u0928\u0947 \u092c\u0947\u0939\u0924\u0930 \u092c\u0928\u093e\u092f\u093e",
    hr: "pobolj\u0161ao Google",
    hu: "Fejleszt\u0151: Google",
    id: "disempurnakan oleh Google",
    it: "enhanced by Google",
    ja: "Google \u63d0\u4f9b",
    ko: "Google \uc9c0\uc6d0",
    lt: "patobulinta \u201eGoogle\u201c",
    lv: "ar Google uzlabojumiem",
    nl: "geoptimaliseerd door Google",
    no: "forbedret ved hjelp av Google",
    pl: "wykorzystano technologi\u0119 Google",
    pt_BR: "melhorado pelo Google",
    pt_PT: "melhorado pelo Google",
    ro: "\u00eembun\u0103t\u0103\u021bit de Google",
    ru: "\u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043e Google",
    sk: "zlep\u0161en\u00e9 Googlom",
    sl: "izbolj\u0161al Google",
    sr: "\u043f\u043e\u0431\u043e\u0459\u0448\u0430\u0432\u0430 Google",
    sv: "f\u00f6rb\u00e4ttrat av Google",
    th: "\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1b\u0e23\u0e30\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e20\u0e32\u0e1e\u0e42\u0e14\u0e22 Google",
    tr: "Google taraf\u0131ndan geli\u015ftirilmi\u015ftir",
    uk: "\u0437\u0430 \u0443\u0447\u0430\u0441\u0442\u0456 Google",
    vi: "do Google c\u1ea3i ti\u1ebfn",
    zh_CN: "\u7531 Google \u4f18\u5316",
    zh_TW: "\u7d93 Google \u6280\u8853\u5f37\u5316"
  };

  function v( a ) {
    if ( Error.captureStackTrace ) Error.captureStackTrace( this, v );
    else {
      var b = Error().stack;
      b && ( this.stack = b )
    }
    a && ( this.message = String( a ) )
  }
  r( v, Error );
  v.prototype.name = "CustomError";
  var w = function ( a, b ) {
    a = a.split( "%s" );
    for ( var c = "", d = a.length - 1, e = 0; e < d; e++ ) c += a[ e ] + ( e < b.length ? b[ e ] : "%s" );
    v.call( this, c + a[ d ] )
  };
  r( w, v );
  w.prototype.name = "AssertionError";
  var ba = Array.prototype.forEach ? function ( a, b, c ) {
      Array.prototype.forEach.call( a, b, c )
    } : function ( a, b, c ) {
      for ( var d = a.length, e = "string" === typeof a ? a.split( "" ) : a, g = 0; g < d; g++ ) g in e && b.call( c, e[ g ], g, a )
    },
    ca = Array.prototype.map ? function ( a, b, c ) {
      return Array.prototype.map.call( a, b, c )
    } : function ( a, b, c ) {
      for ( var d = a.length, e = Array( d ), g = "string" === typeof a ? a.split( "" ) : a, k = 0; k < d; k++ ) k in g && ( e[ k ] = b.call( c, g[ k ], k, a ) );
      return e
    };

  function x( a ) {
    return Array.prototype.concat.apply( [], arguments )
  };
  var A = function ( a, b ) {
    this.i = a === ha && b || "";
    this.j = z
  };
  A.prototype.h = !0;
  A.prototype.g = function () {
    return this.i
  };
  var z = {},
    ha = {};
  var D = function ( a, b ) {
    this.i = b === B ? a : ""
  };
  D.prototype.h = !0;
  D.prototype.g = function () {
    return this.i.toString()
  };
  D.prototype.toString = function () {
    return this.i.toString()
  };
  var E = function ( a ) {
      return a instanceof D && a.constructor === D ? a.i : "type_error:SafeUrl"
    },
    ia = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
    ja = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    ka = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    F = function ( a ) {
      if ( a instanceof D ) return a;
      a = "object" == typeof a && a.h ? a.g() : String( a );
      if ( ka.test( a ) ) a = new D( a, B );
      else {
        a = String( a );
        a = a.replace( /(%0A|%0D)/g, "" );
        var b = a.match( ja );
        a = b && ia.test( b[ 1 ] ) ? new D( a, B ) : null
      }
      return a
    },
    B = {},
    G = new D( "about:invalid#zClosurez", B );
  var I = function ( a, b ) {
    this.i = b === H ? a : ""
  };
  I.prototype.h = !0;
  I.prototype.g = function () {
    return this.i
  };
  I.prototype.toString = function () {
    return this.i.toString()
  };
  var H = {},
    la = new I( "", H ),
    ra = function ( a ) {
      if ( a instanceof D ) return 'url("' + E( a ).replace( /</g, "%3c" ).replace( /[\\"]/g, "\\$&" ) + '")';
      if ( a instanceof A ) a = a instanceof A && a.constructor === A && a.j === z ? a.i : "type_error:Const";
      else {
        a = String( a );
        var b = a.replace( J, "$1" ).replace( J, "$1" ).replace( ma, "url" );
        if ( na.test( b ) ) {
          if ( b = !oa.test( a ) ) {
            for ( var c = b = !0, d = 0; d < a.length; d++ ) {
              var e = a.charAt( d );
              "'" == e && c ? b = !b : '"' == e && b && ( c = !c )
            }
            b = b && c && pa( a )
          }
          a = b ? qa( a ) : "zClosurez"
        } else a = "zClosurez"
      }
      if ( /[{;}]/.test( a ) ) throw new w( "Value does not allow [{;}], got: %s.",
        [ a ] );
      return a
    },
    pa = function ( a ) {
      for ( var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++ ) {
        var e = a.charAt( d );
        if ( "]" == e ) {
          if ( b ) return !1;
          b = !0
        } else if ( "[" == e ) {
          if ( !b ) return !1;
          b = !1
        } else if ( !b && !c.test( e ) ) return !1
      }
      return b
    },
    na = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
    ma = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
    J = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
    oa = /\/\*/,
    qa = function ( a ) {
      return a.replace( ma,
        function ( b, c, d, e ) {
          var g = "";
          d = d.replace( /^(['"])(.*)\1$/, function ( k, l, y ) {
            g = l;
            return y
          } );
          b = ( F( d ) || G ).g();
          return c + g + b + g + e
        } )
    };
  var K = function ( a, b ) {
    this.h = {};
    this.g = [];
    this.i = 0;
    var c = arguments.length;
    if ( 1 < c ) {
      if ( c % 2 ) throw Error( "Uneven number of arguments" );
      for ( var d = 0; d < c; d += 2 ) this.set( arguments[ d ], arguments[ d + 1 ] )
    } else a && this.R( a )
  };
  f = K.prototype;
  f.u = function () {
    this.B();
    for ( var a = [], b = 0; b < this.g.length; b++ ) a.push( this.h[ this.g[ b ] ] );
    return a
  };
  f.s = function () {
    this.B();
    return this.g.concat()
  };
  f.H = function ( a ) {
    return N( this.h, a )
  };
  f.T = function ( a ) {
    return N( this.h, a ) ? ( delete this.h[ a ], this.i--, this.g.length > 2 * this.i && this.B(), !0 ) : !1
  };
  f.B = function () {
    if ( this.i != this.g.length ) {
      for ( var a = 0, b = 0; a < this.g.length; ) {
        var c = this.g[ a ];
        N( this.h, c ) && ( this.g[ b++ ] = c );
        a++
      }
      this.g.length = b
    }
    if ( this.i != this.g.length ) {
      var d = {};
      for ( b = a = 0; a < this.g.length; ) c = this.g[ a ], N( d, c ) || ( this.g[ b++ ] = c, d[ c ] = 1 ), a++;
      this.g.length = b
    }
  };
  f.get = function ( a, b ) {
    return N( this.h, a ) ? this.h[ a ] : b
  };
  f.set = function ( a, b ) {
    N( this.h, a ) || ( this.i++, this.g.push( a ) );
    this.h[ a ] = b
  };
  f.R = function ( a ) {
    if ( a instanceof K )
      for ( var b = a.s(), c = 0; c < b.length; c++ ) this.set( b[ c ], a.get( b[ c ] ) );
    else
      for ( b in a ) this.set( b, a[ b ] )
  };
  f.forEach = function ( a, b ) {
    for ( var c = this.s(), d = 0; d < c.length; d++ ) {
      var e = c[ d ],
        g = this.get( e );
      a.call( b, g, e, this )
    }
  };
  f.S = function () {
    return new K( this )
  };
  var N = function ( a, b ) {
    return Object.prototype.hasOwnProperty.call( a, b )
  };
  var sa = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
    ta = function ( a, b ) {
      if ( a ) {
        a = a.split( "&" );
        for ( var c = 0; c < a.length; c++ ) {
          var d = a[ c ].indexOf( "=" ),
            e = null;
          if ( 0 <= d ) {
            var g = a[ c ].substring( 0, d );
            e = a[ c ].substring( d + 1 )
          } else g = a[ c ];
          b( g, e ? decodeURIComponent( e.replace( /\+/g, " " ) ) : "" )
        }
      }
    };
  var O = function ( a, b ) {
    this.j = this.F = this.i = "";
    this.A = null;
    this.C = this.D = "";
    this.g = !1;
    var c;
    a instanceof O ? ( this.g = void 0 !== b ? b : a.g, this.G( a.i ), this.P( a.F ), this.K( a.j ), this.N( a.A ), this.M( a.D ), this.O( a.h.U() ), this.L( a.C ) ) : a && ( c = String( a ).match( sa ) ) ? ( this.g = !!b, this.G( c[ 1 ] || "", !0 ), this.P( c[ 2 ] || "", !0 ), this.K( c[ 3 ] || "", !0 ), this.N( c[ 4 ] ), this.M( c[ 5 ] || "", !0 ), this.O( c[ 6 ] || "", !0 ), this.L( c[ 7 ] || "", !0 ) ) : ( this.g = !!b, this.h = new P( null, this.g ) )
  };
  f = O.prototype;
  f.toString = function () {
    var a = [],
      b = this.i;
    b && a.push( Q( b, ua, !0 ), ":" );
    var c = this.j;
    if ( c || "file" == b ) a.push( "//" ), ( b = this.F ) && a.push( Q( b, ua, !0 ), "@" ), a.push( encodeURIComponent( String( c ) ).replace( /%25([0-9a-fA-F]{2})/g, "%$1" ) ), c = this.A, null != c && a.push( ":", String( c ) );
    if ( c = this.D ) this.X() && "/" != c.charAt( 0 ) && a.push( "/" ), a.push( Q( c, "/" == c.charAt( 0 ) ? va : wa, !0 ) );
    ( c = this.W() ) && a.push( "?", c );
    ( c = this.C ) && a.push( "#", Q( c, xa ) );
    return a.join( "" )
  };
  f.G = function ( a, b ) {
    if ( this.i = b ? R( a, !0 ) : a ) this.i = this.i.replace( /:$/, "" );
    return this
  };
  f.P = function ( a, b ) {
    this.F = b ? R( a ) : a;
    return this
  };
  f.K = function ( a, b ) {
    this.j = b ? R( a, !0 ) : a;
    return this
  };
  f.X = function () {
    return !!this.j
  };
  f.N = function ( a ) {
    if ( a ) {
      a = Number( a );
      if ( isNaN( a ) || 0 > a ) throw Error( "Bad port number " + a );
      this.A = a
    } else this.A = null;
    return this
  };
  f.M = function ( a, b ) {
    this.D = b ? R( a, !0 ) : a;
    return this
  };
  f.O = function ( a, b ) {
    a instanceof P ? ( this.h = a, this.h.V( this.g ) ) : ( b || ( a = Q( a, ya ) ), this.h = new P( a, this.g ) );
    return this
  };
  f.W = function () {
    return this.h.toString()
  };
  f.m = function ( a ) {
    return this.h.get( a )
  };
  f.L = function ( a, b ) {
    this.C = b ? R( a ) : a;
    return this
  };
  var R = function ( a, b ) {
      return a ? b ? decodeURI( a.replace( /%25/g, "%2525" ) ) : decodeURIComponent( a ) : ""
    },
    Q = function ( a, b, c ) {
      return "string" === typeof a ? ( a = encodeURI( a ).replace( b, za ), c && ( a = a.replace( /%25([0-9a-fA-F]{2})/g, "%$1" ) ), a ) : null
    },
    za = function ( a ) {
      a = a.charCodeAt( 0 );
      return "%" + ( a >> 4 & 15 ).toString( 16 ) + ( a & 15 ).toString( 16 )
    },
    ua = /[#\/\?@]/g,
    wa = /[#\?:]/g,
    va = /[#\?]/g,
    ya = /[#\?@]/g,
    xa = /#/g,
    P = function ( a, b ) {
      this.h = this.g = null;
      this.i = a || null;
      this.j = !!b
    };
  f = P.prototype;
  f.l = function () {
    if ( !this.g && ( this.g = new K, this.h = 0, this.i ) ) {
      var a = this;
      ta( this.i, function ( b, c ) {
        a.add( decodeURIComponent( b.replace( /\+/g, " " ) ), c )
      } )
    }
  };
  f.add = function ( a, b ) {
    this.l();
    this.v();
    a = this.o( a );
    var c = this.g.get( a );
    c || this.g.set( a, c = [] );
    c.push( b );
    this.h = this.h + 1;
    return this
  };
  f.J = function ( a ) {
    this.l();
    a = this.o( a );
    return this.g.H( a ) ? ( this.v(), this.h = this.h - this.g.get( a ).length, this.g.T( a ) ) : !1
  };
  f.I = function ( a ) {
    this.l();
    a = this.o( a );
    return this.g.H( a )
  };
  f.forEach = function ( a, b ) {
    this.l();
    this.g.forEach( function ( c, d ) {
      ba( c, function ( e ) {
        a.call( b, e, d, this )
      }, this )
    }, this )
  };
  f.s = function () {
    this.l();
    for ( var a = this.g.u(), b = this.g.s(), c = [], d = 0; d < b.length; d++ )
      for ( var e = a[ d ], g = 0; g < e.length; g++ ) c.push( b[ d ] );
    return c
  };
  f.u = function ( a ) {
    this.l();
    var b = [];
    if ( "string" === typeof a ) this.I( a ) && ( b = x( b, this.g.get( this.o( a ) ) ) );
    else {
      a = this.g.u();
      for ( var c = 0; c < a.length; c++ ) b = x( b, a[ c ] )
    }
    return b
  };
  f.set = function ( a, b ) {
    this.l();
    this.v();
    a = this.o( a );
    this.I( a ) && ( this.h = this.h - this.g.get( a ).length );
    this.g.set( a, [ b ] );
    this.h = this.h + 1;
    return this
  };
  f.get = function ( a, b ) {
    if ( !a ) return b;
    a = this.u( a );
    return 0 < a.length ? String( a[ 0 ] ) : b
  };
  f.Y = function ( a, b ) {
    this.J( a );
    if ( 0 < b.length ) {
      this.v();
      var c = this.g,
        d = c.set;
      a = this.o( a );
      var e = b.length;
      if ( 0 < e ) {
        for ( var g = Array( e ), k = 0; k < e; k++ ) g[ k ] = b[ k ];
        e = g
      } else e = [];
      d.call( c, a, e );
      this.h = this.h + b.length
    }
  };
  f.toString = function () {
    if ( this.i ) return this.i;
    if ( !this.g ) return "";
    for ( var a = [], b = this.g.s(), c = 0; c < b.length; c++ ) {
      var d = b[ c ],
        e = encodeURIComponent( String( d ) );
      d = this.u( d );
      for ( var g = 0; g < d.length; g++ ) {
        var k = e;
        "" !== d[ g ] && ( k += "=" + encodeURIComponent( String( d[ g ] ) ) );
        a.push( k )
      }
    }
    return this.i = a.join( "&" )
  };
  f.v = function () {
    this.i = null
  };
  f.U = function () {
    var a = new P;
    a.i = this.i;
    this.g && ( a.g = this.g.S(), a.h = this.h );
    return a
  };
  f.o = function ( a ) {
    a = String( a );
    this.j && ( a = a.toLowerCase() );
    return a
  };
  f.V = function ( a ) {
    a && !this.j && ( this.l(), this.v(), this.g.forEach( function ( b, c ) {
      var d = c.toLowerCase();
      c != d && ( this.J( c ), this.Y( d, b ) )
    }, this ) );
    this.j = a
  };
  var Aa = function ( a, b, c, d, e, g ) {
      var k = document.getElementById( escape( d ) ) || document.getElementById( "searchbox_demo" );
      if ( null == k ? 0 : k[ escape( b ) ] ) {
        var l = k[ escape( b ) ];
        b = navigator;
        var y = function ( p, m ) {
          var h = document.createElement( "input" );
          h.setAttribute( "name", p );
          h.setAttribute( "value", m );
          h.setAttribute( "type", "hidden" );
          k.appendChild( h );
          return h
        };
        d = function ( p, m, h, n ) {
          if ( encodeURIComponent && decodeURIComponent ) {
            m = new O( m );
            m.m( p ) && ( h = decodeURIComponent( m.m( p ) ) );
            m = h.indexOf( e );
            0 <= m && ( h = h.substring( m + e.length, h.length ) );
            for ( h = h.substring( 0, n ); encodeURIComponent( h ).length > n; ) h = h.substring( 0, h.length - 1 );
            return y( p, h )
          }
        };
        var ea = function ( p ) {
            var m = 0,
              h = 0,
              n = 0,
              L;
            return function () {
              var da = ( new Date ).getTime();
              if ( L ) {
                var M = da - L;
                m += M;
                h += M * M
              }
              n++;
              L = da;
              p.value = [ m, h, n ].join( "j" )
            }
          },
          C = !1;
        if ( "Microsoft Internet Explorer" === b.appName )
          for ( var fa = q( k.parentNode.childNodes ), t = fa.next(); !t.done; t = fa.next() ) {
            if ( t = t.value, "SCRIPT" == t.nodeName && t.attributes.src && t.attributes.src.nodeValue == unescape( escape( c ) ) ) {
              C = !0;
              break
            }
          } else C = !0;
        C && ( c = document.location.toString(),
          C = document.referrer, d( "siteurl", c, c, 250 ), d( "ref", c, C, 750 ), l.addEventListener ? l.addEventListener( "keyup", ea( y( "ss", "" ) ), !1 ) : l.attachEvent && l.attachEvent( "onkeyup", ea( y( "ss", "" ) ) ) );
        "Win32" == b.platform && ( l.style.cssText = "border: 1px solid #7e9db9; padding: 2px;" );
        window.history.g && ( window.history.g = "compatible" );
        c = function () {
          if ( "" === l.value ) {
            l.placeholder = "";
            var p = F( "https://www.google.com/cse/static/images/1x/" + a + "/branding.png" ) || G;
            p = {
              background: '#FFFFFF url("' + E( p ) + '") top 50% left 9px no-repeat'
            };
            var m = "";
            for ( n in p )
              if ( Object.prototype.hasOwnProperty.call( p, n ) ) {
                if ( !/^[-_a-zA-Z0-9]+$/.test( n ) ) throw Error( "Name allows only [-_a-zA-Z0-9], got: " + n );
                var h = p[ n ];
                null != h && ( h = Array.isArray( h ) ? ca( h, ra ).join( " " ) : ra( h ), m += n + ":" + h + ";" )
              } var n = m ? new I( m, H ) : la;
            l.style.cssText = n instanceof I && n.constructor === I ? n.i : "type_error:SafeStyle"
          }
        };
        l.onblur = c;
        l.onfocus = function () {
          l.placeholder = "";
          l.style.background = "#FFFFFF"
        };
        /[&?]q=[^&]/.test( g ) || c()
      }
    },
    S;
  a: {
    var Ba = document.currentScript;
    if ( !Ba )
      for ( var Ca = q( document.getElementsByTagName( "script" ) ), T = Ca.next(); !T.done; T = Ca.next() ) {
        var Da = T.value,
          U = Da.getAttribute( "src" ),
          V;
        if ( V = U ) {
          var Ea = U.indexOf( "?" ),
            Fa = -1 === Ea ? U.length : Ea;
          V = /http(s?):\/\/((www)|(cse))\.google\.([a-z.]{2,})\/((coop\/)?)cse\/brand/.test( U.substring( 0, Fa ) ) || /http(s?):\/\/cse\.google\.([a-z.]{2,})\/brand/.test( U.substring( 0, Fa ) )
        }
        if ( V ) {
          S = Da;
          break a
        }
      }
    S = Ba
  }
  var W = S,
    Ga = location.search;
  if ( W && W.getAttribute( "src" ) ) {
    var Ha = W.getAttribute( "src" ),
      X = new O( Ha ),
      Y;
    a: {
      var Ia = X.m( "lang" );
      if ( Ia ) {
        var Ja = Ia.replace( /-/g, "_" );
        if ( Ja in u ) {
          Y = Ja;
          break a
        }
      }
      b: {
        if ( navigator.languages && 0 < navigator.languages.length )
          for ( var Ka = q( navigator.languages ), Z = Ka.next(); !Z.done; Z = Ka.next() ) {
            var La = Z.value.replace( /-/g, "_" );
            if ( La in u ) {
              Y = La;
              break b
            }
          }
        Y = "en"
      }
    }
    var Ma = Y,
      Na = X.m( "inputbox" ) ? X.m( "inputbox" ) : "q",
      Oa = X.m( "form" ) ? X.m( "form" ) : "";
    Aa( Ma, Na, X.G( "" ).toString(), Oa, "://", Ga )
  };
} ).call( this );
