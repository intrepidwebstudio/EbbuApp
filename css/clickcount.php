<?php 

include('../include/configure.php');
include('../include/function.php');


try{

	
	$id=$_REQUEST['id'];
	
	mysql_query("update eboo_feeds set clickcount = clickcount + 1 where id='".$id."' ")or die(insertErrorLogException('application',basename(__FILE__),mysql_error()));
	
}catch(Exception $e){
	
	echo $e->getMessage();
	
		insertErrorLogException('application',basename(__FILE__),$e->getMessage());
	}
?>
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
   