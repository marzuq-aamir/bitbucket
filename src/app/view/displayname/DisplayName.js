import React,{useState} from 'react';
import './DisplayName.css';
import DisplayFullname from './DisplayFullname';

const DisplayName = () => {

    const fullName = {
        firstname : "John",
        secondName : "Abraham",
        prefix : "Mr.",
        suffix : "MBBS"
    }

    return (
        <div className='mainDiv3'>
            
            <DisplayFullname fullname={fullName} />

        </div>
    );
};

export default DisplayName;