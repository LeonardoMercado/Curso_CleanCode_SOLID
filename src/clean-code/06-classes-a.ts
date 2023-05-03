(()=>{

    type Gender = 'M'|'F';

    // Forma larga:
    /*class Person{
        public name: string;
        public gender: Gender;
        public birthDate: Date;

        constructor(name: String, gender: Gender, birthDate: Date) {
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }

    }*/

    // Forma Corta
    class Person{
        constructor(
            public name: string,
            public gender: Gender,
            public birthDate: Date
        ){}
    }

    const newPerson = new Person('Leonardo','M',new Date());
    const otherPerson = new Person('Fabio','F',new Date());
    console.log({ newPerson, otherPerson });

})();