import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'bootstrap';

import './scss/index.scss';

$('#alert').click(() => {
  alert('jQuery works!');
});

// Your jQuery code
