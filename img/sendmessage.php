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
		
require '../120images/vuz/PHPMailer-master/PHPMailerAutoload.php';
require 'config.php';

$tel = substr(trim(strip_tags($_POST["telef"])),0,18);
$time = $_POST["time1"];
$data = date('l jS \of F Y h:i:s A');
$ip = $_SERVER['REMOTE_ADDR'];
	
$mail1 = new PHPMailer;

$mail1->isSMTP();

$mail1->Host = $__smtp['host'];
$mail1->SMTPAuth = true;
$mail1->Username = $__smtp['username']; // логин от вашей почты
$mail1->Password = $__smtp['password']; // пароль от почтового ящика
$mail1->SMTPSecure = 'ssl';
$mail1->Port = '465';

$mail1->CharSet = 'UTF-8';
$mail1->From = $__smtp['add']; // адрес почты, с которой идет отправка
$mail1->FromName = 'DIPMSK'; // имя отправителя
$mail1->addAddress($__smtp['AddAdd']);
$mail1->addAddress($__smtp['AddAdd1']);
$mail1->addAddress($__smtp['AddAdd2']);
$mail1->addAddress($__smtp['AddAdd4']);

$mail1->isHTML(true);

$mail1->Subject = 'Заказ';
$mail1->Body = "Заказ<br>Дата: {$data}<br>IP: {$ip}<br> Телефон: {$tel}";
$mail1->AltBody = "Заказ \r\nДата: {$data} \r\n IP: {$ip} \r\n Телефон: {$tel}";

if( $mail1->send() ){
		echo "true";
} else {
	echo "false";
}
}
?>
