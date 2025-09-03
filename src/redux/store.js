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

let cart = createSlice({
     name: 'cart',
      initialState: [
        {id: 0, title: 'test', price: 100, count: 1}
      ],
      reducers: {
        addCart(state, action) {
            state.push(action.payload)
        }
      }
})

export let { addItem, setItem } = shoes.actions
export let {addCart} = cart.actions

export default configureStore({
    reducer: {
        shoes: shoes.reducer,
        cart: cart.reducer
    },
})