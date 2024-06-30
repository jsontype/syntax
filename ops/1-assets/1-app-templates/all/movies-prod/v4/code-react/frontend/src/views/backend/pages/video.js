import React from 'react'
import video from '../../../assets/video/trailer.mp4'

const Video = () => {
    return (
        <>
            <section className="height-100-vh iq-main-slider">
                <video className="video d-block" controls>
                    <source src={video}/>
                </video>
            </section> 
        </>
    )
}

export default Video