import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm : '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            //提示：action.payload === { name:'abc', cost:140 } 
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(), //nanoid 是 Redux內建的隨機id
            })
        },
        removeCar(state, action) {
            //提示：action.payload === 符合 id 的 cars
            const updated = state.data.filter((car) => {
                return car.id !== action.payload
            });
            state.data = updated;
        }
    }
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;