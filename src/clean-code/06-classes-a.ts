(()=>{

    // NO Aplicando el Principio de responsabilidad unica:

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

    class User extends Person{
        public lastAccess: Date;
        constructor(
            private email: String,
            private role: String,
            name: String,
            gender: Gender,
            birthDate: Date,
        ) {
            super(name,gender,birthDate);
            this.lastAccess = new Date();
        }

        checkCredentials(){
            // Revisar las credenciales del usuario
            let userAuthenticate = false;
            return userAuthenticate;
        }
    }

    class UserSettings extends User{
        constructor(
            public workingDirectory: String,
            public lastOpenFolder: String,
            email: String,
            rol: String,
            name: String,
            gender: Gender,
            birthDay: Date,
        ) {
            super(email,rol,name,gender,birthDay);
        }
    }

    const userSettings = new UserSettings(
        '/home/usr',
        '/Downloads',
        'lfmercado@unal.edu.co',
        'ADMINISTRADOR',
        'Leonardo',
        'M',
        new Date('1992-03-08')
    )

    console.log({userSettings, areCredentialValid: userSettings.checkCredentials()});



})();