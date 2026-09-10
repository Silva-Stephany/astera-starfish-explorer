document.addEventListener("DOMContentLoaded", function () {

    console.log("ASTERA carregado com sucesso!");

    const botaoExplorar = document.querySelector(".botao");

    if (botaoExplorar) {

        botaoExplorar.addEventListener("click", function (event) {

            event.preventDefault();

            const secao = document.querySelector("#descobrir");

            secao.scrollIntoView({
                behavior: "smooth"
            });

        });

    }


    const campoBusca = document.querySelector("#busca");

    const filtroHabitat =
        document.querySelector("#filtroHabitat");

    const especies =
        document.querySelectorAll(".especie-card");


    function filtrarEspecies() {

        const texto =
            campoBusca
                ? campoBusca.value.toLowerCase()
                : "";

        const habitat =
            filtroHabitat
                ? filtroHabitat.value
                : "todos";


        especies.forEach(function (especie) {

            const conteudo =
                especie.innerText.toLowerCase();

            const habitatEspecie =
                especie.dataset.habitat;


            const correspondeBusca =
                conteudo.includes(texto);

            const correspondeHabitat =
                habitat === "todos"
                ||
                habitat === habitatEspecie;


            if (
                correspondeBusca
                &&
                correspondeHabitat
            ) {

                especie.style.display = "flex";

            } else {

                especie.style.display = "none";

            }

        });

    }


    if (campoBusca) {
        campoBusca.addEventListener(
            "input",
            filtrarEspecies
        );
    }


    if (filtroHabitat) {
        filtroHabitat.addEventListener(
            "change",
            filtrarEspecies
        );
    }

});
/* =====================================
   ANATOMIA INTERATIVA
===================================== */

const pontosAnatomia =
    document.querySelectorAll(".ponto-anatomia");

const tituloParte =
    document.querySelector("#tituloParte");

const descricaoParte =
    document.querySelector("#descricaoParte");

const curiosidadeParte =
    document.querySelector("#curiosidadeParte");


const informacoesAnatomia = {

    bracos: {
        titulo: "Braços",

        descricao:
            "Os braços partem do disco central. Muitas estrelas-do-mar possuem cinco braços, mas algumas espécies apresentam dezenas deles.",

        curiosidade:
            "Os braços possuem estruturas importantes para locomoção, percepção e alimentação."
    },


    madreporito: {
        titulo: "Madreporito",

        descricao:
            "O madreporito é uma estrutura localizada na superfície aboral e está conectado ao sistema hidrovascular da estrela-do-mar.",

        curiosidade:
            "Ele participa do sistema pelo qual a água circula internamente no animal."
    },


    boca: {
        titulo: "Boca",

        descricao:
            "A boca está localizada na superfície inferior do disco central da estrela-do-mar.",

        curiosidade:
            "Algumas espécies conseguem exteriorizar parte do estômago durante a alimentação."
    },


    pes: {
        titulo: "Pés ambulacrais",

        descricao:
            "Os pés ambulacrais são pequenas estruturas associadas ao sistema hidrovascular.",

        curiosidade:
            "Eles ajudam na locomoção, fixação, manipulação de alimento e percepção do ambiente."
    }

};


pontosAnatomia.forEach(function (ponto) {

    ponto.addEventListener("click", function () {

        const parte =
            ponto.dataset.parte;

        const informacao =
            informacoesAnatomia[parte];


        tituloParte.textContent =
            informacao.titulo;

        descricaoParte.textContent =
            informacao.descricao;

        curiosidadeParte.textContent =
            informacao.curiosidade;

    });

});
/* =====================================
   BIOLOGIA INTERATIVA
===================================== */

const botoesBiologia =
    document.querySelectorAll(".bio-botao");

const bioTitulo =
    document.querySelector("#bioTitulo");

const bioDescricao =
    document.querySelector("#bioDescricao");

const bioSimbolo =
    document.querySelector("#bioSimbolo");


