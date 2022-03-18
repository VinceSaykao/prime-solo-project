import React from 'react';
import './Footer.scss';
import LogOutButton from '../LogOutButton/LogOutButton';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useHistory } from 'react-router-dom';

import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';


import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ForumIcon from '@mui/icons-material/Forum';




// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

//date.now

export default function Footer() {

  const history = useHistory();


  const handleClick = () => {
    history.push('/timesheet');
  }


  // start of drawer ******

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box id='box'
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List id='footer-list'>
        {[<p id='footer-profile-label' onClick={profileView}>Profile</p>,<p id='footer-client-label' onClick={handleClientPush}>Client Info</p>].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <AccountBoxIcon 
              id='footer-profile'
              onClick={profileView}
              fontSize='large'
              /> : <GroupIcon id='footer-client' onClick={handleClientPush}/>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List id='second-footer-list'>
        {[<p id='footer-add-label' onClick={handleAdd}>Add Timesheet</p>, <p id='footer-chat-label' onClick={handleClickChat}>Chat</p>].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <AddCircleOutlineIcon id='footer-add' onClick={handleAdd}/> : <ForumIcon id='footer-chat' onChange={handleClickChat}/>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List id='footer-footer'>
        {[<h4 id='logout-footer'><LogOutButton /></h4>].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <LogoutIcon 
              id='logout-footer-icon'
              onClick={handleLogout}
              /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // end of drawer *****

                const handleLogout = () => {
                    console.log('logout');
                    LogOutButton();
                };

                const handleAdd = () => {
                  history.push('/timesheetform');
                };

                const profileView = () => {
                  history.push('/home')
                }
                const handleClientPush = () => {
                  history.push('/clientpage');
                }
                const handleClickChat = () => {
                  history.push('/chat');
                }

  return <footer>

{['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    

<MenuIcon
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

