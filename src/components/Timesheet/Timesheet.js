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
        Date,
        Client,
        In,
        Out,
        mileage,
        notes: [
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
                                        <TableCell align="right">In</TableCell>
                                        <TableCell align="right">Out</TableCell>
                                        <TableCell align="right">Mileage</TableCell>
                                        <TableCell align="right">Notes</TableCell>
                                        
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.price * 100) / 100}
                                            </TableCell>
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
const rows = [
    createData('Frozen yoghurt'),
    createData('Ice cream sandwich'),
    createData('Eclair'),
    createData('Cupcake'),
    createData('Gingerbread'),
];

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










export default function Timesheet() {

    const location = useLocation();

    useEffect(() => {
        dispatch({ type: 'FETCH_TIMESHEET' })
    }, [location]) // end of useEffect


    const history = useHistory();

    const dispatch = useDispatch();
    const timesheetReducer = useSelector(store => store.timesheetReducer);








    console.log('this is new', timesheetReducer.client_name);
    console.log('timesheet is', timesheetReducer);
    return (
        <div>
            <Helmet>
                <style>{`body { background-image: url("https://images.unsplash.com/photo-1584463623578-37726932ba2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG9tZSUyMGhlYWx0aGNhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"); 
                background-repeat: no-repeat; background-size: cover; background-position: -80px 120px; }`}

                </style>
            </Helmet>





            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Client Names</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            );






            <Footer />
        </div >
    )

}; // end of Timesheet

// data table 