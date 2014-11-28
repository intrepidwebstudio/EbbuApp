		
		$('.socialicon').on('touchstart', function(e) {
		//console.log('touch started');	
		$(this).children('.image_icon').css("opacity",".6");
	//	console.log("staart Poistion = "+ y);
			}).on('touchmove',  function(e) {
		})
        .on('touchend', function(e) {
				//console.log('touch_end');
				$(this).children('.image_icon').css("opacity","1.0");
	  		 $.getScript("js/SocialSharing.js");
		 	 SocialSharing();
				
			var title_aaa =	$(this).attr('data-value');
			var title_linkkk = $(this).attr('data-value1');
			var media_link = $(this).attr('data-value2');
			
			
		//	console.log("media LINK ="+ media_link);
			
			//com.apple.social.[facebook | twitter | sinaweibo | tencentweibo
			
			if( media_link == "twitter" )
			{
				if( eboo_twitter == "1" ){
			window.plugins.socialsharing.shareViaTwitter("Found this article via GetEboo.com:  "+title_aaa, null /* img */,title_linkkk);	
				}else{
					
			 navigator.notification.confirm(
            'Allow Twitter to share ?',  // message
			ontwitterconfirm,
            'Twitter',            // title
            'Cancel,Allow'          // buttonLabels
        );
			
					
				}
				}
			else if( media_link == "facebook"  )
			{
				
				if( eboo_facebook == "1" ){
			window.plugins.socialsharing.shareViaFacebook("Found this article via GetEboo.com:  "+title_aaa, null /* img */,title_linkkk);
				}else{
					
  navigator.notification.confirm(
            'Allow Facebook to share ?',  // message
			onfacebookconfirm,
            'Facebook',            // title
            'Cancel,Allow'          // buttonLabels
        );
					
					
					}
				
				
				
				}
			else if( media_link == "email"  )
			{
window.plugins.socialsharing.shareViaEmail(
  title_aaa +'<br>'+title_linkkk, // can contain HTML tags, but support on Android is rather limited:  http://stackoverflow.com/questions/15136480/how-to-send-html-content-with-image-through-android-default-email-client
  'Check out this article',
null, // TO: must be null or an array
  null, // CC: must be null or an array
  null, // BCC: must be null or an array
  null // FILES: can be null, a string, or an array
  
);
				
		//	window.plugins.socialsharing.shareViaEmail(title_aaa , null /* img */,title_linkkk );
				}
				
			else if( media_link == "tumblr") 
			{
				
				
			if(eboo_tumblr== "1")	
			{
				
			Global_share_titleee = title_aaa;
			Global_share_linkkk = title_linkkk;
		//	console.log('article_title='+Global_share_titleee+'&article_link='+encodeURI(Global_share_linkkk));
	        navigator.notification.confirm(
            title_aaa,  // message
			OnconfirmTumblr,
            'Tumblr',            // title
            'Cancel,Post'          // buttonLabels
        );
		
			}else{
				
				 $('#tumblr_login').trigger('click');
				 				
				
				}
					
			}
			else if( media_link == "linkedin")
			  { 
		
		
		if( eboo_linkedin == "1" )
		{
			Global_share_titleee = title_aaa;
			Global_share_linkkk = title_linkkk;
		//	console.log('article_title='+Global_share_titleee+'&article_link='+encodeURI(Global_share_linkkk));
	        navigator.notification.confirm(
            title_aaa,  // message
			OnconfirmLinkedin,
            'LinkedIn',            // title
            'Cancel,Post'          // buttonLabels
        );
		}else{
			
				 $('#linkedin_login').trigger('click');

			
			}
	   }	
    });


 

function onfacebookconfirm(button1){
	if(button1 == 2)
	{
			 change_value = '1';
		$('#facebooklogout').css('display','none');
		$('#facebooklogged').css('display','block');

		var socialName = 'facebook';
		db.transaction( function(tx){ updatevalues(tx, change_value,socialName)}, ErrorCallBack );	
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
	}
	
	
	}

