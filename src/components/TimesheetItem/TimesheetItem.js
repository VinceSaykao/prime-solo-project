import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './TimesheetItem.css';

export default function TimesheetItem({timesheetItem}) {

    const history = useHistory();
    const dispatch = useDispatch();


    const handleEdit = () => {
        console.log('clicked edit');
        dispatch ({type: 'SET_UPDATE_TIMESHEET', payload: timesheetItem})
        history.push('/updateTimesheetForm');
    }; // end of handleEdit

    const handleDelete = () => {
        console.log('clicked delete');
        dispatch({type: 'DELETE_TIMESHEET', payload: timesheetItem.id})
    }; // end of handleDelete

    return (
        <div>
            <td id='timesheet-item-list'>
            {timesheetItem.date} {timesheetItem.client_name} {timesheetItem.in} {timesheetItem.out} {timesheetItem.mileage} {timesheetItem.notes}
            <button
            onClick={handleEdit}
            >Edit</button>
            <button
            onClick={handleDelete}
            >Delete</button>
            </td>
        </div>
    )
}; // end of TimesheetItem