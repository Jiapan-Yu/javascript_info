// let clock = new Clock({
//   template: 'h:m:s'
// });
// clock.start();

class ExtendedClock extends Clock {
  constructor({template, precision = 1000}) {
    super({template});
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let extendedClock = new ExtendedClock({
  template: 'h:m:s',
  precision: 500
});

extendedClock.start();