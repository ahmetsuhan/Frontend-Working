import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router >
     <Navbar></Navbar>
     <Switch>
       <Route path="/"></Route>
     </Switch>
    </Router>
  )
}

export default App
