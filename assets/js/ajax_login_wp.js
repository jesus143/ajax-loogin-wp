$(function(){




	console.log("jquery is loaded "); 
 
	$("#submit_login").click(function(e){
 	
			// prevent form to redirect or submit
			e.preventDefault();
 
			// get data 
			var form_data  = $("#ajax_login_wp_form").serialize(); 


			console.log(form_data); 


			// trigger data to backend
		// 	$.post( "test.php", { name: "John", time: "2pm" })
  // .done(function( data ) {
  //   alert( "Data Loaded: " + data );
  // });	


  			var mail_url = $("#wp-mail-url").val(); 
  			var url = mail_url + '/wp-content/plugins/ajax-loogin-wp/includes/authenticate_login.php';

			$.post(url, form_data , function(response){
				// print response 
				console.log(response);  

				var user = JSON.parse(response); 
 
				 // // assign json response to a variable
			 	var status = user.status;  
			 	// var title = user.title;  
			 	var first_name = user.display_name;  
			 	// var last_name = user.last_name;  
			 	var email = user.user_email;  
 	
 				if(status == 'not found') {  
 					// use trigger not found 
 					console.log("not found here");

 					// display block
 					$("#wp-custom-login-failed").css('display', 'block'); 
 					$("#wp-custom-login-success").css('display', 'none'); 

 			 	} else {  

 					$("#wp-custom-login-success").css('display', 'block'); 
 			 		$("#wp-custom-login-failed").css('display', 'none'); 

	 				// print user info just logged in
				 	console.log(  " first_name = " + first_name +  " email = " + email)
	 	
	 				// assign values to fields
				 	// $("#e3ve-title").val(title); 
				 	$("#e3ve-first-name").val(first_name); 
				 	// $("#e3ve-last-name").val(last_name); 
				 	$("#e3ve-email").val(email); 

	 				// move next slide, trigger click button
				    $(".step-2-prev-btn").trigger('click');  
 				}  
			}); 
	}); 









});