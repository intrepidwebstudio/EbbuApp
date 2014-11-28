

/*
$(function(){
    var blue = document.getElementById("blue");
    
    Hammer(blue).on("swipeleft", function() {
		
		
		
          $(blue).animate({left: "-=100"}, 500)  
    });
    
    Hammer(document.getElementById("blue")).on("swiperight", function() {
		
          $(blue).animate({left: "+=100"}, 500)  
    });
})

*/




// JavaScript Document
 





//$(document).on('touchstart click', '.flip-container ', function(event){                       
 //    event.preventDefault();
    //BLOCK THE CLASS TOGGLE IF THE PAGE IS SCROLLING
  //  if(!scrolling) {
      //  $(this).find('.flipper').toggleClass('hover');
   // }
//}); 




var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 



//Function to convert hex format to a rgb color
function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
 
 
 console.log("#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]));
}


function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }

// JavaScript Document
 $(function() {

    function prevent_default(e) {
        e.preventDefault();
    }

    function disable_scroll() {
        $(document).on('touchmove', prevent_default);
    }

    function enable_scroll() {
        $(document).unbind('touchmove', prevent_default)
    }


   
    var x;
	var new_rect;
	var bgcolor;
	
    $('.swipe-delete li > a')
        .on('touchstart', function(e) {
			$( ".swipe-delete li > a" ).each(function( index ) {
		var rect = this.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);
			if(rect.left !=0 )
			{
			$(this).animate({'left':'0px'},200,'linear',function(){  
							 new_rect = this.getBoundingClientRect();
					}) // close em all
			}
	
});
	        x = e.originalEvent.pageX // anchor point
		})
        .on('touchmove',  function(e) {
												var change = e.originalEvent.pageX - x;
												console.log(change);
												change = Math.min(Math.max(-300, change), 0 ) // restrict to -100px left, 0px right
												console.log("change = "+change);
												if(change < -50)
												{
											//	e.currentTarget.style.setProperty( 'background-color', '#DFE3E7', 'important' );	
												disable_scroll(); // disable scroll once we hit 10px horizontal slide
												e.currentTarget.style.left = change + 'px';
												}else{
											//	e.currentTarget.style.left = 0 + 'px';
											//	enable_scroll();	
													}
		})
        .on('touchend', function(e) {
			var left = "0";
	         left = parseInt(e.currentTarget.style.left)
			console.log(" LEFTTTT  =" + left );
			if(left < -90)
			{
		 var new_left = -240 + 'px';
			e.currentTarget.style.left = new_left;	
				}
			else{
		 var new_left = '0px';
			e.currentTarget.style.left = new_left;		
	//		e.currentTarget.style.setProperty('background-color', bgcolor, 'important' );
				}			
            enable_scroll()
			console.log('new keft  ='+ new_left);
		//e.currentTarget.addClass('tocuhedd');
	    });
		
		
		
		
		
		$('.socialicon').on('touchstart', function(e) {
		console.log('touch started');	
		$(this).children('.image_icon').css("opacity",".6");
	//	console.log("staart Poistion = "+ y);
			}).on('touchmove',  function(e) {
		})
        .on('touchend', function(e) {
				console.log('touch_end');
				$(this).children('.image_icon').css("opacity","1.0");
				
				
				 $.getScript("js/SocialSharing.js");
		  SocialSharing();
				
			var title_aaa =	$(this).attr('data-value');
			var title_linkkk = $(this).attr('data-value1');
			var media_link = $(this).attr('data-value2');
			
			console.log("media LINK ="+ media_link);
			
			if( media_link == "twitter" )
			{
				
			window.plugins.socialsharing.shareViaTwitter(title_aaa, null /* img */,title_linkkk);	
				}
			else if( media_link == "facebook")
			{
			window.plugins.socialsharing.shareViaFacebook(title_aaa, null /* img */,title_linkkk);	
				
				}
			else if( media_link == "email" )
			{
			window.plugins.socialsharing.shareViaEmail(title_aaa , null /* img */,title_linkkk );
				}
			else 
			{
				
			window.plugins.socialsharing.shareVia(title_aaa, null /* img */,title_linkkk);			
				}
						
					
			
			console.log('TITLEE = '+ title_aaa);
			console.log('LINKKK = '+ title_linkkk);
				

		});

	

});


var y;
var new_position;



$("#search_show_bar").on('click', function() {
   
	  show_search()
	
});


$('#showsearch').on('click', function(e) {
	show_search();
});



$('#showsearch').on('touchstart', function(e) {
	$(this).children('.searchimg').css("opacity",".6");
})
.on('touchmove',function(){
})
.on('touchend',function(){
	$(this).children('.searchimg').css("opacity","1");
	});
	
	
	
	

