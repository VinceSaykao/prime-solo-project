const timesheetReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TIMESHEET':
            return action.payload;
        default:
            return state;
    }
}; // end of timesheet Reducer

export default timesheetReducer;