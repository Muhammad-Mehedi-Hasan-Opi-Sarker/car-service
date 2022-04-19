import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetial = () => {
    const {serviceId}=useParams();
    return (
        <div>
            <h1>details of service{serviceId.img}</h1>
            <Link to='/book'>
                <button className='btn btn-primary'>Booking</button>
            </Link>
        </div>
    );
};
export default ServiceDetial;