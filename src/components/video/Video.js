import React from 'react';
import "./_video.scss";

import {AiFillEye} from "react-icons/ai"

const Video = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img src="https://i.ytimg.com/vi/mIyIc6IWBzo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDy25LOyWv_AhJBpiIKZcMyCsQk1g" alt="" />
                <span>05:43</span>
            </div>
            <div className="video__title">
                Create App in 5 minutes #made by someone
            </div>
            <div className="video__details">
                <span>
                    <AiFillEye /> 5m Views •
                </span>
                <span>
                    5 days ago
                </span>
            </div>
            <div className="video__channel">
                <img src="https://yt3.ggpht.com/ytc/AKedOLSQnPeUQ9rFmkq9oOvnO--vHir9MuJ1SBWWJFx-=s88-c-k-c0x00ffffff-no-rj" alt="" />
                <p>Rainbow Hat Jr</p>
            </div>
        </div>
    )
}

export default Video
