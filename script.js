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
