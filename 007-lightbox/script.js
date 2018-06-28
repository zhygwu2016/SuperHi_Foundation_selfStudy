
// 1. when clicked, show the modal
// 2. we wnat to wrab the image that's just been clicked, and show it inside the modal
// 3. when click the close button, hide the modal
// 4. our link doesn't follow the default href

$('.photos a').on("click", function(){

  console.log( $(this).html() );

  var currentImage = $(this).html();
  // here we grab the modal and manually set the heml to be the current image
  $('.modal-content').html(currentImage);

  // $('.modal').show();
  $('.modal').fadeIn(200);

  // block the default action of following the href attribute
  return false;

});

$('.modal-close, .modal-background').on('click', function(){
  $('.modal').fadeOut(200);
  return false;
});
