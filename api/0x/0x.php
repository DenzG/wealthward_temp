<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  exit(0);
}

$chainId = $_GET['chainId'] ?? '1';
$sellToken = $_GET['sellToken'] ?? '';
$buyToken = $_GET['buyToken'] ?? '';
$sellAmount = $_GET['sellAmount'] ?? '';
$taker = $_GET['taker'] ?? '';
$slippagePercentage = $_GET['slippagePercentage'] ?? '0.5';

if (empty($sellToken) || empty($buyToken) || empty($sellAmount) || empty($taker)) {
  http_response_code(400);
  echo json_encode(['error' => 'Missing required parameters']);
  exit;
}

$curl = curl_init();
$url_path ="https://api.0x.org/swap/allowance-holder/quote?chainId={$chainId}&sellToken={$sellToken}&buyToken={$buyToken}&sellAmount={$sellAmount}&taker={$taker}&slippagePercentage={$slippagePercentage}";

curl_setopt_array($curl, array(
  CURLOPT_URL => $url_path,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    '0x-version: v2',
    '0x-api-key: 36f1e304-bf9d-40b0-a4b3-adc6a6740672'
  ),
));

$response = curl_exec($curl);
$httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
unset($curl);

if ($httpCode !== 200) {
  http_response_code($httpCode);
  echo json_encode(['error' => '0x API failed', 'code' => $httpCode]);
} else {
  echo $response;
}
?>

