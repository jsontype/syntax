import React, { Fragment, memo } from 'react'

//react-router-dom
import Link from "next/link";

const Sources = memo(() => {
  return (
    <Fragment>
      <div className='source-list-content table-responsive'>
        <table className='table custom-table'>
          <thead>
            <tr>
              <th>Links</th>
              <th>Quality</th>
              <th>Language</th>
              <th>Player</th>
              <th>Date Added</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="iq-button">
                  <Link href="/movies/detail" className="btn text-uppercase position-relative">
                    <span className="button-text"> Play Now</span>
                    <i className="fa-solid fa-play"></i>
                  </Link>
                </div>
              </td>
              <td>1080p</td>
              <td>english</td>
              <td>MusicBee</td>
              <td>2021-11-28</td>
            </tr>
            <tr>
              <td>
                <div className="iq-button">
                  <Link href="/movies/detail" className="btn text-uppercase position-relative">
                    <span className="button-text"> Play Now</span>
                    <i className="fa-solid fa-play"></i>
                  </Link>
                </div>
              </td>
              <td>800p</td>
              <td>english</td>
              <td>5KPlayer</td>
              <td>2021-11-25</td>
            </tr>
            <tr>
              <td>
                <div className="iq-button">
                  <Link href="/movies/detail" className="btn text-uppercase position-relative">
                    <span className="button-text"> Play Now</span>
                    <i className="fa-solid fa-play"></i>
                  </Link>
                </div>
              </td>
              <td>720p</td>
              <td>English</td>
              <td>MediaMonkey</td>
              <td>2021-11-20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
})

export default Sources