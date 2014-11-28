// JavaScript Document

window.app = {
            load: function() {
                navigator.splashscreen.hide();
                new kendo.mobile.Application( document.body );
            },

            setName: function() {
                var win = window.open( "http://jsfiddle.net/tj_vantoll/K2yqc/show", "_blank",
                  "EnableViewPortScale=yes" );

                win.addEventListener( "loadstop", function() {
                    win.executeScript({ code: "localStorage.setItem( 'name', '' );" });
                    var loop = setInterval(function() {
                        win.executeScript(
                            {
                                code: "localStorage.getItem( 'name' )"
                            },
                            function( values ) {
                                var name = values[ 0 ];
                                if ( name ) {
                                    clearInterval( loop );
                                    win.close();
                                    $( "h1" ).html( "Welcome " + name + "!" );
                                }
                            }
                        );
                    });
                });
            }
        };

        document.addEventListener( "deviceready", app.load );