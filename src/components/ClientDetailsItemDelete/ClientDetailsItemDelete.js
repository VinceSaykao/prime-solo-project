import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';




import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';

export default function ClientDetailsItemsDelete({ timesheet }) {

    const dispatch = useDispatch();
    const history = useHistory();



    const handleDelete = () => {
        dispatch({ type: 'DELETE_CLIENT_TIMESHEET', payload: timesheet.id })
    }; // end of handleDelete




    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#78e194',
            color: '#000000',
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 18,
        },
    }));

    const ColorButton = styled(Button)(({ theme }) => ({
        color: '#ffffff',
        backgroundColor: '#a18de1',
        '&:hover': {
            backgroundColor: '#bdb4d8',
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (

        <div>

                <ColorButton
                    variant="contained"
                    onClick={handleDelete}
                >
                    Delete
                </ColorButton>

        </div>
    )


}; // ClientDetailsItems