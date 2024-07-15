import React, { Fragment, memo, useEffect } from 'react'

// Redux Selector / Action
import { useDispatch } from 'react-redux';

// import state selectors
import { set_breadcrumb } from '@/store/streamit/actions'

const FilterBlogBreadcrumb = memo(({ type }: { type: any }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        switch (type) {
            case 'date':
                dispatch(set_breadcrumb({ show: true, name: 'Day: September 23, 2022' }))
                break;
            case 'category':
                dispatch(set_breadcrumb({ show: true, name: 'Dramas' }))
                break;
            case 'tags':
                dispatch(set_breadcrumb({ show: true, name: 'Comedy' }))
                break;
            case 'author':
                dispatch(set_breadcrumb({ show: true, name: 'Author: Goldenmace' }))
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

FilterBlogBreadcrumb.displayName = "FilterBlogBreadcrumb"
export default FilterBlogBreadcrumb