function OnconfirmLinkedin(button3)
{
	
 if( button3 == 2 )
	{
	   $.support.cors = true;
	   console.log('article_title='+Global_share_titleee+'&article_link='+encodeURI(Global_share_linkkk));
	   $.post('http://www.safelearners.com/oauth/mysqli_offline_access_to_linkedin.php?linkedin_user_id='+EbooUSER_ID+'&article_title='+Global_share_titleee+'&article_link='+encodeURI(Global_share_linkkk) , 
	   							function(response){
									
									result_variable = response;
									
									console.log('RESULT = '+ JSON.stringify(result_variable));
									console.log("status = "+ result_variable.status);
								 if( result_variable.status == 'success')
								 {
//beep can be included later									navigator.notification.alert('');
								 }else{
							//	navigator.notification.alert('Please Login to Linkedin from settings page '); 
									 }
				});
		}
}
function OnconfirmTumblr(button4)
{
 if( button4 == 2 )
	{
	   $.support.cors = true;
	   console.log('article_title='+Global_share_titleee+'&article_link='+encodeURI(Global_share_linkkk));
	   $.post('http://www.safelearners.com/oauth/mysqli_offline_access_to_tumblr.php?tumblr_user_id='+EbooUSER_ID+'&article_title='+Global_share_titleee+'&article_link='+encodeURI(Global_share_linkkk) , 
	   							function(response){
									console.log('RESULT = '+ JSON.stringify(response));
									console.log("status = "+ response.status);
								 if( response.status== 'success')
								 {
//beep can be included later									navigator.notification.alert('');
								 }else{
							//	navigator.notification.alert('Please Login to Tumblr from settings page '); 
									 }
				});
		}
}





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
	



//db.transaction(updatesettings, errorCB_settings);



	
	
	function successSettings(){
		
		
	//	alert("successsssss");
		}
	function errorSettings(err)
	{
		
	//	alert("ERRORR = "+err.message);
		
		}
		
		
			 function updatevalues(tx, change_value,socialName)
			 {
				 
				 
				 
				if(socialName == "twitter") 
				{ 
				 eboo_twitter = change_value;
				 console.log("my values = "+eboo_twitter);
				 var myvalue = change_value;
				 tx.executeSql('UPDATE ebooUser SET twitter = ? ' ,[myvalue] , successSettings , errorSettings);
				}
				else if(socialName == "tumblr")
				{
	
				 eboo_tumblr = change_value;
				 console.log("my values = "+eboo_tumblr);
				 var myvalue = change_value;
				 tx.executeSql('UPDATE ebooUser SET tumblr = ? ' ,[myvalue] , successSettings , errorSettings);
									
					}
				else if(socialName == "linkedin")
				{
				 eboo_linkedin = change_value;
				 console.log("my values = "+eboo_linkedin);
				 var myvalue = change_value;
				 tx.executeSql('UPDATE ebooUser SET linkedin = ? ' ,[myvalue] , successSettings , errorSettings);
				
					}
				else if(socialName == "facebook")
				{
					
				 eboo_facebook = change_value;
				 console.log("my values = "+eboo_facebook);
				 var myvalue = change_value;
				 tx.executeSql('UPDATE ebooUser SET facebook = ? ' ,[myvalue] , successSettings , errorSettings);
	
					
					}		
				
				
				
				
				
			 }
		
		
		
      var change_value;   
	  
	  
	  
	  
	  
	  
	  
	  
	function settings_page()
	{		
	
				
			 $('#twitterautho').on('touchstart', function() {	
				  }).on('touchmove',function(){
					  })
				  .on('touchend',function(){
					  if( eboo_twitter == '1' )
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
	//					 console.log("Change Twitter = "+ change_value);
	
				var socialName = 'twitter';
	
			db.transaction( function(tx){ updatevalues(tx, change_value,socialName)}, ErrorCallBack );	
			 });
			 
			 
		 $('#facebookautho').on('touchstart', function() {	
				  
				  
				  }).on('touchmove',function(){})
				  .on('touchend',function(){

					  if( eboo_facebook == '1' )
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

				
				
				
					
							
			 $('#tumblrautho').on('touchstart', function() {	
				  
				  
				  }).on('touchmove',function(){})
				  .on('touchend',function(){
							
							
	 			if( eboo_tumblr == '1' )
				  {
						  change_value = '0';
						  
						$('#tumblrlogout').css('display','block');
						$('#tumblrlogged').css('display','none');
						
						
						
						
				var socialName = 'tumblr';
	
			db.transaction( function(tx){ updatevalues(tx, change_value,socialName)}, ErrorCallBack );	
	
						
				  }
				 else{
						 $('#tumblr_login').trigger('click');
					 } 
								
			  });	
							
							
							
							
							
							
							
							
							
							
							
							
					
				 $('#linkedinautho').on('touchstart', function() {	
				  
				  
				  }).on('touchmove',function(){})
				  .on('touchend',function(){
				 
				if( eboo_linkedin == '1' )
					  {
						  change_value = '0';
						$('#linkedinlogout').css('display','block');
						$('#linkedinlogged').css('display','none');
						
						
						
				var socialName = 'linkedin';
	
			db.transaction( function(tx){ updatevalues(tx, change_value,socialName)}, ErrorCallBack );	
	
						
						
						  }
					 else{
						 
						 
						 $('#linkedin_login').trigger('click');
						 
						 
						 } 
	//					 console.log("Change Twitter = "+ change_value);
				 
                 
						
				 });
				 
				 
				 
				 
				 
				 
				 
					
		
				 
   			
				

				
				
				
	}





var callback123 = function(buttonIndex) {
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

