var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 
//Function to convert hex format to a rgb color
function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
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
					if($(this).hasClass('leftitem'))
					{
						}
					else{	
									
							$( ".swipe-delete li > a" ).each(function( index ) {
									var rect = this.getBoundingClientRect();
												if(rect.left !=0 )
												{
												$(this).animate({'left':'0px'},200,'linear',function(){  
																 new_rect = this.getBoundingClientRect();
																 $(this).removeClass('leftitem');
														}) // close em all
												}
							
							});
			}
		    x = e.originalEvent.pageX // anchor point

		})
        .on('touchmove',  function(e) {
											if( $(this).hasClass('leftitem') == false )	
											{
												var change = e.originalEvent.pageX - x;
												change = Math.min(Math.max(-300, change), 0 ) // restrict to -100px left, 0px right
												if(change < -50)
												{
												disable_scroll(); // disable scroll once we hit 10px horizontal slide
												e.currentTarget.style.left = change + 'px';
												}else{
													}
											}else{
												var change1 = e.originalEvent.pageX - x;
												change1 = Math.min(Math.max(-231, change1), Math.max(231, change1) )
												disable_scroll(); // disable scroll once we hit 10px horizontal slide
												change1 = -231 + change1;
												e.currentTarget.style.left =  change1 + 'px';
												}
		})
        .on('touchend', function(e) {
		if( $(this).hasClass('leftitem') == true )
		{	
			var left = "0";
	        left = parseInt(e.currentTarget.style.left)
			if(left < -150)
			{
	     	var new_left = -231 + 'px';
			e.currentTarget.style.left = new_left;	
	   	    }
			else{
				
			$(this).removeClass('leftitem');
		    var new_left = '0px';
			e.currentTarget.style.left = new_left;		
			}			
            enable_scroll()
		}else{
			
			var left = "0";
	         left = parseInt(e.currentTarget.style.left)
			if(left < -90)
			{
	     	var new_left = -231 + 'px';
			e.currentTarget.style.left = new_left;	
			$(this).addClass('leftitem');
			var click_id = $(this).attr('data-value3');
			var news_source = $(this).attr('data-value4'); 
			e.currentTarget.style.setProperty('background-color', '#DFE3E7', 'important' );	
			$.post(ajax_path+'clickcount.php?id='+click_id + '&user_id='+EbbuUSER_ID+'&search_query_id='+SearchQueryId+'&news_source='+news_source+'&feed_conducted='+feed_conducted+'&security_token='+ security_token);
	   	    }
			else{
		    var new_left = '0px';
			e.currentTarget.style.left = new_left;		
			}			
            enable_scroll()
		}
	    });
		$('.socialicon').on('touchstart', function(e) {
		$(this).children('.image_icon').css("opacity",".6");
			}).on('touchmove',  function(e) {
		})
        .on('touchend', function(e) {
				$(this).children('.image_icon').css("opacity","1.0");
	  		 $.getScript("js/SocialSharing.js");
		 	 SocialSharing();
			var title_aaa =	$(this).attr('data-value');
			var title_linkkk = $(this).attr('data-value1');
			var media_link = $(this).attr('data-value2');
			var news_source= $(this).attr('data-value4');
			Global_share_titleee = title_aaa;
			Global_share_linkkk = title_linkkk;
		if( media_link == "twitter" )
			{
				if( ebbu_twitter == "1" ){
			window.plugins.socialsharing.shareViaTwitter("Found on @EbbuApp:  "+title_aaa, null /* img */,title_linkkk);	
				}else{
			 navigator.notification.confirm(
            'To share this article, we need access to your account.',  // message
			ontwitterconfirm,
            'Twitter',            // title
            'Cancel,Allow'          // buttonLabels
        );
	  }
	}
	else if( media_link == "facebook"  )
			{
				if( ebbu_facebook == "1" ){
						window.plugins.socialsharing.shareViaFacebook("Found via EbbuApp.com:  ", null /* img */,title_linkkk);
				}else{
						navigator.notification.confirm(
						'To share this article, we need access to your account.',  // message
						onfacebookconfirm,
						'Facebook',            // title
						'Cancel,Allow'          // buttonLabels
						);
	}
}
else if( media_link == "email"  )
{
window.plugins.socialsharing.shareViaEmail(
  'I found this article on <a href="http://www.EbbuApp.com"> EbbuApp.com </a> and thought of you. Check it out. '+'<p><a href="'+title_linkkk+'" >'+title_aaa +'</a></p>', // can contain HTML tags, but support on Android is rather limited:  http://stackoverflow.com/questions/15136480/how-to-send-html-content-with-image-through-android-default-email-client
  'Check this out...',
  null, // TO: must be null or an array
  null, // CC: must be null or an array
  null, // BCC: must be null or an array
  null // FILES: can be null, a string, or an array
		);					
	   }
    });
 });

