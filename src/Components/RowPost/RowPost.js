import axios from '../../axios'
import React, { useContext, useEffect, useState } from 'react'
import constants from '../../constants/constants'
import './RowPost.css'
import { showPreviewContext, urlIdContext } from '../../store/Context'
// import YouTube from 'react-youtube'

function RowPost(props) {
    const {setUrlId}=useContext(urlIdContext)
    const {setShowPreview}=useContext(showPreviewContext)

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        }).catch((err) => {
            alert('Something went wrong')
        })
    }, [props])
    movies.map((obj)=>setMovies)
    
    const handleMovie=(id)=>{
        axios.get(`movie/${id}/videos?api_key=${constants.API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0].key)
                setShowPreview(true)
            }else{
                alert('Not Available')
            }
        })
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj) =>
                <div className='title-wrap'>
                    <img onClick={() =>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${constants.imageUrl + obj.backdrop_path}`} alt="Posters" />
                </div>
                    
                )}
            </div>
            {/* {urlId && <YouTube videoId={urlId} opts={opts} />} */}
        </div>
    )
}

export default RowPost
