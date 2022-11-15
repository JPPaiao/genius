const genusChildren = $('.genus')
let contador = $('#contador')
let filhos = genusChildren[0].children
var controle
var ok = true
var pass = 0
var user = 1
var sorte = []
let sortLen
let fil = []
let color = []


for (let colors of filhos) {
    let corId = colors.id
    let cor = corId

    if (color.includes(cor) || cor === 'black') break
    fil.push(colors)
    color.push(cor)
}

function inicio() {
    let random = () => {return Math.floor(Math.random()*4)}
    let unico = random()
    let ale = color[unico]

    sorte.push(ale)
    sortLen = sorte.length
    trocar(fil[unico], ale)

    async function trocar(a, s) {
        a.style.background = s

        let v = voltar()
        function voltar()
        {
            return new Promise
            (
                resolve => {
                    setTimeout(() => {
                        let g = a.style.background = ''
                    }, 400)
                }
            )
        }
        return await v
    }

    if (pass >= user) {
        ok = false
        clearInterval(controle)
        controle = null
    } else {
      pass++
    }

}

function start() {
    if (ok) {
        controle = setInterval(inicio, 800);
    }
}

for (let c of fil) {
    c.addEventListener("click", jogador)
}

function jogador(ele) {
    let eleCor = ele.target.id
    let acerto = 0

    if (eleCor == sorte[0]) {
        acerto += 1
        sorte.shift()
        user++
    } else {
        sorte = []
        pass = 0
        user = 1
    }

    ok = (sorte == '') ? true : false
    if (ok) {
        setTimeout(start, 400)
    }
}
