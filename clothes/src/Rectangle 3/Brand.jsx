import React, { useContext } from 'react'
import './Brand.css'
import Bprops from './Bprops'

const Brand = () => {
    return (
        <>
            <div className="main-brand">
                <div className="container">
                    <div className="items">
                        <Bprops img="/assets/img/v.png" />
                        <Bprops img="/assets/img/calvin.png" />
                        <Bprops img="/assets/img/gucci.png" />
                        <Bprops img="/assets/img/prada.png" />
                        <Bprops img="/assets/img/zara.png" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Brand