$(function () {
    let quantidade = $('.testemunhos ul').length;
    let limite = (quantidade * 336) * -1;
    let largura = limite + 336;
    let view_largura = $('.testemunha-centro').width();

    $('.testemunhos').css('width', limite * -1);

    $('.teste').html(limite)

    $(".testemunha-direita").click(function () {
        posicao_atual = $('.testemunhos').position().left;
        nova_posicao = posicao_atual - view_largura;
        if (limite < posicao_atual - view_largura) {
            $('.testemunhos').animate({ left: nova_posicao }, 1000);

        }

    })
    $(".testemunha-esquerda").click(function () {
        posicao_atual = $('.testemunhos').position().left;
        if (posicao_atual + view_largura <= 0) {
            nova_posicao = posicao_atual + view_largura;
            $('.testemunhos').animate({ left: -1010 }, 1000);
        }

    })

    $('.testemunhos ul:eq(0)').css('opacity', 0)
    $('.testemunhos ul:eq(1)').css('opacity', 0)
    $('.testemunhos ul:eq(2)').css('opacity', 0)

    $('.domingo-perfeito').waypoint(function(direcao){
        if (direcao == "down") {
            $('.folha1').addClass('animate__animated animate__fadeInUp')
            $('.folha3').addClass('animate__animated animate__fadeInUp')
            $('.camarao').addClass('animate__animated animate__fadeInUp animate__slow')
            $('.tomate').addClass('animate__animated animate__fadeInUp animate__slow')
            $('.folha2').addClass('animate__animated animate__fadeInUp animate__slow')
            $('.queijo').addClass('animate__animated animate__fadeInUp animate__slow')
        }
        if (direcao == "up") {
            $('.folha1').removeClass('animate__animated animate__fadeInUp')
            $('.folha3').removeClass('animate__animated animate__fadeInUp')
            $('.camarao').removeClass('animate__animated animate__fadeInUp animate__slow')
            $('.tomate').removeClass('animate__animated animate__fadeInUp animate__slow')
            $('.folha2').removeClass('animate__animated animate__fadeInUp animate__slow')
            $('.queijo').removeClass('animate__animated animate__fadeInUp animate__slow') 
        }
    })

}, {
    offset: '450px;'
})

$('.pizza').waypoint(function(direcao) {
    if (direcao == 'down') {
            $('.pizza p').addClass('animate__animated animate__fadeInUp')
            $('.pizza .pizza-opcoes').addClass('animate__animated animate__fadeInUp animate__slow')
    }

    if (direcao == "up") {
        $('.pizza p').removeClass('animate__animated animate__fadeInUp')
        $('.pizza .pizza-opcoes').removeClass('animate__animated animate__fadeInUp animate__slow')
    }
}, {
    offset: '450px;'
})

$('.testemunha').waypoint(function(direcao){
    if (direcao == "down") {
        $('.testemunhos ul:eq(0)').addClass('animate__animated animate__fadeInUp animate__slow')
        $('.testemunhos ul:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow')
        $('.testemunhos ul:eq(2)').addClass('animate__animated animate__fadeInUp animate__slow')
    }

    if (direcao == 'up') {
        $('.testemunhos ul:eq(0)').removeClass('animate__animated animate__fadeInUp animate__slow')
        $('.testemunhos ul:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow')
        $('.testemunhos ul:eq(2)').removeClass('animate__animated animate__fadeInUp animate__slow')
    }
}, {
    offset: '400px;' 
})

$('.transicao-testemunha-plana').waypoint(function(direcao){
    if (direcao == 'down') {
        $('.decoracao1').addClass('animate__animated animate__fadeInLeft animate__slow')
        $('.decoracao2').addClass('animate__animated animate__fadeIn animate__slow')
        $('.decoracao3').addClass('animate__animated animate__fadeInRight animate__slow')
    }else {

        $('.decoracao1').removeClass('animate__animated animate__fadeInLeft animate__slow')
        $('.decoracao2').removeClass('animate__animated animate__fadeIn animate__slow')
        $('.decoracao3').removeClass('animate__animated animate__fadeInRight animate__slow')
    }    

},{
    offset: '800px;'
}) 


$('.plano-principal').waypoint(function(direcao){
    if (direcao == "down") {
      $('.planos:eq(0)').addClass('animate__animated animate__fadeInLeft animate__slow')  
      $('.planos:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow')  
      $('.planos:eq(2)').addClass('animate__animated animate__fadeInRight animate__slow')  
    }else {
         $('.planos:eq(0)').removeClass('animate__animated animate__fadeInLeft animate__slow')  
         $('.planos:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow')  
        $('.planos:eq(2)').removeClass('animate__animated animate__fadeInRight animate__slow')
    }
}, {
    offset: '500px;'
})




