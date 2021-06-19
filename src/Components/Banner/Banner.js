import React, { useContext, useEffect, useState } from 'react'
import axios from '../../axios'
import constants from '../../constants/constants'
import { urlIdContext } from '../../store/Context'
import './Banner.css'
function Banner() {
    const {setUrlId}=useContext(urlIdContext)

    const [movie,setMovie]=useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${constants.API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[0])
        })
    }, [])

    const handleMovie=(id)=>{
        axios.get(`movie/${id}/videos?api_key=${constants.API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0].key)
            }else{
                alert('Not Available')
            }
        })
    }

    return (
        <div className='banner' style={{backgroundImage:`url(${movie ? constants.imageUrl+movie.backdrop_path : ''})`}}>
            <div className="content">
                <h1 className="title">{movie ? movie.original_name : ''}</h1>
                <div className="banner_buttons">
                    <button onClick={()=>handleMovie(movie.id)} className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">{movie ? movie.overview : ''}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
