

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
            <div className="displayContainer" 
            style={{
                backgroundImage: `url(${movie.data.Poster})`,
                backgroundSize: "cover", // the image covers the entire div
                backgroundPosition: "center", // Centers the image
                backgroundRepeat: "no-repeat" // Prevents image repetition
                }}>
                <h3 className="movieDisplayHeader">Movie Details</h3>
                <h1 className="movieTitle">{movie.data.Title}</h1>
                <h2 className="movie genre">{movie.data.Genre}</h2>
                <img src={movie.data.Poster} alt={movie.data.Title} />
                <h2>{movie.data.Year}</h2>
            </div>
            </>
        )
    }

    return (
        <>
        {movie ? loaded() : loading()}
        </>
    )
}