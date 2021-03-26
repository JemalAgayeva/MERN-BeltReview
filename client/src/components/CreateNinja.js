import React, {useState} from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const CreateNinja = () => {

    const [formInfo, setFormInfo] = useState({
        first_name: "",
        last_name: "",
        graduation_date: "",
        profile_picture: "",
        number_of_belts: "",
        is_vet: false
    })

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

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/students/create", formInfo)
            .then(response => {
                console.log("response after submitting the information of the new student", response)
                if(response.data.errors){
                    console.log("You have validation errors")
                    setErrors(response.data.errors)
                }
                else{
                    navigate("/")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form lassName="col-6 mx-auto" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <p className="text-danger">{errors.first_name? errors.first_name.message: ""}</p>
                    <input type="text" name="first_name" className="form-control col-6 mx-auto" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <p className="text-danger">{errors.last_name? errors.last_name.message: ""}</p>
                    <input type="text" name="last_name" className="form-control col-6 mx-auto" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Graduation Date:</label>
                    <p className="text-danger">{errors.graduation_date? errors.graduation_date.message: ""}</p>
                    <input type="date" name="graduation_date" className="form-control col-6 mx-auto" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Profile Picture:</label>
                    <p className="text-danger">{errors.profile_picture? errors.profile_picture.message: ""}</p>
                    <input type="text" name="profile_picture" className="form-control col-6 mx-auto" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Belts:</label>
                    <input type="number" name="number_of_belts" className="form-control col-6 mx-auto" onChange={changeHandler}/>
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
}

export default CreateNinja;