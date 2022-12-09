import React, { Component } from 'react';
import { connect } from 'react-redux';
import PizzasCatalogoComponent from './PizzasCatalogoComponent';
import BebidasComponent from './BebidasComponent';
import AgregadosCatalogoComponent from './AgregadosCatalogoComponent';
import "../css/catalogo.css";

class CartShopComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            opcion: 1
        }
    }

    render() {
        let renderOpcion;
        if(this.state.opcion === 1){
            renderOpcion = <BebidasComponent/>
        }else if(this.state.opcion === 0){
            renderOpcion = <PizzasCatalogoComponent/>
        }else{
            renderOpcion = <AgregadosCatalogoComponent/>
        }
        let classForCatalogContainer;
        if(this.props.estado === 0){
            classForCatalogContainer = "container-catalogo";
        }else{
            classForCatalogContainer="container-catalogo-post-show";
        }
        return (
            <div className={classForCatalogContainer}>
                <table className='table-links-catalogo'>
                    <thead>
                        <td onClick={()=>{this.setState({opcion:0})}}>Pizzas</td>
                        <td onClick={()=>{this.setState({opcion:1})}}>Bebidas</td>
                        <td onClick={()=>{this.setState({opcion:2})}}>Agregados</td>
                    </thead>
                </table>
                {renderOpcion}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    estado: state.stateShow.show,
    products: state.stateShow.products
});

export default connect(mapStateToProps)(CartShopComponent)