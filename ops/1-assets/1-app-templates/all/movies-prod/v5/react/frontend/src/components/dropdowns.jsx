import React,{forwardRef} from 'react'

//react-router-dom
import { Link} from 'react-router-dom'

const CustomToggle = forwardRef(({ children,variant, onClick }, ref) => (
    <Link
      to="/"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className={variant}
      style={{color:'unset'}}
    >
      {children}
      
    </Link>
));
  export default CustomToggle;