import React , {useEffect, useState} from 'react';

import img1 from '../../assets/images/coin/btc-2.png'
import img2 from '../../assets/images/coin/eth-2.png'
import img3 from '../../assets/images/coin/tet-2.png'
import img4 from '../../assets/images/coin/bnb-2.png'

import chart1 from '../../assets/images/icon/chart-up-2.png';
import chart2 from '../../assets/images/icon/chart-down-2.png';


function Crypto02(props) {

    const [dataCryptoContent, setDataCryptoContent] = useState([
        {
            id: 1,
            icon: img1,
            chart: chart1,
            name: 'Bitcoin',
            unit: 'BTC',
            price: 'USD 53,260.20',

            sale:'7.2%',
            class: 'success'
        },
        {
            id: 2,
            icon: img2,
            chart: chart2,
            name: 'Bitcoin',
            unit: 'ETH',
            price: 'USD 53,260.20',
            sale:'1.8%',
            class: 'critical'
        },
        {
            id: 3,
            icon: img3,
            chart: chart1,
            name: 'Tether',
            unit: 'USDT',
            price: 'USD 53,260.20',
            sale:'3.54%',
            class: 'success'
        },
        {
            id: 4,
            icon: img4,
            chart: chart1,
            name: 'BNB',
            unit: 'BNB',
            price: 'USD 53,260.20',
            sale:'3.24%',
            class: 'success'
        },
    ])

    useEffect(() => {
        const getData = async () => {
            const data = await fetch("https://ultronxchange.io/api/v1/home-page/")
            const response = await data.json()
            console.log(response.pairs_data)
            setDataCryptoContent([{
                id: 1,
                icon: img1,
                chart: chart1,
                name: 'Bitcoin',
                unit: 'BTC',
                price: response.pairs_data["BTC-USDT"].price,
                sale:'7.2%',
                class: 'success'
            },
                {
                    id: 2,
                    icon: img2,
                    chart: chart2,
                    name: 'Ethereum',
                    unit: 'ETH',
                    price: response.pairs_data["ETH-USDT"].price,
                    sale:'7.2%',
                    class: 'critical'
                },
                {
                    id: 3,
                    icon: img3,
                    chart: chart1,
                    name: 'Ultron',
                    unit: 'ULC',
                    price: response.pairs_data["ULC-USDT"].price,
                    sale:'3.54%',
                    class: 'success'
                },
                {
                    id: 4,
                    icon: img4,
                    chart: chart1,
                    name: 'BNB',
                    unit: 'BNB',
                    price: response.pairs_data["BNB-USDT"].price,
                    sale:'3.24%',
                    class: 'success'
                }]
            )
        }
        getData()
    })
    return (
        <section className="crypto" data-aos="fade-up" data-aos-duration="1000">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="crypto__main">
                        {
                            dataCryptoContent.map(idx => (
                                <div key={idx.id} className="crypto-box">
                                    <div className="left">
                                    <img src={idx.icon} alt="Ultron" />
                                    <h6> {idx.name}</h6>
                                    <h6 className="price">{idx.price}</h6>
                                    </div>

                                    <div className="right">
                                    <img src={idx.chart} alt="Ultron" />
                                    <p className={`sale ${idx.class}`}>
                                        <svg
                                        width="8"
                                        height="12"
                                        viewBox="0 0 8 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M0.393244 5.90568C0.477403 6.06168 0.637433 6.15893 0.811488 6.15893H3.52179V11.5105C3.52179 11.7807 3.73601 12 3.99996 12C4.26392 12 4.47814 11.7807 4.47814 11.5105V6.15893H7.18844C7.36313 6.15893 7.52316 6.06168 7.60668 5.90568C7.69148 5.74969 7.68574 5.5591 7.59329 5.40832L4.40482 0.228447C4.31683 0.0861572 4.16445 0 3.99996 0C3.83547 0 3.68309 0.0861572 3.59511 0.228447L0.406633 5.40832C0.358178 5.48795 0.333313 5.57868 0.333313 5.6694C0.333313 5.75034 0.353715 5.83193 0.393244 5.90568Z"
                                            fill="white"
                                        />
                                        </svg>
                                        7.2%
                                    </p>
                                    <p className="unit">{idx.unit}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Crypto02;
