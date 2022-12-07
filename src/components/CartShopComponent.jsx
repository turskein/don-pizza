import React, { Component } from 'react';
import "../css/cartshop.css";
import { connect } from 'react-redux';
import ProductForCartComponent from './ProductForCartComponent';

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

    render() {
        return (
            <div className='container-cart-shop container-cart-shop-post-show' id="cart-shop">
                <h2 className='title-cart'>Resumen de tu compra :D </h2 >
                <div className='products-cart-shop'>
                    <ProductForCartComponent cantidad="3" desc="pizza con blablabla" ingredientes={["piña","pepperoni","doble queso"]}/>
                    <ProductForCartComponent cantidad="3" desc="pizza con blablabla" ingredientes={["piña","pepperoni","doble queso"]}/>
                    <ProductForCartComponent cantidad="3" desc="pizza con blablabla" ingredientes={["piña","pepperoni","doble queso"]}/>
                    <ProductForCartComponent cantidad="3" desc="pizza con blablabla" ingredientes={["piña","pepperoni","doble queso"]}/>
                    <ProductForCartComponent cantidad="3" desc="pizza con blablabla" ingredientes={["piña","pepperoni","doble queso"]}/>
                </div>
                <button className='button-finish-cart-shop'>
                    <p className='p-button-left'>Finalizar Pedido</p>
                    <p className='p-button-right'>$ {"10.000"}</p>
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    estado: state.stateShow.show
});

export default connect(mapStateToProps)(CartShopComponent)