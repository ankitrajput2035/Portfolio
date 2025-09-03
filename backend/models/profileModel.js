import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  skills: [{ type: String }], // Array of skill names like ['JavaScript', 'React']
  repo_url: { type: String },
  live_url: { type: String },
});


const educationSchema = new mongoose.Schema({
    EducationLevel:{type:String, required:true},
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    marks:{type:String,required:true},
    start_date: { type: String },
    end_date: { type: String },
});

const profileSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  links: {
    github: String,
    linkedin: String,
  },
  skills: [{ // An array of top skills
    name: String,
    proficiency: Number, // Scale of 1-5
  }],
  education: [educationSchema],
  projects: [projectSchema],
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;