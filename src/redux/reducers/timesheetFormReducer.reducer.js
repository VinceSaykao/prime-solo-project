const timesheetFormReducer = (state = [], action) => {
    switch (action.type) {
        case 'POST_FORM':
            return action.payload;
        default:
            return state;
    }
}; // end of timesheetFormReducer