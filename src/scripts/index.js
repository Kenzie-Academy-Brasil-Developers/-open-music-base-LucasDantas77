const ul = document.querySelector(".container__lista")

function renderMusicas(array) {

    array.forEach((element) => {

        const li = document.createElement("li")
        li.classList.add("lista__musicas")
        li.id = element.id

        const img = document.createElement("img")
        img.src = element.img
        img.alt = "imagem da musica"

        const divDescricao = document.createElement("div")
        divDescricao.classList.add("descricao__produto")

        const pNome = document.createElement("p")
        pNome.innerText = element.band
        const pData = document.createElement("p")
        pData.innerText = element.year
        divDescricao.append(pNome, pData)

        const h3Nome = document.createElement("h3")
        h3Nome.innerText = element.title

        const divPreco = document.createElement("div")
        divPreco.classList.add("preco__produto")

        const span = document.createElement("span")
        span.innerText = `R$ ${element.price}`

        const botao = document.createElement("button")
        botao.id = "comprar"
        botao.innerText = "Comprar"
        divPreco.append(span, botao)

        li.append(img, divDescricao, h3Nome, divPreco)
        ul.append(li)
    });
}

renderMusicas(products)


function darkMode() {
    const btnDarkMode = document.getElementById("darkMode")
    const iconeDark = document.getElementById("iconDark")
    const html = document.querySelector("html")

    btnDarkMode.addEventListener("click", () => {
        html.classList.toggle("dark__mode")
        iconeDark.classList.toggle("text__white")

        const darkPref = localStorage.getItem("darkmode")
        if (!darkPref) {
            localStorage.setItem("darkmode", true)
        }

        if (darkPref) {
            localStorage.removeItem("darkmode")
        }


        if (iconeDark.classList.contains("text__white")) {
            iconeDark.src = "./src/assets/img/sun.png"
        } else {
            iconeDark.src = "./src/assets/img/moon.png"
        }
    })
}
darkMode()

function filtroMusicas() {
    const btnTipos = document.querySelectorAll(".todos__tipos")
    const listaCards = document.getElementById('lista__cards')

    btnTipos.forEach(button => {
        button.addEventListener("click", () => {
            listaCards.innerHTML = ""
            const filter = button.innerText

            if (filter === "Todos") {
                renderMusicas(products)
            }
            const filterMusicas = musicaFilter(filter)

            renderMusicas(filterMusicas)
        })
    })


    function musicaFilter(text) {
        const musicasFiltra = products.filter(musicas => musicas.category ===
            categories.indexOf(text))
        return musicasFiltra
    }
}
filtroMusicas()