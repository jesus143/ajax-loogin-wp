<?php  
/*
Plugin Name: Ajax Login Wp
Plugin URI:
Description:  This will trigger login via ajax with wordpress login
Author: Jesus Erwin Suarez
Version: 1
Author URI:  
*/ 
 add_action('wp_head', 'hook_javascript_style');
 
add_shortcode("ajax_login_wp", "ajax_login_wp_func");

function hook_javascript_style() {
    ?>
     	<input type="hidden" value="<?php print get_site_url(); ?>" id='wp-mail-url' /> 
<!-- 	<script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>   -->
	<script src="<?php print get_site_url(); ?>/wp-content/plugins/ajax-loogin-wp/assets/js/ajax_login_wp.js" > </script>
  
 
    <?php
}

function ajax_login_wp_func() {  
	?> 
 	  
		<h3> Login</h3>

		<div class="home-step-2-login">  
			<form action="#" method="post" name="ajax_login_wp" id="ajax_login_wp_form" > 
				<label>Username:</label><br>
				<input type="text" name="log" id="user_login" />
				<br><br>
				<label>Password :</label> <br><br>
				<input type="password" name="pwd" id="user_pass" />
				<br> 
				<input type="submit" name="submit" id="wp-submit" />   
				<!-- <div id="wp-custom-login-failed" style="border: 1px solid #ffb1b1;background-color: #f3e7e7;color: #e24545;display: none;text-align: center;font-size: 12px;padding: 5px;margin-top: 20px; "> 	
					Invalid, login information!
				</div>  
				<div id="wp-custom-login-success" style="border: 1px solid #16da06;background-color: #e8f3e7;color: #669a4d;display: none;text-align: center;font-size: 12px;padding: 5px;margin-top: 20px;"> 	
					successfully logged in!
				</div>    -->
			</form>
		</div>
	<?php 
}



