// JavaScript Document
  
//*************************************** settings start here here *************************************** 
// var imagepath = 'http://www.safelearners.com/ebbu/';  				 //change to this    http://www.domainname.com/      (no need of /ebbu if using direct domain)
 //var ajax_path = 'http://www.safelearners.com/ebbu/app/';			// change to this 	http://www.domainname.com/app    (no need of /ebbu if using direct domain)
 
 var imagepath = '192.168.1.4/ebbu/';  	
 var ajax_path = '192.168.1.4/ebbu/app/';	
 
 
 var pageCount = 0;
 var contentCount = 10;

var search_pageCount = 0;
var search_contentCount = 10;
//*************************************** settings complete here ***************************************

var new_skip_rss_count=0;	
var new_skip_tweet_count=0;

  var security_token=543219588865478555;

   var SearchQueryId;
   
   var EbbuUSER_ID;
   
	var feedData;
   var feed_conducted=0; 
	
   var user_time = 0;

   var user_active = 0;

   var global_article_title='';	
	var global_article_link='';
	
	var Global_share_titleee ='';
	var Global_share_linkkk ='';
	var last_search;		
	

		
		
	
	
	

var	ebbu_twitter;


var	ebbu_facebook;		
	
	        // Global InAppBrowser reference
        var iabRef = null;
	    function iabLoadStart(event) {
			
		//	StatusBar.backgroundColorByHexString("#FFF");
			
		//	window.plugins.spinnerDialog.show();
//			$('#loaderScreen').show();	
        }
	   function iabLoadStop(event) {
		   
	//	   	window.plugins.spinnerDialog.hide();
//			$('#loaderScreen').hide();
		}
        function iabClose(event) {
          iabRef.removeEventListener('loadstart', iabLoadStart);
          iabRef.removeEventListener('loadstop', iabLoadStop);
          iabRef.removeEventListener('exit', iabClose);
          iabRef.removeEventListener('share', iabClose);
		  iabRef.close();
        }
        function iabShare(event){
          //  alert('SHARE:'+event.type);
         //   iabRef.removeEventListener('loadstart', iabLoadStart);
          //  iabRef.removeEventListener('loadstop', iabLoadStop);
           // iabRef.removeEventListener('exit', iabClose);
           // iabRef.removeEventListener('share', iabClose);
        }
        function navigateTo(url,click_id,this_id,article_share_title){
			
			console.log(url);
			
		  iabRef = window.open(url, '_blank','toolbarposition=bottom,location=no,presentationstyle=formsheet,closebuttoncaption=Close');//presentationstyle: Set to pagesheet, formsheet or fullscreen 
	      $.support.cors = true;
		  var news_source=$(this_id).attr('data-value4');
		  console.log('data-value4='+news_source);
		  this_id.style.setProperty( 'background-color', '#DFE3E7', 'important' );
	  	  $.post(ajax_path+'clickcount.php?id='+click_id + '&user_id='+EbbuUSER_ID+'&search_query_id='+SearchQueryId+'&feed_conducted='+feed_conducted+'&news_source='+news_source+'&security_token='+security_token);
			iabRef.addEventListener('exit', iabClose);
            iabRef.addEventListener('share', iabShare);
            iabRef.addEventListener('loadstart', iabLoadStart);
            iabRef.addEventListener('loadstop', iabLoadStop);

        }
		
		
function browser_setting()
	{	
        $(document).bind( 'mobileinit', function(){
		
                         $.mobile.loader.prototype.options.text ="";
                         $.mobile.loader.prototype.options.textVisible = false;
                         $.mobile.loader.prototype.options.theme ="d";
                         $.mobile.loader.prototype.options.textonly = false;
                         $.mobile.loader.prototype.options.html ="<img src='../loader.png'/>";
                         $.mobile.allowCrossDomainPages = true;
                         });
	}
	
	
	
function hideLoaderScreen(){	

setTimeout( function (){ $('.loaderScreen').hide(); },500);		
}