function onfacebookconfirm(button1){
	if(button1 == 2)
	{
	    change_value = '1';
		$('#facebooklogout').css('display','none');
		$('#facebooklogged').css('display','block');
		var socialName = 'facebook';
		db.transaction( function(tx){ updatevalues(tx, change_value,socialName)}, ErrorCallBack );	
		window.plugins.socialsharing.shareViaFacebook("Found via EbbuApp.com:  "+Global_share_titleee, null /* img */,Global_share_linkkk);
	}
}
function ontwitterconfirm(button2)
{
	if(button2 == 2)
	{
			 change_value = '1';
		$('#twitterlogout').css('display','none');
		$('#twitterlogged').css('display','block');
		var socialName = 'twitter';
		db.transaction( function(tx){ updatevalues(tx, change_value,socialName)}, ErrorCallBack );	
		window.plugins.socialsharing.shareViaTwitter("Found on @EbbuApp:  "+Global_share_titleee, null /* img */,Global_share_linkkk);	
	}
}

var y;
var new_position;

$(".search_show_bar").on('click', function() {
	  show_search();
	
});


$('.showsearch').on('click', function(e) {
	show_search();
});



$('.showsearch').on('touchstart', function(e) {
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
	browser_setting();
	});
	
	
	
$('.backbutton').on('touchstart', function(e) {
$(this).children('.backimg').css("opacity",".6");
})
.on('touchmove',function(){
})
.on('touchend',function(){
$(this).children('.backimg').css("opacity","1");
});
	
	
	function successSettings(){
		
		}
	function errorSettings(err)
	{
		}
		
			 function updatevalues(tx, change_value,socialName)
			 {
				if(socialName == "twitter") 
				{ 
				 ebbu_twitter = change_value;
				 var myvalue = change_value;
				 tx.executeSql('UPDATE ebbuUser SET twitter = ? ' ,[myvalue] , successSettings , errorSettings);
				}
				else if(socialName == "facebook")
				{
				 ebbu_facebook = change_value;
				 var myvalue = change_value;
				 tx.executeSql('UPDATE ebbuUser SET facebook = ? ' ,[myvalue] , successSettings , errorSettings);
					}		
			 }
      var change_value;   
	  
	  
	  
	  
	  
	  function selectSuccess(tx,result)
	  {
		  
	
		 console.log(result.rows.item);
	   
	   var length = result.rows.length;
	  	console.log("DEMO table: " + length + " rows found.");	
		
		
		
		if(length >0)
		{


			
		
				for(var i=0; i< length ; i++)
				{
					EbbuUSER_ID = result.rows.item(i).user_id;
					ebbu_twitter= result.rows.item(i).twitter;
					
					//console.log(EbbuUSER_ID);
					ebbu_facebook= result.rows.item(i).facebook;
			//		
					
				
					}
					
					
					if( ebbu_twitter == '0' )
					{
						$('#twitterlogout').css('display','block');
						$('#twitterlogged').css('display','none');
						}else{
						$('#twitterlogout').css('display','none');
						$('#twitterlogged').css('display','block');	
							}
					if( ebbu_facebook == '0' )
					{
						$('#facebooklogout').css('display','block');
						$('#facebooklogged').css('display','none');
						}else{
						$('#facebooklogout').css('display','none');
						$('#facebooklogged').css('display','block');	
							}
						
		      }
		  
		  }
	  
	  
	function settings_page()
	{		
	
		
		 db.transaction(function(tx){ executeSql('SELECT * FROM ebbuUser ',[],selectSuccess,errorCB); });
		
		
	
	
			 $('#twitterautho').on('touchstart', function() {	
				  }).on('touchmove',function(){
					  })
				  .on('touchend',function(){
					  if( ebbu_twitter == '1' )
					  {
						  change_value = '0';
						$('#twitterlogout').css('display','block');
						$('#twitterlogged').css('display','none');
						  }
					 else{
						 change_value = '1';
						$('#twitterlogout').css('display','none');
						$('#twitterlogged').css('display','block');
						 } 
	
			var socialName = 'twitter';
			db.transaction( function(tx){ updatevalues(tx, change_value,socialName)}, ErrorCallBack );	
			 });
		 $('#facebookautho').on('touchstart', function() {	
				  }).on('touchmove',function(){})
				  .on('touchend',function(){
					  if( ebbu_facebook == '1' )
					  {
						  change_value = '0';
						$('#facebooklogout').css('display','block');
						$('#facebooklogged').css('display','none');
						  }
					 else{
						 change_value = '1';
						$('#facebooklogout').css('display','none');
						$('#facebooklogged').css('display','block');
						 } 
	//					 console.log("Change Twitter = "+ change_value);
				var socialName = 'facebook';
			db.transaction( function(tx){ updatevalues(tx, change_value,socialName)}, ErrorCallBack );	
				 });

			 
	}


var callback123 = function(buttonIndex) {
    setTimeout(function() {
		  $.getScript("js/SocialSharing.js");
		  SocialSharing();
	  if(buttonIndex == 1)
	  {
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
        'buttonLabels': ['Twitter' ,'Facebook', 'Email','Send to Reading List','Open in Safari'],
        'androidEnableCancelButton' : false, // default false
        'winphoneEnableCancelButton' : false, // default false
        'addCancelButtonWithLabel': 'Cancel',
    };
    window.plugins.actionsheet.show(options, callback);
  };
$(".search_show_bar").live("tap", function(event){
	show_search();
});
