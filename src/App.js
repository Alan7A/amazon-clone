import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import { auth } from './firebase';
import Login from './Login';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';
import Footer from './Footer';

const promise = loadStripe('pk_test_51HXGuQBYsuOxCWfL6dOjJvTYU5D0deToaXkLb1EJmIOcY6wulBYk57cft5EGP8VBQmq4v6WdichXg6gj3TRQkRqL001OTq7jfT');

function App() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    // Esto se ejecuta cuando carga la página
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS: ', authUser)

      if (authUser) {
        // Hay un usuario logueado
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        // Usuario logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
