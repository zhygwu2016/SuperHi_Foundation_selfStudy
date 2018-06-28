//$('.holder').css('left','-100vw');

// setInterval allows us to run a function every x amount of timeout
// we also have setTimeout which is the same, but runs only once

//whenever load the page, always display the firse slideshow
var currentSlide = 0;


// here we figure out how many slides we have, using .length property
var totalSlides = $('.holder div').length;

// here we set the text for the steps using currentSlide and total number
var slideNumber = currentSlide + 1;
$('.steps').text(slideNumber + ' / ' + totalSlides);

var moveSlide = function(slide){
  // we are going to turn our currentSlide value into a new unit
  var leftPosition = (- slide * 100) + 'vw';
  // pass the vw unit into our css method below
  // here we grab the holder and change it to the second slide
  // $('.holder').css('left','-100vw');
  $('.holder').css('left',leftPosition);

  // here we set the text for the steps using currentSlide and total number
  var slideNumber = slide + 1;
  $('.steps').text(slideNumber + ' / ' + totalSlides);
};


// 1. a function that deals with taking us to the next slide
// here we assign a function to our nextSlide variable
var nextSlide = function(){
  // 1. increment our currentSlide value
  currentSlide = currentSlide + 1;

  // here we test to check whether the currentSlide is greater than or equal to the number of slideso
  // if it is, we are going to set the currentSlide back to zero
  if(currentSlide >= totalSlides){
    currentSlide = 0;
  }

  moveSlide(currentSlide);
  // // 2. we are going to turn our currentSlide value into a new unit
  // var leftPosition = (- currentSlide * 100) + 'vw';
  // // 3. pass the vw unit into our css method below
  // // here we grab the holder and change it to the second slide
  // // $('.holder').css('left','-100vw');
  // $('.holder').css('left',leftPosition);
  //
  // // here we set the text for the steps using currentSlide and total number
  // var slideNumber = currentSlide + 1;
  // $('.steps').text(slideNumber + ' / ' + totalSlides);
};

// 2. a function that deals with taking us to the previous slide
var previousSlide = function(){
  currentSlide = currentSlide - 1;

  // if the currentSlide is less than zero, we set our currentSlide to the last once

  if(currentSlide<0){
    // we subtract 1 from our currentSlide as we are using the array index
    currentSlide = totalSlides - 1;
  }

  moveSlide(currentSlide);
};


var autoSlide = setInterval(function(){
  //console.log('It works!');
  //here our nextSlide function will be run
  nextSlide();
},3000); //every 3s (3000 ms)


$('.next').on('click', function(){
  // this is going to cancel our autoSlide interval function
  // when user has taken over control of the slidesow
  clearInterval(autoSlide);
  nextSlide();
});

$('.prev').on('click', function(){
  clearInterval(autoSlide);
  previousSlide();
});

 

// whenever an event occurs in js we can also capture all the data that comes along with inspect
$('body').on('keydown', function(event){
  //here we are grabbing the keyCode of the key that we've just pressed down on the keyboard
  var keyCode = event.keyCode;
  if(keyCode == 37 ){ // 37 is keycode of left arrow
    clearInterval(autoSlide);
    previousSlide();
  }
  if(keyCode == 39 ){
    clearInterval(autoSlide);
    nextSlide();
  }
  //console.log(event.keyCode);
});
