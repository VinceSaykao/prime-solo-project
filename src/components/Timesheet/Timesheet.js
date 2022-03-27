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
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);




const images = [
    {
        label: 'help-1',
        imgPath:
            'https://media.istockphoto.com/photos/home-caregiver-helping-a-senior-man-standing-up-at-home-picture-id1313001485?b=1&k=20&m=1313001485&s=170667a&w=0&h=gf59mcgLFPf5_y2OVC_B2Drfgkq2nvG18IN-rgBDQ1s=',
    },
    {
        label: 'help-2',
        imgPath:
            'https://media.istockphoto.com/photos/nurse-supporting-senior-patient-walking-or-moving-up-the-stairs-at-picture-id1322494434?b=1&k=20&m=1322494434&s=170667a&w=0&h=rj8kP9_2tTi-8rtSZmjwtBQpuMi7i4LNN0wxX5a64Q4=',
    },
    {
        label: 'help-3',
        imgPath:
            'https://media.istockphoto.com/photos/young-caring-african-nurse-helping-senior-old-elderly-man-grandfather-picture-id1313904456?b=1&k=20&m=1313904456&s=170667a&w=0&h=U5RRXsKONXfEC305u4J1z9w7qGhxAv5zKFEV_oew7Zk=',
    },
    {
        label: 'help-4',
        imgPath:
            'https://media.istockphoto.com/photos/senior-woman-welcomes-home-healthcare-nurse-into-her-home-picture-id1314076190?b=1&k=20&m=1314076190&s=170667a&w=0&h=b5j0mFZF8kAlQeEkb_Y3f7DXZl854SksBSsP_wEl2ss=',
    },
];





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




    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };








    return (
        <div>
            <Helmet>
                <style>{`body { background-image: url("https://images.unsplash.com/photo-1584463623578-37726932ba2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG9tZSUyMGhlYWx0aGNhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"); 
                background-repeat: no-repeat; background-size: cover; background-position: -80px 120px; margin-top: -35px;}`}

                </style>
            </Helmet>

            <div className='moving-images'>
            <Box sx={{ minWidth: 414, flexGrow: 1 }}>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    component="img"
                                    sx={{
                                        height: 255,
                                        display: 'block',
                                        minWidth: 400,
                                        overflow: 'hidden',
                                        width: '100%',
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
        
            </Box>
            </div>



{/* 
            <div id='timesheet-header-div'>

            </div> */}

            <div id="timesheet-div">
                <div style={{ height: '72%', width: '100%' }}>


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

