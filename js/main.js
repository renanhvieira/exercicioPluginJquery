$(document).ready(function(){
    $('#carousel-imagens').slick({
    autoplay:true
    });

    $('.menu-hamburger').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(__) _____-____'
    })

    $('#cpf').mask('000.000.000-00',{
        placeholder: '000.000.000-00'
    })

    $('#cep').mask('00.000.000',{
        placeholder: '00.000-000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }

        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        messages: {
            email: 'Por favor, insira seu e-mail'
        },
        messages: {
            telefone: 'Por favor, insira seu telefone'
        },
        submitHandler: function(form){
           alert("Sua requisição foi enviada para análise, iremos te retornar em breve");
           form.reset();
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })


})