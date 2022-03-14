
export default function TimesheetItem({timesheetItem}) {

    return (
        <div>
            <li>
            {timesheetItem.date} {timesheetItem.client_name} {timesheetItem.in} {timesheetItem.out} {timesheetItem.mileage} {timesheetItem.notes}
            </li>
        </div>
    )

}; // end of TimesheetItem