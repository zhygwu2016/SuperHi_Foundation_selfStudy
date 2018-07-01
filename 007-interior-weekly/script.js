
// 1. When we scroll, we want to run a function
// 2. We want to figure out how far down the page we have scrolled
// 3. We want to display the pixels we've scrolled inside of our .progress div

// 'document' is a javascript keyword that refers to the entire html page
$(document).on('scroll', function(){

  var pixelsFromTop = $(document).scrollTop();
  // the scrollTop method gives us a pixel value for how far it is to the top of the page
  //$('.progress').text(pixelsFromTop + ' pixels from top');
  //console.log(pixelsFromTop);

  if(pixelsFromTop > 50){
    $('header').addClass('hidden');
  }else{
    $('header').removeClass('hidden');
  }

  //change background color
  // < 600px #ffffff
  // < 1400px #a29c97
  // < 2200px #d9dfe4
  // < 3000px #fff0f0
  // otherwise #cdcccc7

 if(pixelsFromTop < 600){
     $('body').css('background-color', '#ffffff');
 } else if(pixelsFromTop < 1400){
     $('body').css('background-color', '#a29c97');
 } else if(pixelsFromTop < 2200){
    $('body').css('background-color', '#d9dfe4');
} else if(pixelsFromTop < 3000){
    $('body').css('background-color', '#fff0f0');
} else {
   $('body').css('background-color', '#cdcccc7');
}

  var documentHeight = $(document).height();
  var windowHeight = $(window).height();
  //console.log(windowHeight);
  //console.log(documentHeight);
  // must have <!DOCTYPE html> in html file, or windowHeight will equals documentHeight!!!
  // https://stackoverflow.com/questions/12103208/jquery-window-height-is-returning-the-document-height

  var difference = documentHeight - windowHeight;
  var percentage = 100 * ( pixelsFromTop / difference );
  //console.log(percentage);
  $('.bar').css('width', percentage + '%');

});
