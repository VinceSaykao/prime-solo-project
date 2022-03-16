import './Timesheet.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import TimesheetItem from '../TimesheetItem/TimesheetItem.js';


import { DataGrid } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Footer from '../Footer/Footer';

export default function Timesheet() {


    const dispatch = useDispatch();
    const timesheetReducer = useSelector(store => store.timesheetReducer);


    useEffect(() => {
        dispatch({ type: 'FETCH_TIMESHEET' })
    }, []) // end of useEffect

    







    console.log('this is', timesheetReducer)
    return (
        <div id="timesheet-div">
            <div style={{ height: 400, width: '100%' }}>
            <p>Employee Timesheet</p>
{/* 
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            /> */}


            <ul>
                {timesheetReducer.map((timesheetItem, i) => {
                    return (
                        <TimesheetItem
                            key={i}
                            timesheetItem={timesheetItem} />
                    );
                })}
            </ul>
            <Footer />
        </div>
        </div>
    )

}; // end of Timesheet