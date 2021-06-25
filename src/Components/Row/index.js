// import axios from 'axios';
import axios from '../../Api/axios';
import React, { useEffect, useState } from 'react'
import './Row.scss';
import Loading from '../Loadding';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


function Row({ title, fetchUrl, isLargeRow }) {
    const baseURL = `https://image.tmdb.org/t/p/original/`;
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [trailer, setTrailer] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
        }
        fetchData();
        setTimeout(() => {
            setLoading(false)
        }, 2000)

    }, [fetchUrl])

    const opts = {
        height: "400",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },

    }
    const handleClick = (movie) => {
        if (trailer) {
            setTrailer('');
        } else {
            console.log(movie.name, "paragrams")
            // let arr = movie.name.split(' ');
            // const arr1 = arr.join('_');
            // console.log(arr1, "arr")
            movieTrailer(movie.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    // console.log({ urlParams }, "para")
                    // console.log(url, "para1")
                    setTrailer(urlParams.get("v"));
                    // console.log(trailer, "trailer")
                }).catch(error => console.log(error))
        }
    }

    return (

        loading ? <Loading /> :

            <div className="row">
                <h1 className="row__title">{title}</h1>
                <div className="row__posters">
                    {movies.map((data) => {
                        return (
                            <img onClick={() => handleClick(data)} key={data.id} className={`row__poster ${isLargeRow && "row_largePoster"} `}
                                src={`${baseURL}${isLargeRow ? data.poster_path : data.backdrop_path}`} alt="img" />
                        );
                    })}
                </div>
                {trailer && <YouTube videoId={trailer} opts={opts} />}
            </div>

    )


}

export default Row;
