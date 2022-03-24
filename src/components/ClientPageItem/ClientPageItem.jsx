import './ClientPageItem.scss';
import Footer from '../Footer/Footer';

import { useHistory, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';


import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';

import { useDispatch, useSelector } from 'react-redux';





export default function ClientPageItem() {
    // const [expanded, setExpanded] = React.useState(false);
    const clientInfoReducer = useSelector(store => store.clientInfoReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_CLIENT' })
    }, [location]) // end of useEffect




    const history = useHistory();


    console.log('this is', { clientInfoReducer })
    return (
        <>

            <h1 id='your-clients'>Your Clients</h1>
            <br></br>
            <div className='box'>
                {clientInfoReducer.map((item, i) => {
                    return (
                        
                        <div className='card'>
                            <div className='imgBx'>
                                <img src={item.image_url} />
                            </div>
                            <div className='details'>
                                <Link to={`/clientdetails/${item.id}`}><h2>{item.client_fullname}</h2>
                                    <Divider />
                                    {item.phone}
                                </Link>
                            </div>
                        </div>

                    );

                })}


                <div className='card1'>
                    <div className='imgBx1'>

                    </div>

                </div>



            </div>

            <Footer />
        </>
    )

}; // end of ClientPage
