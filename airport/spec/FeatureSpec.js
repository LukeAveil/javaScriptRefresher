describe('Feature Test', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  describe('under normal conditions', function(){
    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
    });

    it('planes can be instructed to land at the airport', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('can be instructed to take off', function(){
      plane.land(airport);
      plane.takeoff();
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe('under stormy conditions', function(){

    it('blocks takeoff in stormy weather', function(){
      spyOn(Math,'random').and.returnValue(0);
      plane.land(airport);
      spyOn(airport._weather,'isStormy').and.returnValue(true);
      expect(function(){ plane.takeoff(); }).toThrowError('cannot takeoff during storm');
      expect(airport.planes()).toContain(plane);
    });

    it('blocks landing in stormy weather', function(){
      spyOn(Math,'random').and.returnValue(1);
      expect(function(){ plane.land(airport); }).toThrowError('cannot land during storm');
      expect(airport.planes()).toEqual([]);
    });
  });
});
