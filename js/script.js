function scrollNav() {
  $('.sidenav a').click(function(){
    $(".active").removeClass("active");
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top }, 700);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();
