import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../../css/clearcarrito.css";

import {switchShowModalClear,deleteAllProduct} from '../../redux/slices/cartSlice';

class ClearCarritoModalComponent extends Component {
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.showModalClear !== this.props.showModalClear) {
            if (this.props.showModalClear === 0) {
                document.getElementById("clear-cart-modal").classList.remove("dont-show-modal-clear-carrito");
            } else if (this.props.showModalClear === 1) {
                document.getElementById("clear-cart-modal").classList.add("dont-show-modal-clear-carrito");
            }
        }
    }

    render() {
        return (
            <div className="container-clear-carrito dont-show-modal-clear-carrito" id="clear-cart-modal">
                <div className='frame-text-clear-carrito'>
                    <h3>¿Deseas limpiar el carrito de compras?</h3>
                    <button className='si-clear-carrito' onClick={()=>{
                        this.props.switchShowModalClear();
                        this.props.deleteAllProduct();
                    }}>Sí, deseo limpiar el carrito de compras</button>
                    <button className='no-clear-carrito'onClick={()=>{
                        this.props.switchShowModalClear();
                    }}>NO, no quiero limpiar el carrito de compras</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    showModalClear: state.stateShow.modalClearCart
});

const mapDispatchToProps = { switchShowModalClear, deleteAllProduct};

export default connect(mapStateToProps,mapDispatchToProps)(ClearCarritoModalComponent)