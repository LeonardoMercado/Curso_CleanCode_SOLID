(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const fileToEvaluate = [
        {id: 1, toDelete: false},
        {id: 2, toDelete: false},
        {id: 3, toDelete: true},
        {id: 4, toDelete: false},
        {id: 5, toDelete: false},
        {id: 7, toDelete: true},
    ];

    // Archivos marcados para borrar - files to delete
    const filesToDelete = fileToEvaluate.map(file => file.toDelete);

    // Malos nombres
    class AbstractUser {
    }
    class UserMixin {
    }
    class UserImplementation {
    }
    interface IUser {
    }

    // Mejores nombres
    class User {
    }
    interface User {
    }

    // Todo: Tarea
    // día de hoy - today
    const ddmmyyyy = new Date();

    // días transcurridos - elapsed time in days
    const d: number = 23;

    // número de archivos en un directorio - number of files in directory
    const dir = 33;

    // primer nombre - first name
    const nombre = 'Fernando';

    // primer apellido - last name
    const apellido = 'Herrera';

    // días desde la última modificación - days since modification
    const dsm = 12;

    // cantidad máxima de clases por estudiante - max classes per student
    const max = 6;

    // Desarrollo de tarea:
    // día de hoy - today
    const today = new Date();

    // días transcurridos - elapsed time in days
    const daysPassed: number = 23;

    // número de archivos en un directorio - number of files in directory
    const numberFilesDirectory = 33;

    // primer nombre - first name
    const firstName = 'Fernando';

    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastChange = 12;

    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassPerStudent = 6;



})();