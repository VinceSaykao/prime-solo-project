
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
import PropTypes from 'prop-types';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


import Footer from '../Footer/Footer';

import { Helmet } from 'react-helmet';




function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);


    const location = useLocation();

    useEffect(() => {
        dispatch({ type: 'FETCH_TIMESHEET' })
        dispatch({type: 'FETCH_BILBO_TIMESHEET'})
    }, [location]) // end of useEffect


    const history = useHistory();

    const dispatch = useDispatch();
    const timesheetReducer = useSelector(store => store.timesheetReducer);
    const timesheetBilboReducer = useSelector(store => store.timesheetBilboReducer);



    const handleDelete = () => {
        console.log('clicked delete');
        dispatch({ type: 'DELETE_TIMESHEET', payload: timesheetReducer.id })
    }; // end of handleDelete


    const handleEdit = () => {
        console.log('clicked edit');
        dispatch({ type: 'SET_UPDATE_TIMESHEET', payload: timesheetReducer })
        history.push('/updateTimesheetForm');
    }; // end of handleEdit

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Client</TableCell>
                                        <TableCell align="right">Time In</TableCell>
                                        <TableCell align="right">Time Out</TableCell>
                                        <TableCell align="right">Mileage</TableCell>
                                        <TableCell align="right">Notes</TableCell>
                                
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {timesheetBilboReducer.map((item,i) => (
                                        <TableRow key={i}>
                                            <TableCell component="th" scope="row">
                                                {item.to_char}
                                            </TableCell>
                                            <TableCell>{item.client_name}</TableCell>
                                            <TableCell align="right">{item.in}</TableCell>
                                            <TableCell align="right">{item.out}</TableCell>
                                            <TableCell align="right">{item.mileage}</TableCell>
                                            <TableCell align="right">{item.notes}</TableCell>
                                            <TableCell align="right"><Button onClick={handleDelete}>DELETE</Button></TableCell>
                                            <TableCell align="right"><Button onClick={handleEdit}>Edit</Button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};

const rows = 
[
    createData('All Clients'),
    createData('Michelle Sweden'),
    createData('Naruto Suzuki'),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    // createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    // createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    // createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];






export default function Timesheet() {

    const location = useLocation();

    useEffect(() => {
        dispatch({ type: 'FETCH_TIMESHEET' })
    }, [location]) // end of useEffect


    const history = useHistory();

    const dispatch = useDispatch();
    const timesheetReducer = useSelector(store => store.timesheetReducer);
    const timesheetBilboReducer = useSelector(store => store.timesheetBilboReducer);



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
            sortable: false,
            width: 250,
            editable: true

        },

    ];

    console.log('this is', timesheetBilboReducer)
    return (
        <>
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Client Name</TableCell>
                        {/* <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Footer />
        </>
    );

}; // end of Timesheet

// data table 