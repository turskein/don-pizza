import React, { Component } from 'react';
import "../css/productforcar.css";
import { connect } from 'react-redux';


class ProductForCartComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: []
        }
    }

    componentDidMount(){
        let listParragraph = [<p>Ningun ingrediente</p>];

        this.props.ingredientes.forEach(ingr => {
            listParragraph.push(<p>{ingr}</p>);
        });
        this.setState({
            ingredients: listParragraph
        })

    }
    render() {
        return (
            <div className='container-product-cart'>

                <span className='cantidad-product-cart'>
                    {this.props.cantidad}
                </span>
                <h3 className='desc-product-cart'>{this.props.desc}</h3>
                <div className='ingredients-product-cart'>
                    <h4>Ingredientes</h4>
                    {this.state.ingredients}
                </div>
                
            </div>
        )
    }
}

export default ProductForCartComponent