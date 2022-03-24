const clientInfoReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CLIENT_INFO':
            return action.payload;
        default:
            return state;
    }
}; // end of timesheet Reducer

export default clientInfoReducer;