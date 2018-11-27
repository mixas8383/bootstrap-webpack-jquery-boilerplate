import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'bootstrap';

import './scss/index.scss';

$('#alert').click(() => {
  alert('jQuery works!');
});

$('.sticky_btns button').click(function() {
  $('.sticky_btns button.active').removeClass('active');
  $(this).addClass('active');
  // $('.'+$(this).attr('id')).hide();
  $([document.documentElement, document.body]).animate(
    {
      scrollTop:
        $('.' + $(this).attr('id')).offset().top - $('.sticky').height() - 40,
    },
    500
  );
  console.log($('.' + $(this).attr('id')).offset().top);
});
$(function() {
  $('[data-toggle="popover"]').popover();
});
$('.example-popover').popover({
  container: '.sticky',
});

// Your jQuery code
$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop() + $('.sticky').height() + 220;
  // Show/hide menu on scroll
  //if (scrollDistance >= 850) {
  //		$('nav').fadeIn("fast");
  //} else {
  //		$('nav').fadeOut("fast");
  //}
  // Assign active class to nav links while scolling
  $('.lists').each(function(i) {
    if ($(this).position().top <= scrollDistance) {
      $('.sticky_btns button.active').removeClass('active');
      $('.sticky_btns button')
        .eq(i)
        .addClass('active');
    }
  });
});
if ($(window).width() > 999) {
  $('.alendar').click(function() {
    if (
      $(this)
        .closest('.list_item_in')
        .innerHeight() != 74
    ) {
      $(this)
        .closest('.list_item_in')
        .css('height', '74px');
      $(this)
        .closest('.list_item_in')
        .find('.list_item_cont_title')
        .hide();
    } else {
      $(this)
        .closest('.list_item_in')
        .css('height', 'auto');
      $(this)
        .closest('.list_item_in')
        .find('.list_item_cont_title')
        .show();
    }
  });
} else {
  $('.alendar').click(function() {
    $(this)
      .closest('.list_item_in')
      .find('.list_item_cont')
      .toggle();
  });

  $('.sticky_btns').prependTo('main');
}
