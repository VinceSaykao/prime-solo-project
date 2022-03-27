// FETCH_SPECIFIC_CLIENT

import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function SpecificClient() {

    const location = useLocation();

    useEffect(() => {
        dispatch({ type: 'FETCH_SPECIFIC_CLIENT' })
    }, [location]) // end of useEffect

    const specificClientReducer = useSelector(store => store.specificClientReducer);


    console.log('specific', specificClientReducer);
    const dispatch = useDispatch();
    return (
        <div>


        </div>
    )


}; // end of function