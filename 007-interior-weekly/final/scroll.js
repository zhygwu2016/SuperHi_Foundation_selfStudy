$(document).on("scroll", function () {
  
  var pixels = $(document).scrollTop();
  
  $("div.progress div.bar").html(pixels + " pixels down")
    
  if (pixels < 50) {
    $("header").removeClass("hide")
  } else {
    $("header").addClass("hide")
  }
  
  if (pixels < 600) {
    $("body").css("background-color", "#ffffff")
  } else if (pixels < 1400) {
    $("body").css("background-color", "#a29c97")
  } else if (pixels < 2200) {
    $("body").css("background-color", "#d9dfe4")
  } else if (pixels < 3000) {
    $("body").css("background-color", "#fff0f0")
  } else {
    $("body").css("background-color", "#cdccc7")
  }
  
  var windowHeight = $(window).height()
  var documentHeight = $(document).height()
  var difference = documentHeight - windowHeight
  
  var percentage = 100 * pixels / difference
  
  $("div.progress div.bar").css("width", percentage + "%")
  
})