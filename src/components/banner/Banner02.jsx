import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Button from '../button';

import img from '../../assets/images/layout/Ultronxchange-03.png'

Banner02.propTypes = {

};

function Banner02(props) {
    const [dataBlock] = useState(
        {
            heading: 'A trusted and secure cryptocurrency exchange.',
            desc : '',
        }
    );
    return (
        <section className="banner">
            <div className="container">
                <div className="row">
                <div className="col-xl-6 col-md-12">
                    <div className="banner__content">
                        <h2 className="title">
                            {dataBlock.heading}
                        </h2>
                        <p className="fs-20 desc">
                            {dataBlock.desc}
                        </p>
                        <Button title='Trade Now' path='/account/trade/BTC-USDT' />
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="banner__image">
                    <img src={img} alt="UltronX" />
                    </div>
                </div>
                </div>
            </div>
            </section>
    );
}

export default Banner02;
