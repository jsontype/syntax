import {memo,Fragment} from 'react'
import RadioBtn from '../elements/radio-btn'

const Direction = memo((props) => {
  return (
    <Fragment>
        <h5 className="mb-3">Direction</h5>
        <RadioBtn btnName="theme_scheme_direction" imgComponent={true} label="LTR" className="form-check mb-3 w-100" inputclassName="form-check-input custum-redio-btn" labelclassName="form-check-label d-flex align-items-center justify-content-between" id="theme-scheme-direction-ltr" defaultChecked={props.themeSchemeDirection} value="ltr" >
            LTR
            <svg className="text-primary" width="60" height="27" viewBox="0 0 60 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.5" cy="13.5002" r="6.5" fill="currentColor"></circle>
                <rect x="21" y="7.70026" width="34" height="5" rx="2" fill="#80868B"></rect>
                <rect opacity="0.5" x="21" y="16.1003" width="25.6281" height="3.2" rx="1.6" fill="#80868B"></rect>
                <rect x="0.375" y="0.375244" width="59.25" height="26.25" rx="4.125" stroke="currentColor" strokeWidth="0.75"></rect>
            </svg>
        </RadioBtn>
        <RadioBtn btnName="theme_scheme_direction" imgComponent={true} label="RTL" className="form-check mb-3 w-100" inputclassName="form-check-input custum-redio-btn" labelclassName="form-check-label d-flex align-items-center justify-content-between" id="theme-scheme-direction-rtl" defaultChecked={props.themeSchemeDirection} value="rtl" >
            RTL
            <svg className="text-primary" width="60" height="27" viewBox="0 0 60 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle r="6.5" transform="matrix(-1 0 0 1 48.5 13.5002)" fill="currentColor"></circle>
                <rect width="34" height="5" rx="2" transform="matrix(-1 0 0 1 39 7.70026)" fill="#80868B"></rect>
                <rect opacity="0.5" width="25.6281" height="3.2" rx="1.6" transform="matrix(-1 0 0 1 39 16.1003)" fill="#80868B"></rect>
                <rect x="-0.375" y="0.375" width="59.25" height="26.25" rx="4.125" transform="matrix(-1 0 0 1 59.25 0.000244141)" stroke="currentColor" strokeWidth="0.75"></rect>
            </svg>
        </RadioBtn>
    </Fragment>
  )
})

Direction.displayName = 'Direction'
export default Direction