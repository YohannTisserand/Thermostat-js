const Thermostat = require('./thermostat')

const thermostat = new Thermostat

describe('Thermostat', () => {
  it('has a defaut value at 20', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('can increase the temperature', () => {
    thermostat.up()
    expect(thermostat.getTemperature()).toBe(21);
  });

  it('can descrease the temperature', () => {
    thermostat.down()
    thermostat.down()
    expect(thermostat.getTemperature()).toBe(19);
  });
});