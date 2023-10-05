// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props
  const {currencyLogo, currencyValue, euroValue, usdValue} = item
  return (
    <li>
      <div className="item-div">
        <div className="coin-type">
          <img src={currencyLogo} alt={currencyValue} className="curr-logo" />
          <p className="name">{currencyValue}</p>
        </div>
        <div className="money">
          <p className="name">{euroValue}</p>
          <p className="name">{usdValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
