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

  
})

