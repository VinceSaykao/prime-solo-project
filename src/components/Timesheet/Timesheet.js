import './Timesheet.scss';
import TimesheetItem from '../TimesheetItem/TimesheetItem.js';


import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { DataGrid } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


import Footer from '../Footer/Footer';

export default function Timesheet() {

    const history = useHistory();

    const dispatch = useDispatch();
    const timesheetReducer = useSelector(store => store.timesheetReducer);


    useEffect(() => {
        dispatch({ type: 'FETCH_TIMESHEET' })
    }, []) // end of useEffect



    const columns = [
        { field: 'id', headerName: 'Id', width: 100 },
        {
            field: 'to_char',
            headerName: 'Date',
            width: 150,
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
            width: 150,
            editable: true,
        },
        {
            field: 'out',
            headerName: 'Time Out',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'mileage',
            headerName: 'Mileage',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            editable: true

        },
        {
            field: 'notes',
            headerName: 'Notes',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            editable: true

        },
    ];


    const handleAdd = () => {
        history.push('/timesheetform');
    }



    console.log('this is new', timesheetReducer.client_name);
    console.log('timesheet is', timesheetReducer);
    return (
        <div id="timesheet-div">
            <div style={{ height: 450, width: '100%' }}>
                <p
                className='timesheet-header'
                >Employee Timesheet</p>

                <DataGrid
                    rows={timesheetReducer}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick

                />


<button
                    onClick={handleAdd}
                > + Add Timesheet</button>

        <div className='tablestuff'>
                <table>
                    {/* <th>Date</th>
                    <th>Client Name</th> */}
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
                </div>





                <Footer />
            </div>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress
                    color="success"
                />
            </Box>
        </div >
    )

}; // end of Timesheet