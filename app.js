function pesquisar () {
    let section = document.getElementById('resultados-pesquisa') // Busce o elemento pelo ID tradução, Document corresponde ao HTML.
//console.log(section)

// Basicamente aqui a gente ta aprendendo como que se injeta HTML dentro do JavaScript. 1° Buscar a section atraves do Document GetElementeById. Essa informação precisa aparecer na tela. some tudo que é HTML

    let resultados = ''
    // para cada dado dentro da lista de dados
    for (let dado of dados) {
        resultados += `
    <div class="item-resultado">
    <h2>
     <a href="https://www.instagram.com/rebecarandrade/?hl=pt-br" target="_blank">${dado.titulo}</a>
    </h2>
    <p class="descricao-meta">
       ${dado.descricao}
    </p>
            <a href=${dado.link} target="_blank">
            Mais informações
            </a>
    </div>`        
    }

    section.innerHTML = resultados
    
}
