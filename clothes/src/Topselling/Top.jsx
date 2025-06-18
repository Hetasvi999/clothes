import React, { useContext } from 'react';
import '../NewArrival/Arrival.css';
import { Context } from '../context/Context';
import AProps from '../NewArrival/AProps';

const Top = () => {
    const { Products } = useContext(Context);

    return (
        <div className="main-arrival">
            <div className="container">
                <div className="inner-arrival">

                    <div className="top">
                        <h1>Top Selling</h1>
                    </div>

                    <div className="bottom">
                        <div className="inner-bottom">
                            {Products.map((item) => (
                                <AProps
                                    key={item.id}
                                    id={item.id}
                                    img1={item.img1}
                                    title={item.title}
                                    price={item.price}
                                    oldprice={item.oldprice}
                                />
                            ))}
                        </div>
                        <button className="all">View All</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;
