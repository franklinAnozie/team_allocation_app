import React from "react";
import { useGlobalContext } from "../context";
import maleProfile from "../images/maleProfile.jpg";
import femaleProfile from "../images/femaleProfile.jpg";

const Employees = () => {

    const {employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange} = useGlobalContext();

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6" style={{cursor: 'pointer'}}>
                    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
                        <option value='Team A'>Team A</option>
                        <option value='Team B'>Team B</option>
                        <option value='Team C'>Team C</option>
                        <option value='Team D'>Team D</option>
                    </select>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                        {employees.map((employee)=> {
                            return (
                                <div key={employee.id} id={employee.id} className={employee.teamName === selectedTeam ? 'card m-2 cursor standout' : 'card m-2 cursor'} onClick={handleEmployeeCardClick}>
                                    <img src={employee.gender === 'male' ? maleProfile : femaleProfile} alt='Profile' className="card-img-top"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Full Name: {employee.fullName}</h5>
                                        <p className="card-text"><b>Designation: </b>{employee.designation}</p>
                                        <p>Team: {employee.teamName}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Employees;