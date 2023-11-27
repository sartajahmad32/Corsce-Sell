import React from 'react';
import Course from './components/Course';
import './App.css';

const courses = [
  {
    title: 'Web Development',
    image: 'https://media.istockphoto.com/id/1291971619/photo/web-development-and-web-design-concept-in-dark-blue-background-programming-for-internet.jpg?s=1024x1024&w=is&k=20&c=C09EuDVLjiyLuyTCmppja57Na-tvkh168fCdAYFeGHo=', // Replace with actual image URL
    price: '$49.99',
  },
  {
    title: 'Business Development',
    image: 'https://media.istockphoto.com/id/1197939487/photo/montage-of-a-team-of-business-people-at-a-presentation-at-the-boardroom-table.jpg?s=1024x1024&w=is&k=20&c=Uk1C9mk6QhHEx3_BrRmUDe_OFGGF3frHot1FcB87Yc4=', // Replace with actual image URL
    price: '$29.99',
  },
  {
    title: 'Digital Marketing',
    image: 'https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=1024x1024&w=is&k=20&c=N65ufLsxvt6b5XaKSitmu09gDUhEitFqfM4cWG7CTMk=', // Replace with actual image URL
    price: '$39.99',
  },
];



function App() {
  return (
    <div className="App">
      <h1>Available Courses</h1>
      <div className="courses">
        {courses.map((course, index) => (
          <Course key={index} {...course} />
        ))}
      </div>
    </div>
  );
}

export default App;
