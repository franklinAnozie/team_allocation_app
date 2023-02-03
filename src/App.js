import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Employees from './Pages/Employees';
import GroupedTeamMembers from './Pages/GroupedTeamMembers';
import ErrorPage from './Pages/ErrorPage';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { workers } from "./Data/workers";

const App = () => {

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employees')) || [...workers]);
  const [selectedTeam, setSelectedTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'Team A');
  
  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
    localStorage.setItem('employees', JSON.stringify(employees))
  }, [selectedTeam, employees])
  
  const handleTeamSelectionChange = (e) => {
      setSelectedTeam(e.target.value)
  }
  
  const handleEmployeeCardClick = (e) => {
      const individualTeam = employees.map((employee) => 
              employee.id === parseInt(e.currentTarget.id)
                  ? employee.teamName === selectedTeam
                      ? {...employee, teamName: ""}
                      : {...employee, teamName: selectedTeam}
              : employee
          )
      setEmployees(individualTeam)
  }

  return (
    <Router className="App">
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        teamCount={employees.filter((employee) => employee.teamName === selectedTeam).length}/>
      <Routes>
        <Route 
          path='/'
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleEmployeeCardClick={handleEmployeeCardClick}
              handleTeamSelectionChange={handleTeamSelectionChange}/>
          }>
        </Route>
        <Route 
          path='/grouped-team-members'
          element={
            <GroupedTeamMembers 
              employees={employees}
              selectedTeam={selectedTeam}
              setSelectedTeam={setSelectedTeam}/>
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