// FETCH_SPECIFIC_CLIENT

import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import './SpecificClient.scss';
import Footer from '../Footer/Footer';

export default function SpecificClient() {

    const location = useLocation();

  

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_SPECIFIC_CLIENT' })
    // }, [location]) // end of useEffect

    const specificClientReducer = useSelector(store => store.specificClientReducer);


    console.log('specific', specificClientReducer);
    const dispatch = useDispatch();
    return (
        <div
        style={{backgroundColor: 'red', minHeight: '736px', marginTop: '-30px'}}
        >

            {specificClientReducer.map((client, i) => {
                return (
                    <div key={i}>
                    <h2>{client.id}</h2>
                    <h2>{client.to_char}</h2>

                    </div>
                );
            })}
            <Footer />


        </div>
    )


}; // end of function