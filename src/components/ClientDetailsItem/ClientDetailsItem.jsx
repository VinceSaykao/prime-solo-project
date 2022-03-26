import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

export default function ClientDetailsItems({timesheetItem}) {
    
    const dispatch = useDispatch();
    const history = useHistory();


    const handleEdit = () => {
        dispatch({ type: 'SET_CLIENT_UPDATE_TIMESHEET', payload: timesheetItem })
        history.push('/updateClientTimesheetForm');
        // updateclienttimesheetform
    }; // end of handleEdit

    const handleDelete = () => {
        dispatch({ type: 'DELETE_CLIENT_TIMESHEET', payload: timesheetItem.id })
    }; // end of handleDelete

    console.log('inside this', timesheetItem.id)
    return (

        <div>
            <div id='timesheet-item-list'>
                {timesheetItem.to_char} {timesheetItem.client_name} {timesheetItem.notes}
                <br></br>
{/* 
                <Link to={`/clienttimesheet/${timesheetItem.id}`}> */}
                <button
                    onClick={handleEdit}
                >Edit</button>
                                    {/* </Link> */}



                <button
                    onClick={handleDelete}
                >Delete</button>
            </div>

        </div>
    )


}; // ClientDetailsItems