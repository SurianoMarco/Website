<?php
$name = $_Post['name'];
$visor_email = $_Post['email'];
$message = $_Post['message'];

$email_from = 'info@marcosuriano.com';
$email_subject = "Nuovo Contatto dal Sito";

$email_body ="User Name: $name.\n". 
            "User Email: $visitor_email.\n". 
            "User Message: $message.\n";
            
    $to = "info@marcosuriano.com";

    $headers ="From: $email_form \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to, $email_subject, $email_body,$headers);
    header("Location: index.html")

?>