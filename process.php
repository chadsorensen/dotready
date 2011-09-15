<?php
// Get Data	
$name = strip_tags($_POST['name']);
$email = strip_tags($_POST['email']);
$message = strip_tags($_POST['message']);

// Send Message
mail( "chdsorensen@gmail.com", "Contact Form Submission",
"Name: $name\nEmail: $email\n\nMessage: $message\n",
"From: Forms <forms@example.net>" );
?>