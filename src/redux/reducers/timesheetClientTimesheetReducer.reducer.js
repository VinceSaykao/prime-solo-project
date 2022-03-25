const timesheetClientReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CLIENT_TIMESHEET':
            return action.payload;
        default:
            return state;
    }
}; // end of timesheet Reducer

export default timesheetClientReducer;