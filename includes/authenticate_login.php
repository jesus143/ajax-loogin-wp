<?php  
// print "<pre>"; 
// print_r($_SERVER);
// print "</pre>"; 
// exit; 
// require wordpress files 
$droot  = $_SERVER['DOCUMENT_ROOT'];  
if(al_is_localhost1()) {  
	require_once($droot . "/practice/wordpress/wp-load.php");
} else {
	require_once($droot . "/wp-load.php"); 
}

// set post request
$post     = $_REQUEST;
$username = $post['username'];
$password = $post['password'];
 
// print " user name "  . $username . '<br>';  print " password "  . $password . '<br>';
// set account login 
$userData = wpdocs_custom_login($username, $password); 
 
if($userData != false) {
	print $userData;
} else {
	print json_encode(['status'=>'not found']); 
}
 
/**
 * Perform automatic login.
 */
function wpdocs_custom_login($username, $password) {
    $creds = array(
        'user_login'    => $username,
        'user_password' => $password,
        'remember'      => true
    );
    $user = wp_signon( $creds, false ); 
     // print_r($user->data); 
     if(!empty($user->data)) {  
    	 $userData = json_encode($user->data);
    	 return $userData;
     } else {
     	return false;
     } 
}  


function al_is_localhost1() {
    $whitelist = array( '127.0.0.1', '::1' );
    if( in_array( $_SERVER['REMOTE_ADDR'], $whitelist) )
        return true;
}