const {calcularHoraDeProjeto} =require('../../dominio/calculadora/Projeto/HoraProjeto')

describe("calcular hora de projeto", ()=>{

test("calcular hora de projeto - 2 funcionalidades iguais",()=>{
    const listaDeFuncionalidades =['formulario','formulario']
     const retornado = calcularHoraDeProjeto(listaDeFuncionalidades);
     const esperado = 18;
     expect(esperado).toBe(retornado);
});
test("calcular horas de projeto - 3 paginas",()=>{
     const retorno = calcularHoraDeProjeto(['construcao_1_pagina','construcao_1_pagina','construcao_1_pagina']);
     const esperado =24;
     expect(esperado).toBe(retorno)
    });
});
 test("Calcular horas de projeto - 1 Funcionalidade", () => {
    const listaDeFuncionalidades = ['formulario'];
    const retornado = calcularHoraDeProjeto(listaDeFuncionalidades);
    const esperado = 16;
    expect(esperado).toBe(retornado);
 }); 
 test("Calcular horas de projeto - 2 Funcionalidades", () => {
    const listaDeFuncionalidades = ['formulario', 'formulario'];
    const retornado = calcularHoraDeProjeto(listaDeFuncionalidades);
    const esperado = 32;
 expect(esperado).toBe(retornado);
});