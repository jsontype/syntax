import {memo,Fragment}from 'react'
import RadioBtn from '../elements/radio-btn'

const PageStyle = memo((props) => {
    return (
        <Fragment>
            <div>
                <h6 className="d-inline-block mb-3 me-2">Page Style </h6>
            </div>
            <div className="d-grid gap-3 grid-cols-2 mb-4">
                <RadioBtn btnName="page_layout" inputclassName="btn-check"  labelclassName="btn btn-border d-block"  id="page-layout-boxed" defaultChecked={props.pageLayout} value="container" >
                    Boxed
                </RadioBtn>
                <RadioBtn btnName="page_layout" inputclassName="btn-check" labelclassName="btn btn-border d-block"  id="page-layout-full-width" defaultChecked={props.pageLayout} value="container-fluid" >
                    Full Width
                </RadioBtn>
            </div>
        </Fragment>
    )
}
)

PageStyle.displayName="PageStyle"
export default PageStyle