$(".photos a").on("click", function (ev) {
  $(this).toggleClass("clicked");
  
  $("div.modal").fadeIn(500);
  
  var content = $(this).html()
  
  $("div.modal-content").html(content);
  
  ev.preventDefault();
});

$("div.modal-background, div.modal-close").on("click", function (ev) {
  $("div.modal").fadeOut(500);
  ev.preventDefault();
});