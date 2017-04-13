<?php   
$droot  = $_SERVER['DOCUMENT_ROOT'];  
if(al_is_localhost1()) {   
    require_once($droot . "/practice/wordpress/wp-load.php");
} else { 
    require_once($droot . "/wp-load.php"); 
	require_once($droot . "/wp-includes/user.php"); 
}

// set post request
$post     = $_REQUEST;
$username = $post['log'];
$password = $post['pwd'];
 
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
        'user_password' => $password 
    );
    $user = wp_signon( $creds, true );  
     if(!empty($user->data)) {  


        // print " id " . $user->data->ID;
        $all_meta_for_user = get_user_meta( $user->data->ID );
        // print_r( $all_meta_for_user );
        // print "ID" . $user->data->ID; 

        //   $all_meta_for_user = get_user_meta( $user->data->ID );
        // print_r( $all_meta_for_user );

        // print_r($user->data);  
        $userInfo['user_email'] = $user->data->user_email; 
        $userInfo['title'] = ''; 
        $userInfo['first_name'] = $all_meta_for_user['first_name'][0];
        $userInfo['last_name']  = $all_meta_for_user['last_name'][0];  
      
    	 return  json_encode($userInfo);
     } else {
     	return false;
     } 
}  
 
function al_is_localhost1() {
    $whitelist = array( '127.0.0.1', '::1' );
    if( in_array( $_SERVER['REMOTE_ADDR'], $whitelist) )
        return true;
}