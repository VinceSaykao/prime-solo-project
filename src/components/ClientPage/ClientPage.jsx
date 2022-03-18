import './ClientPage.scss';
import Footer from '../Footer/Footer';

import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';


import * as React from 'react';
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
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <>
            <Helmet>
                <style>{`body { height: 300px; width: 300px; background-image: url("https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"); 
                 background-size: cover; background-position:-50px 0px; 
                 }`}

                </style>
            </Helmet>
            <div id='all-cards'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' sx={{ width: 70, height: 70 }} >
                                R
                            </Avatar>
                        }

                        title="Sarah Swan"
                        subheader="277 Bedford Ave, Brooklyn, NY 11211, USA"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        src="https://developers.google.com/maps/images/landing/hero_geocoding_api.png"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Age 63, Female
                            <br></br>
                            Mon, Wed: 3pm-6pm, Friday: 12pm-3pm
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                <h1 id='client-phead'>Hobbies</h1>
                                <Divider />
                            </Typography>
                            <Typography paragraph>
                                She likes to go on long walks in the mornings. She eats an apple a day to keep the doctor away!
                            </Typography>

                            <Typography paragraph>
                                <h1 id='client-phead'>History </h1>
                            </Typography>
                            <Divider />
                            <Typography>
                                Known for frequent seizuires.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>



                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' sx={{ width: 70, height: 70 }} >
                                R
                            </Avatar>
                        }

                        title="Joe Shmo"
                        subheader="3212 Chase Ave, Minneapolis, MN 55434, USA"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVeQ_o5QXt-k1vH2LUIx6vToiFBfh9DZDdjA&usqp=CAU"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Age 32, Male
                            <br></br>
                            Mon, Wed: 3pm-6pm, Friday: 12pm-3pm
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                <h1 id='client-phead'>Hobbies</h1>
                                <Divider />
                            </Typography>
                            <Typography paragraph>
                                He likes to go on slower walks in the mornings. He always drinks pop and enjoys shopping!
                            </Typography>

                            <Typography paragraph>
                                <h1 id='client-phead'>History </h1>
                            </Typography>
                            <Divider />
                            <Typography>
                                Has diabetes and takes medications for them.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar src='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' sx={{ width: 70, height: 70 }} >
                                R
                            </Avatar>
                        }

                        title="Alexi Smexi"
                        subheader="277 Bedford Ave, Brooklyn, NY 11211, USA"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        src="https://developers.google.com/maps/images/landing/hero_geocoding_api.png"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Age 63, Female
                            <br></br>
                            Mon, Wed: 3pm-6pm, Friday: 12pm-3pm
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                <h1 id='client-phead'>Hobbies</h1>
                                <Divider />
                            </Typography>
                            <Typography paragraph>
                                She likes to go on long walks in the mornings. She eats an apple a day to keep the doctor away!
                            </Typography>

                            <Typography paragraph>
                                <h1 id='client-phead'>History </h1>
                            </Typography>
                            <Divider />
                            <Typography>
                                Known for frequent seizuires.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>

            </div>

            {/* <Footer /> */}
        </>
    )

}; // end of ClientPage