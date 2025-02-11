

export default function MovieDisplay ({movie}) {


    function loading() {
        return (
            <>
                <h3>No movie information is found</h3>
            </>
        )
    }


    function loaded() {

        return (
            <>
                <h3 className="movieDisplayHeader">Movie Display</h3>
                <h1 className="movieTitle">{movie.data.Title}</h1>
                <h2 className="movie genre">{movie.data.Genre}</h2>
                <img src={movie.data.Poster} alt={movie.data.Title} />
                <h2>{movie.Year}</h2>
            </>
        )
    }

    return (
        <>
        {movie ? loaded() : loading()}
        </>
    )
}