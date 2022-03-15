import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function TimesheetItem({timesheetItem}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleEdit = () => {
        console.log('clicked edit');
        dispatch ({type: 'SET_UPDATE_TIMESHEET', payload: timesheetItem})
        history.push('/updateTimesheetForm');


    }; // end of handleEdit

    return (
        <div>
            <li>
            {timesheetItem.date} {timesheetItem.client_name} {timesheetItem.in} {timesheetItem.out} {timesheetItem.mileage} {timesheetItem.notes}
            <button
            onClick={handleEdit}
            >Edit</button>
            </li>
        </div>
    )

}; // end of TimesheetItem