$('#settingspage').on('touchstart', function(e) {
	$(this).children('.settingsimg').css("opacity",".6");
})
.on('touchmove',function(){
})
.on('touchend',function(){
	$(this).children('.settingsimg').css("opacity","1");
	settings_page();
	});
	
	
	
$('.backbutton').on('touchstart', function(e) {
$(this).children('.backimg').css("opacity",".6");
})
.on('touchmove',function(){
})
.on('touchend',function(){
$(this).children('.backimg').css("opacity","1");
});
	




/*
$('#dragimg').on('touchstart', function(e) {
			
			y = e.originalEvent.pageY // anchor point	

//	console.log("staart Poistion = "+ y);
	
		}).on('touchmove',  function(e) {
											
												var change = e.originalEvent.pageY - y;
											console.log(change);
												
											console.log("change = "+ change);
												
												if(change > 10)
												{
												 new_position = change;
												}
												
											
		})
        .on('touchend', function(e) {
			
						if( new_position > 20)
						 {
									$('#searcharea').show();
									$('input').focus();
									$('#searcharea').focus();
						 }
		/*	
			var top = "13px";
			
             top = parseInt(e.currentTarget.style.top)
			
			console.log(" topp  =" + top );
			
            var new_top = (top > 8 ? '90px' : '50px') // snap back, or leave open, 50px threshold
            e.currentTarget.style.top = new_top
            enable_scroll()
			*/
			
			//e.currentTarget.addClass('tocuhedd');

		
	//    });




         
	function settings_page()
	{		
				
			OAuth.initialize("x4SuUm1iHBNilIhqxeB3sg60JGY");
			
			
			
			
			
			
			
			
					
				 $('#twitterautho').on('touchstart', function() {	
				 if($('#twitterlogged').css('display') == 'none')
				{
	                OAuth.popup('twitter')
                        .done(function (result) {
					//	console.log(JSON.stringify(result));
						
				//			console.log('Access token  = '+ result.oauth_token + ' secret key = '+ result.oauth_token_secret  )
                        // the access_token is available via r.access_token
                       // but the http functions automagically wrap the jquery calls
                       //     result.get('/1.1/account/verify_credentials.json')
                        //        .done(function(data) {
									
//                                    $('#result').html("twitter: Hello, " + data.name + " !");
									
							//		console.log( "details = "+ JSON.stringify(data) );
								//	console.log("twitter: Hello, " + data.name + " ! ");
								$('#twitterlogout').css('display','none');
								$('#twitterlogged').css('display','block');
      //      })
                            //    .fail(function( jqXHR, textStatus, errorThrown) {
                                 //   console.log("req error: " + textStatus);
                              //  });
                        })
                        .fail(function (e) {
                           // console.log('error: ' + e.message);
                        });
						
						
						}else{
				
				
				
				
				}
						
						
				 });
				 
				 
			
				  
					
				 $('#linkedinautho').on('touchstart', function() {	
                    OAuth.popup('linkedin')
                        .done(function (result) {
														
								console.log(JSON.stringify(result));
						
						
								
								$('#linkedinlogout').css('display','none');
								$('#linkedinlogged').css('display','block');	
					//		console.log('Access token  = '+ result.oauth_token + ' secret key = '+ result.oauth_token_secret  )
							
							
                            // the access_token is available via r.access_token
                            // but the http functions automagically wrap the jquery calls
                      //      result.get('/1.1/account/verify_credentials.json')
                      ///          .done(function(data) {
										
									
                               // $('#result').html("twitter: Hello, " + data.name + " !");
									
				//					console.log( "details = "+ JSON.stringify(data) );
									
																		
			//					console.log("twitter: Hello, " + data.name + " ! ");
									
									
									
								

									
              //                  })
                  //              .fail(function( jqXHR, textStatus, errorThrown) {
                //                  console.log("req error: " + textStatus);
                    //            });
                        })
                        .fail(function (e) {
                        console.log('error: ' + e.message);
                        });
						
				 });
				 
				 
				 
				 
				 
				 
				 
					
				 $('#tumblrautho').on('touchstart', function() {	
                    OAuth.popup('tumblr')
                        .done(function (result) {
														
							console.log(JSON.stringify(result));
							
								$('#tumblrlogout').css('display','none');
								$('#tumblrlogged').css('display','block');
									
						
						//	console.log('Access token  = '+ result.oauth_token + ' secret key = '+ result.oauth_token_secret  )
							
                            // the access_token is available via r.access_token
                            // but the http functions automagically wrap the jquery calls
                    //        result.get('/1.1/account/verify_credentials.json')
                     //           .done(function(data) {
									
								
									
//                                    $('#result').html("twitter: Hello, " + data.name + " !");
									
									
						//			console.log( "details = "+ JSON.stringify(data) );
									
																		
						//			console.log("tumblr: Hello, " + data.name + " ! ");
									
									
									
								

									
                       //         })
                        //        .fail(function( jqXHR, textStatus, errorThrown) {
                //                   console.log("req error: " + textStatus);
                         //       });
                        })
                        .fail(function (e) {
              //             console.log('error: ' + e.message);
                        });
						
				 });
				 
				 
	
	
	
	 
       
             var login = function () {
                if (!window.cordova) {
                    var appId = '1585940284960511';
                    facebookConnectPlugin.browserInit(appId);
                }
                facebookConnectPlugin.login( ["email"], 
                    function (response) { alert(JSON.stringify(response)) },
                    function (response) { alert(JSON.stringify(response)) });
            }
            
            var showDialog = function () { 
                facebookConnectPlugin.showDialog( { method: "feed" }, 
                    function (response) { alert(JSON.stringify(response)) },
                    function (response) { alert(JSON.stringify(response)) });
            }
            
            var apiTest = function () { 
                facebookConnectPlugin.api( "me/?fields=id,email", ["user_birthday"],
                    function (response) { alert(JSON.stringify(response)) },
                    function (response) { alert(JSON.stringify(response)) }); 
            }

            var getAccessToken = function () { 
                facebookConnectPlugin.getAccessToken( 
                    function (response) { alert(JSON.stringify(response)) },
                    function (response) { alert(JSON.stringify(response)) });
            }
            
            var getStatus = function () { 
                facebookConnectPlugin.getLoginStatus( 
                    function (response) { alert(JSON.stringify(response)) },
                    function (response) { alert(JSON.stringify(response)) });
            }

            var logout = function () { 
                facebookConnectPlugin.logout( 
                    function (response) { alert(JSON.stringify(response)) },
                    function (response) { alert(JSON.stringify(response)) });
            }
     
				 
				 
				 
				  $('#facebookautho').on('touchstart', function() {	
				  
				 if($('#facebooklogged').css('display') == 'none')
				{
					
					login();
					
	               
					
					
					
					
						}else{
				
				}
						
						
				 });
				 
                
				
	}





