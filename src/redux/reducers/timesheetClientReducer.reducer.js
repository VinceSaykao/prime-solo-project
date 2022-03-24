const clientInfoReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CLIENT_SHEET':
            return action.payload;
        default:
            return state;
    }
}; // end of timesheet Reducer

export default clientInfoReducer;