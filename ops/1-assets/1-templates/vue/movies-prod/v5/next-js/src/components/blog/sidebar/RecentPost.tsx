import React, { Fragment, memo } from 'react'

//react-router-dom
import Link from "next/link";

//static data
import { blogRecent } from '../../../StaticData/blogs'

interface post {
  thumbnail: any,
  title: string,
  blogDate: string
}

const RecentPost = memo(() => {

  const rescentPost: post[] = blogRecent as post[];

  return (
    <Fragment>
      <div className="widget iq-widget-blog">
        <h5 className="widget-title position-relative">Recent Post</h5>
        <ul className="list-inline p-0 m-0">

          {rescentPost.map((item, index) => {
            return (
              <li key={index} className='d-flex align-items-center gap-4'>
                <div className="img-holder">

                  <Link href='/blogs/blogs-detail'>
                    <img src={item.thumbnail} className="img-fluid h-100 w-100 object-cover" alt="" loading="lazy" /></Link>
                </div>
                <div className="post-blog">
                  <Link href='/blogs/detail' className='new-link'>
                    <h6 className='post-title'>{item.title}</h6>
                  </Link>
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item border-0 mb-0 pb-0">
                      <Link className="blog-data" href="#">
                        <i className="fa fa-calendar-alt me-1" aria-hidden="true"></i>{item.blogDate}</Link>
                    </li>
                  </ul>
                </div>
              </li>
            )
          })
          }
        </ul>
      </div>
    </Fragment>
  )
})

RecentPost.displayName = "RecentPost"
export default RecentPost