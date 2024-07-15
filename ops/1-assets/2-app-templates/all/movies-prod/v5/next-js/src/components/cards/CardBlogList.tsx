import React, { Fragment, memo } from 'react'

//react-router-dom
import Link from "next/link";

interface Props {
  thumbnail: any;
  blogDate: String;
  username: String;
  title: String;
  description: String;
  categories: String;
  tags: string[];
}

const CardBlogList = memo((props: Props) => {
  return (
    <Fragment>
      <article>
        <div className="iq-blog-box" >
          <div className="iq-blog-image clearfix">
            <Link href='/blogs/detail'><img src={props.thumbnail} alt="" className='img-fluid w-100' /></Link>
          </div>
          <div className="iq-blog-detail">
            <div className="iq-blog-meta d-flex mb-3">
              <ul className='list-inline mb-0'>
                <li className="border-gredient-left">
                  <Link href="/blogs/filter/date" rel="bookmark">
                    <span>{props.blogDate}</span>
                  </Link>
                </li>
              </ul>
              <ul className="list-inline mb-0">
                <li className="border-gredient-left">
                  <Link href="/blogs/filter/author" > {props.username}</Link>
                </li>
              </ul>
            </div>
            <Link href='/blogs/detail'>
              <h3 className="mb-3 line-count-1 blog-heading">
                {props.title}</h3>
            </Link>
            <p className='line-count-2'>{props.description}</p>
            <div className="iq-button">
              <Link className="btn text-uppercase position-relative" href='/blogs/detail'>Read More
                <i className="fa-solid fa-play"></i>
              </Link>
            </div>
            <ul className="iq-blog-meta-cat-tag iq-blogcat mt-4">
              <li className="iq-tag-title">
                <i className="fa fa-film " aria-hidden="true"></i> Categories:
              </li>
              <li>
                <Link href="/blogs/filter/category">{props.categories}</Link>
              </li>
            </ul>
            <ul className="iq-blog-meta-cat-tag iq-blogtag">
              <li className="iq-tag-title">
                <i className="fas fa-tags" aria-hidden="true"></i> Tags:
              </li>
              {props.tags.map((item, index) => {
                return (
                  <li key={index}><Link href="/blogs/filter/tags">{item}</Link></li>
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