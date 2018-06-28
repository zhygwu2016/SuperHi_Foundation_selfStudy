
console.log('It works!');

// $('header').hide();
// $('header').show();
//$('.products').html('The products are all sold!');

$('.show-filters').on('click', function(){
  console.log('You have clicked the filter!');
  //$('.filters-list').toggle(300); //300ms

  // 1. When our navigation is expanded, collapse it
  // 2. Change text of show filters to 'show filters'
  // 3. Otherwise, if the nav is collapsedm expand it
  // 4. Change the text to say 'hide filters'
  if ($('.filters-list').is(':visible')){
    $('.filters-list').slideUp();
    $('.show-filters').text('Show Filters');
  } else {
    $('.filters-list').slideDown();
    $('.show-filters').text('Hide Filters');
  }

  // ↓↓↓ This will block the default behaviour of the # href jumping
  // to the top of the page
  return false;

});


$('.filters-list a').on('click',function(){

  //console.log($(this).data('filter'));
  //console.log($(this).attr('data-filter')); //gain the filter name
  var filter = $(this).attr('data-filter');
  console.log(filter);

  // 1. Hide all the products
  // 2. Show the products with a particular filter
  $('.product').hide();
  //$('.bags').show();
  $(filter).show();

  //first we remove all the selected class
  $('.filters-list a').removeClass('selected');
  // This will add a class name of selected to the current filters
  // link that we've clicked on
  $(this).addClass('selected');


  return false; // when click, block the link, so that we can see console when test

});
