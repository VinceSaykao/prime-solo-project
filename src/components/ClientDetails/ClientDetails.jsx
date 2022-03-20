import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './ClientDetails.scss';


export default function ClientDetails() {

    const { client } = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_CLIENT' })
    }, [location]) // end of useEffect

    // const history = useHistory();

    const clientInfoReducer = useSelector(store => store.clientInfoReducer);


    console.log(clientInfoReducer)

    return (
        <>

            <Helmet>
                <style>{`body { background-image: url("https://images.unsplash.com/photo-1487260211189-670c54da558d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"); 
                background-repeat: no-repeat; background-size: cover; background-position: -80px 120px; }`}

                </style>
            </Helmet>
            <div id='one'>
                {clientInfoReducer.filter(item => item.client_fullname === client).map((item, i) => {
                    return (

                        <h1>{item.client_fullname}</h1>,
                        // <img src={card.image_url} />
                        <h1>`{item.client_fullname}{item.address}{item.age} {item.phone} {item.hobbies} Sick of {item.history} </h1>

                    );
                })}
            </div>



        </>
    )

}
