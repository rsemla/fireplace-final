import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './components/Store';
import Cart from './components/Cart';
import Admin from './components/Admin';
function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cart" component={Cart} />
              <Route path="/admin" component={Admin} />
            </Switch>


          </BrowserRouter>
        </div>
      </Provider>

  );
}

export default App;
