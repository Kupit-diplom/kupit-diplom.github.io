<?php 
$ip = $_SERVER['REMOTE_ADDR'];
$deny = file('ip.txt');
$access = 0;

	foreach($deny as $item){
		if(trim($item) == $ip) $access++;
	}
	
	if($access > 0 OR empty($ip)) {
		die("false");
	}
	else{

if ($_POST["mail"]!=''){
  die("false");
}
else{
	
require '../120images/vuz/PHPMailer-master/PHPMailerAutoload.php';
require 'config.php';

$name = substr(trim(strip_tags($_POST["name2"])),0,45);
$tel = substr(trim(strip_tags($_POST["telef1"])),0,18);
$data = date('l jS \of F Y h:i:s A');
$ip = $_SERVER['REMOTE_ADDR'];
$email = substr(trim(strip_tags($_POST["email1"])),0,18);
$doc = $_POST["doc1"];
$msg = substr(trim(strip_tags($_POST["msg"])),0,500);

$mail3 = new PHPMailer;

$mail3->isSMTP();

$mail3->Host = $__smtp['host'];
$mail3->SMTPAuth = true;
$mail3->Username = $__smtp['username']; // логин от вашей почты
$mail3->Password = $__smtp['password']; // пароль от почтового ящика
$mail3->SMTPSecure = 'ssl';
$mail3->Port = '465';

$mail3->CharSet = 'UTF-8';
$mail3->From = $__smtp['add']; // адрес почты, с которой идет отправка
$mail3->FromName = 'Сделать заявку'; // имя отправителя
$mail3->addAddress($__smtp['AddAdd']);
$mail3->addAddress($__smtp['AddAdd1']);
$mail3->addAddress($__smtp['AddAdd2']);
$mail1->addAddress($__smtp['AddAdd4']);

$mail3->isHTML(true);

$mail3->Subject = 'Сделать заявку';
$mail3->Body = "DIPMSK<br>Дата: {$data}<br>IP: {$ip}<br> Имя: {$name}<br> Телефон: {$tel}<br>Email: {$email}<br>Вид документа: {$doc}<br>Сообщение:" .nl2br($msg);
$mail3->AltBody = "DIPMSK \r\nДата: {$data} \r\n IP: {$ip} \r\n Имя: {$name} \r\n Телефон: {$tel} \r\n Email: {$email}\r\n Вид документа: {$doc}\r\n Сообщение: {$msg}";



if( $mail3->send() ){
		echo "true";
} else {
	echo "false";
}
}
}
?>
