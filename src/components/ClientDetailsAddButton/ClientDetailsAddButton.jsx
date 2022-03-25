import { Link } from 'react-router-dom';
import './ClientDetailsAddButton.scss';
import Button from '@mui/material/Button';

export default function ClientDetailsAddButton({clientTwo}) {

const handleAdd = () => {
    console.log(clientTwo);
}

    console.log('we have fire!', clientTwo);
    return (
        <div className='client-details-add'>
            
            <Button
            onClick={handleAdd}
            >ADD</Button>
            {/* </Link> */}
        </div>
    )

}; // end of function