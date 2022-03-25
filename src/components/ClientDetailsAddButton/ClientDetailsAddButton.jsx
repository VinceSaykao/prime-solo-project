import { Link } from 'react-router-dom';

export default function ClientDetailsAddButton({clientTwo}) {

const handleAdd = () => {
    console.log(clientTwo);
}

    console.log('we have fire!', clientTwo);
    return (
        <div>
            {/* <Link to={`/clienttimesheet/${clientTwo.client_fullname}`}> */}
            <button
            onClick={handleAdd}
            >ADD</button>
            {/* </Link> */}
        </div>
    )

}; // end of function