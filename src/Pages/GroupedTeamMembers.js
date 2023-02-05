import React from 'react'
import { useGlobalContext } from '../context'

const GroupedTeamMembers = () => {

    const { groupedTeam, handleTeamClick } = useGlobalContext()

    return (
        <div className="container">
            {
                groupedTeam.map((item)=>{
                    return (
                        <div key={item.team} className='card mt-2' style={{cursor: 'pointer'}}>
                            <h4 id={item.team} className='card-header text-secondary text-secondary bg-white' onClick={handleTeamClick}>
                                Team Name: {item.team}
                            </h4>
                            <div id={`collapse_${item.team}`} className={item.collapsed === true ? 'collapse' : ''}>
                                <hr />
                                {
                                    item.members.map(member => {
                                        return (
                                            <div key={member.id} className='mt-2'>
                                                <h5 className='card-title mt-2'>
                                                    <span className='text-dark'>Full Name: {member.fullName}</span>
                                                </h5>
                                                <p>Designation: {member.designation}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GroupedTeamMembers