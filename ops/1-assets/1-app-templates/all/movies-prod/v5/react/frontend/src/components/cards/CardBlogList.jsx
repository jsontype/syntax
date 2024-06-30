import React, { Fragment, memo } from 'react'

//react-router-dom
import { Link } from 'react-router-dom'

//hooks
import { useTranslation } from 'react-i18next'

const CardBlogList = memo((props) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <article>
        <div className="iq-blog-box" >
          <div className="iq-blog-image clearfix">
            <Link to='/blogs-detail'><img src={props.thumbnail} alt="" className='img-fluid w-100' /></Link>
          </div>
          <div className="iq-blog-detail">
            <div className="iq-blog-meta d-flex mb-3">
              <ul className='list-inline mb-0'>
                <li className="border-gredient-left">
                  <Link to="/blogs-date" rel="bookmark">
                    <span>{props.blogDate}</span>
                  </Link>
                </li>
              </ul>
              <ul className="list-inline mb-0">
                <li className="border-gredient-left">
                  <Link to="/blogs-author" > {props.username}</Link>
                </li>
              </ul>
            </div>
            <Link to='/blogs-detail'>
              <h3 className="mb-3 line-count-1 blog-heading">
                {props.title}</h3>
            </Link>
            <p className='line-count-2'>{props.description}</p>
            <div className="iq-button">
              <Link className="btn text-uppercase position-relative" to='/blogs-detail'>{t('form.read_more')}{" "}
                <i className="fa-solid fa-play"></i>
              </Link>
            </div>
            <ul className="iq-blog-meta-cat-tag iq-blogcat mt-4">
              <li className="iq-tag-title">
                <i className="fa fa-film " aria-hidden="true"></i> {t('form.categories')}:
              </li>
              <li>
                <Link to="/blogs-category">{props.categories}</Link>
              </li>
            </ul>
            <ul className="iq-blog-meta-cat-tag iq-blogtag">
              <li className="iq-tag-title">
                <i className="fas fa-tags" aria-hidden="true"></i> {t('form.tags')}:
              </li>
              {props.tags.map((tags, index) => {
                return (
                  <li key={index}><Link to="/blogs-tag">{t(tags)}</Link></li>
                )
              })}
            </ul>
          </div>
        </div>
      </article>
    </Fragment>
  )
})

CardBlogList.displayName = "CardBlogList"
export default CardBlogList