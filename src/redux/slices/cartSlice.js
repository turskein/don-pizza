import { createSlice } from "@reduxjs/toolkit";

/* 
formato de productos para la lista
{
    id: int
    desc: string
    cantidad: int|string
    ingredientes: [string,string,string]
    precio: int|string
}

*/

const prodsFromLS_String = localStorage.getItem("products");

let prodsFromLS;
let totalPrice = 0;

if(prodsFromLS_String){
    prodsFromLS = JSON.parse(prodsFromLS_String);
    for (let i = 0; i < prodsFromLS.length; i++) {
        let product = prodsFromLS[i];
        const precio = parseInt(product.precio);
        const cantidad = parseInt(product.cantidad);
        totalPrice = totalPrice + precio*cantidad;
    }
}else{
    prodsFromLS = [];
}




const initialState ={
    show: 0,
    modalClearCart: 0,
    products: prodsFromLS,
    total: totalPrice,
    idsperson: 100,
    pizzaadded: 0
}

export const cartSlice = createSlice({
    name: 'stateShow',
    initialState,
    reducers: {
        switchShow: (state) => {
            if(state.show === 0){
                state.show = 1;
            }else if(state.show === 1){
                state.show = 0;
            }
        },
        switchShowModalClear: (state) =>{
            if(state.modalClearCart === 0){
                state.modalClearCart = 1;
            }else if(state.modalClearCart === 1){
                state.modalClearCart = 0;
            }
        },
        switchShowAdded: (state) =>{
            if(state.pizzaadded === 0){
                state.pizzaadded = 1;
            }else if(state.pizzaadded === 1){
                state.pizzaadded = 0;
            }
        },
        deleteOneProduct(state, action){
            const id = action.payload;
            for (let i = 0; i < state.products.length; i++) {
                let product = state.products[i];
                // finded product
                if(id === product.id){
                    // when there are more than one product
                    if(product.cantidad > 1){
                        state.products[i].cantidad --;
                    // when there are just one product
                    state.total = state.total - product.precio;
                    }else{
                        state.products = state.products.filter((prd) => {
                            return prd !== product;
                        })
                        state.total = state.total - product.precio;
                    }
                    break;
                }
            }
            localStorage.setItem("products",JSON.stringify(state.products));
        },
        deleteAllProduct: (state) => {
            state.products = [];
            state.total = 0;
            localStorage.removeItem("products");
        },
        addProduct: (state, action) => {
            state.pizzaadded= 1;
            const newProduct = action.payload;
            state.total = state.total + parseInt(newProduct.precio);
            let pushed = 0;
            for (let i = 0; i < state.products.length; i++) {
                let product = state.products[i];
                // finded product
                if(newProduct.id === product.id){
                    pushed = 1;
                    state.products[i].cantidad ++;
                }

            }

            // if the product wasn't finded then we add it to the cart
            if(pushed === 0){
                state.products.push(newProduct);
            }
            localStorage.setItem("products",JSON.stringify(state.products));
        },
        addPersonalizedPizza: (state, action)=>{
            let precio = action.payload.precio;
            let ingredi = action.payload.ingredientes;
            let id = state.idsperson;
            let desc = "Pizza personalizada";
            state.products.push({precio:precio,desc:desc,id:id,ingredientes:ingredi,cantidad:1});
            state.idsperson ++;
            localStorage.setItem("products",JSON.stringify(state.products));
            state.total = state.total + precio;
        }
    },
})
/* 
const { actions, reducer } = cartSlice; */

export const { switchShow, addProduct, deleteAllProduct, deleteOneProduct, switchShowModalClear, addPersonalizedPizza, switchShowAdded } = cartSlice.actions;

export default cartSlice.reducer;