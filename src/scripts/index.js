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



