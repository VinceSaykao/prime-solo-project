

export default function ClientDetailsItems({timesheetItem}) {


    const handleEdit = () => {

    }; // end of handleEdit

    const handleDelete = () => {

    }; // end of handleDelete

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