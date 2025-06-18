import React from 'react';
import './Customer.css';

const reviews = [
    {
        name: "Sarah M.",
        message: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`
    },
    {
        name: "John D.",
        message: `"Shop.co never fails to impress me. The fit, the style, and the comfort are all on point. Highly recommend it to anyone looking to upgrade their wardrobe."`
    },
    {
        name: "John D.",
        message: `"Shop.co never fails to impress me. The fit, the style, and the comfort are all on point. Highly recommend it to anyone looking to upgrade their wardrobe."`
    },
    {
        name: "Emily R.",
        message: `"From browsing to delivery, the experience was seamless. Great styles and superb customer support!"`
    },
    {
        name: "Emily R.",
        message: `"From browsing to delivery, the experience was seamless. Great styles and superb customer support!"`
    },
    {
        name: "Emily R.",
        message: `"From browsing to delivery, the experience was seamless. Great styles and superb customer support!"`
    }
];

const Customer = () => {
    return (
        <div className="customer-main">
            <div className="container">
                <div className="customer-item">
                    <div className="top">
                        <h2>OUR HAPPY CUSTOMERS</h2>
                    </div>
                    <div className="bottom">
                        {reviews.map((review, index) => (
                            <div className="inner-cus" key={index}>
                                <div className="cus">
                                    <h5>{review.name}</h5>
                                    <p>{review.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;
