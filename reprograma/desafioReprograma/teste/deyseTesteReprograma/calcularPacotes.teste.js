const {calcularPacote} =require('../../dominio/calculadora/Projeto/pacote')

describe("calcular pacote", ()=>{

test("calcular pacote basico quando 23 horas",()=>{
    
     const retornado = calcularPacote(23);
     const esperado = 'pacote-basico';
     expect(esperado).toBe(retornado);
});
test("Calcular pacote intermediário quando 53 horas", () => {
      const retornado = calcularPacote(53);
      const esperado = 'pacote_intermediario';
      expect(esperado).toBe(retornado)
 });
 test("Calcular pacote premium quando 199 horas", () => {
      const retornado = calcularPacote(199);
      const esperado = 'pacote_premium';
      expect(esperado).toBe(retornado)
     })     
});