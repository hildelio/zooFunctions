const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Teste 1: count retorna a quantidade de elefantes.', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Teste 2: names retorna um array com a relação dos nomes de todos os elefantes.', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Teste 3: averageAge retorna a média de idade dos elefantes.', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Teste 4: location retorna a localização dos elefantes dentro do Zoológico.', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Teste 5: popularity retorna a popularidade dos elefantes.', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('Teste 6: availability retorna um array com a relação de dias em que é possível visitar os elefantes.', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Teste 7: undefined retorna undefined', () => {
    expect(handlerElephants(undefined)).toBeUndefined();
  });
  it('Teste 8: Typeof !string retorna Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants(typeof param !== 'string')).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Teste 9: Se param for uma string diferente de todos os parametros utilizados retorna null', () => {
    expect(handlerElephants('casa')).toBeNull();
  });
});
