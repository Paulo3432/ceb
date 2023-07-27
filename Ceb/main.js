document.addEventListener("DOMContentLoaded", function () {
    const energyForm = document.getElementById("energyForm");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modalContent");
    const closeModal = document.getElementById("closeModal");

    energyForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let leituraAtual = parseFloat(document.getElementById("leituraAtual").value);
        let leituraMesAnterior = parseFloat(document.getElementById("leituraMesAnterior").value);
        let valorKwh = parseFloat(document.getElementById("valorKwh").value);

        let consumoAtual = leituraAtual - leituraMesAnterior;
        let valorConta = consumoAtual * valorKwh;

        const porcentagemCelpe = 16.67;
        const porcentagemIluminacaoPublica = 9.92;
        const porcentagemGeracaoBandeira = 38.03;
        const porcentagemTransmissao = 1.79;
        const porcentagemTributoEncargos = 33.59;

        let valorCelpe = (porcentagemCelpe / 100) * valorConta;
        let valorIluminacaoPublica = (porcentagemIluminacaoPublica / 100) * valorConta;
        let valorGeracaoBandeira = (porcentagemGeracaoBandeira / 100) * valorConta;
        let valorTransmissao = (porcentagemTransmissao / 100) * valorConta;
        let valorTributoEncargos = (porcentagemTributoEncargos / 100) * valorConta;

        const valorContaElem = document.getElementById("valorConta");
        const valorCelpeElem = document.getElementById("valorCelpe");
        const valorIluminacaoPublicaElem = document.getElementById("valorIluminacaoPublica");
        const valorGeracaoBandeiraElem = document.getElementById("valorGeracaoBandeira");
        const valorTransmissaoElem = document.getElementById("valorTransmissao");
        const valorTributoEncargosElem = document.getElementById("valorTributoEncargos");

        valorContaElem.textContent = valorConta.toFixed(2);
        valorCelpeElem.textContent = valorCelpe.toFixed(2);
        valorIluminacaoPublicaElem.textContent = valorIluminacaoPublica.toFixed(2);
        valorGeracaoBandeiraElem.textContent = valorGeracaoBandeira.toFixed(2);
        valorTransmissaoElem.textContent = valorTransmissao.toFixed(2);
        valorTributoEncargosElem.textContent = valorTributoEncargos.toFixed(2);

        // Exibir o modal após o cálculo
        modal.style.display = "block";
        modalContent.style.display = "block"; // Mostrar a div modal-content
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
        modalContent.style.display = "none"; // Esconder a div modal-content ao fechar o modal
    });
});
