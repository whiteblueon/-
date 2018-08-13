<meta charset="utf-8">


<?php 
	foreach($blogs as $value){
?>
<h3>标题:<?php echo $value->title;?></h3>
<li>时间:<?php echo $value->time?></li>
<p>内容:<?php echo $value->content?></p>
<hr />

<?php 
	}
?>