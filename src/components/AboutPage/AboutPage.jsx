import React from 'react';
import img1 from './ILC.png'
import { useHistory } from 'react-router-dom';

import './AboutPage.scss';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'



function AboutPage() {

  const history = useHistory();

  const handleClick = () => {
    history.push('/user')
  }



  return (
    <div className="container">
      <div>
        <img 
        className='logo'
        onClick={handleClick}
        src={img1}/>
      </div>
    </div>
  );
}

export default AboutPage;
