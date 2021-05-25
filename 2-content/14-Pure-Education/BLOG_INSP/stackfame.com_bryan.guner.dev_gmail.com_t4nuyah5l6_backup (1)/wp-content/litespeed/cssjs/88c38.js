! function ( a ) {
  "use strict";
  a.fn.fitVids = function ( t ) {
    var i = {
      customSelector: null,
      ignore: null
    };
    if ( !document.getElementById( "fit-vids-style" ) ) {
      var e = document.head || document.getElementsByTagName( "head" )[ 0 ],
        r = document.createElement( "div" );
      r.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>', e.appendChild( r.childNodes[ 1 ] )
    }
    return t && a.extend( i, t ), this.each( function () {
      var t = [ 'iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed" ];
      i.customSelector && t.push( i.customSelector );
      var r = ".fitvidsignore";
      i.ignore && ( r = r + ", " + i.ignore );
      var e = a( this ).find( t.join( "," ) );
      ( e = ( e = e.not( "object object" ) ).not( r ) ).each( function () {
        var t = a( this );
        if ( !( 0 < t.parents( r ).length || "embed" === this.tagName.toLowerCase() && t.parent( "object" ).length || t.parent( ".fluid-width-video-wrapper" ).length ) ) {
          t.css( "height" ) || t.css( "width" ) || !isNaN( t.attr( "height" ) ) && !isNaN( t.attr( "width" ) ) || ( t.attr( "height", 9 ), t.attr( "width", 16 ) );
          var e = ( "object" === this.tagName.toLowerCase() || t.attr( "height" ) && !isNaN( parseInt( t.attr( "height" ), 10 ) ) ? parseInt( t.attr( "height" ), 10 ) : t.height() ) / ( isNaN( parseInt( t.attr( "width" ), 10 ) ) ? t.width() : parseInt( t.attr( "width" ), 10 ) );
          if ( !t.attr( "name" ) ) {
            var i = "fitvid" + a.fn.fitVids._count;
            t.attr( "name", i ), a.fn.fitVids._count++
          }
          t.wrap( '<div class="fluid-width-video-wrapper"></div>' ).parent( ".fluid-width-video-wrapper" ).css( "padding-top", 100 * e + "%" ), t.removeAttr( "height" ).removeAttr( "width" )
        }
      } )
    } )
  }, a.fn.fitVids._count = 0
}( window.jQuery || window.Zepto );;
