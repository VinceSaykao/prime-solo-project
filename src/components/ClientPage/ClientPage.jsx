import './ClientPage.scss';
import Footer from '../Footer/Footer';
import ClientPageItem from '../ClientPageItem/ClientPageItem';

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

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));




export default function ClientPage() {
    // const [expanded, setExpanded] = React.useState(false);
    const clientInfoReducer = useSelector(store => store.clientInfoReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_CLIENT' })
    }, [location]) // end of useEffect




    const history = useHistory();

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    // const handleClose = () => {
    //     history.push('/user')
    // }

    console.log('this is', { clientInfoReducer })
    return (
        <>



            <ClientPageItem />

            <Footer />
        </>
    )

}; // end of ClientPage

