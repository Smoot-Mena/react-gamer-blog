import { configureStore } from "@reduxjs/toolkit";

import commentReducer from "./commentSlice";
import blogsReducer from "./blogsSlice";

export const store = configureStore({
    reducer: {
        comment: commentReducer,
        blogs: blogsReducer,
    }
})