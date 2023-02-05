import React from "react";
import { useGlobalContext } from "../context";
import { Team, EmployeesList } from "../Teams/EmployeesList";
import maleProfile from "../images/maleProfile.jpg";
import femaleProfile from "../images/femaleProfile.jpg";

const Employees = () => {

    const {employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange} = useGlobalContext();

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6" style={{cursor: 'pointer'}}>
                    {Team({selectedTeam, handleTeamSelectionChange})}
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                        {EmployeesList({employees, selectedTeam, handleEmployeeCardClick, maleProfile, femaleProfile})}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Employees;