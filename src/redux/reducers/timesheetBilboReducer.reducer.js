const timesheetBilboReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_BILBO_TIMESHEET':
            return action.payload;
        default:
            return state;
    }
}; // end of timesheet Reducer

export default timesheetBilboReducer;