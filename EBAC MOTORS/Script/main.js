$(document).ready(function(){
    $('#carousel').slick({
        autoplay:true,
        arrows: false
    })
    //script menu hamburguer para ficar alternando quando clicarmos no menu
    $(".menu-hamburguer").click(function(){
        $("nav").slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });
    
    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            veiculoInteresse: {
                required: false,
            },
            mensagem: {
                required: true,
            }

        },
        messages: {
            nome: 'Este campo é obrigatório'
        },
        submitHandler: function(form){
            alert(`formulário enviado! `)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} Campos Incorretos!`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})