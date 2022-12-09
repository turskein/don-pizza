import React, { Component } from 'react';
import { connect } from 'react-redux';

import {addProduct} from '../redux/slices/cartSlice';

class FrameBebidaComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formal_prod: {
                id: this.props.id,
                desc: this.props.name,
                cantidad: 1,
                ingredientes: this.props.ingredients,
                precio: this.props.precio
            }
        }
    }

    render() {
        return (
            <div className='container-frame-bedida'>
                <div>
                    <img srcSet={this.props.image} alt="" className='frame-bebida-image' />
                </div>

                <div className='cont-desc-frame-bebida'>
                    <span className='tittle-frame-bebida'>{this.props.name}</span>
                    <span className='precio-frame-bebida'>${this.props.precio}</span>
                    <button className='add-cart-frame-bebida' onClick={() => this.props.addProduct(this.state.formal_prod)}>Agregar</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    estado: state.stateShow.show,
    products: state.stateShow.products
});

const mapDispatchToProps = { addProduct };

export default connect(mapStateToProps,mapDispatchToProps)(FrameBebidaComponent)