import { configureStore, createSlice } from '@reduxjs/toolkit'
import products from '../data/products.js'

let shoes = createSlice({
    name: 'shoes',
    initialState: products,
    reducers: {
        addItem(state, action) {
            let copy = [...state, ...action.payload]
            return copy
        },
        setItem(state, action) {
            return action.payload
        }
    }
})

export let { addItem, setItem } = shoes.actions

export default configureStore({
    reducer: {
        shoes: shoes.reducer
    },
})