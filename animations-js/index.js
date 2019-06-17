$(document).ready(function() {
    $('.secret').hide();

    $('.change').on('mouseenter', function() {
        console.log('Hello');
        $(this).addClass('reveal');
    });

    $('.reveal-secret').on('mouseenter', function() {
        $(this).addClass('black-text');
    });

    $('.reveal-secret').on('click', function() {
        $('.tiles').hide()
    });

});