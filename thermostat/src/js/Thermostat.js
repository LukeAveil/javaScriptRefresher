function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE = 18;
}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function(){
  if(this.isMaximumTemperature()){
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function(){
  if(this.isMinimalTemperature()){
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimalTemperature = function(){
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPsmOn = function(){
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPsmOff = function(){
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPsmOn = function(){
  this.powerSavingMode = true;
};

Thermostat.prototype.isMaximumTemperature = function(){
  if(this.isPsmOn() === false){
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
};

Thermostat.prototype.resetTemperature = function(){
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function(){
  if(this.temperature < this.MEDIUM_ENERGY_USAGE){
    return 'low-usage';
  }
  if(this.temperature >= this.MEDIUM_ENERGY_USAGE && this.temperature <= this.MAX_LIMIT_PSM_ON){
    return 'medium-usage';
  }
  return 'high-usage';
};
