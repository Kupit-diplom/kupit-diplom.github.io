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

if ($_POST["mail1"]!=''){
  die("false");
}
else{
	
require '../120images/vuz/PHPMailer-master/PHPMailerAutoload.php';
require 'config.php';

$name = substr(trim(strip_tags($_POST["name"])),0,16);
$data = date('l jS \of F Y h:i:s A');
$ip = $_SERVER['REMOTE_ADDR'];
$email = substr(trim(strip_tags($_POST["email"])),0,18);
$msg = substr(trim(strip_tags($_POST["message"])),0,250);

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
$mail3->FromName = 'ЗАДАЙТЕ ВОПРОС'; // имя отправителя
$mail3->addAddress($__smtp['AddAdd']);
$mail3->addAddress("vuz@safe-mail.net");
$mail3->addAddress($__smtp['AddAdd2']);

$mail3->isHTML(true);

$mail3->Subject = 'ЗАДАЙТЕ ВОПРОС';
$mail3->Body = "DIPMSK<br>Дата: {$data}<br>IP: {$ip}<br> Имя: {$name}<br> Email: {$email}<br>Сообщение:" .nl2br($msg);
$mail3->AltBody = "DIPMSK \r\nДата: {$data} \r\n IP: {$ip} \r\n Имя: {$name} \r\n Email: {$email}\r\n  Сообщение: {$msg}";



if( $mail3->send() ){
		echo "true";
} else {
	echo "false";
}
}
}
?>
