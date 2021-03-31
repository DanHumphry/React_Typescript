import React from 'react';
import { Route } from 'react-router-dom'; 
import './css/All.css'
import Nav from './pages/Nav'
import Join from './pages/Join'
import Login from './pages/Login'


const App: React.FC = () => {

  return (
    <div className="body">
      <div className="autoMargin">
        <Route exact path="/">
          <Nav/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>

        <Route exact path="/join">
          <Join/>
        </Route>
      </div>
    </div>
  );
}

export default App;