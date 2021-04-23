import React, {useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import  MovieList from './MovieList';
import { Button } from 'react-bootstrap';

const Descriptions = ({match}) => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
    setMovie(MovieList.find(mv => mv.Id === Number(match.params.Id)))
}, [match.params.Id]);
    
    return (
        <div className="details"> 
                <h2 className="title">Descriptions</h2>
                <h4>{movie.Title}</h4> 
                <p>{movie.Des}</p>
            <iframe width="560" height="315" src={movie.lien} 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            <br/>
            <Link to="/">
            <Button variant="secondary">Go back</Button>
            </Link>
        </div>
    )
}

export default Descriptions
