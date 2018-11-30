import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'bootstrap';

import './scss/index.scss';

$('#alert').click(() => {
  alert('jQuery works!');
});

$('.sticky_btns button').click(function() {
  $('.sticky_btns button.active')
    .addClass('btn-outline-primary')
    .removeClass('active btn-primary');
  $(this).addClass('active btn-primary');

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
      $('.sticky_btns button.active')
        .addClass('btn-outline-primary')
        .removeClass('active btn-primary');
      $('.sticky_btns button')
        .eq(i)
        .removeClass('btn-outline-primary')
        .addClass('active btn-primary');
    }
  });
});
if ($(window).width() > 999) {
  $('.alendar').click(function() {
    if (
      $(this)
        .closest('.list_item_in')
        .find('.his')
        .innerHeight() != 74
    ) {
      $(this)
        .closest('.list_item_in')
        .find('.his')
        .css('height', '74px');
      $(this)
        .closest('.list_item_in')
        .find('.list_item_cont_title')
        .hide();
    } else {
      $(this)
        .closest('.list_item_in')
        .find('.his')
        .css('height', 'auto');
      $(this)
        .closest('.list_item_in')
        .find('.list_item_cont_title')
        .show();
    }
  });
} else {
  $('.alendar').click(function() {
    if (
      $(this)
        .closest('.list_item_in')
        .find('.his')
        .innerHeight() != 74
    ) {
      $(this)
        .closest('.list_item_in')
        .find('.his')
        .css('height', '74px');
      $(this)
        .closest('.list_item_in')
        .find('.list_item_cont_title')
        .hide();
    } else {
      $(this)
        .closest('.list_item_in')
        .find('.his')
        .css('height', 'auto');
      $(this)
        .closest('.list_item_in')
        .find('.list_item_cont_title')
        .show();
    }
  });

  $('.sticky_btns').prependTo('main');
}
//label animation start
$('.form-group.-animated .form-control').keyup(function() {
  if ($(this).val() != '') {
    $(this)
      .parent('.form-group')
      .addClass('-active');
  } else {
    $(this)
      .parent('.form-group')
      .removeClass('-active');
  }
});

$('.form-group.-animated .form-control').focusin(function() {
  $(this)
    .parent('.form-group')
    .addClass('-focus');
});

$('.form-group.-animated .form-control').focusout(function() {
  $(this)
    .parent('.form-group')
    .removeClass('-focus');
});
//label animation end
