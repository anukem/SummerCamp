$(document).on('turbolinks:load', function() {

	// if javascript is enabled; enable the AJAX form else default link to view
	$('[data-link="register"]').click(function(event) {
		// prevent default linkage
		event.preventDefault();

		$('.register-form-view').slideDown();
	});

});