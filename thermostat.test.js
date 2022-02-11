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

  it('prevent to increase the temperature more than 25 when PSM is on', () => {
    for (let i = 0; i < 7; i++) {
      thermostat.up()
    }
    expect(thermostat.getTemperature()).toBe(25);
  });

  it('allows to increase the temperature if the PSM is off', () => {
    thermostat.setPowerSavingMode(false)
    for (let i = 0; i < 32; i++) {
      thermostat.up()
    }
    expect(thermostat.getTemperature()).toBe(32);
  });

  it('allows to reset the thermostat', () => {
    thermostat.reset()
    expect(thermostat.getTemperature()).toBe(20);
  });
});
