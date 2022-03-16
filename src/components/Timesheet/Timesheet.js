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
            field: 'date',
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

        },
        {
            field: 'notes',
            headerName: 'Notes',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,

        },
    ];

    const handleDelete = () => {
        console.log('clicked delete');
        dispatch({ type: 'DELETE_TIMESHEET', payload: timesheetItem.id })
    }; // end of handleDelete

    const handleAdd = () => {
        history.push('/timesheetform');
    }



    console.log('this is', timesheetReducer)
    return (
        <div id="timesheet-div">
            <div style={{ height: 400, width: '100%' }}>
                <p>Employee Timesheet</p>

                <DataGrid
                    rows={timesheetReducer}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />

                <table>
                    <th>Date</th>
                    <th>Client Name</th>
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


                <button
                    onClick={handleAdd}
                > + Add Timesheet</button>



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