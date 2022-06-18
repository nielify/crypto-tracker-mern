import './styles/home.css';
import refresh from '../../images/refresh.png';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Coin from '../../components/Coin';


const Home = () => {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const searchText = useRef('');

  const getCoinsData = () => {
    searchText.current = '';
    setCoins([]);
    setFilteredCoins([]);
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=100&page=1&sparkline=fa')
      .then(res => {
        setCoins(res.data);
        setFilteredCoins(res.data);
      });
  }

  const handleSearch = () => {
    setFilteredCoins(coins.filter((coin) => coin.name.toLowerCase().includes(searchText.current.toLowerCase())));
    console.log(searchText);
  }

  useEffect(() => {
    getCoinsData();
  }, [])

  return (
    <div className='main'>
      <h2 className='title'>Crypto Tracker</h2>
      <div className='search-container'>
        <input 
          type="text" 
          placeholder='Search for a coin...' 
          className='searchbox' 
          value={searchText.current}
          onChange={(e) => {
            searchText.current = e.target.value;
            handleSearch();
          }} 
        />
        <img src={refresh} alt="refresh" className='refresh-btn' onClick={getCoinsData} />
      </div>
      {!coins[0] && <div>loading coins data...</div>}
      {filteredCoins && filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            coinId={coin.id}
            icon={coin.image}
            coinName={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
          />
        )
      })}
    </div>
  );
}

export default Home;