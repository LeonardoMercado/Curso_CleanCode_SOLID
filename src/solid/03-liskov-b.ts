
export abstract class Vehicle{
    abstract readonly CLASS_NAME;
    abstract getNumberOfSeats(): number;
}


export class Tesla extends Vehicle{

    readonly CLASS_NAME = 'Tesla';

    constructor(private numberOfSeats: number ) {
        super();
    }
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

}

export class Audi extends Vehicle{

    readonly CLASS_NAME = 'Audi';

    constructor(private numberOfSeats: number ) {
        super();
    }
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle{

    readonly CLASS_NAME = 'Toyota';

    constructor(private numberOfSeats: number ) {
        super();
    }
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle{

    readonly CLASS_NAME = 'Honda';

    constructor(private numberOfSeats: number ) {
        super();
    }
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Volvo extends Vehicle{

    readonly CLASS_NAME = 'Volvo';

    constructor(private numberOfSeats: number ) {
        super();
    }
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Ford extends Vehicle{

    readonly CLASS_NAME = 'Ford';

    constructor(private numberOfSeats: number ) {
        super();
    }
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}