import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

    const { client } = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_CLIENT' })
    }, [location]) // end of useEffect

    // const history = useHistory();

    const clientInfoReducer = useSelector(store => store.clientInfoReducer);


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


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

                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label={"Information"} {...a11yProps(0)} />
                                    <Tab label="History" {...a11yProps(1)} />
                                    <Tab label="Hobbies" {...a11yProps(2)} />
                                    <Tab label="other" {...a11yProps(3)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                {item.address}
                                <br></br>
                                Mobile: {item.phone}
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                {item.history}
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                {item.hobbies}
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                {item.other}
                            </TabPanel>
                        </Box>


                    );
                })}



                <Footer />
            </div>



        </>
    )

}