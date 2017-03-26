Building Portfolio in progress


function thumbnail(){

  soleThumb.on('mouseenter', function(){

    infoWrap.removeClass('hidden');

    // Remove class from parent, add class to child
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

  soleThumb.on('mouseleave', function(){

    // Remove animations 
    // add reverse annimations onto parent
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
      infoWrap.addClass('hidden');
    }, 800);

  });
}