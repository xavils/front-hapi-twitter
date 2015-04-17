// $ (document).ready(function(){

	var allQuotes=[];
	var getAllQuotes = {
	    type: 'GET',
	    url: 'http://harry-quotes-216781.apse1.nitrousbox.com:8080/quotes',
	    dataType: 'json',
	    success: function(response){
	        allQuotes = response;
	        console.log(allQuotes);
	        $('.content').text('');
	        for (var i = 0; i < allQuotes.length; i++) {
	        	var quote = allQuotes[i].quote;
	        	var author = allQuotes[i].author;
	        	$('.content').append("<tr>" +
	        		'<td class="bld">' + quote +
	        		"</td><td>" + author + "</td></tr>")
	        }
	    }
	};

	$.ajax(getAllQuotes);

	$('#addQuote').on('click', function(){
		$.ajax({
	    type: 'POST',
	    url: 'http://harry-quotes-216781.apse1.nitrousbox.com:8080/quotes',
	    data: {
	    	quote: {
	    		quote: $('#quote').val(),
	    		author: $('#author').val()
	    	}
	    },
	    dataType: 'json',
	    success: function(response){
	        $.ajax(getAllQuotes);
	    }
		});
	});

	$('#searchQuote').on('click', function(){
		var searchQuery = $('#searchQuery').val();
		$.ajax({
	    type: 'GET',
	    url: 'http://harry-quotes-216781.apse1.nitrousbox.com:8080/quotes/search/' + searchQuery,
	    dataType: 'json',
	    success: function(response){
	        searchQuotes = response;
	        for (var i = 0; i < searchQuotes.length; i++) {
	        	var quote = searchQuotes[i].quote;
	        	var author = searchQuotes[i].author;
	        	$('.query').append("<tr>" +
	        		'<td class="bld">' + quote +
	        		"</td><td>" + author + "</td></tr>")
	        }
	    }
		});
	});
// });