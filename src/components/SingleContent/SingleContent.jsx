import React from 'react'
import { img_300, unavailable } from '../../config/Config'

const SingleContent = (c) => {
    return (
        <div className="SingleContent">
            <h3 className="title">{c.title}</h3>
            <p>{c.overview}</p>
            <img
                className="sc_img"
                alt={c.title}
                src={c.poster ? `${img_300}${c.poster}` : unavailable} />
            <span className="mediatype">{c.media_type ==="tv" ? "TV series" : "Movie"}</span>
            <span className="date">{c.rdate}</span>
        </div>
    )
}

export default SingleContent