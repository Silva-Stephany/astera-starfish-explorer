document.addEventListener("DOMContentLoaded", function () {

    console.log("ASTERA carregado com sucesso!");

    const botaoExplorar = document.querySelector(".botao");

    botaoExplorar.addEventListener("click", function (event) {

        event.preventDefault();

        const secao = document.querySelector("#descobrir");

        secao.scrollIntoView({
            behavior: "smooth"
        });

    });

});
