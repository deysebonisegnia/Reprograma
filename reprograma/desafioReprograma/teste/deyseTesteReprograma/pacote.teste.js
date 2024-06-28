const {calcularValorTotalProjeto} =require('../../dominio/calculadora/Projeto/valorHora')
const pacote = require("../dominio/calculadora/projeto/pacote");

jest.mock('../../dominio/calculadora/Projeto/pacote.js')
describe(" pacote basico", ()=>{

test("calcular Valor total projeto basico quando 30 horas e 30 reais/hora",()=>{
     const valorHora = 30;
     const funcionalidades = ['formulario', 'responsividade']
     const retornado = calcularValorTotalProjeto(funcionalidades,valorHora);
     const esperado = 1056;
     expect(esperado).toBe(retornado);
});
test("calcular Valor total projeto basico quando 30 horas e 30 reais/hora",()=>{
    pacote.calcularpacote.mockreturnValue("pacote_basico")
    const valorHora = 30;
    const funcionalidades = ['formulario', 'responsividade']
    const retornado = calcularValorTotalProjeto(funcionalidades,valorHora);
    const esperado = 1056;
    expect(esperado).toBe(retornado);
});

});

describe(" pacote intermediario", ()=>{

    test("calcular Valor total projeto basico quando 100 horas e 100 reais/hora",()=>{
         const valorHora = 100;
         const funcionalidades = ['formulario', 'responsividade']
         const retornado = calcularValorTotalProjeto(funcionalidades,valorHora);
         const esperado = 11312;
         expect(esperado).toBe(retornado);
    });
    test("calcular Valor total projeto basico quando 100 horas e 100 reais/hora",()=>{
        pacote.calcularpacote.mockreturnValue("pacote_basico")
        const valorHora = 100;
        const funcionalidades = ['formulario', 'responsividade']
        const retornado = calcularValorTotalProjeto(funcionalidades,valorHora);
        const esperado = 11312;
        expect(esperado).toBe(retornado);
    });
    
    });
    describe(" pacote premiun", ()=>{

        test("calcular Valor total projeto basico quando 200 horas e 201 reais/hora",()=>{
             const valorHora = 200;
             const funcionalidades = ['formulario', 'responsividade']
             const retornado = calcularValorTotalProjeto(funcionalidades,valorHora);
             const esperado = 46230;
             expect(esperado).toBe(retornado);
        });
        test("calcular Valor total projeto basico quando 200 horas e 201 reais/hora",()=>{
            pacote.calcularpacote.mockreturnValue("pacote_basico")
            const valorHora = 200;
            const funcionalidades = ['formulario', 'responsividade']
            const retornado = calcularValorTotalProjeto(funcionalidades,valorHora);
            const esperado = 46230;
            expect(esperado).toBe(retornado);
        });
        
        });