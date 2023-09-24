$(document).ready(function () {
    ScrollReveal().reveal('.foto', {
        origin: 'top',
        distance: '50px',
        duration: 1000,
        delay: 1000,
        easing: 'ease-in-out',
        reset: false,
    })
    /*ScrollReveal().reveal('.display-1', {
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
    })*/
    ScrollReveal().reveal('.mover', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 0,
        easing: 'ease-in-out',
        reset: true,
    })
    ScrollReveal().reveal('.voltar', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 0,
        easing: 'ease-in-out',
        reset: false,
    })
})

setTimeout(function () {
    $('main').css({ opacity: '1' })
}, 500)

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
function f2() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'b',
            quiz2: 'a',
            quiz3: 'b',
            quiz4: 'c',
            quiz5: 'a',
            quiz6: 'c',
            quiz7: 'b',
            quiz8: 'c',
            quiz9: 'c',
            quiz10: 'b',
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
function f3() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'b',
            quiz2: 'b',
            quiz3: 'c',
            quiz4: 'c',
            quiz5: 'b',
            quiz6: 'b',
            quiz7: 'b',
            quiz8: 'c',
            quiz9: 'a',
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
function f4() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'b',
            quiz2: 'b',
            quiz3: 'c',
            quiz4: 'b',
            quiz5: 'a',
            quiz6: 'c',
            quiz7: 'b',
            quiz8: 'c',
            quiz9: 'b',
            quiz10: 'c',
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
function f5() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'b',
            quiz2: 'a',
            quiz3: 'c',
            quiz4: 'a',
            quiz5: 'c',
            quiz6: 'c',
            quiz7: 'c',
            quiz8: 'c',
            quiz9: 'c',
            quiz10: 'b',
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
function f6() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'a',
            quiz2: 'b',
            quiz3: 'a',
            quiz4: 'c',
            quiz5: 'b',
            quiz6: 'c',
            quiz7: 'b',
            quiz8: 'c',
            quiz9: 'b',
            quiz10: 'c',
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
function f7() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'c',
            quiz2: 'b',
            quiz3: 'c',
            quiz4: 'b',
            quiz5: 'b',
            quiz6: 'a',
            quiz7: 'c',
            quiz8: 'b',
            quiz9: 'c',
            quiz10: 'b',
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
function f8() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'c',
            quiz2: 'b',
            quiz3: 'b',
            quiz4: 'a',
            quiz5: 'a',
            quiz6: 'c',
            quiz7: 'c',
            quiz8: 'b',
            quiz9: 'a',
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
function f9() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'b',
            quiz2: 'c',
            quiz3: 'a',
            quiz4: 'b',
            quiz5: 'c',
            quiz6: 'b',
            quiz7: 'c',
            quiz8: 'b',
            quiz9: 'b',
            quiz10: 'c',
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
function f10() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'b',
            quiz2: 'b',
            quiz3: 'c',
            quiz4: 'b',
            quiz5: 'b',
            quiz6: 'c',
            quiz7: 'b',
            quiz8: 'a',
            quiz9: 'b',
            quiz10: 'b',
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
function f11() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'a',
            quiz2: 'c',
            quiz3: 'b',
            quiz4: 'b',
            quiz5: 'c',
            quiz6: 'b',
            quiz7: 'b',
            quiz8: 'c',
            quiz9: 'a',
            quiz10: 'c',
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
function f12() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'a',
            quiz2: 'b',
            quiz3: 'c',
            quiz4: 'b',
            quiz5: 'a',
            quiz6: 'b',
            quiz7: 'b',
            quiz8: 'c',
            quiz9: 'b',
            quiz10: 'b',
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
function f13() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'a',
            quiz2: 'b',
            quiz3: 'c',
            quiz4: 'c',
            quiz5: 'b',
            quiz6: 'c',
            quiz7: 'b',
            quiz8: 'a',
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
function f14() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'b',
            quiz2: 'b',
            quiz3: 'c',
            quiz4: 'a',
            quiz5: 'b',
            quiz6: 'b',
            quiz7: 'b',
            quiz8: 'c',
            quiz9: 'a',
            quiz10: 'b',
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
function f15() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'c',
            quiz2: 'b',
            quiz3: 'b',
            quiz4: 'c',
            quiz5: 'a',
            quiz6: 'b',
            quiz7: 'b',
            quiz8: 'b',
            quiz9: 'c',
            quiz10: 'b',
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
function f16() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'b',
            quiz2: 'a',
            quiz3: 'c',
            quiz4: 'b',
            quiz5: 'b',
            quiz6: 'c',
            quiz7: 'b',
            quiz8: 'a',
            quiz9: 'b',
            quiz10: 'b',
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
function f17() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'c',
            quiz2: 'a',
            quiz3: 'b',
            quiz4: 'c',
            quiz5: 'b',
            quiz6: 'a',
            quiz7: 'c',
            quiz8: 'b',
            quiz9: 'b',
            quiz10: 'b',
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
function f18() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'b',
            quiz2: 'c',
            quiz3: 'a',
            quiz4: 'b',
            quiz5: 'c',
            quiz6: 'b',
            quiz7: 'a',
            quiz8: 'c',
            quiz9: 'b',
            quiz10: 'b',
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
function f19() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'c',
            quiz2: 'b',
            quiz3: 'c',
            quiz4: 'b',
            quiz5: 'b',
            quiz6: 'a',
            quiz7: 'b',
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
function f20() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'b',
            quiz2: 'b',
            quiz3: 'b',
            quiz4: 'b',
            quiz5: 'c',
            quiz6: 'b',
            quiz7: 'b',
            quiz8: 'c',
            quiz9: 'b',
            quiz10: 'b',
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
function f21() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'b',
            quiz2: 'c',
            quiz3: 'b',
            quiz4: 'b',
            quiz5: 'b',
            quiz6: 'c',
            quiz7: 'b',
            quiz8: 'b',
            quiz9: 'a',
            quiz10: 'c',
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
function f22() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'b',
            quiz2: 'b',
            quiz3: 'b',
            quiz4: 'b',
            quiz5: 'b',
            quiz6: 'c',
            quiz7: 'a',
            quiz8: 'a',
            quiz9: 'c',
            quiz10: 'b',
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
function f23() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'b',
            quiz2: 'a',
            quiz3: 'c',
            quiz4: 'b',
            quiz5: 'c',
            quiz6: 'a',
            quiz7: 'b',
            quiz8: 'a',
            quiz9: 'b',
            quiz10: 'b',
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
function f24() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'a',
            quiz2: 'c',
            quiz3: 'a',
            quiz4: 'c',
            quiz5: 'b',
            quiz6: 'c',
            quiz7: 'b',
            quiz8: 'c',
            quiz9: 'b',
            quiz10: 'b',
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
function f25() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'b',
            quiz2: 'c',
            quiz3: 'b',
            quiz4: 'c',
            quiz5: 'a',
            quiz6: 'b',
            quiz7: 'c',
            quiz8: 'b',
            quiz9: 'a',
            quiz10: 'c',
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
function f26() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'a',
            quiz2: 'b',
            quiz3: 'c',
            quiz4: 'a',
            quiz5: 'a',
            quiz6: 'c',
            quiz7: 'c',
            quiz8: 'a',
            quiz9: 'b',
            quiz10: 'c',
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
function f27() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'a',
            quiz2: 'a',
            quiz3: 'c',
            quiz4: 'b',
            quiz5: 'b',
            quiz6: 'a',
            quiz7: 'c',
            quiz8: 'b',
            quiz9: 'a',
            quiz10: 'c',
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
function f28() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'a',
            quiz2: 'b',
            quiz3: 'a',
            quiz4: 'b',
            quiz5: 'c',
            quiz6: 'b',
            quiz7: 'a',
            quiz8: 'b',
            quiz9: 'b',
            quiz10: 'c',
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
function f29() {
    if (!jaExecutou) {
        var respostas = {
            quiz1: 'B',
            quiz2: 'c',
            quiz3: 'a',
            quiz4: 'b',
            quiz5: 'c',
            quiz6: 'a',
            quiz7: 'c',
            quiz8: 'b',
            quiz9: 'c',
            quiz10: 'b',
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