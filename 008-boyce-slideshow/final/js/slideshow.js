// whenever we load the page, always display the first slide
var currentSlide = 0

// here we find how many slides we have using the .length property
// this is useful because we can use it as our max slide value
var totalSlides = $('.holder div').length

// this function moves to our slide. we pass in an argument to it (slide)
// which is the number for the slide we want to go to
var moveSlide = function (slide) {
  // we are going to turn our currentSlide value into a negative vw unit
	// and add the 'vw' unit onto the end 
  var leftPosition = (-slide * 100) + 'vw'

	// pass the vw unit into our css method below
	// here we grab the holder and change it to the second slide
  $('.holder').css('left', leftPosition)
  
  var slideNumber = slide + 1
	// here we set the text for the steps using currentSlide and total nubmer
	$('.steps').text(slideNumber + ' / ' + totalSlides)
}

// 1. a function that deals with taking us to the next slide
// here we assign a function to our nextSlide variable
var nextSlide = function () {
	// increment our currentSlide value by reassigning it and incrementing it by 1
  currentSlide = currentSlide + 1
  
	// here we test to check whether the currentSlide number is greater than 
	// or equal to the numberOfSlides. If it is, we are going to set the currentSlide
	// back to zero (its initial state)
  if (currentSlide >= totalSlides) {
  	currentSlide = 0
  }
  
  moveSlide(currentSlide)
  
}

// 2. a function that deals with taking us to the previous slide

var previousSlide = function () {
	// this is identical to our nextSlide function, apart from that 
	// we are decrementing the currentSlide value (taking us back rather
	// than forwards)
  currentSlide = currentSlide - 1
  
	// if our currentSlide is less than 0, we want to set our currentSlide
	// to the last one 
  if (currentSlide < 0) {
		// we subtract 1 from our currentSlide as we are using the array index
  	currentSlide = totalSlides - 1
  } 
  
  moveSlide(currentSlide)

}

// setInterval allows us to run a function every x amount of time
var autoSlide = setInterval(function() {
	// here our nextSlide function will be run
  nextSlide()
	// runs every 3s (3000ms)
}, 3000)

// we also have setTimeout, which is the same, but runs only once

$('.next').on('click', function() {
	// this is going to cancel our autoSlide interval function
	// as the user has taken over control of the slideshow 
  clearInterval(autoSlide)
	// here we call the nextSlide function and go to the next slide
  nextSlide()
})

$('.prev').on('click', function() {
  clearInterval(autoSlide)
  previousSlide()
})

// here we set a slideNumber variable which increments by 1 because
// our array starts at 0
var slideNumber = currentSlide + 1
// here we set the text for the steps using currentSlide and total nubmer
$('.steps').text(slideNumber + ' / ' + totalSlides)