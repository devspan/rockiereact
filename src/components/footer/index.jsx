import React, { useState, useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

import img from '../../assets/images/logo/Exchange Logo-01.png';
import img1 from '../../assets/images/logo/Exchange Logo-01.png';

function Footer(props) {
    const [productLink] = useState([
        { title: 'Spot', path: '/account/trade' },
        { title: 'Swap', path: '/account/quick-swap' },
        { title: 'Wallet', path: '/account/wallet' },
    ]);
    
    const [servicesLink] = useState([
        { title: 'Support', path: '/account/support' },
        { title: 'Settings', path: '/account/settings' },
        { title: 'Trading Fee', path: '/account/fees' },
    ]);

    const [listSocial] = useState([
        { icon: 'fab fa-facebook-f', path: 'https://www.facebook.com/profile.php?id=61559577652699' },
        { icon: 'fab fa-instagram', path: 'https://www.instagram.com/ultronexchange/' },
        { icon: 'fab fa-youtube', path: 'https://www.youtube.com/channel/UCbO-x-iBs56yjD5eOz3JV7Q' },
        { icon: 'fab fa-twitter', path: 'https://twitter.com/ultronexchange' },
        { icon: 'fab fa-telegram', path: 'https://t.me/ultronxchange' },
    ]);

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > 500);
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <footer className="footer style-2">
            <div className="container">
                <div className="footer__main">
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="info">
                                <a href="/" className="logo light">
                                    <img src={img} alt="" width={160} />
                                </a>
                                <a href="/" className="logo dark">
                                    <img src={img1} alt="" width={160} />
                                </a>
                                <h6>Let's talk! 🤙</h6>
                                <ul className="list">
                                    <li><p>info@ultronxchange.io</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="widget">
                                <div className="widget-link">
                                    <h6 className="title">PRODUCTS</h6>
                                    <ul>
                                        {productLink.map((data, idx) => (
                                            <li key={idx}><a href={data.path}>{data.title}</a></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="widget-link s2">
                                    <h6 className="title">SERVICES</h6>
                                    <ul>
                                        {servicesLink.map((data, idx) => (
                                            <li key={idx}><a href={data.path}>{data.title}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-12">
                            <div className="footer-contact">
                                <h6>Stay Updated</h6>
                                <p>Connect with us on the following media</p>
                                <ul className="list-social">
                                    {listSocial.map((data, idx) => (
                                        <li key={idx}>
                                            <a href={data.path}><i className={data.icon}></i></a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="footer__bottom">
                    <p>©2024 Ultronxchange.io All rights reserved. Terms of Service | Privacy Terms</p>
                </div>
            </div>
            {isVisible && <Link onClick={scrollToTop} to="#" id="scroll-top"></Link>}
        </footer>
    );
}

export default Footer;
