import React, {useState} from 'react'
import { groupTeamMembers } from '../Teams/Teams';

const GroupedTeamMembers = ({employees, selectedTeam, setSelectedTeam}) => {
    
    const [groupedTeam, setGroupedTeam] = useState(groupTeamMembers({employees, selectedTeam}));

    const handleTeamClick = (e) => {
        let newGroupData = groupedTeam.map((groupTeamMember)=> 
                                                    groupTeamMember.team === e.currentTarget.id
                                                    ? {...groupTeamMember, collapsed:!groupTeamMember.collapsed}
                                                    : groupTeamMember)
        setGroupedTeam(newGroupData)
        setSelectedTeam(e.currentTarget.id)
    }
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