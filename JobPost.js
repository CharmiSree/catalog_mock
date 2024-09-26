import React, { useState } from 'react';
import axios from 'axios';

function JobPost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitJob = (e) => {
    e.preventDefault();
    axios.post('/api/jobs', { title, description }).then((response) => {
      alert('Job Posted Successfully');
    });
  };

  return (
    <div>
      <h2>Post a New Job</h2>
      <form onSubmit={submitJob}>
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Job Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default JobPost;
