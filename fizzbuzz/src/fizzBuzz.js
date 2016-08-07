function FizzBuzz(){

}

FizzBuzz.prototype.play = function(number) {
  if (this.isDivisableBy(15, number)) {
    return 'fizzbuzz';
  }
  if (this.isDivisableBy(5, number)) {
    return 'buzz';
  }
  if (this.isDivisableBy(3, number)) {
    return 'fizz';
  }
  return number;
};

FizzBuzz.prototype.isDivisableBy = function(divisor, number) {
  return number % divisor === 0;
};
