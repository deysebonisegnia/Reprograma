const valorHoraInput = document.querySelector('#ganho-mes');
const horasProjetoInput = document.querySelector('#horas-dia');
const resposta = document.querySelector('#resposta');

const calcularValorHora = () => {
    const valorHora = valorHoraInput.valueAsNumber;
    const horasProjeto = horasProjetoInput.valueAsNumber;
    const total = (valorHora * horasProjeto);
    resposta.innerHTML = 'R$' + total.toFixed(2);
}