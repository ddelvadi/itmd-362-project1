// Tell jQuery to give up the dollar sign
$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

document.addEventListener('DOMContentLoaded', function() {
  var submit = document.getElementById('submit');
  var name = document.getElementById('name');
  var lastname = document.getElementById('lastname');
  var email = document.getElementById('email');

  function submitClick() {
  	var nameValue = name.value.trim();
  	var lastnameValue = lastname.value.trim();
  	var emailValue = email.value.trim();

  	if (nameValue==='' || lastnameValue==='' || emailValue==='') {
      alert('One or more inputs cannot be empty');
  	}
  }
  submit.addEventListener('click', submitClick, false);
}, false);