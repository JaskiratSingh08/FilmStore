import { Badge } from '@mui/material'
import React from 'react'
import { img_300, unavailable } from '../../config/Config'
import './SingleContent.scss'

const SingleContent = ({
    id,
    title,
    poster,
    overview,
    media_type,
    ratings,
    rdate, }) => {

    // function changecolor(){
    //     document.getElementsByClassName
    // }
    return (
        <div className="SingleContent">
            {/* <span className="ratings">
                {ratings}
            </span> */}
            <Badge badgeContent={ratings} color={ratings > 6 ? "primary" : "secondary"} />
            <img
                className="sc_img"
                alt={title}
                src={poster ? `${img_300}${poster}` : unavailable} />
            <h3 className="title">{title}</h3>
            {/* <p className="overview">{overview}</p> */}
            <div className="for_mediatype">

                <p className="mediatype">{media_type === "tv" ? "TV series" : "Movie"}</p>

                <span className="date">{rdate}</span>
            </div>
        </div>

    )
}

export default SingleContent