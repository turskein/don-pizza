import React, { Component } from 'react';
import "../css/framepizza.css";
import { connect } from 'react-redux';

import {addProduct} from '../redux/slices/cartSlice';


class FramePizzaComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: [<p>Ningun ingrediente</p>],
            formal_prod: {
                id: this.props.id,
                desc: this.props.name,
                cantidad: 1,
                ingredientes: this.props.ingredients,
                precio: this.props.med
            }
        }
    }
    componentDidMount() {
        let listIngr = [];
        this.props.ingredients.forEach(ingr => {
            listIngr.push(<li>{ingr}</li>);
        });
        this.setState({
            ingredients: listIngr
        })
    }



    render() {
        return (
            <div className='container-frame'>
                <div className='div-image'>
                    <img srcSet={this.props.image} alt="" className='image-frame' />
                </div>
                <div className='div-infor-frame'>
                    <h5 className='title-frame'>{this.props.name}</h5>
                    <ul className='ingredientes-frame'>
                        {
                            this.state.ingredients
                        }
                    </ul>
                    <table className='table-frame-pizza'>
                        <tbody>
                            <tr>
                                <td>Mediana</td>
                                <td className='table-price'>{this.props.med}</td>
                            </tr>
                            <tr>
                                <td>Grande</td>
                                <td className='table-price'>{this.props.grande}</td>
                            </tr>
                        </tbody>
                    </table>



                    <button className='button-frame' onClick={() => this.props.addProduct(this.state.formal_prod)}>
                        Agregar al carrito
                    </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(FramePizzaComponent)