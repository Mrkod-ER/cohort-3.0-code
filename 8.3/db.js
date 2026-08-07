const mongoose = require('mongoose');
const { ref } = require('node:process');
const { stringify } = require('node:querystring');
const Schema = mongoose.Schema; 

const adminSchema = new Schema({
    username: String, 
    password: String
})

const userSchema = new Schema({
    
    username: String, 
    password: String, 
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]

})

const courseSchema = new Schema({
    title: String, 
    description: String, 
    imageLink: String, 
    price: Number
});



const User = mongoose.model('user', userSchema);
const Course = mongoose.model('course', courseSchema);
const Admin = mongoose.model('admin', adminSchema);
module.exports = {
    User, Course, Admin
}