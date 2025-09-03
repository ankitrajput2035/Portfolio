// backend/data/seedData.js

export const profileData = {
  fullName: "Ankit Kumar Singh",
  email: "ankit.krsingh2207@gmail.com",
  links: {
    github: "https://github.com/ankitrajput2035",
    linkedin: "https://linkedin.com/in/ankitrajput2035",
    
  },
  skills: [
    { name: "JavaScript", proficiency: 5 }, // Proficiency on a scale of 1-5
    { name: "React", proficiency: 5 },
    { name: "Node.js", proficiency: 5 },
    { name: "MongoDB", proficiency: 4 },
    { name: "Express", proficiency: 4 },
    { name: "HTML/CSS", proficiency: 5 },
    { name: "Python", proficiency: 3 },
    { name: "c++", proficiency: 5 },
    { name: "Java", proficiency: 3 },
    { name: "SQL", proficiency: 3 },
    { name: "Git", proficiency: 4 },
    { name: "Solidity", proficiency: 3 },
  ],
  education: [
    {
        EducationLevel:"UnderGraduate",
      institution: "NIT, Patna",
      degree: "B.Tech in Electrical Engineering",
      marks:"8.02 CGPA",
      start_date: "2022",
      end_date: "2026",
    },
     {
        EducationLevel:"InterMediate",
      institution: "SN Sinha COllage, Aurangabad, Bihar",
      degree: "BSEB",
      marks:"80 percent",
      end_date: "2021",
    },
    {
        EducationLevel:"Matriculation",
      institution: "SKP Vidya Vihar, Bhagalpur,Bihar",
      degree: "CBSE",
      marks:"80 percent",
      end_date: "2019",
    },
  ],
  
  projects: [
    {
      title: "Streamify",
      description: "Built a real-time web platform enabling global users (50+ tested) to connect via chat and video calls for language exchange and learning.",
      skills: ["Node.js", "Express", "MongoDB", "REST API","React js","JWT"],
      repo_url: "https://github.com/ankitrajput2035/Streamify",
      live_url: "streamify-nwjb.onrender.com",
    },
    {
      title: "Wanderlust",
      description: "Developed 1 full-stack web app for listing, viewing, and booking vacation rentals (Airbnb-style).",
      skills: ["Express", "Node.js", "MongoDB", "Tailwind"],
      repo_url: "https://github.com/ankitrajput2035/Wanderlust",
      live_url: "wanderlust-jlx5.onrender.com/listings",
    },
  ],
};