import React from 'react';
import JobList from './components/JobList';
import JobPost from './components/JobPost';

function App() {
  return (
    <div>
      <h1>Job Application Platform</h1>
      <JobPost />
      <JobList />
    </div>
  );
}

export default App;
