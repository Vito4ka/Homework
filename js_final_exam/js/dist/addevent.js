(function on(w,d) {  // 
                var
            a   = "addEventListener"
            n   = a in w,
            c   = "Event"+(n?"Listener":""),
            nc  = "Event"+(!n?"Listener":""),
            u   = n?"add":"attach",
            nu  = !n?"add":"attach",
            r   = n?"remove":"detach",
            nr  = !n?"remove":"detach"

        w[nu + nc] = Element.prototype[nu + nc] = function(evnt,func,c){
            return this[u+c]((n?evnt.split("on")[1]:"on"+evnt),function(e){if(!e)e = event;else event = e;func(e)},c)
        }

        w[nr + nc] = Element.prototype[nr + nc] = function(evnt,func,c){
            return this[r+c]((n?evnt.split("on")[1]:"on"+evnt),function(e){if(!e)e = event;else event = e;func(e)},c)
        }
    })(window,document)