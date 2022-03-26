import { Link } from 'react-router-dom';
import './ClientDetailsAddButton.scss';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function ClientDetailsAddButton({ clientTwo }) {

    const handleAdd = () => {
        console.log(clientTwo);
    }

    console.log('we have fire!', clientTwo);
    return (
        <div className='client-details-add'>
            <Button variant="contained" endIcon={<AddCircleOutlineIcon onClick={handleAdd} />}>
                Add
            </Button>
        </div>
    )

}; // end of function