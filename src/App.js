import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/layout/Menu';
import Home from './components/home/Home';
import Hotels from './components/hotels/Hotels';
import Contact from './components/contact/Contact';
import HotelView from './components/hotels/HotelView';
import Login from './components/Login';

function App() {
  return (
    <div className="font-body container px-4 mx-auto">
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hotels" component={Hotels} />
          <Route path="/contact" component={Contact} />
          <Route path="/hotel/:id" component={HotelView} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
