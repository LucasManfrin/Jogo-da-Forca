const tecnologias = [
    "java", "react", "node", "python", "php"
]

const palavraSecreta = tecnologias[Math.floor(Math.random()* tecnologias.length)]
const letrasErradas = []
const letrasCorretas = []


document.addEventListener('keydown', (evento) => {
    const codigo = evento.keyCode // A (65) => Z (90)
    if (isLetra(codigo)) {
        const letra = evento.key
        // Letra faz parte ou não da palavra
        if (letrasErradas.includes(letra)) {
            mostrarAvisoLetraRepetida()
        } else {
            if (palavraSecreta.includes(letra)) {
                letrasCorretas.push(letra)
            }
            else {
                letrasErradas.push(letra)
            }
        }

        
    }
})

function mostrarAvisoLetraRepetida() {
    const aviso = document.querySelector(".aviso-palavra-repetida")
    aviso.classList.add('show')
    setTimeout(() => {
        aviso.classList.remove('show')
    }, 1000)
}

function isLetra(codigo) {
    return codigo >= 65 && codigo <= 90
}