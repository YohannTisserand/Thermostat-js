class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20
    this.temperature = this.DEFAULT_TEMPERATURE
    this.PSM_MAX = 25
    this.powerSavingMode = true
  }

  getTemperature() {
    return this.temperature
  }

  up() {
    if (this.temperature < this.PSM_MAX) {
      this.temperature += 1
    }
  }

  down() {
    this.temperature -= 1
  }

  setPowerSavingMode(boolean) {
    if (boolean === false) {
      this.powerSavingMode = false
      this.PSM_MAX = 32
    }
    this.PSM_MAX
  }

  reset() {
    this.temperature = 20;
  }
}

module.exports = Thermostat
