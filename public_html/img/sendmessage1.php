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

$name = substr(trim(strip_tags($_POST["name"])),0,16);
$tel = substr(trim(strip_tags($_POST["tel"])),0,19);

$data = date('l jS \of F Y h:i:s A');
$ip = $_SERVER['REMOTE_ADDR'];

$mail2 = new PHPMailer;

$mail2->isSMTP();

$mail2->Host = $__smtp['host'];
$mail2->SMTPAuth = true;
$mail2->Username = $__smtp['username']; // логин от вашей почты
$mail2->Password = $__smtp['password']; // пароль от почтового ящика
$mail2->SMTPSecure = 'ssl';
$mail2->Port = '465';

$mail2->CharSet = 'UTF-8';
$mail2->From = $__smtp['add']; // адрес почты, с которой идет отправка
$mail2->FromName = 'DIPMSK'; // имя отправителя
$mail2->addAddress($__smtp['AddAdd']);
$mail2->addCC($__smtp['AddAdd1']);
$mail2->addCC($__smtp['AddAdd2']);
$mail2->addCC($__smtp['AddAdd4']);

$mail2->isHTML(true);

$mail2->Subject = 'Помогите выбрать';
$mail2->Body = "Помогите выбрать<br>Дата: {$data}<br>IP: {$ip}<br> Телефон: {$tel}";
$mail2->AltBody = "Помогите выбрать \r\nДата: {$data} \r\n IP: {$ip} \r\n Телефон: {$tel}";



if( $mail2->send() ){
		echo "true";
} else {
	echo "false";
}
}
?>
