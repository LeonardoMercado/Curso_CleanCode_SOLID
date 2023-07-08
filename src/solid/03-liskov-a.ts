import {
    Tesla, Audi, Toyota,
    Honda, Volvo, Ford,
    Vehicle
} from './03-liskov-b';


(() => {

    const printCarSeats = (cars: Vehicle[]) => {
        for (const car of cars) {
            console.log(`${car.CLASS_NAME}: ${car.getNumberOfSeats()}`);
        }
    }

    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(6),
        new Honda(5),
        new Volvo(10),
        new Ford(1),
    ];


    printCarSeats(cars);

})();