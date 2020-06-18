$(document).ready(function() {
    var emaster = $(window);
    var page = $('html, body');
    $('select').niceSelect();


    $('.success_stories_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.slider_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.team_area_slider_nav',
        autoplay: false,
      });
      $('.team_area_slider_nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider_main',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: true,
        autoplay: true,
        centerPadding: '0px',
        dots: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },

        ]
      });



      // step form function
      $('#name_next').on('click',function(){
          $('.name_input').addClass('hide');
          $('.email_input').removeClass('hide');
          $('#step_2_number').removeClass('dissabled');
          $('#email').focus();
          $('#progress_1').addClass('active');
      })

      $('#email_next').on('click',function(){
        $('.email_input').addClass('hide');
        $('.phone_input').removeClass('hide');
        $('#phone').focus();
        $('#progress_2').addClass('active');
        $('#step_3_number').removeClass('dissabled');
      })

      $('#phone_next').on('click',function(){
        $('.phone_input').addClass('hide');
        $('.select_input').removeClass('hide');
        $('#progress_3').addClass('active');
        $('#step_4_number').removeClass('dissabled');
      })

      $('#select_next').on('click',function(){
        $('#progress_4').addClass('active');
      })


      $('#step_1_number').on('click',function(){

      })
      
      





    // $('.form_slider .owl-dot').each(function(){
    //     $(this).children('span').text($(this).index()+1);
    //     });




});