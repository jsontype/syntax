import React, { Fragment, memo, useEffect } from 'react'

// Redux Selector / Action
import { useDispatch } from 'react-redux';

// import state selectors
import { set_breadcrumb } from '@/store/streamit/actions'

const SidebarBreadcrumb = memo(({ type }: { type: any }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        switch (type) {
            case 'left':
                dispatch(set_breadcrumb({ show: true, name: 'Left Sidebar' }))
                break;
            case 'right':
                dispatch(set_breadcrumb({ show: true, name: 'Right Sidebar' }))
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

SidebarBreadcrumb.displayName = "SidebarBreadcrumb"
export default SidebarBreadcrumb