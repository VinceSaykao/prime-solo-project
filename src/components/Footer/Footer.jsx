import React from 'react';
import './Footer.scss';
import LogOutButton from '../LogOutButton/LogOutButton';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useHistory } from 'react-router-dom';

import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';



// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'



export default function Footer() {

  const history = useHistory();


  const handleClick = () => {
    // history.push('/home');
  }



  return <footer>

<FormatLineSpacingIcon 
    id="format-lines"
    fontSize='large'
    />

    <HomeRoundedIcon 
    id="home-icon"
    onClick={handleClick}
    fontSize="small"
    />

    {/* <LogOutButton id='logout-button' /> */}
    

  </footer>;
}

