// separate component for displaying each movie
function Movie({ title, year, synopsis }) {
    return (
        < li >
            <h3>{title}</h3>
            <span>({year})</span>
            <div>{synopsis}</div>
        </li >
    )
}


function MoviesList() {
    // collection of objects representing movies
    // collection of objects representing movies
    // now modified to include unique IDs
    const movies = [
        {
            id: 1, // items in data collections need unique IDs
            title: "The Shawshank Redemption",
            year: 1994,
            synopsis: "Two imprisoned men find redemption.",
        },
        {
            id: 2, // unique ID
            title: "The Dark Knight",
            year: 2008,
            synopsis: "Batman fights the menace known as the Joker.",
        },
        {
            id: 3, // unique ID
            title: "Interstellar",
            year: 2014,
            synopsis: "Explorers travel through a wormhole in space.",
        },
    ];

    let x = 0;

    const movieItems = movies.map(movie => (
        <Movie
            // key={movie.id} // key prop is required for lists
            key={x++}
            id={x}
            title={movie.title}
            year={movie.year}
            synopsis={movie.synopsis} />
        // can also destructure movie into individual props
        // <Movie key={movie.id} {...movie}/>
    )
    );

    // const listOfMoviesJSX = movies.map(movie => (
    //     <li>{movie.title}</li>
    // ))
    // const listOfMovies = movies.map(movie => (
    //     <div className="col" style={{border: "1px solid black", padding:'10px', background:'purple', margin:'10px', color:'white' }}>{movie.title}</div>
    // ))

    // const movieItems = movies.map(movie => (
    //     <div key={movie.id} id={movie.id}>{movie.title}</div> // key prop is required for lists
    //     ))

    return (
        <div className="MoviesList componentBox">
            <div className="row"> 
                {movieItems}
            </div>
            {/* <ul> 
                {listOfMoviesJSX}
            </ul> */}
        </div>
    )

    

}
export default MoviesList;