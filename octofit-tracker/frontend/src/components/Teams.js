import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get('/api/teams/')
      .then(response => setTeams(response.data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Teams</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team.id}>
                <td>{team.name}</td>
                <td>{team.members}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;