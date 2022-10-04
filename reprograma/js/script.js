
const salarioInput = 
document.querySelector('#ganho-mes');
const horasDiaInput = document.querySelector('#horas-dia');
const resposta = document.querySelector('#resposta');


salarioInput.value = 1000;
horasDiaInput.value = 8;

const calcularValorHora = () => {
    const salario = salarioInput.valueAsNumber;
    const horasDia = horasDiaInput.valueAsNumber;
    const diasMes = 22 ;

    const ganhoPorHora = salario / (diasMes * horasDia);
    console.log(ganhoPorHora)
    resposta.innerHTML = "R$" + ganhoPorHora.toFixed(2);
}









