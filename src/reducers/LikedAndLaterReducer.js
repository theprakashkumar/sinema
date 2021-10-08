const LikedAndLaterReducer = (state, action) => {
    switch (action.type) {
        case "SYNC":
            return [...action.payload];
        case "ADD":
            return [...state, action.payload.video];
        case "REMOVE":
            return state.filter((video) => video.id !== action.payload.id);
        case "RESET":
            return [];
        default:
            return state;
    }
};

export default LikedAndLaterReducer;
