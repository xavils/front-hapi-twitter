$ (document).ready(function(){

	$('#signUpButton').on('click', function(){
		$.ajax({
	    type: 'POST',
	    url: 'http://localhost:3000/signup',
	    data: {
	    	users: {
	    		email: $('#newEmail').val(),
	    		username: $('#newUserName').val(),
	    		password: $('#newPassword').val()
	    	}
	    },
	    dataType: 'json',
	    success: function(response){
	      alert("Good Job");
	    }
		});
	});

	$('#signInButton').on('click', function(){
		$.ajax({
	    type: 'POST',
	    url: 'http://localhost:3000/sessions',
	    data: {
	    	user: {
	    		username: $('#userName').val(),
	    		password: $('#password').val()
	    	}
	    },
	    xhrFields: {
	      withCredentials: true
	   	},
	    dataType: 'json',
	    success: function(response){
	      alert("Good Job");
	      console.log(response)
	    }
		});
	});

});