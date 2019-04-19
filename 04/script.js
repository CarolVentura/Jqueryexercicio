// .click()

/*$(function(){

    $('p').click(function(){
        $(this).css('background-color', '#656578')

    });

}); */

/*$(function(){

    $('p').click(function(){
        $(this).slideUp();

    });

});*/


// .dblclick()

$(function(){

    const divA = $('div:first');
    divA.dblclick(function(){
        divA.toggleClass('dbl');

    });

});