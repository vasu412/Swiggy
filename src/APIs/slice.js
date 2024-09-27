import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((x) => x !== action.payload);
    },
    updateItem: (state, action) => {
      state.items.map((x) => {
        if (x.name === action.payload.name) x.count = action.payload.count;

        if (action.payload.count === 0) {
          state.items = state.items.filter(
            (x) => x.name !== action.payload.name
          );
        }
      });
    },
    decreaseCount: (state, action) => {
      const item = state.items.find((x) => x.name === action.payload);

      if (item) {
        if (item.count > 0) item.count -= 1;

        if (item.count === 0) {
          state.items = state.items.filter((x) => x.name !== action.payload);
        }
      }
    },

    increaseCount: (state, action) => {
      const item = state.items.find((x) => x.name === action.payload);
      item.count += 1;
    },
  },
});

export const { addItem, removeItem, updateItem, decreaseCount, increaseCount } =
  cartSlice.actions;
export default cartSlice.reducer;
