import React, {useEffect, useState, Suspense} from 'react';
import './ProfileInfo.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DisplayFullName from '../displayname/DisplayFullname';

const ProfileInfo = () => {
    const {id} = useParams();
    const [state,setState] = useState({
        firstname : "",
        secondName : "",
        prefix : "",
        suffix : "",
        PersonalDetails : []
    });

    const fullName = {
        firstname : state.firstname,
        secondName : state.secondName,
        prefix : "",
        suffix : ""
    }

     useEffect(()=>{

        axios.get(`https://reqres.in/api/users`, {
            params:{
            id : id
        }
        })
      .then(res => {

        const person = res.data.data;

        console.log(person);
        
        setState(prev=>({
            ...prev,
            firstname : person.first_name,
            secondName : person.last_name,
            PersonalDetails : person
        }));

      })

    },[id]);

    return (
    <div className="mainDiv5">
        <div>
            <img src={state.PersonalDetails.avatar} alt="IMG"/>
        </div>
        
        <div>
            Email ID : {state.PersonalDetails.email}
        </div>

        <DisplayFullName fullname={fullName} />

        

        
    </div>
    );
};

export default ProfileInfo;