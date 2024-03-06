import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload);
    });
});

const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({ status: false }, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true;
    });
});

const store = configureStore({
    reducer: {
        login: loginReducer,
        cart: cartReducer,
    }
});

store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
});

store.dispatch(addToCart ({id: 1, qty: 11}));
store.dispatch(addToCart ({id: 2, qty: 12}));
store.dispatch(login());