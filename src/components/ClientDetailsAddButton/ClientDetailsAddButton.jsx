import { Link } from 'react-router-dom';
import './ClientDetailsAddButton.scss';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { styled } from '@mui/material/styles';

export default function ClientDetailsAddButton({ clientTwo }) {

    const handleAdd = () => {
        console.log(clientTwo);
    }
    const ButtonAdd = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 30,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#8381ff',
        borderColor: '#fff',
        color: '#fff',
    });


    console.log('we have fire!', clientTwo);
    return (
        <div className='client-details-add'>
            <ButtonAdd variant="contained" startIcon={<AddCircleOutlineIcon onClick={handleAdd} fontSize='large'/>}>
                Add
            </ButtonAdd>
        </div>
    )

}; // end of function