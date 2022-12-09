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
        console.log(totalPrice);
        const precio = parseInt(product.precio);
        totalPrice = totalPrice + precio;
    }
}else{
    prodsFromLS = [];
}




const initialState ={
    show: 0,
    modalClearCart: 0,
    products: prodsFromLS,
    total: totalPrice
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
                    }else{
                        state.products = state.products.filter((prd) => {
                            return prd !== product;
                        })
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
        }
    },
})
/* 
const { actions, reducer } = cartSlice; */

export const { switchShow, addProduct, deleteAllProduct, deleteOneProduct, switchShowModalClear } = cartSlice.actions;

export default cartSlice.reducer;