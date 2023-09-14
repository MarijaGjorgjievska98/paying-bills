import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import { useLazyLoadQuery } from 'react-relay';
import type { AppQuery as AppQueryType } from './__generated__/AppQuery.graphql';
import type { HeaderFragment$key } from './components/__generated__/HeaderFragment.graphql';
import EditProfileInfromation from './components/User/EditProfileInfromation';
import LogIn from './components/LogIn';
import PaidBills from './components/Bills/PaidBills';

function App() {


  return (
    <div className="App">
      <LogIn></LogIn>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/edit-profile" Component={EditProfileInfromation} />
        <Route path="/paid-bills" Component={PaidBills} />
      </Routes>
    </div>
  );
}

export default App;
