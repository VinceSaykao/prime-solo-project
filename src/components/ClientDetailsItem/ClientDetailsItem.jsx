import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function ClientDetailsItems({timesheetItem}) {
    
    const dispatch = useDispatch();
    const history = useHistory();


    const handleEdit = () => {
        dispatch({ type: 'SET_CLIENT_UPDATE_TIMESHEET', payload: timesheetItem })
        history.push('/updateClientTimesheetForm');
        // updateclienttimesheetform
    }; // end of handleEdit

    const handleDelete = () => {

    }; // end of handleDelete

    console.log('inside this', timesheetItem)
    return (

        <div>
            <div id='timesheet-item-list'>
                {timesheetItem.to_char} {timesheetItem.client_name}
                <br></br>
                <button
                    onClick={handleEdit}
                >Edit</button>
                <button
                    onClick={handleDelete}
                >Delete</button>
            </div>

        </div>
    )


}; // ClientDetailsItems