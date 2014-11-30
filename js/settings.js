// JavaScript Document
  



	var feedData;

   var imagepath = 'http://www.safelearners.com/eboo/';
   var ajax_path = 'http://www.safelearners.com/eboo/app/';
   
   var security_token =543219588865478555;
   
   
   var SearchQueryId;
   
   var EbooUSER_ID;
   
   var feed_conducted=0; 
	
   var user_time = 0;

   var user_active = 0;

   var global_article_title='';	
	var global_article_link='';
	
	var Global_share_titleee ='';
	var Global_share_linkkk ='';
			
	
	var pageCount = 0;
var contentCount = 10;

var last_search;


var search_pageCount = 0;
var search_contentCount = 10;
		
		
	
	//*************************************** settings complete here ***************************************
	

var	eboo_twitter;
var	eboo_tumblr;
var	eboo_linkedin;
var	eboo_facebook;		
	
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
			
		  iabRef = window.open(url, '_blank', 'toolbarposition=bottom,location=no,presentationstyle=formsheet,closebuttoncaption=close,backgroundcolor=red');//presentationstyle: Set to pagesheet, formsheet or fullscreen 
	      $.support.cors = true;
		  this_id.style.setProperty( 'background-color', '#DFE3E7', 'important' );
	  	  $.post(ajax_path+'clickcount.php?id='+click_id + '&user_id='+EbooUSER_ID+'&search_query_id='+SearchQueryId+'&feed_conducted='+feed_conducted+'&security_token = '+ security_token);
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
	


