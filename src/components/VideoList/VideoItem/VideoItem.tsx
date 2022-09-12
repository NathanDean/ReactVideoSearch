import React from "react";
import he from "he";
import Video from "../../../models/Video";
import VideoItemProps from "../../../models/VideoItemProps";
import "./VideoItem.css";

const VideoItem = ({video, onVideoSelect}: VideoItemProps) => {

    return(

        <div
            className = "video-item"
            onClick = {() => onVideoSelect(video)}>
            
            <img 
                src = {video.snippet.thumbnails.medium.url} 
            />

            <div>

                <p className = "item-title">
                
                    {he.decode(video.snippet.title)}

                </p>

            </div>

        </div> 

    )

}

export default VideoItem