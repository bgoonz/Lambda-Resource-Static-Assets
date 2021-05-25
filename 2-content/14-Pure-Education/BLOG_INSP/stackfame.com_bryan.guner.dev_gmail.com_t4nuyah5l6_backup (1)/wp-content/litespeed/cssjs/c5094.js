/*!This file is auto-generated*/
window.addComment = function ( f ) {
  var v, I, C, h = f.document,
    E = {
      commentReplyClass: "comment-reply-link",
      commentReplyTitleId: "reply-title",
      cancelReplyId: "cancel-comment-reply-link",
      commentFormId: "commentform",
      temporaryFormId: "wp-temp-form-div",
      parentIdFieldId: "comment_parent",
      postIdFieldId: "comment_post_ID"
    },
    e = f.MutationObserver || f.WebKitMutationObserver || f.MozMutationObserver,
    i = "querySelector" in h && "addEventListener" in f,
    n = !!h.documentElement.dataset;

  function t() {
    d(),
      function () {
        if ( !e ) return;
        new e( o ).observe( h.body, {
          childList: !0,
          subtree: !0
        } )
      }()
  }

  function d( e ) {
    if ( i && ( v = b( E.cancelReplyId ), I = b( E.commentFormId ), v ) ) {
      v.addEventListener( "touchstart", l ), v.addEventListener( "click", l );
      var t = function ( e ) {
        if ( ( e.metaKey || e.ctrlKey ) && 13 === e.keyCode ) return I.removeEventListener( "keydown", t ), e.preventDefault(), I.submit.click(), !1
      };
      I && I.addEventListener( "keydown", t );
      for ( var n, d = function ( e ) {
          var t, n = E.commentReplyClass;
          e && e.childNodes || ( e = h );
          t = h.getElementsByClassName ? e.getElementsByClassName( n ) : e.querySelectorAll( "." + n );
          return t
        }( e ), o = 0, r = d.length; o < r; o++ )( n = d[ o ] ).addEventListener( "touchstart", a ), n.addEventListener( "click", a )
    }
  }

  function l( e ) {
    var t = b( E.temporaryFormId );
    if ( t && C ) {
      b( E.parentIdFieldId ).value = "0";
      var n = t.textContent;
      t.parentNode.replaceChild( C, t ), this.style.display = "none";
      var d = b( E.commentReplyTitleId ),
        o = d && d.firstChild,
        r = o && o.nextSibling;
      o && o.nodeType === Node.TEXT_NODE && n && ( r && "A" === r.nodeName && r.id !== E.cancelReplyId && ( r.style.display = "" ), o.textContent = n ), e.preventDefault()
    }
  }

  function a( e ) {
    var t = b( E.commentReplyTitleId ),
      n = t && t.firstChild.textContent,
      d = this,
      o = m( d, "belowelement" ),
      r = m( d, "commentid" ),
      i = m( d, "respondelement" ),
      l = m( d, "postid" ),
      a = m( d, "replyto" ) || n;
    o && r && i && l && !1 === f.addComment.moveForm( o, r, i, l, a ) && e.preventDefault()
  }

  function o( e ) {
    for ( var t = e.length; t--; )
      if ( e[ t ].addedNodes.length ) return void d()
  }

  function m( e, t ) {
    return n ? e.dataset[ t ] : e.getAttribute( "data-" + t )
  }

  function b( e ) {
    return h.getElementById( e )
  }
  return i && "loading" !== h.readyState ? t() : i && f.addEventListener( "DOMContentLoaded", t, !1 ), {
    init: d,
    moveForm: function ( e, t, n, d, o ) {
      var r = b( e );
      C = b( n );
      var i, l, a, m = b( E.parentIdFieldId ),
        c = b( E.postIdFieldId ),
        s = b( E.commentReplyTitleId ),
        y = s && s.firstChild,
        u = y && y.nextSibling;
      if ( r && C && m ) {
        void 0 === o && ( o = y && y.textContent ),
          function ( e ) {
            var t = E.temporaryFormId,
              n = b( t ),
              d = b( E.commentReplyTitleId ),
              o = d ? d.firstChild.textContent : "";
            if ( n ) return;
            ( n = h.createElement( "div" ) ).id = t, n.style.display = "none", n.textContent = o, e.parentNode.insertBefore( n, e )
          }( C ), d && c && ( c.value = d ), m.value = t, v.style.display = "", r.parentNode.insertBefore( C, r.nextSibling ), y && y.nodeType === Node.TEXT_NODE && ( u && "A" === u.nodeName && u.id !== E.cancelReplyId && ( u.style.display = "none" ), y.textContent = o ), v.onclick = function () {
            return !1
          };
        try {
          for ( var p = 0; p < I.elements.length; p++ )
            if ( i = I.elements[ p ], l = !1, "getComputedStyle" in f ? a = f.getComputedStyle( i ) : h.documentElement.currentStyle && ( a = i.currentStyle ), ( i.offsetWidth <= 0 && i.offsetHeight <= 0 || "hidden" === a.visibility ) && ( l = !0 ), "hidden" !== i.type && !i.disabled && !l ) {
              i.focus();
              break
            }
        } catch ( e ) {}
        return !1
      }
    }
  }
}( window );;
