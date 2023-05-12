(() => {

    // Refactorizando

    type Gender = 'M' | 'F';

    interface PersonProps {
        birthDate: Date;
        gender: Gender;
        name: string;
    }

    class Person {
        public birthDate: Date;
        public gender: Gender;
        public name: string;

        constructor({name, gender, birthDate}: PersonProps) {
            this.name = name;
            this.birthDate = birthDate;
            this.gender = gender;
        }
    }

    interface UserProps {
        email: String;
        role: String;
        birthDate: Date;
        gender: Gender;
        name: string;
    }

    class User extends Person {
        public lastAccess: Date;
        private email: String;
        private role: String;

        constructor({email, role, birthDate, gender, name}: UserProps) {
            super({name,gender,birthDate});
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            // Revisar las credenciales del usuario
            let userAuthenticate = false;
            return userAuthenticate;
        }
    }

    interface UserSettingsProps{
        workingDirectory: String;
        lastOpenFolder: String;
        email: String;
        role: String;
        birthDate: Date;
        gender: Gender;
        name: string;
    }

    class UserSettings extends User {
        public workingDirectory: String;
        public lastOpenFolder: String;
        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            birthDate,
            gender,
            name
        }: UserSettingsProps) {
            super({email, role, birthDate, gender, name});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/home/user',
        lastOpenFolder: '/Downloads',
        email: 'lfmercadobe@unal.edu.co',
        role: 'ADMINISTRADOR',
        birthDate: new Date(),
        gender: 'M',
        name: 'Leonardo'
    });

    console.log({userSettings});


})();