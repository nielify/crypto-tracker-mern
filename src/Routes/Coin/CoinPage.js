import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import background from '../../images/blockchain.png';

import './styles/coinPage.css';

function CoinPage() {
  let params = useParams();
  const [coin, setCoin] = useState(null);
  // coin start has to be null first to give time to fetch API data

  useEffect(() => {
    Axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`).then(
      (response) => {
        setCoin(response.data);
        console.log(response.data);
      }
    );
  }, []);

  // if statement to check if data has reached, only then render the component
  if (coin) {
    return (
      <div className="coinpage-main-container" style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className="coinpage-box">

          <div className="coinpage-center-container">
            <h2 className="coinpage-title">{coin.name}</h2>
          </div>

          <div className="coinpage-center-container">
            <img src={coin.image.large} alt={coin.name} className="coinpage-icon" />
          </div>

          <div className="coinpage-container-horiz">
            <h3 className="coinpage-subtitle">Symbol:</h3>
            <h3>{coin.symbol}</h3>
          </div>
          <div className="coinpage-container-horiz">
            <h3 className="coinpage-subtitle">Current Price:</h3>
            <h3>₱ {coin.market_data.market_cap.php.toLocaleString()}</h3>
          </div>
          <div className="coinpage-container-horiz">
            <h3 className="coinpage-subtitle">Market Cap:</h3>
            <h3>₱ {coin.market_data.total_volume.php.toLocaleString()}</h3>
          </div>
          <div className="coinpage-container-horiz">
            <h3 className="coinpage-subtitle">Total Volume:</h3>
            <h3>₱ {coin.market_data.total_volume.php.toLocaleString()}</h3>
          </div>
          <div className="coinpage-container-horiz">
            <h3 className="coinpage-subtitle">24hr high:</h3>
            <h3 className="priceChange-green">₱ {coin.market_data.high_24h.php.toLocaleString()}</h3>
          </div>
          <div className="coinpage-container-horiz">
            <h3 className="coinpage-subtitle">24hr low:</h3>
            <h3 className="priceChange-red">₱ {coin.market_data.low_24h.php.toLocaleString()}</h3>
          </div>
          <Link to="/" className='coinpage-button'>Go Back</Link>
        </div>
      </div>
    );
  } else return null
  
}

export default CoinPage;
