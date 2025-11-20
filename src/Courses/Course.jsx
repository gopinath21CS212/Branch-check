import styles from './Course.module.css';
import { useState } from 'react';


function Course(props){
const [enrolled, setEnrolled] = useState(false);
const [showForm, setShowForm] = useState(false);

const enroll = () => {
    alert("You have been enrolled to "+ props.name +" successfully!");
    setShowForm(true);
    setEnrolled(true);
};

if(props.show){
    return (
        <div className={styles['course-component']}>
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>

            {showForm ? (
                <div>
                    <input name="name" type="text" placeholder="Enter your Name" />
                    <input name="mail" type="text" placeholder="Enter your Email" />
                    {/* <button onClick={handleSubmit}>Submit</button> */}
                </div>
            ) : (
                <button onClick={enroll}>
                    {enrolled ? "Enrolled" : "Enroll Now"}
                </button>
            )}
        </div>
    );
}
}

Course.defaultProps = {
    name: "This Course is currently Unavailable",
    price: "disclosed upon availability",
    img: "https://via.placeholder.com/150"
};

export default Course;