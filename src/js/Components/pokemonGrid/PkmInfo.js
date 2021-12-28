import React from 'react'

const PkmInfo = ({pkmData, hideInfo}) => {
    return (
        <div onClick={(hideInfo)}>
            {JSON.stringify(pkmData)}
        </div>
    )
}

export default PkmInfo
