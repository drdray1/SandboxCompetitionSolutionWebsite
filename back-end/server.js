const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Connect to the database
mongoose.connect('mongodb://localhost:27017/sandbox-competition-solution-website', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log("Connected to database");

// Path to database
const databasePath = '/api/sandbox-competition-solution-website';

// Database listening port
const portNum = 3000;

// Here are my schemas
const studentProfileSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
});

const StudentProfile = mongoose.model('StudentProfile', studentProfileSchema);
console.log("Student Profile Schema created");

// CRUD

// Create
// Create a Student Profile
app.post(databasePath, async (req, res) => {
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

// Read/Get
// Get ALL Student Profiles from the database
app.get(databasePath, async(req, res) => {
    try {
        let studentProfiles = await StudentProfile.find();
        res.send(studentProfiles)
        console.log("Student Profile Read")
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Get ONE student's profile from the database
app.get(databasePath + '/:student_profileID', async(req, res) => {
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

// Update/Edit
// Update ONE student profile
app.put(databasePath + '/:student_profileID', async (req, res) => {
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

// Delete
// Delete ONE Student Profile
app.delete(databasePath + '/:student_profileID', async (req, res) => {
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

// Run the server on designated port
app.listen(portNum, () => console.log('Todo server listening on port ' + portNum));