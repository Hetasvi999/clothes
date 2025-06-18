import React from 'react'

const SectionProp = ({ number, information }) => {
    return (
        <>
            <div className="counter">
                <h2>{number}</h2>
                <p className='count'>{information}</p>
            </div>
        </>
    )
}

export default SectionProp