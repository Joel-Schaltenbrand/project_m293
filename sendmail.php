<?php
    $to = "info@joelschaltenbrand.ch";
    $name = $_POST["vorname"]+" "+$_POST["nachname"];
    $email_body = $_POST["text"];
    $email_subject = "Kontaktformular von $name";
	mail($to,$email_subject,$email_body);
?>
