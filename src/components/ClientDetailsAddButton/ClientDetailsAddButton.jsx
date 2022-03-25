

export default function ClientDetailsAddButton({clientTwo}) {

const handleAdd = () => {
    console.log(clientTwo);
}

    return (
        <div>
            <button
            onClick={handleAdd}
            >ADD</button>
        </div>
    )

}; // end of function