import { useHistory, useLocation, useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';

import TimesheetItem from '../TimesheetItem/TimesheetItem';
import ClientDetailsItem from '../ClientDetailsItem/ClientDetailsItem';
import ClientDetailsAddButton from '../ClientDetailsAddButton/ClientDetailsAddButton';
import ClientDetailsItemDelete from '../ClientDetailsItemDelete/ClientDetailsItemDelete';


import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


import Footer from '../Footer/Footer';

import './ClientDetails.scss';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ClientDetails() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_CLIENT' })
        // dispatch({ type: 'FETCH_CLIENT_TIMESHEET' })
        dispatch({ type: 'FETCH_CLIENT_SHEET', payload: client })
        dispatch({ type: 'FETCH_CLIENT_TIMESHEET', payload: client })
    }, [location]) // end of useEffect

    const { client } = useParams();
    const history = useHistory();
    const clientInfoReducer = useSelector(store => store.clientInfoReducer);
    const timesheetClientReducer = useSelector(store => store.timesheetClientReducer);




    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#a197ff',
            color: '#000000',
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 18,
        },
    }));

    const ColorButton = styled(Button)(({ theme }) => ({
        color: '#ffffff',
        backgroundColor: '#a18de1',
        '&:hover': {
            backgroundColor: '#bdb4d8',
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    console.log(timesheetClientReducer);
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
                        <>
                            <Avatar
                                id='avatar-details'
                                src={item.image_url}
                                sx={{ width: 100, height: 100 }}
                            />


                            <div id='client-header-name'>
                                {item.client_fullname}
                            </div>


                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label={"Timesheet"} {...a11yProps(0)} />
                                        <Tab label={"Info"} {...a11yProps(2)} />
                                        <Tab label="History" {...a11yProps(3)} />
                                        <Tab label="Hobbies" {...a11yProps(4)} />

                                    </Tabs>

                                </Box>



                                <TabPanel

                                    // Move client info reducer as a prop as item and move the link down, so only button pushes
                                    value={value} index={0}>
                                    <Link to={`/clienttimesheet/${item.client_fullname}`}>
                                        <ClientDetailsAddButton />
                                    </Link>

                                    <div className="adminView">


                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 1000 }} aria-label="customized table" className='adminTable'>
                                                <TableHead>
                                                    <TableRow>
                                                        <StyledTableCell>Date</StyledTableCell>
                                                        <StyledTableCell align="center">Time In</StyledTableCell>
                                                        <StyledTableCell align="center">Time Out</StyledTableCell>
                                                        <StyledTableCell align="center">Mileage</StyledTableCell>
                                                        <StyledTableCell align="center">Notes</StyledTableCell>
                                                        <StyledTableCell></StyledTableCell>
                                                        <StyledTableCell></StyledTableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {timesheetClientReducer?.map(timesheet => (
                                                        <StyledTableRow key={timesheet.id}>
                                                            <StyledTableCell scope="row">
                                                                {timesheet.to_char}
                                                            </StyledTableCell>
                                                            <StyledTableCell scope="row">
                                                                {timesheet.in}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="center">
                                                                {timesheet.out}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="center">
                                                                {timesheet.mileage}
                                                            </StyledTableCell>
                                                            <StyledTableCell scope="row">
                                                                {timesheet.notes}
                                                            </StyledTableCell>
                                                            <StyledTableCell
                                                                align="center"
                                                            >
                                                                <ClientDetailsItem 
                                                                timesheet={timesheet}
                                                                />
                                                        
                                                            </StyledTableCell>
                                                            <StyledTableCell
                                                                align="center"
                                                            >
                                                                <ClientDetailsItemDelete 
                                                                timesheet={timesheet}
                                                                />
                                                        
                                                            </StyledTableCell>
                                                        </StyledTableRow>
                                                    ))}

                                                </TableBody>
                                            </Table>
                                        </TableContainer>



                            








                                    </div>


                                </TabPanel>
                                <div className='client-details-info'>
                                <TabPanel
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = `https://www.google.com/maps?q=${item.address}`;
                                    }}
                                    value={value} index={1}>
                                    {item.address}
                                    <Divider />
                                    Mobile: {item.phone}
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    {item.history}
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    {item.hobbies}
                                </TabPanel>
                                </div>

                            </Box>
                        </>
                    );
                })}

                <Footer />
            </div>



        </>
    )

}
