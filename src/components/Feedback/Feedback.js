import './Feedback.scss';
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';



import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



export default function Feedback() {

    const handleClick = () => {
        console.info('You clicked the Chip.');


    };



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
                'https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/277529682_10226764265310234_515059621598762615_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=EjlBeqXCRooAX9X4xVP&_nc_oc=AQl1NqMfAW7rJgD7ZI2wnz8QuW0fce_7x0NneGOAvWCSeOjzyVzEIJNIZLL5nuNQhBI&_nc_ht=scontent-msp1-1.xx&oh=00_AT-m_0x3ffF8yDgmyI1Ue8LOius_CEx803pUW-F01Y9vig&oe=6245D13A',
        },
        {
            label: 'help-2',
            imgPath:
                'https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/277539022_10226764269670343_2112312001627277010_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=NbN6RJI_9fYAX_O1YwT&_nc_ht=scontent-msp1-1.xx&oh=00_AT-6mm7Cqd6bJeipdcNPylsFMo04T4TW3xiVmCyWkRvuBg&oe=62471E6D',
        },
        {
            label: 'help-3',
            imgPath:
                'https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/277306090_10226764269790346_8153145759407045184_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=olwjVaM7-XUAX90P_39&_nc_ht=scontent-msp1-1.xx&oh=00_AT8oYysZTQwsIuhy0YMxnsLCrQuwT6qmzxquxwUShKSbfg&oe=6245C1AD',
        },
        {
            label: 'help-4',
            imgPath:
                'https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/276288303_10226764269990351_7831895732276778987_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=00q0n9KjYNgAX8DAhBE&_nc_oc=AQkOHEVIB4qAiErr-9FT3J6nfuwGgE1aTL4qTQs2PwRUKdIhr1u-E7_mBqA9AO1HmSc&_nc_ht=scontent-msp1-1.xx&oh=00_AT9xbe0eJyRBlQtwJbTuyUIB7EENe7KX3lsWdJigQifoGQ&oe=6246337B',
        },
        {
            label: 'help-4',
            imgPath:
                'https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/277099571_10226764270350360_2877728715038616196_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=o-ezGT7Rr2IAX9SwXSs&_nc_ht=scontent-msp1-1.xx&oh=00_AT96KppcKBCOoTFubn6XoF4Wi3f-G9ddHzw0ll_ZHcd0_w&oe=62454C67',
        },
        {
            label: 'help-4',
            imgPath:
                'https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/277560642_10226764270750370_4224945693238054667_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=0TDdlARS_HQAX8aIM0L&_nc_ht=scontent-msp1-1.xx&oh=00_AT8g_rNjxqUQiPcG3hMMNb4Sv4vRz2sCq9-Thw_OgbupZw&oe=6245BDFF',
        },
        {
            label: 'help-4',
            imgPath:
                'https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/277002391_10226764271150380_9007364964809411979_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=WuTgig51fL8AX8-wWwd&_nc_ht=scontent-msp1-1.xx&oh=00_AT8116xPZM2fP7ZcOaYq2IeyemMeUh8GIWorvNAnqMDEpQ&oe=6246335F',
        },
        {
            label: 'help-4',
            imgPath:
                'https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/277106936_10226764270950375_8342000210162806425_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=qXbeE26m1lMAX-4-MKD&_nc_ht=scontent-msp1-1.xx&oh=00_AT9fxDtv8dioi7w-Satc0N0jA8rWs53ogP4CUO6OQCRT3w&oe=6246167C',
        },
    ];
    return (
        <div
        // style={{ backgroundColor: '#4444' }}
        >
            <h3 className='chips'>OCTOPULATE</h3>
            <br></br>
            <div id='thanks'>
                <Stack direction="row" spacing={1}>
                    <Chip label="Javascript" variant="outlined" id='chips' />
                    <Chip label="ReactJs" variant="outlined" id='chips' />
                    <Chip label="NodeJs" variant="outlined" id='chips' />
                </Stack>
                <br></br>
                <Divider id='divide' />

                <Stack direction="row" spacing={1}>
                    <Chip label="SQL" variant="outlined" id='chips' />
                    <Chip label="Express" variant="outlined" id='chips' />
                    <Chip label="Postico" variant="outlined" id='chips' />
                </Stack>
                <br></br>
                <Stack direction="row" spacing={1}>
                    <Chip label="Postman" variant="outlined" id='chips' />
                    <Chip label="Redux" variant="outlined" id='chips' />
                    <Chip label="Saga" variant="outlined" id='chips' />
                </Stack>
                <br></br>
                <Stack direction="row" spacing={1}>
                    <Chip label="Git" variant="outlined" id='chips' />
                    <Chip label="GitHub" variant="outlined" id='chips' />
                    <Chip label="Passport" variant="outlined" id='chips' />
                </Stack>
                <br></br>
                <Stack direction="row" spacing={1}>
                    <Chip label="HTML/CSS" variant="outlined" id='chips' />
                    <Chip label="MUI" variant="outlined" id='chips' />
                    <Chip label="HTML/CSS" variant="outlined" id='chips' />
                </Stack>
                <br></br>
            </div>
            <h3>THANK YOU</h3>


            <Box sx={{ minWidth: 420, flexGrow: 1 }}>
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
        </div>
    )
}