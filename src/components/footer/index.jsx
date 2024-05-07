import React , { useState ,useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

import img from '../../assets/images/logo/Exchange Logo-01.png'
import img1 from '../../assets/images/logo/Exchange Logo-01.png'



function Footer(props) {

    const [productLink] = useState([
        {
            title: 'Spot',
            path: '/account/trade'
        },
        {
            title: 'Swap',
            path: '/account/quick-swap'
        },
        {
            title: 'Wallet',
            path: '/account/wallet'
        },
    ]);
    const [servicesLink] = useState([
        {
            title: 'Support',
            path: '/account/support'
        },
        {
            title: 'Settings',
            path: '/account/settings'
        },
        {
            title: 'Trading Fee',
            path: '/account/fees'
        },
    ]);


    const [listSocial] = useState([
        {
            icon: 'icon-facebook-f',
            path: 'https://www.facebook.com/profile.php?id=61559577652699'
        },
        {
            icon: 'icon-instagram',
            path: 'https://www.instagram.com/ultronexchange/'
        },
        {
            icon: 'icon-youtube',
            path: 'https://www.youtube.com/channel/UCbO-x-iBs56yjD5eOz3JV7Q'
        },
        {
            icon: 'icon-twitter',
            path: 'https://twitter.com/ultronexchange'
        },
    ])


    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener("scroll", toggleVisibility);

      return () => window.removeEventListener("scroll", toggleVisibility);
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
                        <img src={img1} alt=""  width={160}/>
                        </a>
                        <h6>Let's talk! 🤙</h6>
                        <ul className="list">
                        {/* <li><p>+12 345 678 9101</p></li> */}
                        <li><p>info@ultronxchnage.io</p></li>
                        <li>
                            {/* <p>
                            Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi
                            96522
                            </p> */}
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                    <div className="widget">
                        <div className="widget-link">
                        <h6 className="title">PRODUCTS</h6>
                        <ul>
                            {
                                productLink.map((data,idx) => (
                                    <li key={idx}><a href={data.path}>{data.title}</a></li>
                                ))
                            }
                        </ul>
                        </div>
                        <div className="widget-link s2">
                        <h6 className="title">SERVICES</h6>
                        <ul>
                            {
                                servicesLink.map((data,idx) => (
                                    <li key={idx}><a href={data.path}>{data.title}</a></li>
                                ))
                            }
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-4 col-md-12">
                    <div className="footer-contact">
                        <h6>Stay Updated</h6>
                        <p>
                        Connect with us on follwoing medias
                        </p>
                        {/* <form action="#">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required=""
                        />
                        <button type="submit" className="btn-action">Submit</button>
                        </form> */}
                        <ul className="list-social">
                            {
                                listSocial.map((data,idx) => (
                                    <li key={idx}>
                                        <a href={data.path}><span className={data.icon}></span></a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="footer__bottom">
                <p>
                    ©2024 Ultronxchange.io All rights reserved. Terms of Service | Privacy
                    Terms
                </p>
                </div>
            </div>

            {
                isVisible &&
                <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
            }
        </footer>
    );
}

export default Footer;
