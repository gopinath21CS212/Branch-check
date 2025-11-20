import './App.css'
import Course from './Courses/Course.jsx'
import java from './assets/Javaimg.jpg';
import react from './assets/reactImage.webp';
import springboot from './assets/springbootImage.webp';
import html from './assets/htmlImage.webp';    
import { useEffect, useState } from 'react';

function App() {

    const [courses, setCourses] = useState([]);
    const images = {
      "java": javak,
      "react": react,
      "springboot": springboot,
      "html": html
    };

  useEffect(() => {
    fetch("http://localhost:8080/React/getCourses")
      .then(res => res.json())
      .then(data => {setCourses(data)
    console.log(data)} ) 
      .catch(err => console.error(err));
  }, []);


  return (
    <>
      {courses.map((course, index) => (
        <Course
          key={index} 
          name={course.courseName}
          price={course.coursePrice}
          img={images[course.courseImgName]}
          show = {course.isAvailable}
        />
      ))}
    </>
  );
}

export default App
