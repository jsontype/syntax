import React from 'react'
import styles from './CheckBox.module.css'

function CheckBox ({ children, checked, ...rest }) {
    return (
        <div className={styles.checkbox}>
            <label>
                <input type="checkbox" checked={checked} {...rest} />
                <div>{checked ? '체크됨' : '체크 안됨'}</div>
            </label>
            <span>{children}</span>
        </div>
    )
}

export default CheckBox
