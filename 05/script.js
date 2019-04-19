$(function(){

 $('p')
 .mouseup(function(){

    $(this).append("<span style='color:#f00;'> Subiiiiiiu </span>");
 })
 .mousedown(function(){

    $(this).append("<span style= 'color:#00f;'> Desceeeeeeeu </span>");
 });


});