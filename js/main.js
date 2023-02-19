"use strict"
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


  //--------------------------Lazyyyyyyyyyyyyyyyyyy----------------------------------------
  var dropdown = document.getElementsByClassName("dropbtn-over");
  var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

$(function(){
    $('.vk-slider__block').slick({
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1
     });  
  })
