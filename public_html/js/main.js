$(document).ready (function(){
    //ANIMATION

    function animation() {
        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');
            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }
    $(window).scroll(function () {
        animation();
    });
    animation();
    
    //OWL CAROUSEL
    
    if($('.our-team-slider'.length > 0))
    {
        $('.our-team-slider').owlCarousel({
            loop:true,
                    autoplay:true,
                    responsive:{
                       0:{items:1}
                    }
                    
                   
        });
        
    }
    
    //FORM VALIDATION
     $('.contact-form').validate(
            {
                hightlight: function (element) {
                    $(element).addClass('is-invalid').removeClass('is-valid');

                },
                unhighlight: function (element) {
                    $(element).addClass('is-invalid').removeClass('is-valid');

                },
                rules: {
                    name: {
                        required: true

                    },
                    email: {
                        required: true,
                        email: true
                    },

                    message: {
                        required: true


                    },

                    messages: {
                        name: {required: 'The Name* field is required'
                        },
                        email: {required: 'The Email* field is required',
                            email: 'Please provide a valid email'
                        },
                        message: {required: 'The Message* field is required'
                        }
                    },
                    errorElement: 'p',
                    errorPlacement: function (error, element) {
                        error.appendTo(element.colosest(".form-group").find(".error-msg"));
                    }



                }
                });



});
