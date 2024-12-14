import { createSlice } from "@reduxjs/toolkit";
import blogs from "../api/blogData.json";

const initialState = blogs;

export const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        
    }
});

export const {  } = blogsSlice.actions;

export default blogsSlice.reducer;