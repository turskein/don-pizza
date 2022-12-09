import React, { Component } from 'react';
import "../css/productforcar.css";
import { BsFillTrashFill } from "react-icons/bs";

import { connect } from 'react-redux';

import {addProduct, deleteOneProduct} from '../redux/slices/cartSlice';


class ProductForCartComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: [<p>Ningun ingrediente</p>]
        }
    }

    componentDidMount(){
        let listParragraph = [];
        if(this.state.ingredients){
            this.props.ingredientes.forEach(ingr => {
                listParragraph.push(<p>{ingr}</p>);
            });
            this.setState({
                ingredients: listParragraph
            })
        }
    }
    render() {
        return (
            <div className='container-product-cart'>

                <span className='cantidad-product-cart'>
                    {this.props.cantidad}
                </span>
                <h3 className='desc-product-cart'>{this.props.desc}</h3>
                <div className='ingredients-product-cart'>
                    {this.state.ingredients}
                </div>
                <div className='price-product-cart'>
                    <BsFillTrashFill size={25} className="trash-product-cart"/>
                    <h3>{this.props.price}</h3>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    estado: state.stateShow.show,
    products: state.stateShow.products
});

const mapDispatchToProps = { addProduct, deleteOneProduct };

export default connect(mapStateToProps, mapDispatchToProps)(ProductForCartComponent)