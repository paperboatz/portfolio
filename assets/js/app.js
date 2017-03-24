
// ==== Navagation Drop down =====
// instead of hide() to initally hide the nav
// I used display: none in css, bc refreshes on page
// reload flickered 
var ulNestedList = $('.ul-nested ul');
var liNestedList = $('.ul-nested li');
var category = $('.ul-nested');

category.on('mouseenter', function(event){
  ulNestedList.slideDown(300);
});

category.on('mouseleave', function(event){
  ulNestedList.slideUp(300);
});


// ==== Active Navagation =====
// Found current path, grab last section of url
// See if it match it to href on page 
// if true, then add class, except on index page 
var urlPath = window.location.pathname;
var endPath = urlPath.substring(urlPath.lastIndexOf('/') + 1 );
var link = $("a[href= '" + endPath + "']");
var baseUrl = link[0].href;
var contains = baseUrl.indexOf(urlPath);

if (contains !== -1 && endPath !== 'index.html' ){
  link.addClass('activelink');
}


// ==== Email Against Spam Bots =====
$("<a href='mail" 
	+ "to:tiffcodes" 
	+ "@" 
	+ "gmail.com'>" 
	+ "Contact Me</a>").appendTo('.email');