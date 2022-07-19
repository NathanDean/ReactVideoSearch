import "./VideoDetail.css"

import React from "react";
import he from "he";

class VideoDetail extends React.Component {
    
    // onIframeLoad = () => {
    //     const player = document.querySelector("iframe");
    //     player.style.height = `${player.contentWindow.document.body.scrollHeight}px`;
    // }
    
    render(){

        const video = this.props.video;
        const videoSrc = (
            video !== null ? `https://www.youtube.com/embed/${video.id.videoId}` 
        : 
            undefined
        )
            
        if(video === null){

            return(

                <div>Select a video</div>

            )

        }

        return(

            <div className = "video-detail">
                
                <div className="videoWrapper">
                
                    <iframe 
                        src = {videoSrc} 
                        frameBorder = "0"
                        // onLoad = {this.onIframeLoad}
                    ></iframe>

                </div>

                <h2>{he.decode(video.snippet.title)}</h2>

                <p>{video.snippet.description}</p>

                <a href = {`https://www.youtube.com/watch?v=${video.id.videoId}`}>See more</a>

            </div>

        )

    }

}

export default VideoDetail