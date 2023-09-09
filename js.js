$(document).ready(function () {
    ScrollReveal().reveal('.display-1', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        delay: 1000,
        easing: 'ease-in-out',
        reset: false,
    })
    ScrollReveal().reveal('.display-2', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 1000,
        easing: 'ease-in-out',
        reset: false,
    })
    ScrollReveal().reveal('.btn', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 0,
        easing: 'ease-in-out',
        reset: true,
    })
})

setTimeout(function () {
    $('main').css({ opacity: '1' })
}, 10000)

let jaExecutou = false

function f1() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'b',
            quiz2: 'c',
            quiz3: 'b',
            quiz4: 'b',
            quiz5: 'a',
            quiz6: 'b',
            quiz7: 'a',
            quiz8: 'c',
            quiz9: 'b',
            quiz10: 'a',
        }
        var acertos = 0
        var erros = 0
        for (var e in respostas) {
            var respostaUsuario = document.querySelector(`input[name="${e}"]:checked`)

            if (respostaUsuario.value === respostas[e]) {
                $(`input[name='${e}']:checked`).next().addClass('resposta').append('✔️')
                acertos += 1
            } else {
                $(`input[name='${e}']:checked`).next().addClass('erro').append('❌')
                erros += 1
            }
        }
        $('.btn').after(`<p class="resultado">${acertos} <span class="resposta">✔️</span> ${erros} <span class="erro">❌</span></p>`)
        $('.resultado').animate({opacity: '1'}, 2000)
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        })
    }
    jaExecutou = true
}