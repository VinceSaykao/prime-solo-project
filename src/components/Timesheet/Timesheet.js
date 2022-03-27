import './Timesheet.scss';
import TimesheetItem from '../TimesheetItem/TimesheetItem.js';


import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';


import { DataGrid } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';


import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


import Footer from '../Footer/Footer';

import { Helmet } from 'react-helmet';







import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Timesheet() {

    const location = useLocation();

    useEffect(() => {
        dispatch({ type: 'FETCH_TIMESHEET' })
    }, [location]) // end of useEffect


    const history = useHistory();

    const dispatch = useDispatch();
    const timesheetReducer = useSelector(store => store.timesheetReducer);


    
    const columns = [
        { field: 'id', headerName: 'Id', width: 30 },
        {
            field: 'to_char',
            headerName: 'Date',
            width: 100,
            editable: true,
        },
        {
            field: 'client_name',
            headerName: 'Client Name',
            width: 150,
            editable: true,
        },
        {
            field: 'in',
            headerName: 'Time In',
            width: 100,
            editable: true,
        },
        {
            field: 'out',
            headerName: 'Time Out',
            type: 'number',
            width: 100,
            editable: true,
        },
        {
            field: 'mileage',
            headerName: 'Mileage',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 80,
            editable: true
            
        },
        {
            field: 'notes',
            headerName: 'Notes',
            description: 'This column has a value getter and is not sortable.',
            // sortable: false,
            width: 250,
            editable: true
            
        },
        
    ];
    


    
    

    return (
        <div>
            <Helmet>
                <style>{`body { background-image: url("https://images.unsplash.com/photo-1584463623578-37726932ba2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG9tZSUyMGhlYWx0aGNhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"); 
                background-repeat: no-repeat; background-size: cover; background-position: -80px 120px; }`}

                </style>
            </Helmet>




            <div id='timesheet-header-div'>
                
            </div>

            <div id="timesheet-div">
                <div style={{ height: '72%', width: '100%'}}>


                    <DataGrid
                        rows={timesheetReducer}
                        columns={columns}
                        pageSize={8}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                        disableSelectionOnClick
                    
        
                    />



                    {/* <div className='tablestuff'>
                        <h3 className='history'>History</h3>
                        <table>
                            <tr>
                                {timesheetReducer.map((timesheetItem, i) => {
                                    return (
                                        <TimesheetItem
                                            key={i}
                                            timesheetItem={timesheetItem} />
                                    );
                                })}
                            </tr>
                        </table>
                    </div> */}


                </div>
                {/* <Box sx={{ display: 'flex' }}>
                    <CircularProgress
                        color="success"
                    />
                </Box> */}
            </div >


            <Footer />
        </div>
    )

}; // end of Timesheet

// data table 

