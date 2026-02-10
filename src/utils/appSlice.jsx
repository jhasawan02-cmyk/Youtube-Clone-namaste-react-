import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        commentCount: 0, 
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        setCommentCount: (state, action) => {
            state.commentCount = action.payload;
        },
    },
});

export const { toggleMenu, closeMenu, setCommentCount } = appSlice.actions;
export default appSlice.reducer;