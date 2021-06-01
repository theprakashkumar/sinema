const LikedAndLaterReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: action.payload.id }];
        case "REMOVE":
            return state.filter((video) => video.id !== action.payload.id);
        default:
            return state;
    }
};

export default LikedAndLaterReducer;
