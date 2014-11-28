<?php 

include('../include/configure.php');
include('../include/function.php');


try{


	
	$query_fl=mysql_query("select * from eboo_rss where status='1' ")or die(insertErrorLogException('admin',basename(__FILE__),mysql_error()));
	
	while($row_fl=mysql_fetch_array($query_fl))
	{
		
		$select_resource=mysql_query("select publication_name,publication_image from eboo_publication where id='".$row_fl['publication_id']."' and  status='1' ")or die(insertErrorLogException('admin',basename(__FILE__),mysql_error()));
		
		$select_category=mysql_query("select category_name from eboo_category where id='".$row_fl['category_id']."' and status='1' ")or  die(insertErrorLogException('admin',basename(__FILE__),mysql_error()));
		
		if(mysql_num_rows($select_resource)>0  && mysql_num_rows($select_category)>0)
		{
				
			$fetch_resource=mysql_fetch_array($select_resource);
				
			$publication_name=$fetch_resource['publication_name'];
			$publication_image=$fetch_resource['publication_image'];
			
			
			$fetch_category=mysql_fetch_array($select_category);
			$category_name=$fetch_category['category_name'];
			
		$Feeds[]=array(
					"id" => $row_fl['id'],	 
                    "source" => $publication_name,
                    "link" => $row_fl['article_link'],
                    "title" => $row_fl['article_title'],
                    "description" => $row_fl['article_description'],
                    "sourceimage" => $publication_image,
                    "pubdate" => $row_fl['article_pubdate']
               	);	
		
                                    
	   			} //if close
		}

}catch(Exception $e){
	
		insertErrorLogException('admin',basename(__FILE__),$e->getMessage());
	}
?>

<?php 



$selectFeed=mysql_query("select * from eboo_feeds where status='1' ")or die(mysql_error());

if(mysql_num_rows($selectFeed)>0)
{
	while($rowFeed=mysql_fetch_array($selectFeed))
	{
		
		$sourcename=mysql_query(" select * from eboo_rss where    ") or die(mysql_error());
		
		
		
		
		
		}	
	
	}




?>