import { navigate } from '@reach/router';
import axios from 'axios';
import React, {useState} from 'react';

const CreateNinja = () => {

    const [formInfo, setFormInfo] = useState({
        first_name: "",
        last_name: "",
        graduation_date: "",
        profile_picture: "",
        number_of_belts: "",
        is_vet: false
    })

    const changeHandler = (e) =>{
        console.log("trying to make change")
        if(e.target.type === "checkbox"){
            setFormInfo({
                ...formInfo,
                is_vet: !formInfo.is_vet
            })
        }
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/students/create", formInfo)
            .then(response => {
                console.log("response after submitting the information of the new student", response)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form lassName="col-6 mx-auto" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input type="text" name="first_name" className="form-control" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input type="text" name="last_name" className="form-control" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Graduation Date:</label>
                    <input type="date" name="graduation_date" className="form-control" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Profile Picture:</label>
                    <input type="text" name="profile_picture" className="form-control" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Belts:</label>
                    <input type="number" name="number_of_belts" className="form-control" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Is Veteran?</label>
                    <input type="checkbox" name="is_vet" checked={formInfo.is_vet} value= {formInfo.is_vet} className="form-control" onChange={changeHandler}/>
                </div>
                <input type="submit" value="Create"/>
            </form>
        </div>
    );
};


export default CreateNinja;