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
        // { id: 12345, title: 'test', count: 1, totalPrice: 100, price: 100 }
    ],
    reducers: {
        addCart(state, action) {
            let idx = state.findIndex(a => a.id == action.payload.id)
            if (idx == -1) {
                state.push(action.payload)
            } else {
                state[idx].count += 1
            }
        },
        countUp(state, action) {
            let idx = state.findIndex(a => a.id == action.payload)
            state[idx].count += 1
            state[idx].totalPrice += state[idx].price
        },
        countDown(state, action) {
            let idx = state.findIndex(a => a.id == action.payload)
            if (state[idx].count > 1) {
                state[idx].count -= 1
                state[idx].totalPrice -= state[idx].price
            }
        },
        subtractCart(state, action) {
            let idx = state.findIndex(a => a.id == action.payload)
            state.splice(idx, 1)
        }

    }
})

let wishlist = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addWishItem(state, action) {
            let idx = state.findIndex(a => a.id == action.payload.id)
            if (idx == -1) {
                state.push(action.payload)
            }
        }
    }
})

export let { addItem, setItem } = shoes.actions
export let { addCart, countUp, countDown, subtractCart } = cart.actions
export let { addWishItem } = wishlist.actions

export default configureStore({
    reducer: {
        shoes: shoes.reducer,
        cart: cart.reducer,
        wishlist: wishlist.reducer
    },
})