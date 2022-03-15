
export default function TimesheetItem({timesheetItem}) {

    function handleEdit() {
        console.log('clicked edit');
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