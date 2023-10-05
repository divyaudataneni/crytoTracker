// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {currencyData: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      euroValue: each.euro_value,
      currencyLogo: each.currency_logo,
      currencyValue: each.currency_name,
      usdValue: each.usd_value,
    }))

    this.setState({currencyData: updatedData, isLoading: false})
  }

  render() {
    const {currencyData, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader" className="list1">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="list">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="sub-cont">
          <nav className="nav-bar">
            <p>Coin Type</p>
            <div className="money">
              <p>USD</p>
              <p>EURO</p>
            </div>
          </nav>
          {currencyData.map(each => (
            <CryptocurrencyItem key={each.id} item={each} />
          ))}
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
