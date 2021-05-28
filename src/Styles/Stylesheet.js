import React from 'react'
import './Stylesheet.css'
import styles from './Style.module.css'

function Stylesheet() {
    const heading = {
        fontSize:'12px',
        color : 'blue'
    }
    return (
        <div>
            {/* <h1 className='heading'>Hello World</h1> */}

            {/* <h1 style={heading}>Hello World</h1> */}

            <h1 className={styles.heading}>hello World</h1>





        </div>
    )
}

export default Stylesheet