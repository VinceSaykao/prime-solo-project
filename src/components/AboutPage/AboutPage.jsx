import React from 'react';
import img1 from './ILC.png'
import { useHistory } from 'react-router-dom';

import './AboutPage.scss';

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Hidden } from '@mui/material';



import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);









function AboutPage() {

  const history = useHistory();

  const handleClick = () => {
    history.push('/user')
  }




  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
      setActiveStep(step);
  };



const images = [
  {
      label: 'help-1',
      imgPath:
          'https://media.istockphoto.com/photos/home-caregiver-helping-a-senior-man-standing-up-at-home-picture-id1313001485?b=1&k=20&m=1313001485&s=170667a&w=0&h=gf59mcgLFPf5_y2OVC_B2Drfgkq2nvG18IN-rgBDQ1s=',
  },
  {
      label: 'help-2',
      imgPath:
          'https://media.istockphoto.com/photos/nurse-supporting-senior-patient-walking-or-moving-up-the-stairs-at-picture-id1322494434?b=1&k=20&m=1322494434&s=170667a&w=0&h=rj8kP9_2tTi-8rtSZmjwtBQpuMi7i4LNN0wxX5a64Q4=',
  },
  {
      label: 'help-3',
      imgPath:
          'https://media.istockphoto.com/photos/young-caring-african-nurse-helping-senior-old-elderly-man-grandfather-picture-id1313904456?b=1&k=20&m=1313904456&s=170667a&w=0&h=U5RRXsKONXfEC305u4J1z9w7qGhxAv5zKFEV_oew7Zk=',
  },
  {
      label: 'help-4',
      imgPath:
          'https://media.istockphoto.com/photos/senior-woman-welcomes-home-healthcare-nurse-into-her-home-picture-id1314076190?b=1&k=20&m=1314076190&s=170667a&w=0&h=b5j0mFZF8kAlQeEkb_Y3f7DXZl854SksBSsP_wEl2ss=',
  },
];




  return (
    <div className="container"
    style={{maxWidth:'414px', maxHeight:'736px', overflow: 'hidden', backgroundColor:'black', marginTop: '-35px',}}
    >
           <img 
        className='real-logo'
        onClick={handleClick}
        src={img1}/>

<Box sx={{ minWidth: 414, flexGrow: 1 }}>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    component="img"
                                    sx={{
                                        height: 255,
                                        display: 'block',
                                        minWidth: 400,
                                        overflow: 'hidden',
                                        width: '100%',
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
        
            </Box>





         <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
      <div>

      </div>
    </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];

export default AboutPage;
