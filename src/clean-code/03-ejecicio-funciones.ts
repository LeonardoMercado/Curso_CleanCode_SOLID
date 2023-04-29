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




})();
