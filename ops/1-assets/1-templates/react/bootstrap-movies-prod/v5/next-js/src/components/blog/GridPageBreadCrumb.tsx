import React, { Fragment, memo, useEffect } from 'react'

// Redux Selector / Action
import { useDispatch } from 'react-redux';

// import state selectors
import { set_breadcrumb } from '@/store/streamit/actions'

const GridPageBreadCrumb = memo(({ type }: { type: any }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        switch (type) {
            case 'one-column':
                dispatch(set_breadcrumb({ show: true, name: '1 Column Blog' }))
                break;
            case 'two-column':
                dispatch(set_breadcrumb({ show: true, name: '2 Column Blog' }))
                break;
            case 'three-column':
                dispatch(set_breadcrumb({ show: true, name: '3 Column Blog' }))
                break;
            case 'four-column':
                dispatch(set_breadcrumb({ show: true, name: '4 Column Blog' }))
                break;

            default:
                dispatch(set_breadcrumb({ show: true, name: 'Grid' }))
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

GridPageBreadCrumb.displayName = "GridPageBreadCrumb"
export default GridPageBreadCrumb