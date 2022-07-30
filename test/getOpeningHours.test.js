const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste 1: O nome do dia da semana passado como argumento tem que ser em inglês', () => {
    const errorr = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours('Segunda-Feira', '09:00-AM')).toThrowError(new Error(errorr));
    expect(() => getOpeningHours('Terça-Feira', '09:00-AM')).toThrowError(new Error(errorr));
    expect(() => getOpeningHours('Quarta-Feira', '09:00-AM')).toThrowError(new Error(errorr));
    expect(() => getOpeningHours('Quinta-Feira', '09:00-AM')).toThrowError(new Error(errorr));
    expect(() => getOpeningHours('Sexta-Feira', '09:00-AM')).toThrowError(new Error(errorr));
    expect(() => getOpeningHours('Sábado', '09:00-AM')).toThrowError(new Error(errorr));
    expect(() => getOpeningHours('Domingo', '09:00-AM')).toThrowError(new Error(errorr));
  });
  it('Teste 2: O horário precisa ter a seguinte formatação XX:XX-XM', () => {
    expect(() => getOpeningHours('Tuesday', '0900AM')).toThrowError(new Error('The hour should represent a number'));
  });
  it('Teste 3: As horas serão validadas na nomenclatura AM e PM', () => {
    expect(() => getOpeningHours('Tuesday', '09:00-MD')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Teste 4: A hora tem que estar no intervalo de 0 a 12', () => {
    expect(() => getOpeningHours('Tuesday', '13:00-AM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('Teste 5: Não passando argumentos deverá retornar', () => {
    expect(getOpeningHours()).toBeDefined();
  });
  it('Teste 6: Não passando argumentos deverá retornar um objeto', () => {
    expect(getOpeningHours()).toMatchObject({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Teste 7: Para os argumentos Monday e 09:00-AM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Teste 8: Para os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Teste 9: Para os argumentos Wednesday e 09:00-PM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('Teste 10: Os minutos tem que estar no intervalo de 0 a 59', () => {
    expect(() => getOpeningHours('Tuesday', '09:69-AM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
});
