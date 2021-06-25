import React, { useEffect, useState } from 'react'
import axios from '../../Api/axios';
import requests from '../../Api/request';
import './Banner.scss';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)

            ])
            console.log(request.data.results[0], "res")
            console.log(Math.floor(Math.random() * request.data.results.length - 1))
            // return request;
        }
        fetchData();

    }, [movie !== undefined])
    console.log(movie, "movie");
    // https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
    }

    return (
        <div className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: ` url(
                "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
            )`,
            backgroundPosition: "center center",
            height: "60vh",
            marginTop: "0"
        }}>
            <h1 className="banner__title" style={{ margin: 0 }}>{movie.title || movie.name || movie.original_name}</h1>
            <div className="banner__button">
                <button>Play</button>
                <button>My List</button>
            </div>
            <p className="banner__overview">{
                truncate(movie.overview, 150)
            }</p>

            <div className="banner--bottom">

            </div>
        </div>
    )
}

export default Banner
