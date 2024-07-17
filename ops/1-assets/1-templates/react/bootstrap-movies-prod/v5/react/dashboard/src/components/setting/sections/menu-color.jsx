import { memo, Fragment } from 'react'
import RadioBtn from '../elements/radio-btn'

const MenuColor = memo((props) => {

    return (
        <Fragment>
            <div>
            <h6 className="mt-4 mb-3">Menu Color</h6>
                <div className="d-grid gap-3 grid-cols-3 mb-3">
                        <RadioBtn inputclassName="btn-check" btnName="sidebar_color"  imgComponent  labelclassName="btn btn-border d-block" id="sidebar-white" defaultChecked={props.sidebarColor} value="sidebar-white" >Light</RadioBtn>
                         <RadioBtn btnName="sidebar_color" inputclassName="btn-check" imgComponent   labelclassName="btn btn-border d-block" id="sidebar-dark" defaultChecked={props.sidebarColor} value="sidebar-dark" >Dark</RadioBtn>
                        <RadioBtn btnName="sidebar_color" inputclassName="btn-check" imgComponent   labelclassName="btn btn-border d-block" id="sidebar-color" defaultChecked={props.sidebarColor} value="sidebar-color" >Color</RadioBtn>
                </div>
                </div>
        </Fragment>
    )
}
)

MenuColor.displayName = 'MenuColor'
export default MenuColor