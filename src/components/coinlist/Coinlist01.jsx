import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

import img1 from "../../assets/images/coin/ULC-50x50.png"
import img2 from "../../assets/images/coin/uarc.png"
import img3 from "../../assets/images/coin/btc.png"
import img4 from "../../assets/images/coin/eth-2.png"
import img5 from "../../assets/images/coin/bnb.png"
import img6 from "../../assets/images/coin/matic.png"
import img7 from "../../assets/images/coin/trx.png"

Coinlist01.propTypes = {
  dataCoin: PropTypes.array,
}

function Coinlist01(props) {
  const [dataCoin, setDataCoin] = useState([
    {
      id: 1,
      icon: img1,
      name: "Bitcoin",
      uint: "BTC",
      price: "$56,623.54",
      sale: "+1.45%",
      cap: "$880,423,640,582",
      chart: "",
      class: "up",
    },
    {
      id: 2,
      icon: img1,
      name: "Bitcoin",
      uint: "BTC",
      price: "$56,623.54",
      sale: "+1.45%",
      cap: "$880,423,640,582",
      chart: "",
      class: "up",
    },
  ])

  const [dataCoinTab] = useState([
    {
      id: 1,
      title: "View All",
    },
  ])

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("https://ultronxchange.io/api/v1/home-page/")
      const response = await data.json()
      setDataCoin([
        {
          id: 1,
          icon: img1,
          name: "Ultron",
          uint: "ULC",
          link: "/account/trade/ULC-USDT",
          price: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(response.pairs_data["ULC-USDT"].price),
          volume: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(response.pairs_data["ULC-USDT"].volume),
          sale: response.pairs_data["ULC-USDT"].price_24h.toFixed(2) + "%",
          class: response.pairs_data["ULC-USDT"].price_24h < 0 ? "down" : "up",
        },
        {
          id: 2,
          icon: img2,
          name: "Ultron ARC",
          uint: "UARC",
          link: "/account/trade/UARC-USDT",
          price: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(response.pairs_data["UARC-USDT"].price),
          volume: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(response.pairs_data["UARC-USDT"].volume),
          sale: response.pairs_data["UARC-USDT"].price_24h.toFixed(2) + "%",
          class: response.pairs_data["UARC-USDT"].price_24h < 0 ? "down" : "up",
        },
        {
          id: 3,
          icon: img3,
          name: "Bitcoin",
          uint: "BTC",
          link: "/account/trade/BTC-USDT",
          price: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(response.pairs_data["BTC-USDT"].price),
          volume: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(response.pairs_data["BTC-USDT"].volume),
          sale: response.pairs_data["BTC-USDT"].price_24h.toFixed(2) + "%",
          class: response.pairs_data["BTC-USDT"].price_24h < 0 ? "down" : "up",
        },
        {
          id: 4,
          icon: img4,
          name: "Ethereum",
          uint: "ETH",
          link: "/account/trade/ETH-USDT",
          price: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(response.pairs_data["ETH-USDT"].price),
          volume: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(response.pairs_data["ETH-USDT"].volume),
          sale: response.pairs_data["ETH-USDT"].price_24h.toFixed(2) + "%",
          class: response.pairs_data["ETH-USDT"].price_24h < 0 ? "down" : "up",
        },
        {
          id: 5,
          icon: img5,
          name: "Binance",
          uint: "BNB",
          link: "/account/trade/BNB-USDT",
          price: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(response.pairs_data["BNB-USDT"].price),
          volume: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(response.pairs_data["BNB-USDT"].volume),
          sale: response.pairs_data["BNB-USDT"].price_24h.toFixed(2) + "%",
          class: response.pairs_data["BNB-USDT"].price_24h < 0 ? "down" : "up",
        },
        {
          id: 6,
          icon: img6,
          name: "Matic",
          uint: "MATIC",
          link: "/account/trade/MATIC-USDT",
          price: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(response.pairs_data["MATIC-USDT"].price),
          volume: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(response.pairs_data["MATIC-USDT"].volume),
          sale: response.pairs_data["MATIC-USDT"].price_24h.toFixed(2) + "%",
          class: response.pairs_data["MATIC-USDT"].price_24h < 0 ? "down" : "up",
        },
        {
          id: 7,
          icon: img7,
          name: "Tron",
          uint: "TRX",
          link: "/account/trade/TRX-USDT",
          price: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(response.pairs_data["TRX-USDT"].price),
          volume: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(response.pairs_data["TRX-USDT"].volume),
          sale: response.pairs_data["TRX-USDT"].price_24h.toFixed(2) + "%",
          class: response.pairs_data["TRX-USDT"].price_24h < 0 ? "down" : "up",
        },
      ]);              
    }
    getData()
  }, [])

  return (
    <section className="coin-list">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text">
              <h3 className="heading">Market Update</h3>
              <a href="/account/trade" className="btn-action-2">
                See All Coins
              </a>
            </div>

            <div className="coin-list__main">
              <Tabs>
                <TabList>
                  {dataCoinTab.map((idx) => (
                    <Tab key={idx.id}>{idx.title}</Tab>
                  ))}
                </TabList>

                {dataCoinTab.map((data) => (
                  <TabPanel key={data.id}>
                    <div className="content-inner">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Last Price</th>
                            <th scope="col">Volume</th>
                            <th scope="col">24h %</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {dataCoin.map((idx) => (
                            <tr key={idx.id}>
                              <td>
                                <span className="icon-star"></span>
                              </td>
                              <td>{idx.id}</td>
                              <td>
                                <a href={idx.link}>
                                  <img src={idx.icon} alt="icon" width={40} />
                                  <span>{idx.name}</span>
                                  <span className="unit">{idx.unit}</span>
                                </a>
                              </td>
                              <td className="boild">{idx.price}</td>
                              <td className="boild">{idx.volume?.toLocaleString("en-IN", { maximumSignificantDigits: 3 })}</td>
                              <td className={`${idx.class}`}>{idx.sale}</td>

                              <td>
                                <a href={idx.link} className="btn">
                                  Trade
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Coinlist01
