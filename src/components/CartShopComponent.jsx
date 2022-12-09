import React, { Component } from 'react';
import "../css/cartshop.css";
import { connect } from 'react-redux';
import ProductForCartComponent from './ProductForCartComponent';

import {switchShowModalClear} from '../redux/slices/cartSlice';

class CartShopComponent extends Component {

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.estado !== this.props.estado) {
            if (this.props.estado === 1) {
                document.getElementById("cart-shop").classList.add("container-cart-shop-post-show");
            } else if (this.props.estado === 0) {
                document.getElementById("cart-shop").classList.remove("container-cart-shop-post-show");
            }
        }
    }

    /* <div className='container-cart-shop container-cart-shop-post-show' id="cart-shop"> */
    render() {
        let jaja = this.props.products.map((prd) => {
            return <ProductForCartComponent id={prd.id} cantidad={prd.cantidad} desc={prd.desc} ingredientes={prd.ingredientes} price={prd.precio} />
        });
        if(jaja.length === 0){
            jaja = <p className='empty-cart'>Aún no has comprado nada D:</p>
        }
        return (

            <div className='container-cart-shop container-cart-shop-post-show' id="cart-shop">
                <h2 className='title-cart'>Resumen de tu compra :D </h2 >
                <div className='products-cart-shop'>
                    {jaja}
                </div>
                <div className='foot-cart'>
                    <button className='clear-cart-shop' onClick={()=>this.props.switchShowModalClear()}>
                        Limpiar 
                        {"\nCarrito :("}
                    </button>
                    <button className='button-finish-cart-shop'>
                        <p className='p-button-left'>Finalizar Pedido</p>
                        <p className='p-button-right'>$ {this.props.totalPrice}</p>
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    estado: state.stateShow.show,
    totalPrice: state.stateShow.total,
    products: state.stateShow.products
});

const mapDispatchToProps = { switchShowModalClear };

export default connect(mapStateToProps, mapDispatchToProps)(CartShopComponent)