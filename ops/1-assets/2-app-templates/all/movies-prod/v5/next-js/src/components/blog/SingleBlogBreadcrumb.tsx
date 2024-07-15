import React, { Fragment, memo, useEffect } from 'react'

// Redux Selector / Action
import { useDispatch } from 'react-redux';

// import state selectors
import { set_breadcrumb } from '@/store/streamit/actions'

const SingleBlogBreadcrumb = memo(({ type }: { type: any }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        switch (type) {
            case 'audio':
                dispatch(set_breadcrumb({ show: true, name: 'My streaming Black Pearl' }))
                break;
            case 'video':
                dispatch(set_breadcrumb({ show: true, name: 'Cookies and Web Beacons' }))
                break;
            case 'link':
                dispatch(set_breadcrumb({ show: true, name: 'Birds Of Prey Star Says She’s Definitely Open To A Ghost Return' }))
                break;
            case 'quote':
                dispatch(set_breadcrumb({ show: true, name: 'Saturday Night Live’ Re-Enacts Biden and Harris’ Victory Speeches' }))
                break;
            case 'gallery':
                dispatch(set_breadcrumb({ show: true, name: 'Gillian Anderson Shares the Photos From The Crown' }))
                break;
            default:
                break;
        }
        return () => {
            dispatch(set_breadcrumb({ show: false, name: '' }))
        }
    }, [type])
    return (
        <Fragment>
        </Fragment>
    )
})

SingleBlogBreadcrumb.displayName = "SingleBlogBreadcrumb"
export default SingleBlogBreadcrumb