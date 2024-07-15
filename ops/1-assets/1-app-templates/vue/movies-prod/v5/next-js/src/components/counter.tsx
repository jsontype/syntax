import React,{useState,memo,Fragment} from 'react'

//React-bootstrap
import {Button} from 'react-bootstrap'

const Counter = memo(() => {
    const [counter, setCount] = useState(2);
    const increase = () => setCount(counter + 1);
    const decrease = () => setCount(( counter > 0 ) ? counter - 1 : 0);
  return (
    <Fragment>
          <div className="btn-group iq-qty-btn border border-white rounded-0" data-qty="btn" role="group">
            <Button variant="btn-outline-light iq-quantity-minus text-white border-0" size="sm" onClick={decrease}>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" viewBox="0 0 6 3" fill="none">
                    <path d="M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z" fill="currentColor"></path>
                </svg>
            </Button> 
            <input type="text" data-qty="input" className="btn btn-sm btn-outline-light input-display border-0" disabled value={counter}  title="Qty" placeholder=""/>
            <Button variant="btn-outline-light iq-quantity-plus text-white border-0" size="sm" onClick={increase}>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
                    <path d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z" fill="currentColor"></path>
                </svg>
            </Button>
        </div>
    </Fragment>
  )
})

Counter.displayName="Counter"
export default Counter