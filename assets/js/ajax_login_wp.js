$(function(){




	console.log("jquery is loaded "); 
 
	$("#wp-submit").click(function(e){


			// append html status here 
			$(".home-step-2-login").append('<div id="wp-custom-login-failed" style="border: 1px solid #ffb1b1;background-color: #f3e7e7;color: #e24545;display: none;text-align: center;font-size: 12px;padding: 5px;margin-top: 20px; "> Invalid username or password! </div><div id="wp-custom-login-success" style="border: 1px solid #16da06;background-color: #e8f3e7;color: #669a4d;display: none;text-align: center;font-size: 12px;padding: 5px;margin-top: 20px;">successfully logged in! </div>'); 

			// prevent form to redirect or submit
			e.preventDefault();
 
			// get data 
			// var form_data  = $("#ajax_login_wp_form").serialize(); 


			// console.log(form_data); 

			var log  = $('#user_login').val();
			var pwd  = $('#user_pass').val();
			var param = {log:log, pwd:pwd}; 

			console.log(param); 

			// trigger data to backend
		// 	$.post( "test.php", { name: "John", time: "2pm" })
  // .done(function( data ) {
  //   alert( "Data Loaded: " + data );
  // });	


  			var mail_url = $("#wp-mail-url").val(); 
  			var url = mail_url + '/wp-content/plugins/ajax-loogin-wp/includes/authenticate_login.php';

			$.post(url, param , function(response){
				// print response 
				// console.log(response);  

				var splitted = response.split("<li>");
			 	var totalSplit  = splitted.length;
			  	console.log(totalSplit); 

				if(totalSplit < 2) {  
					var user = JSON.parse(response); 
	 
					console.log(user); 
	 					
					 // // assign json response to a variable
				 	var status = user.status;  
				 	 var title = user.title;  
				 	var first_name = user.first_name;  
				   var last_name = user.last_name;  
				 	var email = user.user_email;  

				 	console.log(" email " + email); 
	 	
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
		 	

					 	// if(last_name == null) {  

					 	// 	var display_name1 = first_name.split(" "); 

					 	// 	// compose first name 
					 		
					 	// 	var fname = '';
					 	// 	var lname = ''; 


					 	// 	console.log(" length " + display_name1.length); 
					 	// 	console.log(" array " + display_name1); 
					 	// 	console.log("original fname " + first_name); 

					 	// 	if(display_name1.length > 1) {  
						 // 		for (var i = 0;  i<display_name1.length-1; i++) {
						 // 			 fname  += display_name1[i] + " "; 
						 // 		}  
						 // 		// compose last name
						 // 		 lname = display_name1[display_name1.length-1];
					 	// 	}

					 	// 	console.log(" fname final " + fname)
					 	// 	console.log(" lname final " + lname)
 
						 // 	// $("#e3ve-title").val(title); 
						 // 	$("#e3ve-first-name").val(fname); 
						 // 	$("#e3ve-last-name").val(lname); 
						 // 	$("#e3ve-email").val(email); 

					 	// } else {  
			 				// assign values to fields
						 	$("#e3ve-title").val(title); 
						 	$("#e3ve-first-name").val(first_name); 
						 	$("#e3ve-last-name").val(last_name); 
						 	$("#e3ve-email").val(email); 
					 	// }

		 				// move next slide, trigger click button
					    // $(".step-3-prev-btn").trigger('click');  
	 					 
	 					 var l = document.getElementById('proceed-btn-2');
                         l.click();
	 				}  	
	 			} else {
	 				console.log("invalid login"); 
	 				// display block
 					$("#wp-custom-login-failed").css('display', 'block'); 
 					$("#wp-custom-login-success").css('display', 'none'); 
	 			}
			}); 
	}); 









});