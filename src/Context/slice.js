import { createSlice} from "@reduxjs/toolkit";

const sampleSlice = createSlice({
    name: "sampleSlice",
    initialState: {
        age: 24,
        tasks: [],
        name: ""
    },
    reducers: {
        incrementAge: (state, action) => {
            state.age += 1;
        },
        addTask: (state, action) => {
            state.tasks = action.payload;
        },

    }
});


export const {incrementAge, addTask } = sampleSlice.actions;
export default sampleSlice.reducer;