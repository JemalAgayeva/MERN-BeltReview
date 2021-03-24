import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router'
import axios from 'axios';


const AllNinjas = () => {

    const [allNinjas, setAllNinjas] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8000/api/students/all")
            .then(response => {
                console.log("****** axios.get prints all students")
                console.log(response)
                setAllNinjas(response.data.results)
            })
            .catch(err => console.log(err))
    }, []);




    return (
        <div className="row">
            <div className="col">
                <h3 className="text-danger">Ninjas</h3>

                {allNinjas.filter(ninja => ninja.number_of_belts === 0).map((ninja, i) =>{
                    return <div className="card">
                        <div className="card-body">
                            <h4 className="card-title"><Link to={`/ninjas/${ninja._id}`}>{ninja.first_name} {ninja.last_name}</Link></h4>
                            <p>Graduation Date: {ninja.graduation_date}</p>
                            <p>Number of Belts: {ninja.number_of_belts}</p>
                        </div>
                    </div>
                })}
            </div>
            <div className="col">
                <h3 className="text-danger">Samurai</h3>

                {allNinjas.filter(ninja => ninja.number_of_belts >= 1 && ninja.number_of_belts < 3).map((ninja, i) =>{
                    return <div className="card">
                        <div className="card-body">
                            <h4 className="card-title"><Link to={`/ninjas/${ninja._id}`}>{ninja.first_name} {ninja.last_name}</Link></h4>
                            <p>Graduation Date: {ninja.graduation_date}</p>
                            <p>Number of Belts: {ninja.number_of_belts}</p>
                        </div>
                    </div>
                })}
            </div>
            <div className="col">
                <h3 className="text-danger">Sensei</h3>

                {allNinjas.filter(ninja => ninja.number_of_belts >= 3).map((ninja, i) =>{
                    return <div className="card">
                        <div className="card-body">
                            <h4 className="card-title"><Link to={`/ninjas/${ninja._id}`}>{ninja.first_name} {ninja.last_name}</Link></h4>
                            <p>Graduation Date: {ninja.graduation_date}</p>
                            <p>Number of Belts: {ninja.number_of_belts}</p>
                        </div>
                    </div>
                })}
            </div>
            {/* Shows all ninjas as one column */}
            {/* <div className="col">
                <h3 className="text-primary">Baby Ninjas</h3>
                {allNinjas.map((ninja, i) => {
                    return <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{ninja.first_name} {ninja.last_name}</h4>
                            <p>Graduation Date: {ninja.graduation_date}</p>
                            <p>Number of Belts: {ninja.number_of_belts}</p>
                        </div>
                    </div>
                })}
            </div> */}
            
        </div>
    );
};

export default AllNinjas;