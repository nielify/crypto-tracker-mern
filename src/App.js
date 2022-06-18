import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Routes/Home/Home';
import CoinPage from './Routes/Coin/CoinPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/coin/:id" render={props => <CoinPage />} />
      </Switch>
    </Router>
  );
}

export default App;
