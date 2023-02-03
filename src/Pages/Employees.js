import React from "react";
import { Teams } from "../Teams/Teams";
import { EmployeesList } from "../Teams/EmployeesList";
import maleProfile from "../images/maleProfile.jpg";
import femaleProfile from "../images/femaleProfile.jpg";

const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6" style={{cursor: 'pointer'}}>
                    <Teams
                        selectedTeam={selectedTeam}
                        handleTeamSelectionChange={handleTeamSelectionChange}/>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                        <EmployeesList 
                            employees={employees}
                            selectedTeam={selectedTeam}
                            handleEmployeeCardClick={handleEmployeeCardClick}
                            maleProfile={maleProfile}
                            femaleProfile={femaleProfile}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Employees;