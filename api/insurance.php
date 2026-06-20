<?php

declare(strict_types=1);

require_once __DIR__ . '/helpers/cors.php';
// Set CORS for local Angular dev and enforce JSON responses
setCorsHeaders('http://localhost:4200');
// setCorsHeaders('https://sparksci.in');
// Handle OPTIONS preflight automatically
handlePreflight();
// Require POST for this endpoint
requireMethod('POST');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// require 'vendor/autoload.php'; // Composer
require __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/helpers/validation.php';
// OR if manual
// require 'phpmailer/src/Exception.php';
// require 'phpmailer/src/PHPMailer.php';
// require 'phpmailer/src/SMTP.php';


// 🔹 Read JSON Body
$req_body = json_decode(file_get_contents('php://input'), true);

if (!$req_body) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Invalid JSON data"
    ]);
    exit;
}

// 🔹 Validation Rules (matching Angular FormBuilder)
$validationRules = [
    'fullName' => ['required' => true, 'type' => 'string', 'minLength' => 2, 'maxLength' => 100],
    'model' => ['required' => true, 'type' => 'string', 'minLength' => 2, 'maxLength' => 100],
    'date' => ['required' => true, 'type' => 'string', 'minLength' => 2, 'maxLength' => 100],
    'email' => ['required' => true, 'type' => 'email'],
    'mobileNumber' => ['required' => true, 'type' => 'phone', 'pattern' => '/^[\+]?[0-9\s\-()]{10,20}$/'],
    'message' => ['required' => false, 'type' => 'string', 'maxLength' => 5000],
];

// 🔹 Validate Form Data
$errors = validateFormData($req_body, $validationRules);

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode([
        'status' => 'error',
        'errors' => $errors
    ]);
    exit;
}

// 🔹 Sanitize Valid Data
$fullName     = sanitizeInput($req_body['fullName'] ?? '', 'string');
$model        = sanitizeInput($req_body['model'] ?? '', 'string');
$date         = sanitizeInput($req_body['date'] ?? '', 'string');
$email        = sanitizeInput($req_body['email'] ?? '', 'email');
$mobileNumber = sanitizeInput($req_body['mobileNumber'] ?? '', 'phone');
$message      = sanitizeInput($req_body['message'] ?? '', 'string');

// 🔹 Load Email Template
$templatePath = __DIR__ . '/templates/insurance.html';
if (!file_exists($templatePath)) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Email template not found'
    ]);
    exit;
}

$template = file_get_contents($templatePath);

// 🔹 Replace Template Variables
$body = str_replace(
    ['{{fullName}}', '{{model}}', '{{date}}', '{{email}}', '{{mobileNumber}}', '{{message}}'],
    [$fullName, $model, $date, $email, $mobileNumber, nl2br($message)],
    $template
);

$mail = new PHPMailer(true);

try {
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';       // SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'checkbox.webd@gmail.com'; // SMTP email
    $mail->Password   = 'mffddndveadfcnux';    // App password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('checkbox.webd@gmail.com', 'Kaysons Insurance Request');
    $mail->addAddress('checkbox.webd@gmail.com');

    // Email Content
    $mail->isHTML(true);
    $mail->Subject = 'Kaysons Insurance Request';
    $mail->Body    = $body;

    $mail->send();
    http_response_code(200);
    echo json_encode(['status' => 'success', 'message' => 'Thank you for contacting us. Your form has been submitted successfully. <br/> Our team will review your request and reach out to you soon']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $mail->ErrorInfo]);
}
