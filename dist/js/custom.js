$(document).ready(function () {
    $('.portfolio-slider').owlCarousel({
        loop: false,
        center: false,
        margin: 100,
        autoplay: true,
        items: 2,
        dots: false,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            991: {
                items: 2,
                nav: false
            },
            1024: {
                items: 2,
                nav: false
            }
        }
    });

    $('.testimonial').owlCarousel({
        loop: true,
        center: true,
        autoplay: true,
        items: 1,
        dots: false,
        margin: 10,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            991: {
                items: 1,
                nav: false
            },
            1024: {
                items: 1,
                nav: false
            }
        }
    });

    $('.trusted-logos').owlCarousel({
        loop: false,
        items: 4,
        dots: false,
        autoplay: false,
        autoplayHoverPause: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            991: {
                items: 3,
                nav: false
            },
            1024: {
                items: 4,
                nav: false
            }
        }
    });



    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header').addClass("sticky");
        }
        else {
            $('header').removeClass("sticky");
        }
    });
    // copyrights Year Auto-update
    function newDate() {
        return new Date().getFullYear();
    }
    document.onload = document.getElementById("autodate").innerHTML = + newDate();

});

$(document).ready(function () {
    // Handle form submit
    $('form').on('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        // Clear previous errors
        $('.error-text').remove();

        // Validate required text inputs (except optional FBR)
        $(this).find('input[type="text"], input[type="email"], input[type="number"]').each(function () {
            const isOptional = $(this).attr('placeholder')?.includes('FBR');
            if (!isOptional) {
                if ($(this).val().trim() === '') {
                    showError($(this), '*This field is required.');
                    isValid = false;
                }
            }
        });

        // Validate checkboxes
        if (!$('#consent').is(':checked')) {
            showError($('#consent').closest('.form-group'), 'Please accept the setup fee terms.');
            isValid = false;
        }

        if (!$('#policy').is(':checked')) {
            showError($('#policy').closest('.form-group'), 'You must agree to the Privacy Policy & Terms.');
            isValid = false;
        }

        if (isValid) {
            console.log('Form submitted successfully!');
            this.submit(); // Or AJAX
        }
    });

    // ✅ Live error removal on typing
    $('input').on('input change', function () {
        $(this).next('.error-text').remove();
        $(this).closest('.form-group').find('.error-text').remove();
    });

    // ✅ Restrict: Name fields — only letters and spaces
    $('input[placeholder="Enter your name"], input[placeholder="Full Name"]').on('keypress', function (e) {
        const regex = /^[A-Za-z\s]+$/;
        const char = String.fromCharCode(e.which);
        if (!regex.test(char)) {
            e.preventDefault();
        }
    });

    // ✅ Restrict: Email — block '+' and invalid chars on keydown
    $('input[type="email"]').on('keydown', function (e) {
        if (e.key === '+') {
            e.preventDefault();
        }
    });

    // ✅ Restrict: Number fields — only digits allowed
    $('input[type="number"]').on('keydown', function (e) {
        // Allow: backspace, tab, arrows, delete
        if (
            e.key === 'Backspace' || e.key === 'Tab' || e.key === 'ArrowLeft' ||
            e.key === 'ArrowRight' || e.key === 'Delete'
        ) {
            return;
        }

        // Block: +, -, e, E, ., and non-numeric keys
        if (['+', '-', 'e', 'E', '.'].includes(e.key) || isNaN(Number(e.key))) {
            e.preventDefault();
        }
    });

    // Helper: Show error message
    function showError(element, message) {
        const error = $('<div class="error-text text-danger mt-1 fs-9"></div>').text(message);
        if (element.is('input')) {
            error.insertAfter(element);
        } else {
            element.append(error);
        }
    }
});
$(document).ready(function () {
    const $container = $('#confetti-container');
    if ($container.length === 0) return;

    const totalConfetti = 16;
    const colors = ['#df1f2c', '#000'];

    for (let i = 0; i < totalConfetti; i++) {
        const p = i / totalConfetti;
        const random = Math.random();
        const color = colors[i % colors.length];

        const $confetti = $('<div></div>')
            .addClass('confetti')
            .css({
                '--i': i,
                '--p': p,
                '--random': random,
                '--color': color
            });

        $container.append($confetti);
    } const $btn = $('#backToTop');

    // Show button after scrolling 200px
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $btn.fadeIn();
        } else {
            $btn.fadeOut();
        }
    });

    // Smooth scroll to top on click
    $btn.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600); // 600ms = smooth speed
    });
});