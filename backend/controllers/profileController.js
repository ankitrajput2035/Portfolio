import Profile from '../models/profileModel.js';


const getHealth = (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
};


const getProfile = async (req, res) => {
  try {
    // There is only one profile, so we use findOne without arguments
    const profile = await Profile.findOne();

    if (profile) {
      res.json(profile);
      
    } else {
      res.status(404).json({ message: 'Profile data not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

//review
const getProjects = async (req, res) => {
  try {

    const profile = await Profile.findOne();

    if (!profile) {
      return res.status(404).json({ message: 'Profile data not found' });
    }

    // // Filter projects array in the application logic
    // const filteredProjects = profile.projects.filter(project =>
    //   project.skills.some(skill => skill.toLowerCase() === skillQuery.toLowerCase())
    // );

    res.json(profile.projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


const getTopSkills = async (req, res) => {
  try {
    const profile = await Profile.findOne();

    if (!profile || !profile.skills) {
      return res.status(404).json({ message: 'No skills found in profile' });
    }

    // Sort skills by proficiency in descending order and return the top 5
    const topSkills = profile.skills
      .sort((a, b) => b.proficiency - a.proficiency)
      .slice(0, 5);

    res.json(topSkills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getEducation = async (req, res) => {
  try {

    const profile = await Profile.findOne();

    if (!profile) {
      return res.status(404).json({ message: 'Profile data not found' });
    }

    // // Filter projects array in the application logic
    // const filteredProjects = profile.projects.filter(project =>
    //   project.skills.some(skill => skill.toLowerCase() === skillQuery.toLowerCase())
    // );

    res.json(profile.education);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};




export {
  getHealth,
  getProfile,
  getProjects,
  getTopSkills,
  getEducation,
};