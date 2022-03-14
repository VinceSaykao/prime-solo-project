import './Timesheet.css';
import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';
import TimesheetItem from '../TimesheetItem/TimesheetItem.js';

export default function Timesheet() {

    useEffect(() => {
        dispatchEvent({ type: 'FETCH_TIMESHEET'});
    }, []); // end of useEffect

    const timesheetReducer = useSelector(store => store.timesheetReducer)


    return (
        <div id="timesheet-div">
        <p>Employee Timesheet</p>
        <ul>

        {timesheetReducer.map((timesheetItem) => {
                return (
                    <TimesheetItem key={timesheetItem.id} timesheetItem={timesheetItem} />
                );
            })}


        </ul>
        </div>
    )

}; // end of Timesheet