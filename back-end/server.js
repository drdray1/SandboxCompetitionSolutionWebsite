const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Connect to the database
mongoose.connect('mongodb://localhost:27017/sandbox', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log("Connected to database");

// Path to database
const databasePath = '/api/sandbox';

// Database listening port
const portNum = 3000;

// Here are my schemas
// Student Profile Schema
const studentProfileSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
});

const StudentProfile = mongoose.model('StudentProfile', studentProfileSchema);
console.log("Student Profile Schema created");

// Company Job Listing
const jobListing = new mongoose.Schema({
    name: String,
    job_title: String,
    location: String,
    description: String,
});

const JobListing = mongoose.model('JobListing', jobListing);
console.log("Job Listing Schema created")
// CRUD

// Create
// Create a Student Profile
app.post(databasePath + '/profiles', async (req, res) => {
    const studentProfile = new StudentProfile({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
    });
    try {
        await studentProfile.save();
        res.send(studentProfile);
        console.log("Student Profile Created")
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Create a Job Listing
app.post(databasePath + '/jobs', async (req, res) => {
    const jobListing = new JobListing({
        name: req.body.name,
        job_title: req.body.job_title,
        location: req.body.location,
        description: req.body.description,
    });
    try {
        await jobListing.save();
        res.send(jobListing);
        console.log("Job Listing Created")
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Read/Get
// Get ALL Student Profiles from the database
app.get(databasePath + '/profiles', async(req, res) => {
    try {
        let studentProfiles = await StudentProfile.find();
        res.send(studentProfiles)
        console.log("Student Profile Read")
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Get ALL Job Listings from the database
app.get(databasePath + '/jobs', async(req, res) => {
    try {
        let jobListing = await JobListing.find();
        res.send(jobListing)
        console.log("Job Listing Read")
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Get ONE Student Profile from the database
app.get(databasePath + '/profiles' + '/:student_profileID', async(req, res) => {
    try {
        let studentProfile = await StudentProfile.findOne({_id: req.params.student_profileID});
        if (!studentProfile) {
            res.send(404);
            return;
        }
        res.send(studentProfile);
        console.log("Student Profile One Gotten")
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Get ONE Job Listing from the database
app.get(databasePath + '/jobs' + '/:job_listingID', async(req, res) => {
    try {
        let jobListing = await JobListing.findOne({_id: req.params.job_listingID});
        if (!jobListing) {
            res.send(404);
            return;
        }
        res.send(jobListing);
        console.log("Job Listing One Gotten")
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Update/Edit
// Update ONE Student Profile
app.put(databasePath + '/profiles' + '/:student_profileID', async (req, res) => {
    try {
        let studentProfile = await StudentProfile.findOne({_id: req.params.student_profileID});
        if (!studentProfile) {
            res.send(404);
            return;
        }
        studentProfile.first_name = req.body.first_name;
        studentProfile.last_name = req.body.last_name;

        await studentProfile.save();
        res.send(studentProfile);
        console.log("Student Profile One Updated")
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Update ONE Job Listing
app.put(databasePath + '/jobs' + '/:job_listingID', async (req, res) => {
    try {
        let jobListing = await JobListing.findOne({_id: req.params.job_listingID});
        if (!jobListing) {
            res.send(404);
            return;
        }
        jobListing.name = req.body.name;
        jobListing.job_title = req.body.job_title;
        jobListing.location = req.body.location;
        jobListing.description = req.body.description;

        await jobListing.save();
        res.send(jobListing);
        console.log("Job Listing One Updated")
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Delete
// Delete ONE Student Profile
app.delete(databasePath + '/profiles' + '/:student_profileID', async (req, res) => {
    try {
        let studentProfile = await StudentProfile.findOne({_id: req.params.student_profileID});
        if (!studentProfile) {
            res.send(404);
            return;
        }
        await studentProfile.delete();
        res.sendStatus(200);
        console.log("Student Profile One Deleted")
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Delete ONE Job Listing
app.delete(databasePath + '/jobs' + '/:job_listingID', async (req, res) => {
    try {
        let jobListing = await JobListing.findOne({_id: req.params.job_listingID});
        if (!jobListing) {
            res.send(404);
            return;
        }
        await jobListing.delete();
        res.sendStatus(200);
        console.log("Job Listing One Deleted")
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Run the server on designated port
app.listen(portNum, () => console.log('Todo server listening on port ' + portNum));