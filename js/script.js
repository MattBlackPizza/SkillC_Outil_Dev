$(function() {
   $('.tab-menu').click(function() {
       $('.tab-menu').addClass('tab-menu-active');
       $(this).removeClass('tab-menu-active');
   });
});

$(document).ready(function(){
  setTimeout(function(){$(".notifications").addClass("animate");}, 500);
});
