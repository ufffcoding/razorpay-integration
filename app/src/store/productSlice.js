import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      productId: "1",
      title: "T-Shirt",
      color: "Black",
      amount: "699",
      image:
        "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      productId: "2",
      title: "Shirt",
      color: "Blue",
      amount: "799",
      image:
        "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      productId: "3",
      title: "Jeans",
      color: "Blue",
      amount: "1199",
      image:
        "https://images.pexels.com/photos/2009824/pexels-photo-2009824.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      productId: "4",
      title: "Jogger",
      color: "Black",
      amount: "999",
      image:
        "https://images.pexels.com/photos/9713297/pexels-photo-9713297.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },
    emptyProducts: (state) => {
      state.products = null;
    },
  },
});

export const { setProducts, emptyProducts } = productSlice.actions;

export default productSlice.reducer;
