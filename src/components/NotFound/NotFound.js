import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="text-center" style={{marginTop: '100px'}}>
                <img className="w-100" src="https://advertisermirror.com/wp-content/uploads/2021/02/Page-Not-Found-Error-404.png" alt="" />
            </div>
            <div ><Link to="/home"  className="text-decoration-none  btn btn-danger m-5">Back to Home</Link></div>
        </div>
    );
};

export default NotFound;