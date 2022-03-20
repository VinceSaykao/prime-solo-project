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

// <h1 id='current-client'>Current Clients</h1>

// <CloseIcon 
// id='close-icon'
// onClick={handleClose}
// />
//     <Helmet>
//         <style>{`body,html {background-image: url("https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"); 
//             background-size: cover; background-position:-50px 0px; height: 100px; width: 1000px;
//             }`}

//         </style>
//     </Helmet>
//     <div id='all-cards'>
//         <Card sx={{ maxWidth: 345 }}>
//             <CardHeader
//                 avatar={
//                     <Avatar src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' sx={{ width: 70, height: 70 }} >
//                         R
//                     </Avatar>
//                 }

//                 title="Sarah Swan"
//                 subheader="277 Bedford Ave, Brooklyn, NY 11211, USA"
//             />
//             <CardMedia
//                 component="img"
//                 height="194"
//                 src="https://developers.google.com/maps/images/landing/hero_geocoding_api.png"
//                 alt="Paella dish"
//             />
//             <CardContent>
//                 <Typography variant="body2" color="text.secondary">
//                     Age 63, Female
//                     <br></br>
//                     Mon, Wed: 3pm-6pm, Friday: 12pm-3pm
//                     <br></br>
//                     Phone: 651-123-1234
//                 </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//                 <ExpandMore
//                     expand={expanded}
//                     onClick={handleExpandClick}
//                     aria-expanded={expanded}
//                     aria-label="show more"
//                 >
//                     <ExpandMoreIcon />
//                 </ExpandMore>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//                 <CardContent>
//                     <Typography paragraph>
//                         <h1 id='client-phead'>Hobbies</h1>
//                         <Divider />
//                     </Typography>
//                     <Typography paragraph>
//                         She likes to go on long walks in the mornings. She eats an apple a day to keep the doctor away!
//                     </Typography>

//                     <Typography paragraph>
//                         <h1 id='client-phead'>History </h1>
//                     </Typography>
//                     <Divider />
//                     <Typography>
//                         Known for frequent seizuires.
//                     </Typography>
//                 </CardContent>
//             </Collapse>
//         </Card>



//         <Card sx={{ maxWidth: 345 }}>
//             <CardHeader
//                 avatar={
//                     <Avatar src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' sx={{ width: 70, height: 70 }} >
//                         R
//                     </Avatar>
//                 }

//                 title="Joe Shmo"
//                 subheader="3212 Chase Ave, Minneapolis, MN 55434, USA"
//             />
//             <CardMedia
//                 component="img"
//                 height="194"
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVeQ_o5QXt-k1vH2LUIx6vToiFBfh9DZDdjA&usqp=CAU"
//                 alt="Paella dish"
//             />
//             <CardContent>
//                 <Typography variant="body2" color="text.secondary">
//                     Age 32, Male
//                     <br></br>
//                     Mon, Wed: 3pm-6pm, Friday: 12pm-3pm
//                     <br></br>
//                     Phone: 651-123-1234
//                 </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//                 <ExpandMore
//                     expand={expanded}
//                     onClick={handleExpandClick}
//                     aria-expanded={expanded}
//                     aria-label="show more"
//                 >
//                     <ExpandMoreIcon />
//                 </ExpandMore>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//                 <CardContent>
//                     <Typography paragraph>
//                         <h1 id='client-phead'>Hobbies</h1>
//                         <Divider />
//                     </Typography>
//                     <Typography paragraph>
//                         He likes to go on slower walks in the mornings. He always drinks pop and enjoys shopping!
//                     </Typography>

//                     <Typography paragraph>
//                         <h1 id='client-phead'>History </h1>
//                     </Typography>
//                     <Divider />
//                     <Typography>
//                         Has diabetes and takes medications for them.
//                     </Typography>
//                 </CardContent>
//             </Collapse>
//         </Card>

//         <Card sx={{ maxWidth: 345 }}>
//             <CardHeader
//                 avatar={
//                     <Avatar src='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' sx={{ width: 70, height: 70 }} >
//                         R
//                     </Avatar>
//                 }

//                 title="Alexi Smexi"
//                 subheader="277 Bedford Ave, Brooklyn, NY 11211, USA"
//             />
//             <CardMedia
//                 component="img"
//                 height="194"
//                 src="https://developers.google.com/maps/images/landing/hero_geocoding_api.png"
//                 alt="Paella dish"
//             />
//             <CardContent>
//                 <Typography variant="body2" color="text.secondary">
//                     Age 63, Female
//                     <br></br>
//                     Mon, Wed: 3pm-6pm, Friday: 12pm-3pm
//                     <br></br>
//                     Phone: 651-123-1234
//                 </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//                 <ExpandMore
//                     expand={expanded}
//                     onClick={handleExpandClick}
//                     aria-expanded={expanded}
//                     aria-label="show more"
//                 >
//                     <ExpandMoreIcon />
//                 </ExpandMore>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//                 <CardContent>
//                     <Typography paragraph>
//                         <h1 id='client-phead'>Hobbies</h1>
//                         <Divider />
//                     </Typography>
//                     <Typography paragraph>
//                         Alexi likes dance on the poles! She has family in the North Pole and come from a family of Irish dancers. 
//                     </Typography>

//                     <Typography paragraph>
//                         <h1 id='client-phead'>History </h1>
//                     </Typography>
//                     <Divider />
//                     <Typography>
//                         Is permanentely in a wheelchair.
//                     </Typography>
//                 </CardContent>
//             </Collapse>
//         </Card>

//     </div>