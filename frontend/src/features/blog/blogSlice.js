import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import blogService from "./blogService";

const initialState = {
    blogs: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const getBlogs = createAsyncThunk("blog/get-blogs", async (thunkAPI) => {
    try {
        return await blogService.getBlogs();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
export const getBlog = createAsyncThunk(
    "blog/get-blog",
    async (id, thunkAPI) => {
        try {
            return await blogService.getBlog(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const resetState = createAction("Reset-all");

const productSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBlogs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = action.error;
            })
            .addCase(getBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.blogs = action.payload;
            })
            .addCase(getBlog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = action.error;
            })
            .addCase(getBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.singleBlog = action.payload;
            })
            .addCase(resetState, () => initialState);
    },
});

export default productSlice.reducer;
