$(function() {
   $('.tab-menu').click(function() {
       $('.tab-menu').removeClass('tab-menu-active');
       $(this).addClass('tab-menu-active');
   });
});

$(document).ready(function(){
  setTimeout(function(){$(".notifications").addClass("animate");}, 500);
});

$(function() {
   $('.icon-match-infos').click(function() {
       $('.icon-match-infos').addClass('hide');
       $('.icon-match-infos-close').removeClass('hide');
       $('.informations').addClass('hide');
       $('.view-icon').addClass('hide');
       $('.score-box').addClass('hide');
       $('.menu').addClass('hide');
       $('.match-infos-box').removeClass('hide');
       $('.notifications').addClass('hide');
       $('.player-line-up-content').addClass('hide');
       $('.time-line-content').addClass('hide');
       $('.match-infos-box').addClass('fadeIn');
       $('.alert-box').addClass('hide');
   });
});

$(function() {
   $('.icon-match-infos-close').click(function() {
       $('.icon-match-infos').removeClass('hide');
       $('.icon-match-infos-close').addClass('hide');
       $('.informations').removeClass('hide');
       $('.view-icon').removeClass('hide');
       $('.score-box').removeClass('hide');
       $('.menu').removeClass('hide');
       $('.match-infos-box').addClass('hide');
       $('.notifications').removeClass('hide');
       $('.player-line-up-content').removeClass('hide');
       $('.time-line-content').removeClass('hide');
       $('.alert-box').removeClass('hide');
   });
});

const element =  document.querySelector('.alert-box')
element.classList.add('animated', 'pulse')

element.addEventListener('animationend', function() {
  $('.alert-box').addClass('fadeOut');
})
