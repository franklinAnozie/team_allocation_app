import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Employees from './Pages/Employees';
import GroupedTeamMembers from './Pages/GroupedTeamMembers';
import ErrorPage from './Pages/ErrorPage';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {

  return (
    <Router className="App">
      <Nav />
      <Header />
      <Routes>
        <Route 
          path='/'
          element={
            <Employees />
          }>
        </Route>
        <Route 
          path='/grouped-team-members'
          element={
            <GroupedTeamMembers />
          }>
        </Route>
        <Route 
          path='*'
          element={
            <ErrorPage/>
          }>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;