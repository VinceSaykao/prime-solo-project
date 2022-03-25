const timesheetClientUpdateFormTimesheetReducer = (state = {
    id: '',
    date: '',
    client_name: '',
    client_id: '',
    in: '',
    out: '',
    mileage: '',
    notes: ''
},action) => {
    switch (action.type) {
        case 'SET_CLIENT_UPDATE_TIMESHEET':
            console.log('This client-timesheet update in reducer is:', action.payload);
            return {...state,
                id: action.payload.id,
                to_char: action.payload.to_char,
                client_name: action.payload.client_name,
                client_id: action.payload.client_id,
                in: action.payload.in,
                out: action.payload.out,
                mileage: action.payload.mileage,
                notes: action.payload.notes,
            }
            default:
                return state;
    }
}

export default timesheetClientUpdateFormTimesheetReducer;