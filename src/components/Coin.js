import { Link } from 'react-router-dom';
import './coin.css';

const Coin = ({ coinId, icon, coinName, symbol, price, priceChange, marketCap }) => {
  return (
    <div className='container' key={coinId}>
      <img src={icon} alt={coinName} className='icon' />
      <h4 className='name'>{coinName}</h4>
      <p className="symbol">{symbol.toUpperCase()}</p>
      <p className="price">₱ {price.toLocaleString()}</p>
      <p className={`priceChange ${priceChange < 0 ? 'priceChange-red' : 'priceChange-green'}`}>{Number(priceChange).toFixed(2)}%</p>
      <p className="marketCap">₱ {marketCap.toLocaleString()}</p>
      <Link to={`/coin/${coinId}`} className='moreinfo-btn'>More Info</Link>
    </div>
  );
}

export default Coin;