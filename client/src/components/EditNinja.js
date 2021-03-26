import React, {useState, useEffect} from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import moment from 'moment'

const EditNinja = (props) => {

    const [formInfo, setFormInfo] = useState({
        first_name: "",
        last_name: "",
        graduation_date: "",
        profile_picture: "",
        number_of_belts: "",
        is_vet: false
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/students/${props.studentId}`)
        .then(response => {
            console.log("Edit form is getting info abt the user", response)
            setFormInfo(response.data.results)
        })
        .catch(err => console.log(err))
    }, [])
    // if we put [props.studentId] on line 23 is indicating that whenever the student id is changed, then it will run the useEffect 
    

    const [errors, setErrors] = useState({})

    const changeHandler = (e) =>{
        console.log("trying to make change")
        if(e.target.type == "checkbox"){
            setFormInfo({
                ...formInfo,
                is_vet: !formInfo.is_vet
            })
        }
        else{
            setFormInfo({
                ...formInfo,
                [e.target.name]:e.target.value
            })
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/students/update/${props.studentId}`, formInfo)
            .then(response => {
                console.log("updating infromation via put request", response);
                navigate("/")
            })
            .catch(err => console.log("Having an issue with PUT request, cannot update", err))
    }



    return (
        <div>
            <h1 className="text-info">Edit Ninja</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input type="text" name="first_name" value={formInfo.first_name} className="form-control col-6 mx-auto" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input type="text" name="last_name" value={formInfo.last_name} className="form-control col-6 mx-auto" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Graduation Date:</label>
                    <input type="date" name="graduation_date" value={moment(formInfo.graduation_date).format('YYYY-MM-DD')} className="form-control col-6 mx-auto" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Profile Picture:</label>
                    <input type="text" name="profile_picture" value={formInfo.profile_picture} className="form-control col-6 mx-auto" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Belts:</label>
                    <input type="number" name="number_of_belts" value={formInfo.number_of_belts} className="form-control col-6 mx-auto" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Is Veteran?</label>
                    <input type="checkbox" name="is_vet" checked={formInfo.is_vet} value= {formInfo.is_vet} className="form-control" onChange={changeHandler}/>
                </div>
                <button className="btn btn-primary">Update student</button>
            </form>
        </div>
    );
};

export default EditNinja;