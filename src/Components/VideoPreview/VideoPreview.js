import React, { useContext } from 'react'
import './VideoPreview.css'
import YouTube from 'react-youtube'
import { showPreviewContext, urlIdContext } from '../../store/Context'

function VideoPreview() {
    const {urlId,setUrlId}=useContext(urlIdContext)
    const {setShowPreview}=useContext(showPreviewContext)

    const opts = {
        height: '500px',
        width: '60%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }

    return (
        <div onClick={()=>{
            setShowPreview(false)
            setTimeout(()=>{
                setUrlId()
            },300)
        }} className="videoPreviewMainDiv">
            <YouTube videoId={urlId} opts={opts}/>
        </div>
    )
}

export default VideoPreview
