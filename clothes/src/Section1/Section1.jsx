import React from 'react';
import './Section-1.css';
import SectionProp from './SectionProp';

const Section1 = () => {
    return (
        <div className="main-page">
            <div className="container">
                <div className="page-inner">
                    <div className="images">
                        {/* <img src="/assets/img/Rectangle 2.png" alt="Fashion Banner" /> */}
                        <div className="text">
                            <p className="headline">FIND CLOTHES THAT MATCHES YOUR STYLE</p>
                            <p className="info">
                                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                            </p>
                            <a href="#" className="shop-button">Shop Now</a>
                            <div className="items">
                                <SectionProp number="200+" information="International Brands" />
                                <SectionProp number="2000+" information="High-Quality Products" />
                                <SectionProp number="3000+" information="Happy Customers" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
