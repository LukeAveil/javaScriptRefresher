describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases the temperature with the up button', function(){
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature with the down button', function(){
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function(){
    for(var i = 0; i < 11; i++){
      thermostat.decreaseTemperature();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has power saving mode on by default', function(){
    expect(thermostat.isPsmOn()).toBe(true);
  });

  it('can switch power saving mode off', function(){
    thermostat.switchPsmOff();
    expect(thermostat.isPsmOn()).toBe(false);
  });

  it('can switch power saving mode on', function(){
    thermostat.switchPsmOff();
    thermostat.switchPsmOn();
    expect(thermostat.isPsmOn()).toBe(true);
  });

  describe('when power saving mode is on', function(){
    it('has a max temperature of 25 degrees', function(){
      for(var i = 0; i < 6; i++){
        thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it('can reset to the default temperature', function(){
      for(var i = 0; i < 6; i++){
        thermostat.increaseTemperature();
      }
      thermostat.resetTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('when power saving mode is off', function(){
    it('has a maximum temperature of 32 degrees', function(){
      thermostat.switchPsmOff();
      for(var i = 0; i < 13; i++){
        thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe('displaying usage levels', function(){
    describe('when the temperature is below 18 degrees', function(){
      it('is considered low usage', function(){
        for(var i = 0; i < 3; i++){
          thermostat.decreaseTemperature();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });

    describe('when the temperature is between 18 and 25 degrees', function(){
      it('is considered medium-usage', function(){
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });

    describe('when the temperature is anything else', function(){
      it('is considered high-usage', function(){
        thermostat.switchPsmOff();
        for(var i = 0; i < 6; i++){
          thermostat.increaseTemperature();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});
