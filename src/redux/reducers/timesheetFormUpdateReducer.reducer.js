const timesheetFormUpdateReducer = (state = {
    id: '',
    date: '',
    client_name: '',
    in: '',
    out: '',
    mileage: '',
    notes: ''
},action) => {
    switch (action.type) {
        case 'SET_UPDATE_TIMESHEET':
            console.log('This book is:', action.payload);
            return {...state,
                id: action.payload.id,
                to_char: action.payload.to_char,
                client_name: action.payload.client_name,
                in: action.payload.in,
                out: action.payload.out,
                mileage: action.payload.mileage,
                notes: action.payload.notes,
            }
            default:
                return state;
    }
}

export default timesheetFormUpdateReducer;