import axios from 'axios';
import React, {useEffect, useState} from 'react';
// import {navigate} from '@reach/router'



const OneNinja = (props) => {

    const [indStudent, setIndStudent] = useState({})

    useEffect(() =>{
    axios.get(`http://localhost:8000/api/students/${props.studentId}`)
        .then(response =>{
            console.log("response after trying to get one student", response)
            setIndStudent(response.data.results)

        })
        .catch(err => console.log(err))

}, [])

    return (
        <div className="card">
            <img className="mx-auto" src={indStudent.profile_picture} alt="Card cap" height='200' width='200'/>
            <div className="card-body">
                <h4 className="card-title">{indStudent.first_name} {indStudent.last_name}</h4>
                <p className="card-text">Graduation Date: {indStudent.graduation_date}</p>
                <p className="card-text">Number of Belts: {indStudent.number_of_belts}</p>
                <p className="card-text">Veteran Status: {indStudent.is_vet? "Thank you for your Service!" : "You are welcome for the Veterans' Service"}</p> 
                {/* <a href="#!" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    );
};

export default OneNinja;