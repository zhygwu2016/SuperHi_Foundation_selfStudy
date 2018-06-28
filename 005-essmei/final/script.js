$("span.toggle-filters").on("click", function () {
  
  // check what is currently happening
  if ($("nav.filters").is(":visible")) {
    // if filters are hidden, show them and change text
    $("nav.filters").slideDown()
    $("span.toggle-filters").text("Hide filters")
  } else {
    // if filters are shown, hide them and change text
    $("nav.filters").slideUp()
    $("span.toggle-filters").text("Show filters")
  } 
  
})