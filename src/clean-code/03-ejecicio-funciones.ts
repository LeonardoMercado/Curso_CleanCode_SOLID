(() => {

    // función para obtener información de una película por Id
    function getMovieDetailsById(id: string) {
        console.log(id);
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getActorsDetailsById(id: string) {
        console.log({id});
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById(id: string) {
        console.log({id});
    }

    interface MovieData {
        title: string,
        description: string,
        rating: number,
        cast: string[]
    }

    // Crear una película
    function createMovie({title, description, rating, cast}: MovieData) {
        console.log({title, description, rating, cast});
    }

    function verifyActorName(name:String){
        // tarea asincrona para verificar nombre
        // ..
        // ..
        return name === 'fernando';
    }
    // Crea un nuevo actor

    function createActor(fullName: string, birthdate: Date): boolean {

        if (verifyActorName('leonardo')) return false;

        console.log('Crear actor ' + birthdate);
        return true;

    }

    // Ejecicio de otras observaciones sobre funciones.
    const getPayAmount = (
        {isDead = false,
         isSeparated = true,
         isRetired = false }): number => {

        // si esta muerto no hay nada mas que hacer.
        if(isDead) return 1500;

        if(isSeparated) return 2500;

        return (isRetired) ? 3000 : 4000

        /*
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000;
                }
            }
        }
        return result;*/
    }





})();
