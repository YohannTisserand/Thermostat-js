const Thermostat = require('./thermostat')

const thermostat = new Thermostat

describe('Thermostat', () => {
  it('has a defaut value at 20', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('can raise the temperature', () => {
    thermostat.up()
    expect(thermostat.getTemperature()).toBe(21);
  });
});