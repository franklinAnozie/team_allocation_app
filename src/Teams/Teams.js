import React from 'react'

export const Teams = ({selectedTeam, handleTeamSelectionChange}) => {
    return (
        <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value='Team A'>Team A</option>
            <option value='Team B'>Team B</option>
            <option value='Team C'>Team C</option>
            <option value='Team D'>Team D</option>
        </select>
    )
}

export const groupTeamMembers= ({employees, selectedTeam}) => {
            let teams = [];

            let team_A_members = employees.filter((employee) => employee.teamName === 'Team A');
            let team_A = {
                team: 'Team A',
                members: team_A_members,
                collapsed: selectedTeam === 'Team A' ? false : true
            }
            teams.push(team_A)

            let team_B_members = employees.filter((employee) => employee.teamName === 'Team B');
            let team_B = {
                team: 'Team B',
                members: team_B_members,
                collapsed: selectedTeam === 'Team B' ? false : true
            }
            teams.push(team_B)

            let team_C_members = employees.filter((employee) => employee.teamName === 'Team C');
            let team_C = {
                team: 'Team C',
                members: team_C_members,
                collapsed: selectedTeam === 'Team C' ? false : true
            }
            teams.push(team_C)

            let team_D_members = employees.filter((employee) => employee.teamName === 'Team D');
            let team_D = {
                team: 'Team D',
                members: team_D_members,
                collapsed: selectedTeam === 'Team D' ? false : true
            }
            teams.push(team_D)

            return teams
    }