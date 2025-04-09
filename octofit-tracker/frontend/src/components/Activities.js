import React from 'react';

function Activities() {
  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Activities</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Activity</th>
              <th>Duration</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Running</td>
              <td>30 mins</td>
              <td>2025-04-08</td>
            </tr>
            <tr>
              <td>Swimming</td>
              <td>45 mins</td>
              <td>2025-04-07</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Activities;