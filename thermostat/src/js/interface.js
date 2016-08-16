$(document).ready(function() {

  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function(){
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#temperature-down').click(function(){
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#temperature-reset').click(function(){
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function(){
    thermostat.switchPsmOn();
    $('#power-saving-status').text('on');
    updateTemperature();
  });

  $('#powersaving-off').click(function(){
    thermostat.switchPsmOff();
    $('#power-saving-status').text('off');
    updateTemperature();
  });

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

});
