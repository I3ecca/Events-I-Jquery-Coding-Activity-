$(function(){

  let galleryItems = $(".gallery").find("img");

  galleryItems.css("width", "33%").css("opacity", "70%");

  galleryItems.mouseenter(function(){
    $(this).stop().fadeTo(200, 1);
  })
  galleryItems.mouseleave(function(){
    $(this).stop().fadeTo(200, .7);
  })

  galleryItems.click(function(){
    let source = $(this).attr("src");
    let image = $("<img>").attr("src", source).css("width", "100%");

    $(".lightbox").empty().append(image).fadeIn(500);
  })

  // Mini Challenge! Make it so the light box goes away when you click on the lightbox.  

  //This is my answer which works well 

  // $(".lightbox").click(function(){
  //   $(this).empty().css("display", "none");
  // })

  // The instructor solves it like this:

  $(".lightbox").click(function(){
    $(this).stop().fadeOut(200);
  })


  // Both ways would work, with the instructor's way fading out rather than my way which is instant. 
  //To make the instructor's answer faster, I just set the time to 200ms. 

 
});