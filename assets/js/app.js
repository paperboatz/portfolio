
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

// ==== Responsive Navagation Drop down =====

var rnavlinks = $('.rnav__links');
var box = $('.rnav__box');

box.on('click', function(event){
  rnavlinks.fadeToggle('hidden', 'linear');
});



// ==== Active Navagation =====
// Found current path, grab last section of url
// See if it match it to href on page 
// if true && not index add class,
// if on index, then add class to projects in nav
var urlPath = window.location.pathname;
var endPath = urlPath.substring(urlPath.lastIndexOf('/') + 1 );
var link = $("a[href= '" + endPath + "']");
var baseUrl = link[0].href;
var contains = baseUrl.indexOf(urlPath);

if (contains !== -1){
  if (endPath !== 'index.html') {
    link.addClass('activelink')
  } else {
  	$("[title='Projects']").addClass('activelink')
  }
}



// ==== Thumbnail Hover =====

// Only want hover to affect one thumb at a time on mouseEnter/leave
// depending on how many thumbs there are
// we'll redefine variables for each particular one

// Problems solved... hovering over one would change the rest
// because the variables were the same
// 
// created a function that would execute on both of the thumbnails
// problem is my classes are applied to not thier particular thumbnail

var thumbcont = $('.thumbcont').children('a');

for (var i = 0; i <= thumbcont.length; i++){

  var thumbnum = thumbcont.eq(i);
  var bkg = thumbnum.find('.thumbcont__imgcont');
  var title = thumbnum.find('.headtitle');
  var border = thumbnum.find('.headborder');
  var sub = thumbnum.find('.subtitle');
  var cover = thumbnum.find('.thumb__cover');
  var hide = thumbnum.find('.infowrap');

  thumbnail(thumbnum, bkg, title, border, sub, cover, hide);

}

function thumbnail(thumbnum, bkg, title, border, sub, cover, hide){

  thumbnum.on('mouseenter', function(){

    hide.removeClass('hidden');

    // Remove class from parent, add class to child
    bkg
       .parent()
          .removeClass('bkg__ani--rev')
          .end()
          .addClass('bkg__ani');

    title
       .parent()
          .removeClass('headtitle__ani--rev')
          .end()
          .addClass('headtitle__ani');

    border
       .parent()
          .removeClass('headborder__ani--rev')
          .end()
          .addClass('headborder__ani');

    sub
      .parent()
        .removeClass('subtitle__ani--rev')
        .end()
        .addClass('subtitle__ani');

   cover
       .parent()
       .removeClass('thumb__cover--rev')
       .end()
       .addClass('thumb__cover--black');
  });

thumbnum.on('mouseleave', function(){

    // Remove animations 
    // add reverse annimations onto parent
   
    bkg
      .removeClass('bkg__ani')
      .addClass('bkg__ani--rev')
      // 
      // .parent().addClass('bkg__ani--rev')
      .end();
      // .addClass('bkg__ani--rev');

    title
      .removeClass('headtitle__ani')
      .parent().addClass('headtitle__ani--rev');
     
    border
      .removeClass('headborder__ani')
      .parent().addClass('headborder__ani--rev');
    
    sub 
      .removeClass('subtitle__ani')
      .parent().addClass('subtitle__ani--rev');

    cover
      .removeClass('subtitle__ani')
      .parent().addClass('thumb__cover--rev');
    
    //Once animation finishes, Hide it 
    setTimeout(function() {
      hide.addClass('hidden');
    }, 800);

  });
}

// ==== Email Against Spam Bots =====
$("<a href='mail" 
	+ "to:tiffcodes" 
	+ "@" 
	+ "gmail.com'>" 
	+ "Contact Me</a>").appendTo('.email');