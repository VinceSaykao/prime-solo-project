// FETCH_SPECIFIC_CLIENT

import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import './SpecificClient.scss';
import Footer from '../Footer/Footer';



import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';

export default function SpecificClient() {

    const location = useLocation();

    const history = useHistory();


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(3),
        textAlign: 'center',
        fontSize: '20px',
        color: theme.palette.text.secondary,
    }));



    // useEffect(() => {
    //     dispatch({ type: 'FETCH_SPECIFIC_CLIENT' })
    // }, [location]) // end of useEffect

    const specificClientReducer = useSelector(store => store.specificClientReducer);


    const dispatch = useDispatch();
    return (
        <div
            style={{ backgroundColor: '#a197ff', minHeight: '736px', marginTop: '-30px' }}
        >
                <CloseIcon
                className='specific-client-exit'
                fontSize='large'
                onClick={() => history.goBack()}
            />

            {specificClientReducer.map((client, i) => {
                let timeIn = new Date(client.in);
                let timeOut = new Date(client.out);
                return (
                    <div key={i}>


                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Item>{client.to_char}</Item>
                                </Grid>

                                <Grid item xs={6}>
                                    <Item> Time In
                                        <Divider />
                                        <br></br>
                                        {timeIn.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })}</Item>
                                </Grid>
                                <Grid item xs={6}>
                                    <Item> Time Out
                                        <Divider />
                                        <br></br>
                                        {timeOut.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })}</Item>
                                </Grid>
                                <Grid item xs={12}>
                                    <Item>{client.notes}</Item>
                                </Grid>
                            </Grid>
                        </Box>


                        {/* <h2>{client.id}</h2>
                        <h2>{client.to_char}</h2> */}

                    </div>
                );
            })}
            <Footer />


        </div>
    )


}; // end of function