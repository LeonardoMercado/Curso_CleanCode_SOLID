(() => {

    interface Bird {
        eat(): void;
    }

    interface FlyingBird extends Bird{
        fly(): number;
    }

    interface AcuaticBird extends Bird{
        swing(): void;
    }

    interface RuningBird extends Bird{
        run(): void;
    }

    class Tucan implements FlyingBird {
        eat(): void {
        }
        fly(): number {
            return 10;
        }
    }

    class HummingBird implements FlyingBird {
        eat(): void {
        }
        fly(): number {
            return 100;
        }

    }

    class Ostrich implements RuningBird {
        eat(): void {
        }
        run(): void {
        }
    }

    class Penguin implements AcuaticBird {
        swing(): void {
        }
        eat(): void {
        }
    }


})();