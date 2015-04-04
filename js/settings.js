
//var imagepath = 'http://ebbu.kurinchilion.com/';  			
//var ajax_path = 'http://ebbu.kurinchilion.com/app/';	

var imagepath = 'http://192.168.1.29/ebbu/';  			
var ajax_path = 'http://192.168.1.29/ebbu/app/';	

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
var selected_article=0;
var selected_article_id=0;
var slected_source_name;
var	selected_category_id=0;
var	selected_publication_id=0;
var global_rating=0;   
var feedData;
var feed_conducted=0; 
var user_time = 0;
var user_active = 0;
var global_article_title='';	
var global_article_link='';
var Global_share_titleee ='';
var Global_share_linkkk ='';
var last_search='';		
var	shownrssarticle=0;
var	showntwitterarticle=0;
var	ebbu_twitter;
var	ebbu_facebook;
var front_page_search='';		

var screenName='';
var loadscreen=0;
var source_viewed=0;
var source_limit=28;

var publication_source_id=0; 
var selected_source=0;

var singlecategory=0;


        var iabRef = null;
	    function iabLoadStart(event) {
        }
	   function iabLoadStop(event) {
		}
        function iabClose(event) {
          iabRef.removeEventListener('loadstart', iabLoadStart);
          iabRef.removeEventListener('loadstop', iabLoadStop);
          iabRef.removeEventListener('exit', iabClose);
          iabRef.removeEventListener('share', iabClose);
		  iabRef.close();
        }
        function iabShare(event){
        }
        function navigateTo(url,click_id){
			console.log(url);
			iabRef = window.open(url, '_blank','toolbarposition=bottom,location=no,presentationstyle=formsheet,closebuttoncaption=Close');//presentationstyle: Set to pagesheet, formsheet or fullscreen 
			$.support.cors = true;
			var news_source=$('#id'+click_id).attr('data-value4');
			console.log('data-value4='+news_source);
	        $('#id'+click_id).attr('style', 'background-color:#DFE3E7 !important');
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