<?php
// Get Data	
$name = strip_tags($_POST['emailName']);
$email = strip_tags($_POST['emailFrom']);
$url = strip_tags($_POST['emailURL']);
$message = strip_tags($_POST['emailMessage']);

// Send Message
mail( "chdsorensen@gmail.com", "Contact Form Submission",
"Name: $name\nEmail: $email\n Site: $url\n\nMessage: $message\n",
"From: Chad Sorensen dot Com" );
?>