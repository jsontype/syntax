import React from 'react'

function Wrapper({children}) {
    const style = { border: '2px solid gray' }

    return (
        <div style={style}>
           {children}
        </div>
    )
}

export default Wrapper