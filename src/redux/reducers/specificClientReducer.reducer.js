const specificClientReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SPECIFIC_CLIENT':
            return action.payload;
        default:
            return state;
    }
}; // end of timesheet Reducer

export default specificClientReducer;