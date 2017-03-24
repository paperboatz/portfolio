var ulNestedList = $('.ul-nested ul');
var liNestedList = $('.ul-nested li');
var category = $('.ul-nested');

	category.on('mouseenter', function(event){
	  ulNestedList.slideDown(300);
	});

	category.on('mouseleave', function(event){
	  ulNestedList.slideUp(300);
	});


// Email input against span bots
$("<a href='mail" 
	+ "to:tiffcodes" 
	+ "@" 
	+ "gmail.com'>" 
	+ "Contact Me</a>").appendTo('.email');