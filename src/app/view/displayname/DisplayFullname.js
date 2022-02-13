import React,{useState} from 'react';
import './DisplayName.css';

const DisplayFullname = (cons) => {

    const {prefix, firstname, secondName, suffix} = cons.fullname;

    return (
    <div>
      {prefix} {firstname} {secondName} {suffix} 
    </div>
    );
};

export default DisplayFullname;