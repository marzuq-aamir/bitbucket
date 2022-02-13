import React from 'react';
import {Routes,Route,Navigate,useNavigate} from 'react-router-dom';
import {route} from './Route';

const RoutesMap = () => {

    return (
        <Routes>
            {
                route.map((RouteItem,index)=>{
                    return <Route path={RouteItem.path}  element={<RouteItem.Component/>} key={index}/>
                })
            }
            {/* <Route path="/" element={<Navigate to="dashboard"/>} /> */}
                        
        </Routes>
    );

};

export default RoutesMap;