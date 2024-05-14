(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Smooth scrolling to section
    $(".btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 0
            }, 1500, 'easeInOutExpo');
        }
    });
    
    
    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    ////////////////
    // Filter projects based on category
    function filterProjects(category) {
        $('#portfolio .col-xs-12').hide().filter(category).show();
    }

    $(document).ready(function(){
        // Show all projects by default
        filterProjects('*');

        // Handle click on filter links
        $('#filters a').click(function(){
            var category = $(this).data('filter');
            $('#filters li').removeClass('active_prot_menu');
            $(this).parent().addClass('active_prot_menu');
            filterProjects(category);
            return false;
        });
    });
    

    // Handle click event on "view details" link
    $(document).ready(function() {
        // Handle click event on "View Details" link
        $(".view-details").click(function(e) {
            e.preventDefault();
            var imageUrl = $(this).closest(".portfolio_single_content").find(".project-image").attr("src");
            var details = $(this).closest(".portfolio_single_content").find(".project-image").data("details");
            
            // Set image source and details in modal
            $("#modalImage").attr("src", imageUrl);
            $("#projectDetails").text(details);
            
            // Show the modal
            $("#detailsModal").modal("show");
        });
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        // Get the "View Details" link
        var viewDetailsLink = document.getElementById("link-icon");
    
        // Add click event listener to the link
        viewDetailsLink.addEventListener("click", function(event) {
            // Prevent the default behavior of the link (i.e., following the href attribute)
            event.preventDefault();
    
            // Get the href attribute of the link (which is the URL of portfolio-details.html)
            var portfolioDetailsUrl = viewDetailsLink.getAttribute("href");
    
            // Redirect the user to portfolio-details.html
            window.location.href = portfolioDetailsUrl;
        });
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);



AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});