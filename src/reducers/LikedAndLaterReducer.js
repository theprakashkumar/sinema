const LikedAndLaterReducer = (state, action) => {
    switch (action.type) {
        case "SYNC":
            return [...action.payload.video];
        case "ADD":
            return [...state, { id: action.payload.video }];
        case "REMOVE":
            return state.filter((video) => video.id !== action.payload.id);
        default:
            return state;
    }
};

export default LikedAndLaterReducer;
