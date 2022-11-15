const genusChildren = $('.genus')
let contador = $('#contador')
let filhos = genusChildren[0].children
var controle
var ok = true
var pass = 0
var sorte = []
var user = 1
let fil = []
let color = []

function start() {
    controle = setInterval(inicio, 800)
}

function numberAleatorio() {
    return Math.floor(Math.random()*4)
}

function inicio() {
    let random = numberAleatorio()

    sorte.push(color[random])
    trocar(fil[random], color[random])

    console.log(sorte)

    async function trocar(a, s) {
        $(`#${a.id}`).attr({style: `background: ${s};`})

        function voltar() {
            return new Promise (
                resolve => {
                    setTimeout(() => {
                        $(`#${a.id}`).attr({
                            style: ''
                        })
                    }, 300)
                }
            )
        }

        voltar()
    }

    if (pass >= user) {
        ok = false
        clearInterval(controle)
        controle = null
    } else {
      pass++
    }
}

function jogador(elemento) {
    let corElemento = elemento.target.id
    let acertos = 0

    if (corElemento === sorte[0]) {
        sorte.shift()
        acertos++
        user++
    } else {
        sorte = []
        pass = 0
        user = 1
        clearInterval(controle)
        controle = null
    }

    ok = (sorte == '') ? true : false
    if (ok) start()
}

for (let colors of filhos) {
    if (color.includes(colors.id) || colors.id === 'black') break
    fil.push(colors)
    color.push(colors.id)
}

for (let c of fil) {
    $(`#${c.id}`).on("click", jogador)
}
