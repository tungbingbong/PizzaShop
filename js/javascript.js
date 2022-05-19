$(document).ready(function() { // Code Thanh Cuon Muot Ma 
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage'], .carousel-caption a ").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

function checkLogin() {
    if ($('#name').val() == '') {
        $('#err_name').text('Retype ur name, please!').addClass('textError');
        $('#name').addClass('formError').focus();
        return false;
    } else if ($('#people').val() == '') {
        $('#err_people').text('Retype the people,again!').addClass('textError');
        $('#people').addClass('formError').focus();
        return false;
    } else if ($('#date').val() == '') {
        $('#err_date').text('Retype the date!').addClass('textError');
        $('#date').addClass('formError').focus();
        return false;
    } else if ($('#message').val() == '') {
        $('#err_message').text('retype the message!').addClass('textError');
        $('#message').addClass('formError').focus();
        return false;
    }
}

function checkValue(id) {
    if ($('#' + id).val() != '') {
        $('#err_' + id).text('');
        $('#' + id).removeClass('formError');
    } else {
        $('#err_' + id).text("You're aren't import" + id);
        $('#' + id).addClass('formError').focus();
    }
}