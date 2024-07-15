import React, { Fragment, memo } from 'react'

//react-router-dom
import Link from "next/link";

interface Props {
    image: string,
    title: string,
    views: string,
    duration: string,
}

const WishlistCard = memo((props: Props) => {
    return (
        <Fragment>

            <div className="watchlist-warpper card-style-two">
                <div className="block-images d-flex align-items-center flex-wrap gap-2 gap-md-3">
                    <div className="img-box">
                        <Link href="/videos/detail" className="position-absolute top-0 bottom-0 start-0 end-0"></Link>
                        <img src={props.image} alt="movie-card" className="img-fluid object-cover d-block border-0" />
                    </div>
                    <div className="card-description">
                        <h5 className="text-capitalize fw-500"> <Link href="/videos/detail">{props.title}</Link> </h5>
                        <div className="seperator d-flex align-items-center">
                            <span className="text-body fw-semibold font-size-12 text-capitalize">{props.views}</span>
                            <span className="circle circle-small"></span>
                            <span className="text-body fw-semibold font-size-12 text-capitalize">{props.duration}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
})

WishlistCard.displayName = "WishlistCard"
export default WishlistCard