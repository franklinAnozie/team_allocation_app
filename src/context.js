import React, {useState, useContext, useEffect} from 'react'
import { workers } from "./Data/workers";
import { groupTeamMembers } from './Teams/Teams'

export const AppContext = React.createContext()

export const AppProvider = ({children}) => {
    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employees')) || [...workers]);
    const [selectedTeam, setSelectedTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'Team A');
    const [groupedTeam, setGroupedTeam] = useState(groupTeamMembers(employees, selectedTeam));
    const teamCount = employees.filter((employee) => employee.teamName === selectedTeam).length
  
    useEffect(() => {
        localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
        localStorage.setItem('employees', JSON.stringify(employees))
        const updateGroupTeam = () => {
            let filterTeam = employees.filter((employee) => employee.teamName === selectedTeam)
            let newGroupTeam = groupedTeam.map((groupTeam)=>
                groupTeam.team === selectedTeam
                    ? {...groupTeam, members: filterTeam}
                    : groupTeam
        )
            setGroupedTeam(newGroupTeam)
        }
        updateGroupTeam()
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

    const handleTeamClick = (e) => {
        let newGroupData = groupedTeam.map((groupTeamMember)=> 
            groupTeamMember.team === e.currentTarget.id
                ? {...groupTeamMember, collapsed:!groupTeamMember.collapsed}
                : groupTeamMember)
        setGroupedTeam(newGroupData)
        setSelectedTeam(e.currentTarget.id)
    }

    return (
        <AppContext.Provider value={
            {
                employees,
                selectedTeam,
                groupedTeam,
                teamCount,
                setSelectedTeam,
                handleTeamSelectionChange,
                handleEmployeeCardClick,
                setGroupedTeam,
                handleTeamClick,
                // groupData
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
