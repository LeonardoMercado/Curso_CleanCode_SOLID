(() => {

    // Aplicando el principio de responsabilidad única
    // Priorizando la composicion frente a la herencia!!!.

    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({name, gender, birthdate}: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email: string;
        role: string;
    }

    class User {
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({email, role}: UserProps) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({workingDirectory, lastOpenFolder,}: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProps {
        workingDirectory: String;
        lastOpenFolder: String;
        email: String;
        role: String;
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class UserSettings {
        public persona: Person;
        public user: User;
        public settings: Settings;

        constructor({
                        workingDirectory,
                        lastOpenFolder,
                        email,
                        role,
                        birthdate,
                        gender,
                        name
                    }: UserSettingsProps) {
            this.persona = new Person({name, gender, birthdate});
            this.user = new User({email, role});
            this.settings = new Settings({workingDirectory, lastOpenFolder});
        }
    }

    const myUserSettings = new UserSettings({
        workingDirectory: '/home/usr',
        lastOpenFolder: '/Downloads',
        email: 'lfmercadobe@unal.edu.com',
        role: 'ADMINISTRADOR',
        birthdate: new Date(1992, 2, 7),
        gender: 'M',
        name: 'Leonardo'
    })

    console.log({myUserSettings})
    console.log(myUserSettings.user.checkCredentials());


})();