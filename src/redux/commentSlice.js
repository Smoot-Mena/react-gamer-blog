import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: ""
}

export const commentSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        
    }
});

export default commentSlice.reducer;