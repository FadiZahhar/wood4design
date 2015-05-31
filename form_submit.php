<?php
/*
 * Written by Fadi Nicolas Zahhar
 * Ajax calls for wordpress theme
 * pro-freelancer June 01 2015
 */
//print_r($_POST);
//session_start();
if(isset($_POST['code']) && ($_POST['code']=="#@$%#@$%#@$%") && isset($_POST['fullname']) && isset($_POST['phonenumber']) && isset($_POST['email']) && isset($_POST['message'])) {
//if(!defined('WP_PLUGIN_URL')) {
    require_once(realpath('../wpwood4design/') . '/wp-config.php');
//}
global $theme_options;
global $wpdb;
global $session;
//print_r($_POST);
//print_r($session);
$fullname = sanitize_text_field($_POST['fullname']);
$phonenumber = sanitize_text_field($_POST['phonenumber']);
$email = sanitize_text_field($_POST['email']);
$yourmsg = "Applicant Name:" . $fullname . "<br/>" .  "Applicant Email:" . $email. "<br/>" . "Applicant Phone Number:" . $phonenumber . "<br/>" . "Message:" . sanitize_text_field($_POST['message']);
$headers[] = "Content-type: text/html";
$headers[] = 'From:' . $fullname . ' <'.$email.'>';
//$headers[] = 'Cc: iluvwp@wordpress.org'; // note you can just use a simple email address
$subject = "WOOD4DESIGN - New Appointment application from ". $fullname;
$wpdb->insert( 'wp_tdhc_form', array( 'fullname' => $fullname, 'phonenumber' => $phonenumber, 'email' => $email . ":" . $fullname, 'message' => $yourmsg,'appointment'=>$checkbox) );
wp_mail( "info@wood4design.com", $subject, $yourmsg, $headers );
//print_r($_POST);
$arr = array ('message'=>'Thank you for submitting your request, we will get back to you in 48 hours');
echo json_encode($arr);
}
else {
    $arr = array ('message'=>'You can not access this code , it is secure');
	echo json_encode($arr);
}
/*EOF*/
