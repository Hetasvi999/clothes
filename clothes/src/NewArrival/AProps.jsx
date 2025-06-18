import React from 'react'
import star from '../../public/assets/img/Star.png'

const AProps = ({ img1, title, price, oldprice,view }) => {

    return (
        <>
            <div className="bottom-item">
                <div className="items-a">
                    <img src={img1} alt="" />
                    <p>{title}</p>
                    <div className="start">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />

                    </div>
                    <span>{price}</span>
                    <span className='old'>{oldprice}</span>


                </div>
            </div>
        </>
    )
}

export default AProps