var callback = function(buttonIndex) {
    setTimeout(function() {
      // like other Cordova plugins (prompt, confirm) the buttonIndex is 1-based (first button is index 1)
//      alert('button index clicked: ' + buttonIndex);
	  
	 
		  
		  $.getScript("js/SocialSharing.js");
		  SocialSharing();
		  
		//  alert('title = ' + global_article_title + ' link  =  '+ global_article_link );
	  
	  
	  if(buttonIndex == 1)
	  {
	//	  alert('ss');
		//  window.plugins.socialsharing.shareViaFacebook(  article_title, null, null, function(){alert("ok")}, function(e){alert("error: " + e)});
		  window.plugins.socialsharing.shareViaEmail(global_article_title , null /* img */,global_article_link );
		  
		  }
		 else if(buttonIndex == 2)
		 {
			 window.plugins.socialsharing.shareViaFacebook(global_article_title, null /* img */,global_article_link);
			 }
		 else if(buttonIndex == 3)
		 {
			 window.plugins.socialsharing.share(global_article_title, null /* img */,global_article_link);
			 }
		 else if(buttonIndex == 4)
		 {
			 window.plugins.socialsharing.shareViaTwitter(global_article_title , null /* img */,global_article_link );
			 }
		 else if(buttonIndex == 5)
		 {
			 
			 
			 }
		else if(buttonIndex == 6)
		 {
			 
			 }	 
		 
	  
	  
    });
  };




  function share_article() {
	  
	  
	  
	  
    var options = {
       // 'title': 'What do you want with this image?',
        'buttonLabels': ['Twitter' ,'Facebook', 'LinkedIn','Email','Send to Reading List','Open in Safari'],
        'androidEnableCancelButton' : false, // default false
        'winphoneEnableCancelButton' : false, // default false
        'addCancelButtonWithLabel': 'Cancel',
//        'addDestructiveButtonWithLabel' : 'Delete it'
    };
    // Depending on the buttonIndex, you can now call shareViaFacebook or shareViaTwitter
    // of the SocialSharing plugin (https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin)
    window.plugins.actionsheet.show(options, callback);
  };
  
 


$("#search_show_bar").live("tap", function(event){
	
	show_search();
  
});

