// Slider Start



var slideIndex = 1;

showDivs(slideIndex);



var slideIndex = 0;



var myVar;



carousel();



function plusDivs(n) {

    showDivs(slideIndex += n);

}



function currentDiv(n) {

    showDivs(slideIndex = n);

}



function myFunction() {

    myVar = setTimeout(carousel, 6000);

}



function myStopFunction() {

    clearTimeout(myVar);

}



function showDivs(n) {

    if ($(".mySlides").length) {

        var i;

        var x = document.getElementsByClassName("mySlides");

        var dots = document.getElementsByClassName("demo");

        if (n > x.length) {
            slideIndex = 1
        }

        if (n < 1) {
            slideIndex = x.length
        }

        for (i = 0; i < x.length; i++) {

            x[i].style.display = "none";

        }

        for (i = 0; i < dots.length; i++) {

            dots[i].className = dots[i].className.replace(" w3-white", "");

        }

        x[slideIndex - 1].style.display = "block";

        dots[slideIndex - 1].className += " w3-white";



        myStopFunction();

        myFunction();

    }



}



function carousel() {

    var dots = document.getElementsByClassName("demo");

    var i;

    if ($(".mySlides").length) {

        var x = document.getElementsByClassName("mySlides");

        for (i = 0; i < x.length; i++) {

            x[i].style.display = "none";

        }



        slideIndex++;

        if (slideIndex > x.length) {
            slideIndex = 1
        }

        x[slideIndex - 1].style.display = "block";



        for (i = 0; i < dots.length; i++) {

            dots[i].className = dots[i].className.replace(" w3-white", "");

        }



        dots[slideIndex - 1].className += " w3-white";



        myStopFunction();

        myFunction();

    }



}



// Start Mobile Side Nav

$(document).ready(function() {

    $(".openNav").click(function() {

        $("#mySidenav").css("left", "0px");

        $('body').addClass('mobileNav-active');

    });

    $(".closeNav").click(function() {

        $("#mySidenav").css("left", "-285px");

        $('body').removeClass('mobileNav-active');

    });

});



// Slider End



/* When the user clicks on the button, 

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        toggle between hiding and showing the dropdown content */

function filterdropdown() {

    document.getElementById("filter_drop").classList.toggle("show");

}


    
$( document ).ready(function() {
    //custom button for homepage
     $( ".share-btn" ).click(function(e) {
         $('.networks-5').not($(this).next( ".networks-5" )).each(function(){
            $(this).removeClass("active");
         });
     
            $(this).next( ".networks-5" ).toggleClass( "active" );
    });   
});



jQuery("#carousel").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items: 6
    }
  }
});

jQuery("#carousel-second").owlCarousel({
    autoplay: false,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 6
      }
    }
  });

  
      var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }



    var acc = document.getElementsByClassName("accordion1");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
    

  
$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    stagePadding: 450,
    items: 1,
    margin: 10,
    loop: true,
    nav: true
  });
});


// Close the dropdown if the user clicks outside of it

// window.onclick = function(event) {

//     if (!event.target.matches('.dropbtn')) {

//         var dropdowns = document.getElementsByClassName("dropdown-content");

//         var i;

//         for (i = 0; i < dropdowns.length; i++) {

//             var openDropdown = dropdowns[i];

//             if (openDropdown.classList.contains('show')) {

//                 openDropdown.classList.remove('show');

//             }

//         }

//     }

// }

