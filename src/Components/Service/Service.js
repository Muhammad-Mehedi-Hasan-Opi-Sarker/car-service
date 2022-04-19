import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {id,name,price,img,description}=service;
    const navigate =useNavigate();
    const handleServiceDetails =id=>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary' onClick={()=>handleServiceDetails(id)}>Book:{name}</button>
        </div>
    );
};

export default Service;