function recomendarCola() {
    var projeto = document.getElementById("projeto").value;
    var recomendacao = "";
    var imagem = document.getElementById("colaImagem");

    switch (projeto) {
        case "moveis-internos":
        case "projetos-internos":
        case "instrumentos-musicais":
            recomendacao = "TITEBOND ORIGINAL";
            imagem.src = "titebond-original.jpg"; // Substitua pela imagem real
            break;
        
        case "umidade":
        case "alimentos":
            recomendacao = "TITEBOND PREMIUM II";
            imagem.src = "titebond-ii.jpg"; // Substitua pela imagem real
            break;
        
        case "a-prova-dagua":
        case "tabuas-corte":
        case "projetos-externos":
            recomendacao = "TITEBOND ULTIMATE III";
            imagem.src = "titebond-iii.jpg"; // Substitua pela imagem real
            break;
        
        case "artesanato":
            recomendacao = "TITEBOND QUICK AND THICK";
            imagem.src = "titebond-quick-thick.jpg"; // Substitua pela imagem real
            break;
        
        case "adesivo-montagem":
            recomendacao = "TITEBOND INTERIOR EXTERIOR";
            imagem.src = "titebond-interior-exterior.jpg"; // Substitua pela imagem real
            break;
        
        default:
            recomendacao = "Escolha um tipo de projeto.";
            imagem.style.display = "none";
            return;
    }

    imagem.style.display = "block";
    document.getElementById("resultado").innerHTML = "Cola recomendada: " + recomendacao;
}

// Função para voltar ao início e resetar a página
function resetarPagina() {
    // Limpar a seleção do dropdown
    document.getElementById("projeto").value = "";
    // Limpar o texto e esconder a imagem
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("colaImagem").style.display = "none";
}