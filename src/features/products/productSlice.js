import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        tittle: "prueba",
        price: 22,
        id: 1
    },
    {
        tittle: "Prueba",
        price: 22,
        id: 2
    },
];

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        removeProduct: (state, action) => {
            const productFound = state.find(product => product.id === action.payload);
            if(productFound) {
                state.splice(state.indexOf(productFound), 1);
            }
        },
        editProduct: (state, action) => {
            console.log(action.payload);
        }
    }
})

export const {addProduct, removeProduct, editProduct} = productSlice.actions;

export default productSlice.reducer