import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/jobs').then((response) => {
      setJobs(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <button>Apply</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
