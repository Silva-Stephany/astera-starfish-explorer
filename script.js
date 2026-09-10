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
