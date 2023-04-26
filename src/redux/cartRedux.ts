import { createSlice } from "@reduxjs/toolkit";
import { ICart } from "../utils/interfaces/interface.dto";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  } as ICart,
  reducers: {
    addProducts: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});


export const CartItems = (state: { cart: ICart }) => state.cart;

export const { addProducts } = cartSlice.actions;
export default cartSlice.reducer;
