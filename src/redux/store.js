import { configureStore, createSlice } from '@reduxjs/toolkit'
import products from '../data/products.js'

let shoes = createSlice({
    name: 'shoes',
    initialState: products
})

export default configureStore({
    reducer: {
        shoes: shoes.reducer
    },
})