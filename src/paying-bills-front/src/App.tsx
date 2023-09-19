import React, { Suspense, useReducer, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import { useLazyLoadQuery } from 'react-relay';
import type { HeaderFragment$key } from './components/__generated__/HeaderFragment.graphql';
import EditProfileInfromation from './components/User/EditProfileInfromation';
import PaidBills from './components/Bills/PaidBills';
import { Loader } from 'semantic-ui-react';
import graphql from 'babel-plugin-relay/macro';
import type { AppQuery as AppQueryTypeUser } from './__generated__/AppQuery.graphql';
import { Helmet } from "react-helmet";
import { AuthContext } from './components/User/UserContex';
import LogIn from './components/LogIn';


// const AppQuery = graphql`
//   query AppQuery(
//     $email: String!
//   ) {
//     userByEmail(email: $email)  {
//       ...HeaderFragment
//     }
//   }
// `;

function App() {
  const [email, setEmail] = useState<string | null>(null);


  return (
    <AuthContext.Provider value={{ email, setEmail }}>
      <Suspense fallback={<Loader />}>
        {email?<div className="App">
        <Header />
          {/* Home ako nema user da prikazam nekoj tekst */}
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/edit-profile" Component={EditProfileInfromation} />
            <Route path="/paid-bills" Component={PaidBills} />
          </Routes>
          <Footer></Footer>
        </div>
        :<LogIn></LogIn>}
        <Helmet>
          <script src="https://accounts.google.com/gsi/client" async defer />
          <script async defer src="https://apis.google.com/js/api.js" />
        </Helmet>
      </Suspense>
    </AuthContext.Provider>
  );
}

export default App;
