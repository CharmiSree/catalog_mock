const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.get('/', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const newJob = new Job({ title, description });
  await newJob.save();
  res.json(newJob);
});

module.exports = router;
