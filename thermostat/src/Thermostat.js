function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function(){
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
