<?php 

include('../include/configure.php');
include('../include/function.php');


try{

	$search_value=mysql_real_escape_string($_REQUEST['q']);
	
	$yesterday=date('Y-m-d',strtotime("-2 days"));
	$today=date('Y-m-d');

	
	
$query_feed_link=mysql_query("select * from eboo_feeds where status='1' and article_title like '%$search_value%' and date(article_pubdate) between '".$yesterday."' and '".$today."'  order by clickcount desc ")or die(insertErrorLogException('application',basename(__FILE__),mysql_error()));


if(mysql_num_rows($query_feed_link)>0)
		{
	
	while($fetch_feed=mysql_fetch_array($query_feed_link))
	{ 
	
		$select_rss_link=mysql_query("select * from eboo_rss where id='".$fetch_feed['rss_link_id']."' and status='1' ")or die(insertErrorLogException('application',basename(__FILE__),mysql_error()));
		
		
		if(mysql_num_rows($select_rss_link)>0){
			$F_id=mysql_fetch_array($select_rss_link);
			
	  $select_resource=mysql_query("select * from eboo_publication where id='".$F_id['publication_id']."' ")or die(insertErrorLogException('application',basename(__FILE__),mysql_error()));
	  
	  $select_category=mysql_query("select * from eboo_category where id='".$F_id['category_id']."' ")or die(insertErrorLogException('application',basename(__FILE__),mysql_error()));
	  
	  
	  if(mysql_num_rows($select_resource)>0 && mysql_num_rows($select_category)>0)
	  {
		  $fetch_resource=mysql_fetch_array($select_resource);
		  $publication_name=$fetch_resource['publication_name'];
		  $publication_image=$fetch_resource['publication_image'];
		  
		  $fetch_category=mysql_fetch_array($select_category);
		  $category_name=$fetch_category['category_name'];
	
	//$dto = \DateTime::createFromFormat(\DateTime::RSS,$fetch_feed['article_pubdate']);
//	$formattedDate = $dto->format('h:i');

	
	
	
$Feeds[]=array( "id" => $fetch_feed['id'],	 
				"source" => $publication_name,
				"article_link" => $fetch_feed['article_link'],
				"title" => $fetch_feed['article_title'],
				"description" => $fetch_feed['article_description'],
				"sourceimage" => $publication_image,
				"pubdate" =>  date('M d,Y',strtotime($fetch_feed['article_pubdate']))
			);	
						
 
		  
}
		
	}// if close for rss link select
		
		 ?>
        
		<?php 
		}//while close
		
		
		$data=array("Feeds"=>$Feeds , "FeedStatus"=>'success');
		
	}//if close
		
	else{
		
		$data=array("FeedStatus"=>'fail');
		
		}



	echo json_encode($data);


}catch(Exception $e){
	
	echo $e->getMessage();
	
		insertErrorLogException('application',basename(__FILE__),$e->getMessage());
	}
?>
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
   