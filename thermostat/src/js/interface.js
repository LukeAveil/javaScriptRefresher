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

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=72230f12f0d38f571379020ed7b51a88&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  });

});
