import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'bootstrap';

import './scss/index.scss';

$('#alert').click(() => {
  alert('jQuery works!');
});

$('.category-menu_cont h2').click(function() {
  $(this)
    .parent()
    .toggleClass('active');
});

// Your jQuery code
