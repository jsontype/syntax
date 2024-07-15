import {memo,Fragment}from 'react'
import CheckboxBtn from '../elements/checkbox-btn'


const MenuStyle = memo((props) => {
    return (
        <Fragment>
            <h5 className="mt-4 mb-3">Menu Style</h5>
            <div className="d-grid gap-3 grid-cols-3 mb-4">
                <CheckboxBtn btnName="sidebar_type" className="text-center"  imgComponent={true} label="Mini"  labelclassName="overflow-hidden" id="sidebar-mini" defaultChecked={props.sidebarType} value="sidebar-mini" >
                    Mini
                </CheckboxBtn>
                <CheckboxBtn btnName="sidebar_type" className="text-center"  imgComponent={true} label="Hover"  labelclassName="overflow-hidden" id="sidebar-hover" defaultChecked={props.sidebarType} value="sidebar-hover" >
                    Hover
                </CheckboxBtn>
                <CheckboxBtn btnName="sidebar_type" className="text-center"  imgComponent={true} label="soft"  labelclassName="overflow-hidden" id="sidebar-soft" defaultChecked={props.sidebarType} value="sidebar-soft" >
                    Soft
                </CheckboxBtn>
                
            </div>
        </Fragment>
    )
}
)

MenuStyle.displayName="MenuStyle"
export default MenuStyle