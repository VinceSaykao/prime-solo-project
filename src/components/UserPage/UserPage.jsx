import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Helmet } from 'react-helmet';

import img from './mee.jpg';
import img2 from './tranquil.png';


import './UserPage.scss';
import Footer from '../Footer/Footer';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const handleSeeMore = (event) => {
    e.preventDefault();
    
  }

  return (
    <>
      <Helmet>
        <style>{`body { height: 2000px; background-image: url("https://images.unsplash.com/photo-1540458638618-893e9fb35c07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbGF4eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"); 
                 background-size: cover; background-position:-50px 0px; background-repeat: no-repeat; 
                 }`}

        </style>
      </Helmet>
      <div className="contain">
        <h2 id='welcome-header'>Welcome | {user.username}!</h2>

        <Avatar
          id='avatar'
          src={img}
          sx={{ width: 300, height: 300 }}
        />
      </div>
      <div id='calender'><p>yo</p></div>

      <Card sx={{ maxWidth: 390 }}
      id='card1'
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img2}
            alt="peace"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Rest
            </Typography>
            <Typography variant="body2" color="text.secondary">
              “The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.”
              ― Albert Einstein
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Button variant="outlined"
      href="https://www.youtube.com/watch?v=KmtzQCSh6xk&t=15s"
      onClick={handleSeeMore}
      >I'm Feeling Lucky!</Button>

      <Footer />
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

