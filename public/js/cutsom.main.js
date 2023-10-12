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

$(document).ready(function () {

  $(".openNav").click(function () {

    $("#mySidenav").css("left", "0px");

    $('body').addClass('mobileNav-active');

  });

  $(".closeNav").click(function () {

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



$(document).ready(function () {
  //custom button for homepage
  $(".share-btn").click(function (e) {
    $('.networks-5').not($(this).next(".networks-5")).each(function () {
      $(this).removeClass("active");
    });

    $(this).next(".networks-5").toggleClass("active");
  });
});


$(document).ready(function () {
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
        items: 2
      },

      1024: {
        items: 2
      },

      1366: {
        items: 3
      }
    }
  });
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

$(document).ready(function () {
  $(".owl-carousel-1").owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    nav: true,
    responsive: {
      0: {
        dots: true,
        items: 1
      },
      600: {
        dots: true,
        items: 2
      },
      1024: {
        items: 2
      },
      1366: {
        dots: false,
        items: 2
      }
    }
  });
});

$(document).ready(function () { 
  $(".owl-carousel-2").owlCarousel({
    margin: 0,
    stagePadding: 22,
    loop: true,
    nav: true,
    responsive: {
      0: {
        margin: 12,
        items: 2
      },
      600: {
        margin: 12,
        items: 3
      },
      1024: {
        items: 4
      },
      1366: {
        items: 4
      }
    }
  });
});
$(document).ready(function () {
  $(".owl-carousel-3").owlCarousel({
    margin: 0,
    stagePadding: 22,
    loop: true,
    nav: true,
    responsive: {
      0: {
        margin: 12,
        items: 2
      },
      600: {
        margin: 12,
        items: 3
      },
      1024: {
        items: 4
      },
      1366: {
        items: 5
      }
    }
  });
});
$(document).ready(function () {
  $(".owl-carousel-4").owlCarousel({
    margin: 0,
    stagePadding: 22,
    loop: true,
    nav: true,
    responsive: {
      0: {
        margin: 12,
        items: 2
      },
      600: {
        margin: 12,
        items: 2
      },
      1024: {
        items: 3
      },
      1366: {
        stagePadding: 40,
        loop:false,
        margin:2,
        nav:false,
        items:3
      }
    }
  });
});
$(document).ready(function () {
  $(".owl-carousel-5").owlCarousel({
    margin: 0,
    stagePadding: 50,
    loop: true,
    nav: true,
    responsive: {
      0: {
        dots: true,
        items: 1
      },
      600: {
        dots: true,
        items: 1
      },
      1024: {
        items: 2
      },
      1366: {
        stagePadding: 250,
        loop:false,
        margin:50,
        nav:false,
        items:2
      }
    }
  });
});

$(document).ready(function () {
  $('.cart-button').each(function () {
    const cartButton = $(this);
    const dropdownButton = cartButton.find('.cart-button');
    const productOptions = cartButton.find('.dropdown-options');
    const selectedOption = $('<div class="selected-option"><i class="fas fa-check"></i></div>');
    dropdownButton.append(selectedOption);
    let itemSelected = false;
    dropdownButton.click(function () {
      if (!itemSelected) {
        productOptions.toggle();
      }
    });
    productOptions.on('click', 'li', function () {
      const selectedText = $(this).text();
      dropdownButton.text('Added to Cart');
      dropdownButton.addClass('item-selected');
      productOptions.hide();
      selectedOption.show();
      itemSelected = true;
    });
  });
});



$(document).ready(function () {
  // Add a click event listener to each menu item
  $('.site-menu-root-item').on('click', function (e) {
    // Prevent the default behavior of links
    e.preventDefault();
    // Get the parent's ID
    var parentId = $(this).attr('id');
    // Check if the clicked item is already active
    if (!$(this).hasClass('active')) {
      // Remove 'active' class from all menu items and subitems
      $('.site-menu-root-item, .site-menu-sub-item, .site-menu-grand-item').removeClass('active');
      $('.site-menu-sub, .site-menu-grand').removeClass('site-menu-sub-active site-menu-grand-active');
    }
    // Toggle the 'active' class for the clicked menu item
    $(this).toggleClass('active');
    // Check if the parent is active
    if ($(this).hasClass('active')) {
      // Add the 'site-menu-sub-active' class to related subitems
      $('.site-menu-sub.' + parentId).addClass('site-menu-sub-active');
      // $('.site-menu-sub.' + parentId).find('.back-level').addClass('back-active');
    } else {
      // Remove the 'site-menu-sub-active' class from related subitems
      $('.site-menu-sub.' + parentId).removeClass('site-menu-sub-active');
      // $('.site-menu-sub.' + parentId).find('.back-level').removeClass('back-active');
    }
    // If this is a 1st-level menu item, remove 'active' class from siblings
    if ($(this).hasClass('site-menu-root-item')) {
      $(this).siblings('.site-menu-root-item').removeClass('active');
    }
    // Prevent click events on third-level items from propagating to their parents
    if ($(this).hasClass('site-menu-sub-item') || $(this).hasClass('site-menu-grand-item')) {
      e.stopPropagation();
    }
  });
  // Handle click events for third-level menu items separately
  $('.site-menu-sub-item').on('click', function (e) {
    // Prevent the default behavior of links
    e.preventDefault();
    // Toggle the 'active' class for the clicked menu item
    $(this).toggleClass('active');
    // Remove 'active' class from siblings
    $(this).siblings('.site-menu-sub-item').removeClass('active');
  });
  // Handle clicks on the "Toggle Sidebar" button
  $('#sidebarCollapse').on('click', function () {
    // Toggle sidebar by changing the left property
    $('.site-sidenav-menu').toggleClass('active');
    $('.overlay').toggleClass('active');
    // Toggle the aria-expanded attribute for accessibility
    // $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
  // Handle the click event for the close button
  $('#dismiss, .overlay').on('click', function () {
    // Hide the sidebar when the close button is clicked
    $('.site-sidenav-menu').removeClass('active');
    $('.overlay').removeClass('active');

    // Reset all menus and classes
    resetMenus();
  });
  // Function to reset all menus and classes
  function resetMenus() {
    $('.site-menu-root-item, .site-menu-sub-item, .site-menu-grand-item').removeClass('active');
    $('.site-menu-sub, .site-menu-grand').removeClass('site-menu-sub-active site-menu-grand-active');
  }

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

