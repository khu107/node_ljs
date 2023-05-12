const Events = require('events');

class Logger extends Events {
  // emit() - bu kursatish
  log(a, b) {
    this.emit('calculate', a + b);
  }
}

// method example yangi uzgaruvchiga olib olindi.
const logger = new Logger();

// on - degan method yoramida razvetka quyib olamiz
logger.on('calculate', (data) => {
  console.log(data);
});

// log - chaqirib olish
logger.log(2, 324);
logger.log(2, 123);
logger.log(2, 12);
logger.log(2, 1);
logger.log(2, 3);
logger.log(2, 4);
