class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20
    this.temperature = this.DEFAULT_TEMPERATURE
  }

  getTemperature() {
    return this.temperature
  }
}

module.exports = Thermostat