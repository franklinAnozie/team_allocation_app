import React from 'react'

export const EmployeesList = ({employees, selectedTeam, handleEmployeeCardClick, maleProfile, femaleProfile}) => {
  return (
    employees.map((employee)=> {
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
    })
  )
}