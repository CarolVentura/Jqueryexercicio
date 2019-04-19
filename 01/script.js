// Inicialização DOM
//$(document).ready(function(){
    //aqui é o escopo que vamos trabalhar
//    alert('DOM is ready!')
//});

// Inicialização on load

/*$(window).load('',function(){

    alert('os elementos das página já estão carregados!');

}); */

/*$(window).load('https://image.redbull.com/rbcom/010/2016-01-28/1331773493514_2/0010/1/1500/1000/1/rinha-de-monstrinhos-pra-crian%C3%A7as-isso-%C3%A9-pok%C3%A9mon.jpg', function(){
    alert('Tudo pronto e carregadinho');
});*/


// Função de seleção e alteração do css em bloco
/*
$('h2').ready(function(){

 $('h2').css( 'color', '#3d138b');
 $('h2').css( 'font-size', '32px');
 $('h2').css( 'text-align', 'center');
 $('h2').text('Carol ama CSS');

});*/


// Função de seleção e alteração do css inline

/* $(document).ready(function(){
$('h2').css('color', '#3d138b').css( 'font-size', '32px').css( 'text-align', 'center').text('Carol ama CSS');
}); */

// Função de seleção e alteração do css concatenado




// Seleção por Seletor, Classe ou ID

/* $(document).ready(function(){

    $('h2')
    .css ({color:'#3d138b', fontSize: '32px', textAlign:'center'})
    .text ('Estamos fritando modificando o DOM com o Jquery');
    $('#infoTitle')
    .css ({color:'#3d138b', fontSize: '32px', textAlign:'center'});
    
    $('.link-legal')
    .css('text-decoration', 'none');
    $('a')
    .css('text-decoration', 'none');
    
}); 


// Múltiplas Seleções


$(document).ready(function(){

    $('h1, #coollink, p')
    .css({padding:'15px', color:'#d32794'})
    .hide()
    .delay('3000')
    .fadeIn('slow')
    .text('=)')
    .click(function(){
        $('body')
    })
     
});
*/

// Seleção por Seletor, Classe ou ID

$(document).ready(function(){

    $('h2')
    .css({color: '#3d158b', fontSize: '40px', textAlign: 'center'})
    .text('estamos aprendendo como modificar o dom usando jquery');
$('#infoTitle')  
    .css({color:'#3d338b', fontSize:'10px', textAlign:'center'});
$('.link-legal')
    .css('text-decoration','none');    

});

// Múltiplas Seleções

$(document).ready(function(){

    $('h1, #coolLink, p')
        .css({padding:'15px', color:'#d32794'})
        .hide()
        .delay('1000')
        .fadeIn('slow')
        .text(':)')
        .click(function(){ 
            $('body').css('background-color','#C30')
            $('h1').css('color', '#fff');
            $(this).slideUp();

        });

});
