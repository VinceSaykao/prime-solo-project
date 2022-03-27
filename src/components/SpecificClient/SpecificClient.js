// FETCH_SPECIFIC_CLIENT

import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import './SpecificClient.scss';

export default function SpecificClient() {

    const location = useLocation();

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_SPECIFIC_CLIENT' })
    // }, [location]) // end of useEffect

    const specificClientReducer = useSelector(store => store.specificClientReducer);


    console.log('specific', specificClientReducer);
    const dispatch = useDispatch();
    return (
        <div>

            {specificClientReducer.map((client, i) => {
                return (
                    <div key={i}>
                    <h2>{client.id}</h2>
                    <h2>{client.to_char}</h2>

                    </div>
                );
            })}


        </div>
    )


}; // end of function