import { useState } from 'react'

const PkbBtn = ({ clicked,toggleShowContainer }) => {

    return (
        <div>
            <button className="btnShowContainer" onClick={toggleShowContainer} style={clicked? {backgroundColor : 'red'} : null}></button>
        </div>
    )
}

export default PkbBtn
