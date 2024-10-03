$(document).ready(function(){
  $("img").click(function(){
     var img=$(this).attr('src');
       $("#show-img").attr('src',img);
       $("#imgmodal").modal('show');
  });
});


// Initialization for ES Users
import { Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Ripple });



$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 }
      }
  });
});