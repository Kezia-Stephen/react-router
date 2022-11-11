import { createSlice} from "@reduxjs/toolkit";

const newSlice = createSlice({
    name: 'new',
    initialState: {
        authenticated: true,
    },
    reducers: {}

});

export default newSlice.reducer;