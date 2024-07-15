import React, { Fragment, memo } from 'react'

//react-router-dom
import { Link } from 'react-router-dom'

//hooks
import { useTranslation } from 'react-i18next'

const CardBlogGrid = memo((props) => {
    const { t } = useTranslation()
    return (
        <Fragment>
            <div className="iq-blog-box">
                <div className="iq-blog-image clearfix">
                    <Link to="/blogs-detail">
                        <img src={props.thumbnail} alt="" loading="lazy" className='img-fluid w-100' />
                    </Link>
                </div>
                <div className="iq-blog-detail">
                    <div className="iq-blog-meta d-flex mb-3">
                        <ul className="list-inline mb-0">
                            <li className="border-gredient-left">
                                <Link to="/blogs-date">
                                    <span>{props.date}</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="iq-blogtag list-inline">
                            <li className="border-gredient-left">
                                <Link to="/blogs-tag"> {props.categories}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="blog-title">
                        <Link to={`/blogs-detail`}>
                            <h3 className="mb-3 line-count-1 blog-heading">
                                {props.title}
                            </h3>
                        </Link>
                    </div>
                    <p className='line-count-2'>{props.description}</p>
                    <div className="iq-button link-button">
                        <Link to='/blogs-detail' className="btn text-capitalize position-relative"><span className='button-text'>
                            {t('form.read_more')}{" "}<i className="fa fa-angle-right ml-2" aria-hidden="true"></i>
                        </span></Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
})

CardBlogGrid.displayName = "CardBlogGrid"
export default CardBlogGrid