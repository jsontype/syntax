import React from 'react'

//react-router-dom
import { Link} from 'react-router-dom'

const CustomToggle = React.forwardRef(({ children,variant, onClick }, ref) => (
    <Link
      to="/"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className={variant}
    >
      {children}
      
    </Link>
));
  export default CustomToggle;