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