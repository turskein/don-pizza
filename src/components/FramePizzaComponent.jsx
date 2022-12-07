import React, { Component } from 'react';
import "../css/framepizza.css";


class FramePizzaComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: [<p>Ningun ingrediente</p>]
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



                    <button className='button-frame'>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        )
    }
}

export default FramePizzaComponent