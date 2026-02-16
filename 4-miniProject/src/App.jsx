import React from 'react'
import Cards from './componants/cards'
const jobs = [
  {
    logo: "https://cdn.pnggallery.com/wp-content/uploads/amazon-logo-03.png",
    companyName: "Amazon",
    uploaded: "5 days ago",
    post: "Senior UI/UX Developer",
    jobTime: "Full Time",
    level: "Senior",
    salaryPerMonth: 7500,
    location: "Mumbai, India"
  },
  {
    logo: "https://cdn.pnggallery.com/wp-content/uploads/google-01.png",
    companyName: "Google",
    uploaded: "1 week ago",
    post: "Junior Frontend Developer",
    jobTime: "Full Time",
    level: "Junior",
    salaryPerMonth: 4200,
    location: "Bangalore, India"
  },
  {
    logo: "https://cdn.pnggallery.com/wp-content/uploads/microsoft-365-2022-logo-01.png",
    companyName: "Microsoft",
    uploaded: "2 days ago",
    post: "Full Stack Developer",
    jobTime: "Full Time",
    level: "Mid-Level",
    salaryPerMonth: 6800,
    location: "Hyderabad, India"
  },
  {
    logo: "https://cdn.pnggallery.com/wp-content/uploads/meta-logo-03.png",
    companyName: "Meta",
    uploaded: "3 days ago",
    post: "React Developer Intern",
    jobTime: "Internship",
    level: "Intern",
    salaryPerMonth: 1500,
    location: "Pune, India"
  },
  {
    logo: "https://cdn.pnggallery.com/wp-content/uploads/apple-logo-01.png",
    companyName: "Apple",
    uploaded: "4 days ago",
    post: "iOS Developer",
    jobTime: "Full Time",
    level: "Senior",
    salaryPerMonth: 8200,
    location: "Gurgaon, India"
  },
  {
    logo: "https://assets.turbologo.com/blog/en/2019/08/19085031/netflix-short-version-logo.png",
    companyName: "Netflix",
    uploaded: "6 days ago",
    post: "Backend Developer",
    jobTime: "Full Time",
    level: "Senior",
    salaryPerMonth: 9000,
    location: "Remote"
  },
  {
    logo: "https://cdn.pnggallery.com/wp-content/uploads/adobe-stock-logo-2020-05.png",
    companyName: "Adobe",
    uploaded: "1 day ago",
    post: "UI Designer",
    jobTime: "Part Time",
    level: "Junior",
    salaryPerMonth: 3000,
    location: "Mumbai, India"
  },
  {
    logo: "https://cdn.pnggallery.com/wp-content/uploads/tesla-01.png",
    companyName: "Tesla",
    uploaded: "2 weeks ago",
    post: "Software Engineer Trainee",
    jobTime: "Full Time",
    level: "Trainee",
    salaryPerMonth: 2800,
    location: "Delhi, India"
  },
  {
    logo: "https://pluspng.com/img-png/airbnb-vector-png-airbnb-logo-1600.png",
    companyName: "Airbnb",
    uploaded: "3 weeks ago",
    post: "Product Designer",
    jobTime: "Full Time",
    level: "Senior",
    salaryPerMonth: 7000,
    location: "Remote"
  },
  {
    logo: "https://cdn.pnggallery.com/wp-content/uploads/uber-eats-logo-2020-04.png",
    companyName: "Uber",
    uploaded: "8 days ago",
    post: "Junior Backend Developer",
    jobTime: "Full Time",
    level: "Junior",
    salaryPerMonth: 4500,
    location: "Chennai, India"
  }
];

// export default jobs;

const App = () => {
  return (
    <div className='parent'>
       {jobs.map(function(ele, ind){
        return <div key={ind}>
          <Cards company={ele.companyName} upload={ele.uploaded} post={ele.post} time={ele.jobTime} lev={ele.level} salary={ele.salaryPerMonth} location={ele.location} logo={ele.logo}/>
        </div>  
      })}
    </div>
  )
}

export default App