const dadosBiologia = {

    alimentacao: {

        titulo: "Alimentação",

        descricao:
            "A alimentação varia entre as espécies. Muitas estrelas-do-mar consomem moluscos e outros invertebrados. Algumas conseguem projetar parte do estômago para fora do corpo durante a digestão.",

        simbolo: "◉"
    },

    locomocao: {

        titulo: "Locomoção",

        descricao:
            "Centenas de pés ambulacrais podem atuar de forma coordenada para permitir que a estrela-do-mar se desloque sobre rochas, areia e outras superfícies.",

        simbolo: "≋"
    },

    hidrovascular: {

        titulo: "Sistema hidrovascular",

        descricao:
            "O sistema hidrovascular é formado por canais internos preenchidos por fluido. Ele está diretamente relacionado ao funcionamento dos pés ambulacrais.",

        simbolo: "◌"
    },

    reproducao: {

        titulo: "Reprodução",

        descricao:
            "Em muitas espécies, machos e fêmeas liberam gametas na água, onde ocorre a fecundação. Algumas estrelas-do-mar também apresentam formas de reprodução assexuada.",

        simbolo: "✦"
    },

    percepcao: {

        titulo: "Percepção do ambiente",

        descricao:
            "Estrelas-do-mar não possuem um cérebro centralizado. Seu sistema nervoso inclui um anel nervoso e nervos que se estendem pelos braços. Algumas também apresentam estruturas sensíveis à luz nas extremidades dos braços.",

        simbolo: "◎"
    },

    regeneracao: {

        titulo: "Regeneração",

        descricao:
            "Muitas estrelas-do-mar conseguem regenerar partes perdidas dos braços. A extensão dessa capacidade depende da espécie e da quantidade de tecido preservado.",

        simbolo: "↻"
    }

};


botoesBiologia.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const tema =
            botao.dataset.bio;

        const informacao =
            dadosBiologia[tema];


        if (!informacao) {
            return;
        }


        bioTitulo.textContent =
            informacao.titulo;

        bioDescricao.textContent =
            informacao.descricao;

        bioSimbolo.textContent =
            informacao.simbolo;


        document
            .querySelector(".bio-detalhe")
            .scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

    });

});
/* =====================================
   MAPA OCEÂNICO INTERATIVO
===================================== */

const marcadoresMapa =
    document.querySelectorAll(".marcador");

const mapaTitulo =
    document.querySelector("#mapaTitulo");

const mapaDescricao =
    document.querySelector("#mapaDescricao");

const mapaEspecie =
    document.querySelector("#mapaEspecie");

const mapaHabitat =
    document.querySelector("#mapaHabitat");

const mapaRegiao =
    document.querySelector("#mapaRegiao");


const dadosMapa = {

    "pacifico-norte": {

        titulo: "Pacífico Norte",

        descricao:
            "Região de águas frias e temperadas que abriga diferentes espécies de estrelas-do-mar.",

        especie:
            "Estrela-do-mar-girassol",

        habitat:
            "Fundos rochosos e costeiros",

        regiao:
            "Costa do Pacífico Norte"
    },


    "caribe": {

        titulo: "Mar do Caribe",

        descricao:
            "Região tropical com recifes, águas quentes e grande diversidade de organismos marinhos.",

        especie:
            "Estrela-de-areia",

        habitat:
            "Fundos arenosos e recifes",

        regiao:
            "Caribe e Atlântico tropical"
    },


    "indopacifico": {

        titulo: "Indo-Pacífico",

        descricao:
            "Uma das regiões marinhas mais biodiversas do planeta, com extensas áreas de recifes de coral.",

        especie:
            "Estrela-coroa-de-espinhos",

        habitat:
            "Recifes de coral",

        regiao:
            "Oceano Índico e Pacífico tropical"
    },


    "atlantico-sul": {

        titulo: "Atlântico Sul",

        descricao:
            "Abriga habitats tropicais e temperados, além de regiões profundas.",

        especie:
            "Diversas estrelas-do-mar",

        habitat:
            "Costas rochosas e fundos marinhos",

        regiao:
            "Atlântico Sul"
    },


    "pacifico-sul": {

        titulo: "Pacífico Sul",

        descricao:
            "Região com ilhas, recifes, costas rochosas e ambientes de grande profundidade.",

        especie:
            "Diversas espécies",

        habitat:
            "Recifes e fundo marinho",

        regiao:
            "Pacífico Sul"
    }

};


marcadoresMapa.forEach(function (marcador) {

    marcador.addEventListener("click", function () {

        const regiao =
            marcador.dataset.regiao;

        const informacao =
            dadosMapa[regiao];


        if (!informacao) {
            return;
        }


        mapaTitulo.textContent =
            informacao.titulo;

        mapaDescricao.textContent =
            informacao.descricao;

        mapaEspecie.textContent =
            informacao.especie;

        mapaHabitat.textContent =
            informacao.habitat;

        mapaRegiao.textContent =
            informacao.regiao;


        marcadoresMapa.forEach(function (item) {
            item.classList.remove("selecionado");
        });

        marcador.classList.add("selecionado");

    });

});
